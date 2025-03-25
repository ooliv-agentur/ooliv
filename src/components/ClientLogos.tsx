
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface Technology {
  name: string;
  description: string;
}

interface ClientLogosProps {
  title?: string;
  description?: string;
  technologies?: Technology[];
  note?: string;
}

const ClientLogos = ({ title, description, technologies, note }: ClientLogosProps = {}) => {
  const { language } = useLanguage();
  
  const defaultTechnologies = language === 'de' 
    ? [
        {
          name: "ChatGPT",
          description: "Content-Ideen, SEO-Snippets & Text-Varianten – von Menschen finalisiert."
        },
        {
          name: "Midjourney",
          description: "Individuelle Visuals statt Stockfotos."
        },
        {
          name: "Ahrefs",
          description: "Keyword-Analysen & Wettbewerbsrecherche."
        },
        {
          name: "Basecamp",
          description: "Strukturierte Zusammenarbeit & klare Kommunikation im Projekt – intern und mit Ihnen."
        }
      ]
    : [
        {
          name: "ChatGPT",
          description: "Content ideas, SEO snippets & text variants – human-finalized."
        },
        {
          name: "Midjourney",
          description: "Custom visuals instead of generic stock photos."
        },
        {
          name: "Ahrefs",
          description: "Keyword analysis & competitive research."
        },
        {
          name: "Basecamp",
          description: "Structured collaboration & clear communication throughout the project."
        }
      ];
  
  // Use provided technologies or fall back to default set
  const displayTechnologies = technologies || defaultTechnologies;
  
  const defaultTitle = language === 'de'
    ? "Technologien, die Website-Performance messbar verbessern."
    : "Technologies That Measurably Improve Website Performance";
    
  const defaultDescription = language === 'de'
    ? "Wir kombinieren menschliche Expertise mit leistungsstarken Tools – ohne Abkürzungen, ohne blinden KI-Einsatz."
    : "We combine human expertise with powerful tools – no shortcuts, no blind AI usage.";
    
  const defaultNote = language === 'de'
    ? "Wichtig: Bei ooliv behalten Menschen die Kontrolle. KI ist ein Werkzeug – keine Lösung."
    : "Important: At ooliv, humans maintain control. AI is a tool – not a solution.";
  
  return (
    <section className="py-16 bg-brand-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-brand-heading mb-3">
            {title || defaultTitle}
          </h2>
          <p className="text-brand-text max-w-2xl mx-auto">
            {description || defaultDescription}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {displayTechnologies.map((tech, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2">{tech.name}</h3>
              <p className="text-brand-text text-sm">{tech.description}</p>
            </div>
          ))}
        </div>
        
        {/* Note section */}
        <div className="mt-12 text-center border-t border-gray-100 pt-10">
          <p className="text-brand-text italic max-w-3xl mx-auto">
            {note || defaultNote}
          </p>
        </div>
        
        {/* Removed Basecamp information block */}
      </div>
    </section>
  );
};

export default ClientLogos;
