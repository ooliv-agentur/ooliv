
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const ContactTrustSectionDE = () => {
  const trustPoints = [
    "Persönliche Ansprechpartner, keine Zwischenstellen",
    "Klare, messbare Ergebnisse",
    "Direkte Kommunikation mit der Geschäftsführung",
    "Über 100 erfolgreiche Projekte"
  ];

  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  return (
    <section className="py-24 bg-white font-satoshi">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-medico-darkGreen">
            Warum ooliv?
          </h2>
          <p className="text-lg md:text-xl text-medico-darkGreen/80 max-w-3xl mx-auto">
            Erfahren Sie, was uns zu Ihrem idealen Partner für digitale Projekte macht.
          </p>
        </div>
        
        {/* Trust Points */}
        <div className="space-y-6 mb-12">
          {trustPoints.map((point, index) => (
            <div 
              key={index} 
              className="flex items-start"
            >
              <div className="flex-shrink-0 mr-4">
                <CheckCircle className="h-6 w-6 text-medico-turquoise mt-1" />
              </div>
              <p className="text-lg text-medico-darkGreen">{point}</p>
            </div>
          ))}
        </div>
        
        {/* Trust Box */}
        <div className="bg-medico-mint rounded-2xl p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center">
              <div className="text-3xl font-bold text-medico-darkGreen mb-2">4,9/5</div>
              <div className="text-medico-darkGreen/80">Google Bewertungen</div>
              <div className="flex justify-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-medico-yellow fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-medico-darkGreen mb-2">Top Rated</div>
              <div className="text-medico-darkGreen/80">Sortlist Agency</div>
              <div className="text-sm text-medico-darkGreen/60 mt-2">Verified Partner</div>
            </div>
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            style={{ 
              backgroundColor: '#FFD700', 
              color: '#003347',
              border: 'none'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#FFC700';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FFD700';
            }}
            onClick={handleStartProject}
          >
            Projekt starten
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactTrustSectionDE;
