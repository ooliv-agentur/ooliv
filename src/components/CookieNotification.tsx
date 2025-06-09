
import React, { useState } from 'react';
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

  if (!showBanner) return null;

  const content = {
    de: {
      title: "Cookie-Einstellungen",
      description: "Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. Einige Cookies sind für den Betrieb der Website unerlässlich, während andere uns dabei helfen, die Website zu verbessern und Ihnen personalisierte Inhalte anzuzeigen.",
      acceptAll: "Alle akzeptieren",
      acceptEssential: "Nur notwendige",
      settings: "Einstellungen",
      learnMore: "Mehr erfahren",
      cookiePolicy: "/datenschutz"
    },
    en: {
      title: "Cookie Settings",
      description: "We use cookies to provide you with the best possible experience on our website. Some cookies are essential for the operation of the website, while others help us improve the website and show you personalized content.",
      acceptAll: "Accept All",
      acceptEssential: "Essential Only",
      settings: "Settings",
      learnMore: "Learn More",
      cookiePolicy: "/en/privacy-policy"
    }
  };

  const t = content[language];

  if (showSettings) {
    return <CookieSettings onClose={() => setShowSettings(false)} />;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <Card className="max-w-4xl mx-auto bg-white border-2 border-medico-turquoise/20 shadow-xl">
        <div className="p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-medico-turquoise/10 rounded-full flex items-center justify-center">
              <Cookie className="w-4 h-4 text-medico-turquoise" />
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-medico-darkGreen mb-2">
                {t.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                {t.description}{' '}
                <Link 
                  to={t.cookiePolicy} 
                  className="text-medico-turquoise hover:text-medico-darkGreen underline"
                >
                  {t.learnMore}
                </Link>
              </p>
              
              <div className="flex flex-wrap gap-3">
                <Button
                  onClick={acceptAll}
                  className="bg-medico-turquoise hover:bg-medico-darkGreen text-white px-6 py-2 rounded-full"
                >
                  {t.acceptAll}
                </Button>
                
                <Button
                  onClick={acceptEssential}
                  variant="outline"
                  className="border-medico-turquoise text-medico-turquoise hover:bg-medico-turquoise hover:text-white px-6 py-2 rounded-full"
                >
                  {t.acceptEssential}
                </Button>
                
                <Button
                  onClick={() => setShowSettings(true)}
                  variant="ghost"
                  className="text-medico-darkGreen hover:text-medico-turquoise px-6 py-2 rounded-full"
                >
                  <Settings className="w-4 h-4 mr-2" />
                  {t.settings}
                </Button>
              </div>
            </div>
            
            <button
              onClick={hideBanner}
              className="flex-shrink-0 p-1 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CookieNotification;
