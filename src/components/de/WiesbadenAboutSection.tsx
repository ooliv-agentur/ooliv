
import React from 'react';
import { LayoutGrid, Sparkles, Code, PhoneCall } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const WiesbadenAboutSection = () => {
  const handleLearnMore = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  // Define the 4 pillars of service with Wiesbaden-specific content
  const services = [
    {
      title: "Strategie & UX",
      description: "Klare Struktur, zielführende Nutzerführung – datenbasiert und durchdacht.",
      icon: <LayoutGrid className="h-6 w-6 text-medico-turquoise" />,
      link: "Mehr erfahren"
    },
    {
      title: "Content & SEO",
      description: "Texte, die ranken und konvertieren – mehrsprachig, KI-gestützt, zielgruppenfokussiert.",
      icon: <Sparkles className="h-6 w-6 text-medico-turquoise" />,
      link: "Mehr erfahren"
    },
    {
      title: "Design & Development",
      description: "Schnell, sauber, skalierbar: Websites, die mitwachsen – und überzeugen.",
      icon: <Code className="h-6 w-6 text-medico-turquoise" />,
      link: "Mehr erfahren"
    },
    {
      title: "Kommunikation",
      description: "Sie sprechen immer direkt mit dem CEO – ohne Umwege.",
      icon: <PhoneCall className="h-6 w-6 text-medico-turquoise" />,
      link: "Mehr erfahren"
    }
  ];

  return (
    <section className="py-20 bg-medico-mint/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div>
            <Reveal>
              <h2 className="text-3xl lg:text-4xl font-bold text-medico-darkGreen mb-6">
                Werbeagentur Wiesbaden: Digitalstrategie trifft Umsetzung.
              </h2>
              <p className="text-lg text-medico-darkGreen mb-8 leading-relaxed">
                Ob Webdesign, SEO oder Google Ads – wir entwickeln Lösungen, die auf Ihre Ziele 
                einzahlen. Für Unternehmen aus Wiesbaden und dem Rhein-Main-Gebiet, die mehr 
                wollen als schöne Seiten.
              </p>
            </Reveal>
            
            <Reveal delay={0.2}>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-medico-turquoise/10 mb-8">
                <h3 className="text-xl font-bold text-medico-darkGreen mb-4">
                  Persönlich geführt. Professionell umgesetzt.
                </h3>
                <p className="text-medico-darkGreen leading-relaxed">
                  ooliv ist eine inhabergeführte Agentur nahe Wiesbaden. Sie sprechen direkt mit Uli und Lisa 
                  Schönleber – unserem erfahrenen Team für Content, Design und Technik. Ohne 
                  Umwege. Ohne Blindtext. Mit Fokus auf Ergebnisse.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <Button 
                variant="outline"
                size="lg" 
                className="group bg-white text-medico-darkGreen border-2 border-medico-darkGreen hover:bg-medico-darkGreen hover:text-white font-bold"
                onClick={handleLearnMore}
              >
                Mehr erfahren
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Reveal>
          </div>

          {/* Right side - Service grid */}
          <div>
            <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-2xl shadow-sm border border-medico-turquoise/10 hover:shadow-md transition-all duration-300 hover:border-medico-turquoise/30"
                >
                  <div className="mb-4 p-3 rounded-full bg-medico-turquoise/10 inline-flex">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-medico-darkGreen">{service.title}</h3>
                  <p className="text-medico-darkGreen text-sm mb-4 leading-relaxed">{service.description}</p>
                  <button className="text-medico-turquoise font-medium text-sm hover:underline transition-all">
                    {service.link} →
                  </button>
                </div>
              ))}
            </StaggerReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WiesbadenAboutSection;
