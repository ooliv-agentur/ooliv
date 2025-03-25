
import React from 'react';
import PageLayout from '@/components/PageLayout';
import AiTechHero from '@/components/ai-technologies/AiTechHero';
import AiTechBenefits from '@/components/ai-technologies/AiTechBenefits';
import AiTechServices from '@/components/ai-technologies/AiTechServices';
import AiTechCaseStudies from '@/components/ai-technologies/AiTechCaseStudies';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import { useLanguage } from '@/contexts/LanguageContext';

const AiTechnologies = () => {
  const { t } = useLanguage();
  
  // Custom FAQ items for AI Technologies page based on prompt
  const aiTechFaqs = [
    {
      question: "Does ooliv replace writers with ChatGPT?",
      answer: "No. We use ChatGPT to generate drafts, but all content is reviewed and refined by humans."
    },
    {
      question: "Is AI-generated content good for SEO?",
      answer: "Yes — when used properly. We follow SEO best practices and ensure every word matches your goals."
    },
    {
      question: "Will my site look like it was made by AI?",
      answer: "No. We use AI to speed up creative work — but all visuals, text, and design are tailored to your brand."
    },
    {
      question: "Is my data safe with AI tools?",
      answer: "Yes. We use secure environments and never upload sensitive data to public platforms."
    }
  ];
  
  return (
    <PageLayout className="overflow-x-hidden">
      <AiTechHero />
      <AiTechBenefits />
      <AiTechServices />
      <AiTechCaseStudies />
      <FAQ customFaqs={aiTechFaqs} />
      <CTA 
        title="Let's Use AI the Right Way"
        subtitle="With ooliv, AI speeds up the process — but never replaces quality or strategy. Let's create something better, faster, and smarter."
        primaryCta="Start Your Project"
        secondaryCta="Request a Free Demo"
      />
    </PageLayout>
  );
};

export default AiTechnologies;
