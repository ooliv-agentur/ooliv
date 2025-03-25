
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
      answer: "No. We use ChatGPT for structured drafts—but every word is refined by our editorial team."
    },
    {
      question: "Is AI-generated content SEO-compliant?",
      answer: "Yes—when used strategically. We follow SEO best practices and optimize all outputs for search intent and clarity."
    },
    {
      question: "Will my website look like 'AI art'?",
      answer: "No. We use AI tools selectively, always within your brand identity. The result is custom, not generic."
    },
    {
      question: "How is my data protected when AI tools are used?",
      answer: "We never upload sensitive data to open platforms and use secure, controlled environments for AI-assisted work."
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
