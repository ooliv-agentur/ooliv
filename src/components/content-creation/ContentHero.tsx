
import React from 'react';
import PageHero from '@/components/PageHero';

const ContentHero = () => {
  return (
    <PageHero
      badge="Strategy, Message & Storytelling"
      title="Tailored Website Content That Converts"
      subtitle="From sharp messaging to standout visuals — we create the content your website needs to generate trust, leads, and long-term relevance."
      primaryCta={{
        text: "Start Your Project",
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
