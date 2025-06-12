
import React from 'react';
import { LayoutGrid, Sparkles, Code, PhoneCall } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';

const WiesbadenAboutSection = () => {
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  // Define the 4 pillars of service with Wiesbaden-specific content
  const services = [
    {
      title: "Strategie & UX",
      description: "Klare Struktur, datenbasierte Entscheidungen, B2B-ready.",
      icon: <LayoutGrid className="h-6 w-6 text-medico-turquoise" />,
      link: "#"
    },
    {
      title: "Content & SEO",
      description: "Keyword-getrieben, mehrsprachig, KI-gestützt.",
      icon: <Sparkles className="h-6 w-6 text-medico-turquoise" />,
      link: "#"
    },
    {
      title: "Design & Development",
      description: "Custom-coded, konversionsstark, skalierbar.",
      icon: <Code className="h-6 w-6 text-medico-turquoise" />,
      link: "#"
    },
    {
      title: "Kommunikation",
      description: "Sie sprechen immer direkt mit dem CEO — ohne Umwege.",
      icon: <PhoneCall className="h-6 w-6 text-medico-turquoise" />,
      link: "#"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main heading and intro */}
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-medico-darkGreen" style={{ lineHeight: '1.3' }}>
              Wo Strategie auf Umsetzung trifft — in Wiesbaden.
            </h2>
            <p className="text-lg md:text-xl text-medico-turquoise max-w-3xl mx-auto mb-12" style={{ lineHeight: '1.6' }}>
              Wir sind Ihre spezialisierte Digitalagentur, die Websites strategisch plant und technisch perfekt umsetzt.
            </p>
          </div>
        </Reveal>

        {/* Highlighted intro text box */}
        <Reveal delay={0.2}>
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-medico-mint/10 rounded-2xl p-8 md:p-12 border border-medico-turquoise/20">
              <p className="text-lg md:text-xl text-medico-darkGreen leading-relaxed text-center mb-8">
                Seit über 16 Jahren entwickeln wir Websites für B2B-Unternehmen in Wiesbaden und der Region. Mit einer klaren Strategie, datenbasierten Entscheidungen und einem strukturierten Prozess schaffen wir Websites, die Ihr Unternehmen digital voranbringen.
              </p>
              <div className="text-center">
                <Button 
                  size="lg" 
                  className="group font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{ 
                    backgroundColor: '#FFD700', 
                    color: '#003347',
                    border: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#FFC700';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#FFD700';
                  }}
                  onClick={handleStartProject}
                >
                  Mehr erfahren
                  <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
        
        {/* Service cards grid */}
        <StaggerReveal className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center group">
              <div className="mb-6">
                <div className="w-16 h-16 bg-medico-turquoise/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-medico-turquoise/20 transition-colors duration-300">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-medico-darkGreen">{service.title}</h3>
              <p className="text-medico-darkGreen/80 leading-relaxed mb-4">{service.description}</p>
              <a 
                href={service.link}
                className="text-medico-turquoise hover:text-medico-turquoise/80 font-medium transition-colors duration-200 inline-flex items-center group-hover:underline"
              >
                Mehr erfahren
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
};

export default WiesbadenAboutSection;
