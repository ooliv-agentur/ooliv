
import React, { useEffect } from 'react';
import { 
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription
} from "@/components/ui/sheet";
import { X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import LeadFormContent from './lead-form/LeadFormContent';

interface LeadGenerationOverlayProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const LeadGenerationOverlay = ({ open, onOpenChange }: LeadGenerationOverlayProps) => {
  const { language } = useLanguage();
  
  const handleClose = () => {
    onOpenChange(false);
  };
  
  // Disable body scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);
  
  if (!open) return null;
  
  return (
    <>
      {/* Custom overlay that prevents clicks */}
      <div 
        className="fixed inset-0 z-50 bg-black/50"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      />
      
      {/* Sheet content without default overlay */}
      <div className="fixed inset-y-0 right-0 z-50 h-full w-3/4 sm:max-w-md">
        <div className="h-full overflow-y-auto bg-medico-darkGreen text-white border-l border-medico-turquoise/20 p-6">
          {/* Close Button */}
          <button 
            onClick={handleClose}
            className="absolute top-4 right-4 rounded-full bg-medico-turquoise text-white hover:bg-medico-mint hover:text-medico-darkGreen transition-colors duration-200 w-8 h-8 flex items-center justify-center z-10"
            aria-label={language === 'de' ? "Formular schließen" : "Close form"}
          >
            <X className="w-4 h-4" />
          </button>

          <div className="text-left pb-6 pr-12">
            <h2 className="text-2xl font-bold text-white mb-2">
              {language === 'de' ? "Starten Sie Ihr Projekt" : "Let's Start Your Project"}
            </h2>
            <p className="text-medico-mint/80 text-base">
              {language === 'de' ? "Füllen Sie das Formular aus, um loszulegen" : "Fill in the form to get started"}
            </p>
          </div>
          
          <LeadFormContent onClose={handleClose} />
        </div>
      </div>
    </>
  );
};

export default React.memo(LeadGenerationOverlay);
