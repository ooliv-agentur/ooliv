import React from 'react';
import Reveal from '@/components/animations/Reveal';

const MainzTechStack = () => {
  return (
    <section className="py-20 bg-white font-satoshi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-medico-darkGreen mb-6 leading-tight">
              Technologie nach Ihren Anforderungen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Wir wählen Technologien anhand Ihrer spezifischen Anforderungen – stabil, modern und skalierbar.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-12 bg-gradient-to-r from-accent-primary/10 to-medico-darkGreen/10 rounded-3xl p-12 text-center max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-medico-darkGreen mb-4">
              Die richtige Lösung für Ihr Projekt
            </h3>
            <p className="text-lg text-gray-600">
              Ob CMS-basierte Website, individuelle Webanwendung oder E-Commerce-Plattform – wir setzen auf bewährte und zukunftssichere Technologien, die zu Ihren Geschäftszielen passen.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default MainzTechStack;
