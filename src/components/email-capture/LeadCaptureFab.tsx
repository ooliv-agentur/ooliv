import React, { useEffect, useMemo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "lead-fab-visible";

const useFabVisibility = () => {
  const [visible, setVisible] = useState<boolean>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw === "1" ? true : false;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const onClosed = () => {
      setVisible(true);
      try { localStorage.setItem(STORAGE_KEY, "1"); } catch {}
    };
    const onOpened = () => {
      setVisible(false);
    };
    window.addEventListener("lead-overlay-closed", onClosed);
    window.addEventListener("open-lead-form", onOpened as any);
    return () => {
      window.removeEventListener("lead-overlay-closed", onClosed);
      window.removeEventListener("open-lead-form", onOpened as any);
    };
  }, []);

  // Allow forcing visibility via URL for testing
  const forceVisible = useMemo(() => new URLSearchParams(location.search).get("forceLeadFab") === "1", []);

  return forceVisible ? true : visible;
};

const bubbleDuration = 0.55;

export default function LeadCaptureFab() {
  const visible = useFabVisibility();
  const [bubble, setBubble] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const onBubble = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      // Animate from screen center to FAB position (bottom-right padding 20)
      setBubble({ x: vw / 2, y: vh / 2 });
      const t = setTimeout(() => setBubble(null), bubbleDuration * 1000 + 50);
      return () => clearTimeout(t);
    };
    window.addEventListener("lead-overlay-bubble", onBubble);
    return () => window.removeEventListener("lead-overlay-bubble", onBubble);
  }, []);

  const openLead = useCallback(() => {
    window.dispatchEvent(new CustomEvent("open-lead-form", { detail: { source: "LeadCaptureFab" } }));
  }, []);

  return (
    <>
      {/* Bubble flight animation */}
      <AnimatePresence>
        {bubble && (
          <motion.div
            key="lead-bubble"
            initial={{ opacity: 0, scale: 0.8, x: bubble.x - 24, y: bubble.y - 24 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: (typeof window !== "undefined" ? window.innerWidth - 72 : 0),
              y: (typeof window !== "undefined" ? window.innerHeight - 88 : 0),
            }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ duration: bubbleDuration, ease: [0.22, 1, 0.36, 1] }}
            className="fixed z-[215] w-12 h-12 rounded-full bg-accent-primary shadow-lg"
          />
        )}
      </AnimatePresence>

      {/* Floating FAB */}
      <AnimatePresence>
        {visible && (
          <motion.button
            key="lead-fab"
            layout
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ duration: 0.25 }}
            onClick={openLead}
            className={cn(
              "fixed z-[216] flex items-center gap-2 rounded-full px-4 h-12",
              "bg-accent-primary text-white shadow-xl hover:shadow-2xl",
              "transition-transform duration-200 hover:scale-105 active:scale-95"
            )}
            style={{
              right: "max(1.5rem, env(safe-area-inset-right))",
              bottom: "max(1.5rem, env(safe-area-inset-bottom))",
            }}
            aria-label="Kostenlosen Prototyp öffnen"
          >
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20">
              <Mail className="w-4 h-4" />
            </span>
            <span className="font-medium hidden sm:inline">Kostenloser Prototyp</span>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
