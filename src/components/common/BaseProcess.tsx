
import React from 'react';
import { LucideIcon } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';
import { Icon } from '@/components/ui/icon';

interface ProcessStep {
  icon: LucideIcon;
  number?: string;
  title: string;
  subtitle?: string;
  description: string;
}

type LayoutType = 'grid' | 'timeline' | 'cards';
type GridColumns = 2 | 3 | 4 | 5;

interface BaseProcessProps {
  title: string;
  subtitle?: string;
  steps: ProcessStep[];
  backgroundColor?: 'white' | 'mint' | 'gray';
  layout?: LayoutType;
  gridColumns?: GridColumns;
  showConnectors?: boolean;
  alignment?: 'left' | 'center';
}

const BaseProcess = ({ 
  title, 
  subtitle, 
  steps, 
  backgroundColor = 'mint',
  layout = 'cards',
  gridColumns = 4,
  showConnectors = true,
  alignment = 'center'
}: BaseProcessProps) => {
  const bgClass = {
    white: 'bg-white',
    mint: 'bg-medico-mint/30',
    gray: 'bg-gray-50'
  }[backgroundColor];

  const alignmentClass = alignment === 'left' ? 'text-left' : 'text-center';
  const alignmentMxClass = alignment === 'left' ? '' : 'mx-auto';

  // Grid layout - horizontal with icons and connection lines
  const renderGridLayout = () => {
    const gridColsClass = {
      2: 'md:grid-cols-2',
      3: 'md:grid-cols-3',
      4: 'md:grid-cols-4',
      5: 'md:grid-cols-5'
    }[gridColumns];

    return (
      <StaggerReveal className={`grid grid-cols-1 ${gridColsClass} gap-8`}>
        {steps.map((step, index) => (
          <div key={index} className={`${alignmentClass} group relative`}>
            {/* Connection line */}
            {showConnectors && index < steps.length - 1 && (
              <div 
                className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-gray-200 z-0" 
                style={{ width: 'calc(100% - 2rem)' }} 
              />
            )}
            
            <div className="relative z-10 mb-6">
              <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mb-4 group-hover:bg-medico-turquoise group-hover:text-white transition-all duration-300">
                <step.icon className="h-6 w-6" />
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-2 text-medico-darkGreen">
              {step.title}
            </h3>
            
            {step.subtitle && (
              <p className="text-sm text-medico-turquoise mb-3 font-semibold">
                {step.subtitle}
              </p>
            )}
            
            <p className="text-medico-darkGreen/80 leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </StaggerReveal>
    );
  };

  // Timeline layout - alternating left/right
  const renderTimelineLayout = () => (
    <div className="space-y-16">
      {steps.map((step, index) => {
        const isEven = index % 2 === 0;
        return (
          <Reveal key={index}>
            <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-medico-turquoise/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <step.icon className="h-8 w-8 text-medico-turquoise" />
                  </div>
                  {step.number && (
                    <span className="text-5xl font-bold text-medico-turquoise/20">{step.number}</span>
                  )}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-medico-darkGreen">
                  {step.title}
                </h3>
                {step.subtitle && (
                  <p className="text-lg text-medico-turquoise mb-3 font-semibold">
                    {step.subtitle}
                  </p>
                )}
                <p className="text-medico-darkGreen/80 leading-relaxed text-lg">
                  {step.description}
                </p>
              </div>
              <div className="hidden md:block w-px h-24 bg-gray-200"></div>
              <div className="flex-1"></div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );

  // Cards layout - original card-based grid
  const renderCardsLayout = () => {
    const gridColsClass = {
      2: 'md:grid-cols-2',
      3: 'md:grid-cols-3',
      4: 'md:grid-cols-2 lg:grid-cols-4',
      5: 'md:grid-cols-3 lg:grid-cols-5'
    }[gridColumns];

    return (
      <StaggerReveal className={`grid grid-cols-1 ${gridColsClass} gap-8`}>
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
                  {step.number && (
                    <div className="absolute -top-2 -right-2 bg-accent-primary text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center">
                      {step.number}
                    </div>
                  )}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-medico-darkGreen text-center">{step.title}</h3>
              {step.subtitle && (
                <p className="text-sm text-medico-turquoise mb-3 font-semibold text-center">
                  {step.subtitle}
                </p>
              )}
              <p className="text-medico-darkGreen/80 leading-relaxed text-center">{step.description}</p>
            </div>
            
            {showConnectors && index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-accent-primary/30 transform -translate-y-1/2"></div>
            )}
          </div>
        ))}
      </StaggerReveal>
    );
  };

  return (
    <section className={`py-24 ${bgClass}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className={`${alignmentClass} mb-16`}>
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-medico-darkGreen ${alignmentMxClass}`} style={{ lineHeight: '1.3' }}>
              {title}
            </h2>
            <div className={`w-20 h-1 bg-accent-primary mb-8 ${alignmentMxClass}`}></div>
            {subtitle && (
              <p className={`text-lg md:text-xl text-medico-darkGreen/80 max-w-3xl ${alignmentMxClass}`} style={{ lineHeight: '1.6' }}>
                {subtitle}
              </p>
            )}
          </div>
        </Reveal>
        
        {layout === 'grid' && renderGridLayout()}
        {layout === 'timeline' && renderTimelineLayout()}
        {layout === 'cards' && renderCardsLayout()}
      </div>
    </section>
  );
};

export default BaseProcess;
