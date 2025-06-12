
import React from 'react';

const GooglePartnerBadgeSEO = () => {
  return (
    <section className="py-16 md:py-20 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-medico-darkGreen">
              Anerkannt für strategische SEO-Kompetenz
            </h2>
            <p className="text-lg md:text-xl text-medico-darkGreen leading-relaxed">
              Als zertifizierter Google Partner erfüllen wir höchste Qualitätsstandards – auch im Bereich Suchmaschinenoptimierung. Unsere Arbeit basiert auf fundiertem Know-how, datenbasierten Analysen und bewährten Best Practices für nachhaltige Sichtbarkeit.
            </p>
          </div>
          
          {/* Google Partner Badge */}
          <div className="flex-shrink-0">
            <div className="bg-gray-100 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <img 
                src="/lovable-uploads/c2a103d0-80b5-42ab-befa-8f7044c3ef2f.png"
                alt="Google Partner Badge"
                className="w-48 h-auto mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GooglePartnerBadgeSEO;
