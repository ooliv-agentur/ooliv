import React from 'react';
import { Grid2X2, Sparkles, Code2, Phone } from 'lucide-react';
import LocationServicesSection from '@/components/location/LocationServicesSection';

const FrankfurtWerbeagenturAboutSection = () => {
  const services = [
    {
      title: "Webdesign",
      description: "Professionelle Websites, die Ihre Frankfurter Zielgruppe überzeugen und Vertrauen schaffen.",
      icon: <Grid2X2 className="h-6 w-6" style={{ color: 'black' }} />,
      link: "/webdesign"
    },
    {
      title: "Entwicklung",
      description: "Technisch ausgereifte Lösungen für nachhaltiges Wachstum Ihres Unternehmens.",
      icon: <Sparkles className="h-6 w-6" style={{ color: 'black' }} />,
      link: "/webentwicklung"
    },
    {
      title: "SEO",
      description: "Bessere Sichtbarkeit in Frankfurt und dem Rhein-Main-Gebiet für mehr qualifizierte Anfragen.",
      icon: <Code2 className="h-6 w-6" style={{ color: 'black' }} />,
      link: "/seo-optimierung"
    },
    {
      title: "Strategie",
      description: "Datenbasierte Konzepte, die Ihre Marktposition stärken und Umsätze steigern.",
      icon: <Phone className="h-6 w-6" style={{ color: 'black' }} />,
      link: "/strategie"
    }
  ];

  return (
    <LocationServicesSection
      location="Frankfurt"
      headline="ooliv in Frankfurt – für messbare Erfolge"
      description="Frankfurt ist Deutschlands Business-Hub – von Banken über internationale Konzerne bis zur wachsenden Startup-Szene. Wir entwickeln digitale Lösungen, die diesem Anspruch gerecht werden: skalierbar, professionell und mit klarem ROI-Focus für anspruchsvolle B2B-Zielgruppen."
      services={services}
      ctaText="Mehr erfahren"
      ctaLink="/strategie"
      gridCols={4}
    />
  );
};

export default FrankfurtWerbeagenturAboutSection;
