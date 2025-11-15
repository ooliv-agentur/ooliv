import React from 'react';
import { ArrowRight, CheckCircle2, XCircle } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';

const MainzBeforeAfterSection = () => {
  const comparisons = [
    {
      before: "Unsichtbar bei Google für lokale Suchanfragen",
      after: "Top-Platzierungen für relevante Keywords in Mainz"
    },
    {
      before: "Veraltete Website ohne mobile Optimierung",
      after: "Moderne, responsive Website mit klarer Nutzerführung"
    },
    {
      before: "Keine Strategie für Lead-Generierung",
      after: "Strukturierter Funnel mit messbaren Conversion-Raten"
    },
    {
      before: "Unklare Positionierung im Markt",
      after: "Klare Botschaft, die Ihre Zielgruppe anspricht"
    }
  ];

  return (
    <section className="py-20 bg-white font-satoshi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-medico-darkGreen mb-6 leading-tight">
              So transformiert unsere Werbeagentur Mainzer Unternehmen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Von unsichtbar zu erfolgreich – diese Entwicklung durchlaufen viele unserer Kunden in Mainz
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Reveal>
            <div className="bg-gradient-to-br from-red-50 to-red-100/50 p-8 rounded-3xl border-2 border-red-200">
              <div className="flex items-center gap-3 mb-6">
                <XCircle className="h-8 w-8 text-red-600" />
                <h3 className="text-2xl font-bold text-red-900">Vorher</h3>
              </div>
              <ul className="space-y-4">
                {comparisons.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">✗</span>
                    <span className="text-gray-700 text-lg">{item.before}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-gradient-to-br from-green-50 to-green-100/50 p-8 rounded-3xl border-2 border-green-200">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle2 className="h-8 w-8 text-green-600" />
                <h3 className="text-2xl font-bold text-green-900">Nachher</h3>
              </div>
              <ul className="space-y-4">
                {comparisons.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-green-600 mt-1">✓</span>
                    <span className="text-gray-700 text-lg">{item.after}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-accent-primary to-medico-darkGreen text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg">
              Ihre Transformation beginnt hier
              <ArrowRight className="h-5 w-5" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default MainzBeforeAfterSection;
