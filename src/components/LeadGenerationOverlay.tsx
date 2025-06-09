
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
import { cn } from '@/lib/utils';

interface LeadGenerationOverlayProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const LeadGenerationOverlay = ({ open, onOpenChange }: LeadGenerationOverlayProps) => {
  const { language } = useLanguage();
  
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
  
  const handleClose = () => {
    console.log('❌ LeadGenerationOverlay: Closing overlay');
    onOpenChange(false);
  };
  
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent 
        className="sm:max-w-md overflow-y-auto bg-primary-darkgreen text-secondary-white border-l border-secondary-lightblue/10" 
        side="right"
      >
        {/* Close button matching hamburger menu style */}
        <button 
          className={cn(
            "fixed top-7 right-4 z-[200] flex items-center justify-center rounded-full bg-secondary-lightblue text-primary-darkgreen hover:bg-primary-mintgreen transition-all duration-300 shadow-md hover:shadow-lg",
            "w-10 h-10 min-w-10 min-h-10"
          )}
          onClick={handleClose}
          aria-label={language === 'de' ? "Formular schließen" : "Close form"}
          type="button"
          style={{ cursor: 'none' }}
        >
          <X className="w-6 h-6" aria-hidden="true" />
        </button>

        <SheetHeader className="text-left pb-4 pr-12">
          <SheetTitle className="text-xl font-bold text-secondary-white">
            {language === 'de' ? "Starten Sie Ihr Projekt" : "Let's Start Your Project"}
          </SheetTitle>
          <SheetDescription className="text-secondary-white/70">
            {language === 'de' ? "Füllen Sie das Formular aus, um loszulegen" : "Fill in the form to get started"}
          </SheetDescription>
        </SheetHeader>
        
        <LeadFormContent onClose={handleClose} />
      </SheetContent>
    </Sheet>
  );
};

export default React.memo(LeadGenerationOverlay);
