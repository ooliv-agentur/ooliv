
import React from 'react';
import PageHero from '@/components/PageHero';

const WiesbadenHero = () => {
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  // Dynamic subheadlines specifically for Wiesbaden businesses
  const dynamicEndings = [
    "Mehr Kunden durch bessere Website",
    "Bei Google gefunden werden",
    "Digitale Strategie, die funktioniert"
  ];

  const videoPath = "/lovable-uploads/Startpage-german-english.mp4";
  
  return (
    <PageHero 
      isHomepage={true} 
      backgroundVideo={videoPath}
      title="Website-Strategie & Digitale Beratung in Wiesbaden"
      subtitle="Ihre Website sieht gut aus, aber bringt keine Anfragen? Ich helfe Wiesbadener Unternehmen, aus Besuchern Kunden zu machen – mit durchdachter UX und klarer Strategie."
      dynamicPrefix="Sie bekommen:"
      dynamicSubheadlines={dynamicEndings}
      benefitsVariant="solid"
      primaryCta={{
        text: "Kostenloses Erstgespräch",
        link: "#",
        onClick: handleStartProject
      }}
      secondaryCta={{
        text: "Erfolgsbeispiele ansehen",
        link: "/referenzen"
      }}
    />
  );
};

export default WiesbadenHero;
