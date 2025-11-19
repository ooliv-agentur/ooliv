
import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';
import { Target, TrendingUp, Users } from 'lucide-react';
import { getSectionClasses, getContainerClasses, getGridClasses } from '@/styles/spacing';
import { getHeadingClasses, getBodyClasses } from '@/styles/typography';

const StrategieBenefits = () => {
  const benefits = [
    {
      IconComponent: Target,
      title: "Klare Strategie statt Ratlosigkeit",
      description: "Sie wissen nach unserem Gespräch genau, was als nächstes zu tun ist."
    },
    {
      IconComponent: TrendingUp,
      title: "Echte Business-Ergebnisse",
      description: "Deutlich mehr qualifizierte Anfragen und bessere Conversions – messbar und nachhaltig."
    },
    {
      IconComponent: Users,
      title: "Zusammenarbeit mit Uli persönlich",
      description: "Keine Junior-Berater, keine Agentur-Ebenen. Direkte Zusammenarbeit mit über 16 Jahren Erfahrung."
    }
  ];

  return (
    <section className={getSectionClasses('large', 'white')}>
      <div className={getContainerClasses()}>
        <Reveal>
          <div className="text-center mb-16">
            <h2 className={`${getHeadingClasses('h2', 'primary', 'center')} mb-6`}>
              Was Sie von mir bekommen
            </h2>
            <p className={`${getBodyClasses('large', 'secondary', 'center')} max-w-3xl mx-auto`}>
              Klarheit für Ihre digitale Zukunft – im Gespräch klären wir, wie wir vorgehen.
            </p>
          </div>
        </Reveal>
        
        <StaggerReveal className={getGridClasses(3, 'large')}>
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.IconComponent;
            return (
              <div 
                key={index}
                className="text-center"
              >
                <div className="mb-6 flex justify-center">
                  <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center p-4">
                    <IconComponent className="h-10 w-10 text-primary" />
                  </div>
                </div>
                <h3 className={`${getHeadingClasses('h4', 'primary', 'center')} mb-4`}>{benefit.title}</h3>
                <p className={getBodyClasses('base', 'secondary', 'center')}>
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </StaggerReveal>
      </div>
    </section>
  );
};

export default StrategieBenefits;
