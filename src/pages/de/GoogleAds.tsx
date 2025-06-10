
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import GoogleAdsHero from '@/components/google-ads/GoogleAdsHero';
import GoogleAdsLeadGeneration from '@/components/google-ads/GoogleAdsLeadGeneration';
import GoogleAdsProcess from '@/components/google-ads/GoogleAdsProcess';
import CTA from '@/components/CTA';
import GoogleAdsSEOText from '@/components/google-ads/GoogleAdsSEOText';
import { useLanguage } from '@/contexts/LanguageContext';

const GermanGoogleAds = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('de');
  }, [setLanguage]);

  return (
    <PageLayout 
      seoText={<GoogleAdsSEOText />}
    >
      <Helmet>
        <title>Google Ads Agentur Mainz – Mehr Leads</title>
        <meta name="description" content="Mit ooliv als Google Ads Agentur in Mainz erreichen Sie neue Kunden. Wir optimieren Ihre Kampagnen für maximale Ergebnisse." />
        <meta name="keywords" content="Google Ads Agentur Mainz, PPC Agentur Mainz, Google Adwords Mainz, Suchmaschinenwerbung Mainz, Online Werbung Mainz, SEA Agentur Mainz" />
        <meta name="focus-keyword" content="Google Ads Agentur Mainz" />
      </Helmet>
      
      <GoogleAdsHero />
      <GoogleAdsLeadGeneration />
      <GoogleAdsProcess />
      <CTA 
        title="Starten Sie Ihre Google Ads Kampagne"
        subtitle="Lassen Sie uns gemeinsam eine erfolgreiche Google Ads Strategie entwickeln, die Ihnen qualifizierte Leads und messbare Ergebnisse bringt."
        primaryCta="Google Ads Projekt starten"
        secondaryCta="Strategiegespräch vereinbaren"
      />
    </PageLayout>
  );
};

export default GermanGoogleAds;
