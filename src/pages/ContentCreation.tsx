
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import ContentHero from '@/components/content-creation/ContentHero';
import ContentBenefits from '@/components/content-creation/ContentBenefits';
import ContentServices from '@/components/content-creation/ContentServices';
import ContentProcess from '@/components/content-creation/ContentProcess';
import ContentCaseStudies from '@/components/content-creation/ContentCaseStudies';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';

const ContentCreation = () => {
  const { t } = useLanguage();
  
  // Custom FAQ items for Content Creation page
  const contentFaqs = [
    {
      question: "How does the content creation process work at ooliv?",
      answer: "We start with a clear content strategy and deliver all website content: text, image, video, and illustration – fast, SEO-optimized and aligned with your corporate design."
    },
    {
      question: "What tools does ooliv use for content production?",
      answer: "We combine AI tools like ChatGPT, Midjourney and Sora with manual review – for maximum efficiency and quality."
    },
    {
      question: "Can I order content without web design?",
      answer: "Yes. We also deliver content for existing websites or as support for in-house teams and agencies."
    },
    {
      question: "Do I receive texts in multiple languages?",
      answer: "Of course. We offer content in English, German, and other languages upon request."
    },
    {
      question: "What if I don't have a logo or images yet?",
      answer: "No problem – our design team develops all necessary assets for your brand presence."
    }
  ];
  
  return (
    <PageLayout className="overflow-x-hidden">
      <ContentHero />
      <ContentBenefits />
      <ContentServices />
      <ContentProcess />
      <ContentCaseStudies />
      <FAQ customFaqs={contentFaqs} />
      <CTA 
        title="Website Content That Sells, Not Just Informs"
        subtitle="Whether complete website texts, perfect images or videos – we deliver content that works."
        primaryCta="Get a Free Consultation"
        secondaryCta="Request a Sample Project"
      />
    </PageLayout>
  );
};

export default ContentCreation;
