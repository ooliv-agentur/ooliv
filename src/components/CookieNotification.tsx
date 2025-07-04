
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
        className="fixed bottom-0 left-0 right-0 z-[9999] p-2 sm:p-4"
        style={{ zIndex: 9999 }}
      >
        <Card className="max-w-4xl mx-auto p-3 sm:p-6 bg-white/95 backdrop-blur-sm border-medico-turquoise/20 shadow-lg">
          <div className="flex items-start justify-between mb-3 sm:mb-4">
            <div className="flex items-start gap-2 sm:gap-3 flex-1 mr-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-medico-turquoise/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Cookie className="w-3 h-3 sm:w-4 sm:h-4 text-medico-turquoise" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-medico-darkGreen mb-1 sm:mb-2 text-sm sm:text-base leading-tight">
                  {t.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {t.description}
                </p>
              </div>
            </div>
            <button
              onClick={hideBanner}
              className="p-1 text-gray-400 hover:text-gray-600 flex-shrink-0 transition-colors touch-manipulation"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex justify-center sm:justify-start">
              <Link 
                to="/datenschutz" 
                className="text-medico-turquoise hover:text-medico-darkGreen hover:underline transition-colors text-xs sm:text-sm touch-manipulation"
              >
                {t.privacy}
              </Link>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowSettings(true)}
                className="border-medico-turquoise text-medico-turquoise hover:bg-medico-turquoise hover:text-white transition-colors text-xs sm:text-sm h-10 sm:h-9 touch-manipulation flex-1 sm:flex-none"
              >
                <Settings className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                {t.settings}
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                onClick={acceptEssential}
                className="border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors text-xs sm:text-sm h-10 sm:h-9 touch-manipulation flex-1 sm:flex-none"
              >
                {t.acceptEssential}
              </Button>
              
              <Button
                size="sm"
                onClick={acceptAll}
                className="bg-medico-turquoise hover:bg-medico-darkGreen text-white transition-colors text-xs sm:text-sm h-10 sm:h-9 touch-manipulation flex-1 sm:flex-none font-medium"
              >
                {t.acceptAll}
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {showSettings && (
        <CookieSettings onClose={() => setShowSettings(false)} />
      )}
    </>
  );
};

export default CookieNotification;
