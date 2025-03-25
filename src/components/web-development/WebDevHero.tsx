
import React from 'react';
import PageHero from '@/components/PageHero';
import ScrollIndicator from '@/components/ScrollIndicator';

const WebDevHero = () => {
  return (
    <div className="relative">
      <PageHero
        badge="Custom Development Solutions"
        title="Web Development That Drives Business Growth"
        subtitle="Scalable, secure, and conversion-focused websites — built to match your business, tools, and long-term goals."
        primaryCta={{
          text: "Start Your Project",
          link: "/contact"
        }}
        secondaryCta={{
          text: "View Case Studies",
          link: "/case-studies"
        }}
      />
      <ScrollIndicator />
    </div>
  );
};

export default WebDevHero;
