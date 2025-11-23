import React from 'react';
import { Code, Building2, Briefcase, Hammer, Heart, ShoppingCart, Home, MapPin } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { H2, Paragraph } from '@/components/ui/typography';

const TargetIndustries = () => {
  const industries = [
    { icon: Code, label: "Technologie" },
    { icon: Code, label: "SaaS" },
    { icon: Briefcase, label: "Beratung" },
    { icon: Building2, label: "Bau & Industrie" },
    { icon: Heart, label: "Gesundheit & MedTech" },
    { icon: ShoppingCart, label: "Handel & E-Commerce" },
    { icon: Home, label: "Immobilien" },
    { icon: MapPin, label: "Lokale Dienstleister" }
  ];

  return (
    <Section spacing="large" background="light">
      <Container size="default">
        <div className="text-center mb-12">
          <H2 className="text-[#0A0A0A] mb-4" alignment="center">
            Für wen wir arbeiten
          </H2>
          <Paragraph className="text-lg text-[#555555] max-w-3xl mx-auto" alignment="center">
            Wir unterstützen Unternehmen, die klare Strukturen, digitale Sichtbarkeit und effiziente Workflows benötigen.
          </Paragraph>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {industries.map((industry, index) => (
            <div key={index} className="bg-white p-4 sm:p-6 rounded-lg text-center hover:shadow-md transition-shadow">
              <industry.icon className="w-8 h-8 text-[#32b2ab] mx-auto mb-3" />
              <p className="text-[#555555] font-medium text-sm">{industry.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default TargetIndustries;
