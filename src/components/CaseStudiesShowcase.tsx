
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface CaseStudy {
  id: string;
  title: string;
  subtitle?: string;
  logo: string;
}

const cases: CaseStudy[] = [
  {
    id: 'scheurich',
    title: 'Scheurich',
    subtitle: 'Web | Brand',
    logo: '/placeholder.svg'
  },
  {
    id: 'cobus',
    title: 'COBUS Consulting',
    subtitle: 'Web | Development',
    logo: '/placeholder.svg'
  },
  {
    id: 'weisenburger',
    title: 'Weisenburger',
    subtitle: 'Web | Development',
    logo: '/placeholder.svg'
  },
  {
    id: 'immowelt',
    title: 'Immowelt',
    subtitle: 'Web | Marketing',
    logo: '/placeholder.svg'
  }
];

const CaseStudiesShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 overflow-hidden bg-brand-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Selected Cases</h2>
            <p className="text-xl text-center text-gray-600 max-w-2xl mx-auto">
              Explore how we help businesses achieve extraordinary results through strategic digital solutions
            </p>
          </div>

          <div className="relative">
            <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar">
              {cases.map((caseStudy, index) => (
                <div
                  key={caseStudy.id}
                  className={cn(
                    "relative flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] aspect-square rounded-lg overflow-hidden snap-start",
                    "group cursor-pointer transition-all duration-500"
                  )}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="absolute inset-0 bg-brand-primary group-hover:bg-brand-primaryHover transition-colors duration-500" />
                  <div className="relative h-full w-full p-8 flex flex-col">
                    <img
                      src={caseStudy.logo}
                      alt={caseStudy.title}
                      className="w-24 h-auto mb-auto invert"
                    />
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{caseStudy.title}</h3>
                      {caseStudy.subtitle && (
                        <p className="text-white/80">{caseStudy.subtitle}</p>
                      )}
                      <Button
                        variant="outline"
                        className="mt-4 bg-transparent text-white border-white hover:bg-white hover:text-brand-primary"
                        asChild
                      >
                        <Link to={`/case-studies/${caseStudy.id}`}>
                          View Case
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Dots navigation */}
            <div className="flex justify-center gap-2 mt-8">
              {cases.map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    index === activeIndex
                      ? "bg-brand-primary w-4"
                      : "bg-gray-300 hover:bg-brand-primary/50"
                  )}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesShowcase;
