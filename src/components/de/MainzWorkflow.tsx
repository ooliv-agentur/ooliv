import React from 'react';
import { Search, Lightbulb, Code, RefreshCw } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';

const MainzWorkflow = () => {
  const steps = [
    {
      icon: <Search className="h-8 w-8" />,
      title: "1. Analyse",
      description: "Website, Technik, Inhalte und Wettbewerb."
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "2. Strategie & Implementation",
      description: "Ziele, Maßnahmen und Prioritäten für Website, SEO und digitale Strategie definieren und umsetzen."
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "3. Umsetzung",
      description: "Design, Inhalte, Entwicklung, Tracking und Automationen."
    },
    {
      icon: <RefreshCw className="h-8 w-8" />,
      title: "4. Optimierung",
      description: "Monitoring, Reporting und laufende Weiterentwicklung."
    }
  ];

  return (
    <section className="py-20 bg-white font-satoshi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-medico-darkGreen mb-6 leading-tight">
              So arbeiten wir im Projekt
            </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strukturiert, transparent und mit klarem Fokus auf Ihre Ziele. Von Strategic Discovery über Implementation bis zum Go-Live begleiten wir Sie durch alle Phasen Ihrer digitalen Transformation.
          </p>
          </div>
        </Reveal>

        <StaggerReveal className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 h-full">
                <div className="text-accent-primary mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-medico-darkGreen">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
              {/* Connecting Arrow for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#00B8A9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
};

export default MainzWorkflow;
