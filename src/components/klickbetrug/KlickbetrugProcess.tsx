
import React from 'react';
import { Eye, Brain, CheckCircle } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';
import { getSectionClasses, getContainerClasses } from '@/styles/spacing';
import { getHeadingClasses, getBodyClasses } from '@/styles/typography';

const KlickbetrugProcess = () => {
  const steps = [
    {
      icon: Eye,
      title: 'Klick-Analyse in Echtzeit',
      subtitle: 'Sofortige Prüfung',
      description: 'IP-Adresse, Geolocation, Browser und Gerätedaten werden beim Klick erfasst und analysiert.'
    },
    {
      icon: Brain,
      title: 'KI erkennt Betrug',
      subtitle: 'Künstliche Intelligenz',
      description: 'Unsere KI vergleicht das Verhalten mit Betrugsmustern und blockiert verdächtige Klicks automatisch.'
    },
    {
      icon: CheckCircle,
      title: 'Budget gesichert',
      subtitle: 'Messbarer Erfolg',
      description: 'Ihr Werbebudget fließt nur zu echten Interessenten – transparent nachverfolgbar.'
    }
  ];

  return (
    <section className={`${getSectionClasses('large', 'white')} font-satoshi`}>
      <div className={getContainerClasses()}>
        <Reveal>
          <div className="text-left mb-16">
            <h2 className={`${getHeadingClasses('h2', 'primary', 'left')} mb-6`}>
              Wie läuft der Schutz konkret ab?
            </h2>
            <p className={`${getBodyClasses('large', 'secondary', 'left')} max-w-3xl`}>
              Unser Klickbetrug-Schutz arbeitet vollautomatisch im Hintergrund – in nur 3 Schritten zu mehr Sicherheit.
            </p>
          </div>
        </Reveal>
        
        <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-left group relative">
              {/* Connection line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-gray-200 z-0" style={{ width: 'calc(100% - 2rem)' }} />
              )}
              
              <div className="relative z-10 mb-6">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mb-4 group-hover:bg-medico-turquoise group-hover:text-white transition-all duration-300">
                  <step.icon className="h-6 w-6" />
                </div>
              </div>
              
              <h3 className={`${getHeadingClasses('h4', 'primary', 'left')} mb-2`}>
                {step.title}
              </h3>
              
              <p className={`${getBodyClasses('small', 'accent', 'left')} mb-3 font-semibold`}>
                {step.subtitle}
              </p>
              
              <p className={getBodyClasses('small', 'secondary', 'left')}>
                {step.description}
              </p>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
};

export default KlickbetrugProcess;
