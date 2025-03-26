
import React from 'react';
import PageLayout from '@/components/PageLayout';
import GoogleAdsHero from '@/components/google-ads/GoogleAdsHero';
import { 
  Search,
  Layout,
  RefreshCw,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import FAQ from '@/components/FAQ';
import CaseStudiesSection from '@/components/CaseStudiesSection';

const GoogleAds = () => {
  // Custom FAQ items for Google Ads page
  const googleAdsFaqs = [
    {
      question: "How is ooliv different from other Google Ads agencies?",
      answer: "We combine B2B strategy with tech expertise — delivering real business impact, not generic ad traffic."
    },
    {
      question: "Do we need Google Ads if SEO is already working well?",
      answer: "Yes — Google Ads adds visibility and delivers immediate, targeted traffic."
    },
    {
      question: "What's a typical budget for effective Google Ads?",
      answer: "Most clients start between €1,000–3,000/month — based on goals, market, and competition."
    },
    {
      question: "How soon will we see results from a campaign?",
      answer: "You'll often see early results in a few days, with full performance in 4–6 weeks."
    },
    {
      question: "Can you help with landing pages and tracking setup?",
      answer: "Absolutely — we handle everything from page design to full analytics integration."
    }
  ];
  
  return (
    <PageLayout className="overflow-x-hidden">
      {/* Hero Section */}
      <GoogleAdsHero />
      
      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-4">
              Google Ads for Results – Not Just Visibility
            </h2>
            <p className="text-xl text-brand-text max-w-3xl mx-auto">
              We use Google Ads to generate qualified leads — not empty clicks.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Search className="h-10 w-10 mb-4 text-brand-primary" />
              <h3 className="text-xl font-bold mb-4">Search Campaigns</h3>
              <p>Reach your audience at the right time — with targeted keywords, ad extensions, and tracked conversions.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Layout className="h-10 w-10 mb-4 text-brand-primary" />
              <h3 className="text-xl font-bold mb-4">Landing Pages</h3>
              <p>Great ads need great destinations. We create high-performance landing pages built for speed, clarity, and conversion.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <RefreshCw className="h-10 w-10 mb-4 text-brand-primary" />
              <h3 className="text-xl font-bold mb-4">Continuous Optimization</h3>
              <p>We test, analyze, and improve your campaigns constantly — lowering cost per lead and increasing results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 md:py-24 bg-brand-backgroundAlt">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-4">
              Our Tech Stack – Data-Driven Performance
            </h2>
            <p className="text-xl text-brand-text max-w-3xl mx-auto mb-8">
              We use powerful tools and data models to optimize and scale your campaigns:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Google Ads (Search, Brand, Display, Remarketing)",
              "Google Tag Manager",
              "Consent Mode v2",
              "Conversion API & tracking setup",
              "Audience segmentation via Google Signals",
              "AI-enhanced ad copy & visuals with ChatGPT & Midjourney"
            ].map((tech, index) => (
              <div key={index} className="flex items-start bg-white p-5 rounded-lg shadow-sm">
                <CheckCircle className="h-5 w-5 text-brand-primary mr-3 mt-0.5 flex-shrink-0" />
                <p>{tech}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <p className="text-brand-text italic">
              Note: These tools support our strategy — they never replace it.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-4">
              Our Campaign Process – From Audit to Growth
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Audit & Setup",
                description: "Review existing campaigns, validate tracking, define goals"
              },
              {
                step: "02",
                title: "Structure & Landing Pages",
                description: "Targeted ad groups, conversion-focused messaging, A/B-tested destinations"
              },
              {
                step: "03",
                title: "Optimization & Scaling",
                description: "Continuous keyword tuning, budget control, performance insights"
              }
            ].map((step, index) => (
              <div key={index} className="relative bg-brand-backgroundAlt p-6 rounded-lg border-l-4 border-brand-primary">
                <div className="absolute -top-4 -left-4 bg-brand-primary text-white h-10 w-10 rounded-full flex items-center justify-center font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-2 mt-4">{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="link" asChild className="group">
              <Link to="/web-development" className="flex items-center gap-2 text-brand-primary">
                Explore our landing page & web development services
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Case Studies Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CaseStudiesSection />
        </div>
      </section>
      
      {/* FAQ Section */}
      <FAQ customFaqs={googleAdsFaqs} customTitle="Frequently Asked Questions" />
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-brand-backgroundAlt">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-4">
              Let's Turn Google Ads Into a Scalable Sales Channel
            </h2>
            <p className="text-xl text-brand-text mb-8">
              With our data-driven approach, we'll help you improve ROI, lower lead costs, and build campaigns that deliver measurable growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Button size="lg" className="group" asChild>
                <Link to="/contact">
                  Request Free Campaign Audit
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              
              <Button variant="outline" size="lg" className="group" asChild>
                <Link to="/contact">
                  Book Strategy Call
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-gray-600">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2 text-brand-primary" />
                <span>100+ successful projects</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2 text-brand-primary" />
                <span>Trusted by B2B leaders</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2 text-brand-primary" />
                <span>AI-powered strategies for scalable growth</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default GoogleAds;

