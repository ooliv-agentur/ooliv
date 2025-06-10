
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useIsMobile } from '@/hooks/use-mobile';

const GoogleAdsProcess = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';
  const isMobile = useIsMobile();
  
  const translations = {
    en: {
      title: "Our Campaign Process – From Audit to Growth",
      steps: [
        {
          number: "01",
          title: "Campaign Strategy",
          description: "Define your audience, value propositions, budgets, and KPIs"
        },
        {
          number: "02",
          title: "Landing Page Creation",
          description: "We design SEO-ready, mobile-first landing pages tailored to your specific offers"
        },
        {
          number: "03",
          title: "Google Ads Setup",
          description: "We launch and manage campaigns across Google Ads — Search, Display, and Performance Max"
        },
        {
          number: "04",
          title: "Tracking & Protection",
          description: "We set up event tracking to monitor performance, block invalid clicks, and ensure data accuracy"
        },
        {
          number: "05",
          title: "Reporting & Optimization",
          description: "We iterate and improve your funnel through weekly insights and A/B tests"
        }
      ],
      scrollHint: "Scroll to see more"
    },
    de: {
      title: "Unser Kampagnen-Prozess – von Strategie bis Skalierung",
      steps: [
        {
          number: "01",
          title: "Strategie & Setup",
          description: "Zielgruppen, Angebote, Budgets und KPIs definieren"
        },
        {
          number: "02",
          title: "Landingpage-Erstellung",
          description: "Mobileoptimierte Seiten mit klarem Nutzen & schneller Ladezeit"
        },
        {
          number: "03",
          title: "Kampagnen-Setup",
          description: "Anzeigen starten – Search, Display & Performance Max"
        },
        {
          number: "04",
          title: "Tracking & Schutz",
          description: "Ereignisse erfassen, Klickbetrug blockieren, Datenqualität sichern"
        },
        {
          number: "05",
          title: "Reporting & Optimierung",
          description: "A/B-Tests, Funnel-Analysen & wöchentliche Verbesserungen"
        }
      ],
      scrollHint: "Weiter scrollen für mehr"
    }
  };
  
  const t = isGerman ? translations.de : translations.en;

  return (
    <section className="py-16 md:py-24 bg-brand-backgroundAlt overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-4">
            {t.title}
          </h2>
        </div>
        
        {/* Desktop Version */}
        <div className="hidden lg:block">
          <div className="grid lg:grid-cols-5 gap-6">
            {t.steps.map((step, index) => (
              <div key={index} className="bg-white rounded-lg p-6 h-full shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center text-xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-heading">{step.title}</h3>
                <p className="text-brand-text">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Mobile and Tablet Version with native scrolling */}
        <div className="lg:hidden">
          <div className="overflow-x-auto">
            <div className="flex gap-6 pb-4 min-w-max">
              {t.steps.map((step, index) => (
                <div key={index} className="flex-shrink-0 w-80 bg-white rounded-lg p-6 h-full shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center text-xl font-bold mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-brand-heading">{step.title}</h3>
                  <p className="text-brand-text">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {isMobile && (
            <div className="text-center mt-3 text-sm text-gray-500">
              {t.scrollHint} ›
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GoogleAdsProcess;
