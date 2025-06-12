
import React from 'react';
import { Bot, Users, Shield, TrendingUp } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';

const KlickbetrugProblem = () => {
  const problems = [
    {
      icon: Bot,
      title: 'Bots & Scripts',
      description: 'Automatisierte Klicks rund um die Uhr – ohne jegliche Kaufabsicht.'
    },
    {
      icon: Users,
      title: 'Konkurrenz-Klicks',
      description: 'Wettbewerber klicken absichtlich auf Ihre Anzeigen, um Ihr Budget zu verbrennen.'
    },
    {
      icon: Shield,
      title: 'VPNs & Klickfarmen',
      description: 'Tausende Klicks aus anonymen IPs – für Google kaum erkennbar.'
    },
    {
      icon: TrendingUp,
      title: 'Traffic-Manipulation',
      description: 'Hoher Klickanteil aus irrelevanten Quellen – kein einziger Kunde darunter.'
    }
  ];

  return (
    <section className="py-20 bg-white font-satoshi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-medico-darkGreen mb-6 leading-tight">
              Typische Arten von Klickbetrug – so läuft der Angriff ab
            </h2>
          </div>
        </Reveal>
        
        <StaggerReveal className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 text-center">
              <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center mx-auto mb-6">
                <problem.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-medico-darkGreen mb-4">
                {problem.title}
              </h3>
              <p className="text-medico-darkGreen/80" style={{ lineHeight: '1.5' }}>
                {problem.description}
              </p>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
};

export default KlickbetrugProblem;
