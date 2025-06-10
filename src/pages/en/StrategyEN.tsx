
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import StrategyHero from '@/components/strategy/StrategyHero';
import StrategyBenefits from '@/components/strategy/StrategyBenefits';
import StrategyApproach from '@/components/strategy/StrategyApproach';
import StrategyCta from '@/components/strategy/StrategyCta';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import ClientLogos from '@/components/ClientLogos';
import StrategySEOTextEN from '@/components/strategy/StrategySEOTextEN';

const EnglishStrategy = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('en');
  }, [setLanguage]);

  const strategyFaqs = [
    {
      question: "What does your strategy consultation include?",
      answer: "Our strategy consultation includes a comprehensive analysis of your current digital presence, competitor research, target audience analysis, user experience optimization, and development of a customized digital strategy tailored to your business goals."
    },
    {
      question: "How long does it take to develop a digital strategy?",
      answer: "Typically, a comprehensive digital strategy takes 2-4 weeks to develop, depending on the complexity of your business and the scope of analysis required. We ensure thorough research and strategic planning for optimal results."
    },
    {
      question: "Do you help with implementation of the strategy?",
      answer: "Absolutely! We don't just create strategies - we help implement them. This includes website optimization, content development, SEO implementation, and ongoing support to ensure your strategy delivers measurable results."
    },
    {
      question: "How do you measure the success of a digital strategy?",
      answer: "We track key performance indicators (KPIs) such as website traffic, lead generation, conversion rates, search engine rankings, and overall business growth. We provide regular reports to show progress and ROI."
    },
    {
      question: "Can you optimize our existing website's user experience?",
      answer: "Yes, UX optimization is a core part of our strategy services. We analyze user behavior, identify pain points, and implement improvements to enhance user experience and increase conversions on your existing website."
    }
  ];

  return (
    <PageLayout seoText={<StrategySEOTextEN />}>
      <Helmet>
        <title>Strategy & Concept for Digital Success – ooliv Agency Mainz</title>
        <meta name="description" content="We develop individual digital strategies including concept and optimize your website's user experience – for more visibility, more leads and sustainable success." />
        <meta name="keywords" content="Digital Strategy Mainz, UX Optimization, Digital Concept, Strategy Consultation Mainz, User Experience Optimization" />
        <meta name="focus-keyword" content="Digital Strategy Mainz" />
      </Helmet>
      
      <StrategyHero />
      <StrategyBenefits />
      <StrategyApproach />
      <StrategyCta />
      
      <FAQ 
        customFaqs={strategyFaqs}
        customTitle="Frequently Asked Questions About Strategy & Concept"
        customCtaText="More strategy questions? Contact us"
      />
      
      <CTA 
        title="Ready to develop your digital strategy?"
        subtitle="Let's create a comprehensive strategy that drives measurable results and sustainable growth for your business."
        primaryCta="Schedule Strategy Call"
        secondaryCta="Learn More About Our Approach"
      />
      
      <ClientLogos />
    </PageLayout>
  );
};

export default EnglishStrategy;
