
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import GoogleAdsHero from '@/components/google-ads/GoogleAdsHero';
import GoogleAdsLeadGeneration from '@/components/google-ads/GoogleAdsLeadGeneration';
import GoogleAdsProcess from '@/components/google-ads/GoogleAdsProcess';
import { 
  Target, 
  LineChart, 
  MousePointerClick, 
  Layout, 
  Shield,
  Bot,
  RefreshCw,
  X,
  Search,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import CTA from '@/components/CTA';
import FAQ from '@/components/FAQ';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const GoogleAds = () => {
  // Custom FAQ items for Google Ads page
  const googleAdsFaqs = [
    {
      question: "How is ooliv different from other Google Ads agencies?",
      answer: "We combine B2B strategy with tech expertise — delivering real business impact, not generic ad traffic."
    },
    {
      question: "Do we need Google Ads if SEO is already working well?",
      answer: "Yes — Google Ads adds visibility and delivers immediate, targeted traffic with conversion focus."
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
    },
    {
      question: "What platforms do you advertise on?",
      answer: "We focus 100% on Google Ads — including Search, Display, and Performance Max."
    }
  ];

  return (
    <PageLayout>
      <Helmet>
        <title>Google Ads Management | PPC That Delivers Real Business Results</title>
        <meta name="description" content="Google Ads management for B2B companies. We create and optimize PPC campaigns that focus on qualified leads and measurable ROI - not just impressions." />
        <meta name="keywords" content="Google Ads, PPC marketing, lead generation, conversion optimization" />
      </Helmet>
      
      {/* Hero Section */}
      <GoogleAdsHero />

      {/* Pain Points Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-4">
              Website Challenges That Hurt Your Business — Here's How We Fix Them
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                problem: "No inbound leads",
                context: "Your website gets traffic but no conversions",
                solution: "We create campaigns and landing pages designed to convert B2B visitors into real contacts"
              },
              {
                problem: "Ad spend wasted",
                context: "ROI is unclear and budget disappears",
                solution: "We track every click, optimize continuously, and use click fraud protection to avoid fake traffic"
              },
              {
                problem: "Wrong audience",
                context: "Visitors bounce without action",
                solution: "Our campaigns use AI-enhanced targeting to reach decision-makers, not window shoppers"
              },
              {
                problem: "Lack of strategy",
                context: "Disconnected efforts, no real growth",
                solution: "We connect campaigns, content, and data into one conversion-focused system"
              }
            ].map((item, i) => (
              <div key={i} className="bg-brand-backgroundAlt rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-brand-primary font-bold mb-3">PROBLEM:</div>
                <h3 className="text-lg font-bold mb-2">{item.problem}</h3>
                <p className="text-sm text-gray-600 mb-4">{item.context}</p>
                <div className="text-brand-primary font-bold mb-2">SOLUTION:</div>
                <p>{item.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-brand-backgroundAlt">
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

      {/* Lead Generation Section */}
      <GoogleAdsLeadGeneration />

      {/* Extended Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-4">
              Our Tech Stack – Data-Driven Performance
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="h-10 w-10 mb-4 text-brand-primary" />,
                title: "Google Ads (Search, Display & PMax)",
                description: "Performance-driven campaigns targeting high-intent B2B keywords and optimized for conversions"
              },
              {
                icon: <Bot className="h-10 w-10 mb-4 text-brand-primary" />,
                title: "AI-Enhanced Campaign Management",
                description: "We use AI tools to improve ad quality, keyword performance, and audience targeting"
              },
              {
                icon: <Layout className="h-10 w-10 mb-4 text-brand-primary" />,
                title: "Landing Page Design & Development",
                description: "We build landing pages that load fast, communicate clearly, and are built to convert visitors into leads"
              },
              {
                icon: <MousePointerClick className="h-10 w-10 mb-4 text-brand-primary" />,
                title: "Conversion Rate Optimization (CRO)",
                description: "We test every element — from headlines to CTAs — to improve your conversion rates step by step"
              },
              {
                icon: <Shield className="h-10 w-10 mb-4 text-brand-primary" />,
                title: "Analytics, Tracking & Click Fraud Protection",
                description: "We track every action, monitor performance, and protect your budget from invalid clicks"
              }
            ].map((service, index) => (
              <div key={index} className="bg-brand-backgroundAlt p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                {service.icon}
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Updated to use the new component */}
      <GoogleAdsProcess />

      {/* Success Metrics Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-4">
              B2B Brands That Drive Results With ooliv
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="h-10 w-10 mb-4 text-brand-primary" />,
                metric: "+3x more qualified leads",
                description: "thanks to AI-optimized targeting and strategic landing pages"
              },
              {
                icon: <LineChart className="h-10 w-10 mb-4 text-brand-primary" />,
                metric: "-40% bounce rate",
                description: "after we improved conversion copy and user experience"
              },
              {
                icon: <MousePointerClick className="h-10 w-10 mb-4 text-brand-primary" />,
                metric: "+70% higher CTR",
                description: "through better ad copy and keyword alignment"
              }
            ].map((metric, index) => (
              <div key={index} className="bg-brand-backgroundAlt p-8 rounded-lg shadow-md text-center">
                <div className="inline-flex justify-center">{metric.icon}</div>
                <h3 className="text-2xl font-bold my-3 text-brand-primary">{metric.metric}</h3>
                <p>{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Case Studies Section */}
      <section className="py-24 bg-brand-backgroundAlt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CaseStudiesSection />
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ customFaqs={googleAdsFaqs} />

      {/* CTA Section */}
      <CTA 
        title="Let's Turn Google Ads Into a Scalable Sales Channel"
        subtitle="With our data-driven approach, we'll help you improve ROI, lower lead costs, and build campaigns that deliver measurable growth."
        primaryCta="Launch Your Campaign"
      />

      {/* New Claim Section */}
      <section className="bg-brand-backgroundAlt py-12 text-center">
        <div className="container mx-auto px-4">
          <p className="text-lg text-brand-text font-medium">
            100+ successful projects • Trusted by B2B leaders • AI-powered strategies for measurable growth
          </p>
        </div>
      </section>
    </PageLayout>
  );
};

export default GoogleAds;
