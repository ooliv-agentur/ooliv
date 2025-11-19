
import React from 'react';
import PageHero from '@/components/PageHero';
import webdevHero from '@/assets/illustrations/webdev-hero.png';

const WebDevHeroDE = () => {
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };
  
  return (
    <PageHero
      title="Ihre Website ist langsam? Ihre Konkurrenz freut sich."
      subtitle="Wir entwickeln Websites, die schnell laden, gut ranken und Anfragen generieren. Von WordPress bis Custom Code – technisch solide, nicht überladen."
      primaryCta={{
        text: "Meine Website schneller machen",
        link: "#",
        onClick: handleStartProject
      }}
      secondaryCta={{
        text: "Entwicklungs-Beispiele",
        link: "/referenzen"
      }}
      heroIllustration={{
        src: webdevHero,
        alt: "Moderne Webentwicklung - Isometrischer Workspace mit Code Editor, Browser und Performance Metriken",
        animate: true
      }}
    />
  );
};

export default WebDevHeroDE;
