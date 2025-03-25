
import React from 'react';
import PageHero from '@/components/PageHero';

const GoogleAdsHero = () => {
  return (
    <PageHero
      badge="Traffic to Leads to Results"
      title="Google Ads in Mainz That Turn Traffic to Leads"
      subtitle="We help B2B companies attract qualified leads and turn traffic into measurable results — through high-performance Google Ads campaigns, AI-powered targeting, and conversion-optimized landing pages."
      primaryCta={{
        text: "Start Your Campaign",
        link: "/contact"
      }}
      secondaryCta={{
        text: "Request a Free Audit",
        link: "/contact"
      }}
    />
  );
};

export default GoogleAdsHero;
