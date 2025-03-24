
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
  
  // Custom FAQ items for Web Development page
  const webDevFaqs = [
    {
      question: "What CMS options do you offer?",
      answer: "We provide WordPress, Shopify, custom CMS solutions, and headless CMS implementations based on your specific needs."
    },
    {
      question: "What's the difference between custom and template-based development?",
      answer: "Template-based development uses pre-built themes with customization, while custom development builds your site from scratch for maximum flexibility and performance."
    },
    {
      question: "Can you maintain or optimize an existing WordPress site?",
      answer: "Yes, we offer maintenance, optimization, and upgrade services for existing WordPress sites to improve performance and security."
    },
    {
      question: "Do you offer Shopify-only development support?",
      answer: "Absolutely. We can help with Shopify store setup, theme customization, app integration, and performance optimization."
    },
    {
      question: "How long does web development typically take?",
      answer: "Development timelines vary by project complexity, but typical websites take 4-8 weeks from start to launch, with larger projects requiring 2-4 months."
    }
  ];
  
  return (
    <PageLayout className="overflow-x-hidden">
      <WebDevHero />
      <WebDevBenefits />
      <WebDevServices />
      <WebDevProcess />
      <WebDevCaseStudies />
      <FAQ customFaqs={webDevFaqs} />
      <CTA 
        title="Let's Build A Platform That Works For You"
        subtitle="We'll analyze your current setup, define your requirements, and develop a plan that matches your business—not just a template."
        primaryCta="Schedule a Tech Audit"
        secondaryCta="Start Your Web Project"
      />
    </PageLayout>
  );
};

export default WebDevelopment;
