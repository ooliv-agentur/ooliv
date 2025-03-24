import React from 'react';
import PageLayout from '@/components/PageLayout';
import PageHero from '@/components/PageHero';
import { 
  Target, 
  Users, 
  TrendingUp, 
  BarChart2, 
  FileCheck,
  LayoutTemplate,
  MousePointerClick,
  LineChart
} from 'lucide-react';
import CTA from '@/components/CTA';
import FAQ from '@/components/FAQ';

const LeadGeneration = () => {
  // Custom FAQ items for Lead Generation page
  const leadGenFaqs = [
    {
      question: "What platforms do you run ads on?",
      answer: "We specialize in Google Ads and TikTok Ads only — no Meta or LinkedIn."
    },
    {
      question: "Can you design the landing pages too?",
      answer: "Yes. Our team handles both the design and technical build of conversion-optimized pages."
    },
    {
      question: "Do you work with B2C companies?",
      answer: "Our focus is on B2B lead generation — but we do work with B2C if the product requires high-value consultative selling."
    },
    {
      question: "What's included in your performance reports?",
      answer: "You get clear insights on ad performance, lead quality, and ROI — with recommendations to improve results over time."
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <PageHero
        badge="Traffic to Leads to Results"
        title="Lead Generation & Conversion Optimization for B2B Growth"
        subtitle="We help B2B companies attract qualified leads and turn traffic into measurable results—through strategic landing pages, Google Ads and TikTok Ads campaigns, and conversion-optimized design."
        primaryCta={{
          text: "Start Your Campaign",
          link: "/contact"
        }}
        secondaryCta={{
          text: "Request a Free Audit",
          link: "/contact"
        }}
      />

      {/* Pain Points Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-4">
              Your Funnel Is Leaking—Let's Fix It
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                problem: "No inbound leads",
                context: "Your website gets traffic but no conversions",
                solution: "We optimize your funnels and ad targeting to attract qualified contacts"
              },
              {
                problem: "Ad spend wasted",
                context: "You're investing in Google Ads, but ROI is unclear",
                solution: "We craft high-converting landing pages and track performance precisely"
              },
              {
                problem: "Wrong audience",
                context: "Visitors bounce without action",
                solution: "We run highly-targeted TikTok & Google Ads campaigns"
              },
              {
                problem: "Lack of strategy",
                context: "Disconnected efforts, no real growth",
                solution: "We align campaigns, landing pages, and analytics under one conversion strategy"
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
              Targeted Traffic. Qualified Leads. Clear Results.
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              Our B2B Lead Generation Services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="h-10 w-10 mb-4 text-brand-primary" />,
                title: "Google Ads (Search & Display)",
                description: "Performance-based SEM campaigns tailored for high-intent B2B keywords"
              },
              {
                icon: <Users className="h-10 w-10 mb-4 text-brand-primary" />,
                title: "TikTok Ads",
                description: "Creative-first ads to reach niche audiences in emerging B2B verticals"
              },
              {
                icon: <LayoutTemplate className="h-10 w-10 mb-4 text-brand-primary" />,
                title: "Landing Page Design & Development",
                description: "Built for speed, clarity, and lead conversion — mobile-first and SEO-ready"
              },
              {
                icon: <MousePointerClick className="h-10 w-10 mb-4 text-brand-primary" />,
                title: "Conversion Rate Optimization (CRO)",
                description: "We test, refine, and improve your entire funnel to maximize ROI"
              },
              {
                icon: <BarChart2 className="h-10 w-10 mb-4 text-brand-primary" />,
                title: "Analytics & Tracking Setup",
                description: "Clean event tracking, pixel integrations, and dashboards that show what works"
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
              From Click to Customer: How We Work
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              Our Conversion-Driven Process
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            {[
              {
                step: "01",
                title: "Campaign Strategy",
                description: "We define your target audience, offer, channels, and KPIs"
              },
              {
                step: "02",
                title: "Landing Page Creation",
                description: "We design and build fast, focused, high-converting pages"
              },
              {
                step: "03",
                title: "Ad Campaign Setup",
                description: "We launch and manage your Google Ads and TikTok campaigns"
              },
              {
                step: "04",
                title: "Tracking & Testing",
                description: "We set up clean tracking to measure performance and run A/B tests"
              },
              {
                step: "05",
                title: "Reporting & Optimization",
                description: "We continuously improve conversion rates and lead quality"
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
                icon: <TrendingUp className="h-10 w-10 mb-4 text-brand-primary" />,
                metric: "+3x more qualified leads",
                description: "through improved SEM targeting"
              },
              {
                icon: <LineChart className="h-10 w-10 mb-4 text-brand-primary" />,
                metric: "-40% bounce rate",
                description: "with landing page redesign"
              },
              {
                icon: <MousePointerClick className="h-10 w-10 mb-4 text-brand-primary" />,
                metric: "CTR doubled",
                description: "via TikTok ads and creative optimization"
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
      <FAQ customFaqs={leadGenFaqs} />

      {/* CTA Section */}
      <CTA 
        title="Let's Make Your Marketing Measurable"
        subtitle="You don't need more clicks—you need leads that convert. Let's build a funnel that performs, from ad to action."
        primaryCta="Request a Free Campaign Audit"
        secondaryCta="Schedule a Strategy Call"
      />
    </PageLayout>
  );
};

export default LeadGeneration;
