
import React from 'react';
import PageHero from '@/components/PageHero';

const SEOHero = () => {
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };
  
  const handleRequestAudit = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };
  
  return (
    <PageHero
      badge="SEO Optimization"
      title="SEO Services in Mainz That Deliver Visibility & Qualified Leads"
      subtitle="We turn your website into a scalable growth engine. Strategy-first SEO to boost visibility, attract B2B leads, and achieve long-term business results — in Mainz and beyond."
      primaryCta={{
        text: "Start Your SEO Strategy",
        link: "#",
        onClick: handleStartProject
      }}
      secondaryCta={{
        text: "Request Free SEO Audit",
        link: "#",
        onClick: handleRequestAudit
      }}
    />
  );
};

export default SEOHero;
