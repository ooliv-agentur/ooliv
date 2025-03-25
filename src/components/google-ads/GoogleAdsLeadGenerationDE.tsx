
import React from 'react';
import { Search, MousePointerClick, LineChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const GoogleAdsLeadGenerationDE = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-4">
            Gezielte Sichtbarkeit, messbare Ergebnisse
          </h2>
          <p className="text-xl text-brand-text max-w-3xl mx-auto">
            Wir nutzen Google Ads zur Lead-Generierung – nicht für Klicks ohne Wirkung.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: <Search className="h-10 w-10 mb-4 text-brand-primary" />,
              title: "Suchkampagnen",
              description: "Wir schalten Anzeigen, wenn Ihre Zielgruppe sucht – mit präzisem Keyword-Targeting, Anzeigenerweiterungen und Conversion-Tracking."
            },
            {
              icon: <MousePointerClick className="h-10 w-10 mb-4 text-brand-primary" />,
              title: "Landingpages",
              description: "Gute Anzeigen brauchen gute Zielseiten. Wir entwickeln performante Landingpages mit klarer Botschaft, schneller Ladezeit und mobilem Fokus."
            },
            {
              icon: <LineChart className="h-10 w-10 mb-4 text-brand-primary" />,
              title: "Laufende Optimierung",
              description: "Wir analysieren, testen und optimieren Ihre Kampagnen laufend – für bessere Ergebnisse bei geringeren Kosten pro Lead."
            }
          ].map((feature, index) => (
            <div key={index} className="bg-brand-backgroundAlt p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button size="lg" className="group" asChild>
            <Link to="/de/kontakt">
              Lassen Sie uns Suchanfragen in qualifizierte Kontakte verwandeln
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GoogleAdsLeadGenerationDE;
