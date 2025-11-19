
import React from 'react';
import PageHero from '@/components/PageHero';

const DarmstadtHero = () => {
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  // Dynamic subheadlines specifically for Darmstadt businesses
  const dynamicEndings = [
    "Websites für Tech-Unternehmen",
    "Mehr Sichtbarkeit in der TU-Region",
    "Digital-Strategie mit technischer Tiefe"
  ];

  const videoPath = "/lovable-uploads/Startpage-german-english.mp4";
  
  return (
    <PageHero 
      isHomepage={true} 
      backgroundVideo={videoPath}
      title="Website-Strategie & Digitale Beratung in Darmstadt"
      subtitle="Darmstadts Tech-Unternehmen brauchen mehr als Standard-Marketing. Ich entwickle digitale Strategien, die technisch präzise und strategisch fundiert sind – für Hightech-Startups und wissenschaftsnahe B2B-Firmen."
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

export default DarmstadtHero;
