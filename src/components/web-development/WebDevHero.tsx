
import React from 'react';
import PageHero from '@/components/PageHero';

const WebDevHero = () => {
  return (
    <PageHero
      badge="Scalable Technical Solutions"
      title="Web Development That Drives Business Growth"
      subtitle="Scalable, secure, and conversion-focused websites—built to match your workflows, tech stack, and long-term goals."
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

export default WebDevHero;
