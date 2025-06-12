
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const KlickbetrugSolution = () => {
  const handleCtaClick = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  return (
    <section className="py-24 bg-medico-mint">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-medico-darkGreen">
            Wir stoppen Klickbetrug – bevor er Schaden anrichtet
          </h2>
          <p className="text-lg md:text-xl text-medico-darkGreen mb-8 leading-relaxed max-w-4xl mx-auto">
            Unsere Lösung analysiert jede Anzeige in Echtzeit: Woher kommt der Klick? Wie verhält sich der Nutzer? Welche Muster deuten auf Betrug hin? Verdächtige Klicks werden automatisch blockiert – bevor sie Geld kosten.
          </p>
          
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
            onClick={handleCtaClick}
          >
            Jetzt Schutz aktivieren
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default KlickbetrugSolution;
