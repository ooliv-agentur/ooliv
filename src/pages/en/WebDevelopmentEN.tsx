
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import WebDevHero from '@/components/web-development/WebDevHero';
import WebDevBenefits from '@/components/web-development/WebDevBenefits';
import WebDevProcess from '@/components/web-development/WebDevProcessNew';
import WebDevServices from '@/components/web-development/WebDevServices';
import WebDevCmsVsStatic from '@/components/web-development/WebDevCmsVsStatic';
import WebDevFAQ from '@/components/web-development/WebDevFAQ';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import CTA from '@/components/CTA';
import { useLanguage } from '@/contexts/LanguageContext';

const EnglishWebDevelopment = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('en');
  }, [setLanguage]);

  const webDevFaqs = [
    {
      question: "Which platforms do you work with?",
      answer: "We develop fully coded websites (without CMS) and custom WordPress solutions - depending on what better suits your business."
    },
    {
      question: "Can ooliv develop e-commerce shops?",
      answer: "Yes - WooCommerce within WordPress or Shopify for targeted B2B cases."
    },
    {
      question: "Is performance a standard?",
      answer: "Absolutely. Our pages are fast, SEO-optimized and run reliably on all devices."
    },
    {
      question: "Is there support after launch?",
      answer: "Yes. We continue to support you with technical assistance, updates and tracking."
    },
    {
      question: "Can you improve existing websites?",
      answer: "Yes. We analyze whether optimization makes sense - or if a relaunch would be more efficient."
    }
  ];

  return (
    <PageLayout className="overflow-x-hidden">
      <Helmet>
        <title>Web Development | ooliv</title>
        <meta name="description" content="Web development services for businesses. We build modern, scalable websites that help your business grow." />
      </Helmet>

      <WebDevHero />
      <WebDevBenefits />
      <WebDevCmsVsStatic />
      <WebDevProcess />
      <WebDevServices />
      
      {/* Global Case Studies Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CaseStudiesSection />
        </div>
      </section>
      
      <WebDevFAQ />
      <CTA 
        title="Let's discuss your web development project"
        subtitle="We develop a scalable, secure website that perfectly matches your business goals."
        primaryCta="Start Project"
        secondaryCta="Schedule Strategy Call"
        secondaryCtaLink="/en/contact"
      />
    </PageLayout>
  );
};

export default EnglishWebDevelopment;
