import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  initials: string;
}

const TeamSection = () => {
  const { language } = useLanguage();
  
  const teamMembers: TeamMember[] = [
    { 
      name: "Uli Schönleber (US)", 
      role: "CEO · Strategie, Konzept, UX, AI-Prozesse",
      image: "/lovable-uploads/Uli.webp",
      initials: "US" 
    },
    { 
      name: "Lisa Schönleber (LS)", 
      role: "Content Lead · Text, Struktur, Messaging",
      image: "/lovable-uploads/Lisa.jpg",
      initials: "LS" 
    },
    { 
      name: "Dorinel Nedelcu (DN)", 
      role: "Kreation · UI-Design, Designsysteme, Visuals",
      image: "/lovable-uploads/Dorinel.jpg",
      initials: "DN" 
    },
    { 
      name: "Parveen Thakur (PT)", 
      role: "Lead Developer · WordPress, Headless, Performance",
      image: "/lovable-uploads/Parveen.jpg",
      initials: "PT" 
    },
    { 
      name: "Kamil Lisiewicz (KL)", 
      role: "Webentwicklung · Fullstack",
      image: "/lovable-uploads/Kamil.jpg",
      initials: "KL" 
    },
    { 
      name: "Neeraj Kumar (NK)", 
      role: "App-Entwicklung · Mobile Development",
      image: "/lovable-uploads/Neeraj.jpg",
      initials: "NK" 
    },
    { 
      name: "Paul Becker (PB)", 
      role: "SEO Lead · Onpage, Technical SEO, Growth",
      image: "/lovable-uploads/Paul.jpg",
      initials: "PB" 
    },
    { 
      name: "Giovanni Costa (GC)", 
      role: "Corporate Design · Branding & Visual Identity",
      image: "/lovable-uploads/Giovanni.jpg",
      initials: "GC" 
    },
    { 
      name: "Beatriz Morales (BM)", 
      role: "Illustration · Visual Modules & Icons",
      image: "/lovable-uploads/Beatriz.jpg",
      initials: "BM" 
    },
    { 
      name: "Sanja Micro (SM)", 
      role: "Print Design · Offline-Material, Corporate Layouts",
      image: "/lovable-uploads/Sanja.jpg",
      initials: "SM" 
    }
  ];

  // Show all team members instead of limiting to 6
  const displayTeamMembers = teamMembers;

  return (
    <section className="py-20 bg-white" id="team">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-text-primary mb-4">
            Kleines Team. Volle Kompetenz.
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Unser Kernteam arbeitet synchron in Strategie, UX, Entwicklung, Content, SEO, Design und AI-Workflows. Seniorität im Lead — Spezialisten in der Ausführung.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {displayTeamMembers.map((member, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center"
            >
              <div className="relative mb-4 w-[200px] h-[200px] rounded-full overflow-hidden bg-gray-100">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center text-2xl font-semibold text-turquoise opacity-0">
                  {member.initials}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-1 text-text-primary text-center">{member.name}</h3>
              <p className="text-text-secondary text-center text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
