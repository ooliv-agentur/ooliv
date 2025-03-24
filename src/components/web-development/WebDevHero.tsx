
import React from 'react';
import PageHero from '@/components/PageHero';

const WebDevHero = () => {
  return (
    <PageHero
      badge="Scalable Technical Solutions"
      title="Web Development That Grows With Your Business"
      subtitle="From WordPress to custom web apps—scalable solutions tailored to your workflows and goals."
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

export default WebDevHero;
