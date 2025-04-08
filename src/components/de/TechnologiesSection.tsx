import React from 'react';

interface Technology {
  name: string;
  description: string;
  icon: React.ReactNode;
}

const TechnologiesSection = () => {
  const technologies: Technology[] = [
    {
      name: "ChatGPT",
      description: "Content-Ideen, SEO-Snippets & Text-Varianten – von Menschen finalisiert.",
      icon: <img src="/lovable-uploads/ac2faaf0-3c11-47bd-a829-aafb0bd09f24.png" alt="ChatGPT Logo" className="h-12 w-12" />
    },
    {
      name: "Midjourney",
      description: "Individuelle Visuals statt Stockfotos.",
      icon: <img src="/midjourney-logo.svg" alt="Midjourney Logo" className="h-12 w-12" />
    },
    {
      name: "Ahrefs",
      description: "Keyword-Analysen & Wettbewerbsrecherche.",
      icon: <img src="/ahrefs-logo.svg" alt="Ahrefs Logo" className="h-12 w-12" />
    },
    {
      name: "Basecamp",
      description: "Strukturierte Zusammenarbeit & klare Kommunikation im Projekt.",
      icon: <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 8L12 14L22 8L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 14L12 20L22 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    }
  ];

  return (
    <section className="py-20 bg-brand-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-heading mb-4">
            Technologien, die Website-Performance messbar verbessern
          </h2>
          <p className="text-xl text-brand-text max-w-3xl mx-auto">
            Wir kombinieren menschliche Expertise mit leistungsstarken Tools – ohne Abkürzungen, ohne blinden KI-Einsatz.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <div className="flex justify-center mb-4">
                {tech.icon}
              </div>
              <h3 className="text-xl font-bold text-center mb-3">{tech.name}</h3>
              <p className="text-brand-text text-center">{tech.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center border-t border-gray-100 pt-10">
          <p className="text-brand-text italic max-w-3xl mx-auto">
            Wichtig: Bei ooliv behalten Menschen die Kontrolle. KI ist ein Werkzeug – keine Lösung.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
