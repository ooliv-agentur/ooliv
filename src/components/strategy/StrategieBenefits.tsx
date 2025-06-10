
import React from 'react';
import { Target, TrendingUp, Users, Zap } from 'lucide-react';

const StrategieBenefits = () => {
  const benefits = [
    {
      icon: Target,
      title: "Klare Zielgruppen-Definition",
      description: "Wir analysieren Ihre Zielgruppe und entwickeln maßgeschneiderte Strategien für maximale Reichweite und Conversion."
    },
    {
      icon: TrendingUp,
      title: "Messbare Ergebnisse",
      description: "Unsere datengetriebenen Ansätze sorgen für nachvollziehbare Erfolge und kontinuierliche Optimierung Ihrer digitalen Präsenz."
    },
    {
      icon: Users,
      title: "User Experience First",
      description: "Nutzerfreundlichkeit steht im Mittelpunkt unserer Strategieentwicklung – für bessere Conversion und Kundenzufriedenheit."
    },
    {
      icon: Zap,
      title: "Schnelle Umsetzung",
      description: "Von der Konzeption bis zur Implementierung arbeiten wir effizient und sorgen für schnelle, sichtbare Ergebnisse."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-medico-darkGreen" style={{ lineHeight: '1.3' }}>
            Warum strategisches Webkonzept?
          </h2>
          <div className="w-20 h-1 bg-medico-turquoise mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-medico-darkGreen/80 max-w-3xl mx-auto" style={{ lineHeight: '1.6' }}>
            Eine durchdachte Strategie ist das Fundament jeder erfolgreichen Website. Wir entwickeln maßgeschneiderte Konzepte, die Ihre Geschäftsziele erreichen.
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
