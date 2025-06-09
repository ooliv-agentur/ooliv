
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
  
  // Listen for the global event to open the lead form
  useEffect(() => {
    const handleOpenLeadForm = () => {
      console.log('open-lead-form event triggered, current open state:', open);
      // Only open if not already open to prevent double triggering
      if (!open) {
        console.log('Opening lead form overlay');
        onOpenChange(true);
      } else {
        console.log('Lead form already open, ignoring trigger');
      }
    };

    // Register event listener
    window.addEventListener('open-lead-form', handleOpenLeadForm);
    
    // Clean up
    return () => {
      window.removeEventListener('open-lead-form', handleOpenLeadForm);
    };
  }, [onOpenChange, open]);
  
  const handleClose = () => {
    console.log('Manual close triggered');
    onOpenChange(false);
  };
  
  return (
    <Sheet 
      open={open} 
      onOpenChange={(isOpen) => {
        // Only allow closing, never opening through this mechanism
        // Opening should only happen via the global event
        if (!isOpen) {
          console.log('Sheet closing via onOpenChange');
          onOpenChange(false);
        }
      }}
    >
      <SheetContent 
        className="sm:max-w-md overflow-y-auto bg-[#1a2630] text-white border-l border-white/10" 
        side="right"
        onPointerDownOutside={(e) => {
          // Prevent outside clicks but don't interfere with internal close logic
          console.log('Outside pointer down prevented');
          e.preventDefault();
        }}
        onEscapeKeyDown={() => {
          // Allow ESC to close
          console.log('ESC key close triggered');
          handleClose();
        }}
      >
        {/* Custom Close Button */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 z-10"
          aria-label={language === 'de' ? "Formular schließen" : "Close form"}
          type="button"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>

        <SheetHeader className="text-left pb-4 pr-12">
          <SheetTitle className="text-xl font-bold text-white">
            {language === 'de' ? "Starten Sie Ihr Projekt" : "Let's Start Your Project"}
          </SheetTitle>
          <SheetDescription className="text-white/70">
            {language === 'de' ? "Füllen Sie das Formular aus, um loszulegen" : "Fill in the form to get started"}
          </SheetDescription>
        </SheetHeader>
        
        <LeadFormContent onClose={handleClose} />
      </SheetContent>
    </Sheet>
  );
};

export default React.memo(LeadGenerationOverlay);
