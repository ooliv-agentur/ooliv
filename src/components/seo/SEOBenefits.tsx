
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart2, Clock, FileText, ShieldAlert } from 'lucide-react';

const SEOBenefits = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-brand-heading mb-6">SEO Challenges That Block Growth — We Fix Them</h2>
          <p className="text-xl text-brand-text max-w-3xl mx-auto">
            Our Mainz-based SEO services solve the most common issues holding back your search performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="mb-4 text-brand-primary">
              <BarChart2 className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-brand-heading">Traffic but no leads</h3>
            <p className="text-brand-text mb-4">
              We optimize for search intent and conversion — to reach users who are ready to act.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="mb-4 text-brand-primary">
              <Clock className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-brand-heading">SEO takes too long</h3>
            <p className="text-brand-text mb-4">
              We deliver quick wins and long-term results — for faster ROI.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="mb-4 text-brand-primary">
              <FileText className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-brand-heading">Outdated content & unclear structure</h3>
            <p className="text-brand-text mb-4">
              We revise content and improve page architecture for better ranking and user experience.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="mb-4 text-brand-primary">
              <ShieldAlert className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-brand-heading">Technical issues hurt rankings</h3>
            <p className="text-brand-text mb-4">
              We fix site speed, indexing, and Core Web Vitals — with clean, SEO-friendly code.
            </p>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link to="/content-creation" className="inline-flex items-center text-brand-primary font-medium hover:underline">
            Explore Content Creation & Web Development Services
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SEOBenefits;
