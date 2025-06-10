
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import PageHero from '@/components/PageHero';
import AboutUsSEOTextEN from '@/components/about-us/AboutUsSEOTextEN';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import ClientLogos from '@/components/ClientLogos';

const EnglishAboutUs = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('en');
  }, [setLanguage]);

  const aboutFaqs = [
    {
      question: "Who is behind ooliv?",
      answer: "ooliv is led by Uli Schönleber, an experienced digital marketing expert based in Mainz. With over 15 years in the industry, our team combines strategic thinking with hands-on implementation to deliver results that matter."
    },
    {
      question: "What makes ooliv different from other agencies?",
      answer: "We focus on measurable results rather than just pretty designs. You work directly with the founder, ensuring consistent communication and strategic direction. We combine creativity with data-driven decision making for optimal outcomes."
    },
    {
      question: "What is your company philosophy?",
      answer: "We believe in honest, transparent partnerships with our clients. No buzzwords, no empty promises – just clear communication, realistic timelines, and strategies that actually work. Your success is our success."
    },
    {
      question: "How long have you been in business?",
      answer: "ooliv was founded in 2008, giving us over 15 years of experience in digital marketing. We've evolved with the industry while maintaining our core values of quality, reliability, and client focus."
    },
    {
      question: "Do you work with businesses of all sizes?",
      answer: "Yes, we work with startups, small businesses, and established companies. Our approach scales to fit your needs and budget, whether you're just starting out or looking to optimize an existing digital presence."
    }
  ];

  return (
    <PageLayout seoText={<AboutUsSEOTextEN />}>
      <Helmet>
        <title>About Us – ooliv Marketing Agency Mainz</title>
        <meta name="description" content="Learn about ooliv – Your reliable marketing agency in Mainz. Personal, professional, and focused on your digital success since 2008." />
        <meta name="keywords" content="About ooliv Mainz, Marketing Agency Team, Digital Agency Mainz, About Us Marketing, ooliv Company" />
        <meta name="focus-keyword" content="Marketing Agency Mainz" />
      </Helmet>
      
      <PageHero 
        title="About Us – ooliv Marketing Agency Mainz"
        subtitle="Learn about ooliv – Your reliable marketing agency in Mainz. Personal, professional, and focused on your digital success since 2008."
        startProjectText="Work With Us"
        seeWorkText="See Our Work"
      />
      
      <FAQ 
        customFaqs={aboutFaqs}
        customTitle="Frequently Asked Questions About ooliv"
        customCtaText="Want to know more? Contact us"
      />
      
      <CTA 
        title="Ready to work with a reliable partner?"
        subtitle="Let's build a successful digital presence together with transparency and proven expertise."
        primaryCta="Start Your Project"
        secondaryCta="Get to Know Us Better"
      />
      
      <ClientLogos />
    </PageLayout>
  );
};

export default EnglishAboutUs;
