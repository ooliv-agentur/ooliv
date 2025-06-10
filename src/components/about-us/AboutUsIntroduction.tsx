
import React from 'react';
import { LargeParagraph } from '@/components/ui/typography';

const AboutUsIntroduction = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <LargeParagraph alignment="center" className="font-satoshi">
          Wir sind Ihr Partner für individuelle Websites, SEO und digitales Marketing. Bei ooliv steht persönliche Beratung an erster Stelle — ohne Zwischenstellen und ohne Warteschleifen. Unser Team begleitet Sie von der ersten Idee bis zum erfolgreichen Launch. Lassen Sie uns gemeinsam Ihr nächstes Projekt erfolgreich umsetzen.
        </LargeParagraph>
      </div>
    </section>
  );
};

export default AboutUsIntroduction;
