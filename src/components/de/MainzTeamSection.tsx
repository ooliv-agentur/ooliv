import React from 'react';
import { Users, Award, TrendingUp, Shield } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';

const MainzTeamSection = () => {
  const benefits = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Inhabergeführt",
      description: "Direkter Kontakt zu den Entscheidern – ohne Zwischenebenen."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Fokus auf B2B & Mittelstand",
      description: "Wir verstehen komplexe Geschäftsmodelle und übertragen sie in klare digitale Prozesse."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Messbare Ergebnisse",
      description: "Transparente KPIs, regelmäßiges Reporting und nachvollziehbare Entwicklungen."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Ganzheitlicher Ansatz",
      description: "Strategie, Inhalte, Technik, SEO und Ads aus einer Hand."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white font-satoshi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-medico-darkGreen mb-6 leading-tight">
              Was uns als Agentur unterscheidet
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Inhabergeführt, transparent, erfolgreich – so arbeitet ooliv als Ihre Werbeagentur in Mainz
            </p>
          </div>
        </Reveal>

        <StaggerReveal className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="text-accent-primary mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-medico-darkGreen">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </StaggerReveal>

      </div>
    </section>
  );
};

export default MainzTeamSection;
