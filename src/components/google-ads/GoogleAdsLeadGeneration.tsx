
import React from 'react';
import { Search, Layout, LineChart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const GoogleAdsLeadGeneration = () => {
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };
  
  const features = [
    {
      icon: <Search className="h-10 w-10 mb-4 text-medico-turquoise" />,
      title: "Suchkampagnen",
      description: "Ihre Zielgruppe sucht — wir liefern passende Anzeigen: mit Keyword-Targeting, Anzeigenerweiterungen & Conversion-Tracking."
    },
    {
      icon: <Layout className="h-10 w-10 mb-4 text-medico-turquoise" />,
      title: "Landingpages",
      description: "Performance beginnt nach dem Klick: Wir erstellen schnelle, mobileoptimierte Zielseiten mit klarer Botschaft und UX-Fokus."
    },
    {
      icon: <LineChart className="h-10 w-10 mb-4 text-medico-turquoise" />,
      title: "Laufende Optimierung",
      description: "Wir testen, analysieren und verbessern kontinuierlich — für niedrigere Kosten pro Lead und steigende Conversion Rates."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-medico-mint">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-medico-darkGreen mb-4">
            Google Ads für B2B — mit Fokus auf Ergebnisse
          </h2>
          <p className="text-xl text-medico-darkGreen max-w-3xl mx-auto">
            Wir nutzen Google Ads zur Lead-Generierung — nicht für Klicks ohne Wirkung.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-medico-darkGreen">{feature.title}</h3>
              <p className="text-medico-darkGreen">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            size="lg" 
            className="group font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            style={{ 
              backgroundColor: '#FFD700', 
              color: '#003347',
              border: 'none'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#FFC700';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FFD700';
            }}
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
