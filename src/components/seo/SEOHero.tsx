
import React from 'react';
import PageHero from '@/components/PageHero';

const SEOHero = () => {
  return (
    <PageHero
      badge="Search Engine Optimization"
      title="SEO Optimization That Drives B2B Growth"
      subtitle="We turn your website into a traffic magnet. Strategic SEO services that boost visibility, attract qualified leads, and drive measurable results."
      primaryCta={{
        text: "Start Your SEO Strategy",
        link: "/contact"
      }}
      secondaryCta={{
        text: "Get a Free SEO Audit",
        link: "/contact"
      }}
    />
  );
};

export default SEOHero;
