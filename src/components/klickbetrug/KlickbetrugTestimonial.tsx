
import React from 'react';
import { Quote } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';

const KlickbetrugTestimonial = () => {
  return (
    <section className="py-20 bg-white font-satoshi">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <div className="mb-8">
              <Quote className="h-12 w-12 text-medico-turquoise mx-auto" />
            </div>
            
            <blockquote className="text-2xl md:text-3xl font-medium text-medico-darkGreen mb-8 leading-relaxed">
              „Wir wussten gar nicht, dass Klickbetrug überhaupt existiert. Jetzt sparen wir mehrere Hundert Euro im Monat – ohne unser Budget zu erhöhen."
            </blockquote>
            
            <cite className="text-lg text-medico-darkGreen/80 font-medium">
              Inhaberin eines Online-Shops (anonymisiert)
            </cite>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default KlickbetrugTestimonial;
