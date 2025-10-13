import React from 'react';
import PageHero from '@/components/PageHero';

const LandingpageOptimierungHero = () => {
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  return (
    <PageHero
      badge="Für Marketing-Teams und Unternehmen mit bestehendem Website-Traffic."
      title="Ihre Landingpage bringt keine Leads? Das ändern wir."
      subtitle="Kostenloses Conversion-Konzept in 48 h – mit klaren Empfehlungen zur Optimierung und Nutzerführung."
      description="Wir analysieren Ihre Landingpage oder Website, identifizieren Schwachstellen im Conversion-Flow und zeigen, wie Sie mehr Anfragen und Verkäufe erzielen."
      primaryCta={{
        text: "Landingpage jetzt analysieren →",
        link: "#",
        onClick: handleStartProject
      }}
      secondaryCta={{
        text: "Beispiele ansehen",
        link: "/referenzen"
      }}
    />
  );
};

export default LandingpageOptimierungHero;
