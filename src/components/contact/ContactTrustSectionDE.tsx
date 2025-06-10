
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
    <section className="py-24 bg-medico-mint/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-medico-darkGreen">
          Warum ooliv?
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {trustPoints.map((point, index) => (
            <div key={index} className="flex items-start bg-white rounded-lg p-4 shadow-sm">
              <CheckCircle className="h-6 w-6 text-medico-turquoise mr-3 mt-1 flex-shrink-0" />
              <p className="text-medico-darkGreen font-medium">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactTrustSectionDE;
