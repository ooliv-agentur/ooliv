
import React from 'react';
import { Link } from 'react-router-dom';

const TechnologiesSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-brand-background via-white to-brand-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6 text-brand-heading">
            We develop websites that drive your business forward — with strategy, expertise and technology.
          </h2>
          <p className="text-xl text-brand-text max-w-3xl mx-auto">
            Our services include: 
            <Link to="/en/webdesign" className="text-brand-primary hover:underline"> Web Design</Link>, 
            <Link to="/en/webdevelopment" className="text-brand-primary hover:underline"> Web Development</Link>, 
            <Link to="/en/content-creation" className="text-brand-primary hover:underline"> Content Creation</Link>, 
            <Link to="/en/seo" className="text-brand-primary hover:underline"> SEO Optimization</Link>, 
            <Link to="/en/google-ads" className="text-brand-primary hover:underline"> Google Ads</Link> and 
            <Link to="/en/ai-technologies" className="text-brand-primary hover:underline"> AI Technologies</Link>.
          </p>
          <div className="mt-8">
            <Link to="/en/about-us" className="group inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              Learn more about our process
              <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
