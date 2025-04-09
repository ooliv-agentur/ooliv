
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface TeamMember {
  name: string;
  role: {
    en: string;
    de: string;
  };
  image: string;
  initials: string;
}

const TeamSection = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';
  
  const teamMembers: TeamMember[] = [
    { 
      name: "Uli Schönleber", 
      role: {
        en: "CEO · Consulting, Concept, AI",
        de: "CEO · Beratung, Konzept, KI"
      }, 
      image: "/lovable-uploads/Uli.jpg",
      initials: "US" 
    },
    { 
      name: "Lisa Schönleber", 
      role: {
        en: "Content",
        de: "Content"
      }, 
      image: "/lovable-uploads/Lisa.jpg",
      initials: "LS" 
    },
    { 
      name: "Dorinel Nedelcu", 
      role: {
        en: "Creation",
        de: "Kreation"
      }, 
      image: "/lovable-uploads/Dorinel.jpg",
      initials: "DN" 
    },
    { 
      name: "Parveen Thakur", 
      role: {
        en: "Web Development",
        de: "Webentwicklung"
      }, 
      image: "/lovable-uploads/Parveen.jpg",
      initials: "PT" 
    },
    { 
      name: "Kamil Lisiewicz", 
      role: {
        en: "Web Development",
        de: "Webentwicklung"
      }, 
      image: "/lovable-uploads/Kamil.jpg",
      initials: "KL" 
    },
    { 
      name: "Neeraj Kumar", 
      role: {
        en: "App Development",
        de: "App-Entwicklung"
      }, 
      image: "/lovable-uploads/Neeraj.jpg",
      initials: "NK" 
    },
    { 
      name: "Paul Becker", 
      role: {
        en: "SEO Optimization",
        de: "SEO-Optimierung"
      }, 
      image: "/lovable-uploads/Paul.jpg",
      initials: "PB" 
    },
    { 
      name: "Giovanni Costa", 
      role: {
        en: "Corporate Design",
        de: "Corporate Design"
      }, 
      image: "/lovable-uploads/Giovanni.jpg",
      initials: "GC" 
    },
    { 
      name: "Beatriz Morales", 
      role: {
        en: "Illustrator",
        de: "Illustratorin"
      }, 
      image: "/lovable-uploads/Beatriz.jpg",
      initials: "BM" 
    },
    { 
      name: "Sanja Micro", 
      role: {
        en: "Print Design",
        de: "Print-Design"
      }, 
      image: "/lovable-uploads/Sanja.jpg",
      initials: "SM" 
    }
  ];

  // Start with the first 6 team members like in the image
  const displayTeamMembers = teamMembers.slice(0, 6);

  return (
    <section className="py-20 bg-brand-background" id="team">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-heading mb-4">
            {isGerman ? "Das ooliv Team" : "The ooliv Team"}
          </h2>
          <p className="text-lg text-brand-text max-w-3xl mx-auto">
            {isGerman 
              ? "Gute Leute sind schwer zu finden – wir haben gleich ein ganzes Team davon. Unsere Experten vereinen Strategie, Kreativität und Technologie, um Projekte mit Herzblut umzusetzen."
              : "Good people are hard to find – we have a whole team of them. Our experts combine strategy, creativity, and technology to implement projects with passion."}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {displayTeamMembers.map((member, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center"
            >
              <div className="relative mb-4 w-[200px] h-[200px] rounded-full overflow-hidden bg-[#faf5eb] border-2 border-white">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center text-2xl font-semibold text-brand-primary opacity-0">
                  {member.initials}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-1 text-brand-heading">{member.name}</h3>
              <p className="text-brand-text">{isGerman ? member.role.de : member.role.en}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
