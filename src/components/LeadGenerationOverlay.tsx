
import React, { useEffect, useState } from 'react';
import { 
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import LeadFormContent from './lead-form/LeadFormContent';

const LeadGenerationOverlay = () => {
  const { language } = useLanguage();
  const [open, setOpen] = useState(false);
  
  // Listen for the global event to open the lead form
  useEffect(() => {
    const handleOpenLeadForm = () => {
      setOpen(true);
    };

    // Register event listener
    window.addEventListener('open-lead-form', handleOpenLeadForm);
    
    // Clean up
    return () => {
      window.removeEventListener('open-lead-form', handleOpenLeadForm);
    };
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  if (!open) return null;
  
  return (
    <>
      {/* Custom overlay that closes on click */}
      <div 
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
        style={{ cursor: 'none' }}
      />
      
      {/* Content panel - no Sheet wrapper to avoid conflicts */}
      <div className="fixed inset-y-0 right-0 z-50 h-full w-3/4 sm:max-w-md overflow-y-auto bg-medico-darkGreen text-white border-l border-medico-turquoise/20 shadow-lg animate-in slide-in-from-right duration-300">
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute top-7 right-4 z-[60] flex items-center justify-center rounded-full bg-medico-turquoise text-white hover:bg-medico-mint hover:text-medico-darkGreen transition-all duration-300 shadow-md hover:shadow-lg w-10 h-10 min-w-10 min-h-10"
          aria-label={language === 'de' ? "Formular schließen" : "Close form"}
          style={{ cursor: 'none' }}
          type="button"
        >
          <X className="w-6 h-6" aria-hidden="true" />
        </button>

        <div className="p-6">
          <div className="text-left pb-6 pr-14">
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
