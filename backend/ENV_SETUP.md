# Backend Environment Setup

Since `.env` files are gitignored, you need to create one manually.

## Setup Instructions

1. Create a `.env` file in the `backend/` directory:

```bash
cd backend
touch .env
```

2. Add the following content to the `.env` file:

```env
# API Keys
KIE_API_KEY=your_kie_api_key_here
ELEVENLABS_API_KEY=your_elevenlabs_api_key_here

# Server Configuration
PORT=3001

# Mock Mode (set to true for development without real API keys)
MOCK_MODE=true
```

3. For development, keep `MOCK_MODE=true` to use mock data without real API keys.

4. For production:
   - Set `MOCK_MODE=false`
   - Add your real API keys from [Kie.ai](https://kie.ai) and [ElevenLabs](https://elevenlabs.io)

## Getting API Keys

### Kie.ai
1. Go to [kie.ai](https://kie.ai)
2. Create an account
3. Navigate to Dashboard > API
4. Copy your API key

### ElevenLabs
1. Go to [elevenlabs.io](https://elevenlabs.io)
2. Create an account
3. Click on your profile > Profile + API key
4. Copy your API key





