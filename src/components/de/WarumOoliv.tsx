import React from 'react';
import { TrendingUp, User, Target, Zap } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';

const WarumOoliv = () => {
  const outcomes = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      text: "+127 % mehr qualifizierte Leads (Ø nach 6 Monaten)"
    },
    {
      icon: <User className="h-6 w-6" />,
      text: "Jedes Projekt persönlich geführt von Uli Schönleber"
    },
    {
      icon: <Target className="h-6 w-6" />,
      text: "Klare KPIs, strukturierte Prozesse, messbare Ergebnisse"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      text: "Digitale Systeme, die skalieren statt verwalten"
    }
  ];

  return (
    <section className="py-20 bg-white font-satoshi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Wir sind keine typische Agentur.
            </h2>
            <p className="text-xl text-turquoise max-w-4xl mx-auto" style={{ lineHeight: '1.6' }}>
              Geführt von einem Senior-Strategen — keine Junioren, kein Weiterreichen, kein Sales-Vorlauf. Direkter Draht zur Geschäftsführung.
            </p>
          </div>
        </Reveal>
        
        <StaggerReveal className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {outcomes.map((outcome, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group border border-gray-100"
            >
              <div className="w-12 h-12 rounded-full bg-turquoise flex items-center justify-center mb-6 transition-all duration-300 text-white">
                {outcome.icon}
              </div>
              <p className="text-foreground text-base font-semibold" style={{ lineHeight: '1.5' }}>
                {outcome.text}
              </p>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
};

export default WarumOoliv;
