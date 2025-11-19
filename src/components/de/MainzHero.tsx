import React from 'react';
import PageHero from '@/components/PageHero';

const MainzHero = () => {
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  const videoPath = "/lovable-uploads/Startpage-german-english.mp4";
  
  return (
    <PageHero 
      isHomepage={true} 
      backgroundVideo={videoPath}
      title="Website-Strategie & Digitale Beratung in Mainz"
      subtitle="Ihre Website bringt keine Anfragen? Lassen Sie uns das ändern. Ich helfe Mainzer Unternehmen, digital besser zu werden – mit klaren Strategien, durchdachter UX und messbaren Ergebnissen."
      dynamicPrefix="Sie bekommen:"
      dynamicSubheadlines={["Mehr Website-Anfragen", "Bessere Google-Sichtbarkeit", "Klare digitale Strategie"]}
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

export default MainzHero;
