
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import PageHero from '@/components/PageHero';
import TeamSection from '@/components/TeamSection';
import AboutCompactFAQ from '@/components/AboutCompactFAQ';
import CTA from '@/components/CTA';
import { useLanguage } from '@/contexts/LanguageContext';
import AboutUsSEOTextEN from '@/components/about-us/AboutUsSEOTextEN';

const EnglishAboutUs = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('en');
  }, [setLanguage]);

  return (
    <PageLayout 
      className="overflow-x-hidden"
      seoText={<AboutUsSEOTextEN />}
    >
      <Helmet>
        <title>About ooliv | Your web agency from Mainz</title>
        <meta name="description" content="ooliv is your web & marketing agency from Mainz: Strategic, transparent, effective. Learn more about our team and working style!" />
      </Helmet>

      <PageHero
        badge="About us"
        title="Simple websites, transparent processes, effective results."
        subtitle="We support B2B companies with clear websites and marketing concepts. Without jargon, with focus on your goals and direct implementation."
      />
      
      <TeamSection />
      
      <AboutCompactFAQ />
      
      <CTA 
        title="Let's discuss your project"
        subtitle="Every good cooperation starts with a conversation. Let's talk about your goals and how we can help your company achieve them."
        primaryCta="Start Project"
        secondaryCta="Book Strategy Call"
        secondaryCtaLink="/en/contact"
      />
    </PageLayout>
  );
};

export default EnglishAboutUs;
