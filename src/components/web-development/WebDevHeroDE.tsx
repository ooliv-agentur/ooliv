
import React from 'react';
import PageHero from '@/components/PageHero';

const WebDevHeroDE = () => {
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };
  
  return (
    <PageHero
      badge="Webentwicklung"
      title="WordPress Agentur Mainz für skalierbare Unternehmenslösungen"
      subtitle="Maßgeschneiderte Websites – schnell, sicher, suchmaschinenfreundlich. Von WordPress bis Custom Code."
      primaryCta={{
        text: "Projekt starten",
        link: "#",
        onClick: handleStartProject
      }}
      secondaryCta={{
        text: "Fallstudien ansehen",
        link: "/de/case-studies"
      }}
    />
  );
};

export default WebDevHeroDE;
