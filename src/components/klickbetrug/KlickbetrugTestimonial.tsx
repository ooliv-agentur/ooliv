
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
              „Wir dachten, Google filtert sowas automatisch raus. Erst durch das Tool haben wir gesehen, wie viel wir verlieren."
            </blockquote>
            
            <cite className={getBodyClasses('base', 'muted', 'left')}>
              Kunde aus München (E-Commerce)
            </cite>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default KlickbetrugTestimonial;
