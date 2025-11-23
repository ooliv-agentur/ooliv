import React from 'react';
import { Target, Minimize2, Zap } from 'lucide-react';
import { getSectionClasses, getContainerClasses } from '@/styles/spacing';

const OurApproach = () => {
  const approaches = [
    {
      icon: Target,
      title: "Strategie vor Design",
      description: "Klarheit über Ziele, Nutzerlogik, Botschaften und KPIs — bevor Design entsteht."
    },
    {
      icon: Minimize2,
      title: "Reduktion statt Komplexität",
      description: "Wir entfernen alles, was Nutzer ablenkt. Jede Seite folgt einer klaren Logik."
    },
    {
      icon: Zap,
      title: "AI-gestützte Effizienz",
      description: "Wir nutzen AI für Recherche, Strukturierung, Konzeptionsarbeit, Content und Prozessoptimierung."
    }
  ];

  return (
    <section className={getSectionClasses('large', 'mint')}>
      <div className={getContainerClasses('default')}>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-4">
            Unser Ansatz
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {approaches.map((approach, index) => (
            <div key={index} className="bg-white p-8 rounded-lg">
              <div className="h-12 w-12 bg-turquoise/10 rounded-full flex items-center justify-center mb-6">
                <approach.icon className="w-6 h-6 text-turquoise" />
              </div>
              <h3 className="text-xl font-bold text-brand-heading mb-3">
                {approach.title}
              </h3>
              <p className="text-brand-text leading-relaxed">
                {approach.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
