
import React from 'react';
import PageHero from '@/components/PageHero';
import ScrollIndicator from '@/components/ScrollIndicator';

const WebDevHeroDE = () => {
  return (
    <div className="relative">
      <PageHero
        badge="Maßgeschneiderte Entwicklungslösungen"
        title="WordPress Agentur Mainz für skalierbare Unternehmenslösungen"
        subtitle="Maßgeschneiderte Websites – schnell, sicher, suchmaschinenfreundlich. Von WordPress bis Custom Code."
        primaryCta={{
          text: "Projekt starten",
          link: "/de/kontakt"
        }}
        secondaryCta={{
          text: "Fallstudien ansehen",
          link: "/de/case-studies"
        }}
      />
      <ScrollIndicator />
    </div>
  );
};

export default WebDevHeroDE;
