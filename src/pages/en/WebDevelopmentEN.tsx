
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import PageHero from '@/components/PageHero';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import ClientLogos from '@/components/ClientLogos';

const EnglishWebDevelopment = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('en');
  }, [setLanguage]);

  const webdevFaqs = [
    {
      question: "What technologies do you use for web development?",
      answer: "We primarily work with WordPress for content management systems, but also develop custom solutions using modern technologies like React, TypeScript, and Node.js. We choose the best technology stack based on your specific requirements and goals."
    },
    {
      question: "Do you develop e-commerce websites?",
      answer: "Yes, we develop comprehensive e-commerce solutions using WooCommerce for WordPress or Shopify for specialized online stores. We create secure, scalable, and user-friendly online shops that drive sales and growth."
    },
    {
      question: "Can you integrate third-party services and APIs?",
      answer: "Absolutely! We have extensive experience integrating various third-party services including payment gateways, CRM systems, email marketing tools, analytics platforms, and custom APIs to enhance your website's functionality."
    },
    {
      question: "Do you provide website maintenance and updates?",
      answer: "Yes, we offer comprehensive maintenance packages including security updates, performance optimization, content updates, backup management, and technical support to keep your website running smoothly."
    },
    {
      question: "How do you ensure website security?",
      answer: "We implement multiple security layers including SSL certificates, regular security updates, secure coding practices, firewall protection, malware scanning, and regular backups to protect your website and data."
    }
  ];

  return (
    <PageLayout>
      <Helmet>
        <title>WordPress Agency Mainz – Technically Strong</title>
        <meta name="description" content="Your WordPress agency in Mainz: Modern web development, technically sophisticated and individual. We implement your digital vision reliably." />
        <meta name="keywords" content="WordPress Agency Mainz, Web Development Mainz, Custom WordPress Development, Professional WordPress Developers, Technical Web Solutions" />
        <meta name="focus-keyword" content="WordPress Agency Mainz" />
      </Helmet>
      
      <PageHero 
        title="WordPress Agency Mainz – Technically Strong"
        subtitle="Your WordPress agency in Mainz: Modern web development, technically sophisticated and individual. We implement your digital vision reliably."
        startProjectText="Start Your Development Project"
        seeWorkText="View Our Technical Work"
      />
      
      <FAQ 
        customFaqs={webdevFaqs}
        customTitle="Frequently Asked Questions About Web Development"
        customCtaText="Have technical questions? Contact us"
      />
      
      <CTA 
        title="Ready to build your technical solution?"
        subtitle="Let's develop a robust, scalable website that meets your exact technical requirements."
        primaryCta="Start Your Development Project"
        secondaryCta="Technical Consultation"
      />
      
      <ClientLogos />
    </PageLayout>
  );
};

export default EnglishWebDevelopment;
