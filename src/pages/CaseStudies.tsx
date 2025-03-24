
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import CaseStudiesHero from '@/components/case-studies/CaseStudiesHero';
import CaseStudiesGrid from '@/components/case-studies/CaseStudiesGrid';
import CaseStudiesFilter from '@/components/case-studies/CaseStudiesFilter';
import CaseStudiesTestimonials from '@/components/case-studies/CaseStudiesTestimonials';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';

const CaseStudies = () => {
  const { t } = useLanguage();
  
  // Custom FAQ items for Case Studies page
  const caseStudiesFaqs = [
    {
      question: "Can you share more detailed results for these projects?",
      answer: "Yes, we can provide in-depth case studies with comprehensive metrics and results during a consultation."
    },
    {
      question: "Do you have experience in my specific industry?",
      answer: "We've worked across diverse sectors including B2B services, manufacturing, e-commerce, healthcare, and technology. Contact us to discuss your specific industry needs."
    },
    {
      question: "How do you measure project success?",
      answer: "We establish clear KPIs at project start—typically including metrics like traffic growth, conversion rates, lead quality, and ROI—and track progress against these benchmarks."
    },
    {
      question: "Can I speak with some of your existing clients?",
      answer: "Absolutely. We're happy to arrange reference calls with current clients in relevant industries upon request."
    },
    {
      question: "How long do typical projects take to complete?",
      answer: "Timeframes vary by project scope, but website projects typically range from 8-12 weeks, while ongoing optimization programs run on 3, 6, or 12-month cycles."
    }
  ];
  
  return (
    <PageLayout className="overflow-x-hidden">
      <CaseStudiesHero />
      <CaseStudiesFilter />
      <CaseStudiesGrid />
      <CaseStudiesTestimonials />
      <FAQ customFaqs={caseStudiesFaqs} />
      <CTA 
        title="Ready to Be Our Next Success Story?"
        subtitle="Let's discuss how we can achieve similar results for your business."
        primaryCta="Start Your Project"
        secondaryCta="Schedule a Consultation"
      />
    </PageLayout>
  );
};

export default CaseStudies;
