import React from 'react';
import { Grid2X2, Sparkles, Code2, Phone } from 'lucide-react';
import LocationServicesSection from '@/components/location/LocationServicesSection';

const WiesbadenAboutSection = () => {
  const services = [
    {
      title: "Webdesign",
      description: "Professionelle Websites, die Ihre Wiesbadener Zielgruppe überzeugen und Vertrauen schaffen.",
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
      description: "Bessere Sichtbarkeit in Wiesbaden und dem Rhein-Main-Gebiet für mehr qualifizierte Anfragen.",
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
      location="Wiesbaden"
      headline="ooliv in Wiesbaden – für messbare Erfolge"
      description="Wir entwickeln strategische Online-Auftritte, die Ihre Zielgruppe in Wiesbaden und dem Rhein-Main-Gebiet erreichen und Geschäftsergebnisse verbessern. Professionell, zielgerichtet und mit nachweisbaren Resultaten."
      services={services}
      ctaText="Mehr erfahren"
      ctaLink="/strategie"
      gridCols={4}
    />
  );
};

export default WiesbadenAboutSection;
