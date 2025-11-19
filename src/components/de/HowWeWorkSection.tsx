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
      description: "Wir analysieren Ihre aktuelle Situation, identifizieren Potenziale und entwickeln gemeinsam mit Ihnen eine klare digitale Strategie – mit priorisierten Quick Wins und langfristiger Roadmap.",
      deliverables: [
        "Strategic Discovery Workshop (2-3 Stunden)",
        "Competitive Analysis & Benchmarking",
        "Digitale Roadmap mit priorisierten Maßnahmen",
        "KPI-Framework für messbare Erfolge"
      ],
      link: "/strategie"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Website & UX Transformation",
      description: "Von der Konzeption bis zur Umsetzung – wir transformieren Ihre Website in ein strategisches Business-Tool, das Kunden überzeugt und konvertiert. Immer mit Fokus auf Ihre Geschäftsziele.",
      deliverables: [
        "UX Strategy & Wireframes",
        "Modernes Design-System (Webflow / WordPress)",
        "Responsive Development & Performance-Optimierung",
        "Content-Strategie & SEO-Foundation"
      ],
      link: "/webdesign"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Laufende Begleitung",
      description: "Ihre digitale Transformation hört nicht beim Go-Live auf. Wir bleiben Ihr strategischer Partner – für kontinuierliche Optimierung, neue Features oder einfach als Sparringspartner bei digitalen Entscheidungen.",
      deliverables: [
        "Monatliches Retainer-Modell (flexibel skalierbar)",
        "Kontinuierliche Performance-Optimierung",
        "Strategic Advisory & Sparringspartner",
        "Priority-Support für technische Fragen"
      ],
      link: "/kontakt"
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

              {approach.link && (
                <div className="mt-6">
                  <a 
                    href={approach.link}
                    className="inline-flex items-center text-primary hover:underline font-medium text-sm"
                  >
                    Mehr erfahren →
                  </a>
                </div>
              )}
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
