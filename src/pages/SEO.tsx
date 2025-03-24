
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
      answer: "Some results appear within weeks (e.g., technical fixes), but sustainable growth typically takes 3–6 months."
    },
    {
      question: "What makes ooliv's SEO different?",
      answer: "We align SEO with business goals and measure success in leads and conversions—not just rankings."
    },
    {
      question: "Do you offer SEO audits separately?",
      answer: "Yes. We offer standalone audits with actionable insights—no strings attached."
    },
    {
      question: "Do you support international SEO?",
      answer: "Absolutely. We optimize multilingual websites and structure content for global markets."
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
        subtitle="SEO isn't a checkbox—it's a growth lever. Let's find out where your site stands and how far it can go."
        primaryCta="Request Your Free SEO Audit"
        secondaryCta="Schedule a Strategy Call"
      />
    </PageLayout>
  );
};

export default SEO;
