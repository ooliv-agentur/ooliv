import React from 'react';
import { Target, Lightbulb, Rocket, Zap } from 'lucide-react';
import LocationServicesSection from '@/components/location/LocationServicesSection';

const DarmstadtAboutSection = () => {
  const services = [
    {
      title: "Strategic Discovery",
      description: "Wissenschaftsnahe Discovery Phase für Tech-Unternehmen im TU-Umfeld – technisch präzise, strategisch fundiert.",
      icon: <Target className="h-6 w-6" style={{ color: 'black' }} />,
      link: "/strategie"
    },
    {
      title: "Product & UX Strategy",
      description: "Product Strategies für Hightech-Startups und Engineering-Dienstleister mit technischer Tiefe.",
      icon: <Lightbulb className="h-6 w-6" style={{ color: 'black' }} />,
      link: "/produkt-ux-strategie"
    },
    {
      title: "AI Integration",
      description: "Strategic AI Integration für Tech-Companies – keine Buzzwords, sondern production-ready Solutions.",
      icon: <Zap className="h-6 w-6" style={{ color: 'black' }} />,
      link: "/ki-technologien"
    },
    {
      title: "Tech Strategy Advisory",
      description: "C-Level Advisory für wissenschaftsnahe B2B-Unternehmen in Europas Tech-Hub.",
      icon: <Rocket className="h-6 w-6" style={{ color: 'black' }} />,
      link: "/investition"
    }
  ];

  return (
    <LocationServicesSection
      location="Darmstadt"
      headline="Strategic Digital Advisory Darmstadt"
      description="Darmstadt ist Europas Tech-Hub mit TU, Forschungsinstituten und Innovation. Wir sprechen die Sprache technisch anspruchsvoller Unternehmen: Strategic Discovery für wissenschaftsnahe B2B-Firmen, Hightech-Startups und Engineering-Dienstleister. Technisch präzise, strategisch fundiert – kein oberflächliches Agentur-Marketing."
      services={services}
      ctaText="Strategic Discovery starten"
      ctaLink="/kontakt"
      gridCols={4}
    />
  );
};

export default DarmstadtAboutSection;
