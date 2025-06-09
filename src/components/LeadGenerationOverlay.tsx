
import React, { useEffect, useState } from 'react';
import { 
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetOverlay
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

    window.addEventListener('open-lead-form', handleOpenLeadForm);
    
    return () => {
      window.removeEventListener('open-lead-form', handleOpenLeadForm);
    };
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  // Ensure the overlay click closes the sheet
  const handleOverlayClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setOpen(false);
  };
  
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetOverlay onClick={handleOverlayClick} />
      <SheetContent 
        className="sm:max-w-md overflow-y-auto bg-medico-darkGreen text-white border-l border-medico-turquoise/20" 
        side="right"
        onPointerDownOutside={handleClose}
        onEscapeKeyDown={handleClose}
      >
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 rounded-full bg-medico-turquoise text-white hover:bg-medico-mint hover:text-medico-darkGreen transition-colors duration-200 w-8 h-8 flex items-center justify-center z-10"
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

export default LeadGenerationOverlay;
