
import React from 'react';
import { CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { H2, LargeParagraph } from '@/components/ui/typography';

const ContactTrustSectionDE = () => {
  const trustPoints = [
    "Persönliche Ansprechpartner, keine Zwischenstellen",
    "Klare, messbare Ergebnisse", 
    "Direkte Kommunikation mit der Geschäftsführung",
    "200+ realisierte Digitalprojekte"
  ];

  const handleOpenLeadForm = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  return (
    <Section spacing="large" background="white">
      <Container>
        <div className="text-center mb-16">
          <H2 className="mb-6" alignment="center">
            Warum ooliv?
          </H2>
          <div className="w-20 h-1 bg-[#32b2ab] mx-auto mb-8"></div>
          <LargeParagraph className="max-w-3xl mx-auto" alignment="center" color="secondary">
            Erfahren Sie, was uns zu Ihrem idealen Partner für digitales Marketing macht
          </LargeParagraph>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Trust Points */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {trustPoints.map((point, index) => (
              <div 
                key={index} 
                className="flex items-start bg-[#D8F3F1] rounded-xl p-6 border border-[#32b2ab]/20 hover:shadow-md transition-all duration-300"
              >
                <div className="bg-[#32b2ab]/20 rounded-full p-2 mr-4 flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-[#32b2ab]" />
                </div>
                <p className="text-[#0A0A0A] font-medium text-lg leading-relaxed">{point}</p>
              </div>
            ))}
          </div>

          {/* Trust Box with Ratings */}
          <div className="bg-[#32b2ab]/5 rounded-2xl p-8 border border-[#32b2ab]/20 mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <a 
                href="https://g.co/kgs/WY5xKY6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-center hover:scale-105 transition-transform duration-200 cursor-pointer"
              >
                <div className="flex justify-center items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#32b2ab] text-[#32b2ab]" />
                  ))}
                </div>
                <div className="text-2xl font-bold text-[#0A0A0A] mb-1">4,9/5</div>
                <div className="text-[#555555] text-sm">Google Bewertungen</div>
              </a>
              
              <a 
                href="https://www.sortlist.de/agency/uli-werbeagentur?disableCache=true&_gl=1*ry4v5e*_gcl_au*MzA5OTA3ODYxLjE3NDEwMDk3MTI.*_ga*NzY3NTI4Nzk0LjE3MzI4MDI5MTE.*_ga_1R6BD4KZ09*MTc0NDA4OTMzNS4xOC4xLjE3NDQwODk3MDkuNTkuMC4w" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-center hover:scale-105 transition-transform duration-200 cursor-pointer"
              >
                <div className="flex justify-center items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#32b2ab] text-[#32b2ab]" />
                  ))}
                </div>
                <div className="text-2xl font-bold text-[#0A0A0A] mb-1">4,9/5</div>
                <div className="text-[#555555] text-sm">Sortlist Bewertungen</div>
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Button 
              variant="primary"
              size="lg" 
              onClick={handleOpenLeadForm}
            >
              Projekt starten
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default ContactTrustSectionDE;
