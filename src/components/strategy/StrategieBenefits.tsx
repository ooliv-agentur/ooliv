
import React from 'react';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';
import { Target, TrendingUp, Users, Zap } from 'lucide-react';
import { getSectionClasses, getContainerClasses, getGridClasses } from '@/styles/spacing';
import { getHeadingClasses, getBodyClasses } from '@/styles/typography';

const StrategieBenefits = () => {
  const benefits = [
    {
      IconComponent: Target,
      title: "Sie wissen genau, wen Sie ansprechen",
      description: "Sie bekommen eine klare Zielgruppenanalyse – wer sind Ihre Kunden, wie suchen sie, was brauchen sie? So verschwenden Sie kein Budget an die Falschen."
    },
    {
      IconComponent: TrendingUp,
      title: "Ihre Besucher werden zu Kunden",
      description: "Sie bekommen eine durchdachte Nutzerführung mit klaren CTAs und conversion-optimierten Seiten. Aus Klicks werden Anfragen."
    },
    {
      IconComponent: Users,
      title: "Sie haben einen klaren Plan",
      description: "Sie bekommen eine Roadmap mit Meilensteinen, Timelines und Verantwortlichkeiten. Jeder weiß, was zu tun ist – kein Chaos, kein Rätselraten."
    },
    {
      IconComponent: Zap,
      title: "Sie haben einen festen Ansprechpartner",
      description: "Sie bekommen direkten Draht zum Gründer – ohne Zwischenstellen, ohne Weiterleitungen. Von der ersten Idee bis zum Launch."
    }
  ];

  return (
    <section className={getSectionClasses('large', 'white')}>
      <div className={getContainerClasses()}>
        <Reveal>
          <div className="text-center mb-16">
            <h2 className={`${getHeadingClasses('h2', 'primary', 'center')} mb-6`}>
              Was Strategie Ihnen wirklich bringt
            </h2>
            <p className={`${getBodyClasses('large', 'secondary', 'center')} max-w-3xl mx-auto`}>
              Strategie klingt abstrakt? Ist es nicht. Es bedeutet: Klare Ziele, keine verschwendeten Budgets, planbare Ergebnisse.
            </p>
          </div>
        </Reveal>
        
        <StaggerReveal className={getGridClasses(4, 'large')}>
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.IconComponent;
            return (
              <div 
                key={index}
                className="text-center"
              >
                <div className="mb-6 flex justify-center">
                  <div className="h-20 w-20 bg-medico-mint/20 rounded-full flex items-center justify-center p-4">
                    <IconComponent className="h-10 w-10 text-medico-turquoise" />
                  </div>
                </div>
                <h3 className={`${getHeadingClasses('h4', 'primary', 'center')} mb-4`}>{benefit.title}</h3>
                <p className={getBodyClasses('base', 'secondary', 'center')}>{benefit.description}</p>
              </div>
            );
          })}
        </StaggerReveal>
      </div>
    </section>
  );
};

export default StrategieBenefits;
