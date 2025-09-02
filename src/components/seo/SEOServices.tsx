
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, FileEdit, Code, FileText, Link2, MapPin } from 'lucide-react';

const SEOServices = () => {
  // Helper function to get service-specific CSS class
  const getServiceClass = (title: string) => {
    if (title.toLowerCase().includes('seo') || title.toLowerCase().includes('keyword') || title.toLowerCase().includes('search')) return 'service-seo';
    if (title.toLowerCase().includes('content') || title.toLowerCase().includes('optimization')) return 'service-content';
    if (title.toLowerCase().includes('technical') || title.toLowerCase().includes('code')) return 'service-webdev';
    if (title.toLowerCase().includes('link')) return 'service-seo';
    if (title.toLowerCase().includes('local')) return 'service-seo';
    return 'service-seo'; // default for SEO services
  };

  const services = [
    { title: "Keyword Strategy", icon: Search },
    { title: "On-Page Optimization", icon: FileEdit },
    { title: "Technical SEO", icon: Code },
    { title: "Content Optimization", icon: FileText },
    { title: "Link Strategy", icon: Link2 },
    { title: "Local SEO", icon: MapPin }
  ];
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-brand-heading mb-6">SEO Services Built for Long-Term Growth</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className={`bg-white p-8 rounded-lg shadow-sm ${getServiceClass(service.title)}`}>
              <div className="mb-4 service-icon">
                <service.icon className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-heading">{service.title}</h3>
              <p className="text-brand-text">
                {service.title === "Keyword Strategy" && "In-depth research focused on relevant, industry-specific and local search terms."}
                {service.title === "On-Page Optimization" && "Metadata, URLs, headings, and structured content to improve rankings and UX."}
                {service.title === "Technical SEO" && "Site speed, Core Web Vitals, clean indexing — the foundation of SEO success."}
                {service.title === "Content Optimization" && "Improve existing content or build new pages based on user needs and search intent."}
                {service.title === "Link Strategy" && "Strategic internal linking and sustainable backlink campaigns to build authority."}
                {service.title === "Local SEO" && "Boost visibility in Mainz and the Rhein-Main area: Google Business, citations, listings."}
              </p>
            </div>
          ))}
        </div>

        {/* AI-powered tools section - Removed emoji from heading */}
        <div className="mt-16 bg-white p-8 rounded-lg shadow-sm max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-brand-heading">Tools That Support — Not Replace — Strategy</h3>
          <p className="text-brand-text mb-6">
            We use industry-leading tools to enhance our SEO strategies, but our expertise is what delivers results.
          </p>
          
          <div className="flex flex-wrap gap-3 justify-center">
            <div className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">Ahrefs</div>
            <div className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">Google Search Console</div>
            <div className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">YoastSEO (WordPress)</div>
            <div className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">ChatGPT (for content)</div>
            <div className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">Midjourney (for visuals)</div>
            <div className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">Sora (for video)</div>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link to="/content-erstellung" className="inline-flex items-center text-brand-primary font-medium hover:underline service-hover">
            Learn more about On-Page SEO & Backlink Strategy
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SEOServices;
