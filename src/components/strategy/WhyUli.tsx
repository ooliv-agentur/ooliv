import React from 'react';
import { Award, Users, Target, TrendingUp } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';

const WhyUli = () => {
  const credentials = [
    {
      icon: Award,
      title: "16+ Jahre Erfahrung",
      description: "Digital-Transformation für B2B-Unternehmen im DACH-Raum"
    },
    {
      icon: Users,
      title: "100+ erfolgreiche Projekte",
      description: "Von Strategie-Workshops bis zu kompletten Digital-Transformationen"
    },
    {
      icon: Target,
      title: "Direkt mit mir",
      description: "Kein Junior-Team, keine Agentur-Hierarchie – Sie arbeiten mit einem erfahrenen Berater"
    },
    {
      icon: TrendingUp,
      title: "Messbare Ergebnisse",
      description: "+180% Lead-Qualität, +240% Conversion-Rate bei typischen Projekten"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Warum mit mir arbeiten?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ich bin Uli Schönleber – seit über 16 Jahren helfe ich B2B-Unternehmen dabei, digital besser zu werden. Nicht mit Standard-Lösungen, sondern mit strategischem Denken und messbaren Ergebnissen.
            </p>
          </div>
        </Reveal>

        <StaggerReveal className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {credentials.map((credential, index) => {
            const IconComponent = credential.icon;
            return (
              <div 
                key={index}
                className="bg-card p-6 rounded-xl border border-border text-center hover:border-primary/50 transition-all duration-300"
              >
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{credential.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{credential.description}</p>
              </div>
            );
          })}
        </StaggerReveal>
      </div>
    </section>
  );
};

export default WhyUli;
