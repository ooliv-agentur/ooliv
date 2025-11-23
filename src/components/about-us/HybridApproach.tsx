import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { H2, H3, Paragraph } from '@/components/ui/typography';

const HybridApproach = () => {
  const serviceLinks = [
    { label: "Digitale Transformation", url: "/digitale-transformation-strategie" },
    { label: "UX-Konzeption", url: "/ux-konzeption" },
    { label: "Webdesign & Entwicklung", url: "/webdesign-entwicklung" },
    { label: "SEO & Performance", url: "/seo-performance" },
    { label: "AI-Workflows", url: "/ai-workflows" },
    { label: "Referenzen", url: "/referenzen" },
    { label: "Kontakt", url: "/kontakt" }
  ];

  return (
    <Section spacing="large" background="light">
      <Container size="default">
        <div className="max-w-4xl mx-auto">
          <H2 className="text-[#0A0A0A] mb-6" alignment="center">
            Unser hybrider Ansatz: Strategie + UX + Entwicklung + AI
          </H2>
          
          <Paragraph className="text-lg text-[#555555] mb-8" alignment="center">
            Wir arbeiten nicht sequentiell, sondern parallel. Strategie, UX, Design, Content, Entwicklung und AI-Workflows greifen ineinander und eliminieren typische Agentur-Silos. Das Ergebnis: Schnellere Entscheidungen, bessere Ergebnisse und ganzheitliche digitale Lösungen.
          </Paragraph>

          <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg">
            <H3 className="text-[#0A0A0A] mb-4">
              Unsere Leistungen im Überblick
            </H3>
            <div className="grid md:grid-cols-2 gap-4">
              {serviceLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.url}
                  className="flex items-center justify-between p-4 bg-[#F5F7F7] rounded-lg hover:bg-[#0BC3C3]/10 transition-colors group"
                >
                  <span className="text-[#555555] font-medium group-hover:text-[#0BC3C3]">
                    {link.label}
                  </span>
                  <ArrowRight className="w-5 h-5 text-[#0BC3C3] opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default HybridApproach;
