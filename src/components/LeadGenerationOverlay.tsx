
import React, { useEffect, useState } from 'react';
import { 
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose
} from "@/components/ui/sheet";
import { X } from 'lucide-react';
import { Button } from "@/components/ui/button";
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
  
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent 
        className="sm:max-w-md overflow-y-auto bg-medico-darkGreen text-white border-l border-medico-turquoise/20" 
        side="right"
      >
        {/* Close Button - styled like the main menu button */}
        <button 
          onClick={handleClose}
          className="fixed top-7 right-4 z-[200] flex items-center justify-center rounded-full bg-medico-turquoise text-white hover:bg-medico-mint hover:text-medico-darkGreen transition-all duration-300 shadow-md hover:shadow-lg w-10 h-10 min-w-10 min-h-10"
          aria-label={language === 'de' ? "Formular schließen" : "Close form"}
          style={{ cursor: 'none' }}
        >
          <X className="w-6 h-6" aria-hidden="true" />
        </button>

        <SheetHeader className="text-left pb-6 pr-14">
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
