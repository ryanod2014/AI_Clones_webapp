import { useNavigate } from 'react-router-dom';
import useAppStore from '../stores/useAppStore';

const steps = [
  { number: 1, label: 'Script', description: 'Write your message' },
  { number: 2, label: 'Scene', description: 'Choose your avatar' },
  { number: 3, label: 'Voiceover', description: 'Generate audio' },
  { number: 4, label: 'Video', description: 'Create video' }
];

function StepperNavigation({ currentStep }) {
  const navigate = useNavigate();
  const { canProceedToStep2, canProceedToStep3, canProceedToStep4 } = useAppStore();

  const canNavigateToStep = (stepNumber) => {
    if (stepNumber === 1) return true;
    if (stepNumber === 2) return canProceedToStep2();
    if (stepNumber === 3) return canProceedToStep3();
    if (stepNumber === 4) return canProceedToStep4();
    return false;
  };

  const handleStepClick = (stepNumber) => {
    if (canNavigateToStep(stepNumber)) {
      navigate(`/step/${stepNumber}`);
    }
  };

  return (
    <nav className="flex items-center justify-between">
      {steps.map((step, index) => {
        const isActive = currentStep === step.number;
        const isCompleted = currentStep > step.number;
        const canClick = canNavigateToStep(step.number);
        
        return (
          <div key={step.number} className="flex items-center flex-1">
            {/* Step Circle + Label */}
            <button
              onClick={() => handleStepClick(step.number)}
              disabled={!canClick}
              className={`flex items-center gap-3 group ${
                canClick ? 'cursor-pointer' : 'cursor-not-allowed'
              }`}
            >
              {/* Circle */}
              <div
                className={`
                  relative w-10 h-10 rounded-full flex items-center justify-center font-display font-semibold text-sm
                  transition-all duration-300
                  ${isActive 
                    ? 'bg-electric text-void shadow-lg shadow-electric/30' 
                    : isCompleted 
                      ? 'bg-mint/20 text-mint border border-mint/30' 
                      : canClick 
                        ? 'bg-slate-medium text-text-secondary border border-white/10 group-hover:border-electric/30' 
                        : 'bg-slate-dark text-text-muted border border-white/5'
                  }
                `}
              >
                {isCompleted ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  step.number
                )}
                
                {/* Active pulse */}
                {isActive && (
                  <div className="absolute inset-0 rounded-full bg-electric/30 animate-ping" />
                )}
              </div>

              {/* Label */}
              <div className="hidden sm:block">
                <p className={`font-medium text-sm ${
                  isActive 
                    ? 'text-electric' 
                    : isCompleted 
                      ? 'text-mint' 
                      : canClick 
                        ? 'text-text-secondary group-hover:text-text-primary' 
                        : 'text-text-muted'
                }`}>
                  {step.label}
                </p>
                <p className="text-xs text-text-muted hidden lg:block">
                  {step.description}
                </p>
              </div>
            </button>

            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div className="flex-1 mx-4 hidden sm:block">
                <div 
                  className={`h-0.5 rounded-full transition-colors duration-300 ${
                    currentStep > step.number 
                      ? 'bg-gradient-to-r from-mint/50 to-mint/20' 
                      : 'bg-white/5'
                  }`}
                />
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}

export default StepperNavigation;





