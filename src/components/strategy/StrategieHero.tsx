
import React from 'react';
import PageHero from '@/components/PageHero';

const StrategieHero = () => {
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  return (
    <PageHero
      title="Digitale Strategie? Klingt teuer. Ist aber notwendig."
      subtitle="Digitalagentur Mainz: Wir entwickeln klare Digitalstrategien, die zu Ihrem Budget passen – mit messbaren Zielen, realistischen Timelines und ohne Marketing-Geschwätz."
      primaryCta={{
        text: "Strategie entwickeln lassen",
        link: "#",
        onClick: handleStartProject
      }}
      secondaryCta={{
        text: "Strategie-Beispiele",
        link: "/referenzen"
      }}
    />
  );
};

export default StrategieHero;
