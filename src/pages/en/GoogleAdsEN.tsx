
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import PageHero from '@/components/PageHero';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import ClientLogos from '@/components/ClientLogos';

const EnglishGoogleAds = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('en');
  }, [setLanguage]);

  const googleAdsFaqs = [
    {
      question: "How much should I budget for Google Ads?",
      answer: "Your Google Ads budget depends on your industry, competition, and goals. We typically recommend starting with at least €1,000-€3,000 per month for meaningful results, plus our management fee. We'll help you determine the optimal budget based on your specific situation."
    },
    {
      question: "How quickly can I see results from Google Ads?",
      answer: "Unlike SEO, Google Ads can generate immediate results. You can start seeing clicks and impressions within hours of launching your campaigns. However, optimal performance typically develops over 2-4 weeks as we gather data and optimize."
    },
    {
      question: "What's included in your Google Ads management?",
      answer: "Our service includes campaign strategy, keyword research, ad creation, landing page optimization, bid management, A/B testing, conversion tracking, regular performance monitoring, and detailed monthly reporting."
    },
    {
      question: "Do you manage other advertising platforms besides Google?",
      answer: "Yes, we also manage advertising campaigns on Microsoft Ads (Bing), Facebook Ads, LinkedIn Ads, and other relevant platforms based on where your target audience is most active."
    },
    {
      question: "How do you measure campaign success?",
      answer: "We track key metrics including click-through rates, conversion rates, cost per acquisition, return on ad spend (ROAS), quality scores, and overall business impact to ensure your campaigns deliver profitable results."
    }
  ];

  return (
    <PageLayout>
      <Helmet>
        <title>Google Ads Agency Mainz – More Leads</title>
        <meta name="description" content="With ooliv as your Google Ads agency in Mainz, you reach new customers. We optimize your campaigns for maximum results." />
        <meta name="keywords" content="Google Ads Agency Mainz, Google Ads Management, PPC Agency Mainz, Google Advertising Mainz, Paid Search Marketing" />
        <meta name="focus-keyword" content="Google Ads Agency Mainz" />
      </Helmet>
      
      <PageHero 
        title="Google Ads Agency Mainz – More Leads"
        subtitle="With ooliv as your Google Ads agency in Mainz, you reach new customers. We optimize your campaigns for maximum results."
        startProjectText="Launch Your Campaign"
        seeWorkText="View Campaign Results"
      />
      
      <FAQ 
        customFaqs={googleAdsFaqs}
        customTitle="Frequently Asked Questions About Google Ads"
        customCtaText="More Google Ads questions? Contact us"
      />
      
      <CTA 
        title="Ready to launch profitable ad campaigns?"
        subtitle="Let's create Google Ads campaigns that generate qualified leads and drive business growth."
        primaryCta="Launch Your Campaign"
        secondaryCta="Google Ads Consultation"
      />
      
      <ClientLogos />
    </PageLayout>
  );
};

export default EnglishGoogleAds;
