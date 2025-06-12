
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';

const KlickbetrugSolution = () => {
  const handleActivateProtection = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  return (
    <section id="klickbetrug-solution" className="py-20 bg-medico-mint font-satoshi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-medico-darkGreen mb-8 leading-tight">
                Wir stoppen Klickbetrug – bevor er Schaden anrichtet
              </h2>
              <p className="text-lg md:text-xl text-medico-darkGreen mb-8" style={{ lineHeight: '1.6' }}>
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
              {/* Visual representation placeholder - you can add an illustration here later */}
              <div className="bg-white/20 rounded-2xl p-8 backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-6xl mb-4">🛡️</div>
                  <p className="text-lg text-medico-darkGreen font-medium">
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
