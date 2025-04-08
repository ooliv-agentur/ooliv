
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import PageHero from '@/components/PageHero';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEOTextSection from '@/components/SEOTextSection';
import ClientLogos from '@/components/ClientLogos';
import CTA from '@/components/CTA';
import FAQ from '@/components/FAQ';
import TeamTeaser from '@/components/TeamTeaser';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import CaseStudiesSection from '@/components/CaseStudiesSection';

const ContentCreation = () => {
  const { setLanguage } = useLanguage();

  useEffect(() => {
    setLanguage('en');
  }, [setLanguage]);

  const simplifiedFaqs = [
    {
      question: "What types of content do you create?",
      answer: "We create a wide range of content, including blog posts, articles, website copy, social media content, email newsletters, video scripts, and more. Our goal is to provide content solutions tailored to your specific needs."
    },
    {
      question: "How do you ensure the content is high quality?",
      answer: "Our content creation process involves thorough research, strategic planning, professional writing, and meticulous editing. We also optimize content for SEO to ensure it reaches your target audience effectively."
    },
    {
      question: "Can you help with content strategy?",
      answer: "Yes, we offer content strategy services to help you define your content goals, identify your target audience, and develop a content plan that aligns with your business objectives. A solid strategy is key to content success."
    },
    {
      question: "How long does it take to create content?",
      answer: "The timeline for content creation varies depending on the type and complexity of the project. We work closely with you to establish realistic deadlines and ensure timely delivery without compromising quality."
    },
    {
      question: "Do you offer revisions?",
      answer: "Yes, we offer revisions to ensure your complete satisfaction with the content. We value your feedback and are committed to making any necessary adjustments to meet your expectations."
    }
  ];

  return (
    <PageLayout>
      <PageHero
        badge="Content That Converts"
        title="Compelling Content Creation Services"
        subtitle="Engage your audience and drive results with our expert content creation services. From blog posts to website copy, we craft content that tells your story and converts visitors into customers."
        primaryCta={{
          text: "Start Your Content Project",
          link: "/contact"
        }}
        secondaryCta={{
          text: "View Our Portfolio",
          link: "/case-studies"
        }}
      />

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-brand-heading">
            Content That Drives Results
          </h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-brand-text">
            Our content creation services are designed to help you achieve your business goals. We focus on creating content that is engaging, informative, and optimized for search engines.
          </p>
          <BeforeAfterSlider />
        </div>
      </section>

      <TeamTeaser />
      <ClientLogos />

      <CaseStudiesSection />

      <FAQ
        customFaqs={simplifiedFaqs}
        customTitle="Frequently Asked Questions"
        customCtaText="Have more questions? Contact us"
      />

      <CTA
        title="Ready for content that connects and converts?"
        subtitle="Let's discuss how our content creation services can help your business reach its goals."
        primaryCta="Start Your Content Project"
      />

      <SEOTextSection />
    </PageLayout>
  );
};

export default ContentCreation;
