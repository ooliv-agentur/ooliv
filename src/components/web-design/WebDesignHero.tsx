
import React from 'react';
import PageHero from '@/components/PageHero';
import ScrollIndicator from '@/components/ScrollIndicator';

const WebDesignHero = () => {
  return (
    <div className="relative">
      <PageHero
        badge="Strategic Webdesign for Business Growth"
        title="Strategic Web Design That Delivers Results"
        subtitle="We design websites that bring in the right people, build trust, and generate real business growth — with clear structure, strong content, and fast performance."
        primaryCta={{
          text: "Start Your Web Project",
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

export default WebDesignHero;
