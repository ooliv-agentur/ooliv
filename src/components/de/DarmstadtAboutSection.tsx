
import React from 'react';
import { Grid2X2, Sparkles, Code2, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';

const DarmstadtAboutSection = () => {
  const services = [
    {
      title: "Webdesign",
      description: "Professionelle Websites für Tech-Unternehmen und wissenschaftsnahe Branchen in Darmstadt.",
      icon: <Grid2X2 className="h-6 w-6" style={{ color: 'black' }} />,
      link: "/webdesign"
    },
    {
      title: "Entwicklung",
      description: "Technisch fundierte Lösungen für B2B-Unternehmen im TU-Umfeld.",
      icon: <Sparkles className="h-6 w-6" style={{ color: 'black' }} />,
      link: "/webentwicklung"
    },
    {
      title: "SEO",
      description: "Bessere Sichtbarkeit in Darmstadt und dem Rhein-Main-Gebiet für qualifizierte Anfragen.",
      icon: <Code2 className="h-6 w-6" style={{ color: 'black' }} />,
      link: "/seo-optimierung"
    },
    {
      title: "Strategie",
      description: "Datenbasierte B2B-Strategien, die Ihre Position in wissenschaftsnahen Märkten stärken.",
      icon: <Phone className="h-6 w-6" style={{ color: 'black' }} />,
      link: "/strategie"
    }
  ];

  return (
    <section className="py-20 bg-white font-satoshi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-medico-darkGreen mb-6 leading-tight">
              ooliv in Darmstadt – für messbare Erfolge
            </h2>
            <p className="text-xl text-accent-primary max-w-4xl mx-auto mb-6" style={{ lineHeight: '1.5' }}>
              Digitale Lösungen für die Wissenschaftsstadt – technisch fundiert, strategisch präzise
            </p>
            <p className="text-xl text-medico-darkGreen max-w-4xl mx-auto mb-8" style={{ lineHeight: '1.5' }}>
              Darmstadt ist Europas Tech-Hub mit TU, Forschungsinstituten und Innovation. Wir sprechen die Sprache technisch anspruchsvoller Unternehmen: wissenschaftsnahe B2B-Firmen, Hightech-Startups und Engineering-Dienstleister erhalten von uns Websites, die technische Kompetenz digital sichtbar machen.
            </p>
            
            {/* Single CTA Button */}
            <div className="flex justify-center">
              <Button 
                variant="primary"
                size="lg" 
                className="group"
                asChild
              >
                <Link to="/strategie">
                  Mehr erfahren
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </Reveal>
        
        <StaggerReveal className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-accent-primary flex items-center justify-center mb-6 transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 mb-6 text-base" style={{ lineHeight: '1.5' }}>
                {service.description}
              </p>
              <div>
                <Link 
                  to={service.link}
                  className="text-accent-primary hover:text-medico-darkGreen underline transition-colors duration-300 font-bold text-lg"
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

export default DarmstadtAboutSection;
