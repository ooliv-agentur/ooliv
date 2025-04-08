import React from 'react';
import PageLayout from '@/components/PageLayout';
import AiTechHero from '@/components/ai-technologies/AiTechHero';
import AiTechBenefits from '@/components/ai-technologies/AiTechBenefits';
import AiToolsSection from '@/components/ai-technologies/AiToolsSection';
import AiTechServices from '@/components/ai-technologies/AiTechServices';
import AiTechCaseStudies from '@/components/ai-technologies/AiTechCaseStudies';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import { useLanguage } from '@/contexts/LanguageContext';

const AiTechnologies = () => {
  const { t, language } = useLanguage();
  
  // AI tools data
  const aiTools = [
    {
      name: "ChatGPT",
      logoSrc: "/chatgpt-logo.svg",
      description: "Used for content drafts, metadata, FAQs and SEO snippets – always refined and finalized by our editorial team."
    },
    {
      name: "Midjourney",
      logoSrc: "/midjourney-logo.svg",
      description: "For expressive, custom visuals that go beyond stock photos – especially when no photo assets exist."
    },
    {
      name: "Sora (Video AI)",
      logoSrc: "/sora-logo.svg",
      description: "Ideal for short motion clips or atmospheric video backgrounds – tailored to your brand and message."
    }
  ];
  
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
      
      <AiToolsSection 
        title="How We Use AI Without Losing Human Strategy"
        subtitle="We integrate AI where it saves time and adds value – not to replace expertise."
        tools={aiTools}
        note="We use AI as a creative accelerator – never as a shortcut. Final quality and strategy always come from people."
      />
      
      <CaseStudiesSection />
      
      <FAQ customFaqs={aiTechFaqs} />
      <CTA 
        title="Ready to harness AI for your business?"
        subtitle="Let's discuss how our team can help implement AI solutions that drive real results."
        primaryCta="Start Your AI Project"
      >
        {/* New claim section */}
        <section className="mt-12 text-center">
          <div className="container mx-auto px-4">
            <p className="text-lg text-brand-text font-medium">
              100+ successful projects • Trusted by leading companies • AI-powered strategies for maximum impact
            </p>
          </div>
        </section>
      </CTA>
    </PageLayout>
  );
};

export default AiTechnologies;
