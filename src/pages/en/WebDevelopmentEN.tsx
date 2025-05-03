
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import WebDevHero from '@/components/web-development/WebDevHero';
import WebDevBenefits from '@/components/web-development/WebDevBenefits';
import WebDevProcess from '@/components/web-development/WebDevProcessNew';
import WebDevServices from '@/components/web-development/WebDevServices';
import WebDevCmsVsStatic from '@/components/web-development/WebDevCmsVsStatic';
import WebDevFAQ from '@/components/web-development/WebDevFAQ';
import WebDevCTA from '@/components/web-development/WebDevCTA';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import { useLanguage } from '@/contexts/LanguageContext';

const EnglishWebDevelopment = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('en');
  }, [setLanguage]);

  return (
    <PageLayout className="overflow-x-hidden">
      <Helmet>
        <title>Web Development Agency | Custom WordPress & Code Solutions</title>
        <meta name="description" content="ooliv develops scalable websites with CMS or custom code – flexible, secure, SEO-ready. WordPress agency for business-focused web development." />
      </Helmet>

      <WebDevHero />
      <WebDevBenefits />
      <WebDevCmsVsStatic />
      <WebDevProcess />
      <WebDevServices />
      
      {/* Using Global Case Studies Component */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CaseStudiesSection />
        </div>
      </section>
      
      <WebDevFAQ />
      <WebDevCTA />
    </PageLayout>
  );
};

export default EnglishWebDevelopment;
