import React from 'react';
import { Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getSectionClasses, getContainerClasses } from '@/styles/spacing';

const UliSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <div className="bg-gray-100 rounded-2xl aspect-square overflow-hidden">
              <img 
                src="/lovable-uploads/Uli.webp" 
                alt="Uli Schönleber"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Uli Schönleber — Digital Strategy Lead
            </h2>
            <h3 className="text-xl text-turquoise font-semibold mb-6">
              Strategie, UX & AI aus einer Hand.
            </h3>
            
            <p className="text-text-secondary leading-relaxed mb-6">
              Seit über 15 Jahren verbinde ich Strategie, UX, Content und AI-gestützte Arbeitsprozesse zu digitalen Systemen, die verkaufen. Ich begleite jedes Projekt persönlich — vom ersten Gespräch bis zum Launch — und treffe Entscheidungen, die auf Daten, Nutzerverhalten und klaren Geschäftsmodellen basieren.
            </p>
            
            <div className="space-y-3 mb-8">
              {[
                "15+ Jahre Erfahrung",
                "200+ Projekte",
                "Beratung auf Geschäftsführungsniveau"
              ].map((fact, index) => (
                <div key={index} className="flex items-start">
                  <Brain className="w-5 h-5 text-turquoise mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-text-primary font-medium">{fact}</span>
                </div>
              ))}
            </div>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => {
                const element = document.getElementById('team');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Mehr über meine Arbeitsweise
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UliSection;
