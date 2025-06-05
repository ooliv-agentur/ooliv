
import React from 'react';
import { Grid2X2, Sparkles, Code2, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';

const DeutscherAboutSection = () => {
  const services = [
    {
      title: "Strategie & UX",
      description: "Klare Struktur, datenbasierte Entscheidungen, B2B-ready.",
      icon: <Grid2X2 className="h-10 w-10 text-medico-turquoise" />,
      link: "/strategie"
    },
    {
      title: "Content & SEO",
      description: "Keyword-getrieben, mehrsprachig, KI-gestützt.",
      icon: <Sparkles className="h-10 w-10 text-medico-turquoise" />,
      link: "/content-erstellung"
    },
    {
      title: "Design & Development",
      description: "Custom-coded, konversionsstark, skalierbar.",
      icon: <Code2 className="h-10 w-10 text-medico-turquoise" />,
      link: "/webentwicklung"
    },
    {
      title: "Kommunikation",
      description: "Sie sprechen immer direkt mit dem CEO – ohne Umwege.",
      icon: <Phone className="h-10 w-10 text-medico-turquoise" />,
      link: "/kontakt"
    }
  ];

  return (
    <section className="py-20 bg-medico-mint">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-heading mb-6">
              Kleine Agentur, große Wirkung.
            </h2>
          </div>
        </Reveal>
        
        <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-16 h-16 bg-medico-mint rounded-full flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 mb-6 text-base leading-relaxed">
                {service.description}
              </p>
              <div>
                <Button 
                  variant="link" 
                  className="text-medico-turquoise hover:text-green-700 p-0 h-auto font-medium" 
                  asChild
                >
                  <Link to={service.link}>
                    Mehr erfahren
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
};

export default DeutscherAboutSection;
