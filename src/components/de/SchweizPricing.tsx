
import React from 'react';
import Reveal from '@/components/animations/Reveal';

const SchweizPricing = () => {
  return (
    <section className="py-16 bg-medico-mint/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl font-bold mb-6 text-medico-darkGreen text-center">
            Transparente Preise für Schweizer Unternehmen
          </h2>
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent-primary mb-2">CHF 7.000</div>
                <div className="text-sm font-semibold text-medico-darkGreen mb-2">Starter-Website</div>
                <p className="text-sm text-medico-darkGreen/80">
                  Strategischer Onepager, mobiloptimiert, SEO-ready
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent-primary mb-2">CHF 12.000</div>
                <div className="text-sm font-semibold text-medico-darkGreen mb-2">Business-Website</div>
                <p className="text-sm text-medico-darkGreen/80">
                  Mehrsprachig (DE/FR), SEO-optimiert, Content-Strategie
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent-primary mb-2">CHF 18.000+</div>
                <div className="text-sm font-semibold text-medico-darkGreen mb-2">Enterprise</div>
                <p className="text-sm text-medico-darkGreen/80">
                  Komplexe Funktionen, Shop-Integration, mehrsprachig
                </p>
              </div>
            </div>
            <p className="text-center text-sm text-medico-darkGreen/70 mt-6">
              Alle Preise in CHF. Abrechnung wahlweise in CHF oder EUR. MwSt. gemäß gesetzlicher Regelung.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default SchweizPricing;
