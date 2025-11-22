
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

  return (
    <div className="relative">
      <PageHero
        isHomepage={true}
        title="Digitale Klarheit, die verkauft."
        subtitle="Wir entwickeln Strategien, UX-Konzepte und Websites, die messbar mehr Leads generieren — ohne Agentur-Theater und ohne endlose Meetings."
        primaryCta={{
          text: "Kostenloses Konzept sichern",
          link: "#",
          onClick: handleOpenPrototypeForm
        }}
        secondaryCta={{
          text: "Arbeitsweise ansehen",
          link: "/ueber-uns"
        }}
      />
    </div>
  );
};

export default DeutscherHero;
