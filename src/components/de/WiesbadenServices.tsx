
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, TrendingUp, Zap, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const WiesbadenServices = () => {
  const handleLearnMore = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  const services = [
    {
      icon: Target,
      title: "Digitale Strategien",
      description: "Maßgeschneiderte Online-Konzepte für Wiesbadener Unternehmen, die messbare Resultate liefern.",
      link: "/strategie"
    },
    {
      icon: TrendingUp,
      title: "Website-Entwicklung", 
      description: "Professionelle Websites, die Ihre Zielgruppe überzeugen und Geschäftserfolg generieren.",
      link: "/webentwicklung"
    },
    {
      icon: Zap,
      title: "Online-Marketing",
      description: "Gezielte Kampagnen für mehr Sichtbarkeit und Kundengewinnung im Rhein-Main-Gebiet.",
      link: "/seo-optimierung"
    },
    {
      icon: Users,
      title: "Markenentwicklung",
      description: "Starke Markenidentitäten, die Vertrauen schaffen und nachhaltig im Gedächtnis bleiben.",
      link: "/ueber-uns"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-medico-darkGreen">
            Digitale Exzellenz für Wiesbaden
          </h2>
          <p className="text-xl md:text-2xl text-medico-turquoise mb-8 max-w-4xl mx-auto">
            Als spezialisierte Werbeagentur schaffen wir digitale Lösungen, die Ihr Unternehmen voranbringen
          </p>
          <p className="text-lg text-medico-darkGreen/80 mb-8 max-w-3xl mx-auto">
            Von der strategischen Planung bis zur technischen Umsetzung – wir entwickeln digitale Präsenzen, 
            die echte Geschäftsergebnisse erzielen und Ihre Marktposition in Wiesbaden stärken.
          </p>
          <Button 
            size="lg" 
            className="group font-bold"
            style={{ 
              backgroundColor: '#FFD700', 
              color: '#003347',
              border: 'none'
            }}
            onClick={handleLearnMore}
          >
            Mehr erfahren
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center group">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-medico-mint/30 transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-medico-darkGreen" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-medico-darkGreen">
                {service.title}
              </h3>
              <p className="text-medico-darkGreen/80 mb-6 leading-relaxed">
                {service.description}
              </p>
              <Link 
                to={service.link}
                className="text-medico-turquoise hover:text-medico-turquoise/80 font-semibold inline-flex items-center group/link"
              >
                Mehr erfahren
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WiesbadenServices;
