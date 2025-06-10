
import React from 'react';
import { CheckCircle } from 'lucide-react';

const ContactTrustSectionDE = () => {
  const trustPoints = [
    "Persönliche Ansprechpartner, keine Zwischenstellen",
    "Klare, messbare Ergebnisse",
    "Direkte Kommunikation mit der Geschäftsführung",
    "Über 100 erfolgreiche Projekte"
  ];

  return (
    <section className="py-24 bg-medico-mint">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-medico-darkGreen">
          Warum ooliv?
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Trust Points */}
          <div className="grid md:grid-cols-1 gap-6">
            {trustPoints.map((point, index) => (
              <div key={index} className="flex items-start bg-white rounded-lg p-4 shadow-sm">
                <CheckCircle className="h-6 w-6 text-medico-turquoise mr-3 mt-1 flex-shrink-0" />
                <p className="text-medico-darkGreen font-medium">{point}</p>
              </div>
            ))}
          </div>
          
          {/* Uli's Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src="/lovable-uploads/Uli.jpg" 
                alt="Uli, CEO von ooliv" 
                className="w-80 h-80 object-cover object-center rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-medico-yellow text-medico-darkGreen px-4 py-2 rounded-full font-bold shadow-lg">
                Uli, CEO
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactTrustSectionDE;
