
import React from 'react';
import PageHero from '@/components/PageHero';
import ScrollIndicator from '@/components/ScrollIndicator';

const ContentHero = () => {
  return (
    <div className="relative">
      <PageHero
        badge="Web Content Strategy & Creation"
        title="Strategic Web Content That Drives Business Results"
        subtitle="From tailored text and visuals to SEO-focused structure — we create content that builds trust, boosts visibility, and generates qualified leads."
        primaryCta={{
          text: "Start Your Content Project",
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

export default ContentHero;
