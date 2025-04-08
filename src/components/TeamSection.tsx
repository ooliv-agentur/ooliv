
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
      image: "/lovable-uploads/51d7af38-5abb-42ed-90ea-bd9451cbe50d.png",
      initials: "US" 
    },
    { 
      name: "Lisa Schönleber", 
      role: {
        en: "Content",
        de: "Content"
      }, 
      image: "/lovable-uploads/c704876d-6b25-4e90-80b5-bd2867f8234b.png",
      initials: "LS" 
    },
    { 
      name: "Dorinel Nedelcu", 
      role: {
        en: "Creation",
        de: "Kreation"
      }, 
      image: "/lovable-uploads/9295d42e-6141-4877-8671-1431a4640a5c.png",
      initials: "DN" 
    },
    { 
      name: "Parveen Thakur", 
      role: {
        en: "Web Development",
        de: "Webentwicklung"
      }, 
      image: "/lovable-uploads/3e333d84-2828-4385-8037-6fa62f815d1f.png",
      initials: "PT" 
    },
    { 
      name: "Kamil Lisiewicz", 
      role: {
        en: "Web Development",
        de: "Webentwicklung"
      }, 
      image: "/lovable-uploads/46d00b56-ce4b-406e-be84-59f9cb3cd65c.png",
      initials: "KL" 
    },
    { 
      name: "Neeraj Kumar", 
      role: {
        en: "App Development",
        de: "App-Entwicklung"
      }, 
      image: "/lovable-uploads/e90c4372-4b9d-4726-82db-7eb9d25738c3.png",
      initials: "NK" 
    },
    { 
      name: "Paul Becker", 
      role: {
        en: "SEO Optimization",
        de: "SEO-Optimierung"
      }, 
      image: "/lovable-uploads/4b03d523-6e2d-489d-aa2f-df379ff2ae9f.png",
      initials: "PB" 
    },
    { 
      name: "Giovanni Costa", 
      role: {
        en: "Corporate Design",
        de: "Corporate Design"
      }, 
      image: "/lovable-uploads/86266813-7926-4e30-81ef-7a0835035f48.png",
      initials: "GC" 
    },
    { 
      name: "Beatriz Morales", 
      role: {
        en: "Illustrator",
        de: "Illustratorin"
      }, 
      image: "/lovable-uploads/88f7c576-b6d6-48bc-9476-49edd2da054d.png",
      initials: "BM" 
    },
    { 
      name: "Sanja Micro", 
      role: {
        en: "Print Design",
        de: "Print-Design"
      }, 
      image: "/lovable-uploads/bc65cd4c-3c22-40dd-b4da-a6d272c61d23.png",
      initials: "SM" 
    }
  ];

  return (
    <section className="section-alt py-24">
      <div className="section-container">
        <h2 className="section-title">Das ooliv Team</h2>
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
