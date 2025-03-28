
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const TeamTeaserDE = () => {
  const teamMembers = [
    {
      name: "Uli Schönleber",
      position: "CEO",
      image: "/lovable-uploads/65264916-5b20-4c20-9f95-88a5bc7f2b53.png"
    },
    {
      name: "Lisa Schönleber",
      position: "Content",
      image: "/lovable-uploads/343738d2-5fa7-4ca5-a4db-58f6726d3609.png"
    }
  ];

  return (
    <section className="py-20 bg-brand-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-heading mb-4">Das Team hinter den Ergebnissen</h2>
          <p className="text-xl text-brand-text max-w-3xl mx-auto">
            Jedes Projekt wird direkt vom CEO geführt. Im Hintergrund sorgt unser eingespieltes Team für die Umsetzung – mit Präzision in Content, Design und Development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all hover:shadow-md"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-gray-600">{member.position}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" className="group" asChild>
            <Link to="/de/ueber-ooliv">
              Team vollständig ansehen
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeamTeaserDE;
