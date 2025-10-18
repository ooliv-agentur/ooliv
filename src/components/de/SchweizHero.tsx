
import React from 'react';
import PageHero from '@/components/PageHero';

const SchweizHero = () => {
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  // Dynamic subheadlines specifically for Swiss businesses
  const dynamicEndings = [
    "mehrsprachige Websites.",
    "SEO für .ch-Domains.",
    "Marketing ohne Agentur-Overhead."
  ];

  const videoPath = "/lovable-uploads/Startpage-german-english.mp4";
  
  return (
    <PageHero 
      isHomepage={true} 
      backgroundVideo={videoPath}
      title="Digitalagentur für Schweizer B2B-Unternehmen"
      subtitle="Webdesign, SEO und Marketing aus Deutschland – optimiert für den Schweizer Markt. Transparente Preise in CHF, persönliche Betreuung auf Augenhöhe."
      dynamicPrefix="Schweizer KMUs brauchen"
      dynamicSubheadlines={dynamicEndings}
      primaryCta={{
        text: "Schweizer Projekt starten",
        link: "#",
        onClick: handleStartProject
      }}
      secondaryCta={{
        text: "Unsere Erfolge",
        link: "/referenzen"
      }}
    />
  );
};

export default SchweizHero;
