
import React from 'react';
import { Globe } from 'lucide-react';
import { H2, Paragraph, LargeParagraph } from '@/components/ui/typography';
import { getSectionClasses, getContainerClasses } from '@/styles/spacing';

const AboutUsStory = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
            Seit 2008 aus Mainz. Heute in DACH aktiv.
          </h2>
          <div className="flex justify-center mb-8">
            <div className="h-12 w-12 flex items-center justify-center bg-turquoise rounded-full">
              <Globe className="h-6 w-6 text-white" />
            </div>
          </div>
          <p className="text-lg text-text-secondary leading-relaxed">
            Was als Notlösung für mehrere Unternehmen begann, wurde zu einer langfristigen Erfolgsgeschichte: Als eine Mainzer Agentur 2008 schloss, baten ehemalige Kunden den Gründer Uli Schönleber weiterzumachen.
            Heute ist ooliv eine strategische Digitalagentur mit klarer Struktur, seniorseitiger Führung und einem hochspezialisierten Remote-Team in Deutschland, Mallorca und der Schweiz.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsStory;
