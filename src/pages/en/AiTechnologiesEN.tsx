
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import AiTechHero from '@/components/ai-technologies/AiTechHero';
import AiTechBenefits from '@/components/ai-technologies/AiTechBenefits';
import AiTechServices from '@/components/ai-technologies/AiTechServices';
import AiToolsSection from '@/components/ai-technologies/AiToolsSection';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import { useLanguage } from '@/contexts/LanguageContext';

const EnglishAiTechnologies = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('en');
  }, [setLanguage]);
  
  // AI tools data for English page
  const aiTools = [
    {
      name: "ChatGPT",
      logoSrc: "/lovable-uploads/chatgpt.png",
      description: "Texts, FAQs, SEO snippets and translations - developed with AI, refined by our editors."
    },
    {
      name: "Midjourney",
      logoSrc: "/lovable-uploads/Midjourney.png", 
      description: "Individual visuals & illustrations for brands that don't want stock photos."
    },
    {
      name: "Sora (Video AI)",
      logoSrc: "/lovable-uploads/sora.png",
      description: "Animated video elements, background videos and motion design - tailored to your brand."
    }
  ];

  // Custom FAQ items for AI page
  const aiFaqs = [
    {
      question: "How do we integrate AI into existing marketing processes?",
      answer: "We analyze your current processes, identify the biggest efficiency potentials and seamlessly integrate the appropriate AI tools into your workflow."
    },
    {
      question: "Do we stay within legal boundaries with AI-created content?",
      answer: "Absolutely. We pay attention to legal and ethical compliance, from copyright to data protection, and maintain human control over all outputs."
    },
    {
      question: "What concrete ROI advantages does AI bring in marketing?",
      answer: "Typical benefits: 70-80% time savings in content creation, 30-50% lower costs per lead, and significantly faster response times to market changes."
    },
    {
      question: "Is the quality of AI-generated content really good?",
      answer: "With the right prompt engineering and human post-processing, the quality is excellent. AI creates the raw text, experts refine it for optimal results."
    },
    {
      question: "Which AI tools do we use in our projects?",
      answer: "We use a broad spectrum: ChatGPT for text creation, DALL-E and Midjourney for image generation, Claude for complex tasks, and specialized tools for SEO and data analysis."
    }
  ];
  
  return (
    <PageLayout className="overflow-x-hidden">
      <Helmet>
        <title>AI Agency for Web & Marketing | ooliv</title>
        <meta name="description" content="ooliv integrates Artificial Intelligence into strategy, content and UX - as an AI agency for modern, scalable web solutions." />
      </Helmet>

      <AiTechHero />
      <AiTechBenefits />
      <AiTechServices />
      <AiToolsSection 
        title="AI-powered - human-led"
        subtitle="We integrate AI where it saves time and adds value - not to replace expertise."
        tools={aiTools}
        note="We use AI as a creative accelerator - never as a shortcut. Quality and strategy always come from humans."
      />
      
      <CaseStudiesSection />
      
      <FAQ 
        customFaqs={aiFaqs} 
        customTitle="Frequently Asked Questions about AI"
      />
      <CTA 
        title="AI-based marketing solutions for your company"
        subtitle="Discover how we can take your marketing to the next level with AI-powered strategies and tools."
        primaryCta="Request AI potential analysis"
        secondaryCta="Schedule strategy talk"
        secondaryCtaLink="/en/contact"
      />
    </PageLayout>
  );
};

export default EnglishAiTechnologies;
