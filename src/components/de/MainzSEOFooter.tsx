import React from 'react';
import Reveal from '@/components/animations/Reveal';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { H3, Caption } from '@/components/ui/typography';

const MainzSEOFooter = () => {
  const keywords = [
    "Webdesign für Unternehmen im Rhein-Main-Gebiet",
    "SEO-Optimierung für das Rhein-Main-Gebiet",
    "Google Ads für regionale Zielgruppen",
    "Digitale Strategien für Mittelstand und B2B",
    "Individuelle Websites und Conversion-Funnels",
    "KI-gestützte Marketingprozesse",
    "Regionale Beratung für Mainz, Wiesbaden und Umgebung"
  ];

  return (
    <Section spacing="large" background="light">
      <Container>
        <Reveal>
          <H3 className="mb-8" alignment="center">
            Wichtige Themen im Überblick
          </H3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {keywords.map((keyword, index) => (
              <div 
                key={index} 
                className="text-center py-3 px-4 bg-background rounded-lg border border-border"
              >
                <Caption color="secondary">
                  {keyword}
                </Caption>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
};

export default MainzSEOFooter;
