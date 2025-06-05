
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
  
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent 
        className="sm:max-w-md overflow-y-auto bg-gradient-to-b from-medico-darkGreen to-medico-darkGreen/90 text-white border-l border-medico-turquoise/20" 
        side="right"
      >
        {/* Close Button */}
        <div className="absolute top-4 right-4 z-10">
          <SheetClose asChild>
            <Button 
              variant="ghost" 
              size="icon"
              className="h-10 w-10 rounded-full hover:bg-medico-turquoise/20 text-white hover:text-white"
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </Button>
          </SheetClose>
        </div>

        <SheetHeader className="text-left pb-6 pr-14">
          <SheetTitle className="text-2xl font-bold text-white">
            {language === 'de' ? "Starten Sie Ihr Projekt" : "Let's Start Your Project"}
          </SheetTitle>
          <SheetDescription className="text-medico-mint/80 text-base">
            {language === 'de' ? "Füllen Sie das Formular aus, um loszulegen" : "Fill in the form to get started"}
          </SheetDescription>
        </SheetHeader>
        
        <LeadFormContent onClose={() => setOpen(false)} />
      </SheetContent>
    </Sheet>
  );
};

export default React.memo(LeadGenerationOverlay);
