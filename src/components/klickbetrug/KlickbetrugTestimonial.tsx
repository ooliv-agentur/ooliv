
import React from 'react';
import { Quote } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';
import { getSectionClasses, getContainerClasses } from '@/styles/spacing';
import { getHeadingClasses, getBodyClasses } from '@/styles/typography';

const KlickbetrugTestimonial = () => {
  return (
    <section className={`${getSectionClasses('large', 'white')} font-satoshi`}>
      <div className={getContainerClasses('narrow')}>
        <Reveal>
          <div className="text-left">
            <div className="mb-8">
              <Quote className="h-12 w-12 text-medico-turquoise" />
            </div>
            
            <blockquote className={`${getHeadingClasses('h3', 'primary', 'left')} mb-8 italic font-medium`}>
              „Wir wussten gar nicht, dass Klickbetrug überhaupt existiert. Jetzt sparen wir mehrere Hundert Euro im Monat – ohne unser Budget zu erhöhen."
            </blockquote>
            
            <cite className={getBodyClasses('base', 'muted', 'left')}>
              Inhaberin eines Online-Shops (anonymisiert)
            </cite>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default KlickbetrugTestimonial;
