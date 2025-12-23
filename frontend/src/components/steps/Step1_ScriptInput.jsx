import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import useAppStore from '../../stores/useAppStore';

function Step1_ScriptInput() {
  const navigate = useNavigate();
  const { script, setScript, setCurrentStep, canProceedToStep2 } = useAppStore();
  const [localScript, setLocalScript] = useState(script);
  const [charCount, setCharCount] = useState(script.length);

  // Debounced save to store
  useEffect(() => {
    const timer = setTimeout(() => {
      setScript(localScript);
    }, 300);
    return () => clearTimeout(timer);
  }, [localScript, setScript]);

  // Update current step
  useEffect(() => {
    setCurrentStep(1);
  }, [setCurrentStep]);

  const handleChange = (e) => {
    const value = e.target.value;
    setLocalScript(value);
    setCharCount(value.length);
  };

  const handleNext = () => {
    // Immediately update the store with the local script before navigating
    setScript(localScript);
    if (localScript.trim().length >= 10) {
      navigate('/step/2');
    }
  };

  const canProceed = localScript.trim().length >= 10;

  return (
    <div className="max-w-3xl mx-auto animate-fade-in">
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold text-text-primary mb-2">
          Write Your Script
        </h1>
        <p className="text-text-secondary">
          Enter the message you want your AI clone to speak. This will be converted to a natural-sounding voiceover.
        </p>
      </div>

      {/* Script Input Card */}
      <div className="glass-card p-6 mb-6">
        <label className="block text-sm font-medium text-text-secondary mb-3">
          Your Script
        </label>
        
        <textarea
          value={localScript}
          onChange={handleChange}
          placeholder="Hi, welcome to our product launch! Today I'm excited to share with you something that will change the way you work..."
          className="textarea-field min-h-[250px] font-body text-base leading-relaxed"
          autoFocus
        />

        {/* Character Counter */}
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-2">
            {charCount < 10 && charCount > 0 && (
              <span className="text-coral text-sm">
                Minimum 10 characters required
              </span>
            )}
            {charCount >= 10 && charCount < 50 && (
              <span className="text-text-muted text-sm">
                Short scripts work best for quick clips
              </span>
            )}
            {charCount >= 50 && (
              <span className="text-mint text-sm">
                Great length for engaging content!
              </span>
            )}
          </div>
          <span className={`text-sm ${charCount > 5000 ? 'text-coral' : 'text-text-muted'}`}>
            {charCount.toLocaleString()} / 5,000 characters
          </span>
        </div>
      </div>

      {/* Tips Section */}
      <div className="glass-card p-6 mb-8">
        <h3 className="font-medium text-text-primary mb-3 flex items-center gap-2">
          <svg className="w-5 h-5 text-electric" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          Tips for Great Scripts
        </h3>
        <ul className="space-y-2 text-sm text-text-secondary">
          <li className="flex items-start gap-2">
            <span className="text-mint mt-0.5">•</span>
            <span>Keep sentences short and conversational for natural delivery</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-mint mt-0.5">•</span>
            <span>Add punctuation like commas and periods for natural pauses</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-mint mt-0.5">•</span>
            <span>Avoid technical jargon or abbreviations unless spelled out</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-mint mt-0.5">•</span>
            <span>Write as you would speak - contractions sound more natural</span>
          </li>
        </ul>
      </div>

      {/* Navigation */}
      <div className="flex justify-end">
        <button
          onClick={handleNext}
          disabled={!canProceed}
          className="btn-primary flex items-center gap-2"
        >
          Choose Scene
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Step1_ScriptInput;

