
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Clock, CheckCircle } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';
import { getSectionClasses, getContainerClasses, getGridClasses } from '@/styles/spacing';
import { getHeadingClasses, getBodyClasses } from '@/styles/typography';

const KlickbetrugCTA = () => {
  const handleStartProtection = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  const benefits = [
    {
      icon: Shield,
      title: 'Funktioniert mit jedem Google Ads Konto',
      description: 'Keine komplexe Einrichtung nötig'
    },
    {
      icon: Clock,
      title: 'Keine Integration nötig',
      description: 'Sofort einsatzbereit ohne technische Hürden'
    },
    {
      icon: CheckCircle,
      title: 'Automatischer Schutz rund um die Uhr',
      description: 'KI-gestützte Überwachung ohne manuelle Eingriffe'
    }
  ];

  return (
    <section className={`${getSectionClasses('large', 'mint')} font-satoshi relative overflow-hidden`}>
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-circle slow w-20 h-20 top-20 right-20 opacity-30"></div>
        <div className="floating-circle delayed w-16 h-16 bottom-32 left-16 opacity-40"></div>
        <div className="floating-circle reverse w-12 h-12 top-1/2 right-1/3 opacity-50"></div>
      </div>

      <div className="relative z-10">
        <div className={getContainerClasses()}>
          <Reveal>
            <div className="text-center mb-12">
              <h2 className={`${getHeadingClasses('h2', 'primary', 'center')} mb-6`}>
                Starten Sie jetzt — und schützen Sie Ihre Kampagnen dauerhaft
              </h2>
              <p className={`${getBodyClasses('large', 'secondary', 'center')} max-w-3xl mx-auto mb-8`}>
                Unsere Lösung läuft im Hintergrund, ist sofort aktiv und schützt Ihr Google Ads Budget zuverlässig.
              </p>
            </div>
          </Reveal>

          <StaggerReveal className={getGridClasses(3, 'large')}>
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 text-center group">
                <div className="w-12 h-12 rounded-full bg-medico-turquoise/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-medico-turquoise/20 transition-colors duration-300">
                  <benefit.icon className="w-6 h-6 text-medico-turquoise" />
                </div>
                <h3 className={`${getHeadingClasses('h5', 'primary', 'center')} mb-3`}>
                  {benefit.title}
                </h3>
                <p className={getBodyClasses('small', 'secondary', 'center')}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </StaggerReveal>

          <Reveal delay={0.4}>
            <div className="text-center mt-12">
              <Button 
                size="xl" 
                className="group font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 mx-auto"
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
                onClick={handleStartProtection}
              >
                Schutz aktivieren
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <p className="text-sm text-medico-darkGreen/60 mt-4">
                Kostenlose Analyse • Keine Vertragsbindung
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default KlickbetrugCTA;
