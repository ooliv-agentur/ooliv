import React from 'react';
import { Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { H2, H3, Paragraph } from '@/components/ui/typography';

const UliSection = () => {
  return (
    <Section spacing="large" background="white">
      <Container size="default">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          <div>
            <div className="bg-gray-100 rounded-2xl aspect-square flex items-center justify-center">
              <img 
                src="/lovable-uploads/Uli.webp" 
                alt="Uli Schönleber"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
          
          <div>
            <H2 className="text-[#0A0A0A] mb-4">
              Uli Schönleber — Digital Strategy Lead
            </H2>
            <H3 className="text-[#0BC3C3] mb-6">
              Strategie, UX & AI aus einer Hand.
            </H3>
            
            <Paragraph className="text-[#555555] mb-6">
              Seit über 15 Jahren verbinde ich Strategie, UX, Content und AI-gestützte Arbeitsprozesse zu digitalen Systemen, die verkaufen. Ich begleite jedes Projekt persönlich — vom ersten Gespräch bis zum Launch — und treffe Entscheidungen, die auf Daten, Nutzerverhalten und klaren Geschäftsmodellen basieren.
            </Paragraph>
            
            <div className="space-y-3 mb-8">
              {[
                "15+ Jahre Erfahrung",
                "200+ realisierte Digitalprojekte",
                "Beratung auf Geschäftsführungsniveau"
              ].map((fact, index) => (
                <div key={index} className="flex items-start">
                  <Brain className="w-5 h-5 text-[#0BC3C3] mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-[#555555] font-medium">{fact}</span>
                </div>
              ))}
            </div>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => {
                const element = document.getElementById('team');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Mehr über meine Arbeitsweise
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default UliSection;
