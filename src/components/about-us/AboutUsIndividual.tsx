
import React from 'react';

const AboutUsIndividual = () => {
  return (
    <section className="py-16 bg-white font-satoshi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-medico-darkGreen leading-tight">
            Individuell. Durchdacht. Messbar.
          </h2>
          <p className="text-lg mb-6 text-medico-darkGreen leading-relaxed">
            Keine Templates. Kein Schnickschnack. Wir entwickeln maßgeschneiderte Websites basierend auf Ihren spezifischen Zielen, Ihrer Zielgruppe und Ihrer Wachstumsphase.
            Ob B2B-SaaS-Anbieter, Fertigungsunternehmen oder regionaler Dienstleister – <strong>wir erstellen digitale Erlebnisse, die konvertieren</strong>.
          </p>
          <p className="text-lg mb-8 text-medico-darkGreen leading-relaxed">
            Vom ersten Konzept bis zur Betreuung nach dem Launch arbeiten wir mit Transparenz, strategischem Weitblick und hohen Designstandards.
          </p>
          <div className="bg-medico-mint rounded-2xl p-6 shadow-sm border border-gray-100">
            <blockquote className="text-xl font-medium text-center text-medico-darkGreen italic">
              "Wir liefern nicht nur Websites. Wir bauen digitale Assets, die performen."
              <footer className="mt-4 font-bold text-medico-turquoise text-base">– Uli, Gründer</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsIndividual;
