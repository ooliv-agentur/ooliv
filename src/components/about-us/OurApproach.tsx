import React from 'react';
import { Target, Minimize2, Zap } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { H2, H3, Paragraph } from '@/components/ui/typography';

const OurApproach = () => {
  const approaches = [
    {
      icon: Target,
      title: "Analyse statt Annahmen",
      description: "Jede Zusammenarbeit startet mit Struktur, Zielen und KPIs. Wir setzen auf datenbasierte Entscheidungen und messbare Erfolge."
    },
    {
      icon: Minimize2,
      title: "UX-first Ansatz",
      description: "Inhalte, Design und Informationsarchitektur entstehen simultan. User Experience ist die Basis für alle digitalen Projekte."
    },
    {
      icon: Zap,
      title: "AI-gestützte Workflows",
      description: "Für Effizienz, Qualität und bessere Entscheidungen nutzen wir AI-Tools in Recherche, Content-Erstellung und Prozessoptimierung."
    },
    {
      icon: Target,
      title: "Transparente Kommunikation",
      description: "Direkter Zugang zum Gründer und Kernteam. Keine Zwischenebenen, keine Sales-Layer — nur ehrliche, klare Abstimmung."
    }
  ];

  return (
    <Section spacing="large" background="light">
      <Container size="default">
        <div className="text-center mb-12">
          <H2 className="text-[#0A0A0A] mb-4" alignment="center">
            Wie eine moderne Digitalagentur arbeitet
          </H2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
          {approaches.map((approach, index) => (
            <div key={index} className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg">
              <div className="h-12 w-12 bg-[#32b2ab]/10 rounded-full flex items-center justify-center mb-6">
                <approach.icon className="w-6 h-6 text-[#32b2ab]" />
              </div>
              <H3 className="text-[#0A0A0A] mb-3">
                {approach.title}
              </H3>
              <Paragraph className="text-[#555555]">
                {approach.description}
              </Paragraph>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default OurApproach;
