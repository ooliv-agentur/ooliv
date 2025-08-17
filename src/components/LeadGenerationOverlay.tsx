
import React, { useEffect, useState } from 'react';
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
import { useLanguage } from '@/contexts/LanguageContext';
import { useCookieConsent } from '@/contexts/CookieConsentContext';
interface LeadGenerationOverlayProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const LeadGenerationOverlay = ({ open, onOpenChange }: LeadGenerationOverlayProps) => {
  const [mode, setMode] = useState<'project' | 'prototype'>('project');
  const { language } = useLanguage();
  const { showBanner } = useCookieConsent();
  // Listen for the global event to open the lead form
  useEffect(() => {
    console.log('🔧 LeadGenerationOverlay: Setting up event listener');
    
    const handleOpenLeadForm = (event: any) => {
      if (showBanner) {
        console.log('⏳ LeadGenerationOverlay: Cookie banner visible, ignoring open-lead-form');
        return;
      }
      const mode = event?.detail?.mode as 'prototype' | 'project' | undefined;
      const variant = event?.detail?.variant as 'prototype' | 'project' | undefined;
      const source = event?.detail?.source as string | undefined;
      const nextMode: 'project' | 'prototype' = mode ?? variant ?? (source?.toLowerCase().includes('prototype') ? 'prototype' : 'project');
      setMode(nextMode);
      console.log('🎯 LeadGenerationOverlay: open-lead-form variant:', nextMode);
      if (!open) {
        onOpenChange(true);
      }
    };

    window.addEventListener('open-lead-form', handleOpenLeadForm);
    
    return () => {
      console.log('🧹 LeadGenerationOverlay: Removing event listener');
      window.removeEventListener('open-lead-form', handleOpenLeadForm);
    };
  }, [open, onOpenChange, showBanner]);
  
  const internalOnOpenChange = (next: boolean) => {
    if (!next) {
      // Trigger bubble flight animation towards FAB before closing
      window.dispatchEvent(new Event('lead-overlay-bubble'));
      setTimeout(() => onOpenChange(false), 600);
      return;
    }
    onOpenChange(true);
  };

  const handleClose = () => internalOnOpenChange(false);

  // Notify when overlay opened (handshake for controllers)
  useEffect(() => {
    if (open) {
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('lead-overlay-opened', { detail: { mode } }));
      }, 0);
    }
  }, [open, mode]);

  // Dynamic header text based on mode and language
  const isPrototype = mode === 'prototype';
  const title = language === 'de' ? (isPrototype ? 'Kostenloses Konzept' : 'Starten Sie Ihr Projekt') : (isPrototype ? 'Free Concept' : 'Start your project');
  const description = language === 'de'
    ? (isPrototype ? 'Erhalten Sie in 48 Stunden ein strategisches Website-Konzept mit Wireframes nach AIDA-Prinzip – kostenlos und unverbindlich.' : 'Füllen Sie das Formular aus, um loszulegen')
    : (isPrototype ? 'Get a strategic website concept with AIDA-based wireframes within 48 hours – free and without obligation.' : 'Fill out the form to get started');
  return (
    <Sheet open={open} onOpenChange={internalOnOpenChange}>
      <SheetContent 
        className="w-full max-w-full sm:max-w-md overflow-y-auto bg-[#1a2630] text-white border-l border-white/10 z-[200]" 
        side="right"
      >
        {/* Close button with proper cursor and increased z-index */}
        <button 
          className={cn(
            "fixed top-4 right-4 z-[220] flex items-center justify-center rounded-full bg-primary text-white hover:bg-primary/90 transition-all duration-300 shadow-lg",
            "w-10 h-10 min-w-10 min-h-10 sm:top-7"
          )}
          onClick={handleClose}
          aria-label="Formular schließen"
          type="button"
        >
          <X className="w-6 h-6" aria-hidden="true" />
        </button>

        <SheetHeader className="text-left pb-4 pr-12">
          <SheetTitle className="text-xl font-bold text-white">
            {title}
          </SheetTitle>
          <SheetDescription className="text-white/70">
            {description}
          </SheetDescription>
        </SheetHeader>
        
        <LeadFormContent onClose={handleClose} mode={mode} />
      </SheetContent>
    </Sheet>
  );
};

export default React.memo(LeadGenerationOverlay);
