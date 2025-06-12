
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';

const KlickbetrugHero = () => {
  const handleStartTest = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  const scrollToSolution = () => {
    const solutionSection = document.getElementById('klickbetrug-solution');
    if (solutionSection) {
      solutionSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 md:py-32 bg-medico-mint font-satoshi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-medico-darkGreen mb-6 leading-tight">
              Klickbetrug erkennen. Google Ads schützen.
            </h1>
            <p className="text-xl md:text-2xl text-medico-darkGreen max-w-4xl mx-auto mb-10" style={{ lineHeight: '1.5' }}>
              Unbemerkter Klickbetrug kann Ihr gesamtes Werbebudget vernichten. Unsere KI erkennt verdächtige Klicks – und blockiert sie automatisch.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                variant="primary"
                size="xl"
                className="group"
                onClick={handleStartTest}
              >
                Jetzt kostenlos testen
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button 
                variant="outline"
                size="xl"
                className="group"
                onClick={scrollToSolution}
              >
                Wie funktioniert das?
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default KlickbetrugHero;
