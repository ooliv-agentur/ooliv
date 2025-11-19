
import React from 'react';
import { H2, Paragraph } from '@/components/ui/typography';
import { getSectionClasses, getContainerClasses } from '@/styles/spacing';

const AboutUsWhySmall = () => {
  return (
    <section className={`${getSectionClasses('medium', 'white')} font-satoshi`}>
      <div className={getContainerClasses('default')}>
        <div className={getContainerClasses('narrow')}>
          <H2 alignment="center" className="mb-6">
            Warum wir bewusst klein bleiben
          </H2>
          <div className="bg-gray-50 rounded-2xl p-6 shadow-sm mb-6 border border-gray-100">
            <Paragraph className="mb-6">
              Bei ooliv arbeitet jeder Kunde direkt mit dem Gründer zusammen. Unterstützt von Designern, Entwicklern und Strategen.
            </Paragraph>
            <Paragraph className="mb-6">
              Diese Struktur bedeutet weniger Reibung, schnelleren Fortschritt – geliefert von Menschen, die Ihre Website tatsächlich bauen.
            </Paragraph>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <blockquote className="text-xl md:text-2xl font-bold text-turquoise italic leading-tight">
                "Ein Ansprechpartner. Ein fokussiertes Team. Ein gemeinsames Ziel."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsWhySmall;
