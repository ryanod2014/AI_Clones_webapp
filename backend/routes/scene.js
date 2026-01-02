const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const { generateMockScene } = require('../utils/mockData');
const { generateSceneWithKie } = require('../utils/apiClients');

const router = express.Router();

// Temp uploads directory
const TEMP_UPLOADS_DIR = path.join(__dirname, '..', 'temp-uploads');

// Configure multer for memory storage
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024 // 10MB limit
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed'), false);
    }
  }
});

// Helper: Upload image to catbox.moe for public URL (free anonymous file hosting)
const uploadToPublicHost = async (buffer, mimetype) => {
  const FormData = require('form-data');
  const axios = require('axios');
  
  const ext = mimetype === 'image/png' ? '.png' : mimetype === 'image/gif' ? '.gif' : '.jpg';
  
  try {
    const formData = new FormData();
    formData.append('reqtype', 'fileupload');
    formData.append('fileToUpload', buffer, {
      filename: `image${ext}`,
      contentType: mimetype
    });
    
    // catbox.moe is a free, anonymous file hosting service
    const response = await axios.post('https://catbox.moe/user/api.php', formData, {
      headers: formData.getHeaders(),
      timeout: 60000
    });
    
    // catbox.moe returns the URL as plain text
    if (response.data && typeof response.data === 'string' && response.data.startsWith('http')) {
      const imageUrl = response.data.trim();
      console.log('[Scene] Uploaded to catbox.moe:', imageUrl);
      return imageUrl;
    }
  } catch (error) {
    console.error('[Scene] catbox.moe upload failed:', error.message);
  }
  
  return null;
};

// Helper: Save buffer to temp file and return URL (local fallback)
const saveTempImage = (buffer, mimetype, baseUrl) => {
  const ext = mimetype === 'image/png' ? '.png' : mimetype === 'image/gif' ? '.gif' : '.jpg';
  const filename = `ref-${uuidv4()}${ext}`;
  const filepath = path.join(TEMP_UPLOADS_DIR, filename);
  
  fs.writeFileSync(filepath, buffer);
  console.log('[Scene] Saved temp reference image:', filepath);
  
  // Return the public URL
  return `${baseUrl}/temp-uploads/${filename}`;
};

// Helper: Clean up old temp files (older than 1 hour)
const cleanupTempFiles = () => {
  try {
    if (!fs.existsSync(TEMP_UPLOADS_DIR)) return;
    
    const files = fs.readdirSync(TEMP_UPLOADS_DIR);
    const oneHourAgo = Date.now() - (60 * 60 * 1000);
    
    files.forEach(file => {
      const filepath = path.join(TEMP_UPLOADS_DIR, file);
      const stats = fs.statSync(filepath);
      if (stats.mtimeMs < oneHourAgo) {
        fs.unlinkSync(filepath);
        console.log('[Scene] Cleaned up old temp file:', filepath);
      }
    });
  } catch (err) {
    console.error('[Scene] Cleanup error:', err.message);
  }
};

// Run cleanup every 30 minutes
setInterval(cleanupTempFiles, 30 * 60 * 1000);

// Default reference image URL (hosted on catbox after initial generation)
const DEFAULT_REFERENCE_URL = 'https://files.catbox.moe/vc80ln.png';

/**
 * POST /api/scene/generate
 * Generate a new scene image using Kie.ai NanoBanana or mock
 */
router.post('/generate', upload.single('referenceImage'), async (req, res, next) => {
  try {
    const { prompt, orientation = 'vertical', useDefaultReference } = req.body;
    const kieApiKey = req.headers['x-kie-api-key'] || req.body.kieApiKey;

    // Validation
    if (!prompt || prompt.trim().length === 0) {
      return res.status(400).json({
        error: {
          message: 'Prompt is required',
          code: 'VALIDATION_ERROR'
        }
      });
    }

    if (!['vertical', 'horizontal'].includes(orientation)) {
      return res.status(400).json({
        error: {
          message: 'Orientation must be "vertical" or "horizontal"',
          code: 'VALIDATION_ERROR'
        }
      });
    }

    let result;

    // Use real API if key is provided, otherwise fall back to mock
    if (!kieApiKey) {
      // Use mock data when no API key
      console.log('[Scene] No API key provided, using mock mode');
      result = await generateMockScene(prompt, orientation);
    } else {
      // Use real Kie.ai API
      console.log('[Scene] Using Kie.ai API');

      // Reference image handling
      const hasReferenceImage = !!req.file;
      const usingDefault = useDefaultReference === 'true' || useDefaultReference === true;
      console.log('[Scene] Reference image:', hasReferenceImage ? 'provided' : 'not provided');
      console.log('[Scene] Using default reference:', usingDefault);

      // Determine reference image URL
      let referenceImageUrl = null;

      if (usingDefault && !hasReferenceImage) {
        // Use the default reference image URL
        referenceImageUrl = DEFAULT_REFERENCE_URL;
        console.log('[Scene] Using default reference image:', referenceImageUrl);
      } else if (hasReferenceImage) {
        console.log('[Scene] Uploading custom reference image to get public URL...');

        // Upload to public hosting service
        referenceImageUrl = await uploadToPublicHost(req.file.buffer, req.file.mimetype);

        if (referenceImageUrl) {
          console.log('[Scene] Reference image uploaded successfully:', referenceImageUrl);
        } else {
          // Fallback to local temp storage (won't work for external APIs)
          console.log('[Scene] WARNING: Public upload failed, using local URL (will not work with Kie.ai)');
          const protocol = req.protocol;
          const host = req.get('host');
          const baseUrl = `${protocol}://${host}`;
          referenceImageUrl = saveTempImage(req.file.buffer, req.file.mimetype, baseUrl);
        }
      }
      
      try {
        const kieResult = await generateSceneWithKie(
          kieApiKey,
          referenceImageUrl,  // Pass URL instead of buffer
          prompt,
          orientation
        );
        
        console.log('[Scene] Kie.ai API response:', JSON.stringify(kieResult).substring(0, 500));
        
        // Handle Jobs API response format
        // Jobs API returns: { code: 200, msg: "success", data: { taskId: "..." } }
        // Then we need to poll for the result
        if ((kieResult.code === 0 || kieResult.code === 200) && kieResult.data?.taskId) {
          // Poll for result
          const { checkKieVideoStatus } = require('../utils/apiClients');
          let attempts = 0;
          const maxAttempts = 60; // 2 minutes max
          
          console.log('[Scene] Polling for task:', kieResult.data.taskId);
          
          while (attempts < maxAttempts) {
            await new Promise(resolve => setTimeout(resolve, 2000)); // Wait 2 seconds
            
            try {
              const statusResult = await checkKieVideoStatus(kieApiKey, kieResult.data.taskId);
              console.log('[Scene] Poll attempt', attempts + 1, '- Full response:', JSON.stringify(statusResult));
              
              if ((statusResult.code === 0 || statusResult.code === 200) && statusResult.data) {
                // Kie.ai uses 'state' not 'status' for the task state
                const state = statusResult.data.state || statusResult.data.status;
                
                if (state === 'completed' || state === 'success' || state === 'done') {
                  // Extract image URL from resultJson (Kie.ai format)
                  let imageUrl = null;
                  
                  // Try to parse resultJson if it exists (Kie.ai returns this as a JSON string)
                  if (statusResult.data.resultJson) {
                    try {
                      const resultData = JSON.parse(statusResult.data.resultJson);
                      if (resultData.resultUrls && resultData.resultUrls.length > 0) {
                        imageUrl = resultData.resultUrls[0];
                      } else if (resultData.url) {
                        imageUrl = resultData.url;
                      } else if (resultData.image_url) {
                        imageUrl = resultData.image_url;
                      }
                    } catch (parseError) {
                      console.log('[Scene] Failed to parse resultJson:', parseError.message);
                    }
                  }
                  
                  // Fallback to other possible fields
                  if (!imageUrl) {
                    const output = statusResult.data.output || statusResult.data.result || statusResult.data.fileUrl || statusResult.data.imageUrl;
                    if (typeof output === 'string') {
                      imageUrl = output;
                    } else if (output?.image_url) {
                      imageUrl = output.image_url;
                    } else if (output?.url) {
                      imageUrl = output.url;
                    } else if (Array.isArray(output) && output[0]) {
                      imageUrl = typeof output[0] === 'string' ? output[0] : output[0].url || output[0].image_url;
                    }
                  }
                  
                  if (imageUrl) {
                    result = {
                      imageUrl,
                      prompt,
                      orientation,
                      generatedAt: new Date().toISOString()
                    };
                    console.log('[Scene] Generation completed! Image URL:', imageUrl);
                    break;
                  }
                } else if (state === 'failed' || state === 'error') {
                  throw new Error('Image generation failed: ' + (statusResult.data.failMsg || statusResult.data.error || 'Unknown error'));
                }
              }
            } catch (pollError) {
              console.error('[Scene] Poll error:', pollError.message);
              // Continue polling on transient errors
            }
            attempts++;
          }
          
          if (!result) {
            throw new Error('Image generation timed out after 2 minutes');
          }
        } else if (kieResult.image_url || kieResult.url || kieResult.data?.image_url) {
          // Direct response format (synchronous API)
          result = {
            imageUrl: kieResult.image_url || kieResult.url || kieResult.data?.image_url,
            prompt,
            orientation,
            generatedAt: new Date().toISOString()
          };
        } else {
          // API returned unexpected format - log and fall back to mock
          console.error('[Scene] Unexpected API response format:', JSON.stringify(kieResult));
          throw new Error('Kie.ai API returned unexpected format: ' + (kieResult.msg || JSON.stringify(kieResult)));
        }
      } catch (apiError) {
        console.error('[Scene] Kie.ai API error:', apiError.message);
        console.log('[Scene] Falling back to mock mode');
        // Fall back to mock mode if API fails
        result = await generateMockScene(prompt, orientation);
      }
    }
    
    res.json({
      success: true,
      data: {
        id: uuidv4(),
        ...result
      }
    });
    
  } catch (error) {
    console.error('[Scene] Generation error:', error.message);
    
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

module.exports = router;

