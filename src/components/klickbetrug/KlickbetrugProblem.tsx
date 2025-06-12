
import React from 'react';
import { Bot, Users, Shield, TrendingUp } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';
import { getSectionClasses, getContainerClasses, getGridClasses } from '@/styles/spacing';
import { getHeadingClasses, getBodyClasses } from '@/styles/typography';

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
    <section className={`${getSectionClasses('large', 'mint')} font-satoshi`}>
      <div className={getContainerClasses()}>
        <Reveal>
          <div className="text-left mb-16">
            <h2 className={`${getHeadingClasses('h2', 'primary', 'left')} mb-6`}>
              Typische Arten von Klickbetrug – so läuft der Angriff ab
            </h2>
          </div>
        </Reveal>
        
        <StaggerReveal className={getGridClasses(4, 'large')}>
          {problems.map((problem, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 text-left group hover:transform hover:scale-105">
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4 group-hover:bg-medico-turquoise/10 transition-colors duration-300">
                  <problem.icon className="w-8 h-8 text-gray-600 group-hover:text-medico-turquoise transition-colors duration-300" />
                </div>
              </div>
              <h3 className={`${getHeadingClasses('h4', 'primary', 'left')} mb-4`}>
                {problem.title}
              </h3>
              <p className={getBodyClasses('base', 'secondary', 'left')}>
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
