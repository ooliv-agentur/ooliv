
import React from 'react';

const AboutTimeline = () => {
  const timelineEvents = [
    {
      year: "2008",
      title: "Gründung von ooliv",
      description: "Start als Webdesign-Studio mit Fokus auf KMUs in der Rhein-Main-Region."
    },
    {
      year: "2012",
      title: "B2B-Spezialisierung",
      description: "Strategische Neuausrichtung mit klarem Fokus auf B2B-Kunden und deren spezifische Anforderungen."
    },
    {
      year: "2015",
      title: "Technologische Erweiterung",
      description: "Integration von SEO und Content-Marketing in das Serviceangebot."
    },
    {
      year: "2018",
      title: "Internationale Expansion",
      description: "Erste Projekte mit internationalen Kunden und mehrsprachigen Websites."
    },
    {
      year: "2021",
      title: "KI-Integration",
      description: "Einführung KI-gestützter Lösungen für Content und automatisiertes Marketing."
    },
    {
      year: "2023",
      title: "Strategische Partnerschaften",
      description: "Ausbau des Netzwerks mit spezialisierten Technologiepartnern."
    },
    {
      year: "2024",
      title: "ooliv heute",
      description: "Ein eingespieltes Team mit umfassender Expertise für digitales B2B-Marketing."
    }
  ];

  return (
    <section className="py-20 bg-brand-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-brand-heading">Unsere Reise</h2>
          <p className="text-lg max-w-3xl mx-auto text-brand-text">
            Die wichtigsten Meilensteine auf unserem Weg zur B2B-Digitalagentur.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-brand-primary/30"></div>
          
          <div className="space-y-16">
            {timelineEvents.map((event, index) => (
              <div key={index} className={`relative flex items-center justify-between ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Timeline content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'pl-8'}`}>
                  <div className={`bg-white p-6 rounded-lg shadow-md ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}>
                    <h3 className="text-xl font-bold text-brand-heading">{event.title}</h3>
                    <p className="text-brand-primary font-bold mb-2">{event.year}</p>
                    <p className="text-brand-text">{event.description}</p>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-brand-primary border-4 border-white"></div>
                
                {/* Empty div for alignment */}
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTimeline;
