
import React from 'react';
import { Search, Layout, Zap, FileText, Link as LinkIcon, RefreshCw, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <Search className="h-10 w-10 mb-4 text-brand-primary" />,
    title: "Keyword Strategy",
    description: "We start with in-depth keyword research to target the terms that matter most for your business."
  },
  {
    icon: <Layout className="h-10 w-10 mb-4 text-brand-primary" />,
    title: "On-Page SEO",
    description: "Optimizing metadata, headings, URL structures, and content to improve your rankings."
  },
  {
    icon: <Zap className="h-10 w-10 mb-4 text-brand-primary" />,
    title: "Technical SEO",
    description: "We fix indexing issues, improve site speed, and align with Core Web Vitals — the foundation for a strong SEO strategy."
  },
  {
    icon: <FileText className="h-10 w-10 mb-4 text-brand-primary" />,
    title: "Content Optimization",
    description: "We optimize existing content or create new pages to meet user demand and business goals."
  },
  {
    icon: <LinkIcon className="h-10 w-10 mb-4 text-brand-primary" />,
    title: "Link Strategy",
    description: "Internal linking structure and high-quality backlinks to build authority and drive traffic."
  },
  {
    icon: <MapPin className="h-10 w-10 mb-4 text-brand-primary" />,
    title: "Local SEO",
    description: "Regional visibility, business listings, and citations for businesses targeting local clients (e.g. in Mainz and the Rhein-Main area)."
  },
  {
    icon: <RefreshCw className="h-10 w-10 mb-4 text-brand-primary" />,
    title: "SEO for Relaunches",
    description: "Risk-free relaunches with 301 planning, URL mapping, and ranking preservation."
  }
];

const SEOServices = () => {
  return (
    <section className="py-24 bg-brand-backgroundAlt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-brand-heading">
            Our SEO Services Help You Grow for the Long Run
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-brand-text">
            We combine deep keyword research, high-impact content, clean code, and strategic backlinking — all aligned with your business goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2 pt-6 text-center">
                <div className="flex justify-center">{service.icon}</div>
                <CardTitle className="text-xl mt-2">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-brand-text">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-brand-text mt-4">
            Learn more about our{' '}
            <Link to="/content-creation" className="text-brand-primary hover:underline">
              on-page SEO
            </Link>{' '}
            and{' '}
            <Link to="/lead-generation" className="text-brand-primary hover:underline">
              backlink strategy
            </Link>{' '}
            services
          </p>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-6 border border-gray-200 rounded-lg bg-white">
            <h3 className="text-xl font-bold mb-3">Tech Stack & Tools</h3>
            <p className="mb-4">We use top-tier tools to inform our strategy—never to replace it.</p>
            <p className="text-brand-primary font-medium">
              → Ahrefs, Google Search Console, YoastSEO (for WordPress), ChatGPT (for content), Midjourney (for visuals), Sora (for videos)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOServices;
