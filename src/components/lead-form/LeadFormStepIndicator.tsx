
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface LeadFormStepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const LeadFormStepIndicator: React.FC<LeadFormStepIndicatorProps> = ({ 
  currentStep, 
  totalSteps 
}) => {
  const { language } = useLanguage();
  const stepTitle = language === 'de' ? "Schritt" : "Step";

  return (
    <>
      {/* Step indicator */}
      <div className="flex justify-center mb-6">
        <div className="flex items-center space-x-2">
          {Array.from({ length: totalSteps }, (_, i) => i + 1).map((stepNumber) => (
            <div key={stepNumber} className="flex items-center">
              <div 
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  stepNumber === currentStep 
                    ? 'bg-white text-black' 
                    : stepNumber < currentStep 
                      ? 'bg-gray-600 text-white' 
                      : 'bg-white/20 text-white/70'
                }`}
              >
                {stepNumber}
              </div>
              {stepNumber < totalSteps && (
                <div 
                  className={`w-8 h-0.5 ${
                    stepNumber < currentStep ? 'bg-gray-600' : 'bg-white/20'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mb-6">
        <p className="text-gray-400 text-sm font-medium">
          {stepTitle} {currentStep} {language === 'de' ? 'von' : 'of'} {totalSteps}
        </p>
      </div>
    </>
  );
};

export default React.memo(LeadFormStepIndicator);
