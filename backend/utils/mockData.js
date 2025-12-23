// Mock data for development without real API keys

// Sample scene images (placeholder URLs from picsum.photos)
const mockSceneImages = [
  'https://picsum.photos/seed/scene1/512/768',
  'https://picsum.photos/seed/scene2/512/768',
  'https://picsum.photos/seed/scene3/768/512',
  'https://picsum.photos/seed/scene4/512/512'
];

// Sample voices for ElevenLabs mock
const mockVoices = [
  {
    voice_id: 'mock-voice-1',
    name: 'Alex - Professional Male',
    preview_url: null,
    labels: { accent: 'American', gender: 'male', use_case: 'narration' }
  },
  {
    voice_id: 'mock-voice-2',
    name: 'Sarah - Friendly Female',
    preview_url: null,
    labels: { accent: 'American', gender: 'female', use_case: 'conversational' }
  },
  {
    voice_id: 'mock-voice-3',
    name: 'James - British Narrator',
    preview_url: null,
    labels: { accent: 'British', gender: 'male', use_case: 'narration' }
  },
  {
    voice_id: 'mock-voice-4',
    name: 'Emma - Australian Host',
    preview_url: null,
    labels: { accent: 'Australian', gender: 'female', use_case: 'broadcasting' }
  }
];

// Video generation job statuses for polling simulation
const mockJobStatuses = {};

// Simulate API latency
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Generate a random scene image
const generateMockScene = async (prompt, orientation) => {
  await delay(2000 + Math.random() * 1000); // 2-3 seconds
  
  const width = orientation === 'vertical' ? 512 : 768;
  const height = orientation === 'vertical' ? 768 : 512;
  const seed = Date.now();
  
  return {
    imageUrl: `https://picsum.photos/seed/${seed}/${width}/${height}`,
    prompt,
    orientation,
    generatedAt: new Date().toISOString()
  };
};

// Generate mock audio (returns a sample audio URL)
const generateMockVoiceover = async (script, voiceId) => {
  await delay(1500 + Math.random() * 1000); // 1.5-2.5 seconds
  
  // Use a sample audio file from a public source
  // This is a short speech sample
  return {
    audioUrl: 'https://www2.cs.uic.edu/~i101/SoundFiles/CantinaBand3.wav',
    duration: 3.5,
    voiceId,
    characterCount: script.length,
    generatedAt: new Date().toISOString()
  };
};

// Start mock video generation (returns job ID)
const startMockVideoGeneration = async (sceneImageUrl, audioUrl) => {
  await delay(500);
  
  const jobId = `mock-job-${Date.now()}`;
  
  // Simulate progress over time
  mockJobStatuses[jobId] = {
    status: 'processing',
    progress: 0,
    startedAt: Date.now(),
    estimatedDuration: 10000 // 10 seconds
  };
  
  // Simulate progress updates
  const progressInterval = setInterval(() => {
    if (mockJobStatuses[jobId]) {
      const elapsed = Date.now() - mockJobStatuses[jobId].startedAt;
      const progress = Math.min(95, Math.floor((elapsed / mockJobStatuses[jobId].estimatedDuration) * 100));
      mockJobStatuses[jobId].progress = progress;
      
      if (progress >= 95) {
        clearInterval(progressInterval);
        mockJobStatuses[jobId].status = 'completed';
        mockJobStatuses[jobId].progress = 100;
        // Use a sample video from a public source
        mockJobStatuses[jobId].videoUrl = 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4';
      }
    } else {
      clearInterval(progressInterval);
    }
  }, 1000);
  
  return { jobId };
};

// Check video generation status
const checkMockVideoStatus = (jobId) => {
  const job = mockJobStatuses[jobId];
  
  if (!job) {
    return {
      status: 'not_found',
      error: 'Job not found'
    };
  }
  
  return {
    status: job.status,
    progress: job.progress,
    videoUrl: job.videoUrl || null
  };
};

// Clean up old jobs (call periodically)
const cleanupOldJobs = () => {
  const maxAge = 30 * 60 * 1000; // 30 minutes
  const now = Date.now();
  
  Object.keys(mockJobStatuses).forEach(jobId => {
    if (now - mockJobStatuses[jobId].startedAt > maxAge) {
      delete mockJobStatuses[jobId];
    }
  });
};

// Run cleanup every 5 minutes
setInterval(cleanupOldJobs, 5 * 60 * 1000);

module.exports = {
  mockVoices,
  mockSceneImages,
  generateMockScene,
  generateMockVoiceover,
  startMockVideoGeneration,
  checkMockVideoStatus,
  delay
};





