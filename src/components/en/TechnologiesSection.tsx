
import React from 'react';
import { Link } from 'react-router-dom';

interface Technology {
  name: string;
  description: string;
  icon: React.ReactNode;
}

const TechnologiesSection = () => {
  const technologies: Technology[] = [
    {
      name: "ChatGPT",
      description: "Content ideas, SEO snippets & text variations – AI-powered but always finalized by humans.",
      icon: <img src="/lovable-uploads/ac2faaf0-3c11-47bd-a829-aafb0bd09f24.png" alt="ChatGPT Logo" className="h-12 w-12" />
    },
    {
      name: "Midjourney",
      description: "Custom visuals instead of stock photos – designed to match your brand perfectly.",
      icon: <img src="/lovable-uploads/c2e2bd92-40a4-4a70-a1bd-6a3d5d936f87.png" alt="Midjourney Logo" className="h-12 w-12" />
    },
    {
      name: "Ahrefs",
      description: "Keyword analysis & competitive research – data-driven insights for strategic decisions.",
      icon: <img src="/lovable-uploads/db6a0e7f-92b8-4ebb-bf06-c9b9930fba55.png" alt="Ahrefs Logo" className="h-12 w-12" />
    },
    {
      name: "Basecamp",
      description: "Structured collaboration & clear communication – everything organized in one place.",
      icon: <img src="/lovable-uploads/a58c92c6-bfd7-4602-acaa-db2fba947360.png" alt="Basecamp Logo" className="h-12 w-12" />
    }
  ];

  return (
    <section className="py-20 bg-brand-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-heading mb-4">
            Technologies That Measurably Improve Website Performance
          </h2>
          <p className="text-xl text-brand-text max-w-3xl mx-auto">
            We combine human expertise with powerful tools – no shortcuts, no blind AI implementation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 h-full flex flex-col">
              <div className="flex justify-center mb-4">
                {tech.icon}
              </div>
              <h3 className="text-xl font-bold text-center mb-3">{tech.name}</h3>
              <p className="text-brand-text text-center flex-grow">{tech.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center border-t border-gray-100 pt-10">
          <p className="text-brand-text italic max-w-3xl mx-auto">
            Important: At ooliv, humans maintain control. AI is a tool – not a solution.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
