
import React from 'react';
import Reveal from '@/components/animations/Reveal';

const SEOApproachDE = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-heading mb-6">
              Entwickelt für Google – und für Ihre Kunden
            </h2>
          </div>
        </Reveal>
        
        <Reveal delay={0.1}>
          <div className="max-w-4xl mx-auto bg-brand-background p-8 rounded-lg shadow-sm">
            <p className="text-lg text-brand-text mb-4">
              Wir schaffen die inhaltliche, strukturelle und technische Grundlage für langfristige Sichtbarkeit. Keine Tricks – sondern nachhaltige Strategien.
            </p>
            
            <p className="text-lg text-brand-text">
              Dazu gehören lokale SEO-Optimierung, technische Analyse, Keyword-Strategie und kontinuierliche Inhaltspflege. Bei Bedarf übernehmen wir auch Backlink-Aufbau und Rankings-Tracking – damit Ihre Seite dauerhaft gefunden wird.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default SEOApproachDE;
