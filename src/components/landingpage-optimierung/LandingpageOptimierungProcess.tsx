import React from 'react';
import AnimatedSection from '@/components/AnimatedSection';

const LandingpageOptimierungProcess = () => {
  const handleGetConcept = () => {
    window.dispatchEvent(new CustomEvent('open-lead-form', { detail: { mode: 'prototype' } }));
  };

  const steps = [
    {
      number: "01",
      title: "Analyse",
      description: "Wir prüfen Ihre aktuelle Landingpage."
    },
    {
      number: "02",
      title: "Konzept",
      description: "Sie erhalten klare Handlungsempfehlungen."
    },
    {
      number: "03",
      title: "Umsetzung",
      description: "Sie entscheiden, ob Sie mit uns weiterarbeiten."
    }
  ];

  return (
    <AnimatedSection className="py-20 bg-primary/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm text-primary font-semibold mb-3 uppercase tracking-wide">
            So läuft die Optimierung ab.
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            In drei Schritten zur besseren Conversion.
          </h2>
        </div>

        <div className="space-y-8 mb-12">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">{step.number}</span>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={handleGetConcept}
            className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent/90 text-foreground font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Kostenloses Conversion-Konzept anfordern →
          </button>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default LandingpageOptimierungProcess;
