
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
import ClientLogos from "@/components/ClientLogos";
import SEOTextSectionEN from "@/components/en/SEOTextSectionEN";
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const EnglishIndex = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('en');
  }, [setLanguage]);
  
  const handleOpenLeadForm = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };
  
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
    <PageLayout>
      <Helmet>
        <html lang="en" />
        <title>Web Design Agency Mainz – Custom Websites That Deliver Results</title>
        <meta 
          name="description" 
          content="ooliv – Your Web Design Agency in Mainz. We create WordPress, e-commerce, and custom websites focused on SEO, UX, and measurable business growth." 
        />
        <meta name="keywords" content="Web Design Agency Mainz, WordPress Development Mainz, SEO Agency Mainz, Digital Marketing Mainz, Custom Website Design Mainz" />
        <meta name="focus-keyword" content="Web Design Agency Mainz" />
      </Helmet>
      
      {/* Hero Section - exactly matching German design */}
      <section className="relative bg-medico-mint overflow-hidden font-satoshi min-h-screen flex items-center">
        {/* Enhanced floating circles animation - same as German version */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="floating-circle slow w-32 h-32 top-20 left-10 opacity-40"></div>
          <div className="floating-circle delayed w-40 h-40 top-40 right-20 opacity-30"></div>
          <div className="floating-circle reverse w-24 h-24 bottom-40 left-1/4 opacity-50"></div>
          <div className="floating-circle diagonal w-20 h-20 bottom-20 right-1/3 opacity-45"></div>
          <div className="floating-circle fast w-16 h-16 top-1/2 left-3/4 opacity-60"></div>
          <div className="floating-circle pulse w-12 h-12 top-1/3 right-1/4 opacity-70"></div>
          <div className="floating-circle slow w-14 h-14 top-60 left-1/2 opacity-35"></div>
          <div className="floating-circle delayed reverse w-18 h-18 bottom-60 right-10 opacity-40"></div>
          <div className="floating-circle diagonal w-10 h-10 top-80 left-20 opacity-55"></div>
        </div>
        
        <div className="relative z-20 w-full">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center max-w-4xl mx-auto">
              {/* Main heading - exactly matching German size and styling */}
              <h1 className="mb-2">
                <span 
                  className="font-medium leading-tight text-center block"
                  style={{ 
                    fontSize: '52px', 
                    lineHeight: '68px', 
                    color: '#003343' 
                  }}
                >
                  ooliv Web Design Agency Mainz
                </span>
              </h1>
              
              {/* Subtitle - exactly matching German size and styling */}
              <h2 
                className="font-bold text-center block mt-2 mb-6"
                style={{ 
                  fontSize: '52px', 
                  lineHeight: '68px', 
                  color: '#32b1ab' 
                }}
              >
                We help businesses become visible online.
              </h2>
              
              {/* Description - matching German styling */}
              <p className="text-xl text-medico-darkGreen mb-10 leading-relaxed">
                We develop websites for B2B companies that measurably generate more leads and build trust. No templates, no buzzwords — just strategy, design and performance from one source.
              </p>
              
              {/* CTA buttons - exactly matching German styling */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="group bg-medico-yellow text-medico-darkGreen hover:bg-yellow-400 font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={handleOpenLeadForm}
                >
                  Start Project
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="group bg-medico-white text-medico-darkGreen hover:bg-gray-50 border-2 border-medico-darkGreen hover:border-medico-turquoise font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300" 
                  asChild
                >
                  <Link to="/en/case-studies">
                    View Work
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Visual transition indicator - matching German version */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-1 h-8 bg-gradient-to-b from-medico-turquoise/50 to-medico-turquoise/80 rounded-full animate-pulse"></div>
            <div className="flex space-x-1">
              <div className="w-1.5 h-1.5 bg-medico-turquoise/80 rounded-full animate-pulse"></div>
              <div className="w-1.5 h-1.5 bg-medico-turquoise/80 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="w-1.5 h-1.5 bg-medico-turquoise/80 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </section>
      
      <EnglishAboutSection />
      <EnglishSolutionSection />
      <EnglishTeamTeaser />
      
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-brand-heading">Your Website Should Work for You—Not Against You.</h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-brand-text">
            Many businesses struggle with websites that don't perform. We develop websites that generate leads, build trust, and rank well on Google.
          </p>
          <BeforeAfterSlider />
          <div className="mt-8 text-center">
            <p className="text-brand-text">
              Note: We have many more before-and-after examples available. Feel free to request them directly from us — <a href="mailto:info@ooliv.de" className="text-brand-primary hover:underline">info@ooliv.de</a>.
            </p>
          </div>
        </div>
      </div>
      
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
        title="Ready for your digital success?"
        subtitle="Let's create a website together that not only looks good, but also delivers measurable results."
        primaryCta="Start Your Project"
        secondaryCta="Schedule a Strategy Call"
      />
      
      <ClientLogos />
      <SEOTextSectionEN />
    </PageLayout>
  );
};

export default EnglishIndex;
