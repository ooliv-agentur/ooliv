
import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Reveal from '@/components/animations/Reveal';
import { getSectionClasses, getContainerClasses } from '@/styles/spacing';
import { getHeadingClasses, getBodyClasses } from '@/styles/typography';

const KlickbetrugTestimonial = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "Wir dachten, Google filtert sowas automatisch raus. Erst durch das Tool haben wir gesehen, wie viel wir verlieren.",
      author: "Kunde aus München (E-Commerce)",
      savings: null
    },
    {
      quote: "Nach nur 2 Wochen haben wir 850€ pro Monat weniger Werbekosten bei gleichen Leads. Das Tool hat sich sofort amortisiert.",
      author: "Zahnarztpraxis aus Hamburg",
      savings: "850€/Monat gespart"
    },
    {
      quote: "38% unserer Klicks waren Betrug! Jetzt liegt unsere Conversion-Rate bei 4,2% statt vorher 2,8%. Unglaublich.",
      author: "Anwaltskanzlei aus Frankfurt",
      savings: "38% Klickbetrug eliminiert"
    },
    {
      quote: "1.200€ haben wir jeden Monat durch Fake-Klicks verloren. Seit dem Schutz investieren wir das Geld in echte Kunden.",
      author: "IT-Dienstleister aus Köln",
      savings: "1.200€/Monat Einsparung"
    },
    {
      quote: "Unser ROAS ist von 2,1 auf 3,8 gestiegen. Das bedeutet 80% mehr Gewinn bei gleichem Werbebudget.",
      author: "Online-Shop Betreiber aus Berlin",
      savings: "ROAS +80% gesteigert"
    },
    {
      quote: "Die Analyse hat gezeigt: 42% unserer Anzeigenklicks kamen aus völlig irrelevanten Regionen. Jetzt werben wir profitabel.",
      author: "Immobilienmakler aus Düsseldorf",
      savings: "42% Fake-Traffic eliminiert"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  const current = testimonials[currentTestimonial];

  return (
    <section className={`${getSectionClasses('large', 'white')} font-satoshi`}>
      <div className={getContainerClasses('narrow')}>
        <Reveal>
          <div className="text-center mb-12">
            <h2 className={`${getHeadingClasses('h2', 'primary', 'center')} mb-6`}>
              Was unsere Kunden über den Klickbetrug-Schutz sagen
            </h2>
            <p className={`${getBodyClasses('large', 'secondary', 'center')} max-w-2xl mx-auto`}>
              Echte Erfahrungen von Unternehmen, die ihr Werbebudget erfolgreich geschützt haben.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="relative">
            {/* Main testimonial card */}
            <div className="bg-medico-mint/10 rounded-2xl p-8 sm:p-12 border border-medico-turquoise/20 min-h-[300px] flex flex-col justify-center">
              <div className="mb-6">
                <Quote className="h-12 w-12 text-medico-turquoise mx-auto" />
              </div>
              
              <blockquote className={`${getHeadingClasses('h3', 'primary', 'center')} mb-8 italic font-medium leading-relaxed`}>
                "{current.quote}"
              </blockquote>
              
              <div className="text-center">
                <cite className={`${getBodyClasses('base', 'muted', 'center')} block mb-2`}>
                  {current.author}
                </cite>
                {current.savings && (
                  <div className="inline-flex items-center px-4 py-2 bg-medico-turquoise/10 rounded-full">
                    <span className="text-medico-turquoise font-bold text-sm">
                      ✓ {current.savings}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Navigation arrows */}
            <div className="flex justify-between items-center absolute top-1/2 -translate-y-1/2 w-full pointer-events-none">
              <Button
                variant="outline"
                size="sm"
                onClick={prevTestimonial}
                className="pointer-events-auto -ml-6 rounded-full w-12 h-12 p-0 bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-medico-turquoise"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                onClick={nextTestimonial}
                className="pointer-events-auto -mr-6 rounded-full w-12 h-12 p-0 bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-medico-turquoise"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-medico-turquoise scale-110' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Summary stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 pt-12 border-t border-gray-200">
            <div className="text-center">
              <div className="text-3xl font-bold text-medico-turquoise mb-2">850€+</div>
              <div className="text-sm text-gray-600">Durchschnittliche monatliche Ersparnis</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-medico-turquoise mb-2">35%</div>
              <div className="text-sm text-gray-600">Weniger Klickbetrug im Schnitt</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-medico-turquoise mb-2">2.8x</div>
              <div className="text-sm text-gray-600">Besserer ROAS nach Implementierung</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default KlickbetrugTestimonial;
