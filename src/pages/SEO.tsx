
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import SEOHero from '@/components/seo/SEOHero';
import SEOBenefits from '@/components/seo/SEOBenefits';
import SEOServices from '@/components/seo/SEOServices';
import SEOProcess from '@/components/seo/SEOProcess';
import SEOCaseStudies from '@/components/seo/SEOCaseStudies';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';

const SEO = () => {
  const { t } = useLanguage();
  
  // Custom FAQ items for SEO page
  const seoFaqs = [
    {
      question: "How long does it take to see SEO results?",
      answer: "Initial improvements are often visible within 1-3 months, with significant results typically appearing after 4-6 months of consistent optimization."
    },
    {
      question: "Do you guarantee first-page rankings?",
      answer: "No reputable SEO agency can guarantee specific rankings, as search algorithms constantly evolve. We focus on sustainable strategies that deliver long-term results."
    },
    {
      question: "What SEO reporting do you provide?",
      answer: "We deliver monthly reports with key metrics including organic traffic, rankings, conversions, backlink profiles, and strategic recommendations."
    },
    {
      question: "Do you specialize in particular industries?",
      answer: "We have experience across B2B, eCommerce, professional services, and SaaS verticals, with specialized knowledge in technical and competitive markets."
    },
    {
      question: "Can you fix Google penalties or algorithmic issues?",
      answer: "Yes, we offer recovery services for sites affected by manual penalties or algorithm updates, with a focus on sustainable compliance."
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
        title="Get Found By The Right Audience"
        subtitle="From technical SEO audits to content strategy—we'll help you build organic visibility that drives qualified traffic."
        primaryCta="Request an SEO Audit"
        secondaryCta="Discuss Your SEO Strategy"
      />
    </PageLayout>
  );
};

export default SEO;
