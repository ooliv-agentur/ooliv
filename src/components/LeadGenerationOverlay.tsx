
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
    console.log('🔧 LeadGenerationOverlay: Setting up event listener, current open state:', open);
    
    const handleOpenLeadForm = (event) => {
      console.log('🎯 LeadGenerationOverlay: open-lead-form event received, current open state:', open);
      console.log('🎯 Event details:', event);
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
  }, []); // Empty dependency array - no re-registration
  
  // Add debugging for onOpenChange calls
  const handleOpenChange = (newOpen: boolean) => {
    console.log('📝 LeadGenerationOverlay: onOpenChange called with:', newOpen, 'current state:', open);
    onOpenChange(newOpen);
  };
  
  return (
    <Sheet open={open} onOpenChange={handleOpenChange}>
      <SheetContent 
        className="sm:max-w-md overflow-y-auto bg-[#1a2630] text-white border-l border-white/10" 
        side="right"
      >
        {/* Simplified close button with direct onOpenChange call */}
        <button 
          onClick={(e) => {
            console.log('❌ Close button clicked');
            e.preventDefault();
            e.stopPropagation();
            handleOpenChange(false);
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
        
        <LeadFormContent onClose={() => {
          console.log('📝 LeadFormContent onClose called');
          handleOpenChange(false);
        }} />
      </SheetContent>
    </Sheet>
  );
};

export default React.memo(LeadGenerationOverlay);
