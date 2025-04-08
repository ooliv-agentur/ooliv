import React from 'react';

interface Technology {
  name: string;
  description: string;
  icon: React.ReactNode;
}

const TechnologiesSection = () => {
  const technologies: Technology[] = [
    {
      name: "Sora",
      description: "Content-Ideen, SEO-Snippets & Text-Varianten – von Menschen finalisiert.",
      icon: <img src="/lovable-uploads/301a15f8-275e-4e29-bff6-e16b548a2cc4.png" alt="Sora Logo" className="h-12 w-12" />
    },
    {
      name: "Midjourney",
      description: "Individuelle Visuals statt Stockfotos.",
      icon: <img src="/lovable-uploads/e8258ca0-d36b-48a3-b32f-b1e840c31f9a.png" alt="Midjourney Logo" className="h-12 w-12" />
    },
    {
      name: "Ahrefs",
      description: "Keyword-Analysen & Wettbewerbsrecherche.",
      icon: <img src="/lovable-uploads/bf5a94f3-2829-4580-838e-f65d0bb17daf.png" alt="Ahrefs Logo" className="h-12 w-12" />
    },
    {
      name: "Basecamp",
      description: "Strukturierte Zusammenarbeit & klare Kommunikation im Projekt.",
      icon: <img src="/lovable-uploads/1cf28eb6-2f14-4761-9479-7f363adb4686.png" alt="Basecamp Logo" className="h-12 w-12" />
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
