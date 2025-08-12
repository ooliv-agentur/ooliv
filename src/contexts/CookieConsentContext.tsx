
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
  const [showBanner, setShowBanner] = useState(false); // Start hidden to avoid flicker; will show after init if needed

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
      
      console.log('Saving cookie consent:', newConsent);
      
      // Save to database for analytics (write-only)
      await supabase.from('cookie_consents').insert({
        session_id: sessionId,
        essential: newConsent.essential,
        analytics: newConsent.analytics,
        marketing: newConsent.marketing,
        preferences: newConsent.preferences,
        ip_address: null, // Could be populated server-side
        user_agent: navigator.userAgent
      });

      // Store locally for future reference (primary source of truth for frontend)
      localStorage.setItem('cookie-consent', JSON.stringify(newConsent));
      localStorage.setItem('cookie-consent-timestamp', Date.now().toString());
      
      setConsent(newConsent);
      setShowBanner(false);
      console.log('Cookie consent saved successfully, banner hidden');
    } catch (error) {
      console.error('Error saving cookie consent to database:', error);
      // Still save locally even if database insert fails
      localStorage.setItem('cookie-consent', JSON.stringify(newConsent));
      localStorage.setItem('cookie-consent-timestamp', Date.now().toString());
      setConsent(newConsent);
      setShowBanner(false);
    }
  };

  const acceptAll = () => {
    const allConsent = {
      essential: true,
      analytics: true,
      marketing: true,
      preferences: true
    };
    console.log('Accepting all cookies');
    saveConsent(allConsent);
  };

  const acceptEssential = () => {
    const essentialConsent = {
      essential: true,
      analytics: false,
      marketing: false,
      preferences: false
    };
    console.log('Accepting essential cookies only');
    saveConsent(essentialConsent);
  };

  const updateConsent = (newConsent: CookieConsent) => {
    console.log('Updating cookie consent:', newConsent);
    saveConsent(newConsent);
  };

  const hideBanner = () => {
    console.log('Hiding cookie banner');
    setShowBanner(false);
  };

  useEffect(() => {
    console.log('CookieConsentProvider: Initializing...');
    const storedConsent = localStorage.getItem('cookie-consent');
    
    if (storedConsent) {
      try {
        const parsedConsent = JSON.parse(storedConsent);
        console.log('Found existing consent:', parsedConsent);
        setConsent(parsedConsent);
        setShowBanner(false);
        console.log('Banner set to false due to existing consent');
      } catch (error) {
        console.error('Error parsing stored consent:', error);
        // If parsing fails, remove the invalid data and show banner
        localStorage.removeItem('cookie-consent');
        setShowBanner(true);
        console.log('Invalid consent data removed, showing banner');
      }
    } else {
      console.log('No existing consent found, showing banner');
      setShowBanner(true);
    }
  }, []);

  // Debug log whenever showBanner changes
  useEffect(() => {
    console.log('CookieConsentProvider: showBanner changed to:', showBanner);
  }, [showBanner]);

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
