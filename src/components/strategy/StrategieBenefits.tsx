
import React from 'react';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';
import { RegisteredIcon, IconName } from '@/components/ui/registered-icon';
import { getSectionClasses, getContainerClasses, getGridClasses } from '@/styles/spacing';
import { getHeadingClasses, getBodyClasses } from '@/styles/typography';
import { Target, TrendingUp, Users, Zap } from 'lucide-react';

const StrategieBenefits = () => {
  const benefits = [
    {
      icon: 'target' as IconName,
      title: "Zielgruppenanalyse & Marktverständnis",
      description: "Wir analysieren, wer Ihre Kunden sind, wie sie online suchen und wie Sie sie mit einem klaren Webkonzept optimal erreichen."
    },
    {
      icon: 'trendingUp' as IconName,
      title: "Nutzerführung & Conversion-Strategie",
      description: "Wir definieren, wie Ihre Besucher geführt werden – für mehr Leads und eine hohe Conversion-Rate. Ihr Webkonzept wird so zur tragenden Säule Ihrer digitalen Strategie."
    },
    {
      icon: 'users' as IconName,
      title: "Projektplan & Roadmap",
      description: "Wir entwickeln eine klare Roadmap mit Meilensteinen, damit Ihr Projekt strukturiert umgesetzt wird und alle Beteiligten jederzeit den Überblick behalten – vom ersten Webkonzept bis zur Umsetzung."
    },
    {
      icon: 'zap' as IconName,
      title: "Persönliche Betreuung",
      description: "Wir begleiten Sie von der ersten Idee bis zur Umsetzung – mit einem persönlichen Ansprechpartner, einem individuellen Webkonzept und dem richtigen Blick fürs Detail."
    }
  ];

  // Direct icon mapping for fallback testing
  const iconComponents = {
    target: Target,
    trendingUp: TrendingUp,
    users: Users,
    zap: Zap
  };

  return (
    <section className={getSectionClasses('large', 'white')}>
      <div className={getContainerClasses()}>
        <Reveal>
          <div className="text-center mb-16">
            <h2 className={`${getHeadingClasses('h2', 'primary', 'center')} mb-6`}>
              Strategie & Konzept als Fundament
            </h2>
            <p className={`${getBodyClasses('large', 'secondary', 'center')} max-w-3xl mx-auto`}>
              Ohne eine klare Strategie und ein durchdachtes Webkonzept verpuffen Marketing-Budgets. Wir sorgen dafür, dass jeder Euro zielgerichtet eingesetzt wird – von der Analyse bis zur Umsetzung.
            </p>
          </div>
        </Reveal>
        
        <StaggerReveal className={getGridClasses(4, 'large')}>
          {benefits.map((benefit, index) => {
            const DirectIcon = iconComponents[benefit.icon];
            
            return (
              <div 
                key={index}
                className="text-center"
              >
                <div className="mb-6 flex justify-center border-2 border-red-200 bg-gray-100 p-4 min-h-[80px]">
                  {/* Testing RegisteredIcon */}
                  <div className="bg-blue-100 p-2 mr-2">
                    <RegisteredIcon 
                      name={benefit.icon}
                      variant="round"
                      size="xl" 
                      background="light"
                      className="text-medico-turquoise"
                    />
                  </div>
                  
                  {/* Testing direct Lucide icon as fallback */}
                  <div className="bg-green-100 p-2">
                    <div className="h-10 w-10 rounded-full bg-medico-mint/20 p-2 flex items-center justify-center">
                      <DirectIcon className="h-6 w-6 text-medico-turquoise" />
                    </div>
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
