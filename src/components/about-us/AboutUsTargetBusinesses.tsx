
import React from 'react';
import { CheckCircle } from 'lucide-react';

const AboutUsTargetBusinesses = () => {
  const industries = [
    'Technologie / Software',
    'Einzelhandel / E-Commerce',
    'Finanzen / Banking',
    'Gesundheit / Medizin',
    'Bildung / Training',
    'Produktion / Industrie',
    'Gastronomie / Tourismus',
    'Bau / Immobilien',
    'Lebensmittel / Restaurant',
    'Beratung / Dienstleistungen'
  ];

  return (
    <section className="py-16 bg-medico-mint font-satoshi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-12 text-center text-medico-darkGreen leading-tight">
          Für Unternehmen, die vorankommen wollen
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <p className="text-xl font-bold mb-6 text-medico-darkGreen">Wir helfen:</p>
            <ul className="space-y-4">
              {[
                'B2B-Unternehmen mit komplexen Angeboten',
                'Mittelständischen Marken, die einen Relaunch brauchen',
                'Schnell wachsenden Startups',
                'Nischenmartführern mit globaler Reichweite',
                'Lokalen Dienstleistern, die den nächsten Schritt gehen wollen'
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="h-8 w-8 flex items-center justify-center bg-medico-turquoise/10 rounded-full mr-3 flex-shrink-0">
                    <CheckCircle className="h-4 w-4 text-medico-turquoise" />
                  </span>
                  <span className="text-medico-darkGreen text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <p className="text-xl font-bold mb-6 text-medico-darkGreen">Typische Branchen:</p>
            <div className="grid grid-cols-1 gap-3">
              {industries.slice(0, 10).map((industry, index) => (
                <div 
                  key={index} 
                  className="bg-medico-mint p-3 rounded-lg text-center text-medico-darkGreen font-medium transition-all duration-300 hover:bg-gray-50 border border-gray-100"
                >
                  {industry.split('/')[0].trim()}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsTargetBusinesses;
