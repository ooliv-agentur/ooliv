
import React from 'react';
import { Target, TrendingUp, Settings, Users } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';

const WiesbadenAboutSection = () => {
  // Define the 4 core competencies for Wiesbaden market
  const competencies = [
    {
      title: "Digitale Strategien",
      description: "Datenbasierte Konzepte, zielgruppenspezifisch, marktorientiert.",
      icon: <Target className="h-6 w-6 text-medico-turquoise" />
    },
    {
      title: "Performance Marketing",
      description: "Messbare Kampagnen, ROI-fokussiert, kontinuierlich optimiert.",
      icon: <TrendingUp className="h-6 w-6 text-medico-turquoise" />
    },
    {
      title: "Technische Umsetzung",
      description: "Maßgeschneiderte Lösungen, zukunftssicher, skalierbar.",
      icon: <Settings className="h-6 w-6 text-medico-turquoise" />
    },
    {
      title: "Persönliche Betreuung",
      description: "Direkter Draht zum Geschäftsführer – ohne Hierarchien.",
      icon: <Users className="h-6 w-6 text-medico-turquoise" />
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-medico-darkGreen mb-4 text-center">
              Digitale Kompetenz trifft regionale Expertise – in Wiesbaden.
            </h2>
            <p className="text-xl text-medico-turquoise max-w-3xl mx-auto text-center">
              Als etablierte Werbeagentur im Rhein-Main-Gebiet verstehen wir sowohl lokale Marktbedingungen als auch überregionale Trends. Seit über 15 Jahren realisieren wir digitale Projekte für Unternehmen verschiedenster Branchen.
            </p>
          </div>
        </Reveal>
        
        <StaggerReveal className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {competencies.map((competency, index) => (
            <div key={index} className="bg-medico-mint/10 p-6 rounded-lg border border-medico-turquoise/20 hover:shadow-md transition-shadow">
              <div className="mb-4 p-3 rounded-full bg-medico-turquoise/10 inline-flex">
                {competency.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-medico-darkGreen">{competency.title}</h3>
              <p className="text-medico-darkGreen/80 mb-4">{competency.description}</p>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
};

export default WiesbadenAboutSection;
