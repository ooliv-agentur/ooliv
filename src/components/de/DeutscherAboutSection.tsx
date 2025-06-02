
import React from 'react';
import { LayoutGrid, Sparkles, Code, PhoneCall } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';

const DeutscherAboutSection = () => {
  // Define the 4 pillars of service with medicosearch styling
  const services = [
    {
      title: "Strategie & UX",
      description: "Klare Struktur, datenbasierte Entscheidungen, B2B-ready.",
      icon: <LayoutGrid className="h-6 w-6 text-white" />
    },
    {
      title: "Content & SEO",
      description: "Keyword-getrieben, mehrsprachig, KI-gestützt.",
      icon: <Sparkles className="h-6 w-6 text-white" />
    },
    {
      title: "Design & Development",
      description: "Custom-coded, konversionsstark, skalierbar.",
      icon: <Code className="h-6 w-6 text-white" />
    },
    {
      title: "Direkte Kommunikation",
      description: "Sie sprechen immer direkt mit dem CEO – ohne Umwege.",
      icon: <PhoneCall className="h-6 w-6 text-white" />
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-medico-navy mb-6">
              Wo Strategie auf Umsetzung trifft –
              <span className="text-medico-mint"> in Mainz.</span>
            </h2>
            <p className="text-xl text-medico-navyLight max-w-4xl mx-auto leading-relaxed">
              Wir sind eine spezialisierte Digitalagentur aus Mainz. Seit 2008 entwickeln wir Websites, die das Wesentliche Ihres Unternehmens erfassen – strategisch geplant, inhaltsstark und technisch messbar.
            </p>
          </div>
        </Reveal>
        
        <StaggerReveal className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="bg-white p-8 rounded-2xl border-2 border-medico-mintLight hover:border-medico-mint transition-all duration-300 hover:shadow-medico">
                <div className="mb-6 w-14 h-14 rounded-full bg-medico-mint group-hover:bg-medico-mintDark transition-colors duration-300 inline-flex items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-medico-navy group-hover:text-medico-mint transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-medico-navyLight leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
};

export default DeutscherAboutSection;
