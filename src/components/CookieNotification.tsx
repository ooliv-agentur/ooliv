
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { X, Settings, Cookie } from 'lucide-react';
import { useCookieConsent } from '@/contexts/CookieConsentContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import CookieSettings from './CookieSettings';

const CookieNotification = () => {
  const { showBanner, acceptAll, acceptEssential, hideBanner } = useCookieConsent();
  const { language } = useLanguage();
  const [showSettings, setShowSettings] = useState(false);

  // Debug logging
  useEffect(() => {
    console.log('CookieNotification: showBanner state changed to:', showBanner);
    console.log('CookieNotification: localStorage cookie-consent:', localStorage.getItem('cookie-consent'));
  }, [showBanner]);

  const content = {
    de: {
      title: "Diese Website verwendet Cookies",
      description: "Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. Einige sind notwendig, andere helfen uns, die Website zu verbessern.",
      acceptAll: "Alle akzeptieren",
      acceptEssential: "Nur notwendige",
      settings: "Einstellungen",
      privacy: "Datenschutz"
    },
    en: {
      title: "This website uses cookies",
      description: "We use cookies to provide you with the best possible experience on our website. Some are necessary, others help us improve the site.",
      acceptAll: "Accept all",
      acceptEssential: "Essential only", 
      settings: "Settings",
      privacy: "Privacy"
    }
  };

  const t = content[language];

  console.log('CookieNotification render: showBanner =', showBanner);

  if (!showBanner) {
    console.log('CookieNotification: Banner hidden, returning null');
    return null;
  }

  console.log('CookieNotification: Rendering banner - should be visible now!');

  return (
    <>
      <div 
        className="fixed bottom-0 left-0 right-0 z-[9999] animate-slide-in-bottom"
        style={{ zIndex: 9999 }}
      >
        <div className="bg-white/95 backdrop-blur-sm border-t border-border/50 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4 flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <Cookie className="w-4 h-4 text-medico-turquoise flex-shrink-0" />
                  <span className="text-sm font-medium text-medico-darkGreen">
                    {language === 'de' ? 'Cookies' : 'Cookies'}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground hidden sm:block truncate">
                  {language === 'de' 
                    ? 'Wir nutzen Cookies für die beste Erfahrung.' 
                    : 'We use cookies for the best experience.'
                  }
                  <Link 
                    to="/datenschutz" 
                    className="ml-1 text-medico-turquoise hover:underline"
                  >
                    {t.privacy}
                  </Link>
                </p>
              </div>
              
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowSettings(true)}
                  className="text-xs h-7 px-2 text-muted-foreground hover:text-medico-turquoise"
                >
                  <Settings className="w-3 h-3 mr-1" />
                  <span className="hidden sm:inline">{t.settings}</span>
                </Button>
                
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={acceptEssential}
                  className="text-xs h-7 px-2 text-muted-foreground hover:text-foreground"
                >
                  {language === 'de' ? 'Nur nötige' : 'Essential'}
                </Button>
                
                <Button
                  size="sm"
                  onClick={acceptAll}
                  className="text-xs h-7 px-3 bg-medico-turquoise hover:bg-medico-darkGreen text-white"
                >
                  {language === 'de' ? 'Alle' : 'Accept'}
                </Button>
                
                <button
                  onClick={hideBanner}
                  className="p-1 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showSettings && (
        <CookieSettings onClose={() => setShowSettings(false)} />
      )}
    </>
  );
};

export default CookieNotification;
