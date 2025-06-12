
import React from 'react';
import PageHero from '@/components/PageHero';

const WiesbadenHero = () => {
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  // Dynamic subheadlines specifically for Wiesbaden businesses
  const dynamicEndings = [
    "strategisch zu planen.",
    "technisch perfekt umzusetzen.", 
    "messbar erfolgreich zu werden."
  ];

  const videoPath = "/lovable-uploads/Startpage-german-english.mp4";
  
  return (
    <PageHero 
      isHomepage={true} 
      backgroundVideo={videoPath}
      title="Wo Strategie auf Umsetzung trifft — in Wiesbaden."
      subtitle="Wir sind Ihre spezialisierte Digitalagentur, die Websites strategisch plant und technisch perfekt umsetzt. Seit über 16 Jahren entwickeln wir für B2B-Unternehmen in Wiesbaden und der Region Websites, die Ihr Unternehmen digital voranbringen."
      dynamicPrefix="Wir unterstützen Wiesbadener Unternehmen dabei, digital"
      dynamicSubheadlines={dynamicEndings}
      primaryCta={{
        text: "Mehr erfahren",
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
