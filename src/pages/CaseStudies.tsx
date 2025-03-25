
import React from 'react';
import PageLayout from '@/components/PageLayout';
import PageHero from '@/components/PageHero';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import CaseStudiesSection from '@/components/CaseStudiesSection';

// Partner logos placeholders
const partnerLogos = [
  { id: 'scheurich', name: 'Scheurich' },
  { id: 'cobus', name: 'COBUS' },
  { id: 'franchise', name: 'Franchise Portal' },
  { id: 'popbird', name: 'PopBird' },
  { id: 'greentech', name: 'GreenTech' }
];

// Success pillars
const successPillars = [
  {
    title: "Strategy-First Process",
    description: "Every site starts with clear goals, structure, and KPIs."
  },
  {
    title: "Tailored Design & Content",
    description: "No templates. We build everything to fit each brand and audience."
  },
  {
    title: "Clean Development & SEO",
    description: "Fast, scalable, and always optimized for performance and visibility."
  }
];

// FAQ items
const faqItems = [
  {
    question: "What types of companies does ooliv work with?",
    answer: "Mostly B2B — from software to manufacturing, professional services, and education."
  },
  {
    question: "Can I see more details about a specific case?",
    answer: "Absolutely. Each case study page includes results, process insights, and screenshots."
  },
  {
    question: "Are these results typical?",
    answer: "Each project is different, but strong outcomes are the result of clear strategy and execution."
  },
  {
    question: "Can I contact references?",
    answer: "Yes. Upon request, we can connect you with past clients for feedback."
  }
];

const CaseStudies = () => {
  return (
    <PageLayout>
      <PageHero
        badge="Real Results. Real Clients."
        title="Marketing Success Stories from Mainz and Beyond"
        subtitle="See how we've helped B2B companies grow with smart strategy, strong design, and measurable results. These case studies show what's possible with ooliv."
        primaryCta={{
          text: "Start Your Project",
          link: "/contact"
        }}
        secondaryCta={{
          text: "Schedule a Call",
          link: "/contact"
        }}
      />
      
      <div className="section-container">
        {/* Partner Logos */}
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
              Partnerships that inspire and have a lasting impact.
            </p>
          </div>
        </div>
        
        {/* Case Studies Section */}
        <CaseStudiesSection showAll={true} showCta={false} />
        
        {/* What Makes These Projects Work */}
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
        
        {/* FAQ Section */}
        <div className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-brand-heading mb-4">
                Case Study & Project Questions
              </h2>
              <p className="text-lg text-gray-600">
                Common questions about our projects and process.
              </p>
            </div>
            
            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold mb-2 text-brand-heading">{item.question}</h3>
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="mt-24 bg-brand-backgroundAlt rounded-lg p-10 text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Let's Create Your Success Story</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Whether you need a relaunch, better conversions, or more qualified leads — we're ready to help. Every ooliv project starts with a strategy conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">
                Start Your Project
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">
                Book a Strategy Call
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default CaseStudies;
