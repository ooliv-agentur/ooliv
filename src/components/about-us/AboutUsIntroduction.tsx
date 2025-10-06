
import React from 'react';
import { LargeParagraph } from '@/components/ui/typography';
import { getSectionClasses, getContainerClasses } from '@/styles/spacing';

const AboutUsIntroduction = () => {
  return (
    <section className={getSectionClasses('large', 'white')}>
      <div className={getContainerClasses('narrow')}>
        <LargeParagraph alignment="center" className="font-satoshi">
          Keine riesigen Teams. Keine Zwischenstellen. Stattdessen arbeiten Sie direkt mit dem Gründer – vom ersten Gespräch bis zum Launch. Wir sind ehrlich, wenn etwas nicht funktioniert, und pragmatisch, wenn es um Lösungen geht. Ohne Agentur-Theater.
        </LargeParagraph>
      </div>
    </section>
  );
};

export default AboutUsIntroduction;
