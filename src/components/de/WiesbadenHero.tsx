
import React from 'react';
import PageHero from '@/components/PageHero';

const WiesbadenHero = () => {
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  // Dynamic subheadlines specifically for Wiesbaden businesses
  const dynamicEndings = [
    "regional sichtbar zu werden.",
    "digitale Marktführer zu werden.", 
    "nachhaltiges Wachstum zu erzielen."
  ];

  const videoPath = "/lovable-uploads/Startpage-german-english.mp4";
  
  return (
    <PageHero 
      isHomepage={true} 
      backgroundVideo={videoPath}
      title="Werbeagentur Wiesbaden"
      subtitle="Als spezialisierte Werbeagentur in Wiesbaden entwickeln wir digitale Strategien, die Ihr Unternehmen messbar voranbringen. Professionell, zielgerichtet und mit nachweisbaren Resultaten – für nachhaltigen Geschäftserfolg."
      dynamicPrefix="Wir unterstützen Wiesbadener Unternehmen dabei,"
      dynamicSubheadlines={dynamicEndings}
      primaryCta={{
        text: "Digitales Projekt starten",
        link: "#",
        onClick: handleStartProject
      }}
      secondaryCta={{
        text: "Unsere Arbeiten",
        link: "/referenzen"
      }}
    />
  );
};

export default WiesbadenHero;
