
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
            Wo Leidenschaft auf Leistung trifft
          </H2>
          <div className="flex justify-center mb-8">
            <div className="h-12 w-12 flex items-center justify-center bg-accent-primary rounded-full">
              <Globe className="h-6 w-6 text-white" />
            </div>
          </div>
          <div className={getContainerClasses('narrow')}>
            <Paragraph className="mb-8">
              Was mit einer mutigen Gelegenheit begann, wurde zu einer langfristigen Erfolgsgeschichte. Im Jahr 2008, als eine führende Agentur in Mainz ihre Türen schloss, fragten mehrere treue Kunden:
            </Paragraph>
            <div className="bg-white rounded-2xl p-6 shadow-sm mb-8 border border-gray-100">
              <blockquote className="text-xl md:text-2xl font-bold text-accent-primary italic leading-tight">
                "Können Sie mit uns weitermachen?"
              </blockquote>
            </div>
            <Paragraph className="mb-8">
              Das war der Anfang von ooliv.
            </Paragraph>
            <Paragraph className="mb-6">
              Seitdem haben wir uns zu einer Remote-First-Agentur mit einem hochqualifizierten, überregional verteilten Team entwickelt – vereint durch eine Denkweise:
            </Paragraph>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <LargeParagraph className="font-bold">
                Jede Website sollte echten Unternehmenswert schaffen.
              </LargeParagraph>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsStory;
