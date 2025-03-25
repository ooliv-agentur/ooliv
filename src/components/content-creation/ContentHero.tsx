
import React from 'react';
import PageHero from '@/components/PageHero';

const ContentHero = () => {
  return (
    <PageHero
      badge="Web Content Strategy & Creation"
      title="Strategic Web Content That Drives Business Results"
      subtitle="From tailored text and visuals to SEO-focused structure — we create content that builds trust, boosts visibility, and generates qualified leads."
      primaryCta={{
        text: "Start Your Content Project",
        link: "/contact"
      }}
      secondaryCta={{
        text: "View Case Studies",
        link: "/case-studies"
      }}
    />
  );
};

export default ContentHero;
