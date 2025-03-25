
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TeamMember {
  name: string;
  role: string;
  image?: string;
  initials: string;
}

const TeamSection = () => {
  const teamMembers: TeamMember[] = [
    { name: "Uli Schönleber", role: "CEO · Consulting, Concept, AI", initials: "US" },
    { name: "Lisa Schönleber", role: "Content", initials: "LS" },
    { name: "Dorinel Nedelcu", role: "Creation", initials: "DN" },
    { name: "Parveen Thakur", role: "Web Development", initials: "PT" },
    { name: "Kamil Lisiewicz", role: "Web Development", initials: "KL" },
    { name: "Neeraj Kumar", role: "App Development", initials: "NK" },
    { name: "Paul Becker", role: "SEO Optimization", initials: "PB" },
    { name: "Giovanni Costa", role: "Corporate Design", initials: "GC" },
    { name: "Beatriz Morales", role: "Illustrator", initials: "BM" },
    { name: "Sanja Micro", role: "Print Design", initials: "SM" }
  ];

  return (
    <section className="section-alt py-24">
      <div className="section-container">
        <h2 className="section-title">The ooliv Team</h2>
        <p className="section-subtitle max-w-3xl mx-auto">
          Gute Leute sind schwer zu finden – wir haben gleich ein ganzes Team davon.<br />
          Unsere Experten vereinen Strategie, Kreativität und Technologie, um Projekte mit Herzblut umzusetzen.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <Avatar className="h-32 w-32 mb-4 border-2 border-brand-primary/20">
                <AvatarImage src={member.image} alt={member.name} />
                <AvatarFallback className="bg-brand-primary/10 text-brand-primary text-2xl">
                  {member.initials}
                </AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-sm text-brand-text/80 italic">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
