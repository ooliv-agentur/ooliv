
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const caseStudies = [
  {
    title: 'Scheurich – SEO Relaunch Success',
    services: 'Complete SEO Strategy & Implementation',
    results: [
      { icon: BarChart, stat: '+120%', description: 'more organic traffic in 4 months' },
      { icon: Users, stat: 'Top 10', description: 'rankings for target keywords' }
    ],
    description: 'Full technical SEO audit and implementation plus content optimization for Mainz-based manufacturer'
  },
  {
    title: 'COBUS – Ranking for Niche Keywords',
    services: 'Technical SEO & Content Strategy',
    results: [
      { icon: BarChart, stat: 'Top 3', description: 'Google rankings in competitive B2B market' },
      { icon: Users, stat: '+80%', description: 'increase in organic leads' }
    ],
    description: 'Targeting high-value B2B software keywords with strategic content and backlink campaigns'
  }
];

const SEOCaseStudies = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-brand-background via-white to-brand-backgroundAlt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-brand-heading">
          SEO That Delivers Real Business Results
        </h2>
        
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-brand-text">
          See how our Mainz-based SEO strategies drive measurable business outcomes.
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

export default SEOCaseStudies;
