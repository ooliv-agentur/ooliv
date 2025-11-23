import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { H2, Paragraph, LargeParagraph } from '@/components/ui/typography';

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
  initials: string;
}

const TeamSection = () => {
  const { language } = useLanguage();
  
  const teamMembers: TeamMember[] = [
    { 
      name: "Uli Schönleber (US)", 
      role: "Strategy & Transformation",
      description: "Verantwortlich für digitale Strategie, Positionierung, Informationsarchitektur und AI-gestützte Entscheidungsprozesse.",
      image: "/lovable-uploads/Uli.webp",
      initials: "US" 
    },
    { 
      name: "Lisa Schönleber (LS)", 
      role: "Content & Communication",
      description: "Content-Strategie, Markenkommunikation und AI-unterstütztes Copywriting für konsistente Botschaften.",
      image: "/lovable-uploads/Lisa.jpg",
      initials: "LS" 
    },
    { 
      name: "Dorinel Nedelcu (DN)", 
      role: "UI Design & Visual Systems",
      description: "Zuständig für UI-Design, Designsysteme und visuelle Identität mit Fokus auf moderne Interfaces.",
      image: "/lovable-uploads/Dorinel.jpg",
      initials: "DN" 
    },
    { 
      name: "Parveen Thakur (PT)", 
      role: "Lead Development",
      description: "Lead Developer für WordPress, Headless-Architekturen und Performance-Optimierung.",
      image: "/lovable-uploads/Parveen.jpg",
      initials: "PT" 
    },
    { 
      name: "Kamil Lisiewicz (KL)", 
      role: "Fullstack Development",
      description: "Fullstack-Entwicklung mit Schwerpunkt auf moderne Web-Technologien und API-Integration.",
      image: "/lovable-uploads/Kamil.jpg",
      initials: "KL" 
    },
    { 
      name: "Neeraj Kumar (NK)", 
      role: "Mobile Development",
      description: "Spezialisiert auf native und hybride App-Entwicklung für iOS und Android.",
      image: "/lovable-uploads/Neeraj.jpg",
      initials: "NK" 
    },
    { 
      name: "Paul Becker (PB)", 
      role: "SEO & Growth",
      description: "SEO Lead für Onpage-Optimierung, Technical SEO und messbare Wachstumsstrategien.",
      image: "/lovable-uploads/Paul.jpg",
      initials: "PB" 
    },
    { 
      name: "Giovanni Costa (GC)", 
      role: "Branding & Visual Identity",
      description: "Entwickelt Corporate Designs, Branding-Konzepte und visuelle Identitäten.",
      image: "/lovable-uploads/Giovanni.jpg",
      initials: "GC" 
    },
    { 
      name: "Beatriz Morales (BM)", 
      role: "Illustration & Visual Modules",
      description: "Erstellt Illustrationen, visuelle Module und Icon-Sets für digitale Produkte.",
      image: "/lovable-uploads/Beatriz.jpg",
      initials: "BM" 
    },
    { 
      name: "Sanja Micro (SM)", 
      role: "Print Design",
      description: "Spezialisiert auf Print-Design, Offline-Materialien und Corporate Layouts.",
      image: "/lovable-uploads/Sanja.jpg",
      initials: "SM" 
    }
  ];

  // Show all team members instead of limiting to 6
  const displayTeamMembers = teamMembers;

  return (
    <Section id="team" spacing="large" background="white">
      <Container size="default">
        <div className="text-center mb-12">
          <H2 className="text-[#0A0A0A] mb-4" alignment="center">
            Kleines Team. Volle Kompetenz.
          </H2>
          <LargeParagraph className="text-[#555555] max-w-3xl mx-auto" alignment="center">
            Unser Kernteam arbeitet synchron in Strategie, UX, Entwicklung, Content, SEO, Design und AI-Workflows. Seniorität im Lead — Spezialisten in der Ausführung.
          </LargeParagraph>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
          {displayTeamMembers.map((member, index) => (
            <div 
              key={index} 
              className="flex items-start gap-6 bg-[#F5F7F7] p-4 sm:p-6 rounded-lg"
            >
              <div className="relative flex-shrink-0 w-[120px] h-[120px] rounded-full overflow-hidden bg-[#faf5eb] border-2 border-white">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center text-2xl font-semibold text-[#0BC3C3] opacity-0">
                  {member.initials}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-bold mb-1 text-[#0A0A0A]">{member.name}</h3>
                <p className="text-[#0BC3C3] font-semibold mb-2">{member.role}</p>
                <p className="text-[#555555] text-sm leading-relaxed">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default TeamSection;
