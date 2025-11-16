import React from 'react';
import Reveal from '@/components/animations/Reveal';

const MainzSEOFooter = () => {
  const keywords = [
    "Webdesign für Unternehmen im Rhein-Main-Gebiet",
    "SEO-Optimierung für das Rhein-Main-Gebiet",
    "Google Ads für regionale Zielgruppen",
    "Digitale Strategien für Mittelstand und B2B",
    "Individuelle Websites und Conversion-Funnels",
    "KI-gestützte Marketingprozesse",
    "Regionale Beratung für Mainz, Wiesbaden und Umgebung"
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 to-white font-satoshi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-medico-darkGreen mb-6">
              Wichtige Themen im Überblick
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {keywords.map((keyword, index) => (
              <div 
                key={index} 
                className="text-center py-3 px-4 bg-white rounded-lg border border-gray-200 text-gray-700 text-sm"
              >
                {keyword}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default MainzSEOFooter;
