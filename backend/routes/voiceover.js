const express = require('express');
const { mockVoices, generateMockVoiceover } = require('../utils/mockData');
const { listElevenLabsVoices, generateSpeechWithElevenLabs } = require('../utils/apiClients');

const router = express.Router();

/**
 * GET /api/voiceover/voices
 * List available voice clones
 */
router.get('/voices', async (req, res, next) => {
  try {
    const elevenLabsApiKey = req.headers['x-elevenlabs-api-key'];
    
    let voices;
    
    // Use real API if key is provided, otherwise fall back to mock
    if (!elevenLabsApiKey) {
      // Use mock voices when no API key
      console.log('[Voiceover] No API key provided, using mock voices');
      voices = mockVoices;
    } else {
      // Use real ElevenLabs API
      console.log('[Voiceover] Fetching voices from ElevenLabs');
      voices = await listElevenLabsVoices(elevenLabsApiKey);
    }
    
    res.json({
      success: true,
      data: {
        voices
      }
    });
    
  } catch (error) {
    console.error('[Voiceover] List voices error:', error.message);
    
    if (error.response?.status === 401) {
      return res.status(401).json({
        error: {
          message: 'Invalid ElevenLabs API key',
          code: 'AUTH_ERROR'
        }
      });
    }
    
    next(error);
  }
});

/**
 * POST /api/voiceover/generate
 * Generate voiceover from script
 */
router.post('/generate', async (req, res, next) => {
  try {
    const { script, voiceId } = req.body;
    const elevenLabsApiKey = req.headers['x-elevenlabs-api-key'] || req.body.elevenLabsApiKey;
    
    // Validation
    if (!script || script.trim().length === 0) {
      return res.status(400).json({
        error: {
          message: 'Script is required',
          code: 'VALIDATION_ERROR'
        }
      });
    }
    
    if (!voiceId) {
      return res.status(400).json({
        error: {
          message: 'Voice ID is required',
          code: 'VALIDATION_ERROR'
        }
      });
    }
    
    // Character limit check (ElevenLabs has limits)
    if (script.length > 5000) {
      return res.status(400).json({
        error: {
          message: 'Script exceeds 5000 character limit',
          code: 'VALIDATION_ERROR'
        }
      });
    }
    
    let result;
    
    // Use real API if key is provided, otherwise fall back to mock
    if (!elevenLabsApiKey) {
      // Use mock voiceover when no API key
      console.log('[Voiceover] No API key provided, using mock generation');
      result = await generateMockVoiceover(script, voiceId);
      
      res.json({
        success: true,
        data: result
      });
    } else {
      // Use real ElevenLabs API
      console.log('[Voiceover] Generating with ElevenLabs');
      
      const { audioBuffer, contentType } = await generateSpeechWithElevenLabs(
        elevenLabsApiKey,
        voiceId,
        script
      );
      
      // Return audio as base64 for client to handle
      const base64Audio = audioBuffer.toString('base64');
      
      res.json({
        success: true,
        data: {
          audioData: base64Audio,
          contentType,
          voiceId,
          characterCount: script.length,
          generatedAt: new Date().toISOString()
        }
      });
    }
    
  } catch (error) {
    console.error('[Voiceover] Generation error:', error.message);
    
    if (error.response?.status === 401) {
      return res.status(401).json({
        error: {
          message: 'Invalid ElevenLabs API key',
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

module.exports = router;

