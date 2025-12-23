# Kie.ai API Research

## Overview

Kie.ai provides developer-friendly APIs for AI-powered image and video generation. The platform offers access to advanced models including:

- **NanoBanana** - Image generation and editing (powered by Gemini 2.5 Flash)
- **InfiniteTalk** - Talking avatar video generation (powered by MeiGen-AI)

## API Base URL

```
https://api.kie.ai
```

## Authentication

All API requests require an API key passed in the Authorization header:

```
Authorization: Bearer YOUR_API_KEY
```

Get your API key from: https://kie.ai/market (API Keys section)

---

## Unified Jobs API (Recommended)

Kie.ai uses a unified Jobs API for all models. This is the recommended approach:

### Create Task Endpoint

```
POST /api/v1/jobs/createTask
```

### Check Status Endpoint

```
GET /api/v1/jobs/recordInfo?taskId={taskId}
```

### Example: NanoBanana Image Generation

```bash
# Create task
curl -X POST https://api.kie.ai/api/v1/jobs/createTask \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "nano-banana",
    "input": {
      "prompt": "A golden banana floating in space with stars",
      "output_format": "PNG",
      "image_size": "1:1"
    }
  }'

# Check status
curl -X GET "https://api.kie.ai/api/v1/jobs/recordInfo?taskId=YOUR_TASK_ID" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

### Example: InfiniteTalk Video Generation

```bash
# Create task
curl -X POST https://api.kie.ai/api/v1/jobs/createTask \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "infinitalk",
    "input": {
      "image_url": "https://example.com/avatar.jpg",
      "audio_url": "https://example.com/voiceover.mp3",
      "prompt": "A person speaking naturally",
      "resolution": "480p"
    }
  }'
```

---

## NanoBanana API (Image Generation)

### Endpoint (Legacy)

```
POST /v1/images/generate
```

### Description

Generate or edit images using the NanoBanana model. Supports:
- Text-to-image generation
- Image-to-image transformation
- Reference-based generation
- Background replacement

### Request Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `prompt` | string | Yes | Description of the desired image |
| `image` | file | No | Reference image for transformations |
| `orientation` | string | No | `vertical` (9:16) or `horizontal` (16:9) |
| `model` | string | No | Model to use (default: `nanobanana`) |
| `style` | string | No | Style preset (e.g., `photorealistic`, `artistic`) |

### Example Request

```bash
curl -X POST https://api.kie.ai/v1/images/generate \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -F "prompt=Professional person in modern office, blue blazer, natural lighting" \
  -F "orientation=vertical" \
  -F "image=@reference.jpg"
```

### Response

```json
{
  "success": true,
  "image_url": "https://storage.kie.ai/generated/abc123.jpg",
  "metadata": {
    "width": 512,
    "height": 768,
    "model": "nanobanana",
    "generation_time_ms": 2500
  }
}
```

### Rate Limits

- Free tier: 50 requests/day
- Pro tier: 1000 requests/day
- Enterprise: Unlimited

---

## InfiniteTalk API (Video Generation)

### Recommended: Use Unified Jobs API

See "Unified Jobs API" section above for the recommended approach.

### Legacy Endpoint

```
POST /v1/infinitetalk/generate
```

### Description

Create talking avatar videos by combining:
- A static image (scene/avatar)
- Audio file (voiceover)

The API produces natural lip-synced videos with expressive facial movements.

### Request Parameters (Jobs API)

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `image_url` | string | Yes | URL of the scene/avatar image |
| `audio_url` | string | Yes | URL of the audio file |
| `prompt` | string | Yes | Description of the talking avatar |
| `resolution` | string | No | `480p` or `720p` (default: `480p`) |
| `seed` | number | No | Random seed for reproducibility (10000-1000000) |

### Example Request (Jobs API - Recommended)

```bash
curl -X POST https://api.kie.ai/api/v1/jobs/createTask \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "infinitalk",
    "input": {
      "image_url": "https://example.com/avatar.jpg",
      "audio_url": "https://example.com/voiceover.mp3",
      "prompt": "A person speaking naturally with expressive facial movements",
      "resolution": "480p"
    }
  }'
```

### Response

```json
{
  "code": 0,
  "msg": "success",
  "data": {
    "taskId": "4daa00eb286212c09ae296c3167089f0"
  }
}
```

---

### Check Status Endpoint

```
GET /api/v1/jobs/recordInfo?taskId={taskId}
```

### Response (Processing)

```json
{
  "code": 0,
  "msg": "success",
  "data": {
    "taskId": "4daa00eb286212c09ae296c3167089f0",
    "status": "processing",
    "progress": 45
  }
}
```

### Response (Completed)

```json
{
  "code": 0,
  "msg": "success",
  "data": {
    "taskId": "4daa00eb286212c09ae296c3167089f0",
    "status": "completed",
    "output": {
      "video_url": "https://tempfile.aiquickdraw.com/workers/video_xxx.mp4"
    }
  }
}
```

### Video Generation Time

- Short clips (<30s): ~1-2 minutes
- Medium clips (30s-2min): ~3-5 minutes
- Long clips (2min+): ~5-10 minutes

---

## Supported Formats

### Images
- Input: JPEG, PNG, WebP
- Output: JPEG, PNG
- Max size: 10MB
- Recommended resolution: 512x768 (vertical), 768x512 (horizontal)

### Audio
- Input: MP3, WAV, M4A
- Max duration: 10 minutes
- Sample rate: 44.1kHz recommended

### Video
- Output: MP4 (H.264)
- Resolution: Up to 1080p
- Frame rate: 30fps

---

## Error Codes

| Code | Description |
|------|-------------|
| 400 | Invalid request parameters |
| 401 | Invalid or missing API key |
| 402 | Insufficient credits |
| 429 | Rate limit exceeded |
| 500 | Internal server error |

---

## Best Practices

1. **Image Quality**: Use high-resolution reference images for better results
2. **Prompts**: Be specific and descriptive in your prompts
3. **Audio Quality**: Use clear, noise-free audio for best lip-sync
4. **Polling**: Poll status endpoint every 2-5 seconds, not more frequently
5. **Error Handling**: Implement retry logic with exponential backoff

---

## API Testing Results (December 2024)

### ✅ NanoBanana (Image Generation)
- **Status**: Verified Working
- **Test Date**: December 22, 2024
- **Test Method**: Playground at https://kie.ai/nano-banana
- **Result**: Successfully generated image from text prompt
- **Generated Image**: https://tempfile.aiquickdraw.com/workers/nano/image_xxx.png

### ✅ InfiniteTalk (Video Generation)  
- **Status**: API Available
- **Test Date**: December 22, 2024
- **Playground**: https://kie.ai/infinitalk
- **Requirements**: Image URL + Audio URL + Prompt
- **Resolutions**: 480p or 720p

### Key Discoveries

1. **Unified Jobs API**: Kie.ai uses a unified endpoint pattern for all models:
   - Create: `POST /api/v1/jobs/createTask`
   - Status: `GET /api/v1/jobs/recordInfo?taskId={taskId}`

2. **Model Names**:
   - NanoBanana: `nano-banana`
   - InfiniteTalk: `infinitalk`

3. **Output Storage**: Generated files are hosted at `tempfile.aiquickdraw.com`

---

## Resources

- Official Website: https://kie.ai
- API Market & Dashboard: https://kie.ai/market
- NanoBanana Playground: https://kie.ai/nano-banana
- InfiniteTalk Playground: https://kie.ai/infinitalk

