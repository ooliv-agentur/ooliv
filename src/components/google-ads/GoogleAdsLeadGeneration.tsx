
import React from 'react';
import { Search, Layout, LineChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { H2, H3, Paragraph } from '@/components/ui/typography';

const GoogleAdsLeadGeneration = () => {
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };
  
  const features = [
    {
      icon: <Search className="h-10 w-10 mb-4 text-primary" />,
      title: "Suchkampagnen",
      description: "Ihre Zielgruppe sucht — wir liefern passende Anzeigen: mit Keyword-Targeting, Anzeigenerweiterungen & Conversion-Tracking."
    },
    {
      icon: <Layout className="h-10 w-10 mb-4 text-primary" />,
      title: "Landingpages",
      description: "Performance beginnt nach dem Klick: Wir erstellen schnelle, mobileoptimierte Zielseiten mit klarer Botschaft und UX-Fokus."
    },
    {
      icon: <LineChart className="h-10 w-10 mb-4 text-primary" />,
      title: "Laufende Optimierung",
      description: "Wir testen, analysieren und verbessern kontinuierlich — für niedrigere Kosten pro Lead und steigende Conversion Rates."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <H2 className="mb-4" alignment="center">
            Google Ads für B2B — mit Fokus auf Ergebnisse
          </H2>
          <Paragraph className="text-xl max-w-3xl mx-auto" alignment="center">
            Wir nutzen Google Ads zur Lead-Generierung — nicht für Klicks ohne Wirkung.
          </Paragraph>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-background p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-border">
              <div className="inline-flex items-center justify-center">{feature.icon}</div>
              <H3 className="mb-3">{feature.title}</H3>
              <Paragraph>{feature.description}</Paragraph>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            size="lg" 
            variant="default"
            className="font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={handleStartProject}
          >
            Jetzt Ihre Google Ads Kampagne starten
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GoogleAdsLeadGeneration;
