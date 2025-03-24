
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import LeadGenHero from '@/components/lead-generation/LeadGenHero';
import LeadGenBenefits from '@/components/lead-generation/LeadGenBenefits';
import LeadGenServices from '@/components/lead-generation/LeadGenServices';
import LeadGenProcess from '@/components/lead-generation/LeadGenProcess';
import LeadGenCaseStudies from '@/components/lead-generation/LeadGenCaseStudies';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';

const LeadGeneration = () => {
  const { t } = useLanguage();
  
  // Custom FAQ items for Lead Generation page
  const leadGenFaqs = [
    {
      question: "How do you define a qualified lead?",
      answer: "We define leads based on your specific criteria, focusing on contact information from prospects who match your target market and show genuine interest in your solutions."
    },
    {
      question: "Which lead generation channels work best?",
      answer: "The most effective channels vary by industry and target audience. We typically see strong results from LinkedIn for B2B, Google Ads for services, and Facebook/Instagram for B2C."
    },
    {
      question: "What's your approach to lead nurturing?",
      answer: "We implement multi-touch sequences across email, retargeting, and content marketing to guide leads through awareness to decision stages."
    },
    {
      question: "How do you measure lead generation success?",
      answer: "Beyond lead volume, we track quality metrics like qualification rate, sales-accepted leads, conversion rates, cost per acquisition, and ultimately ROI."
    },
    {
      question: "Do you handle both B2B and B2C lead generation?",
      answer: "Yes, we have specialized teams and processes for both B2B (typically higher-value, consultative) and B2C (higher-volume, transactional) lead generation."
    }
  ];
  
  return (
    <PageLayout className="overflow-x-hidden">
      <LeadGenHero />
      <LeadGenBenefits />
      <LeadGenServices />
      <LeadGenProcess />
      <LeadGenCaseStudies />
      <FAQ customFaqs={leadGenFaqs} />
      <CTA 
        title="Start Generating Better Leads Today"
        subtitle="From strategy to execution—we'll build a lead generation system that delivers qualified prospects ready to buy."
        primaryCta="Discuss Your Lead Gen Strategy"
        secondaryCta="Schedule a Consultation"
      />
    </PageLayout>
  );
};

export default LeadGeneration;
