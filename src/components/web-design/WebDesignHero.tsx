
import React from 'react';
import PageHero from '@/components/PageHero';
import ScrollIndicator from '@/components/ScrollIndicator';

const WebDesignHero = () => {
  return (
    <div className="relative">
      <PageHero
        badge="Strategic Webdesign for Business Growth"
        title="Webdesign Services That Deliver Results"
        subtitle="We build websites that attract the right visitors, convert leads, and help you grow. Every design is strategically aligned with your business goals."
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
