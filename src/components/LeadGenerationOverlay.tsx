
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
  }, [onOpenChange, open]); // Include 'open' in dependencies to get current state
  
  const handleClose = (e?: React.MouseEvent | React.KeyboardEvent) => {
    console.log('Manual close triggered');
    // Prevent any event propagation or bubbling
    if (e) {
      e.preventDefault();
    }
    
    // Force immediate close
    onOpenChange(false);
  };
  
  return (
    <Sheet 
      open={open} 
      onOpenChange={(isOpen) => {
        console.log('Sheet onOpenChange triggered with:', isOpen);
        // Allow normal closing behavior but prevent unwanted opening
        if (!isOpen) {
          console.log('Closing via Sheet onOpenChange');
          onOpenChange(false);
        }
      }}
    >
      <SheetContent 
        className="sm:max-w-md overflow-y-auto bg-[#1a2630] text-white border-l border-white/10" 
        side="right"
        onPointerDownOutside={(e) => {
          // Completely prevent any outside click handling
          console.log('Outside pointer down prevented');
          e.preventDefault();
          e.stopPropagation();
          return false;
        }}
        onEscapeKeyDown={(e) => {
          // Only allow ESC key to close
          console.log('ESC key close triggered');
          e.preventDefault();
          e.stopPropagation();
          handleClose();
        }}
        onInteractOutside={(e) => {
          // Additional prevention for any outside interactions
          console.log('Outside interaction prevented');
          e.preventDefault();
          e.stopPropagation();
          return false;
        }}
      >
        {/* Custom Close Button - only way to close */}
        <button 
          onClick={handleClose}
          onMouseDown={(e) => {
            // Prevent any mouse down propagation
            e.stopPropagation();
          }}
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
