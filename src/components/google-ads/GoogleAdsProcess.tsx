
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const GoogleAdsProcess = () => {
  const isMobile = useIsMobile();
  
  const steps = [
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
  ];

  return (
    <section className="py-16 md:py-24 bg-brand-backgroundAlt overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-4">
            Unser Kampagnen-Prozess – von Strategie bis Skalierung
          </h2>
        </div>
        
        {/* Desktop Version */}
        <div className="hidden lg:block">
          <div className="grid lg:grid-cols-5 gap-6">
            {steps.map((step, index) => (
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
              {steps.map((step, index) => (
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
              Weiter scrollen für mehr ›
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GoogleAdsProcess;
