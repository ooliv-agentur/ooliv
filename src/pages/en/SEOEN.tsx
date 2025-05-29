
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import SEOHero from '@/components/seo/SEOHero';
import SEOBenefits from '@/components/seo/SEOBenefits';
import SEOServices from '@/components/seo/SEOServices';
import SEOProcess from '@/components/seo/SEOProcess';
import SEOApproach from '@/components/seo/SEOApproach';
import SEOCta from '@/components/seo/SEOCta';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import FAQ from '@/components/FAQ';
import { useLanguage } from '@/contexts/LanguageContext';
import SEOTextSectionEN from '@/components/en/SEOTextSectionEN';

const EnglishSEO = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('en');
  }, [setLanguage]);
  
  const seoFaqs = [
    {
      question: "How long does it take for SEO measures to show results?",
      answer: "First effects in a few weeks, sustainable results usually from 3 months onwards."
    },
    {
      question: "What makes your SEO approach in Mainz special?",
      answer: "Strategy, tech know-how and content – combined in a scalable process."
    },
    {
      question: "Do you also offer local SEO services?",
      answer: "Yes – including Google Business, industry directories and targeted visibility in Mainz & region."
    },
    {
      question: "Is link building part of your SEO services?",
      answer: "Yes – we coordinate sustainable backlink campaigns including authority building."
    },
    {
      question: "How do you ensure that technical SEO is up to date?",
      answer: "Through structured audits, Core Web Vitals checks and technical implementation by our team."
    },
    {
      question: "Why should I work with a local SEO agency in Mainz?",
      answer: "Because regional market knowledge, language and SEO tactics make a decisive difference."
    }
  ];

  return (
    <PageLayout className="overflow-x-hidden">
      <Helmet>
        <title>SEO Agency Mainz | Visibility for B2B with ooliv</title>
        <meta name="description" content="More visibility for your website: ooliv is your SEO agency in Mainz – Onpage, content & strategy for sustainable rankings." />
      </Helmet>

      <SEOHero />
      <SEOBenefits />
      <SEOServices />
      <SEOApproach />
      <SEOProcess />
      
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CaseStudiesSection />
        </div>
      </section>
      
      <FAQ 
        customFaqs={seoFaqs} 
        customTitle="Frequently Asked Questions about SEO Agency Mainz"
      />
      
      <SEOCta />
      <SEOTextSectionEN />
    </PageLayout>
  );
};

export default EnglishSEO;
