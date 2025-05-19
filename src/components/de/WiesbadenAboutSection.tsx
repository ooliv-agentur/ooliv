
import React from 'react';
import { LayoutGrid, Sparkles, Code, PhoneCall } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';

const WiesbadenAboutSection = () => {
  // Define the 4 pillars of service with Wiesbaden-specific content
  const services = [
    {
      title: "Strategie & UX",
      description: "Strukturiert denken, nutzerzentriert handeln: Wir entwickeln klare Informationsarchitektur und führen Ihre Zielgruppen sicher ans Ziel.",
      icon: <LayoutGrid className="h-6 w-6 text-brand-primary" />
    },
    {
      title: "Content & SEO",
      description: "Texte, die ranken und konvertieren – abgestimmt auf Ihre Zielgruppe, mehrsprachig skalierbar, intelligent unterstützt durch KI.",
      icon: <Sparkles className="h-6 w-6 text-brand-primary" />
    },
    {
      title: "Design & Development",
      description: "Technisch sauber, schnell, skalierbar: Wir realisieren Websites, die performen – vom Onepager bis zum komplexen Portal.",
      icon: <Code className="h-6 w-6 text-brand-primary" />
    },
    {
      title: "Direkte Kommunikation",
      description: "Ohne Zwischenebenen, ohne Reibungsverluste: Sie sprechen mit dem Entscheider – effizient, transparent, auf Augenhöhe.",
      icon: <PhoneCall className="h-6 w-6 text-brand-primary" />
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-brand-heading mb-4 text-center">
              Strategie trifft Substanz – in Wiesbaden.
            </h2>
            <p className="text-xl text-brand-text max-w-3xl mx-auto text-center">
              Als Werbeagentur in Wiesbaden entwickeln wir seit über 15 Jahren digitale Lösungen, die wirken. Unser Anspruch: Websites und Kampagnen, die den Kern Ihres Geschäfts treffen – klar in der Botschaft, präzise in der Technik, messbar im Ergebnis.
            </p>
          </div>
        </Reveal>
        
        <StaggerReveal className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {services.map((service, index) => (
            <div key={index} className="bg-brand-background/50 p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
              <div className="mb-4 p-3 rounded-full bg-brand-primary/10 inline-flex">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-brand-heading">{service.title}</h3>
              <p className="text-brand-text">{service.description}</p>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
};

export default WiesbadenAboutSection;
