
import React from 'react';
import PageHero from '@/components/PageHero';

const SEOHero = () => {
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  return (
    <PageHero
      badge="SEO Optimization"
      title="More Inquiries Through Your Website – Guaranteed Measurable"
      subtitle="SEO services in Mainz that turn your website into a scalable growth engine. Strategy-first optimization to boost visibility, attract B2B leads, and achieve long-term business results."
      primaryCta={{
        text: "Projekt starten",
        link: "#",
        onClick: handleStartProject
      }}
      secondaryCta={{
        text: "Über ooliv",
        link: "/ueber-uns"
      }}
    />
  );
};

export default SEOHero;
