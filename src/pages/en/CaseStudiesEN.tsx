
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import PageHero from '@/components/PageHero';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import ClientLogos from '@/components/ClientLogos';

const EnglishCaseStudies = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('en');
  }, [setLanguage]);

  const caseStudiesFaqs = [
    {
      question: "Can you share specific results from your projects?",
      answer: "While we respect client confidentiality, we can share anonymized case studies and general performance metrics. We've helped clients achieve 200%+ increases in organic traffic, 300% improvements in conversion rates, and significant revenue growth."
    },
    {
      question: "How do you track and measure project success?",
      answer: "We use comprehensive analytics including Google Analytics, Search Console, conversion tracking, and custom KPIs aligned with your business goals. We provide regular reports showing traffic, rankings, conversions, and business impact."
    },
    {
      question: "What industries do you have experience with?",
      answer: "We work across diverse industries including B2B services, e-commerce, healthcare, manufacturing, professional services, technology, and local businesses. Our adaptable approach works for various sectors and business models."
    },
    {
      question: "How long do your typical projects take?",
      answer: "Project timelines vary based on scope. Website projects typically take 6-12 weeks, SEO campaigns show results in 3-6 months, and ongoing marketing support provides continuous improvement. We always provide realistic timelines upfront."
    },
    {
      question: "Do you work with businesses outside of Mainz?",
      answer: "Yes, while we're based in Mainz, we work with clients throughout Germany and internationally. Our digital-first approach allows us to effectively serve clients regardless of their location."
    }
  ];

  return (
    <PageLayout>
      <Helmet>
        <title>Marketing Mainz – Successful Projects</title>
        <meta name="description" content="Discover our successful marketing projects in Mainz. Case studies from ooliv show strategies that work and inspire." />
        <meta name="keywords" content="Marketing Mainz, Case Studies Mainz, Successful Projects, Marketing Portfolio, Digital Marketing Results" />
        <meta name="focus-keyword" content="Marketing Mainz" />
      </Helmet>
      
      <PageHero 
        title="Marketing Mainz – Successful Projects"
        subtitle="Discover our successful marketing projects in Mainz. Case studies from ooliv show strategies that work and inspire."
        startProjectText="Start Your Project"
        seeWorkText="View More Projects"
      />
      
      <CaseStudiesSection 
        customTitle="Our Success Stories"
        customSubtitle="Real results from real clients across various industries"
        customBodyText="Explore how we've helped businesses achieve remarkable growth through strategic digital marketing, innovative web design, and data-driven optimization."
      />
      
      <FAQ 
        customFaqs={caseStudiesFaqs}
        customTitle="Frequently Asked Questions About Our Projects"
        customCtaText="Want to discuss your project? Contact us"
      />
      
      <CTA 
        title="Ready to become our next success story?"
        subtitle="Let's create a project that delivers exceptional results for your business."
        primaryCta="Start Your Project"
        secondaryCta="View More Case Studies"
      />
      
      <ClientLogos />
    </PageLayout>
  );
};

export default EnglishCaseStudies;
