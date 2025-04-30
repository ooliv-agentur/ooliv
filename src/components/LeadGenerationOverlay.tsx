
import React, { useEffect } from 'react';
import { 
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription
} from "@/components/ui/sheet";
import { useLanguage } from '@/contexts/LanguageContext';
import LeadFormContent from './lead-form/LeadFormContent';

interface LeadGenerationOverlayProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const LeadGenerationOverlay = ({ open, onOpenChange }: LeadGenerationOverlayProps) => {
  const { language } = useLanguage();
  
  useEffect(() => {
    console.log('🔖 LeadGenerationOverlay - open state changed to:', open);
    if (open) {
      console.log('🔖 LeadGenerationOverlay - Lead form opened');
    }
  }, [open]);
  
  return (
    <Sheet 
      open={open} 
      onOpenChange={(newOpen) => {
        console.log('🔖 LeadGenerationOverlay - Sheet onOpenChange called with:', newOpen);
        onOpenChange(newOpen);
      }}
    >
      <SheetContent className="sm:max-w-md overflow-y-auto bg-[#1a2630] text-white border-l border-white/10" side="right">
        <SheetHeader className="text-left pb-4">
          <SheetTitle className="text-xl font-bold text-white">
            {language === 'de' ? "Starten Sie Ihr Projekt" : "Let's Start Your Project"}
          </SheetTitle>
          <SheetDescription className="text-white/70">
            {language === 'de' ? "Füllen Sie das Formular aus, um loszulegen" : "Fill in the form to get started"}
          </SheetDescription>
        </SheetHeader>
        
        <LeadFormContent onClose={() => {
          console.log('🔖 LeadGenerationOverlay - LeadFormContent onClose called');
          onOpenChange(false);
        }} />
      </SheetContent>
    </Sheet>
  );
};

export default React.memo(LeadGenerationOverlay);
