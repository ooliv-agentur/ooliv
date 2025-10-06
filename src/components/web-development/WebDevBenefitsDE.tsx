
import React from 'react';
import { Settings, Shield, Edit3, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: Settings,
    title: "Sie bekommen: Individuelle Entwicklung",
    description: "Keine Templates, keine Massenware. Jede Seite wird auf Ihre Ziele zugeschnitten – mit Elementor, WPBakery oder Custom Code. Flexibel, aber nie 08/15."
  },
  {
    icon: Shield,
    title: "Sie bekommen: Performance & Sicherheit",
    description: "Blitzschnelle Ladezeiten, stabile Performance, skalierbare Architektur. Ihre Website wächst mit Ihrem Business – ohne technische Bremsen."
  },
  {
    icon: Edit3,
    title: "Sie bekommen: Volle Kontrolle",
    description: "Sie können Inhalte selbst pflegen – ob mit Elementor, Gutenberg oder Custom Backend. Wir machen Sie unabhängig, nicht abhängig."
  },
  {
    icon: TrendingUp,
    title: "Sie bekommen: Zukunftssicherheit",
    description: "Mehrsprachigkeit, API-Integrationen, Erweiterbarkeit – Ihre Website ist bereit für alles, was kommt. Durch skalierbare Architektur."
  }
];

const WebDevBenefitsDE = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-heading mb-4">
            Das bekommen Sie von uns (ohne Techniker-Sprech)
          </h2>
          <p className="text-xl text-brand-text max-w-3xl mx-auto">
            Keine leeren Buzzwords. Hier ist, was Sie wirklich bekommen.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-4 text-brand-primary">
                <benefit.icon className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-brand-heading">{benefit.title}</h3>
              <p className="text-brand-text">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebDevBenefitsDE;
