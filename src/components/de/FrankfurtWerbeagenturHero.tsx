
import React from 'react';
import PageHero from '@/components/PageHero';

const FrankfurtWerbeagenturHero = () => {
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  // Dynamic subheadlines specifically for Frankfurt businesses
  const dynamicEndings = [
    "online gefunden zu werden.",
    "mehr Kunden aus der Region.",
    "Websites, die verkaufen."
  ];

  const videoPath = "/lovable-uploads/Startpage-german-english.mp4";
  
  return (
    <PageHero 
      isHomepage={true} 
      backgroundVideo={videoPath}
      title="Werbeagentur Frankfurt – für Banken, Konzerne & Startups"
      subtitle="Ihre Frankfurter Digitalagentur für Websites, SEO und Marketing. Keine Zwischenstellen, keine leeren Versprechen – nur messbare Resultate."
      dynamicPrefix="Frankfurter Unternehmen brauchen"
      dynamicSubheadlines={dynamicEndings}
      primaryCta={{
        text: "Projekt besprechen",
        link: "#",
        onClick: handleStartProject
      }}
      secondaryCta={{
        text: "Frankfurter Erfolge",
        link: "/referenzen"
      }}
    />
  );
};

export default FrankfurtWerbeagenturHero;
