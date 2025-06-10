
import React from 'react';
import PageHero from '@/components/PageHero';

const ContactHero = () => {
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };
  
  return (
    <PageHero
      title="Lassen Sie uns über Ihr Projekt sprechen"
      subtitle="Wir betreuen Unternehmen in ganz Europa – mit persönlicher Betreuung und klarer Kommunikation."
      primaryCta={{
        text: "Projekt starten",
        link: "#",
        onClick: handleStartProject
      }}
      secondaryCta={{
        text: "Arbeiten ansehen",
        link: "/referenzen"
      }}
    />
  );
};

export default ContactHero;
