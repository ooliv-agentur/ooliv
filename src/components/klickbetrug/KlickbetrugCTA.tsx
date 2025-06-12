
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';

const KlickbetrugCTA = () => {
  const handleCtaClick = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  const trustPoints = [
    "Funktioniert mit jedem Google Ads Konto",
    "Keine Integration nötig",
    "100 % DSGVO-konform",
    "Persönlicher Support inklusive"
  ];

  return (
    <section className="py-24 bg-medico-mint">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-medico-darkGreen">
            Starten Sie jetzt – und schützen Sie Ihre Kampagnen dauerhaft
          </h2>
          <p className="text-lg md:text-xl text-medico-darkGreen mb-8 max-w-3xl mx-auto leading-relaxed">
            Unsere Lösung läuft im Hintergrund, ist sofort aktiv und schützt Ihr Google Ads Budget zuverlässig.
          </p>
          
          <Button 
            size="lg" 
            className="font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 mb-12"
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
            onClick={handleCtaClick}
          >
            Kostenlosen Test starten
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        
        <div className="max-w-md mx-auto">
          <div className="bg-white/80 border-2 border-medico-turquoise rounded-xl p-6">
            <ul className="space-y-3">
              {trustPoints.map((point, index) => (
                <li key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-medico-turquoise mr-3 flex-shrink-0" />
                  <span className="text-medico-darkGreen">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KlickbetrugCTA;
