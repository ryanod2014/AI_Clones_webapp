# AI Clone Video Generator - Developer Documentation

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                     Frontend (React/Vite)                    │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐    │
│  │  Step 1  │→→│  Step 2  │→→│  Step 3  │→→│  Step 4  │    │
│  │  Script  │  │  Scene   │  │ Voiceover│  │  Video   │    │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘    │
│       │             │             │             │           │
│       └─────────────┴─────────────┴─────────────┘           │
│                          │                                   │
│              ┌───────────┴───────────┐                      │
│              │    Zustand Store      │                      │
│              └───────────┬───────────┘                      │
│                          │                                   │
│              ┌───────────┴───────────┐                      │
│              │     IndexedDB         │                      │
│              │  (scenes, projects)   │                      │
│              └───────────────────────┘                      │
└──────────────────────────┬──────────────────────────────────┘
                           │ HTTP
┌──────────────────────────┴──────────────────────────────────┐
│                   Backend (Express.js)                       │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐             │
│  │  /scene    │  │ /voiceover │  │  /video    │             │
│  └──────┬─────┘  └──────┬─────┘  └──────┬─────┘             │
│         │               │               │                    │
│         └───────────────┼───────────────┘                    │
│                         │                                    │
│              ┌──────────┴──────────┐                        │
│              │    Mock Mode OR     │                        │
│              │    Real API Calls   │                        │
│              └─────────────────────┘                        │
└─────────────────────────────────────────────────────────────┘
                           │
              ┌────────────┼────────────┐
              ▼            ▼            ▼
         ┌────────┐  ┌──────────┐  ┌────────────┐
         │ Kie.ai │  │ElevenLabs│  │ Kie.ai     │
         │ Image  │  │   TTS    │  │ InfiniteTalk│
         └────────┘  └──────────┘  └────────────┘
```

## Project Structure

```
ai-clone-video-app/
├── backend/
│   ├── server.js              # Express server entry point
│   ├── package.json
│   ├── routes/
│   │   ├── scene.js           # Scene generation endpoints
│   │   ├── voiceover.js       # Voiceover generation endpoints
│   │   └── video.js           # Video generation endpoints
│   └── utils/
│       ├── mockData.js        # Mock responses for development
│       └── apiClients.js      # External API client wrappers
│
├── frontend/
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── public/
│   │   └── vite.svg
│   └── src/
│       ├── main.jsx           # React entry point
│       ├── App.jsx            # Root component with routing
│       ├── index.css          # Global styles + Tailwind
│       ├── components/
│       │   ├── Layout.jsx
│       │   ├── StepperNavigation.jsx
│       │   ├── Settings.jsx
│       │   ├── SceneGallery.jsx
│       │   ├── SceneGenerator.jsx
│       │   ├── AudioPlayer.jsx
│       │   ├── Projects.jsx
│       │   └── steps/
│       │       ├── Step1_ScriptInput.jsx
│       │       ├── Step2_SceneSelection.jsx
│       │       ├── Step3_VoiceoverGenerator.jsx
│       │       └── Step4_VideoGenerator.jsx
│       ├── stores/
│       │   └── useAppStore.js  # Zustand state management
│       └── utils/
│           ├── db.js           # IndexedDB operations
│           └── api.js          # Backend API client
│
└── docs/
    ├── KIE_AI_API_RESEARCH.md
    ├── USER_GUIDE.md
    └── DEVELOPER_README.md
```

## Local Development Setup

### Prerequisites

- Node.js 18+ (LTS recommended)
- npm 9+ or yarn

### Installation

1. Clone the repository:
```bash
git clone <repo-url>
cd ai-clone-video-app
```

2. Install backend dependencies:
```bash
cd backend
npm install
```

3. Create backend environment file:
```bash
cp .env.example .env
# Edit .env and set MOCK_MODE=true for development
```

4. Install frontend dependencies:
```bash
cd ../frontend
npm install
```

### Running the Application

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```
Backend runs on http://localhost:3001

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```
Frontend runs on http://localhost:5173

### Mock Mode

When `MOCK_MODE=true` in backend `.env`:
- Scene generation returns placeholder images
- Voiceover returns sample audio
- Video generation simulates progress and returns sample video
- No real API keys required

---

## Environment Variables

### Backend (.env)

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | 3001 |
| `MOCK_MODE` | Enable mock responses | true |
| `KIE_API_KEY` | Kie.ai API key (optional in mock mode) | - |
| `ELEVENLABS_API_KEY` | ElevenLabs API key (optional in mock mode) | - |

---

## API Endpoints

### Health Check
```
GET /api/health
```
Returns server status and mock mode state.

### Scene Generation
```
POST /api/scene/generate
Content-Type: multipart/form-data

Fields:
- referenceImage (file, optional)
- prompt (string, required)
- orientation (string: "vertical" | "horizontal")

Headers:
- x-kie-api-key (optional in mock mode)
```

### Voiceover

**List Voices**
```
GET /api/voiceover/voices

Headers:
- x-elevenlabs-api-key (optional in mock mode)
```

**Generate Voiceover**
```
POST /api/voiceover/generate
Content-Type: application/json

Body:
{
  "script": "string",
  "voiceId": "string"
}

Headers:
- x-elevenlabs-api-key (optional in mock mode)
```

### Video Generation

**Start Generation**
```
POST /api/video/generate
Content-Type: application/json

Body:
{
  "sceneImageUrl": "string",
  "audioUrl": "string"
}

Headers:
- x-kie-api-key (optional in mock mode)
```

**Check Status**
```
GET /api/video/status/:jobId

Headers:
- x-kie-api-key (optional)
```

---

## Frontend State Management

### Zustand Store (`useAppStore`)

```javascript
// State
{
  apiKeys: { kieApiKey, elevenLabsApiKey },
  currentStep: number,
  script: string,
  selectedScene: object | null,
  voiceover: object | null,
  generatedVideo: object | null,
  isGeneratingScene: boolean,
  isGeneratingVoiceover: boolean,
  isGeneratingVideo: boolean,
  videoProgress: number,
  showSettings: boolean,
  lastUsedVoiceId: string
}

// Actions
setApiKeys(keys)
setScript(script)
setSelectedScene(scene)
setVoiceover(voiceover)
setGeneratedVideo(video)
reset()
loadSettings()
saveSettings(settings)
```

---

## IndexedDB Schema

### Database: `AICloneVideoDB`

**Store: scenes**
```javascript
{
  id: string (keyPath),
  imageUrl: string,
  prompt: string,
  orientation: "vertical" | "horizontal",
  timestamp: number,
  referenceImageName?: string
}
```

**Store: projects**
```javascript
{
  id: string (keyPath),
  name: string,
  script: string,
  sceneId: string,
  sceneImageUrl: string,
  voiceoverUrl?: string,
  voiceId?: string,
  videoUrl?: string,
  createdAt: number,
  updatedAt: number
}
```

**Store: settings**
```javascript
// Key: "userSettings"
{
  kieApiKey: string,
  elevenLabsApiKey: string,
  lastUsedVoiceId: string
}
```

---

## Building for Production

### Frontend
```bash
cd frontend
npm run build
```
Output: `frontend/dist/`

### Backend
```bash
cd backend
npm start
```

---

## Deployment

### Frontend (Vercel/Netlify)

1. Connect your Git repository
2. Set build command: `cd frontend && npm run build`
3. Set output directory: `frontend/dist`
4. Set environment variables if needed

### Backend (Railway/Render)

1. Connect your Git repository
2. Set root directory: `backend`
3. Set build command: `npm install`
4. Set start command: `npm start`
5. Set environment variables:
   - `PORT` (usually auto-assigned)
   - `MOCK_MODE=false` for production
   - `KIE_API_KEY`
   - `ELEVENLABS_API_KEY`

### CORS Configuration

Update `backend/server.js` to allow your production frontend domain:

```javascript
app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://your-frontend-domain.com'
  ],
  credentials: true
}));
```

---

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

## License

MIT License - See LICENSE file for details





