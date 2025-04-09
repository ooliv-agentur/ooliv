
import React from 'react';
import PageHero from '@/components/PageHero';
import { useLanguage } from '@/contexts/LanguageContext';

const GoogleAdsHero = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';
  
  if (isGerman) {
    return (
      <PageHero
        badge="Google Ads"
        title="Google Ads Agentur Mainz – Leads statt nur Klicks"
        subtitle="Wir entwickeln und optimieren Google Ads Kampagnen, die nicht nur sichtbar sind, sondern qualifizierte Anfragen generieren. KI-gestützt, datenbasiert, auf Conversion ausgelegt."
        primaryCta={{
          text: "Kampagne starten",
          link: "#"
        }}
        secondaryCta={{
          text: "Kostenlose Analyse anfordern",
          link: "#"
        }}
      />
    );
  }
  
  return (
    <PageHero
      badge="Google Ads"
      title="Google Ads Agency in Mainz – Built for B2B Leads, Not Just Clicks"
      subtitle="We design and optimize Google Ads campaigns that don't just generate traffic — they bring in qualified B2B leads. AI-powered, conversion-driven, and performance-monitored."
      primaryCta={{
        text: "Launch Your Campaign",
        link: "#"
      }}
      secondaryCta={{
        text: "Request Free Audit",
        link: "#"
      }}
    />
  );
};

export default GoogleAdsHero;
