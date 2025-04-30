
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import PageHero from '@/components/PageHero';
import GoogleAdsProcess from '@/components/google-ads/GoogleAdsProcess';
import GoogleAdsLeadGeneration from '@/components/google-ads/GoogleAdsLeadGeneration';
import { ArrowRight, Search, Layout, RefreshCw, Target, LineChart, MousePointerClick, Bot, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const EnglishGoogleAds = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('en');
  }, [setLanguage]);

  const googleAdsFaqs = [
    {
      question: "How quickly can Google Ads campaigns show results?",
      answer: "Usually immediately after launch. Unlike SEO, paid ads can generate first clicks and leads within hours of activation."
    },
    {
      question: "What budget do I need for effective Google Ads?",
      answer: "Starting from €1,000 per month, depending on industry and competition. We'll advise you on realistic budgeting based on data."
    },
    {
      question: "How do you measure campaign success?",
      answer: "Through transparent reporting with clear KPIs: clicks, conversions, cost per lead, and ultimately ROI."
    },
    {
      question: "Can Google Ads work together with SEO?",
      answer: "Absolutely - they're complementary. SEO builds organic long-term visibility while Google Ads delivers immediate traffic and valuable keyword insights."
    },
    {
      question: "What Google Ads formats do you support?",
      answer: "All relevant formats: Search ads, Display campaigns, Shopping ads, YouTube ads and Performance Max - all based on your specific goals."
    }
  ];

  return (
    <PageLayout className="overflow-x-hidden">
      <Helmet>
        <title>Google Ads Agency Mainz | Data-driven & Transparent</title>
        <meta name="description" content="ooliv is your Google Ads agency in Mainz for more visibility & conversions. From setup to optimization – transparent, measurable, successful." />
      </Helmet>

      <PageHero
        badge="Traffic to Leads to Results"
        title="Google Ads Agency Mainz – Built for B2B Leads, Not Just Clicks"
        subtitle="We design and optimize Google Ads campaigns that don't just generate traffic — they bring in qualified B2B leads. AI-powered, conversion-driven, and performance-monitored."
        primaryCta={{
          text: "Launch Your Campaign",
          link: "/en/contact"
        }}
        secondaryCta={{
          text: "Request Free Analysis",
          link: "/en/contact"
        }}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-4">
              Website Problems Costing You Leads – We Solve Them
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                problem: "No Inbound Leads",
                context: "Visitors come, but without conversion",
                solution: "We develop campaigns and landing pages that transform B2B visitors into real contacts"
              },
              {
                problem: "Ad Budget Evaporates",
                context: "ROI unclear, budget disappears",
                solution: "We track every click, continuously optimize, and protect against fake traffic with click-fraud technology"
              },
              {
                problem: "Wrong Audience",
                context: "Visitors leave without action",
                solution: "Our campaigns use AI targeting to reach decision-makers – no 'click tourists'"
              },
              {
                problem: "No Strategy",
                context: "Uncoordinated measures, no growth",
                solution: "We connect campaigns, content and data into a high-performance system with a clear goal"
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

      <GoogleAdsLeadGeneration />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-4">
              Extended Services for Maximum Performance
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="h-10 w-10 mb-4 text-brand-primary" />,
                title: "Google Ads (Search, Display & PMax)",
                description: "Performance-oriented campaigns focused on B2B keywords and conversion optimization"
              },
              {
                icon: <Bot className="h-10 w-10 mb-4 text-brand-primary" />,
                title: "AI-powered Campaign Management",
                description: "We use AI tools to improve ad quality, keyword performance, and targeting"
              },
              {
                icon: <Layout className="h-10 w-10 mb-4 text-brand-primary" />,
                title: "Landing Page Design & Development",
                description: "We create landing pages that load fast, communicate clearly and convert to leads"
              },
              {
                icon: <MousePointerClick className="h-10 w-10 mb-4 text-brand-primary" />,
                title: "Conversion Rate Optimization (CRO)",
                description: "We test every element – from headlines to CTAs – to gradually improve your conversion rates"
              },
              {
                icon: <Shield className="h-10 w-10 mb-4 text-brand-primary" />,
                title: "Analytics, Tracking & Click-Fraud Protection",
                description: "We track every action, monitor performance and protect your budget from invalid clicks"
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

      <GoogleAdsProcess />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-4">
              Performance in Numbers
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="h-10 w-10 mb-4 text-brand-primary" />,
                metric: "+3x more qualified leads",
                description: "through AI targeting & strategic landing pages"
              },
              {
                icon: <LineChart className="h-10 w-10 mb-4 text-brand-primary" />,
                metric: "-40% bounce rate",
                description: "with conversion-optimized copy & better UX"
              },
              {
                icon: <MousePointerClick className="h-10 w-10 mb-4 text-brand-primary" />,
                metric: "+70% higher CTR",
                description: "through better ad copy & keyword strategy"
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

      <section className="py-24 bg-brand-backgroundAlt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CaseStudiesSection />
        </div>
      </section>

      <FAQ customFaqs={googleAdsFaqs} customTitle="Frequently Asked Questions about Google Ads" />

      <CTA 
        title="Let's make your Google Ads measurable"
        subtitle="You don't need more clicks – you need leads that convert. Together, we'll develop a performance funnel that works from ad to conversion."
        primaryCta="Start Campaign"
        secondaryCtaLink="/en/contact"
      />

      <div className="bg-brand-backgroundAlt py-6">
        <div className="container mx-auto px-4">
          <p className="text-sm text-brand-text font-sans text-center">
            <span className="font-bold">100+ successfully implemented projects</span> • 
            <span className="mx-2">Trusted by leading companies</span> • 
            <span className="font-bold">AI-powered performance strategies for maximum impact</span>
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default EnglishGoogleAds;
