import React from 'react';
import { Target, Lightbulb, Rocket, Zap } from 'lucide-react';
import LocationServicesSection from '@/components/location/LocationServicesSection';

const FrankfurtWerbeagenturAboutSection = () => {
  const services = [
    {
      title: "Strategic Discovery",
      description: "Comprehensive Discovery Phase für Banken, Konzerne & Startups in Deutschlands Business-Hub.",
      icon: <Target className="h-6 w-6" style={{ color: 'black' }} />,
      link: "/strategie"
    },
    {
      title: "Product & UX Strategy",
      description: "Skalierbare Product Strategies für Frankfurts anspruchsvolle B2B-Zielgruppen mit klarem ROI-Focus.",
      icon: <Lightbulb className="h-6 w-6" style={{ color: 'black' }} />,
      link: "/produkt-ux-strategie"
    },
    {
      title: "AI Integration",
      description: "Strategic AI Integration Advisory – von Use Case Identification bis Production-Ready Implementation.",
      icon: <Zap className="h-6 w-6" style={{ color: 'black' }} />,
      link: "/ki-technologien"
    },
    {
      title: "Strategic Partnership",
      description: "Langfristige C-Level Advisory für Frankfurts führende B2B-Unternehmen.",
      icon: <Rocket className="h-6 w-6" style={{ color: 'black' }} />,
      link: "/investition"
    }
  ];

  return (
    <LocationServicesSection
      location="Frankfurt"
      headline="Strategic Digital Advisory Frankfurt"
      description="Frankfurt ist Deutschlands Business-Hub – von Banken über internationale Konzerne bis zur wachsenden Startup-Szene. Wir entwickeln Strategic Frameworks, die diesem Anspruch gerecht werden: skalierbar, professionell und mit klarem ROI-Focus. 16+ Jahre Track Record in Digital Strategy Leadership."
      services={services}
      ctaText="Strategiegespräch vereinbaren"
      ctaLink="/kontakt"
      gridCols={4}
    />
  );
};

export default FrankfurtWerbeagenturAboutSection;
