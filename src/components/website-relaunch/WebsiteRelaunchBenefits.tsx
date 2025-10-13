import React from 'react';
import { Search, Map, Wrench } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

const WebsiteRelaunchBenefits = () => {
  const handleGetConcept = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  const benefits = [
    {
      icon: Search,
      title: "Analyse der bestehenden Website",
      description: "Stärken, Schwächen, Potenziale."
    },
    {
      icon: Map,
      title: "Neue Struktur- und Navigationsplanung",
      description: "Für klare Nutzerführung."
    },
    {
      icon: Wrench,
      title: "Design- und Technik-Empfehlungen",
      description: "Für den Relaunch."
    }
  ];

  return (
    <AnimatedSection className="py-20 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ihr kostenloses Relaunch-Konzept enthält …
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={handleGetConcept}
            className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent/90 text-foreground font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Jetzt Konzept sichern →
          </button>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default WebsiteRelaunchBenefits;
