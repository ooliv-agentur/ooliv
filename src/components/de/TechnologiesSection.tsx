
import React from 'react';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';

interface Technology {
  name: string;
  description: string;
  icon: React.ReactNode;
}

const TechnologiesSection = () => {
  const technologies: Technology[] = [
    {
      name: "ChatGPT",
      description: "Texte entwickeln, Ideen strukturieren – KI-gestützt, von Menschen finalisiert.",
      icon: <img src="/lovable-uploads/ac2faaf0-3c11-47bd-a829-aafb0bd09f24.png" alt="ChatGPT Logo" className="h-16 w-16" />
    },
    {
      name: "Midjourney",
      description: "Einzigartige Bilder statt Stock-Optik – visuell passend zu Ihrer Marke.",
      icon: <img src="/lovable-uploads/c2e2bd92-40a4-4a70-a1bd-6a3d5d936f87.png" alt="Midjourney Logo" className="h-16 w-16" />
    },
    {
      name: "Ahrefs",
      description: "Suchverhalten analysieren, Wettbewerb verstehen – datenbasiert.",
      icon: <img src="/lovable-uploads/db6a0e7f-92b8-4ebb-bf06-c9b9930fba55.png" alt="Ahrefs Logo" className="h-16 w-16" />
    },
    {
      name: "Basecamp",
      description: "Klarer Projektverlauf, direkte Kommunikation – maximale Transparenz.",
      icon: <img src="/lovable-uploads/a58c92c6-bfd7-4602-acaa-db2fba947360.png" alt="Basecamp Logo" className="h-16 w-16" />
    }
  ];

  return (
    <section className="py-24 bg-[#F4F7F7]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <Reveal>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 text-primary-text leading-tight">
              Werkzeuge mit Verstand eingesetzt.
            </h3>
            <p className="text-base md:text-lg text-center text-muted-foreground max-w-4xl mx-auto mb-16 font-normal leading-relaxed">
              Technologie ist kein Selbstzweck. Wir nutzen KI, Analyse-Tools und smarte Systeme gezielt — um Arbeit zu beschleunigen und Entscheidungen fundiert zu machen.
            </p>
          </Reveal>
          
          <StaggerReveal className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white p-8 rounded-[20px] border border-gray-100 transition-all duration-300 hover:scale-[1.02] h-full flex flex-col">
                <div className="flex justify-center mb-6">
                  {tech.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-center mb-4 text-primary-text">{tech.name}</h3>
                <p className="text-muted-foreground text-center text-sm md:text-base flex-grow font-normal leading-relaxed">{tech.description}</p>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
