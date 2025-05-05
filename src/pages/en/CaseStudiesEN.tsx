
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import PageHero from '@/components/PageHero';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import WeitereProjekteTable from '@/components/WeitereProjekteTable';
import CaseStudiesSEOTextEN from '@/components/case-studies/CaseStudiesSEOTextEN';

// Success pillars
const successPillars = [
  {
    title: "Strategy-First Approach",
    description: "Every website starts with clear goals, structure, and measurable KPIs."
  },
  {
    title: "Custom Design & Content",
    description: "We don't build templates – we build websites that match your brand."
  },
  {
    title: "Technology & SEO for Performance",
    description: "Fast, scalable, and focused on sustainable visibility."
  }
];

// FAQ items with focus on "marketing mainz"
const faqItems = [
  {
    question: "Which companies does ooliv work with as a marketing agency in Mainz?",
    answer: "We work with B2B companies of all sizes – from software to industry, education or consulting. As a marketing agency in Mainz, we understand both regional and international requirements."
  },
  {
    question: "Are there more details about the case studies?",
    answer: "Each case study shows KPIs, project goals, and real results. Our marketing projects from Mainz and beyond are documented – for full transparency."
  },
  {
    question: "Are such results realistic in marketing from Mainz?",
    answer: "Yes – when strategy and implementation are right. Our results are based on clear positioning, strong content, and technical excellence."
  },
  {
    question: "Can I contact previous clients?",
    answer: "We are happy to establish contact upon request. Our customer relationships are long-term – we are proud of the trust we enjoy as a marketing agency from Mainz."
  }
];

const EnglishCaseStudies = () => {
  const { setLanguage } = useLanguage();
  
  // Handler for opening the lead form
  const handleOpenLeadForm = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new Event('open-lead-form'));
  };
  
  // Force document title update to ensure it works across all domains
  useEffect(() => {
    document.title = "Marketing Mainz | Case Studies with Real Results";
    
    // Create and update meta description if it doesn't exist
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'This is how marketing from Mainz works: ooliv shows successful projects for web, content, and SEO. Get inspired & benefit now!');
    
    // Create and update meta keywords if it doesn't exist
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'Marketing Mainz, B2B Marketing, Web Design, SEO, Case Studies');
  }, []);

  // Set language to English
  useEffect(() => {
    setLanguage('en');
  }, [setLanguage]);

  return (
    <PageLayout className="overflow-x-hidden" seoText={<CaseStudiesSEOTextEN />}>
      <Helmet>
        <title>Marketing Mainz | Case Studies with Real Results</title>
        <meta 
          name="description" 
          content="This is how marketing from Mainz works: ooliv shows successful projects for web, content, and SEO. Get inspired & benefit now!" 
        />
        <meta name="keywords" content="Marketing Mainz, B2B Marketing, Web Design, SEO, Case Studies" />
      </Helmet>
      
      <PageHero
        badge="Case Studies"
        title="Marketing from Mainz with real results."
        subtitle="See how we demonstrably support B2B companies through strategy, design, and performance marketing in Mainz to achieve growth."
        primaryCta={{
          text: "Start Project",
          link: "#",
          onClick: handleOpenLeadForm
        }}
        secondaryCta={{
          text: "Schedule Strategy Call",
          link: "/en/contact"
        }}
      />
      
      <div className="section-container">
        <CaseStudiesSection 
          customTitle="Real Results from Real Clients"
          customSubtitle="We deliver websites and strategies that make what's special about your business visible."
          customBodyText="See how we've helped companies achieve sustainable growth through clear positioning, strong content, SEO performance, and measurable UX optimization."
        />
        
        <div className="py-20 bg-brand-backgroundAlt">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-brand-heading mb-4">
                Why Our Projects Work
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our consistent results come from a proven approach that puts strategy first and execution second.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {successPillars.map((pillar, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-sm text-center">
                  <div className="h-16 w-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-brand-primary">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-brand-heading">{pillar.title}</h3>
                  <p className="text-gray-600">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <FAQ 
          customFaqs={faqItems}
          customTitle="Frequently Asked Questions about Projects & Marketing Mainz"
          customCtaText="More questions? Contact us"
        />

        <CTA 
          title="Let's write your success story"
          subtitle="Whether it's a relaunch, more leads, or better conversions - every project at ooliv starts with a clear plan. Together, we implement your marketing strategically."
          primaryCta="Start Project"
          secondaryCta="Schedule Strategy Call"
          secondaryCtaLink="/en/contact"
        />
      </div>
      
      <WeitereProjekteTable />
    </PageLayout>
  );
};

export default EnglishCaseStudies;
