
import React from 'react';
import PageLayout from '@/components/PageLayout';
import WebDevHero from '@/components/web-development/WebDevHero';
import WebDevBenefits from '@/components/web-development/WebDevBenefits';
import WebDevServices from '@/components/web-development/WebDevServices';
import WebDevProcess from '@/components/web-development/WebDevProcess';
import WebDevCaseStudies from '@/components/web-development/WebDevCaseStudies';
import WebDevCmsVsStatic from '@/components/web-development/WebDevCmsVsStatic';
import WebDevCTA from '@/components/web-development/WebDevCTA';
import FAQ from '@/components/FAQ';

const webDevFaqs = [
  {
    question: "What platforms do you work with?",
    answer: "We build both fully coded websites (no CMS) and custom WordPress setups."
  },
  {
    question: "Can you build something without a CMS?",
    answer: "Yes — we often develop fully custom websites using just HTML, CSS, and JavaScript. Clean, fast, and secure."
  },
  {
    question: "Can you build shop features?",
    answer: "Yes — we work with WooCommerce (for WordPress) and Shopify (for select projects)."
  },
  {
    question: "Do you provide support after launch?",
    answer: "Yes. We stay available for updates, improvements, and performance monitoring."
  },
  {
    question: "How do you ensure fast loading times?",
    answer: "We use lightweight code, optimize every asset, and run performance tests during development."
  },
  {
    question: "Can you improve our existing site?",
    answer: "Absolutely. We also take on redesigns, speed fixes, and CMS cleanups."
  }
];

const WebDevelopment = () => {
  return (
    <PageLayout className="overflow-x-hidden">
      <WebDevHero />
      <WebDevBenefits />
      <WebDevCmsVsStatic />
      <WebDevProcess />
      <WebDevServices />
      <WebDevCaseStudies />
      <FAQ customFaqs={webDevFaqs} />
      <WebDevCTA />
    </PageLayout>
  );
};

export default WebDevelopment;
