
import React from 'react';
import PageLayout from '@/components/PageLayout';
import WebDevHero from '@/components/web-development/WebDevHero';
import WebDevBenefits from '@/components/web-development/WebDevBenefits';
import WebDevServices from '@/components/web-development/WebDevServices';
import WebDevProcessNew from '@/components/web-development/WebDevProcessNew';
import WebDevCmsVsStatic from '@/components/web-development/WebDevCmsVsStatic';
import WebDevCTA from '@/components/web-development/WebDevCTA';
import FAQ from '@/components/FAQ';
import CaseStudiesSection from '@/components/CaseStudiesSection';

const webDevFaqs = [
  {
    question: "What platforms do you work with?",
    answer: "We develop fully coded websites (without CMS) and custom WordPress solutions – depending on what fits your business best."
  },
  {
    question: "Can ooliv build online shops?",
    answer: "Yes – via WooCommerce within WordPress or Shopify for focused B2B use cases."
  },
  {
    question: "Is performance always included?",
    answer: "Absolutely. Our websites are fast, SEO-optimized, and stable across all devices."
  },
  {
    question: "Do you offer support after launch?",
    answer: "Yes. We provide ongoing technical support, updates, and performance tracking."
  },
  {
    question: "Can you improve existing websites?",
    answer: "Yes. We audit your current setup and advise whether optimization or a full relaunch is the smarter move."
  }
];

const WebDevelopment = () => {
  return (
    <PageLayout className="overflow-x-hidden">
      <WebDevHero />
      <WebDevBenefits />
      <WebDevCmsVsStatic />
      <WebDevProcessNew />
      <WebDevServices />
      
      {/* Global Case Studies Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CaseStudiesSection />
        </div>
      </section>
      
      <FAQ customFaqs={webDevFaqs} />
      <WebDevCTA />
    </PageLayout>
  );
};

export default WebDevelopment;
