
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { X, Cookie, Shield, BarChart3, Target, Settings } from 'lucide-react';
import { useCookieConsent } from '@/contexts/CookieConsentContext';
import { useLanguage } from '@/contexts/LanguageContext';

interface CookieSettingsProps {
  onClose: () => void;
}

const CookieSettings = ({ onClose }: CookieSettingsProps) => {
  const { consent, updateConsent } = useCookieConsent();
  const { language } = useLanguage();
  
  const [settings, setSettings] = useState({
    essential: true,
    analytics: false,
    marketing: false,
    preferences: false
  });

  // Initialize settings from current consent when component mounts
  useEffect(() => {
    if (consent) {
      setSettings({
        essential: consent.essential,
        analytics: consent.analytics,
        marketing: consent.marketing,
        preferences: consent.preferences
      });
    }
  }, [consent]);

  const content = {
    de: {
      title: "Cookie-Einstellungen verwalten",
      description: "Wählen Sie, welche Cookies Sie zulassen möchten. Sie können diese Einstellungen jederzeit ändern.",
      essential: {
        title: "Notwendige Cookies",
        description: "Diese Cookies sind für das ordnungsgemäße Funktionieren der Website erforderlich und können nicht deaktiviert werden."
      },
      analytics: {
        title: "Analytische Cookies",
        description: "Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren."
      },
      marketing: {
        title: "Marketing-Cookies",
        description: "Diese Cookies werden verwendet, um Ihnen relevante Werbung basierend auf Ihren Interessen zu zeigen."
      },
      preferences: {
        title: "Präferenz-Cookies",
        description: "Diese Cookies speichern Ihre Einstellungen und Präferenzen für zukünftige Besuche."
      },
      save: "Einstellungen speichern",
      acceptAll: "Alle akzeptieren"
    },
    en: {
      title: "Manage Cookie Settings",
      description: "Choose which cookies you want to allow. You can change these settings at any time.",
      essential: {
        title: "Essential Cookies",
        description: "These cookies are necessary for the proper functioning of the website and cannot be disabled."
      },
      analytics: {
        title: "Analytics Cookies", 
        description: "These cookies help us understand how visitors interact with our website."
      },
      marketing: {
        title: "Marketing Cookies",
        description: "These cookies are used to show you relevant advertising based on your interests."
      },
      preferences: {
        title: "Preference Cookies",
        description: "These cookies store your settings and preferences for future visits."
      },
      save: "Save Settings",
      acceptAll: "Accept All"
    }
  };

  const t = content[language];

  const cookieCategories = [
    {
      key: 'essential' as const,
      icon: Shield,
      title: t.essential.title,
      description: t.essential.description,
      required: true
    },
    {
      key: 'analytics' as const,
      icon: BarChart3,
      title: t.analytics.title,
      description: t.analytics.description,
      required: false
    },
    {
      key: 'marketing' as const,
      icon: Target,
      title: t.marketing.title,
      description: t.marketing.description,
      required: false
    },
    {
      key: 'preferences' as const,
      icon: Settings,
      title: t.preferences.title,
      description: t.preferences.description,
      required: false
    }
  ];

  const handleToggle = (key: keyof typeof settings) => {
    if (key === 'essential') return; // Cannot disable essential cookies
    
    console.log(`Toggling ${key} from ${settings[key]} to ${!settings[key]}`);
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleSave = () => {
    console.log('Saving cookie settings:', settings);
    updateConsent(settings);
    onClose();
  };

  const handleAcceptAll = () => {
    const allAccepted = {
      essential: true,
      analytics: true,
      marketing: true,
      preferences: true
    };
    console.log('Accepting all cookies:', allAccepted);
    setSettings(allAccepted);
    updateConsent(allAccepted);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[10000] bg-black/50 flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto bg-white">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-medico-turquoise/10 rounded-full flex items-center justify-center">
                <Cookie className="w-4 h-4 text-medico-turquoise" />
              </div>
              <h2 className="text-xl font-semibold text-medico-darkGreen">
                {t.title}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-1 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <p className="text-gray-600 mb-6">
            {t.description}
          </p>

          <div className="space-y-4 mb-6">
            {cookieCategories.map((category) => {
              const Icon = category.icon;
              const isChecked = settings[category.key];
              
              return (
                <div key={category.key} className="border border-gray-200 rounded-lg p-4 hover:border-medico-turquoise/30 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Icon className="w-5 h-5 text-medico-turquoise" />
                        <h3 className="font-medium text-medico-darkGreen">
                          {category.title}
                        </h3>
                      </div>
                      <p className="text-sm text-gray-600 pr-4">
                        {category.description}
                      </p>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                      <Switch
                        checked={isChecked}
                        onCheckedChange={() => handleToggle(category.key)}
                        disabled={category.required}
                        className="data-[state=checked]:bg-medico-turquoise data-[state=unchecked]:bg-gray-200"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex gap-3">
            <Button
              onClick={handleSave}
              className="flex-1 bg-medico-turquoise hover:bg-medico-darkGreen text-white"
            >
              {t.save}
            </Button>
            <Button
              onClick={handleAcceptAll}
              variant="outline"
              className="border-medico-turquoise text-medico-turquoise hover:bg-medico-turquoise hover:text-white"
            >
              {t.acceptAll}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CookieSettings;
