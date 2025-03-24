
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const caseStudies = [
  {
    title: 'B2B Tech Company',
    services: 'Website Copy, Blog Content, Case Studies',
    results: [
      { icon: BarChart, stat: '+156%', description: 'organic traffic increase' },
      { icon: Users, stat: '+43%', description: 'conversion rate improvement' }
    ],
    description: 'Complete content strategy and implementation for a SaaS company targeting enterprise clients.'
  },
  {
    title: 'E-Commerce Brand',
    services: 'Product Descriptions, Email Campaigns, Social Content',
    results: [
      { icon: BarChart, stat: '+68%', description: 'email engagement' },
      { icon: Users, stat: '+22%', description: 'product page conversions' }
    ],
    description: 'Conversion-focused content across multiple channels for a growing D2C brand.'
  }
];

const ContentCaseStudies = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-brand-background via-white to-brand-backgroundAlt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-brand-heading">
          Real Results Through Strategic Content
        </h2>
        
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-brand-text">
          See how our content strategies drive measurable business outcomes.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <h3 className="text-2xl font-bold mb-2 text-brand-heading">{study.title}</h3>
              <p className="text-brand-primary text-sm font-medium mb-6">{study.services}</p>
              
              <div className="flex gap-6 mb-6">
                {study.results.map((result, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <result.icon className="h-5 w-5 text-brand-primary mt-1" />
                    <div>
                      <p className="text-2xl font-bold text-brand-heading">{result.stat}</p>
                      <p className="text-sm text-brand-text">{result.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <p className="text-brand-text mb-6">{study.description}</p>
              
              <Button variant="outline" size="sm" className="group" asChild>
                <Link to="/case-studies">
                  View Full Case Study
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" className="group" asChild>
            <Link to="/case-studies">
              View All Case Studies
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContentCaseStudies;
