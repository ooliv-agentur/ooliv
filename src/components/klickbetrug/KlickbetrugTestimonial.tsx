
import React from 'react';
import { Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import Reveal from '@/components/animations/Reveal';
import { getSectionClasses, getContainerClasses } from '@/styles/spacing';
import { getHeadingClasses, getBodyClasses } from '@/styles/typography';
import { cn } from '@/lib/utils';

const KlickbetrugTestimonial = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

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
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4">
                  <div className="p-1">
                    <Card className="bg-medico-mint/10 border-medico-turquoise/20 min-h-[300px]">
                      <CardContent className="flex flex-col justify-center p-6 sm:p-8 md:p-12 text-center h-full">
                        <div className="mb-6">
                          <Quote className="h-10 w-10 md:h-12 md:w-12 text-medico-turquoise mx-auto" />
                        </div>
                        
                        <blockquote className={`${getHeadingClasses('h3', 'primary', 'center')} mb-6 md:mb-8 italic font-medium leading-relaxed text-lg md:text-xl lg:text-2xl`}>
                          "{testimonial.quote}"
                        </blockquote>
                        
                        <div className="text-center mt-auto">
                          <cite className={`${getBodyClasses('base', 'muted', 'center')} block mb-2`}>
                            {testimonial.author}
                          </cite>
                          {testimonial.savings && (
                            <div className="inline-flex items-center px-3 py-2 md:px-4 md:py-2 bg-medico-turquoise/10 rounded-full">
                              <span className="text-medico-turquoise font-bold text-sm whitespace-nowrap">
                                ✓ {testimonial.savings}
                              </span>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Navigation buttons - hidden on mobile, visible on desktop */}
            <CarouselPrevious className="hidden md:flex -left-12 bg-white shadow-lg hover:shadow-xl border-gray-200 hover:border-medico-turquoise" />
            <CarouselNext className="hidden md:flex -right-12 bg-white shadow-lg hover:shadow-xl border-gray-200 hover:border-medico-turquoise" />
          </Carousel>

          {/* Dot indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  index === current 
                    ? "bg-medico-turquoise w-6" 
                    : "bg-gray-300 hover:bg-gray-400"
                )}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Gehe zu Testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Summary stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 pt-12 border-t border-gray-200">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-medico-turquoise mb-2">850€+</div>
              <div className="text-sm text-gray-600">Durchschnittliche monatliche Ersparnis</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-medico-turquoise mb-2">35%</div>
              <div className="text-sm text-gray-600">Weniger Klickbetrug im Schnitt</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-medico-turquoise mb-2">2.8x</div>
              <div className="text-sm text-gray-600">Besserer ROAS nach Implementierung</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default KlickbetrugTestimonial;
