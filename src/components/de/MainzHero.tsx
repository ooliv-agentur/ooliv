import React from 'react';
import PageHero from '@/components/PageHero';
import TrustIndicators from '@/components/hero/TrustIndicators';

const MainzHero = () => {
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  const videoPath = "/lovable-uploads/Startpage-german-english.mp4";
  
  return (
    <>
      <PageHero 
        isHomepage={true} 
        backgroundVideo={videoPath}
        title="Website-Strategie & Digitale Beratung in Mainz"
        subtitle="Ihre Website bringt keine Anfragen? Lassen Sie uns das ändern. Ich helfe Mainzer Unternehmen, digital besser zu werden – mit klaren Strategien, durchdachter UX und messbaren Ergebnissen."
        dynamicPrefix="Sie bekommen:"
        dynamicSubheadlines={["Mehr Website-Anfragen", "Bessere Google-Sichtbarkeit", "Klare digitale Strategie"]}
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
      <TrustIndicators
        variant="default"
        metrics={[
          { icon: 'users', value: '30+', label: 'Mainzer Unternehmen' },
          { icon: 'trending', value: '200%', label: 'Ø Anfragen-Steigerung' },
          { icon: 'star', value: '5.0/5', label: 'Google Bewertung' },
        ]}
      />
    </>
  );
};

export default MainzHero;
