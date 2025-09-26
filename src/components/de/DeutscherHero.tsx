
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
    "strategische Klarheit",
    "optimale Nutzerführung", 
    "mehr Anfragen"
  ];
  
  return (
    <div className="relative">
      <PageHero
        isHomepage={true}
        title="Kostenloses Website-Konzept in 48 Stunden"
        subtitle="Ein klarer Plan für Ihre neue Website mit Seitenaufbau, Inhalten und Nutzerführung – komplett kostenfrei und ohne Verpflichtung. Sie entscheiden danach selbst, ob und wie es weitergeht."
        dynamicPrefix="Für"
        dynamicSubheadlines={dynamicEndings}
        primaryCta={{
          text: "Kostenloses Konzept",
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
