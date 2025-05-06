
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import WebDevHero from '@/components/web-development/WebDevHero';
import WebDevBenefits from '@/components/web-development/WebDevBenefits';
import WebDevProcess from '@/components/web-development/WebDevProcessNew';
import WebDevServices from '@/components/web-development/WebDevServices';
import WebDevCmsVsStatic from '@/components/web-development/WebDevCmsVsStatic';
import WebDevCTA from '@/components/web-development/WebDevCTA';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import FAQ from '@/components/FAQ';
import { useLanguage } from '@/contexts/LanguageContext';
import WebDevSEOTextEN from '@/components/web-development/WebDevSEOTextEN';

const EnglishWebDevelopment = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('en');
  }, [setLanguage]);

  // Define FAQs for web development - same structure as German page
  const webDevFaqs = [
    {
      question: "What platforms do you work with?",
      answer: "We develop fully coded websites (without CMS) and custom WordPress solutions - depending on what better suits your business."
    },
    {
      question: "Can ooliv develop online shops?",
      answer: "Yes - WooCommerce within WordPress or Shopify for targeted B2B cases."
    },
    {
      question: "Is performance a standard feature?",
      answer: "Absolutely. Our sites are fast, SEO-optimized, and run reliably on all devices."
    },
    {
      question: "Is there support after launch?",
      answer: "Yes. We continue to support you with technical assistance, updates, and tracking."
    },
    {
      question: "Can you improve existing websites?",
      answer: "Yes. We analyze whether optimization makes sense - or if a relaunch would be more efficient."
    }
  ];

  return (
    <>
      <PageLayout className="overflow-x-hidden">
        <Helmet>
          <title>Web Development Services | Front-End, Back-End & Full-Stack Solutions | ooliv</title>
          <meta name="description" content="Scalable web development with front-end, back-end, and full-stack expertise. Build a secure, SEO-optimized website with ooliv today!" />
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
        
        {/* Using Global FAQ Component with custom FAQs - matching German page structure */}
        <FAQ customFaqs={webDevFaqs} />
        
        <WebDevCTA />
      </PageLayout>
      
      {/* SEO Text Section moved outside PageLayout to appear after footer */}
      <WebDevSEOTextEN />
    </>
  );
};

export default EnglishWebDevelopment;
