
import React from 'react';
import { Check } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';

const WiesbadenSolutionSection = () => {
  const solutions = [
    "Responsive Webdesigns für alle Geräte",
    "Logo- und Namensfindung für neue Marken",
    "Online-Marketing-Konzepte mit messbaren Ergebnissen",
    "Employer Branding für starke Arbeitgebermarken",
    "Full-Service-Ansatz für ganzheitliche Betreuung",
    "Local SEO für mehr Sichtbarkeit in Wiesbaden",
    "Technisch optimierte Websites für beste Performance",
    "Markenstrategien für langfristigen Erfolg"
  ];

  const process = [
    {
      title: "Analyse & Strategie",
      description: "Wir analysieren Ihre Ziele, Zielgruppen und Wettbewerber, um eine maßgeschneiderte Strategie zu entwickeln."
    },
    {
      title: "Konzeption & Design",
      description: "Wir erstellen Wireframes und Designs, die Ihre Marke optimal präsentieren und Ihre Zielgruppe ansprechen."
    },
    {
      title: "Umsetzung & Programmierung",
      description: "Unsere Entwickler setzen Ihr Projekt mit modernsten Technologien um und achten auf Performance und Sicherheit."
    },
    {
      title: "Launch & Optimierung",
      description: "Nach dem Go-Live begleiten wir Sie weiter, optimieren kontinuierlich und sorgen für nachhaltige Ergebnisse."
    }
  ];

  return (
    <section className="py-20 bg-brand-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-brand-heading">
              Wir gestalten Websites und Markenauftritte für Wiesbaden —
            </h2>
            <h3 className="text-xl font-normal mb-6 text-brand-heading">
              Mit Strategie, Expertise & innovativen Technologien
            </h3>
            <div className="text-lg text-brand-text max-w-3xl mx-auto">
              Das Internet ist ein unverzichtbares Werkzeug für moderne Unternehmen in Wiesbaden, um ihre Zielgruppe zu erreichen und sich im Wettbewerb zu behaupten. Eine starke Website bildet die Grundlage für Ihren Erfolg – und genau hier kommen wir ins Spiel.
            </div>
          </div>
        </Reveal>
        
        <StaggerReveal className="grid md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto mb-12">
          {solutions.map((solution, index) => (
            <div key={index} className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <p>{solution}</p>
            </div>
          ))}
        </StaggerReveal>
        
        <Reveal delay={0.1}>
          <div className="max-w-4xl mx-auto mt-16">
            <h3 className="text-2xl font-bold mb-8 text-center text-brand-heading">
              So arbeiten wir – Schritt für Schritt zu Ihrem erfolgreichen Markenauftritt in Wiesbaden
            </h3>
            <StaggerReveal className="space-y-8" stagger={0.1}>
              {process.map((step, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-xl font-bold mb-2 text-brand-heading">
                    {index + 1}. {step.title}
                  </h4>
                  <p className="text-brand-text">{step.description}</p>
                </div>
              ))}
            </StaggerReveal>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default WiesbadenSolutionSection;
