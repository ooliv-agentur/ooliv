import React, { useState, useEffect } from 'react';
import { X, Download, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const ExitIntentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check if popup was already shown in this session
    const popupShown = sessionStorage.getItem('exitIntentShown');
    if (popupShown) return;

    // Track mouse movement for exit intent
    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse leaves from top of viewport
      if (e.clientY <= 0) {
        setIsVisible(true);
        sessionStorage.setItem('exitIntentShown', 'true');
      }
    };

    // Add slight delay before activating to avoid false triggers
    const timeout = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave);
    }, 3000);

    return () => {
      clearTimeout(timeout);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Ungültige E-Mail",
        description: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('leads')
        .insert({
          email,
          name: 'Exit Intent Lead',
          industry: 'Lead Magnet Download',
          message: 'Digital-Strategie Checkliste angefordert',
          source: 'exit_intent_popup'
        });

      if (error) throw error;

      setIsSuccess(true);
      toast({
        title: "Erfolgreich!",
        description: "Die Checkliste wird Ihnen per E-Mail zugeschickt.",
      });

      setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    } catch (error) {
      console.error('Error submitting lead:', error);
      toast({
        title: "Fehler",
        description: "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 animate-fade-in"
        onClick={handleClose}
      />

      {/* Popup */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md animate-scale-in">
        <div className="bg-card border border-border rounded-2xl shadow-2xl mx-4">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute -top-3 -right-3 h-10 w-10 bg-background border border-border rounded-full flex items-center justify-center hover:bg-muted transition-colors shadow-lg"
          >
            <X className="h-5 w-5 text-muted-foreground" />
          </button>

          <div className="p-8">
            {!isSuccess ? (
              <>
                {/* Icon */}
                <div className="h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Download className="h-8 w-8 text-primary" />
                </div>

                {/* Headline */}
                <h3 className="text-2xl font-bold text-center mb-3 text-foreground">
                  Warten Sie! 🎁
                </h3>
                
                {/* Subheadline */}
                <p className="text-center text-muted-foreground mb-2">
                  Laden Sie unsere kostenlose
                </p>
                <p className="text-center text-lg font-semibold text-foreground mb-6">
                  Digital-Strategie Checkliste
                </p>

                {/* Value proposition */}
                <div className="bg-muted/50 rounded-lg p-4 mb-6">
                  <p className="text-sm text-center text-muted-foreground">
                    <strong className="text-foreground">23 essenzielle Punkte</strong>, die jede B2B-Website haben sollte – von Strategie über UX bis zu messbaren KPIs.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Ihre E-Mail-Adresse"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-12"
                  />
                  <Button 
                    type="submit"
                    className="w-full h-12"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent" />
                        Wird gesendet...
                      </span>
                    ) : (
                      <>
                        <Download className="mr-2 h-5 w-5" />
                        Jetzt kostenlos herunterladen
                      </>
                    )}
                  </Button>
                </form>

                {/* Privacy note */}
                <p className="text-xs text-center text-muted-foreground mt-4">
                  Kein Spam. Sie können sich jederzeit abmelden.
                </p>
              </>
            ) : (
              <>
                {/* Success state */}
                <div className="h-16 w-16 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-3 text-foreground">
                  Vielen Dank!
                </h3>
                <p className="text-center text-muted-foreground">
                  Die Checkliste wird Ihnen in Kürze per E-Mail zugeschickt.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ExitIntentPopup;
