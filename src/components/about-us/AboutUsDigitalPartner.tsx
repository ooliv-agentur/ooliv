
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { CheckCircle } from 'lucide-react';
import { H2, Body } from '@/components/ui/typography';
import { getSectionClasses, getContainerClasses, getGridClasses } from '@/styles/spacing';

const AboutUsDigitalPartner = () => {
  return (
    <section className={`${getSectionClasses('medium', 'mint')} font-satoshi`}>
      <div className={getContainerClasses('default')}>
        <H2 alignment="center" className="mb-12">
          Ein digitaler Partner, nicht nur ein Dienstleister
        </H2>
        <div className={`${getGridClasses(2, 'large')} items-center max-w-6xl mx-auto`}>
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            <AspectRatio ratio={4/3}>
              <img 
                src="/lovable-uploads/b1bdd6f6-0801-4a5d-ba2f-cad413494d55.png" 
                alt="Moderne Arbeitsumgebung" 
                className="h-full w-full object-cover"
              />
            </AspectRatio>
          </div>
          <div>
            <ul className="space-y-6">
              {[
                'Wir hören zu, bevor wir bauen',
                'Wir vereinfachen Komplexität',
                'Wir verbinden Design mit Strategie',
                'Wir nutzen Technologie, ohne den menschlichen Aspekt zu verlieren',
                'Wir bleiben neugierig, präzise und brutal ehrlich'
              ].map((point, index) => (
                <li key={index} className="flex items-start">
                  <div className="h-6 w-6 flex items-center justify-center bg-accent-primary/10 rounded-full mr-3 flex-shrink-0 mt-0.5">
                    <CheckCircle className="h-4 w-4 text-accent-primary" />
                  </div>
                  <Body size="base">{point}</Body>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsDigitalPartner;
