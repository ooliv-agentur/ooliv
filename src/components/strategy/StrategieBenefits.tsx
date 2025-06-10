
import React from 'react';
import { Target, TrendingUp, Users, Zap } from 'lucide-react';

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
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-medico-darkGreen" style={{ lineHeight: '1.3' }}>
            Strategie & Konzept als Fundament
          </h2>
          <div className="w-20 h-1 bg-medico-turquoise mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-medico-darkGreen/80 max-w-3xl mx-auto" style={{ lineHeight: '1.6' }}>
            Ohne eine klare Strategie und ein durchdachtes Webkonzept verpuffen Marketing-Budgets. Wir sorgen dafür, dass jeder Euro zielgerichtet eingesetzt wird – von der Analyse bis zur Umsetzung.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="bg-medico-mint/30 rounded-2xl p-6 mb-6 group-hover:bg-medico-turquoise/20 transition-colors duration-300">
                <benefit.icon className="h-12 w-12 mx-auto text-medico-turquoise" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-medico-darkGreen">{benefit.title}</h3>
              <p className="text-medico-darkGreen/80 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategieBenefits;
