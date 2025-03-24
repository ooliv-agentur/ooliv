
import React from 'react';
import PageHero from '@/components/PageHero';

const WebDesignHero = () => {
  return (
    <PageHero
      badge="Strategic Design for Business Growth"
      title="Strategic Web Design That Delivers Results"
      subtitle="We build websites that attract the right visitors, earn trust, and convert—tailored for higher conversions, lead generation, and measurable business growth."
      primaryCta={{
        text: "Start Your Web Project",
        link: "/contact"
      }}
      secondaryCta={{
        text: "View Case Studies",
        link: "/case-studies"
      }}
    />
  );
};

export default WebDesignHero;
