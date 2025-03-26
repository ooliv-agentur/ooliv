
import React from 'react';
import PageLayout from '@/components/PageLayout';
import SEOHero from '@/components/seo/SEOHero';
import SEOBenefits from '@/components/seo/SEOBenefits';
import SEOServices from '@/components/seo/SEOServices';
import SEOProcess from '@/components/seo/SEOProcess';
import SEOCaseStudies from '@/components/seo/SEOCaseStudies';
import SEOApproach from '@/components/seo/SEOApproach';
import FAQ from '@/components/FAQ';
import SEOCta from '@/components/seo/SEOCta';

const SEO = () => {
  // Custom FAQ items for SEO page
  const seoFaqs = [
    {
      question: "How long does it take to see SEO results?",
      answer: "Some results within weeks — full impact typically after 3–6 months."
    },
    {
      question: "What makes your SEO approach in Mainz unique?",
      answer: "We combine strategy, clean tech, and quality content — not just checklists."
    },
    {
      question: "Do you offer local SEO services?",
      answer: "Yes — including Google Business, regional directories, and local search visibility."
    },
    {
      question: "Do your SEO services include backlink building?",
      answer: "Yes — we manage strategic backlink campaigns to build authority over time."
    },
    {
      question: "How do you ensure technical SEO is up to date?",
      answer: "Through structured audits, Core Web Vitals monitoring, and direct implementation."
    },
    {
      question: "Why should I choose a local SEO agency in Mainz?",
      answer: "Because local expertise, language precision, and regional search strategies matter."
    }
  ];
  
  return (
    <PageLayout className="overflow-x-hidden">
      <SEOHero />
      <SEOBenefits />
      <SEOServices />
      <SEOApproach />
      <SEOProcess />
      
      {/* Case Studies Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-heading mb-6">Real Results from Real Clients</h2>
          </div>
          <SEOCaseStudies />
        </div>
      </section>
      
      <FAQ 
        customFaqs={seoFaqs} 
        customTitle="Frequently Asked Questions"
      />
      
      <SEOCta />
    </PageLayout>
  );
};

export default SEO;
