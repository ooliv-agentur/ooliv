
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import PageHero from '@/components/PageHero';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import ClientLogos from '@/components/ClientLogos';

const EnglishSEO = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('en');
  }, [setLanguage]);

  const seoFaqs = [
    {
      question: "How long does it take to see SEO results?",
      answer: "SEO is a long-term strategy. You can typically expect to see initial improvements within 3-6 months, with significant results becoming apparent after 6-12 months. The timeline depends on your industry competitiveness and current website status."
    },
    {
      question: "What does your SEO service include?",
      answer: "Our comprehensive SEO service includes keyword research, on-page optimization, technical SEO, content strategy, link building, local SEO optimization, performance monitoring, and regular reporting to track your progress."
    },
    {
      question: "Do you guarantee first page rankings?",
      answer: "While we cannot guarantee specific rankings (as search algorithms are constantly changing), we can guarantee that we'll use proven, white-hat SEO strategies to improve your visibility and organic traffic significantly."
    },
    {
      question: "How do you measure SEO success?",
      answer: "We track multiple metrics including organic traffic growth, keyword ranking improvements, conversion rates, local search visibility, and overall business impact. We provide detailed monthly reports showing your progress."
    },
    {
      question: "Do you work with local businesses in Mainz?",
      answer: "Yes, we specialize in local SEO for Mainz and surrounding areas. We optimize your Google My Business profile, local citations, and location-based keywords to help you dominate local search results."
    }
  ];

  return (
    <PageLayout>
      <Helmet>
        <title>SEO Agency Mainz – Visible Online</title>
        <meta name="description" content="As an SEO agency in Mainz, we ensure top rankings. ooliv increases your online presence with customized search engine optimization." />
        <meta name="keywords" content="SEO Agency Mainz, Search Engine Optimization Mainz, SEO Consulting Mainz, Google Ranking Mainz, Local SEO Mainz" />
        <meta name="focus-keyword" content="SEO Agency Mainz" />
      </Helmet>
      
      <PageHero 
        title="SEO Agency Mainz – Visible Online"
        subtitle="As an SEO agency in Mainz, we ensure top rankings. ooliv increases your online presence with customized search engine optimization."
        startProjectText="Start Your SEO Strategy"
        seeWorkText="View SEO Case Studies"
      />
      
      <FAQ 
        customFaqs={seoFaqs}
        customTitle="Frequently Asked Questions About SEO"
        customCtaText="More SEO questions? Contact us"
      />
      
      <CTA 
        title="Ready to dominate search results?"
        subtitle="Let's develop an SEO strategy that drives organic traffic and grows your business."
        primaryCta="Start Your SEO Strategy"
        secondaryCta="SEO Consultation"
      />
      
      <ClientLogos />
    </PageLayout>
  );
};

export default EnglishSEO;
