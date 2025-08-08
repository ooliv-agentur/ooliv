
import React, { useEffect } from 'react';
import { 
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription
} from "@/components/ui/sheet";
import { X } from 'lucide-react';
import LeadFormContent from './lead-form/LeadFormContent';
import { cn } from '@/lib/utils';

interface LeadGenerationOverlayProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const LeadGenerationOverlay = ({ open, onOpenChange }: LeadGenerationOverlayProps) => {
  // Listen for the global event to open the lead form
  useEffect(() => {
    console.log('🔧 LeadGenerationOverlay: Setting up event listener');
    
    const handleOpenLeadForm = (event: any) => {
      console.log('🎯 LeadGenerationOverlay: open-lead-form event received from:', event.detail?.source);
      console.log('🎯 Current open state:', open);
      
      if (!open) {
        console.log('✅ Opening lead form overlay');
        onOpenChange(true);
      } else {
        console.log('⚠️ Lead form already open, ignoring trigger');
      }
    };

    window.addEventListener('open-lead-form', handleOpenLeadForm);
    
    return () => {
      console.log('🧹 LeadGenerationOverlay: Removing event listener');
      window.removeEventListener('open-lead-form', handleOpenLeadForm);
    };
  }, [open, onOpenChange]);
  
  const internalOnOpenChange = (next: boolean) => {
    if (!next) {
      // Trigger bubble flight animation towards FAB before closing
      window.dispatchEvent(new Event('lead-overlay-bubble'));
      setTimeout(() => onOpenChange(false), 350);
      return;
    }
    onOpenChange(true);
  };

  const handleClose = () => internalOnOpenChange(false);
  return (
    <Sheet open={open} onOpenChange={internalOnOpenChange}>
      <SheetContent 
        className="sm:max-w-md overflow-y-auto bg-[#1a2630] text-white border-l border-white/10" 
        side="right"
      >
        {/* Close button with proper cursor and increased z-index */}
        <button 
          className={cn(
            "fixed top-7 right-4 z-[210] flex items-center justify-center rounded-full bg-medico-turquoise text-white hover:bg-medico-darkGreen transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer",
            "w-10 h-10 min-w-10 min-h-10"
          )}
          onClick={handleClose}
          aria-label="Formular schließen"
          type="button"
        >
          <X className="w-6 h-6" aria-hidden="true" />
        </button>

        <SheetHeader className="text-left pb-4 pr-12">
          <SheetTitle className="text-xl font-bold text-white">
            Starten Sie Ihr Projekt
          </SheetTitle>
          <SheetDescription className="text-white/70">
            Füllen Sie das Formular aus, um loszulegen
          </SheetDescription>
        </SheetHeader>
        
        <LeadFormContent onClose={handleClose} />
      </SheetContent>
    </Sheet>
  );
};

export default React.memo(LeadGenerationOverlay);
