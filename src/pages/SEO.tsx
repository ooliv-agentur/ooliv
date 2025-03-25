
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
      answer: "First results often appear within weeks (e.g. technical fixes), long-term growth typically takes 3–6 months."
    },
    {
      question: "What makes ooliv's SEO approach different?",
      answer: "We combine deep keyword strategy, scalable content, and smart link-building — all aligned with business goals in Mainz and beyond."
    },
    {
      question: "Do you offer local SEO services?",
      answer: "Yes. We use specialized tools to manage local citations and business directories for better regional visibility in Mainz and the Rhein-Main area."
    },
    {
      question: "Is backlink building part of your SEO services?",
      answer: "Absolutely — we plan link architecture and coordinate contextual backlink campaigns with trusted partners to boost your site's authority."
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
