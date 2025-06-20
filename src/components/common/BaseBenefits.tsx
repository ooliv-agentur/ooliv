
import React from 'react';
import { LucideIcon } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';
import { RegisteredIcon, IconName } from '@/components/ui/registered-icon';

interface Benefit {
  icon: LucideIcon | IconName;
  title: string;
  description: string;
}

interface BaseBenefitsProps {
  title: string;
  subtitle?: string;
  benefits: Benefit[];
  backgroundColor?: 'white' | 'mint' | 'gray';
  gridCols?: 2 | 3 | 4;
}

const BaseBenefits = ({ 
  title, 
  subtitle, 
  benefits, 
  backgroundColor = 'white',
  gridCols = 4 
}: BaseBenefitsProps) => {
  const bgClass = {
    white: 'bg-white',
    mint: 'bg-medico-mint/30',
    gray: 'bg-gray-50'
  }[backgroundColor];

  const gridClass = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4'
  }[gridCols];

  return (
    <section className={`py-24 ${bgClass}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-medico-darkGreen" style={{ lineHeight: '1.3' }}>
              {title}
            </h2>
            <div className="w-20 h-1 bg-medico-turquoise mx-auto mb-8"></div>
            {subtitle && (
              <p className="text-lg md:text-xl text-medico-darkGreen/80 max-w-3xl mx-auto" style={{ lineHeight: '1.6' }}>
                {subtitle}
              </p>
            )}
          </div>
        </Reveal>
        
        <StaggerReveal className={`grid ${gridClass} gap-8`}>
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="mb-6 group-hover:bg-medico-turquoise/20 transition-colors duration-300">
                {typeof benefit.icon === 'string' ? (
                  <RegisteredIcon 
                    name={benefit.icon as IconName}
                    variant="round"
                    size="xl"
                    background="light"
                    className="mx-auto text-medico-turquoise group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <div className="inline-flex items-center justify-center transition-colors rounded-full h-10 w-10 bg-medico-mint/20 p-2 mx-auto text-medico-turquoise group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="h-5 w-5" />
                  </div>
                )}
              </div>
              <h3 className="text-xl font-bold mb-4 text-medico-darkGreen">{benefit.title}</h3>
              <p className="text-medico-darkGreen/80 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
};

export default BaseBenefits;
