
import React from 'react';
import PageHero from '@/components/PageHero';

const GoogleAdsHero = () => {
  return (
    <PageHero
      title="Google Ads Agentur Mainz – Leads statt nur Klicks"
      subtitle="Wir entwickeln und optimieren Google Ads Kampagnen, die nicht nur sichtbar sind, sondern qualifizierte Anfragen generieren. KI-gestützt, datenbasiert, auf Conversion ausgelegt."
      primaryCta={{
        text: "Kampagne starten",
        link: "/kontakt"
      }}
      secondaryCta={{
        text: "Kostenlose Analyse anfordern",
        link: "/kontakt"
      }}
    />
  );
};

export default GoogleAdsHero;
