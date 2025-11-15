import React from 'react';
import PageHero from '@/components/PageHero';

const MainzHero = () => {
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  // Dynamic subheadlines specifically for Mainz businesses
  const dynamicEndings = [
    "digital erfolgreich zu werden.",
    "mehr Kunden aus der Region.",
    "Websites, die wirklich verkaufen."
  ];

  const videoPath = "/lovable-uploads/Startpage-german-english.mp4";
  
  return (
    <PageHero 
      isHomepage={true} 
      backgroundVideo={videoPath}
      title="Werbeagentur Mainz – Digital, persönlich, vor Ort"
      subtitle="Ihre Mainzer Digitalagentur für Websites, SEO und Marketing. Seit 2008 inhabergeführt, transparent und messbar erfolgreich."
      dynamicPrefix="Mainzer Unternehmen brauchen"
      dynamicSubheadlines={dynamicEndings}
      primaryCta={{
        text: "Kostenloses Erstgespräch",
        link: "#",
        onClick: handleStartProject
      }}
      secondaryCta={{
        text: "Unsere Referenzen",
        link: "/referenzen"
      }}
    />
  );
};

export default MainzHero;
