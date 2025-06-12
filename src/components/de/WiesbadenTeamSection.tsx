import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const WiesbadenTeamSection = () => {
  const teamMembers = [
    {
      name: "Uli Schönleber",
      position: "Geschäftsführer",
      image: "/lovable-uploads/Uli.jpg"
    },
    {
      name: "Lisa Schönleber",
      position: "Geschäftsführerin",
      image: "/lovable-uploads/Lisa.jpg"
    }
  ];

  return (
    <section className="py-20 bg-medico-mint font-satoshi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-medico-darkGreen mb-6">Ihre Ansprechpartner bei ooliv</h2>
          <p className="text-xl text-medico-turquoise max-w-4xl mx-auto mb-6" style={{ lineHeight: '1.6' }}>
            Direkter Kontakt mit der Geschäftsführung – vom ersten Gespräch bis zum GoLive
          </p>
          <p className="text-xl text-medico-darkGreen max-w-4xl mx-auto mb-8" style={{ lineHeight: '1.6' }}>
            Wir betreuen Ihr Projekt persönlich, effizient und verbindlich. Bei ooliv haben Sie feste Ansprechpartner mit Entscheidungskompetenz – keine Umwege, keine Weiterleitungen. Sie wissen jederzeit, wo Ihr Projekt steht.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-3xl mx-auto mb-16">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center group"
            >
              <div className="relative mb-8 w-[200px] h-[200px] rounded-full overflow-hidden bg-medico-white border-4 border-medico-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:border-medico-turquoise">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-medico-darkGreen">{member.name}</h3>
              <p className="text-medico-darkGreen/80 text-lg">{member.position}</p>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center">
          <Button variant="primary" size="lg" className="group" asChild>
            <Link to="/ueber-uns">
              Das gesamte Team kennenlernen
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WiesbadenTeamSection;
