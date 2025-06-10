
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import WebDesignHero from '@/components/web-design/WebDesignHero';
import WebDesignBenefits from '@/components/web-design/WebDesignBenefits';
import WebDesignStructureFirst from '@/components/web-design/WebDesignStructureFirst';
import WebDesignBuildOptions from '@/components/web-design/WebDesignBuildOptions';
import WebDesignProcess from '@/components/web-design/WebDesignProcess';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import ClientLogos from '@/components/ClientLogos';

const EnglishWebDesign = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('en');
  }, [setLanguage]);

  const webdesignFaqs = [
    {
      question: "How much does professional web design cost?",
      answer: "The cost depends on the scope and requirements of your project. Simple business websites start at around €3,000, while more complex projects with e-commerce functionality or custom features typically range from €5,000 to €15,000. We always provide transparent pricing without hidden costs."
    },
    {
      question: "How long does it take to design and develop a website?",
      answer: "The timeline varies based on project complexity. A simple business website typically takes 4-6 weeks, while larger projects with custom functionality may take 8-12 weeks. We'll provide you with a detailed timeline during our initial consultation."
    },
    {
      question: "Do you design mobile-responsive websites?",
      answer: "Absolutely! All our websites are designed mobile-first and are fully responsive across all devices. We ensure your website looks and functions perfectly on smartphones, tablets, and desktop computers."
    },
    {
      question: "Can you redesign my existing website?",
      answer: "Yes, we specialize in website redesigns. We'll analyze your current site, identify areas for improvement, and create a modern, high-performing website that better serves your business goals and user needs."
    },
    {
      question: "Do you provide ongoing support after the website launch?",
      answer: "Yes, we offer comprehensive post-launch support including technical maintenance, content updates, security monitoring, and performance optimization. We're here to ensure your website continues to perform at its best."
    }
  ];

  return (
    <PageLayout>
      <Helmet>
        <title>Web Design Mainz – Individual & Successful</title>
        <meta name="description" content="Creative web design in Mainz – individually tailored to your goals. We design websites that inspire and deliver measurable results." />
        <meta name="keywords" content="Web Design Mainz, Creative Website Design, Custom Web Design, Professional Web Design Agency Mainz, Responsive Web Design" />
        <meta name="focus-keyword" content="Web Design Mainz" />
      </Helmet>
      
      <WebDesignHero />
      <WebDesignBenefits />
      <WebDesignStructureFirst />
      <WebDesignBuildOptions />
      <WebDesignProcess />
      
      <FAQ 
        customFaqs={webdesignFaqs}
        customTitle="Frequently Asked Questions About Web Design"
        customCtaText="Have more questions? Contact us"
      />
      
      <CTA 
        title="Ready to create your perfect website?"
        subtitle="Let's design a website that not only looks amazing but also drives real business results."
        primaryCta="Start Your Web Design Project"
        secondaryCta="Schedule a Design Consultation"
      />
      
      <ClientLogos />
    </PageLayout>
  );
};

export default EnglishWebDesign;
