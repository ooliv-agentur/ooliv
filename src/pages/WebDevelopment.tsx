
import React from 'react';
import PageLayout from '@/components/PageLayout';
import WebDevHero from '@/components/web-development/WebDevHero';
import WebDevBenefits from '@/components/web-development/WebDevBenefits';
import WebDevServices from '@/components/web-development/WebDevServices';
import WebDevProcess from '@/components/web-development/WebDevProcess';
import WebDevCaseStudies from '@/components/web-development/WebDevCaseStudies';
import WebDevCTA from '@/components/web-development/WebDevCTA';
import FAQ from '@/components/FAQ';

const webDevFaqs = [
  {
    question: "What technologies do you use for development?",
    answer: "We work with WordPress, WooCommerce, Shopify (in select cases), and headless stacks like Next.js—always tailored to your business needs."
  },
  {
    question: "Do you provide support after launch?",
    answer: "Yes. We offer ongoing technical support, maintenance, and optimization services post-launch."
  },
  {
    question: "Can you integrate external tools like CRMs?",
    answer: "Absolutely. We specialize in connecting websites to tools like HubSpot, PIM systems, or ERP platforms."
  },
  {
    question: "How is SEO handled during development?",
    answer: "Technical SEO is part of every build—from performance tuning to structured data and crawlability."
  }
];

const WebDevelopment = () => {
  return (
    <PageLayout className="overflow-x-hidden">
      <WebDevHero />
      <WebDevBenefits />
      <WebDevServices />
      <WebDevProcess />
      <WebDevCaseStudies />
      <FAQ customFaqs={webDevFaqs} />
      <WebDevCTA />
    </PageLayout>
  );
};

export default WebDevelopment;
