
import React from 'react';

const TeamTeaserDE = () => {
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
          <h2 className="text-3xl font-bold text-brand-heading mb-4">Das Team hinter den Ergebnissen</h2>
          <p className="text-lg text-brand-text max-w-3xl mx-auto">
            Jedes Projekt wird direkt vom Geschäftsführer geführt. Im Hintergrund sorgt unser eingespieltes Team für die Umsetzung – mit Präzision in Content, Design und Development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-3xl mx-auto">
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
      </div>
    </section>
  );
};

export default TeamTeaserDE;
