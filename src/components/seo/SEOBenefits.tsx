
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart2, Clock, FileText, ShieldAlert } from 'lucide-react';

const SEOBenefits = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-brand-heading mb-6">SEO Issues That Cost Revenue – We Solve Them</h2>
          <p className="text-xl text-brand-text max-w-3xl mx-auto">
            Our SEO services from Mainz address typical visibility issues – and create measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="mb-4 text-brand-primary">
              <BarChart2 className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-brand-heading">Traffic But No Leads</h3>
            <p className="text-brand-text mb-4">
              We optimize content and structure for search intent & conversion – for visitors who take action.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="mb-4 text-brand-primary">
              <Clock className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-brand-heading">SEO Takes Too Long</h3>
            <p className="text-brand-text mb-4">
              We combine quick wins with lasting impact – for visible ROI.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="mb-4 text-brand-primary">
              <FileText className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-brand-heading">Outdated Content & Poor Structure</h3>
            <p className="text-brand-text mb-4">
              We restructure pages and content in a search-friendly and user-centered manner.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="mb-4 text-brand-primary">
              <ShieldAlert className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-brand-heading">Technical Errors Slow Down Rankings</h3>
            <p className="text-brand-text mb-4">
              We analyze load time, indexing, and Core Web Vitals – and ensure clean code.
            </p>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link to="/en/content-creation" className="inline-flex items-center text-brand-primary font-medium hover:underline">
            More about Content Creation & Web Development
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SEOBenefits;
