
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
      title: "Analyse & Webkonzept",
      description: "Wir prüfen Ist-Zustand, Zielgruppen, Wettbewerb und entwickeln ein individuelles Webkonzept mit Sitemap und ersten Wireframes."
    },
    {
      icon: Lightbulb,
      number: "02", 
      title: "Strategie & Planung",
      description: "Wir definieren messbare Ziele, planen Maßnahmen und erstellen einen Projektplan auf Basis Ihres Webkonzepts."
    },
    {
      icon: PenTool,
      number: "03",
      title: "Design-Übergabe & Umsetzung",
      description: "Nach der Designfreigabe startet die Webentwicklung – sauber, performant und individuell."
    },
    {
      icon: Rocket,
      number: "04",
      title: "Optimierung & Reporting",
      description: "Nach dem Go-Live definieren wir KPIs, messen den Erfolg und optimieren kontinuierlich."
    }
  ];

  return (
    <section className="py-24 bg-medico-mint/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-medico-darkGreen">
              Unser strategischer Ansatz – von der Analyse bis zum Webkonzept und zur Umsetzung
            </h2>
            <p className="text-lg md:text-xl text-medico-turquoise max-w-3xl mx-auto">
              Wir begleiten Sie Schritt für Schritt: von der Analyse Ihrer aktuellen Website über das Webkonzept bis zur erfolgreichen Umsetzung.
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
                      className="text-medico-turquoise"
                    />
                    <div className="absolute -top-2 -right-2 bg-medico-turquoise text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center">
                      {step.number}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-medico-darkGreen text-center">{step.title}</h3>
                <p className="text-medico-darkGreen/80 leading-relaxed text-center">{step.description}</p>
              </div>
              
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-medico-turquoise/30 transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
};

export default StrategieProcess;
