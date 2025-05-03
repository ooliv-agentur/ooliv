
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import ContentHero from '@/components/content-creation/ContentHero';
import ContentBenefits from '@/components/content-creation/ContentBenefits';
import ContentService from '@/components/content-creation/ContentService';
import ContentServices from '@/components/content-creation/ContentServices';
import ContentExpertInsight from '@/components/content-creation/ContentExpertInsight';
import ContentProcess from '@/components/content-creation/ContentProcess';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import CaseStudiesSection from '@/components/CaseStudiesSection';

const EnglishContentCreation = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('en');
  }, [setLanguage]);

  // Custom FAQ items for Content Creation page - English version
  const contentFaqs = [
    {
      question: "How do you create content for websites?",
      answer: "We develop a comprehensive content strategy, starting with keyword research, and then deliver modular, conversion-oriented assets: text, images, videos, and illustrations – all ready to launch."
    },
    {
      question: "Can I order just content without design?",
      answer: "Yes – we can deliver just content (text, images, videos) that you can integrate into your existing website."
    },
    {
      question: "What if I don't have a logo or visual brand elements?",
      answer: "We can help with that too. Our team creates logos, icons, and visual systems that match your brand identity."
    },
    {
      question: "Do you use AI for content?",
      answer: "Yes, but we don't blindly rely on AI. We use tools like ChatGPT and Midjourney, but everything is refined and curated by our team."
    },
    {
      question: "Do you optimize content for SEO?",
      answer: "Yes. Every content element is SEO-friendly, from headlines to metadata."
    }
  ];

  return (
    <PageLayout className="overflow-x-hidden">
      <Helmet>
        <title>Content Creation for B2B | Text that Converts</title>
        <meta name="description" content="ooliv creates strategic B2B content: website copy, landing pages & SEO content with a plan – clear, thoughtful, powerful." />
      </Helmet>
      
      <ContentHero />
      <ContentBenefits />
      <ContentService />
      <ContentServices />
      <ContentProcess />
      
      {/* Use the standardized global CaseStudiesSection */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CaseStudiesSection />
        </div>
      </section>
      
      <FAQ 
        customFaqs={contentFaqs}
        customTitle="Frequently Asked Questions About Content Creation" 
      />
      <CTA 
        title="Let's create content that converts"
        subtitle="We don't just fill pages – we build momentum. Let's create content that ranks, resonates and delivers real business results."
        primaryCta="Discuss Content Project"
        secondaryCta="View Showcase"
        secondaryCtaLink="/en/case-studies"
      />
    </PageLayout>
  );
};

export default EnglishContentCreation;
