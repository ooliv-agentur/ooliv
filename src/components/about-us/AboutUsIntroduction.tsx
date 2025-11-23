
import React from 'react';
import { LargeParagraph, H2 } from '@/components/ui/typography';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';

const AboutUsIntroduction = () => {
  return (
    <Section spacing="large" background="white">
      <Container size="default">
        <div className="text-center mb-12">
          <H2 className="text-[#0A0A0A] mb-6" alignment="center">
            Digitale Strategie trifft auf messbare Ergebnisse
          </H2>
          <LargeParagraph alignment="center" className="max-w-4xl mx-auto text-[#555555]">
            Seit 2008 entwickelt ooliv digitale Strategien, Websites und AI-gestützte Workflows, die Unternehmen messbar voranbringen. Wir sind kein anonymer Agenturapparat, sondern ein erfahrenes Digitalagentur-Team aus Mainz, das Klarheit, Struktur und Ergebnisse liefert.
          </LargeParagraph>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {[
            "Direkte Zusammenarbeit mit dem CEO",
            "Senior-Strategie statt Junior-Ausführung",
            "Klarer Prozess statt Chaos",
            "Ehrliche Beratung ohne Upsells"
          ].map((value, index) => (
            <div key={index} className="bg-[#F5F7F7] p-4 sm:p-6 rounded-lg text-center">
              <p className="text-[#555555] font-medium">{value}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default AboutUsIntroduction;
