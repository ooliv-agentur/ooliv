
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';

const KlickbetrugCTA = () => {
  const handleStartTest = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  const trustPoints = [
    'Funktioniert mit jedem Google Ads Konto',
    'Keine Integration nötig',
    '100 % DSGVO-konform',
    'Persönlicher Support inklusive'
  ];

  return (
    <section className="py-20 bg-medico-mint font-satoshi">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-medico-darkGreen mb-6 leading-tight">
              Starten Sie jetzt – und schützen Sie Ihre Kampagnen dauerhaft
            </h2>
            <p className="text-xl text-medico-darkGreen max-w-3xl mx-auto mb-10" style={{ lineHeight: '1.5' }}>
              Unsere Lösung läuft im Hintergrund, ist sofort aktiv und schützt Ihr Google Ads Budget zuverlässig.
            </p>
            
            <Button 
              variant="primary"
              size="xl"
              className="group mb-12"
              onClick={handleStartTest}
            >
              Kostenlosen Test starten
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </Reveal>
        
        <Reveal delay={0.2}>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-8 border-2 border-medico-turquoise shadow-lg">
              <div className="grid md:grid-cols-2 gap-4">
                {trustPoints.map((point, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-medico-turquoise flex-shrink-0" />
                    <span className="text-medico-darkGreen font-medium">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default KlickbetrugCTA;
