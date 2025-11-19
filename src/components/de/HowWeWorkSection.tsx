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
      description: "Klarheit über Ihre digitale Zukunft – im Workshop oder als laufender Sparringspartner.",
      link: "/strategie"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Website & UX Transformation",
      description: "Wir entwickeln Websites, die Besucher zu Kunden machen – strategisch durchdacht und messbar erfolgreich.",
      link: "/webdesign"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Laufende Begleitung",
      description: "Wir bleiben Ihr Partner für Optimierung, neue Features und strategische Fragen nach dem Go-Live.",
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
              
              <p className="text-muted-foreground">
                {approach.description}
              </p>

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
