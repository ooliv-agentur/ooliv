
import React, { useEffect, useState } from 'react';
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

const LeadGenerationOverlay = () => {
  const { language } = useLanguage();
  const [open, setOpen] = useState(false);
  
  // Debug logging for state changes
  useEffect(() => {
    console.log('LeadGenerationOverlay open state changed:', open);
  }, [open]);
  
  // Listen for the global event to open the lead form
  useEffect(() => {
    const handleOpenLeadForm = () => {
      console.log('Opening lead form via global event');
      setOpen(true);
    };

    // Register event listener
    window.addEventListener('open-lead-form', handleOpenLeadForm);
    
    // Clean up
    return () => {
      window.removeEventListener('open-lead-form', handleOpenLeadForm);
    };
  }, []);

  // Primary close handler with detailed logging
  const handleOpenChange = (newOpen: boolean) => {
    console.log('Sheet onOpenChange triggered:', newOpen);
    console.log('Current open state before update:', open);
    setOpen(newOpen);
    
    // Log the state immediately after setOpen call
    setTimeout(() => {
      console.log('Open state after setOpen call:', newOpen);
    }, 0);
  };

  // Close button handler
  const handleClose = () => {
    console.log('Close button clicked');
    console.log('Current open state before close:', open);
    setOpen(false);
    
    // Log the state immediately after setOpen call
    setTimeout(() => {
      console.log('Open state after close button:', false);
    }, 0);
  };
  
  return (
    <Sheet open={open} onOpenChange={handleOpenChange}>
      <SheetContent 
        className="sm:max-w-md overflow-y-auto bg-medico-darkGreen text-white border-l border-medico-turquoise/20" 
        side="right"
      >
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 rounded-full bg-medico-turquoise text-white hover:bg-medico-mint hover:text-medico-darkGreen transition-all duration-300 shadow-md hover:shadow-lg w-8 h-8 flex items-center justify-center"
          aria-label={language === 'de' ? "Formular schließen" : "Close form"}
        >
          <X className="w-4 h-4" />
        </button>

        <SheetHeader className="text-left pb-6 pr-12">
          <SheetTitle className="text-2xl font-bold text-white">
            {language === 'de' ? "Starten Sie Ihr Projekt" : "Let's Start Your Project"}
          </SheetTitle>
          <SheetDescription className="text-medico-mint/80 text-base">
            {language === 'de' ? "Füllen Sie das Formular aus, um loszulegen" : "Fill in the form to get started"}
          </SheetDescription>
        </SheetHeader>
        
        <LeadFormContent onClose={handleClose} />
      </SheetContent>
    </Sheet>
  );
};

export default React.memo(LeadGenerationOverlay);
