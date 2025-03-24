
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import AIHero from '@/components/ai-solutions/AIHero';
import AIBenefits from '@/components/ai-solutions/AIBenefits';
import AIServices from '@/components/ai-solutions/AIServices';
import AIProcess from '@/components/ai-solutions/AIProcess';
import AICaseStudies from '@/components/ai-solutions/AICaseStudies';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';

const AISolutions = () => {
  const { t } = useLanguage();
  
  // Custom FAQ items for AI Solutions page
  const aiFaqs = [
    {
      question: "How do you ensure AI-generated content is unique?",
      answer: "We combine AI tools with human expertise—using AI for structure and research while our team ensures brand voice, fact-checking, and originality in the final content."
    },
    {
      question: "What AI technologies do you use for content creation?",
      answer: "We leverage GPT-4, Claude, DALL-E, Midjourney, and other specialized AI tools, selecting the right tool for each specific content need."
    },
    {
      question: "Are there limitations to what AI can create?",
      answer: "AI excels at structured content and creative variations, but has limitations with deep industry expertise, emotional storytelling, and nuanced brand voice—areas where our human experts step in."
    },
    {
      question: "How do you maintain brand consistency with AI?",
      answer: "We create custom prompts and training materials based on your brand guidelines, ensuring all AI outputs align with your established voice, terminology, and values."
    },
    {
      question: "Is AI-generated content SEO-friendly?",
      answer: "When properly optimized, yes. We combine AI efficiency with strategic keyword research, semantic relevance, and expert editing to create content that ranks well."
    }
  ];
  
  return (
    <PageLayout className="overflow-x-hidden">
      <AIHero />
      <AIBenefits />
      <AIServices />
      <AIProcess />
      <AICaseStudies />
      <FAQ customFaqs={aiFaqs} />
      <CTA 
        title="Harness AI for Your Business Growth"
        subtitle="From content automation to data analysis—we'll help you implement AI solutions that deliver tangible business results."
        primaryCta="Explore AI Solutions"
        secondaryCta="Schedule a Demo"
      />
    </PageLayout>
  );
};

export default AISolutions;
