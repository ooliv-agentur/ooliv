import React from 'react';
import { Target, Minimize2, Zap } from 'lucide-react';
import { getSectionClasses, getContainerClasses } from '@/styles/spacing';

const OurApproach = () => {
  const approaches = [
    {
      icon: Target,
      title: "Analyse statt Annahmen",
      description: "Jede Zusammenarbeit startet mit Struktur, Zielen und KPIs. Wir setzen auf datenbasierte Entscheidungen und messbare Erfolge."
    },
    {
      icon: Minimize2,
      title: "UX-first Ansatz",
      description: "Inhalte, Design und Informationsarchitektur entstehen simultan. User Experience ist die Basis für alle digitalen Projekte."
    },
    {
      icon: Zap,
      title: "AI-gestützte Workflows",
      description: "Für Effizienz, Qualität und bessere Entscheidungen nutzen wir AI-Tools in Recherche, Content-Erstellung und Prozessoptimierung."
    },
    {
      icon: Target,
      title: "Transparente Kommunikation",
      description: "Direkter Zugang zum Gründer und Kernteam. Keine Zwischenebenen, keine Sales-Layer — nur ehrliche, klare Abstimmung."
    }
  ];

  return (
    <section className={getSectionClasses('large', 'mint')}>
      <div className={getContainerClasses('default')}>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-4">
            Wie eine moderne Digitalagentur arbeitet
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
