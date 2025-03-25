
import React from 'react';
import PageHero from '@/components/PageHero';

const AiTechHero = () => {
  return (
    <PageHero
      badge="Responsible, Strategic, Human-Led"
      title="AI in Mainz — Smarter Web Projects with ooliv"
      subtitle="We use AI to accelerate design, content, and development workflows — without replacing human expertise. Every project combines the speed of AI with the precision of strategy."
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

export default AiTechHero;
