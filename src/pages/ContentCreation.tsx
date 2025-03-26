
import React from 'react';
import PageLayout from '@/components/PageLayout';
import ContentHero from '@/components/content-creation/ContentHero';
import ContentBenefits from '@/components/content-creation/ContentBenefits';
import ContentServices from '@/components/content-creation/ContentServices';
import ContentProcess from '@/components/content-creation/ContentProcess';
import ContentExpertInsight from '@/components/content-creation/ContentExpertInsight';
import ContentService from '@/components/content-creation/ContentService';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import CaseStudiesSection from '@/components/CaseStudiesSection';

const ContentCreation = () => {
  // Custom FAQ items for Content Creation page with web content focus
  const contentFaqs = [
    {
      question: "How do you create content for websites?",
      answer: "We create a full content strategy, starting with keyword research, then delivering modular, conversion-focused assets: text, images, video, and illustrations — all ready to launch."
    },
    {
      question: "Can I order content without design?",
      answer: "Yes — we can deliver just content (text, images, videos), and you can integrate it into your existing website."
    },
    {
      question: "What if I don't have a logo or brand visuals?",
      answer: "We can help with that too. Our team creates logos, icons, and visual systems that align with your brand identity."
    },
    {
      question: "Do you use AI for content?",
      answer: "Yes, but we don't rely on AI blindly. We use tools like ChatGPT and Midjourney, but everything is refined and curated by our team."
    },
    {
      question: "Do you optimize content for SEO?",
      answer: "Yes. Every piece of content is SEO-friendly, from headlines to the metadata."
    }
  ];
  
  return (
    <PageLayout className="overflow-x-hidden">
      <ContentHero />
      <ContentBenefits />
      <ContentService />
      <ContentServices />
      <ContentProcess />
      <ContentExpertInsight />
      
      {/* Use the global case study component instead of the specific ContentCaseStudies */}
      <section className="py-24 bg-gradient-to-br from-brand-background via-white to-brand-backgroundAlt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4 text-brand-heading">
            Real Results from Real Clients
          </h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-brand-text">
            See how our content strategies deliver measurable business outcomes through tailored messaging, SEO optimization, and visual clarity.
          </p>
          <CaseStudiesSection showAll={true} showCta={true} />
        </div>
      </section>
      
      <FAQ 
        customFaqs={contentFaqs}
        customTitle="Frequently Asked Questions about Content Creation" 
      />
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
