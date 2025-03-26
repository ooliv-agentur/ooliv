
import React from 'react';
import PageHero from '@/components/PageHero';

const GoogleAdsHero = () => {
  return (
    <PageHero
      badge="Built for B2B Leads, Not Just Clicks"
      title="Google Ads Agency in Mainz – Built for B2B Leads, Not Just Clicks"
      subtitle="We design and optimize Google Ads campaigns that don't just generate traffic — they bring in qualified B2B leads. AI-powered, conversion-driven, and performance-monitored."
      primaryCta={{
        text: "Launch Your Campaign",
        link: "/contact"
      }}
      secondaryCta={{
        text: "Request Free Audit",
        link: "/contact"
      }}
    />
  );
};

export default GoogleAdsHero;

