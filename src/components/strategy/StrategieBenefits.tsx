
import React from 'react';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';
import { Target, TrendingUp, Users, Zap } from 'lucide-react';
import { Icon } from '@/components/ui/icon';
import { getSectionClasses, getContainerClasses, getGridClasses } from '@/styles/spacing';
import { getHeadingClasses, getBodyClasses } from '@/styles/typography';

const StrategieBenefits = () => {
  const benefits = [
    {
      icon: Target,
      title: "Zielgruppenanalyse & Marktverständnis",
      description: "Wir analysieren, wer Ihre Kunden sind, wie sie online suchen und wie Sie sie mit einem klaren Webkonzept optimal erreichen."
    },
    {
      icon: TrendingUp,
      title: "Nutzerführung & Conversion-Strategie",
      description: "Wir definieren, wie Ihre Besucher geführt werden – für mehr Leads und eine hohe Conversion-Rate. Ihr Webkonzept wird so zur tragenden Säule Ihrer digitalen Strategie."
    },
    {
      icon: Users,
      title: "Projektplan & Roadmap",
      description: "Wir entwickeln eine klare Roadmap mit Meilensteinen, damit Ihr Projekt strukturiert umgesetzt wird und alle Beteiligten jederzeit den Überblick behalten – vom ersten Webkonzept bis zur Umsetzung."
    },
    {
      icon: Zap,
      title: "Persönliche Betreuung",
      description: "Wir begleiten Sie von der ersten Idee bis zur Umsetzung – mit einem persönlichen Ansprechpartner, einem individuellen Webkonzept und dem richtigen Blick fürs Detail."
    }
  ];

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
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center"
            >
              <div className="mb-6 flex justify-center">
                <Icon 
                  icon={benefit.icon}
                  variant="round"
                  size="xl" 
                  background="light"
                  className="text-medico-turquoise"
                />
              </div>
              <h3 className={`${getHeadingClasses('h4', 'primary', 'center')} mb-4`}>{benefit.title}</h3>
              <p className={getBodyClasses('base', 'secondary', 'center')}>{benefit.description}</p>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
};

export default StrategieBenefits;
