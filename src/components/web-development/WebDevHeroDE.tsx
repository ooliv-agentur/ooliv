
import React from 'react';
import PageHero from '@/components/PageHero';
import ScrollIndicator from '@/components/ScrollIndicator';

const WebDevHeroDE = () => {
  const handleStartProject = () => {
    window.dispatchEvent(new CustomEvent('open-lead-form'));
  };
  
  return (
    <div className="relative">
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
          link: "/case-studies"
        }}
      />
      <ScrollIndicator />
    </div>
  );
};

export default WebDevHeroDE;
