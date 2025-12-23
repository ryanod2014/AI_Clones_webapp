const express = require('express');
const { startMockVideoGeneration, checkMockVideoStatus } = require('../utils/mockData');
const { generateVideoWithKie, checkKieVideoStatus } = require('../utils/apiClients');

const router = express.Router();

// Store job info for mapping mock jobs to real jobs
const jobRegistry = new Map();

/**
 * POST /api/video/generate
 * Start video generation with scene image and audio
 */
router.post('/generate', async (req, res, next) => {
  try {
    const { sceneImageUrl, audioUrl } = req.body;
    const kieApiKey = req.headers['x-kie-api-key'] || req.body.kieApiKey;
    
    // Validation
    if (!sceneImageUrl) {
      return res.status(400).json({
        error: {
          message: 'Scene image URL is required',
          code: 'VALIDATION_ERROR'
        }
      });
    }
    
    if (!audioUrl) {
      return res.status(400).json({
        error: {
          message: 'Audio URL is required',
          code: 'VALIDATION_ERROR'
        }
      });
    }
    
    let result;
    
    // Use real API if key is provided, otherwise fall back to mock
    if (!kieApiKey) {
      // Use mock video generation when no API key
      console.log('[Video] No API key provided, using mock generation');
      result = await startMockVideoGeneration(sceneImageUrl, audioUrl);
      
      jobRegistry.set(result.jobId, {
        type: 'mock',
        startedAt: new Date().toISOString()
      });
    } else {
      // Use real Kie.ai API
      console.log('[Video] Starting generation with Kie.ai InfiniteTalk');
      
      const kieResult = await generateVideoWithKie(kieApiKey, sceneImageUrl, audioUrl);
      
      // Jobs API returns: { code: 0, data: { taskId: "..." } }
      const taskId = kieResult.data?.taskId || kieResult.job_id || kieResult.id;
      
      if (!taskId) {
        throw new Error('Failed to start video generation: No task ID returned');
      }
      
      result = {
        jobId: taskId
      };
      
      jobRegistry.set(result.jobId, {
        type: 'kie',
        apiKey: kieApiKey,
        startedAt: new Date().toISOString()
      });
    }
    
    res.json({
      success: true,
      data: {
        jobId: result.jobId,
        status: 'processing',
        message: 'Video generation started'
      }
    });
    
  } catch (error) {
    console.error('[Video] Generation error:', error.message);
    
    // Check for permission/access errors
    if (error.message?.includes('access permission') || error.message?.includes('does not have access')) {
      return res.status(403).json({
        error: {
          message: error.message,
          code: 'ACCESS_DENIED',
          hint: 'Your Kie.ai API key needs access to lip sync/video models. Check your Kie.ai account settings.'
        }
      });
    }
    
    if (error.response?.status === 401) {
      return res.status(401).json({
        error: {
          message: 'Invalid Kie.ai API key',
          code: 'AUTH_ERROR'
        }
      });
    }
    
    if (error.response?.status === 429) {
      return res.status(429).json({
        error: {
          message: 'Rate limit exceeded. Please try again later.',
          code: 'RATE_LIMIT'
        }
      });
    }
    
    next(error);
  }
});

/**
 * GET /api/video/status/:jobId
 * Check video generation status
 */
router.get('/status/:jobId', async (req, res, next) => {
  try {
    const { jobId } = req.params;
    const kieApiKey = req.headers['x-kie-api-key'];
    
    const jobInfo = jobRegistry.get(jobId);
    
    if (!jobInfo) {
      return res.status(404).json({
        error: {
          message: 'Job not found',
          code: 'NOT_FOUND'
        }
      });
    }
    
    let result;
    
    if (jobInfo.type === 'mock') {
      // Check mock job status
      result = checkMockVideoStatus(jobId);
    } else {
      // Check real Kie.ai job status
      const apiKey = kieApiKey || jobInfo.apiKey;
      
      if (!apiKey) {
        return res.status(401).json({
          error: {
            message: 'API key required to check job status',
            code: 'AUTH_ERROR'
          }
        });
      }
      
      const kieResult = await checkKieVideoStatus(apiKey, jobId);
      
      // Handle Jobs API response: { code: 0, data: { status, output: { video_url } } }
      const data = kieResult.data || kieResult;
      
      result = {
        status: data.status || (data.output ? 'completed' : 'processing'),
        progress: data.progress || 0,
        videoUrl: data.output?.video_url || data.output?.url || data.video_url || data.output_url || null
      };
    }
    
    // Clean up completed jobs after returning result
    if (result.status === 'completed' || result.status === 'failed') {
      setTimeout(() => {
        jobRegistry.delete(jobId);
      }, 5 * 60 * 1000); // Keep for 5 minutes after completion
    }
    
    res.json({
      success: true,
      data: {
        jobId,
        ...result
      }
    });
    
  } catch (error) {
    console.error('[Video] Status check error:', error.message);
    next(error);
  }
});

module.exports = router;

