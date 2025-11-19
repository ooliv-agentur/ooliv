
import React, { useEffect, useState } from 'react';
import { 
  Sheet,
  SheetContent
} from "@/components/ui/sheet";
import { X } from 'lucide-react';
import LeadFormContainer from './lead-form/LeadFormContainer';
import LeadFormHeader from './lead-form/LeadFormHeader';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCookieConsent } from '@/contexts/CookieConsentContext';
interface LeadGenerationOverlayProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const LeadGenerationOverlay = ({ open, onOpenChange }: LeadGenerationOverlayProps) => {
  const [mode, setMode] = useState<'project' | 'prototype'>('project');
  const [initialData, setInitialData] = useState<any>(null);
  const { language } = useLanguage();
  const { showBanner } = useCookieConsent();
  // Listen for the global event to open the lead form
  useEffect(() => {
    console.log('🔧 LeadGenerationOverlay: Setting up event listener');
    
    const handleOpenLeadForm = (event: any) => {
      // Note: Removed cookie banner check to allow form to open regardless of banner state
      console.log('🎯 LeadGenerationOverlay: Received open-lead-form event');
      
      const mode = event?.detail?.mode as 'prototype' | 'project' | undefined;
      const variant = event?.detail?.variant as 'prototype' | 'project' | undefined;
      const source = event?.detail?.source as string | undefined;
      const data = event?.detail?.initialData;
      const nextMode: 'project' | 'prototype' = mode ?? variant ?? (source?.toLowerCase().includes('prototype') ? 'prototype' : 'project');
      setMode(nextMode);
      setInitialData(data || null);
      console.log('🎯 LeadGenerationOverlay: open-lead-form variant:', nextMode, 'with initial data:', data);
      if (!open) {
        onOpenChange(true);
      }
    };

    window.addEventListener('open-lead-form', handleOpenLeadForm);
    
    return () => {
      console.log('🧹 LeadGenerationOverlay: Removing event listener');
      window.removeEventListener('open-lead-form', handleOpenLeadForm);
    };
  }, [open, onOpenChange]); // Removed showBanner dependency
  
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
  const title = language === 'de' ? (isPrototype ? 'Starten Sie jetzt mit ooliv' : 'Starten Sie jetzt mit ooliv') : (isPrototype ? 'Get Started with ooliv' : 'Get Started with ooliv');
  const description = language === 'de'
    ? (isPrototype ? 'Uli und das ooliv-Team entwickeln Ihre digitale Strategie – persönlich, messbar, erfolgreich' : 'Uli und das ooliv-Team entwickeln Ihre digitale Strategie – persönlich, messbar, erfolgreich')
    : (isPrototype ? 'Uli and the ooliv team develop your digital strategy – personal, measurable, successful' : 'Uli and the ooliv team develop your digital strategy – personal, measurable, successful');
  return (
    <Sheet open={open} onOpenChange={internalOnOpenChange}>
      <SheetContent 
        className="w-full max-w-full sm:max-w-md overflow-y-auto bg-black text-white border-l border-white/10 z-[200]" 
        side="right"
      >
        {/* Close button with proper cursor and increased z-index */}
        <button 
          className={cn(
            "fixed top-4 right-4 z-[220] flex items-center justify-center rounded-full bg-white text-black hover:bg-white/90 transition-all duration-300 shadow-lg",
            "w-10 h-10 min-w-10 min-h-10 sm:top-7"
          )}
          onClick={handleClose}
          aria-label="Formular schließen"
          type="button"
        >
          <X className="w-6 h-6" aria-hidden="true" />
        </button>

        <div className="lead-form-content">
          <LeadFormHeader title={title} description={description} />
          
          <LeadFormContainer onClose={handleClose} mode={mode} initialData={initialData} />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default React.memo(LeadGenerationOverlay);
