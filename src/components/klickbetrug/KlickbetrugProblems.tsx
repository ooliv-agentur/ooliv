
import React from 'react';
import { Bot, Users, Globe, BarChart3 } from 'lucide-react';

const KlickbetrugProblems = () => {
  const problems = [
    {
      icon: <Bot className="h-8 w-8 text-medico-turquoise mb-4" />,
      title: "Bots & Scripts",
      description: "Automatisierte Klicks rund um die Uhr – ohne jegliche Kaufabsicht."
    },
    {
      icon: <Users className="h-8 w-8 text-medico-turquoise mb-4" />,
      title: "Konkurrenz-Klicks",
      description: "Wettbewerber klicken absichtlich auf Ihre Anzeigen, um Ihr Budget zu verbrennen."
    },
    {
      icon: <Globe className="h-8 w-8 text-medico-turquoise mb-4" />,
      title: "VPNs & Klickfarmen",
      description: "Tausende Klicks aus anonymen IPs – für Google kaum erkennbar."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-medico-turquoise mb-4" />,
      title: "Traffic-Manipulation",
      description: "Hoher Klickanteil aus irrelevanten Quellen – kein einziger Kunde darunter."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-medico-darkGreen">
            Typische Arten von Klickbetrug – so läuft der Angriff ab
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="bg-medico-mint/20 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center text-center">
                {problem.icon}
                <h3 className="text-xl font-bold mb-3 text-medico-darkGreen">{problem.title}</h3>
                <p className="text-medico-darkGreen/80 leading-relaxed">{problem.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KlickbetrugProblems;
