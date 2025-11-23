import React from 'react';
import { Check } from 'lucide-react';
import { getSectionClasses, getContainerClasses } from '@/styles/spacing';

const WhySmallTeam = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
            Warum wir bewusst klein bleiben
          </h2>
          
          <p className="text-lg text-text-secondary mb-12 leading-relaxed">
            Wir glauben nicht an große Agenturstrukturen.
            Wir glauben an Seniorität, Fokus und Qualität.
            Jedes Projekt wird von einem kleinen, eingespielten Team umgesetzt — ohne Reibungsverluste, ohne Silos, ohne Wissensbruch.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Eine Schnittstelle statt fünf",
              "Entscheider direkt involviert",
              "Kürzere Wege, höhere Qualität",
              "Fokus auf Wirkung, nicht Stunden"
            ].map((point, index) => (
              <div key={index} className="flex items-start text-left bg-white p-6 rounded-lg hover:shadow-md transition-shadow">
                <Check className="w-6 h-6 text-turquoise mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-text-primary font-medium">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySmallTeam;
