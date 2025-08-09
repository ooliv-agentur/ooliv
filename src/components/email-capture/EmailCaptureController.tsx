import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { useCookieConsent } from "@/contexts/CookieConsentContext";
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
  const location = useLocation();
  const triggeredRef = useRef(false);

  const canShow = useMemo(() => {
    const params = new URLSearchParams(location.search);
    const force = params.get("forceEmailCapture") === "1";
    if (force) return true;
    if (showBanner) return false; // banner visible → not accepted yet
    if (!consent) return false;   // no consent stored yet
    if (excludedPaths.has(location.pathname)) return false;
    const now = getNow();
    if (storage.snoozeUntil && storage.snoozeUntil > now) return false;
    return true;
  }, [consent, showBanner, location.pathname, location.search]);

  const openOverlay = useCallback(() => {
    console.log('🚀 EmailCaptureController: openOverlay called, triggered:', triggeredRef.current, 'canShow:', canShow);
    if (triggeredRef.current || !canShow) return;
    triggeredRef.current = true;
    storage.markShown();
    console.log('📧 EmailCaptureController: Dispatching prototype overlay event');
    window.dispatchEvent(
      new CustomEvent("open-lead-form", { detail: { source: "EmailCaptureController", variant: "prototype" } })
    );
  }, [canShow]);

  // Dwell time trigger
  useEffect(() => {
    if (!canShow) return;
    const id = window.setTimeout(openOverlay, 8000);
    return () => window.clearTimeout(id);
  }, [canShow, openOverlay]);

  // Exit-intent trigger (desktop)
  useEffect(() => {
    if (!canShow) return;
    const onMouseOut = (e: MouseEvent) => {
      if (!e.relatedTarget && e.clientY <= 0) {
        openOverlay();
      }
    };
    document.addEventListener("mouseout", onMouseOut);
    return () => document.removeEventListener("mouseout", onMouseOut);
  }, [canShow, openOverlay]);

  // Scroll-depth trigger (mobile fallback)
  useEffect(() => {
    if (!canShow) return;
    const onScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const progress = (scrollTop + winHeight) / docHeight;
      if (progress >= 0.5) {
        openOverlay();
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [canShow, openOverlay]);

  // Open immediately after consent (banner hides)
  React.useEffect(() => {
    console.log('🔄 EmailCaptureController: showBanner:', showBanner, 'canShow:', canShow, 'consent:', consent);
    if (!showBanner && canShow && consent) {
      console.info("✅ LeadOverlay: opening prototype form immediately after consent");
      openOverlay();
    } else {
      console.log('❌ Not opening overlay:', { showBanner, canShow, consent });
    }
  }, [showBanner, canShow, openOverlay, consent]);

  // Force open via URL param for testing
  React.useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("forceEmailCapture") === "1") {
      console.info("🔧 LeadOverlay: forcing open via URL param");
      // Reset snooze for testing
      storage.snoozeUntil = 0;
      openOverlay();
    }
  }, [location.search, openOverlay]);

  // Snooze when the overlay is closed (event dispatched from App)
  useEffect(() => {
    const onClosed = () => {
      storage.snoozeUntil = getNow() + daysToMs(SNOOZE_DAYS);
    };
    window.addEventListener("lead-overlay-closed", onClosed);
    return () => window.removeEventListener("lead-overlay-closed", onClosed);
  }, []);

  // Debug info with mobile detection
  useEffect(() => {
    const now = getNow();
    const reasons: string[] = [];
    const isMobile = window.innerWidth < 768;
    if (showBanner) reasons.push("showBanner=true");
    if (!consent) reasons.push("no consent yet");
    if (excludedPaths.has(location.pathname)) reasons.push("excluded path");
    if (storage.snoozeUntil && storage.snoozeUntil > now) reasons.push(`snoozed until ${new Date(storage.snoozeUntil).toISOString()}`);
    console.info(`📱 LeadOverlay canShow=${canShow} | Mobile: ${isMobile}`, { reasons, consent, showBanner, path: location.pathname });
  }, [canShow, consent, showBanner, location.pathname]);

  return null;
};

export default React.memo(EmailCaptureController);
