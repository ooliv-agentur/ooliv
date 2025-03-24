
import React from 'react';
import PageLayout from '@/components/PageLayout';
import WebDevHero from '@/components/web-development/WebDevHero';
import WebDevBenefits from '@/components/web-development/WebDevBenefits';
import WebDevServices from '@/components/web-development/WebDevServices';
import WebDevProcess from '@/components/web-development/WebDevProcess';
import WebDevCaseStudies from '@/components/web-development/WebDevCaseStudies';
import WebDevFAQ from '@/components/web-development/WebDevFAQ';
import WebDevCTA from '@/components/web-development/WebDevCTA';
import { useLanguage } from '@/contexts/LanguageContext';

const WebDevelopment = () => {
  const { t } = useLanguage();
  
  return (
    <PageLayout>
      <WebDevHero />
      <WebDevBenefits />
      <WebDevServices />
      <WebDevProcess />
      <WebDevCaseStudies />
      <WebDevFAQ />
      <WebDevCTA />
    </PageLayout>
  );
};

export default WebDevelopment;
