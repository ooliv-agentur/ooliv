
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface CookieConsent {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

interface CookieConsentContextType {
  consent: CookieConsent | null;
  showBanner: boolean;
  acceptAll: () => void;
  acceptEssential: () => void;
  updateConsent: (newConsent: CookieConsent) => void;
  hideBanner: () => void;
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

export const useCookieConsent = () => {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error('useCookieConsent must be used within a CookieConsentProvider');
  }
  return context;
};

interface CookieConsentProviderProps {
  children: ReactNode;
}

export const CookieConsentProvider = ({ children }: CookieConsentProviderProps) => {
  const [consent, setConsent] = useState<CookieConsent | null>(null);
  const [showBanner, setShowBanner] = useState(false);

  const getSessionId = () => {
    let sessionId = localStorage.getItem('cookie-session-id');
    if (!sessionId) {
      sessionId = Math.random().toString(36).substring(2) + Date.now().toString(36);
      localStorage.setItem('cookie-session-id', sessionId);
    }
    return sessionId;
  };

  const saveConsent = async (newConsent: CookieConsent) => {
    try {
      const sessionId = getSessionId();
      
      await supabase.from('cookie_consents').insert({
        session_id: sessionId,
        essential: newConsent.essential,
        analytics: newConsent.analytics,
        marketing: newConsent.marketing,
        preferences: newConsent.preferences,
        ip_address: null, // Could be populated server-side
        user_agent: navigator.userAgent
      });

      localStorage.setItem('cookie-consent', JSON.stringify(newConsent));
      setConsent(newConsent);
      setShowBanner(false);
    } catch (error) {
      console.error('Error saving cookie consent:', error);
    }
  };

  const acceptAll = () => {
    const allConsent = {
      essential: true,
      analytics: true,
      marketing: true,
      preferences: true
    };
    saveConsent(allConsent);
  };

  const acceptEssential = () => {
    const essentialConsent = {
      essential: true,
      analytics: false,
      marketing: false,
      preferences: false
    };
    saveConsent(essentialConsent);
  };

  const updateConsent = (newConsent: CookieConsent) => {
    saveConsent(newConsent);
  };

  const hideBanner = () => {
    setShowBanner(false);
  };

  useEffect(() => {
    const storedConsent = localStorage.getItem('cookie-consent');
    if (storedConsent) {
      setConsent(JSON.parse(storedConsent));
      setShowBanner(false);
    } else {
      setShowBanner(true);
    }
  }, []);

  return (
    <CookieConsentContext.Provider
      value={{
        consent,
        showBanner,
        acceptAll,
        acceptEssential,
        updateConsent,
        hideBanner
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
};
