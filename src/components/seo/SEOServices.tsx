
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, FileEdit, Code, FileText, Link2, MapPin } from 'lucide-react';

const SEOServices = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-brand-heading mb-6">SEO Services Built for Long-Term Growth</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="mb-4 text-brand-primary">
              <Search className="h-10 w-10" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-brand-heading">Keyword Strategy</h3>
            <p className="text-brand-text">
              In-depth research focused on relevant, industry-specific and local search terms.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="mb-4 text-brand-primary">
              <FileEdit className="h-10 w-10" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-brand-heading">On-Page Optimization</h3>
            <p className="text-brand-text">
              Metadata, URLs, headings, and structured content to improve rankings and UX.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="mb-4 text-brand-primary">
              <Code className="h-10 w-10" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-brand-heading">Technical SEO</h3>
            <p className="text-brand-text">
              Site speed, Core Web Vitals, clean indexing — the foundation of SEO success.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="mb-4 text-brand-primary">
              <FileText className="h-10 w-10" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-brand-heading">Content Optimization</h3>
            <p className="text-brand-text">
              Improve existing content or build new pages based on user needs and search intent.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="mb-4 text-brand-primary">
              <Link2 className="h-10 w-10" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-brand-heading">Link Strategy</h3>
            <p className="text-brand-text">
              Strategic internal linking and sustainable backlink campaigns to build authority.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="mb-4 text-brand-primary">
              <MapPin className="h-10 w-10" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-brand-heading">Local SEO</h3>
            <p className="text-brand-text">
              Boost visibility in Mainz and the Rhein-Main area: Google Business, citations, listings.
            </p>
          </div>
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
          <Link to="/en/content-creation" className="inline-flex items-center text-brand-primary font-medium hover:underline">
            Learn more about On-Page SEO & Backlink Strategy
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SEOServices;
