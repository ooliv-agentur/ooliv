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
    <section id="warum-ooliv" className="py-24 bg-[#F4F7F7]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-text mb-6 leading-tight">
              Wir sind keine typische Agentur.
            </h2>
            <p className="text-xl text-teal max-w-4xl mx-auto font-medium leading-relaxed">
              Geführt von einem Senior-Strategen — keine Junioren, kein Weiterreichen, kein Sales-Vorlauf. Direkter Draht zur Geschäftsführung.
            </p>
          </div>
        </Reveal>
        
        <StaggerReveal className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {outcomes.map((outcome, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-[20px] border border-gray-100 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="w-12 h-12 rounded-full bg-teal flex items-center justify-center mb-6 text-white">
                {outcome.icon}
              </div>
              <p className="text-primary-text text-base font-medium leading-relaxed">
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
