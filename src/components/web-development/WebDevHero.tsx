
import React from 'react';
import PageHero from '@/components/PageHero';
import ScrollIndicator from '@/components/ScrollIndicator';
import { useLanguage } from '@/contexts/LanguageContext';

const WebDevHero = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';
  
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };
  
  return (
    <div className="relative">
      <PageHero
        badge="Web Development"
        title="Web Development That Drives Business Growth"
        subtitle="Scalable, secure, and search-optimized websites – from custom WordPress to pure code."
        primaryCta={{
          text: "Start Your Project",
          link: "#",
          onClick: handleStartProject
        }}
        secondaryCta={{
          text: "View Case Studies",
          link: "/en/case-studies"
        }}
      />
      <ScrollIndicator />
    </div>
  );
};

export default WebDevHero;
