import React from 'react';
import { Check } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { H2, Paragraph } from '@/components/ui/typography';

const WhySmallTeam = () => {
  return (
    <Section spacing="large" background="white">
      <Container size="default">
        <div className="max-w-4xl mx-auto text-center">
          <H2 className="text-[#0A0A0A] mb-6" alignment="center">
            Warum wir bewusst klein bleiben
          </H2>
          
          <Paragraph className="text-lg text-[#555555] mb-12" alignment="center">
            Wir glauben nicht an große Agenturstrukturen.
            Wir glauben an Seniorität, Fokus und Qualität.
            Jedes Projekt wird von einem kleinen, eingespielten Team umgesetzt — ohne Reibungsverluste, ohne Silos, ohne Wissensbruch.
          </Paragraph>
          
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            {[
              "Eine Schnittstelle statt fünf",
              "Entscheider direkt involviert",
              "Kürzere Wege, höhere Qualität",
              "Fokus auf Wirkung, nicht Stunden",
              "Senior-Level-Betreuung statt wechselnder Projektteams",
              "Alle Leistungen in-house: Strategie, UX, Design, Entwicklung, SEO, AI",
              "Hybrider Teamansatz für ganzheitliche digitale Lösungen"
            ].map((point, index) => (
              <div key={index} className="flex items-start text-left bg-[#F5F7F7] p-4 sm:p-6 rounded-lg">
                <Check className="w-6 h-6 text-[#0BC3C3] mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-[#555555] font-medium">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default WhySmallTeam;
