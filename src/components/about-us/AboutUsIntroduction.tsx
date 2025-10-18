
import React from 'react';
import { LargeParagraph } from '@/components/ui/typography';
import { getSectionClasses, getContainerClasses } from '@/styles/spacing';

const AboutUsIntroduction = () => {
  return (
    <section className={getSectionClasses('large', 'white')}>
      <div className={getContainerClasses('narrow')}>
        <LargeParagraph alignment="center" className="font-satoshi">
          Kein Agentur-Theater. Keine Zwischenstellen. Sie arbeiten direkt mit dem Gründer und einem eingespielten Team von Spezialisten – vom ersten Gespräch bis zum Launch. Ehrlich, wenn etwas nicht funktioniert. Pragmatisch, wenn es um Lösungen geht.
        </LargeParagraph>
      </div>
    </section>
  );
};

export default AboutUsIntroduction;
