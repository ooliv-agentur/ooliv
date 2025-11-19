
import React from 'react';
import { Search, Lightbulb, PenTool, Rocket } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';
import { Icon } from '@/components/ui/icon';

const StrategieProcess = () => {
  const steps = [
    {
      icon: Search,
      number: "01",
      title: "Strategic Discovery",
      description: "Stakeholder Interviews, Opportunity Mapping, Competitive Analysis und Value Hypothesis Development – wir schaffen strategische Klarheit für Ihre digitale Transformation."
    },
    {
      icon: Lightbulb,
      number: "02", 
      title: "UX & Product Strategy",
      description: "Customer Journey Design, Information Architecture und Conversion Strategy – von der User Research bis zur Decision-Making UX für messbare Business Outcomes."
    },
    {
      icon: PenTool,
      number: "03",
      title: "AI Integration & Automation",
      description: "LLM Use Case Identification, Workflow Optimization und AI-Driven Content Pipelines – strategische AI-Enablement für Effizienzgewinne und Skalierung."
    },
    {
      icon: Rocket,
      number: "04",
      title: "Implementation Leadership",
      description: "Koordination internationaler Teams, Requirements Engineering, Quality Assurance und Performance Optimization – von der Strategie zur messbaren Umsetzung."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-medico-darkGreen">
              Strategic Discovery → UX Strategy → AI Integration → Implementation
            </h2>
            <p className="text-lg md:text-xl text-accent-primary max-w-3xl mx-auto">
              Unser bewährter 4-Phasen-Prozess für digitale Transformation: Von der strategischen Grundlage über UX & AI-Integration bis zur erfolgreichen Umsetzung mit messbaren Business Outcomes.
            </p>
          </div>
        </Reveal>
        
        <StaggerReveal className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-sm h-full">
                <div className="flex items-center justify-center mb-6">
                  <div className="relative">
                    <Icon 
                      icon={step.icon}
                      variant="round"
                      size="lg"
                      background="strong"
                      className="text-primary"
                    />
                    <div className="absolute -top-2 -right-2 bg-medico-darkGreen text-white text-sm font-bold rounded-full w-10 h-10 flex items-center justify-center shadow-lg border-2 border-white">
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

export default StrategieProcess;
