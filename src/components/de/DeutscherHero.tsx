
import React, { useState } from 'react';
import PageHero from '@/components/PageHero';

const DeutscherHero = () => {
  const [isDispatching, setIsDispatching] = useState(false);
  
  const handleOpenPrototypeForm = () => {
    if (isDispatching) {
      console.log('🚫 DeutscherHero: Already dispatching, ignoring click');
      return;
    }
    
    setIsDispatching(true);
    console.log('🚀 DeutscherHero: "Kostenloser Prototyp" button clicked');
    
    setTimeout(() => {
      const event = new CustomEvent('open-lead-form', { detail: { source: 'DeutscherHero', mode: 'prototype' } });
      window.dispatchEvent(event);
      console.log('📡 DeutscherHero: open-lead-form event dispatched with prototype mode');
      
      setTimeout(() => {
        setIsDispatching(false);
      }, 1000);
    }, 0);
  };

  const dynamicEndings = [
    "Websites, die Anfragen generieren.",
    "Nutzerführung, die konvertiert.", 
    "Strategien mit messbaren Ergebnissen."
  ];
  
  return (
    <div className="relative">
      <PageHero
        isHomepage={true}
        title="Ihre Website bringt keine Anfragen? Das ändern wir."
        subtitle="Kostenloses Website-Konzept in 48h: Klarer Plan für Aufbau, Inhalte und Nutzerführung – ohne Verpflichtung. Sie entscheiden danach, ob Sie mit uns weitermachen wollen."
        dynamicPrefix=""
        dynamicSubheadlines={dynamicEndings}
        primaryCta={{
          text: "Kostenloses Konzept sichern",
          link: "#",
          onClick: handleOpenPrototypeForm
        }}
        secondaryCta={{
          text: "Über ooliv",
          link: "/ueber-uns"
        }}
      />
    </div>
  );
};

export default DeutscherHero;
