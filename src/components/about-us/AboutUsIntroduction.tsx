
import React from 'react';
import { LargeParagraph } from '@/components/ui/typography';
import { getSectionClasses, getContainerClasses } from '@/styles/spacing';

const AboutUsIntroduction = () => {
  return (
    <section className={getSectionClasses('large', 'white')}>
      <div className={getContainerClasses('default')}>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-6">
            Digitale Strategie trifft auf messbare Ergebnisse
          </h2>
          <LargeParagraph alignment="center" className="font-satoshi max-w-4xl mx-auto">
            Seit 2008 entwickelt ooliv digitale Strategien, Websites und AI-gestützte Workflows, die Unternehmen messbar voranbringen. Wir sind kein anonymer Agenturapparat, sondern ein erfahrenes Digitalagentur-Team aus Mainz, das Klarheit, Struktur und Ergebnisse liefert.
          </LargeParagraph>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            "Direkte Zusammenarbeit mit dem CEO",
            "Senior-Strategie statt Junior-Ausführung",
            "Klarer Prozess statt Chaos",
            "Ehrliche Beratung ohne Upsells"
          ].map((value, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
              <p className="text-brand-text font-medium">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsIntroduction;
