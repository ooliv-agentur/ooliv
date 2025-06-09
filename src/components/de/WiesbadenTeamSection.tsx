
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
      position: "Content",
      image: "/lovable-uploads/Lisa.jpg"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-heading mb-4">Persönlich geführt. Professionell umgesetzt.</h2>
          <p className="text-lg text-brand-text max-w-3xl mx-auto">
            ooliv ist eine inhabergeführte Agentur nahe Wiesbaden. Sie sprechen direkt mit Uli und Lisa Schönleber – unterstützt von einem erfahrenen Team für Content, Design und Technik. Ohne Umwege. Ohne Bürokratie. Mit Fokus auf Ergebnisse.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-3xl mx-auto mb-12">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center group"
            >
              <div className="relative mb-4 w-[200px] h-[200px] rounded-full overflow-hidden bg-brand-background/50 border-2 border-white shadow-sm group-hover:shadow-md transition-all duration-300">
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
              <h3 className="text-xl font-bold mb-1 text-brand-heading">{member.name}</h3>
              <p className="text-brand-text">{member.position}</p>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center">
          <Button variant="outline" size="lg" className="group" asChild>
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
