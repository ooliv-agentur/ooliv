import React from 'react';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';

const MainzTechStack = () => {
  const technologies = [
    { name: "WordPress", category: "CMS" },
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Framework" },
    { name: "Shopify", category: "E-Commerce" },
    { name: "Google Analytics", category: "Analytics" },
    { name: "SEMrush", category: "SEO Tools" },
    { name: "Google Ads", category: "Marketing" },
    { name: "HubSpot", category: "CRM" }
  ];

  return (
    <section className="py-20 bg-white font-satoshi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-medico-darkGreen mb-6 leading-tight">
              Technologien, auf die wir setzen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Als Werbeagentur in Mainz arbeiten wir mit bewährten Tools und modernen Technologien
            </p>
          </div>
        </Reveal>

        <StaggerReveal className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:border-accent-primary hover:shadow-md transition-all duration-300 text-center"
            >
              <div className="text-sm text-accent-primary font-semibold mb-2">
                {tech.category}
              </div>
              <div className="text-lg font-bold text-medico-darkGreen">
                {tech.name}
              </div>
            </div>
          ))}
        </StaggerReveal>

        <Reveal>
          <div className="mt-16 bg-gradient-to-r from-accent-primary/10 to-medico-darkGreen/10 rounded-3xl p-12 text-center">
            <h3 className="text-2xl font-bold text-medico-darkGreen mb-4">
              Die richtige Technologie für Ihr Projekt
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Wir wählen die Tools und Technologien basierend auf Ihren individuellen Anforderungen – nicht nach Trends, sondern nach Ihren Geschäftszielen.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default MainzTechStack;
