
import React from 'react';

const TeamProfiles = () => {
  const teamMembers = [
    {
      name: "Ulrich Merkel",
      role: "Gründer & CEO",
      image: "/lovable-uploads/Uli.jpg",
      bio: "Gründer von ooliv mit über 15 Jahren Erfahrung in B2B-Marketing und Webentwicklung."
    },
    {
      name: "Lisa",
      role: "Content & First Touch",
      image: "/lovable-uploads/Lisa.jpg", 
      bio: "Verantwortlich für Content-Strategie und erste Kundenkommunikation."
    },
    {
      name: "Paul",
      role: "Design & UX",
      image: "/lovable-uploads/Paul.jpg",
      bio: "Leitet unser UX-Design-Team und entwickelt nutzerorientierte Interfaces."
    },
    {
      name: "Kamil",
      role: "Full-Stack Entwickler",
      image: "/lovable-uploads/Kamil.jpg",
      bio: "Frontend- und Backend-Entwicklung mit über 8 Jahren Erfahrung."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-brand-heading">Unser Team</h2>
          <p className="text-lg max-w-3xl mx-auto text-brand-text">
            Erfahren Sie mehr über die Experten, die hinter ooliv stehen – ein eingespieltes Team mit vielseitiger Expertise.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-w-1 aspect-h-1 relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-brand-heading">{member.name}</h3>
                <p className="text-brand-primary mb-3">{member.role}</p>
                <p className="text-brand-text">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamProfiles;
