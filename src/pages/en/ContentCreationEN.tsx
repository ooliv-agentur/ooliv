
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import PageLayout from '@/components/PageLayout';
import ContentHero from '@/components/content-creation/ContentHero';
import ContentService from '@/components/content-creation/ContentService';
import ContentProcess from '@/components/content-creation/ContentProcess';
import ContentBenefits from '@/components/content-creation/ContentBenefits';
import ContentCaseStudies from '@/components/content-creation/ContentCaseStudies';
import ContentExpertInsight from '@/components/content-creation/ContentExpertInsight';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import { useLanguage } from '@/contexts/LanguageContext';

const contentFaqs = [
  {
    question: "How do you develop content strategies for B2B companies?",
    answer: "We start with a comprehensive analysis of your target audiences, competitors, and business goals. Based on this, we develop a tailored content strategy that showcases your expertise and generates qualified leads."
  },
  {
    question: "What content formats do you create?",
    answer: "We create diverse content formats: website copy, blog articles, case studies, whitepapers, social media content, newsletters, product descriptions, and SEO-optimized landing pages – all tailored to your target audiences."
  },
  {
    question: "How do you ensure content is found on Google?",
    answer: "Every piece of content is created with SEO optimization: from keyword research to content structure and technical SEO factors. We combine strategic content with measurable search engine visibility."
  },
  {
    question: "Can you also revamp existing content?",
    answer: "Yes, we conduct content audits and optimize existing content. Often, targeted revisions can significantly improve performance – both for users and search engines."
  }
];

const EnglishContentCreation = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('en');
  }, [setLanguage]);

  return (
    <>
      <Helmet>
        <title>Content Creation Agency Mainz – Content That Converts & Ranks</title>
        <meta 
          name="description" 
          content="Content marketing from Mainz: Strategic content for B2B companies. From SEO copy to video content – we develop content that converts." 
        />
      </Helmet>
      
      {/* Fixed Hero Section */}
      <div className="fixed inset-0 z-10">
        <ContentHero />
      </div>
      
      {/* Scrollable Content Overlay */}
      <div className="relative z-20" style={{ marginTop: '100vh' }}>
        <div className="bg-white relative">
          <ContentService />
          <ContentProcess />
          <ContentBenefits />
          <ContentCaseStudies />
          <ContentExpertInsight />
          <FAQ 
            customFaqs={contentFaqs}
            customTitle="Frequently Asked Questions about Content Marketing"
            customCtaText="More questions? Let's talk"
          />
          <CTA 
            title="Ready for content that drives your business forward?"
            subtitle="Let's develop a content strategy together that delivers measurable results."
            primaryCta="Start Your Content Project"
          />
        </div>
      </div>
    </>
  );
};

export default EnglishContentCreation;
