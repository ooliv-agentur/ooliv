
import React from 'react';
import PageHero from '@/components/PageHero';

const AiTechHero = () => {
  return (
    <PageHero
      badge="Responsible AI Implementation"
      title="AI Technologies That Power Our Work"
      subtitle="We integrate powerful AI technologies into your website projects—not to replace expertise, but to scale it. From fast content production to dynamic design and video, our AI stack supports the creative process without compromising quality."
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
