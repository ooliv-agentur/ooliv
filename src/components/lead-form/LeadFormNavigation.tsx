
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface LeadFormNavigationProps {
  currentStep: number;
  totalSteps: number;
  isSubmitting: boolean;
  onPrevStep: () => void;
  onNextStep: () => void;
}

const LeadFormNavigation: React.FC<LeadFormNavigationProps> = ({ 
  currentStep, 
  totalSteps, 
  isSubmitting, 
  onPrevStep, 
  onNextStep 
}) => {
  const { language } = useLanguage();

  return (
    <div className="flex sm:justify-between gap-3 pt-6 border-t border-medico-turquoise/20">
      {currentStep > 1 && (
        <Button 
          type="button"
          variant="outline"
          size="lg"
          onClick={onPrevStep}
          className="flex-1 bg-white text-medico-darkGreen border-2 border-medico-darkGreen hover:bg-medico-mint hover:border-medico-turquoise hover:text-medico-darkGreen font-semibold"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          {language === 'de' ? "Zurück" : "Back"}
        </Button>
      )}
      
      {currentStep < totalSteps ? (
        <Button 
          type="button"
          size="lg"
          onClick={onNextStep}
          className="flex-1 font-semibold bg-medico-yellow text-medico-darkGreen border-none hover:bg-yellow-400"
        >
          {language === 'de' ? "Weiter" : "Next"}
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      ) : (
        <Button 
          type="submit"
          size="lg"
          className="flex-1 font-semibold bg-medico-yellow text-medico-darkGreen border-none hover:bg-yellow-400 disabled:opacity-50"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent" />
              {language === 'de' ? "Wird gesendet..." : "Sending..."}
            </span>
          ) : (
            language === 'de' ? 'Abschließen & Senden' : 'Finish & Send'
          )}
        </Button>
      )}
    </div>
  );
};

export default React.memo(LeadFormNavigation);
