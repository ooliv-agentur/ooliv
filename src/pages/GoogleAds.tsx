import React from 'react';
import PageLayout from '@/components/PageLayout';
import GoogleAdsHero from '@/components/google-ads/GoogleAdsHero';
import GoogleAdsLeadGeneration from '@/components/google-ads/GoogleAdsLeadGeneration';
import { 
  Target, 
  LineChart, 
  MousePointerClick, 
  LayoutTemplate, 
  Shield,
  Bot
} from 'lucide-react';
import CTA from '@/components/CTA';
import FAQ from '@/components/FAQ';

const GoogleAds = () => {
  // Custom FAQ items for Google Ads page
  const googleAdsFaqs = [
    {
      question: "What platforms do you advertise on?",
      answer: "We focus 100% on Google Ads — including Search, Display, and Performance Max."
    },
    {
      question: "Do you use AI in your campaigns?",
      answer: "Yes — we use AI tools to improve ad quality, targeting, and performance."
    },
    {
      question: "Can you build the landing pages too?",
      answer: "Absolutely. We design and develop high-converting landing pages tailored to your business goals."
    },
    {
      question: "How do you protect against click fraud?",
      answer: "We use fraud detection tools to monitor your campaigns and block invalid clicks, protecting your ad spend."
    },
    {
      question: "Do you only work with B2B clients?",
      answer: "Yes — we specialize in B2B lead generation and conversion for companies in various industries."
    },
    {
      question: "What's included in your reporting?",
      answer: "You'll get detailed insights into performance, including metrics on clicks, conversions, and overall campaign success."
    }
  ];

  return (
    <PageLayout>
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

      {/* Lead Generation Section */}
      <GoogleAdsLeadGeneration />

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-brand-backgroundAlt">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-4">
              High-Performance Google Ads for B2B Companies
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
                icon: <LayoutTemplate className="h-10 w-10 mb-4 text-brand-primary" />,
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
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                {service.icon}
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-4">
              Our Proven 5-Step Process for Lead Generation
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            {[
              {
                step: "01",
                title: "Campaign Strategy",
                description: "Define your audience, value propositions, budgets, and KPIs"
              },
              {
                step: "02",
                title: "Landing Page Creation",
                description: "We design SEO-ready, mobile-first landing pages tailored to your specific offers"
              },
              {
                step: "03",
                title: "Google Ads Setup",
                description: "We launch and manage campaigns across Google Ads — Search, Display, and Performance Max"
              },
              {
                step: "04",
                title: "Tracking & Protection",
                description: "We set up event tracking to monitor performance, block invalid clicks, and ensure data accuracy"
              },
              {
                step: "05",
                title: "Reporting & Optimization",
                description: "We iterate and improve your funnel through weekly insights and A/B tests"
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
        </div>
      </section>

      {/* Success Metrics Section */}
      <section className="py-16 md:py-24 bg-brand-backgroundAlt">
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
              <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="inline-flex justify-center">{metric.icon}</div>
                <h3 className="text-2xl font-bold my-3 text-brand-primary">{metric.metric}</h3>
                <p>{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ customFaqs={googleAdsFaqs} />

      {/* CTA Section */}
      <CTA 
        title="Let's Make Your Marketing Measurable"
        subtitle="You don't need more clicks — you need leads that convert. Let's build a funnel that performs from ad to action."
        primaryCta="Start Your Campaign"
        secondaryCta="Request a Free Audit"
      />
    </PageLayout>
  );
};

export default GoogleAds;
