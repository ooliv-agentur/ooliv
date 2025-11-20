
import React from 'react';
import PageHero from '@/components/PageHero';

const SchweizHero = () => {
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  // Dynamic subheadlines specifically for Swiss businesses
  const dynamicEndings = [
    "Mehrsprachige Websites (DE/FR/IT)",
    "SEO für den Schweizer Markt",
    "Transparente Preise in CHF"
  ];

  const videoPath = "/lovable-uploads/Startpage-german-english.mp4";
  
  return (
    <PageHero 
      isHomepage={true} 
      backgroundVideo={videoPath}
      title="Website-Strategie & Digitale Beratung für Schweizer KMUs"
      subtitle="Ihre Website bringt keine Anfragen? Ich helfe Schweizer B2B-Unternehmen, digital besser zu werden – mit Verständnis für den Schweizer Markt, mehrsprachigen Lösungen und transparenten Preisen."
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

export default SchweizHero;
