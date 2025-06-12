
import React from 'react';
import { Quote } from 'lucide-react';

const KlickbetrugTestimonial = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center">
          <Quote className="h-12 w-12 text-medico-turquoise mx-auto mb-8" />
          <blockquote className="text-2xl md:text-3xl font-medium text-medico-darkGreen mb-8 leading-relaxed">
            „Wir wussten gar nicht, dass Klickbetrug überhaupt existiert. Jetzt sparen wir mehrere Hundert Euro im Monat – ohne unser Budget zu erhöhen."
          </blockquote>
          <cite className="text-lg text-medico-darkGreen/80 not-italic">
            Inhaberin eines Online-Shops (anonymisiert)
          </cite>
        </div>
      </div>
    </section>
  );
};

export default KlickbetrugTestimonial;
