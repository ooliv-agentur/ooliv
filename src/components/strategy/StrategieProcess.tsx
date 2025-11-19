
import React from 'react';
import { Search, Lightbulb, Rocket } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';
import { Icon } from '@/components/ui/icon';

const StrategieProcess = () => {
  const steps = [
    {
      icon: Search,
      number: "01",
      title: "Wo stehen Sie heute?",
      description: "Wir analysieren Ihre Situation und identifizieren die größten Hebel für Wachstum."
    },
    {
      icon: Lightbulb,
      number: "02", 
      title: "Wo wollen Sie hin?",
      description: "Gemeinsam entwickeln wir eine klare Strategie mit priorisierten Maßnahmen."
    },
    {
      icon: Rocket,
      number: "03",
      title: "Wie kommen Sie dorthin?",
      description: "Wir begleiten Sie bei der Umsetzung – damit Ihre Strategie nicht in der Schublade landet."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Analyse → Strategie → Umsetzung
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Vom Ist-Zustand zur erfolgreichen Umsetzung – in drei klaren Schritten.
            </p>
          </div>
        </Reveal>
        
        <StaggerReveal className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-card rounded-2xl p-8 border border-border h-full">
                <div className="flex items-center justify-center mb-6">
                  <div className="relative">
                    <Icon 
                      icon={step.icon}
                      variant="round"
                      size="lg"
                      background="strong"
                      className="text-primary"
                    />
                    <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-sm font-bold rounded-full w-10 h-10 flex items-center justify-center shadow-lg border-2 border-background">
                      {step.number}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground text-center">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-center">{step.description}</p>
              </div>
              
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
};

export default StrategieProcess;
