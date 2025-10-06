
import React from 'react';
import PageHero from '@/components/PageHero';

const SEOHeroDE = () => {
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  return (
    <PageHero
      title="Google kennt Ihre Website nicht? Wir ändern das."
      subtitle="SEO Agentur Mainz: Wir bringen Ihre Website auf Seite 1 – mit Strategie, Content und Technik. Keine Zauberei, sondern ehrliche Arbeit. Messbare Ergebnisse ab Monat 3."
      primaryCta={{
        text: "Zeigt mir, wie SEO funktioniert",
        link: "#",
        onClick: handleStartProject
      }}
      secondaryCta={{
        text: "SEO-Erfolge ansehen",
        link: "/referenzen"
      }}
    />
  );
};

export default SEOHeroDE;
