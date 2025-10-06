
import React from 'react';
import PageHero from '@/components/PageHero';

const FrankfurtWerbeagenturHero = () => {
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  // Dynamic subheadlines specifically for Frankfurt businesses
  const dynamicEndings = [
    "regional sichtbar zu werden.",
    "digitale Marktführer zu werden.", 
    "nachhaltiges Wachstum zu erzielen."
  ];

  const videoPath = "/lovable-uploads/Startpage-german-english.mp4";
  
  return (
    <PageHero 
      isHomepage={true} 
      backgroundVideo={videoPath}
      title="Werbeagentur Frankfurt – ohne Hochglanz-Versprechen"
      subtitle="Ihre Frankfurter Digitalagentur für Websites, SEO und Marketing. Keine Zwischenstellen, keine leeren Versprechen – nur messbare Resultate."
      dynamicPrefix="Frankfurter Unternehmen setzen auf uns für"
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
