
import React from 'react';
import { Globe } from 'lucide-react';
import { H2, Paragraph, LargeParagraph } from '@/components/ui/typography';
import { getSectionClasses, getContainerClasses } from '@/styles/spacing';

const AboutUsStory = () => {
  return (
    <section className={`${getSectionClasses('medium', 'mint')} font-satoshi`}>
      <div className={getContainerClasses('default')}>
        <div className={getContainerClasses('narrow')}>
          <H2 alignment="center" className="mb-6">
            Seit 2008 aus Mainz. Heute in DACH aktiv.
          </H2>
          <div className="flex justify-center mb-8">
            <div className="h-12 w-12 flex items-center justify-center bg-turquoise rounded-full">
              <Globe className="h-6 w-6 text-white" />
            </div>
          </div>
          <div className={getContainerClasses('narrow')}>
            <Paragraph className="leading-relaxed">
              Was als Notlösung für mehrere Unternehmen begann, wurde zu einer langfristigen Erfolgsgeschichte: Als eine Mainzer Agentur 2008 schloss, baten ehemalige Kunden den Gründer Uli Schönleber weiterzumachen.
              Heute ist ooliv eine strategische Digitalagentur mit klarer Struktur, seniorseitiger Führung und einem hochspezialisierten Remote-Team in Deutschland, Mallorca und der Schweiz.
            </Paragraph>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsStory;
