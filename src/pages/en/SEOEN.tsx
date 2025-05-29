
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import PageLayout from '@/components/PageLayout';
import SEOHero from '@/components/seo/SEOHero';
import SEOServices from '@/components/seo/SEOServices';
import SEOProcess from '@/components/seo/SEOProcess';
import SEOApproach from '@/components/seo/SEOApproach';
import SEOBenefits from '@/components/seo/SEOBenefits';
import SEOCaseStudies from '@/components/seo/SEOCaseStudies';
import FAQ from '@/components/FAQ';
import SEOCta from '@/components/seo/SEOCta';
import { useLanguage } from '@/contexts/LanguageContext';

const seoFaqs = [
  {
    question: "How long does it take to see SEO results?",
    answer: "Initial improvements are often measurable after 3-6 months, significant success typically shows after 6-12 months. SEO is a long-term investment that pays off through sustainable growth."
  },
  {
    question: "What sets your SEO strategy apart from other agencies?",
    answer: "We focus on data-driven strategies and transparent communication. Our SEO measures are always tied to your business goals – it's about qualified leads, not just rankings."
  },
  {
    question: "Can you help with technical SEO issues?",
    answer: "Yes, technical SEO is one of our core strengths. We optimize loading times, fix crawling issues, implement structured data, and ensure a clean technical foundation."
  },
  {
    question: "How transparent is your SEO reporting?",
    answer: "Completely transparent. You receive regular reports with all important KPIs, progress, and planned measures. You can check the status of your SEO campaign at any time."
  }
];

const EnglishSEO = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('en');
  }, [setLanguage]);

  return (
    <>
      <Helmet>
        <title>SEO Agency Mainz – Visibility That Converts to Leads</title>
        <meta 
          name="description" 
          content="SEO optimization from Mainz for sustainable Google rankings. We increase your visibility and generate qualified leads through strategic search engine optimization." 
        />
      </Helmet>
      
      {/* Fixed Hero Section */}
      <div className="fixed inset-0 z-10">
        <SEOHero />
      </div>
      
      {/* Scrollable Content Overlay */}
      <div className="relative z-20" style={{ marginTop: '100vh' }}>
        <div className="bg-white relative">
          <SEOServices />
          <SEOProcess />
          <SEOApproach />
          <SEOBenefits />
          <SEOCaseStudies />
          <FAQ 
            customFaqs={seoFaqs}
            customTitle="Frequently Asked Questions about SEO"
            customCtaText="More questions? Contact us"
          />
          <SEOCta />
        </div>
      </div>
    </>
  );
};

export default EnglishSEO;
