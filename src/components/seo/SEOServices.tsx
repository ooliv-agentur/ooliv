
import React from 'react';
import { Search, Layout, Zap, FileText, Link as LinkIcon, RefreshCw, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    icon: <Search className="h-10 w-10 mb-4 text-brand-primary" />,
    title: "Keyword Strategy",
    description: "Search intent-based research with clear business alignment — targeted for Mainz and beyond."
  },
  {
    icon: <Layout className="h-10 w-10 mb-4 text-brand-primary" />,
    title: "On-Page SEO",
    description: "Optimizing metadata, headings, URL structures, and content for better rankings."
  },
  {
    icon: <Zap className="h-10 w-10 mb-4 text-brand-primary" />,
    title: "Technical SEO",
    description: "Fixing indexing issues, improving load speed, and aligning with Core Web Vitals."
  },
  {
    icon: <FileText className="h-10 w-10 mb-4 text-brand-primary" />,
    title: "Content Optimization",
    description: "Strategic updates or creation of new pages to match search demand and business needs."
  },
  {
    icon: <LinkIcon className="h-10 w-10 mb-4 text-brand-primary" />,
    title: "Link Strategy",
    description: "Internal link architecture and high-quality backlink plans to build authority."
  },
  {
    icon: <MapPin className="h-10 w-10 mb-4 text-brand-primary" />,
    title: "Local SEO",
    description: "Regional visibility through citations and business listings, especially in Mainz and Rhein-Main area."
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
            Full-Spectrum SEO Services for Long-Term Success
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
