
import React from 'react';
import PageLayout from '@/components/PageLayout';
import PageHero from '@/components/PageHero';
import { useLanguage } from '@/contexts/LanguageContext';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import WeitereProjekteTable from "@/components/WeitereProjekteTable";

const partnerLogos = [
  { id: 'scheurich', name: 'Scheurich' },
  { id: 'cobus', name: 'COBUS' },
  { id: 'weisenburger', name: 'Weisenburger' },
  { id: 'popbird', name: 'PopBird' },
  { id: 'greentech', name: 'GreenTech' }
];

const successPillars = [
  {
    title: "Strategy-First Process",
    description: "Every website begins with clear goals, structure, and KPIs."
  },
  {
    title: "Custom Design & Content",
    description: "No templates. We build everything tailored to each brand and audience."
  },
  {
    title: "Clean Development & SEO",
    description: "Fast, scalable, and always optimized for performance and visibility."
  }
];

const faqItems = [
  {
    question: "What types of businesses does ooliv work with?",
    answer: "Primarily B2B companies – from software to manufacturing, professional services, and education. We understand both regional and international business needs."
  },
  {
    question: "Can I see more details on a specific project?",
    answer: "Absolutely. Each case study page includes results, process insights, and screenshots. We meticulously document our projects."
  },
  {
    question: "Are these results typical?",
    answer: "Each project is different, but strong results are the outcome of clear strategy and implementation. Our expertise has proven effective across many different industries."
  },
  {
    question: "Can I contact references?",
    answer: "Yes. Upon request, we can connect you with past clients for feedback. Our work speaks for itself, and we're proud of the long-term relationships we build with our clients."
  }
];

const CaseStudies = () => {
  const { language } = useLanguage();

  return (
    <PageLayout>
      <PageHero
        badge="Real Results. Real Clients."
        title="Marketing Success Stories from Around the World"
        subtitle="See how we help B2B companies grow with intelligent strategy, strong design, and measurable results. These case studies showcase what's possible with ooliv."
        primaryCta={{
          text: "Start a Project",
          link: "/contact"
        }}
        secondaryCta={{
          text: "Book a Call",
          link: "/contact"
        }}
      />
      
      <div className="section-container">
        <div className="py-12 border-t border-b border-gray-200">
          <div className="text-center mb-8">
            <div className="flex justify-center flex-wrap gap-12 mb-8">
              {partnerLogos.map((logo) => (
                <div key={logo.id} className="grayscale hover:grayscale-0 transition-all">
                  <img 
                    src={`/placeholder.svg`} 
                    alt={`${logo.name} logo`} 
                    className="h-12 md:h-16"
                  />
                </div>
              ))}
            </div>
            <p className="text-lg text-gray-600">
              Partnerships that inspire and make a lasting impact.
            </p>
          </div>
        </div>
        
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CaseStudiesSection />
          </div>
        </section>
        
        <div className="py-20 bg-brand-backgroundAlt">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-brand-heading mb-4">
                Why Our Projects Succeed
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
          customTitle="Case Study & Project Questions"
          customCtaText="Have more questions about our projects?"
        />

        <CTA 
          title="Let's Write Your Success Story"
          subtitle="Whether you need a relaunch, better conversions, or more qualified leads, we're ready to help. Every ooliv project starts with a strategy session."
          primaryCta="Start a Project"
          secondaryCta="Book a Strategy Call"
          lightBackground={true}
        />
      </div>
      
      <WeitereProjekteTable />
    </PageLayout>
  );
};

export default CaseStudies;
