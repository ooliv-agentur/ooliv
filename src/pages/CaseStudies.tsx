
import React from 'react';
import PageLayout from '@/components/PageLayout';
import PageHero from '@/components/PageHero';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';

// Case studies data 
const caseStudies = [
  {
    client: "Scheurich",
    industry: "Lifestyle & Consumer Products",
    title: "120% more organic traffic through complete website optimization",
    logo: "/placeholder.svg",
    quote: "Thanks to ooliv, our website is now a growth engine. The process was seamless, and the results speak for themselves.",
    impact: [
      "+120% organic traffic",
      "+89% mobile conversion",
      "Faster content delivery with AI"
    ],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    author: {
      name: "Michael Schmidt",
      position: "Marketing Director, Scheurich"
    }
  },
  {
    client: "COBUS ERP",
    industry: "Software & IT",
    title: "80% more qualified leads with a new website & conversion strategy",
    logo: "/placeholder.svg",
    quote: "Professional, strategic, and results-driven. They understood exactly what our business needed.",
    impact: [
      "80% more qualified leads",
      "-3.2s page load time",
      "SEO landing pages for niche keywords"
    ],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    author: {
      name: "Thomas Weber",
      position: "CEO, COBUS"
    }
  },
  {
    client: "Franchise Portal",
    industry: "Multi-location Services",
    title: "Seamless CRM integration & scalable web infrastructure",
    logo: "/placeholder.svg",
    quote: "A game-changer for our online presence. More leads, better conversions, and seamless collaboration.",
    impact: [
      "1 CMS for 17 brands",
      "+200% SEO visibility",
      "3x admin efficiency"
    ],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    author: {
      name: "Julia Müller",
      position: "Digital Manager, Weisenburger"
    }
  },
  {
    client: "PopBird",
    industry: "E-Commerce & Retail",
    title: "35% sales increase in 6 months through emotional storytelling",
    logo: "/placeholder.svg",
    quote: "Working with ooliv completely transformed our online presence. Our customers now have a seamless experience from discovery to purchase.",
    impact: [
      "+35% sales growth",
      "+42% average order value",
      "+60% customer retention"
    ],
    image: "https://images.unsplash.com/photo-1556155092-490a1ba16284",
    author: {
      name: "Sarah Johnson",
      position: "Marketing Lead, PopBird"
    }
  },
  {
    client: "GreenTech",
    industry: "Renewable Energy",
    title: "200+ qualified leads per month with targeted SEO & content strategy",
    logo: "/placeholder.svg",
    quote: "The results exceeded our expectations. Our web presence now truly reflects our brand values and converts visitors efficiently.",
    impact: [
      "200+ qualified leads per month",
      "First page Google rankings for 30+ keywords",
      "68% reduction in cost per acquisition"
    ],
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea",
    author: {
      name: "Daniel Krause",
      position: "Growth Director, GreenTech"
    }
  }
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

// Partner logos placeholders
const partnerLogos = [
  { id: 'scheurich', name: 'Scheurich' },
  { id: 'cobus', name: 'COBUS' },
  { id: 'franchise', name: 'Franchise Portal' },
  { id: 'popbird', name: 'PopBird' },
  { id: 'greentech', name: 'GreenTech' }
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
        
        {/* Grid of Case Studies */}
        <div className="py-20" id="case-studies">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-heading mb-4">
              Real Results. Real Clients.
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our work speaks for itself. Here's how we've helped businesses achieve their goals through strategic digital solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all border border-gray-100">
                <div className="h-48 bg-gray-100 flex items-center justify-center">
                  <img 
                    src={study.logo} 
                    alt={`${study.client} logo`}
                    className="h-16 w-auto"
                  />
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-brand-heading">{study.client}</h3>
                    <p className="text-sm text-gray-500">{study.industry}</p>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    {study.impact.map((kpi, idx) => (
                      <div key={idx} className="flex items-center">
                        <Check className="h-4 w-4 text-brand-primary mr-2" />
                        <span className="text-sm font-medium">{kpi}</span>
                      </div>
                    ))}
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-6">{study.title}</p>
                  
                  <Button variant="ghost" size="sm" className="group text-brand-primary" asChild>
                    <Link to="/case-studies">
                      View Case Study
                      <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
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
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">
                Book a Strategy Call
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default CaseStudies;
