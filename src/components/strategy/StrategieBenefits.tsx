
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
      title: "Strategische Klarheit auf C-Level",
      description: "Sie erhalten validierte Strategic Discovery mit Opportunity Mapping, Value Hypotheses und klarem Business Case – keine Bauchentscheidungen, sondern datenbasierte Strategien."
    },
    {
      IconComponent: TrendingUp,
      title: "Messbare Business Outcomes",
      description: "Keine Vanity Metrics – Sie bekommen KPI-Frameworks mit echten Business Outcomes: Lead Quality +180%, Conversion +240%, Time-to-Market halbiert."
    },
    {
      IconComponent: Users,
      title: "End-to-End Implementation Leadership",
      description: "Von Strategic Discovery über UX Strategy bis zur Umsetzung – Sie erhalten koordinierte Führung internationaler Teams mit klaren Milestones und Quality Gates."
    },
    {
      IconComponent: Zap,
      title: "Direkter C-Level Advisory",
      description: "16+ Jahre Erfahrung in digitaler Transformation – Sie sprechen direkt mit dem Digital Strategy Lead, keine Junior-Berater, keine Agenturen-Ebenen."
    }
  ];

  return (
    <section className={getSectionClasses('large', 'white')}>
      <div className={getContainerClasses()}>
        <Reveal>
          <div className="text-center mb-16">
            <h2 className={`${getHeadingClasses('h2', 'primary', 'center')} mb-6`}>
              Digital Transformation mit strategischem Impact
            </h2>
            <p className={`${getBodyClasses('large', 'secondary', 'center')} max-w-3xl mx-auto`}>
              Von Strategic Discovery bis zur messbaren Umsetzung – mit 16+ Jahren Erfahrung in der Führung digitaler Transformationen für B2B-Unternehmen im DACH-Raum.
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
                    <IconComponent className="h-10 w-10 text-accent-primary" />
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
