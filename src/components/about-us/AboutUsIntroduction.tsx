
import React from 'react';
import { LargeParagraph } from '@/components/ui/typography';
import { getSectionClasses, getContainerClasses } from '@/styles/spacing';

const AboutUsIntroduction = () => {
  return (
    <section className={getSectionClasses('large', 'white')}>
      <div className={getContainerClasses('narrow')}>
        <LargeParagraph alignment="center" className="font-satoshi">
          Wir sind Ihr Partner für individuelle Websites, SEO und digitales Marketing. Bei ooliv steht persönliche Beratung an erster Stelle — ohne Zwischenstellen und ohne Warteschleifen. Unser Team begleitet Sie von der ersten Idee bis zum erfolgreichen Launch. Lassen Sie uns gemeinsam Ihr nächstes Projekt erfolgreich umsetzen.
        </LargeParagraph>
      </div>
    </section>
  );
};

export default AboutUsIntroduction;
