
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import PageLayout from '@/components/PageLayout';
import WebDevHero from '@/components/web-development/WebDevHero';
import WebDevServices from '@/components/web-development/WebDevServices';
import WebDevProcessNew from '@/components/web-development/WebDevProcessNew';
import WebDevBenefits from '@/components/web-development/WebDevBenefits';
import WebDevCmsVsStatic from '@/components/web-development/WebDevCmsVsStatic';
import WebDevCTA from '@/components/web-development/WebDevCTA';
import FAQ from '@/components/FAQ';
import WebDevSEOTextEN from '@/components/web-development/WebDevSEOTextEN';
import { useLanguage } from '@/contexts/LanguageContext';

const faqs = [
  {
    question: "How long does website development take?",
    answer: "Development time depends on complexity. Simple websites are ready in 2-4 weeks, more complex projects require 6-12 weeks. We create a detailed timeline for your project."
  },
  {
    question: "Which technologies do you use for web development?",
    answer: "We use modern, proven technologies like React, WordPress, and headless CMS systems. The choice depends on your specific requirements and future plans."
  },
  {
    question: "Do you offer maintenance and support after development?",
    answer: "Yes, we offer comprehensive maintenance and support. This includes updates, security patches, technical optimizations, and website extensions when needed."
  },
  {
    question: "Can you revamp existing websites or develop new ones?",
    answer: "Both. We analyze your existing website and recommend whether a revamp is sufficient or if new development makes more sense. Often, complete redevelopment is more economical in the long run."
  }
];

const EnglishWebDevelopment = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('en');
  }, [setLanguage]);

  return (
    <>
      <Helmet>
        <title>Web Development Mainz – Custom Solutions for Your Business</title>
        <meta 
          name="description" 
          content="Professional web development from Mainz. From WordPress to custom web applications – we develop scalable solutions for your business." 
        />
      </Helmet>
      
      {/* Fixed Hero Section */}
      <div className="fixed inset-0 z-10">
        <WebDevHero />
      </div>
      
      {/* Scrollable Content Overlay */}
      <div className="relative z-20" style={{ marginTop: '100vh' }}>
        <div className="bg-white relative">
          <WebDevServices />
          <WebDevProcessNew />
          <WebDevBenefits />
          <WebDevCmsVsStatic />
          <FAQ 
            customFaqs={faqs}
            customTitle="Frequently Asked Questions about Web Development"
            customCtaText="More questions? Contact us"
          />
          <WebDevCTA />
        </div>
      </div>
      
      <WebDevSEOTextEN />
    </>
  );
};

export default EnglishWebDevelopment;
