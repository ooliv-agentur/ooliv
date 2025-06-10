
import React, { useState } from 'react';
import { Grid2X2, Sparkles, Code2, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';

const DeutscherAboutSection = () => {
  const [isDispatching, setIsDispatching] = useState(false);
  
  const handleOpenLeadForm = () => {
    if (isDispatching) {
      console.log('🚫 DeutscherAboutSection: Already dispatching, ignoring click');
      return;
    }
    
    setIsDispatching(true);
    console.log('🚀 DeutscherAboutSection: "Projekt starten" button clicked');
    
    setTimeout(() => {
      const event = new CustomEvent('open-lead-form', { detail: { source: 'DeutscherAboutSection' } });
      window.dispatchEvent(event);
      console.log('📡 DeutscherAboutSection: open-lead-form event dispatched');
      
      setTimeout(() => {
        setIsDispatching(false);
      }, 1000);
    }, 0);
  };

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
              Ihre Werbeagentur Mainz: Strategie, Content, Design.
            </h2>
            <p className="text-xl text-medico-turquoise max-w-4xl mx-auto mb-6" style={{ lineHeight: '1.5' }}>
              Wo Strategie auf Umsetzung trifft – damit Ihre Website messbar mehr Leads generiert und Ihre Marke stärkt.
            </p>
            <p className="text-lg text-medico-darkGreen max-w-4xl mx-auto mb-8" style={{ lineHeight: '1.6' }}>
              Seit 2008 entwickeln wir Websites für B2B-Unternehmen, die das Wesentliche Ihrer Marke auf den Punkt bringen: strategisch geplant, inhaltsstark und technisch messbar. Mit dem richtigen Mix aus Analyse, Content und Design sorgen wir dafür, dass Ihre Website wirklich für Sie arbeitet.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="group font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
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
                onClick={handleOpenLeadForm}
              >
                Projekt starten
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-medico-white text-medico-darkGreen hover:bg-gray-50 border-2 border-medico-darkGreen hover:border-medico-turquoise font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto" 
                asChild
              >
                <Link to="/strategie">
                  Strategie entdecken
                </Link>
              </Button>
            </div>
          </div>
        </Reveal>
        
        <StaggerReveal className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group border border-gray-100">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6 transition-all duration-300" style={{ backgroundColor: '#32b1ab' }}>
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 mb-6 text-base" style={{ lineHeight: '1.5' }}>
                {service.description}
              </p>
              <div>
                <Link 
                  to={service.link}
                  className="text-medico-turquoise hover:text-medico-darkGreen underline transition-colors duration-300 font-bold text-lg"
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
