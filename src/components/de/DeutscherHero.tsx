
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
    "online sichtbar zu werden.",
    "mehr Leads zu generieren.",
    "mit ihrer Website zu überzeugen."
  ];
  
  return (
    <div className="relative">
      <PageHero
        isHomepage={true}
        title="ooliv – Digitalagentur in Mainz für B2B-Unternehmen"
        subtitle="Wir entwickeln digitale Lösungen für B2B-Unternehmen: Websites, SEO-Strategien, Content-Marketing und KI-Integration. Messbar mehr Leads, überregional erfolgreich. Seit 2008 vom Standort Mainz aus deutschlandweit tätig."
        dynamicPrefix="Wir helfen Unternehmen,"
        dynamicSubheadlines={dynamicEndings}
        primaryCta={{
          text: "Kostenloser Prototyp",
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
