import React from 'react';
import { Target, Lightbulb, Rocket, Zap } from 'lucide-react';
import LocationServicesSection from '@/components/location/LocationServicesSection';

const WiesbadenAboutSection = () => {
  const services = [
    {
      title: "Strategic Discovery",
      description: "Intensive 4-6 Wochen Discovery Phase für strategische Klarheit vor großen Investments.",
      icon: <Target className="h-6 w-6" style={{ color: 'black' }} />,
      link: "/strategie"
    },
    {
      title: "Product & UX Strategy",
      description: "End-to-End Product Transformation mit messbaren Business Outcomes (+240% avg. Conversion Rate).",
      icon: <Lightbulb className="h-6 w-6" style={{ color: 'black' }} />,
      link: "/produkt-ux-strategie"
    },
    {
      title: "AI Integration",
      description: "Strategic AI Integration – keine Ad-hoc Implementierungen, sondern strategischer Framework mit Business Impact.",
      icon: <Zap className="h-6 w-6" style={{ color: 'black' }} />,
      link: "/ki-technologien"
    },
    {
      title: "C-Level Advisory",
      description: "Strategic Retainer für continuous Digital Transformation – kein Agentur-Theater, sondern echte Partnership.",
      icon: <Rocket className="h-6 w-6" style={{ color: 'black' }} />,
      link: "/investition"
    }
  ];

  return (
    <LocationServicesSection
      location="Wiesbaden"
      headline="Strategic Digital Advisory in Wiesbaden"
      description="Wiesbadener Unternehmen brauchen keine klassische Werbeagentur, sondern Strategic Leadership für ihre Digital Transformation. 16+ Jahre C-Level Advisory – von Strategic Discovery über AI Integration bis zur messbaren Umsetzung. Kein Agentur-Theater, sondern messbare Business Outcomes."
      services={services}
      ctaText="Strategic Discovery starten"
      ctaLink="/kontakt"
      gridCols={4}
    />
  );
};

export default WiesbadenAboutSection;
