
import React from 'react';
import { Users, Award, Clock, CheckCircle } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';

const WiesbadenTeamSection = () => {
  const teamHighlights = [
    {
      icon: <Users className="w-8 h-8 text-medico-turquoise" />,
      title: "Erfahrenes Team",
      description: "8 Spezialisten mit komplementären Fähigkeiten für ganzheitliche Projektbetreuung"
    },
    {
      icon: <Award className="w-8 h-8 text-medico-turquoise" />,
      title: "Bewährte Expertise", 
      description: "Über 15 Jahre Markterfahrung im digitalen Bereich mit nachweislichen Erfolgen"
    },
    {
      icon: <Clock className="w-8 h-8 text-medico-turquoise" />,
      title: "Zuverlässige Umsetzung",
      description: "Termingerechte Projektrealisation durch strukturierte Arbeitsabläufe"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-medico-turquoise" />,
      title: "Messbare Resultate",
      description: "Erfolg wird an konkreten KPIs gemessen – transparent und nachvollziehbar"
    }
  ];

  return (
    <section className="py-20 bg-medico-mint">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-medico-darkGreen mb-6">
              Ihr kompetenter Partner als Werbeagentur
            </h2>
            <p className="text-xl text-medico-darkGreen max-w-3xl mx-auto">
              Hinter jedem erfolgreichen Projekt steht ein eingespieltes Team aus Strategen, Designern und Entwicklern. 
              Unter der Leitung von Uli Schönleber arbeiten wir methodisch, kreativ und immer mit Fokus auf Ihre Geschäftsziele.
            </p>
          </div>
        </Reveal>

        <StaggerReveal className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamHighlights.map((highlight, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-6">
                {highlight.icon}
              </div>
              <h3 className="text-xl font-bold text-medico-darkGreen mb-4">
                {highlight.title}
              </h3>
              <p className="text-medico-darkGreen leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
};

export default WiesbadenTeamSection;
