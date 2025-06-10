
import React from 'react';
import { CheckCircle, Quote } from 'lucide-react';

const ContactTrustSectionDE = () => {
  const trustPoints = [
    "Persönliche Ansprechpartner, keine Zwischenstellen",
    "Klare, messbare Ergebnisse",
    "Direkte Kommunikation mit der Geschäftsführung",
    "Über 100 erfolgreiche Projekte"
  ];

  return (
    <section className="py-24 bg-medico-mint relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-medico-turquoise/10 rounded-full -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-medico-yellow/20 rounded-full translate-y-32 -translate-x-32"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <Quote className="h-12 w-12 mx-auto mb-6 text-medico-turquoise" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-medico-darkGreen">
            Warum ooliv?
          </h2>
          <p className="text-lg text-medico-darkGreen/80 max-w-2xl mx-auto">
            Erfahren Sie, was uns zu Ihrem idealen Partner für digitales Marketing macht
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Trust Points */}
          <div className="space-y-6">
            {trustPoints.map((point, index) => (
              <div 
                key={index} 
                className="flex items-start bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="bg-medico-turquoise/10 rounded-full p-2 mr-4 flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-medico-turquoise" />
                </div>
                <p className="text-medico-darkGreen font-medium text-lg">{point}</p>
              </div>
            ))}
          </div>
          
          {/* Uli's Photo and Quote */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative max-w-md">
              <div className="relative">
                <img 
                  src="/lovable-uploads/Uli.jpg" 
                  alt="Uli Schönleber, Geschäftsführer von ooliv" 
                  className="w-80 h-80 object-cover object-center rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-medico-yellow text-medico-darkGreen px-6 py-3 rounded-full font-bold shadow-lg">
                  Uli Schönleber, Geschäftsführer
                </div>
              </div>
              
              {/* Quote bubble */}
              <div className="absolute -top-4 -left-8 bg-white rounded-xl p-4 shadow-lg max-w-xs">
                <p className="text-sm text-medico-darkGreen italic">
                  "Persönliche Betreuung und messbare Erfolge stehen bei uns an erster Stelle."
                </p>
                <div className="absolute bottom-0 left-8 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white transform translate-y-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactTrustSectionDE;
