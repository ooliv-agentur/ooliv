
import React from 'react';
import PageHero from '@/components/PageHero';
import ScrollIndicator from '@/components/ScrollIndicator';

const WebDevHero = () => {
  return (
    <div className="relative">
      <PageHero
        badge="Custom Development Solutions"
        title="Web Development That Drives Business Growth"
        subtitle="Scalable, secure, and search-optimized websites – from custom WordPress to pure code."
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
