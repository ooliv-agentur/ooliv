
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
      title: "Analyse & Strategie",
      description: "Wir führen Workshops mit Ihrem Team durch, analysieren den Wettbewerb und Ihre Marktpositionierung – gemeinsam schaffen wir strategische Klarheit für Ihre digitale Transformation."
    },
    {
      icon: Lightbulb,
      number: "02", 
      title: "UX & Nutzerführung",
      description: "Customer Journey Design, Informationsarchitektur und Conversion-Optimierung – vom Nutzerverhalten bis zur strategischen Umsetzung für messbare Geschäftsergebnisse."
    },
    {
      icon: PenTool,
      number: "03",
      title: "KI-Integration & Automation",
      description: "KI-Anwendungsfälle identifizieren, Prozesse optimieren und intelligente Content-Workflows aufbauen – strategischer KI-Einsatz für Effizienzgewinne und Skalierung."
    },
    {
      icon: Rocket,
      number: "04",
      title: "Umsetzung & Führung",
      description: "Ich führe Ihr Team und koordiniere alle Beteiligten, wir definieren klare Anforderungen und stellen Qualität sicher – von der Strategie zur messbaren Umsetzung."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Analyse → UX-Optimierung → KI-Integration → Umsetzung
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Der bewährte 4-Phasen-Prozess für digitale Transformation: Von der strategischen Grundlage über UX & KI-Integration bis zur erfolgreichen Umsetzung mit messbaren Geschäftsergebnissen.
            </p>
          </div>
        </Reveal>
        
        <StaggerReveal className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
