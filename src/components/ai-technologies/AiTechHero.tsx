
import React from 'react';
import PageHero from '@/components/PageHero';

const AiTechHero = () => {
  return (
    <PageHero
      badge="Responsible, Strategic, Human-Led"
      title="AI Technologies That Power Our Work"
      subtitle="We use AI to accelerate web design, content, and development workflows—without replacing human expertise. Every ooliv project combines the speed of AI with the precision of strategic thinking."
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
