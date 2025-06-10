
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { CheckCircle } from 'lucide-react';

const AboutUsDigitalPartner = () => {
  return (
    <section className="py-16 bg-medico-mint font-satoshi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-12 text-center text-medico-darkGreen leading-tight">
          Ein digitaler Partner, nicht nur ein Dienstleister
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
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
                  <div className="h-6 w-6 flex items-center justify-center bg-medico-turquoise/10 rounded-full mr-3 flex-shrink-0 mt-0.5">
                    <CheckCircle className="h-4 w-4 text-medico-turquoise" />
                  </div>
                  <span className="text-base text-medico-darkGreen leading-relaxed">{point}</span>
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
