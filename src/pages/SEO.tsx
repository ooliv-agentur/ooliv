
import React from 'react';
import PageLayout from '@/components/PageLayout';
import SEOHero from '@/components/seo/SEOHero';
import SEOBenefits from '@/components/seo/SEOBenefits';
import SEOServices from '@/components/seo/SEOServices';
import SEOProcess from '@/components/seo/SEOProcess';
import SEOCaseStudies from '@/components/seo/SEOCaseStudies';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';

const SEO = () => {
  // Custom FAQ items for SEO page
  const seoFaqs = [
    {
      question: "How long does SEO take to show results?",
      answer: "First results often appear within weeks (e.g. technical fixes), but long-term growth typically takes 3–6 months."
    },
    {
      question: "What makes ooliv's SEO approach different?",
      answer: "We combine fast fixes with long-term strategies. Our approach is data-driven and focused on business outcomes."
    },
    {
      question: "Do you offer local SEO services?",
      answer: "Yes, we help businesses improve their visibility in specific regions (e.g. Mainz, Rhein-Main area) through local citations and business listings."
    },
    {
      question: "Is backlink building part of your SEO services?",
      answer: "Yes, we focus on high-quality backlinks to improve your website's authority and drive relevant traffic."
    },
    {
      question: "How do you ensure a website's technical SEO is up to par?",
      answer: "We check for speed, indexing, and Core Web Vitals, and we fix any issues that affect your rankings."
    }
  ];
  
  return (
    <PageLayout className="overflow-x-hidden">
      <SEOHero />
      <SEOBenefits />
      <SEOServices />
      <SEOProcess />
      <SEOCaseStudies />
      <FAQ customFaqs={seoFaqs} />
      <CTA 
        title="Let's Make Your Website Work Smarter"
        subtitle="SEO isn't a checkbox—it's a growth lever. Let's unlock the full potential of your site with a strategy built for results."
        primaryCta="Request Your Free SEO Audit"
        secondaryCta="Schedule a Strategy Call"
      />
    </PageLayout>
  );
};

export default SEO;
