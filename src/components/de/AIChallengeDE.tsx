
import React from 'react';

const AIChallengeDE = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-heading mb-4">Die KI-Herausforderung für Unternehmen</h2>
          <p className="text-lg text-brand-text max-w-3xl mx-auto">
            Viele Unternehmen erkennen das Potenzial von KI, stehen aber vor Hürden bei der erfolgreichen Implementierung.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-brand-heading mb-3">Komplexe Technologie</h3>
            <p className="text-brand-text">
              KI-Lösungen erfordern spezialisiertes Know-how, das in vielen Unternehmen nicht vorhanden ist.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-brand-heading mb-3">Hohe Investitionen</h3>
            <p className="text-brand-text">
              Die Entwicklung maßgeschneiderter KI-Lösungen kann kostspielig sein und birgt Risiken.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-brand-heading mb-3">Integrationsprobleme</h3>
            <p className="text-brand-text">
              Die nahtlose Integration von KI in bestehende Systeme ist oft eine komplexe Herausforderung.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIChallengeDE;
