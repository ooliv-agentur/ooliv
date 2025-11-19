
import React from 'react';
import { LargeParagraph } from '@/components/ui/typography';
import { getSectionClasses, getContainerClasses } from '@/styles/spacing';

const AboutUsIntroduction = () => {
  return (
    <section className={getSectionClasses('large', 'white')}>
      <div className={getContainerClasses('narrow')}>
          <LargeParagraph alignment="center" className="font-satoshi">
            Sie arbeiten direkt mit dem Gründer – unterstützt von einem Team aus Spezialisten. Ehrlich, pragmatisch, ohne Agentur-Theater.
          </LargeParagraph>
      </div>
    </section>
  );
};

export default AboutUsIntroduction;
