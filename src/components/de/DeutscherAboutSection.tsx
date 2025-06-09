
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
      icon: <Grid2X2 className="h-6 w-6" style={{ color: 'white' }} />,
      link: "/strategie"
    },
    {
      title: "Content & SEO",
      description: "Keyword-getrieben, mehrsprachig, KI-gestützt.",
      icon: <Sparkles className="h-6 w-6" style={{ color: 'white' }} />,
      link: "/content-erstellung"
    },
    {
      title: "Design & Development",
      description: "Custom-coded, konversionsstark, skalierbar.",
      icon: <Code2 className="h-6 w-6" style={{ color: 'white' }} />,
      link: "/webentwicklung"
    },
    {
      title: "Kommunikation",
      description: "Sie sprechen immer direkt mit dem CEO – ohne Umwege.",
      icon: <Phone className="h-6 w-6" style={{ color: 'white' }} />,
      link: "/kontakt"
    }
  ];

  return (
    <section className="py-20 bg-white font-satoshi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-medico-darkGreen mb-6 leading-tight">
              Wo Strategie auf Umsetzung trifft – in Mainz.
            </h2>
            <p className="text-xl text-medico-darkGreen max-w-4xl mx-auto leading-relaxed">
              Wir sind eine spezialisierte Digitalagentur aus Mainz. Seit 2008 entwickeln wir Websites, die das Wesentliche Ihres Unternehmens erfassen – strategisch geplant, inhaltsstark und technisch messbar.
            </p>
          </div>
        </Reveal>
        
        <StaggerReveal className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group border border-gray-100">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6 transition-all duration-300" style={{ backgroundColor: '#32b1ab' }}>
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 mb-6 text-base leading-relaxed">{service.description}</p>
              <div>
                <Link 
                  to={service.link}
                  className="underline transition-colors duration-300 font-bold text-lg"
                  style={{ 
                    color: '#32b1ab',
                    fontSize: '18px'
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.color = '#0a1e2c';
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.color = '#32b1ab';
                  }}
                >
                  Mehr erfahren
                </Link>
              </div>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
};

export default DeutscherAboutSection;
