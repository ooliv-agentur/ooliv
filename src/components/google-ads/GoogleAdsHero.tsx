
import React from 'react';
import PageHero from '@/components/PageHero';

const GoogleAdsHero = () => {
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  return (
    <PageHero
      title="Google Ads Budget verbrannt? Wir holen es zurück."
      subtitle="Google Ads Agentur Mainz: Wir stoppen die Geldverschwendung und optimieren Ihre Kampagnen auf echte Anfragen. KI-gestützt, transparent, ohne Agentur-Blabla."
      primaryCta={{
        text: "Ads-Kampagne retten",
        link: "#",
        onClick: handleStartProject
      }}
      secondaryCta={{
        text: "Erfolge ansehen",
        link: "/referenzen"
      }}
    />
  );
};

export default GoogleAdsHero;
