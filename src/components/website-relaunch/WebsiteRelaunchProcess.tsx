import React from 'react';
import AnimatedSection from '@/components/AnimatedSection';

const WebsiteRelaunchProcess = () => {
  const handleGetConcept = () => {
    window.dispatchEvent(new CustomEvent('open-lead-form', { detail: { mode: 'prototype' } }));
  };

  const steps = [
    {
      number: "1",
      title: "Website-Check",
      description: "Wir analysieren Ihre aktuelle Seite."
    },
    {
      number: "2",
      title: "Konzept",
      description: "Sie erhalten Struktur-, UX- und Designvorschläge."
    },
    {
      number: "3",
      title: "Umsetzung",
      description: "Sie entscheiden, ob Sie mit ooliv weiterarbeiten."
    }
  ];

  return (
    <AnimatedSection className="py-20 bg-primary/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm text-primary font-semibold mb-3 uppercase tracking-wide">
            So läuft der Prozess ab.
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            In drei Schritten zu Ihrem Relaunch-Konzept.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              <div className="w-20 h-20 rounded-full bg-primary text-white font-bold text-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary to-transparent" />
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={handleGetConcept}
            className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent/90 text-foreground font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Jetzt kostenloses Relaunch-Konzept anfordern →
          </button>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default WebsiteRelaunchProcess;
