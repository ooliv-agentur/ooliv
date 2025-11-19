
import React from 'react';
import PageHero from '@/components/PageHero';

const FrankfurtWerbeagenturHero = () => {
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  // Dynamic subheadlines specifically for Frankfurt businesses
  const dynamicEndings = [
    "Professionelle digitale Präsenz",
    "Mehr Sichtbarkeit im Rhein-Main-Gebiet",
    "Website-Strategie für Ihr Wachstum"
  ];

  const videoPath = "/lovable-uploads/Startpage-german-english.mp4";
  
  return (
    <PageHero 
      isHomepage={true} 
      backgroundVideo={videoPath}
      title="Website-Strategie & Digitale Beratung in Frankfurt"
      subtitle="Frankfurt verdient mehr als Standard-Websites. Ich helfe Banken, Konzernen und Startups, digital auf dem nächsten Level zu sein – mit strategischer Expertise und messbaren Ergebnissen."
      dynamicPrefix="Sie bekommen:"
      dynamicSubheadlines={dynamicEndings}
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

export default FrankfurtWerbeagenturHero;
