
import React from 'react';
import PageLayout from '@/components/PageLayout';
import WebDevHero from '@/components/web-development/WebDevHero';
import WebDevBenefits from '@/components/web-development/WebDevBenefits';
import WebDevServices from '@/components/web-development/WebDevServices';
import WebDevProcess from '@/components/web-development/WebDevProcess';
import WebDevCaseStudies from '@/components/web-development/WebDevCaseStudies';
import { useLanguage } from '@/contexts/LanguageContext';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';

const WebDevelopment = () => {
  const { t } = useLanguage();
  
  return (
    <PageLayout>
      <WebDevHero />
      <WebDevBenefits />
      <WebDevServices />
      <WebDevProcess />
      <WebDevCaseStudies />
      <FAQ />
      <CTA />
    </PageLayout>
  );
};

export default WebDevelopment;
