
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';
import { getSectionClasses, getContainerClasses } from '@/styles/spacing';
import { getHeadingClasses, getBodyClasses } from '@/styles/typography';

const KlickbetrugSolution = () => {
  const handleActivateProtection = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  return (
    <section id="klickbetrug-solution" className={`${getSectionClasses('large', 'white')} font-satoshi`}>
      <div className={getContainerClasses()}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="text-left">
              <h2 className={`${getHeadingClasses('h2', 'primary', 'left')} mb-6`}>
                Wir stoppen Klickbetrug – bevor er Schaden anrichtet
              </h2>
              
              <p className={`${getBodyClasses('large', 'primary', 'left')} mb-8`}>
                Unsere Lösung analysiert jede Anzeige in Echtzeit: Woher kommt der Klick? Wie verhält sich der Nutzer? Welche Muster deuten auf Betrug hin? Verdächtige Klicks werden automatisch blockiert – bevor sie Geld kosten.
              </p>
              
              <Button 
                size="lg" 
                className="group font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
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
                onClick={handleActivateProtection}
              >
                Jetzt Schutz aktivieren
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </Reveal>
          
          <Reveal delay={0.2}>
            <div className="lg:text-right">
              <div className="bg-medico-mint/30 rounded-2xl p-8 backdrop-blur-sm border border-medico-turquoise/20">
                <div className="text-center">
                  <div className="text-6xl mb-4">🛡️</div>
                  <p className={getBodyClasses('base', 'primary', 'center')}>
                    KI-basierter Schutz in Echtzeit
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default KlickbetrugSolution;
