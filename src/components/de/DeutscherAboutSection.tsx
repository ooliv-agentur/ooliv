
import React from 'react';
import { LayoutGrid, Sparkles, Code, PhoneCall } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';

const DeutscherAboutSection = () => {
  // Define the 4 pillars of service
  const services = [
    {
      title: "Strategie & UX",
      description: "Klare Struktur, datenbasierte Entscheidungen, B2B-ready.",
      icon: <LayoutGrid className="h-6 w-6 text-brand-primary" />
    },
    {
      title: "Content & SEO",
      description: "Keyword-getrieben, mehrsprachig, KI-gestützt.",
      icon: <Sparkles className="h-6 w-6 text-brand-primary" />
    },
    {
      title: "Design & Development",
      description: "Custom-coded, konversionsstark, skalierbar.",
      icon: <Code className="h-6 w-6 text-brand-primary" />
    },
    {
      title: "Direkte Kommunikation",
      description: "Sie sprechen immer direkt mit dem CEO – ohne Umwege.",
      icon: <PhoneCall className="h-6 w-6 text-brand-primary" />
    }
  ];

  return (
    <AnimatedSection className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-12 text-center" delay={0.1}>
          <h2 className="text-3xl font-bold text-brand-heading mb-4 text-center">
            Wo Strategie auf Umsetzung trifft – in Mainz.
          </h2>
          <p className="text-xl text-brand-text max-w-3xl mx-auto text-center">
            Wir sind eine spezialisierte Digitalagentur aus Mainz. Seit 2008 entwickeln wir Websites, die das Wesentliche Ihres Unternehmens erfassen – strategisch geplant, inhaltsstark und technisch messbar.
          </p>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={0.1 + index * 0.1} className="bg-brand-background/50 p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
              <div className="mb-4 p-3 rounded-full bg-brand-primary/10 inline-flex">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-brand-heading">{service.title}</h3>
              <p className="text-brand-text">{service.description}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default DeutscherAboutSection;
