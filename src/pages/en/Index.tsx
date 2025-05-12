
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import PageLayout from "@/components/PageLayout";
import EnglishAboutSection from "@/components/en/EnglishAboutSection";
import EnglishTeamTeaser from "@/components/en/EnglishTeamTeaser";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import EnglishSolutionSection from "@/components/en/EnglishSolutionSection";
import TechnologiesSection from "@/components/en/TechnologiesSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import SEOTextSectionEN from "@/components/en/SEOTextSectionEN";
import { useLanguage } from '@/contexts/LanguageContext';
import PageHero from '@/components/PageHero';

const EnglishIndex = () => {
  const { setLanguage } = useLanguage();
  
  // Use useEffect to set language once after component mounts
  useEffect(() => {
    setLanguage('en');
    // Add a more detailed debug console log
    console.log('EnglishIndex component mounted - setting language to English');
  }, []);
  
  const simplifiedFaqs = [
    {
      question: "What is your website creation process?",
      answer: "Our website projects follow a clear process: First, we analyze your goals, target audience, and competitors together. Then we create content and structure. Next, we design a modern, user-friendly interface and implement your website with clean code. After launch, we continue to support you with maintenance and updates."
    },
    {
      question: "How much does a custom WordPress website cost at ooliv?",
      answer: "Pricing depends on scope, design, and functionality. Simple one-pagers start around €3,000, mid-sized websites with SEO range from €5,000 to €10,000. Larger projects like shops or multilingual sites start at around €10,000. We always provide transparent quotes without hidden fees."
    },
    {
      question: "How long does it take to create a custom website?",
      answer: "The timeline depends on project scope. Smaller websites can be implemented in a few weeks, while larger sites typically need 6 to 10 weeks. We will coordinate the schedule individually with you and work efficiently towards shared deadlines."
    },
    {
      question: "What does ongoing support include after my website launches?",
      answer: "After going live, we don't leave you on your own: We handle technical updates, small changes, and advise on further development of your website. If desired, we can also provide long-term support with SEO, content, or Google Ads."
    },
    {
      question: "Why is ooliv the right agency in Mainz for my project?",
      answer: "We work directly, efficiently and as equal partners. With us, you always speak to the CEO. Strategy, design, and technology come from a single source. Our websites are SEO-strong, clearly structured, and measurably successful – and we're rooted in Mainz, with clients far beyond."
    }
  ];

  return (
    <>
      <Helmet>
        {/* Force immediate application of these tags with higher priority */}
        <html lang="en" />
        <title>Web Design Agency Mainz – Custom Websites That Deliver Results</title>
        <meta 
          name="description" 
          content="ooliv – Your Web Design Agency in Mainz. We create WordPress, e-commerce, and custom websites focused on SEO, UX, and measurable business growth." 
        />
      </Helmet>
      <PageLayout className="overflow-x-hidden">
        <PageHero 
          isHomepage={true}
          backgroundType="image"
        />
        <EnglishAboutSection />
        <EnglishTeamTeaser />
        
        <div className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-brand-heading">Your Website Should Work for You—Not Against You.</h2>
            <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-brand-text">
              Many businesses struggle with websites that don't perform. We develop websites that generate leads, build trust, and rank well on Google.
            </p>
            <BeforeAfterSlider />
          </div>
        </div>
        
        <EnglishSolutionSection />
        
        <TechnologiesSection />
        
        <CaseStudiesSection 
          customTitle="Real Results from Real Clients"
          customSubtitle="We deliver websites and strategies that showcase what makes your business special."
          customBodyText="See how we've helped businesses achieve sustainable growth through clear positioning, strong content, SEO performance, and measurable UX optimization."
        />
        
        <FAQ 
          customFaqs={simplifiedFaqs}
          customTitle="Frequently Asked Questions"
          customCtaText="More questions? Contact us"
        />
        
        <CTA 
          lightBackground={true}
          title="Ready to transform your digital presence?"
          subtitle="Let's discuss how our team can help your business achieve its online goals."
          primaryCta="Start Your Website Project"
        />
      </PageLayout>
      
      {/* SEO Text Section placed OUTSIDE PageLayout to match German style */}
      <SEOTextSectionEN />
    </>
  );
};

export default EnglishIndex;
