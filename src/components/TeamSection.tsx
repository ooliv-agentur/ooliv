
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useLanguage } from '@/contexts/LanguageContext';

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

  return (
    <section className="section-alt py-24">
      <div className="section-container">
        <h2 className="section-title">
          {isGerman ? "Das ooliv Team" : "The ooliv Team"}
        </h2>
        <p className="section-subtitle max-w-3xl mx-auto">
          {isGerman 
            ? "Gute Leute sind schwer zu finden – wir haben gleich ein ganzes Team davon. Unsere Experten vereinen Strategie, Kreativität und Technologie, um Projekte mit Herzblut umzusetzen."
            : "Good people are hard to find – we have a whole team of them. Our experts combine strategy, creativity, and technology to implement projects with passion."}
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <Avatar className="h-40 w-40 mb-4 border-2 border-brand-primary/20">
                <AvatarImage src={member.image} alt={member.name} className="object-top object-cover" />
                <AvatarFallback className="bg-brand-primary/10 text-brand-primary text-2xl">
                  {member.initials}
                </AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-sm text-brand-text/80 italic">{isGerman ? member.role.de : member.role.en}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
