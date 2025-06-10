
import React from 'react';
import PageHero from '@/components/PageHero';

const AboutUsHero = () => {
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  return (
    <PageHero
      title="Marketing Agentur Mainz"
      subtitle="Wir verbinden Kreativität, Strategie und Technologie, um Websites zu erstellen, die Unternehmenswachstum fördern. Sie arbeiten immer direkt mit unserem Gründer zusammen."
      primaryCta={{
        text: "Projekt starten",
        link: "#",
        onClick: handleStartProject
      }}
      secondaryCta={{
        text: "Referenzen ansehen",
        link: "/referenzen"
      }}
    />
  );
};

export default AboutUsHero;
