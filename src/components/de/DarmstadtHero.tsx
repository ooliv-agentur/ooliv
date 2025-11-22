
import React from 'react';
import PageHero from '@/components/PageHero';

const DarmstadtHero = () => {
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  // Dynamic subheadlines specifically for Darmstadt businesses
  const dynamicEndings = [
    "Websites, die Tech-Kunden ansprechen.",
    "mehr Sichtbarkeit in der TU-Region.",
    "weniger Werbekosten, mehr Anfragen."
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
