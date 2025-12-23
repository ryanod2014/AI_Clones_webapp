# AI Clone Video Generator

Generate AI-powered talking head videos with custom scripts, scenes, and voice clones. Built with React, Express, and powered by Kie.ai and ElevenLabs APIs.

![AI Clone Video Generator](docs/preview.png)

## Features

- **4-Step Workflow**: Script → Scene → Voiceover → Video
- **AI Scene Generation**: Create custom avatar scenes with text prompts
- **Voice Cloning**: Use ElevenLabs voice clones for natural speech
- **Lip-Sync Videos**: Generate realistic talking head videos
- **Local Storage**: All data saved in your browser (IndexedDB)
- **Project Management**: Save, resume, and export projects
- **Mock Mode**: Development without real API keys

## Quick Start

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd ai-clone-video-app

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### Development (Mock Mode)

```bash
# Terminal 1 - Start backend
cd backend
npm run dev

# Terminal 2 - Start frontend
cd frontend
npm run dev
```

Open http://localhost:5173 in your browser.

### Production Mode

1. Get API keys from [Kie.ai](https://kie.ai) and [ElevenLabs](https://elevenlabs.io)
2. Create `backend/.env`:
```env
MOCK_MODE=false
KIE_API_KEY=your_kie_api_key
ELEVENLABS_API_KEY=your_elevenlabs_api_key
```
3. Start the servers as above

## Tech Stack

| Component | Technology |
|-----------|------------|
| Frontend | React 18, Vite, TailwindCSS |
| State | Zustand |
| Storage | IndexedDB (idb) |
| Backend | Node.js, Express |
| APIs | Kie.ai, ElevenLabs |

## Project Structure

```
├── backend/           # Express API server
│   ├── routes/        # API endpoints
│   └── utils/         # API clients, mock data
├── frontend/          # React application
│   └── src/
│       ├── components/   # UI components
│       ├── stores/       # Zustand state
│       └── utils/        # DB, API utilities
└── docs/              # Documentation
```

## Documentation

- [User Guide](docs/USER_GUIDE.md) - How to use the application
- [Developer Guide](docs/DEVELOPER_README.md) - Setup and architecture
- [Kie.ai API Research](docs/KIE_AI_API_RESEARCH.md) - API documentation

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/health` | GET | Health check |
| `/api/scene/generate` | POST | Generate scene image |
| `/api/voiceover/voices` | GET | List available voices |
| `/api/voiceover/generate` | POST | Generate voiceover |
| `/api/video/generate` | POST | Start video generation |
| `/api/video/status/:jobId` | GET | Check video status |

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Privacy

All data is stored locally in your browser:
- Scenes and projects in IndexedDB
- API keys in IndexedDB (local only)
- No server-side storage or tracking

## License

MIT License





