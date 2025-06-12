
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const KlickbetrugHero = () => {
  const handlePrimaryClick = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  const handleSecondaryClick = () => {
    document.querySelector('#explanation')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 md:py-32 bg-medico-mint">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-medico-darkGreen leading-tight">
              Klickbetrug erkennen. Google Ads schützen.
            </h1>
            <p className="text-lg md:text-xl text-medico-darkGreen mb-8 leading-relaxed">
              Unbemerkter Klickbetrug kann Ihr gesamtes Werbebudget vernichten. Unsere KI erkennt verdächtige Klicks – und blockiert sie automatisch.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300"
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
                onClick={handlePrimaryClick}
              >
                Jetzt kostenlos testen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="font-semibold py-4 px-8 rounded-full text-lg border-2 border-medico-darkGreen text-medico-darkGreen hover:bg-medico-darkGreen hover:text-white transition-all duration-300"
                onClick={handleSecondaryClick}
              >
                Wie funktioniert das?
              </Button>
            </div>
          </div>
          
          {/* Visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-gray-100 p-8 rounded-xl shadow-lg w-full max-w-md aspect-square flex items-center justify-center">
              <div className="text-gray-400 text-center">
                <div className="text-6xl mb-4">🛡️</div>
                <p className="text-lg font-medium">Dashboard Preview</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KlickbetrugHero;
