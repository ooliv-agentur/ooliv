
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import WebDevHero from '@/components/web-development/WebDevHero';
import WebDevBenefits from '@/components/web-development/WebDevBenefits';
import WebDevProcess from '@/components/web-development/WebDevProcessNew';
import WebDevServices from '@/components/web-development/WebDevServices';
import WebDevCmsVsStatic from '@/components/web-development/WebDevCmsVsStatic';
import WebDevCaseStudies from '@/components/web-development/WebDevCaseStudies';
import WebDevFAQ from '@/components/web-development/WebDevFAQ';
import WebDevCTA from '@/components/web-development/WebDevCTA';
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
        <title>Web Development Agency | Custom WordPress & Code Solutions</title>
        <meta name="description" content="ooliv develops scalable websites with CMS or custom code – flexible, secure, SEO-ready. WordPress agency for business-focused web development." />
      </Helmet>

      <WebDevHero />
      <WebDevBenefits />
      <WebDevCmsVsStatic />
      <WebDevProcess />
      <WebDevServices />
      <WebDevCaseStudies />
      <WebDevFAQ customFaqs={webDevFaqs} />
      <WebDevCTA />
    </PageLayout>
  );
};

export default EnglishWebDevelopment;
