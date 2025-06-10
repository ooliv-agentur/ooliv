
import React from 'react';
import { Search, Layout, LineChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const GoogleAdsLeadGeneration = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';
  
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };
  
  const translations = {
    en: {
      title: "Targeted traffic, measurable results",
      subtitle: "We use Google Ads to generate qualified leads – not just clicks.",
      features: [
        {
          icon: <Search className="h-10 w-10 mb-4 text-medico-turquoise" />,
          title: "Search Campaigns",
          description: "We create ads that appear exactly when your audience is searching. With precise keyword targeting, ad extensions, and conversion tracking."
        },
        {
          icon: <Layout className="h-10 w-10 mb-4 text-medico-turquoise" />,
          title: "Landing Pages",
          description: "Ads only work when the landing page does. We design high-converting pages with a clear message and strong CTA – optimized for mobile and speed."
        },
        {
          icon: <LineChart className="h-10 w-10 mb-4 text-medico-turquoise" />,
          title: "Ongoing Optimization",
          description: "We continuously monitor, test, and adjust campaigns to improve performance and reduce cost per lead."
        }
      ],
      cta: "Let's turn search intent into qualified leads"
    },
    de: {
      title: "Google Ads für B2B — mit Fokus auf Ergebnisse",
      subtitle: "Wir nutzen Google Ads zur Lead-Generierung — nicht für Klicks ohne Wirkung.",
      features: [
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
      ],
      cta: "Jetzt Ihre Google Ads Kampagne starten"
    }
  };
  
  const t = isGerman ? translations.de : translations.en;

  return (
    <section className="py-16 md:py-24 bg-medico-mint">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-medico-darkGreen mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-medico-darkGreen max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {t.features.map((feature, index) => (
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
            {t.cta}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GoogleAdsLeadGeneration;
