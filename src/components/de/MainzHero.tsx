import React from 'react';
import PageHero from '@/components/PageHero';

const MainzHero = () => {
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  // Dynamic subheadlines specifically for Mainz businesses
  const dynamicEndings = [
    "Websites, die Kunden gewinnen.",
    "SEO, das in Mainz sichtbar macht.",
    "Digitale Ergebnisse für Mainzer Unternehmen."
  ];

  const videoPath = "/lovable-uploads/Startpage-german-english.mp4";
  
  return (
    <PageHero 
      isHomepage={true} 
      backgroundVideo={videoPath}
      title="Werbeagentur Mainz – Digitale Lösungen für Unternehmen im Rhein-Main-Gebiet"
      subtitle="Strategische Websites, bessere Sichtbarkeit und klare digitale Prozesse. Seit 2008 direkt in Mainz."
      dynamicPrefix="Mainzer Unternehmen brauchen"
      dynamicSubheadlines={dynamicEndings}
      primaryCta={{
        text: "Kostenloses Erstgespräch",
        link: "#",
        onClick: handleStartProject
      }}
    />
  );
};

export default MainzHero;
