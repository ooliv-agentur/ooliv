import React from 'react';
import { Lightbulb, Compass, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';

const HowWeWorkSection = () => {
  const approaches = [
    {
      icon: <Compass className="w-8 h-8" />,
      title: "Strategische Beratung",
      description: "Wir analysieren Ihre aktuelle Situation, identifizieren Potenziale und entwickeln eine maßgeschneiderte Digital-Strategie.",
      deliverables: [
        "Strategische Analyse & Potenzial-Assessment",
        "Priorisierte Maßnahmen-Roadmap",
        "Konkrete Handlungsempfehlungen"
      ]
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Website & UX Transformation",
      description: "Von der Konzeption bis zur Umsetzung – wir transformieren Ihre Website zu einem effektiven Verkaufsinstrument.",
      deliverables: [
        "UX/UI Design & Konzeption",
        "Technische Umsetzung",
        "Conversion-Optimierung",
        "Performance & SEO"
      ]
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Laufende Begleitung",
      description: "Kontinuierliche Optimierung, KI-Integration und strategische Weiterentwicklung Ihrer digitalen Präsenz.",
      deliverables: [
        "Monatliche Optimierung & Testing",
        "KI-Automatisierung & Integration",
        "Performance-Monitoring",
        "Strategische Weiterentwicklung"
      ]
    }
  ];

  const handleOpenLeadForm = () => {
    window.dispatchEvent(new CustomEvent('openLeadForm', { 
      detail: { source: 'how_we_work_section' } 
    }));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              So können wir zusammenarbeiten
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Je nach Bedarf und Situation gibt es verschiedene Möglichkeiten der Zusammenarbeit. 
              Im kostenlosen Erstgespräch finden wir heraus, was am besten zu Ihnen passt.
            </p>
          </div>
        </Reveal>

        <StaggerReveal className="grid md:grid-cols-3 gap-8 mb-12">
          {approaches.map((approach, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 border border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                {approach.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {approach.title}
              </h3>
              
              <p className="text-muted-foreground mb-6">
                {approach.description}
              </p>

              <div className="space-y-3">
                <div className="font-semibold text-foreground text-sm mb-2">Mögliche Leistungen:</div>
                {approach.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </StaggerReveal>

        <Reveal>
          <div className="text-center">
            <Button 
              size="lg" 
              onClick={handleOpenLeadForm}
              className="text-lg px-8"
            >
              Kostenloses Erstgespräch vereinbaren
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Wir besprechen Ihre Situation und finden gemeinsam die beste Lösung – unverbindlich und individuell.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
