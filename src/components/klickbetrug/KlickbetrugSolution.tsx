
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
    <section id="klickbetrug-solution" className={`${getSectionClasses('large', 'mint')} font-satoshi`}>
      <div className={getContainerClasses()}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div>
              <h2 className={getHeadingClasses('h2', 'primary', 'left')}>
                Wir stoppen Klickbetrug – bevor er Schaden anrichtet
              </h2>
              
              <p className={`${getBodyClasses('large', 'primary', 'left')} mb-8`}>
                Unsere Lösung analysiert jede Anzeige in Echtzeit: Woher kommt der Klick? Wie verhält sich der Nutzer? Welche Muster deuten auf Betrug hin? Verdächtige Klicks werden automatisch blockiert – bevor sie Geld kosten.
              </p>
              
              <Button 
                variant="primary"
                size="xl"
                className="group"
                onClick={handleActivateProtection}
              >
                Jetzt Schutz aktivieren
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </Reveal>
          
          <Reveal delay={0.2}>
            <div className="lg:text-right">
              <div className="bg-white/20 rounded-2xl p-8 backdrop-blur-sm border border-medico-turquoise/20">
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
