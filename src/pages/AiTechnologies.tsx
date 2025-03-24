
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
  
  // Custom FAQ items for AI Technologies page
  const aiTechFaqs = [
    {
      question: "Does ooliv replace copywriters with ChatGPT?",
      answer: "No. We use ChatGPT to generate structured drafts and ideas—but all content is reviewed, refined, and customized by real people."
    },
    {
      question: "Is AI-generated content good for SEO?",
      answer: "Only when done right. We combine AI speed with SEO strategy and editorial review to ensure top performance and compliance."
    },
    {
      question: "Will my website look like 'AI art'?",
      answer: "Not at ooliv. We use Midjourney to inspire unique designs, not to mass-produce them. Final visuals are aligned with your brand."
    },
    {
      question: "How do you protect client data when using AI tools?",
      answer: "We follow strict data protection protocols and never use client-sensitive information with public AI tools. Your data stays private and secure."
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
        title="Ready to Build Smarter?"
        subtitle="Let's use AI the right way—fast, strategic, and always human-driven."
        primaryCta="Start Your Project"
        secondaryCta="Request a Free Demo"
      />
    </PageLayout>
  );
};

export default AiTechnologies;
