
import React from 'react';
import { Grid2X2, Sparkles, Code2, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';

const DeutscherAboutSection = () => {
  const benefits = [
    {
      title: "Mehr qualifizierte Anfragen",
      description: "Ihre Website wird zum stärksten Verkäufer – 24/7 aktiv für neue Kunden.",
      icon: <Grid2X2 className="h-6 w-6" style={{ color: 'black' }} />,
      link: "/referenzen",
      linkText: "Referenzen ansehen"
    },
    {
      title: "Weniger Zeitaufwand",
      description: "Alles aus einer Hand – von der Strategie bis zur Umsetzung ohne Umwege.",
      icon: <Sparkles className="h-6 w-6" style={{ color: 'black' }} />,
      link: "/strategie",
      linkText: "Zur Strategie"
    },
    {
      title: "Echte Partnerschaft",
      description: "Direkter Draht zum CEO, transparente Kommunikation und langfristige Zusammenarbeit.",
      icon: <Code2 className="h-6 w-6" style={{ color: 'black' }} />,
      link: "/ueber-uns",
      linkText: "Mehr über uns"
    },
    {
      title: "Messbare Ergebnisse",
      description: "Keine leeren Versprechen – wir zeigen Ihnen konkrete Zahlen und Erfolge.",
      icon: <Phone className="h-6 w-6" style={{ color: 'black' }} />,
      link: "/kontakt",
      linkText: "Kontakt aufnehmen"
    }
  ];

  return (
    <section className="py-20 bg-white font-satoshi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-medico-darkGreen mb-6 leading-tight">
              Was haben Sie davon, mit ooliv zu arbeiten?
            </h2>
            <p className="text-xl text-accent-primary max-w-4xl mx-auto mb-6" style={{ lineHeight: '1.5' }}>
              Statt nur über Features zu sprechen, zeigen wir Ihnen konkret, welchen Nutzen Sie haben.
            </p>
            <p className="text-xl text-medico-darkGreen max-w-4xl mx-auto mb-8" style={{ lineHeight: '1.5' }}>
              Seit 2008 entwickeln wir in Mainz digitale Lösungen, die messbar funktionieren: Mehr qualifizierte Anfragen, weniger Aufwand bei der Kundengewinnung und eine digitale Präsenz, die Vertrauen schafft.
            </p>
          </div>
        </Reveal>
        
        <StaggerReveal className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group border border-gray-100 cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-accent-primary flex items-center justify-center mb-6 transition-all duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">{benefit.title}</h3>
              <p className="text-gray-600 mb-6 text-base" style={{ lineHeight: '1.5' }}>
                {benefit.description}
              </p>
              <div>
                <Link 
                  to={benefit.link}
                  className="text-accent-primary hover:text-medico-darkGreen underline transition-colors duration-300 font-bold text-lg"
                >
                  {benefit.linkText}
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
