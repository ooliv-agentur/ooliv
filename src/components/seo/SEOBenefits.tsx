
import React from 'react';
import { BarChart2, Clock, FileText, Shield } from 'lucide-react';

const benefits = [
  {
    icon: BarChart2,
    problem: 'Your website gets traffic, but no leads',
    solution: 'We optimize for intent, not just keywords—bringing in the right visitors ready to convert.'
  },
  {
    icon: Clock,
    problem: 'SEO takes too long to show results',
    solution: 'We combine quick wins with long-term strategies to accelerate ROI.'
  },
  {
    icon: FileText,
    problem: 'Outdated content and poor structure',
    solution: 'We revamp your site architecture and create high-value, search-friendly content.'
  },
  {
    icon: Shield,
    problem: 'Technical issues hurt your rankings',
    solution: 'Our audits cover every SEO-relevant detail—speed, indexing, core vitals, and more.'
  }
];

const SEOBenefits = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-tone heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-brand-heading">
            SEO Challenges That Hold Your Business Back
            <span className="block text-brand-primary"> — And How We Fix Them</span>
          </h2>
          
          <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-brand-text">
            Here's what might be preventing your website from ranking—and how we solve it.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-brand-backgroundAlt mb-4">
                  <benefit.icon className="h-8 w-8 text-brand-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-brand-heading">
                    {benefit.problem}
                  </h3>
                  <p className="text-brand-text">{benefit.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SEOBenefits;
