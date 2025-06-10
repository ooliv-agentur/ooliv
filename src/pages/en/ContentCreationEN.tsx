
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import PageHero from '@/components/PageHero';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import ClientLogos from '@/components/ClientLogos';

const EnglishContentCreation = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('en');
  }, [setLanguage]);

  const contentFaqs = [
    {
      question: "What types of content do you create?",
      answer: "We create comprehensive content including website copy, blog articles, product descriptions, landing page content, social media posts, email newsletters, and SEO-optimized content that engages your audience and drives conversions."
    },
    {
      question: "How do you ensure content aligns with our brand voice?",
      answer: "We start by understanding your brand personality, target audience, and communication style. We create detailed brand guidelines and tone of voice documentation to ensure all content consistently reflects your brand identity."
    },
    {
      question: "Do you write SEO-optimized content?",
      answer: "Yes, all our content is created with SEO best practices in mind. We conduct thorough keyword research, optimize for search intent, and create content that ranks well while providing genuine value to your readers."
    },
    {
      question: "Can you help with content strategy?",
      answer: "Absolutely! We develop comprehensive content strategies that align with your business goals, including content calendars, topic clusters, audience personas, and distribution strategies across multiple channels."
    },
    {
      question: "How do you measure content performance?",
      answer: "We track various metrics including organic traffic, engagement rates, conversion rates, time on page, social shares, and lead generation to measure content effectiveness and continuously optimize our approach."
    }
  ];

  return (
    <PageLayout>
      <Helmet>
        <title>Content Agency Mainz – Texts that Work</title>
        <meta name="description" content="ooliv – Your content agency in Mainz. We create compelling texts that reach your target audience and strengthen your brand." />
        <meta name="keywords" content="Content Agency Mainz, Content Creation Mainz, Professional Copywriting, Content Marketing Mainz, SEO Content Writing" />
        <meta name="focus-keyword" content="Content Agency Mainz" />
      </Helmet>
      
      <PageHero 
        title="Content Agency Mainz – Texts that Work"
        subtitle="ooliv – Your content agency in Mainz. We create compelling texts that reach your target audience and strengthen your brand."
        startProjectText="Start Your Content Project"
        seeWorkText="View Content Examples"
      />
      
      <FAQ 
        customFaqs={contentFaqs}
        customTitle="Frequently Asked Questions About Content Creation"
        customCtaText="More content questions? Contact us"
      />
      
      <CTA 
        title="Ready to create compelling content?"
        subtitle="Let's develop content that engages your audience and drives meaningful business results."
        primaryCta="Start Your Content Project"
        secondaryCta="Content Strategy Consultation"
      />
      
      <ClientLogos />
    </PageLayout>
  );
};

export default EnglishContentCreation;
