
import React from 'react';
import PageLayout from '@/components/PageLayout';
import ContentHero from '@/components/content-creation/ContentHero';
import ContentBenefits from '@/components/content-creation/ContentBenefits';
import ContentServices from '@/components/content-creation/ContentServices';
import ContentProcess from '@/components/content-creation/ContentProcess';
import ContentExpertInsight from '@/components/content-creation/ContentExpertInsight';
import ContentCaseStudies from '@/components/content-creation/ContentCaseStudies';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';

const ContentCreation = () => {
  // Custom FAQ items for Content Creation page with web content focus
  const contentFaqs = [
    {
      question: "How does ooliv create content for websites?",
      answer: "We develop a full content strategy based on keyword research, then deliver modular, conversion-focused assets: text, images, video, illustrations — ready to launch."
    },
    {
      question: "Can I order just content without design?",
      answer: "Yes. Our content packages work standalone or in combination with design and development projects."
    },
    {
      question: "What if I don't have a logo or brand visuals yet?",
      answer: "We can create those for you — from scratch or as a rebranding process."
    },
    {
      question: "Do you use AI for content?",
      answer: "Yes — we use ChatGPT, Midjourney, and Sora to boost speed and quality. But every result is reviewed and refined by our team."
    },
    {
      question: "Do you optimize content for SEO?",
      answer: "Always. We start every project with keyword research (via Ahrefs) so the content ranks from day one."
    }
  ];
  
  return (
    <PageLayout className="overflow-x-hidden">
      <ContentHero />
      <ContentBenefits />
      <ContentServices />
      <ContentProcess />
      <ContentExpertInsight />
      <ContentCaseStudies />
      <FAQ customFaqs={contentFaqs} />
      <CTA 
        title="Let's Create Content That Converts"
        subtitle="We're not just filling pages — we're building momentum. Let's create content that ranks, resonates, and drives real business results."
        primaryCta="Get a Free Content Strategy Call"
        secondaryCta="Request a Sample Project"
      />
    </PageLayout>
  );
};

export default ContentCreation;
