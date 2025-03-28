
import React from 'react';
import { Check } from 'lucide-react';

const TeamImpactSectionDE = () => {
  return (
    <section className="py-20 bg-brand-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-brand-heading mb-6">
            Kleine Agentur, große Wirkung.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Check className="h-6 w-6 text-brand-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">Strategie & UX</h3>
            <p className="text-center text-brand-text">
              Klare Struktur, datenbasierte Entscheidungen, B2B-ready.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Check className="h-6 w-6 text-brand-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">Content & SEO</h3>
            <p className="text-center text-brand-text">
              Keyword-getrieben, mehrsprachig, KI-gestützt.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Check className="h-6 w-6 text-brand-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">Design & Development</h3>
            <p className="text-center text-brand-text">
              Custom-coded, konversionsstark, skalierbar.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Check className="h-6 w-6 text-brand-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">Direkte Kommunikation</h3>
            <p className="text-center text-brand-text">
              Sie sprechen immer direkt mit dem CEO – ohne Umwege.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamImpactSectionDE;
