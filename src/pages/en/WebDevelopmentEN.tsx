
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import WebDevHero from '@/components/web-development/WebDevHero';
import WebDevBenefits from '@/components/web-development/WebDevBenefits';
import WebDevProcess from '@/components/web-development/WebDevProcess';
import WebDevServices from '@/components/web-development/WebDevServices';
import CTA from '@/components/CTA';
import { useLanguage } from '@/contexts/LanguageContext';

const EnglishWebDevelopment = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('en');
  }, [setLanguage]);

  return (
    <PageLayout className="overflow-x-hidden">
      <Helmet>
        <title>Web Development | ooliv</title>
        <meta name="description" content="Web development services for businesses. We build modern, scalable websites that help your business grow." />
      </Helmet>

      <WebDevHero />
      <WebDevBenefits />
      <WebDevProcess />
      <WebDevServices />
      
      <CTA 
        title="Ready to build your next web project?"
        subtitle="Let's create a website that drives real results for your business."
        primaryCta="Start Project"
        secondaryCta="Schedule Call"
        secondaryCtaLink="/en/contact"
      />
    </PageLayout>
  );
};

export default EnglishWebDevelopment;
