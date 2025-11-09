
import React from 'react';
import { H2, Paragraph } from '@/components/ui/typography';
import { getSectionClasses, getContainerClasses } from '@/styles/spacing';

const AboutUsIndividual = () => {
  return (
    <section className={`${getSectionClasses('medium', 'white')} font-satoshi`}>
      <div className={getContainerClasses('default')}>
        <div className={getContainerClasses('narrow')}>
          <H2 alignment="center" className="mb-6">
            Individuell. Durchdacht. Messbar.
          </H2>
          <Paragraph className="mb-6">
            Keine Templates. Kein Schnickschnack. Wir entwickeln maßgeschneiderte Websites basierend auf Ihren spezifischen Zielen, Ihrer Zielgruppe und Ihrer Wachstumsphase.
            Ob B2B-SaaS-Anbieter, Fertigungsunternehmen oder regionaler Dienstleister – <strong>wir erstellen digitale Erlebnisse, die konvertieren</strong>.
          </Paragraph>
          <Paragraph className="mb-8">
            Vom ersten Konzept bis zur Betreuung nach dem Launch arbeiten wir mit Transparenz, strategischem Weitblick und hohen Designstandards.
          </Paragraph>
          <div className="bg-gray-50 rounded-2xl p-6 shadow-sm border border-gray-100">
            <blockquote className="text-xl font-medium text-center text-foreground italic">
              "Wir liefern nicht nur Websites. Wir bauen digitale Assets, die performen."
              <footer className="mt-4 font-bold text-turquoise text-base">– Uli, Gründer</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsIndividual;
