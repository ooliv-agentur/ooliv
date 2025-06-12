
import React from 'react';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';

interface Technology {
  name: string;
  description: string;
  icon: React.ReactNode;
}

const WiesbadenTechStack = () => {
  const technologies: Technology[] = [
    {
      name: "ChatGPT",
      description: "Texte schneller entwickeln, Ideen strukturieren, dynamische Video-Snippets generieren — KI-gestützt, von Menschen finalisiert.",
      icon: <img src="/lovable-uploads/ac2faaf0-3c11-47bd-a829-aafb0bd09f24.png" alt="ChatGPT Logo" className="h-16 w-16" />
    },
    {
      name: "Midjourney",
      description: "Einzigartige Bilder statt Stock-Optik — visuell passend zu Ihrer Marke und individuell gestaltet.",
      icon: <img src="/lovable-uploads/c2e2bd92-40a4-4a70-a1bd-6a3d5d936f87.png" alt="Midjourney Logo" className="h-16 w-16" />
    },
    {
      name: "Ahrefs",
      description: "Suchverhalten analysieren, Chancen erkennen, Wettbewerb verstehen — datenbasiert und strategisch.",
      icon: <img src="/lovable-uploads/db6a0e7f-92b8-4ebb-bf06-c9b9930fba55.png" alt="Ahrefs Logo" className="h-16 w-16" />
    },
    {
      name: "Basecamp",
      description: "Klarer Projektverlauf, direkte Kommunikation — alles an einem Ort für maximale Transparenz.",
      icon: <img src="/lovable-uploads/a58c92c6-bfd7-4602-acaa-db2fba947360.png" alt="Basecamp Logo" className="h-16 w-16" />
    }
  ];

  return (
    <section className="py-20 bg-medico-mint font-satoshi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <Reveal>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 text-medico-darkGreen" style={{ lineHeight: '1.4' }}>
              Technologie ist kein Selbstzweck — sondern Mittel zum Ziel.
            </h3>
            <p className="text-base md:text-lg text-center text-medico-darkGreen max-w-4xl mx-auto mb-16" style={{ lineHeight: '1.6' }}>
              Wir setzen auf leistungsstarke Tools, die unsere Arbeit unterstützen — nicht ersetzen. KI, Analyse und Projektkommunikation: Alles mit klarem Menschenverstand eingesetzt.
            </p>
          </Reveal>
          
          <StaggerReveal className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-medico-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-medico-turquoise group h-full flex flex-col">
                <div className="flex justify-center mb-6 group-hover:scale-105 transition-all duration-300">
                  <div className="filter group-hover:brightness-110 transition-all duration-300">
                    {tech.icon}
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-center mb-4 text-medico-darkGreen">{tech.name}</h3>
                <p className="text-medico-darkGreen/80 text-center text-sm md:text-base flex-grow" style={{ lineHeight: '1.6' }}>{tech.description}</p>
              </div>
            ))}
          </StaggerReveal>
        </div>

        <div className="mt-16 text-center border-t-2 border-medico-turquoise/20 pt-12">
          <p className="text-medico-darkGreen italic max-w-3xl mx-auto text-base md:text-lg" style={{ lineHeight: '1.6' }}>
            KI ist ein Werkzeug. Die Verantwortung bleibt bei uns.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WiesbadenTechStack;
