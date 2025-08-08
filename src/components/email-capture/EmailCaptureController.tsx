import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import EmailCaptureModal from "./EmailCaptureModal";
import { useCookieConsent } from "@/contexts/CookieConsentContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";
import { getSupabaseHeaders, SEND_PROJECT_FORM_URL } from "@/utils/apiUtils";
import { useLocation } from "react-router-dom";

const SNOOZE_DAYS = 7;

const excludedPaths = new Set([
  "/danke",
  "/impressum",
  "/datenschutz",
  "/kontakt",
]);

const getNow = () => Date.now();
const daysToMs = (d: number) => d * 24 * 60 * 60 * 1000;

const storage = {
  get snoozeUntil() {
    const raw = localStorage.getItem("email-capture-snooze-until");
    return raw ? parseInt(raw, 10) : 0;
  },
  set snoozeUntil(ts: number) {
    localStorage.setItem("email-capture-snooze-until", String(ts));
  },
  markShown() {
    localStorage.setItem("email-capture-last-shown", String(getNow()));
  },
};

const EmailCaptureController: React.FC = () => {
  const { consent, showBanner } = useCookieConsent();
  const { language } = useLanguage();
  const { toast } = useToast();
  const location = useLocation();

  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const triggeredRef = useRef(false);

  const canShow = useMemo(() => {
    if (showBanner) return false; // banner visible → not accepted yet
    if (!consent) return false;   // no consent stored yet
    if (excludedPaths.has(location.pathname)) return false;
    const now = getNow();
    if (storage.snoozeUntil && storage.snoozeUntil > now) return false;
    return true;
  }, [consent, showBanner, location.pathname]);

  const openModal = useCallback(() => {
    if (triggeredRef.current || !canShow) return;
    triggeredRef.current = true;
    storage.markShown();
    setOpen(true);
  }, [canShow]);

  // Dwell time trigger
  useEffect(() => {
    if (!canShow) return;
    const id = window.setTimeout(openModal, 10000);
    return () => window.clearTimeout(id);
  }, [canShow, openModal]);

  // Exit-intent trigger (desktop)
  useEffect(() => {
    if (!canShow) return;
    const onMouseOut = (e: MouseEvent) => {
      if (!e.relatedTarget && e.clientY <= 0) {
        openModal();
      }
    };
    document.addEventListener("mouseout", onMouseOut);
    return () => document.removeEventListener("mouseout", onMouseOut);
  }, [canShow, openModal]);

  // Scroll-depth trigger (mobile fallback)
  useEffect(() => {
    if (!canShow) return;
    const onScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const progress = (scrollTop + winHeight) / docHeight;
      if (progress >= 0.5) {
        openModal();
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [canShow, openModal]);

  const snooze = useCallback(() => {
    storage.snoozeUntil = getNow() + daysToMs(SNOOZE_DAYS);
  }, []);

  const handleOpenChange = (next: boolean) => {
    if (!next) {
      snooze();
    }
    setOpen(next);
  };

  const submitEmail = useCallback(async (email: string) => {
    try {
      setIsSubmitting(true);

      const payload = {
        projectType: "prototype_request",
        companyName: "",
        industry: "",
        websiteUrl: window.location.origin,
        location: "",
        goal: "receive_prototype",
        name: "",
        email,
        phone: "",
        message:
          "Popup email capture: Interested in a free prototype for website redesign.",
        language,
      };

      const headers = getSupabaseHeaders();
      const res = await fetch(SEND_PROJECT_FORM_URL, {
        method: "POST",
        headers,
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.message || `HTTP ${res.status}`);
      }

      toast({
        title: language === "de" ? "Super!" : "Great!",
        description:
          language === "de"
            ? "Wir melden uns kurzfristig mit einem Vorschlag."
            : "We’ll get back to you shortly with a proposal.",
      });

      snooze();
      setOpen(false);
    } catch (e: any) {
      toast({
        title: language === "de" ? "Fehler" : "Error",
        description:
          language === "de"
            ? "Leider hat es nicht geklappt. Bitte später erneut versuchen."
            : "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }, [language, toast, snooze]);

  // Do not render anything until we can show (keeps tree light)
  return (
    <EmailCaptureModal
      open={open}
      onOpenChange={handleOpenChange}
      onSubmitEmail={submitEmail}
      isSubmitting={isSubmitting}
    />
  );
};

export default React.memo(EmailCaptureController);
