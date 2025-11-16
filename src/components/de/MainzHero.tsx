import React from 'react';
import PageHero from '@/components/PageHero';

const MainzHero = () => {
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  const videoPath = "/lovable-uploads/Startpage-german-english.mp4";
  
  return (
    <PageHero 
      isHomepage={true} 
      backgroundVideo={videoPath}
      title="Werbeagentur Mainz – Digitale Lösungen für Unternehmen im Rhein-Main-Gebiet"
      subtitle="Strategische Websites, bessere Sichtbarkeit und klare digitale Prozesse. Seit 2008 direkt in Mainz."
      dynamicPrefix="Mainzer Unternehmen brauchen digitale Ergebnisse."
      primaryCta={{
        text: "Kostenloses Erstgespräch",
        link: "#",
        onClick: handleStartProject
      }}
      secondaryCta={undefined}
    />
  );
};

export default MainzHero;
