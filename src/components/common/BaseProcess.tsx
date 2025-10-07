
import React from 'react';
import { LucideIcon } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';
import { Icon } from '@/components/ui/icon';

interface ProcessStep {
  icon: LucideIcon;
  number: string;
  title: string;
  description: string;
}

interface BaseProcessProps {
  title: string;
  subtitle?: string;
  steps: ProcessStep[];
  backgroundColor?: 'white' | 'mint' | 'gray';
}

const BaseProcess = ({ 
  title, 
  subtitle, 
  steps, 
  backgroundColor = 'mint' 
}: BaseProcessProps) => {
  const bgClass = {
    white: 'bg-white',
    mint: 'bg-medico-mint/30',
    gray: 'bg-gray-50'
  }[backgroundColor];

  return (
    <section className={`py-24 ${bgClass}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-medico-darkGreen" style={{ lineHeight: '1.3' }}>
              {title}
            </h2>
            <div className="w-20 h-1 bg-accent-primary mx-auto mb-8"></div>
            {subtitle && (
              <p className="text-lg md:text-xl text-medico-darkGreen/80 max-w-3xl mx-auto" style={{ lineHeight: '1.6' }}>
                {subtitle}
              </p>
            )}
          </div>
        </Reveal>
        
        <StaggerReveal className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                <div className="flex items-center justify-center mb-6">
                  <div className="relative">
                    <Icon 
                      icon={step.icon}
                      variant="round"
                      size="lg"
                      background="strong"
                      className="text-accent-primary"
                    />
                    <div className="absolute -top-2 -right-2 bg-accent-primary text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center">
                      {step.number}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-medico-darkGreen text-center">{step.title}</h3>
                <p className="text-medico-darkGreen/80 leading-relaxed text-center">{step.description}</p>
              </div>
              
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-accent-primary/30 transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
};

export default BaseProcess;
