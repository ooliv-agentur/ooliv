
import React from 'react';
import PageHero from '@/components/PageHero';

const DarmstadtHero = () => {
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  // Dynamic subheadlines specifically for Darmstadt businesses
  const dynamicEndings = [
    "Tech-Unternehmen digital zu positionieren.",
    "B2B-Marketing messbar zu machen.", 
    "wissenschaftsnahe Branchen zu erreichen."
  ];

  const videoPath = "/lovable-uploads/Startpage-german-english.mp4";
  
  return (
    <PageHero 
      isHomepage={true} 
      backgroundVideo={videoPath}
      title="Werbeagentur Darmstadt – strategisch statt oberflächlich"
      subtitle="Ihre Darmstädter Digitalagentur für Websites, SEO und Marketing. Technisch fundiert, auf den Punkt gebracht – keine leeren Versprechen."
      dynamicPrefix="Darmstädter Unternehmen profitieren von"
      dynamicSubheadlines={dynamicEndings}
      primaryCta={{
        text: "Projekt besprechen",
        link: "#",
        onClick: handleStartProject
      }}
      secondaryCta={{
        text: "Darmstädter Erfolge",
        link: "/referenzen"
      }}
    />
  );
};

export default DarmstadtHero;
