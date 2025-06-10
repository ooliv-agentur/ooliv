
import React from 'react';
import { CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactTrustSectionDE = () => {
  const trustPoints = [
    "Persönliche Ansprechpartner, keine Zwischenstellen",
    "Klare, messbare Ergebnisse", 
    "Direkte Kommunikation mit der Geschäftsführung",
    "Über 100 erfolgreiche Projekte"
  ];

  const handleOpenLeadForm = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-medico-darkGreen" style={{ lineHeight: '1.3' }}>
            Warum ooliv?
          </h2>
          <div className="w-20 h-1 bg-medico-turquoise mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-medico-darkGreen/80 max-w-3xl mx-auto" style={{ lineHeight: '1.6' }}>
            Erfahren Sie, was uns zu Ihrem idealen Partner für digitales Marketing macht
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Trust Points */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {trustPoints.map((point, index) => (
              <div 
                key={index} 
                className="flex items-start bg-medico-mint/30 rounded-xl p-6 border border-medico-turquoise/20 hover:shadow-md transition-all duration-300"
              >
                <div className="bg-medico-turquoise/20 rounded-full p-2 mr-4 flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-medico-turquoise" />
                </div>
                <p className="text-medico-darkGreen font-medium text-lg leading-relaxed">{point}</p>
              </div>
            ))}
          </div>

          {/* Trust Box with Ratings */}
          <div className="bg-medico-turquoise/5 rounded-2xl p-8 border border-medico-turquoise/20 mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-center">
                <div className="flex justify-center items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-medico-yellow text-medico-yellow" />
                  ))}
                </div>
                <div className="text-2xl font-bold text-medico-darkGreen mb-1">4,9/5</div>
                <div className="text-medico-darkGreen/70 text-sm">Google Bewertungen</div>
              </div>
              
              <div className="text-center">
                <div className="flex justify-center items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-medico-yellow text-medico-yellow" />
                  ))}
                </div>
                <div className="text-2xl font-bold text-medico-darkGreen mb-1">4,9/5</div>
                <div className="text-medico-darkGreen/70 text-sm">Sortlist Bewertungen</div>
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
              onClick={handleOpenLeadForm}
            >
              Projekt starten
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactTrustSectionDE;
