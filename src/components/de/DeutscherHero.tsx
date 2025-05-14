
import React from 'react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/animations/Reveal';
import ScrollIndicator from '@/components/ScrollIndicator';

const DeutscherHero = () => {
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };
  
  return (
    <div className="relative">
      <PageHero
        badge="Werbeagentur Mainz"
        title="Werbeagentur Mainz"
        subtitle="Für messbare Ergebnisse im Web."
        description="Wir entwickeln Websites, die besser ranken, mehr konvertieren und gezielt neue Kunden gewinnen – ohne Templates, ohne Umwege."
        primaryCta={{
          text: "Projekt starten",
          link: "#",
          onClick: handleStartProject
        }}
        secondaryCta={{
          text: "Arbeiten ansehen",
          link: "/de/case-studies"
        }}
        isHomepage={true}
        videoSrc="/lovable-uploads/test.mp4"
        useVideo={true}
        videoOpacity={0.65}
      />
      <ScrollIndicator />
    </div>
  );
};

export default DeutscherHero;
