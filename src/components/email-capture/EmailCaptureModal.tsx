import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface EmailCaptureModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmitEmail: (email: string) => Promise<void>;
  isSubmitting?: boolean;
}

const EmailCaptureModal: React.FC<EmailCaptureModalProps> = ({ open, onOpenChange, onSubmitEmail, isSubmitting }) => {
  const { language } = useLanguage();
  const [email, setEmail] = useState("");
  const [touched, setTouched] = useState(false);

  const isValidEmail = (value: string) => /[^\s@]+@[^\s@]+\.[^\s@]+/.test(value);
  const showError = touched && !isValidEmail(email);

  const copy = {
    de: {
      title: "Kostenlosen Prototyp sichern",
      description: "Wir senden Ihnen einen Vorschlag mit Struktur, ersten Textideen und klarer Nutzerführung.",
      emailLabel: "E-Mail-Adresse",
      cta: "Vorschlag erhalten",
      hint: "Kostenfrei & unverbindlich – Antwort innerhalb von 24h",
      privacy: "Mit Klick stimmen Sie der Verarbeitung gemäß Datenschutzerklärung zu.",
      invalid: "Bitte eine gültige E-Mail-Adresse eingeben.",
      privacyLink: "/datenschutz"
    },
    en: {
      title: "Get your free prototype",
      description: "We'll send you a proposal with structure, first copy ideas and clear UX.",
      emailLabel: "Email address",
      cta: "Get proposal",
      hint: "Free & no obligation – reply within 24h",
      privacy: "By clicking you agree to processing as per our privacy policy.",
      invalid: "Please enter a valid email address.",
      privacyLink: "/datenschutz"
    }
  } as const;

  const t = copy[language];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (!isValidEmail(email)) return;
    await onSubmitEmail(email.trim());
    setEmail("");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={cn(
        "sm:rounded-xl border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80",
        "p-6 sm:p-8"
      )}>
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold tracking-tight">
            {t.title}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {t.description}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">{t.emailLabel}</Label>
            <Input
              id="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => setTouched(true)}
              placeholder="name@beispiel.de"
              aria-invalid={showError}
              aria-describedby={showError ? "email-error" : undefined}
            />
            {showError && (
              <p id="email-error" className="text-sm text-destructive">
                {t.invalid}
              </p>
            )}
          </div>

          <Button type="submit" disabled={!isValidEmail(email) || !!isSubmitting} className="w-full">
            {isSubmitting ? (language === 'de' ? 'Senden…' : 'Sending…') : t.cta}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            {t.hint}
          </p>

          <p className="text-[11px] text-muted-foreground/90 text-center">
            {t.privacy} <Link to={t.privacyLink} className="underline">Datenschutz</Link>
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default React.memo(EmailCaptureModal);
