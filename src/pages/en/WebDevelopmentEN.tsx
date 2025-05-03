
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import WebDevHero from '@/components/web-development/WebDevHero';
import WebDevBenefits from '@/components/web-development/WebDevBenefits';
import WebDevCmsVsStatic from '@/components/web-development/WebDevCmsVsStatic';
import WebDevProcessNew from '@/components/web-development/WebDevProcessNew';
import WebDevServices from '@/components/web-development/WebDevServices';
import WebDevCaseStudies from '@/components/web-development/WebDevCaseStudies';
import FAQ from '@/components/FAQ';
import WebDevCTA from '@/components/web-development/WebDevCTA';
import SEOTextSectionEN from '@/components/en/SEOTextSectionEN';
import { useLanguage } from '@/contexts/LanguageContext';

const EnglishWebDevelopment = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('en');
  }, [setLanguage]);

  // Define web development FAQ content
  const webDevFaqs = [
    {
      question: "What platforms do you work with?",
      answer: "We develop fully coded websites (without CMS) and custom WordPress solutions – depending on what better suits your business."
    },
    {
      question: "Can ooliv develop shops as well?",
      answer: "Yes – WooCommerce within WordPress or Shopify for targeted B2B cases."
    },
    {
      question: "Is performance a standard for you?",
      answer: "Absolutely. Our sites are fast, SEO-optimized, and run reliably on all devices."
    },
    {
      question: "Is there support after launch?",
      answer: "Yes. We continue to support you with technical maintenance, updates, and tracking."
    },
    {
      question: "Can you improve existing websites?",
      answer: "Yes. We analyze whether optimization makes sense – or if a relaunch would be more efficient."
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
      <WebDevProcessNew />
      <WebDevServices />
      <WebDevCaseStudies />
      <FAQ customFaqs={webDevFaqs} />
      <WebDevCTA />
      <SEOTextSectionEN />
    </PageLayout>
  );
};

export default EnglishWebDevelopment;
