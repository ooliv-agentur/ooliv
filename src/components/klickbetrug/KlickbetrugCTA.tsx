
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';
import { getSectionClasses, getContainerClasses } from '@/styles/spacing';
import { getHeadingClasses, getBodyClasses } from '@/styles/typography';

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
    <section className={`${getSectionClasses('large', 'mint')} font-satoshi`}>
      <div className={getContainerClasses('narrow')}>
        <Reveal>
          <div className="text-left mb-12">
            <h2 className={`${getHeadingClasses('h2', 'primary', 'left')} mb-6`}>
              Starten Sie jetzt – und schützen Sie Ihre Kampagnen dauerhaft
            </h2>
            
            <p className={`${getBodyClasses('large', 'primary', 'left')} mb-10`}>
              Unsere Lösung läuft im Hintergrund, ist sofort aktiv und schützt Ihr Google Ads Budget zuverlässig.
            </p>
            
            <Button 
              size="lg" 
              className="group font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto mb-12"
              style={{ 
                backgroundColor: '#FFD700', 
                color: '#003347',
                border: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#FFC700';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FFD700';
              }}
              onClick={handleStartTest}
            >
              Kostenlosen Test starten
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </Reveal>
        
        <Reveal delay={0.2}>
          <div className="max-w-2xl">
            <div className="bg-white rounded-2xl p-8 border-2 border-medico-turquoise shadow-lg">
              <div className="grid md:grid-cols-2 gap-6">
                {trustPoints.map((point, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-medico-turquoise flex-shrink-0" />
                    <span className={getBodyClasses('base', 'primary', 'left')}>
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
