
import React from 'react';
import PageHero from '@/components/PageHero';

const WiesbadenHero = () => {
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  // Dynamic subheadlines specifically for Wiesbaden businesses
  const dynamicEndings = [
    "online gefunden zu werden.",
    "professionelle Websites zum fairen Preis.",
    "mehr Anfragen über Google."
  ];

  const videoPath = "/lovable-uploads/Startpage-german-english.mp4";
  
  return (
    <PageHero 
      isHomepage={true} 
      backgroundVideo={videoPath}
      title="Werbeagentur Wiesbaden – ohne Agentur-Theater"
      subtitle="Ihre Wiesbadener Digitalagentur für Websites, SEO und Marketing. Wir arbeiten direkt mit Ihnen, ohne Zwischenstellen – ehrlich, transparent, messbar."
      dynamicPrefix="Wiesbadener Unternehmen vertrauen uns bei"
      dynamicSubheadlines={dynamicEndings}
      primaryCta={{
        text: "Projekt besprechen",
        link: "#",
        onClick: handleStartProject
      }}
      secondaryCta={{
        text: "Wiesbadener Erfolge",
        link: "/referenzen"
      }}
    />
  );
};

export default WiesbadenHero;
