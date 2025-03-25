
import React from 'react';
import { FileText, Target, Users, Paintbrush } from 'lucide-react';
import { Link } from 'react-router-dom';

const benefits = [
  {
    icon: FileText,
    problem: 'No Content, No Results',
    solution: 'We create complete web content — from text to visuals — to make sure your website works.'
  },
  {
    icon: Target,
    problem: 'Generic Messaging',
    solution: 'We develop content that sounds like you — sharp, on-brand, and impossible to ignore.'
  },
  {
    icon: Users,
    problem: 'Content Gaps or Delays',
    solution: 'Using AI tools like ChatGPT and Midjourney, we create high-quality content faster than ever.'
  },
  {
    icon: Paintbrush,
    problem: 'Visual Inconsistency',
    solution: 'We ensure your brand's visuals stay consistent across all touchpoints — logos, icons, images.'
  }
];

const ContentBenefits = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-tone heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-brand-heading">
            Content Challenges That Cost You Business 
            <span className="block text-brand-primary"> — We Fix Them</span>
          </h2>
          
          <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-brand-text">
            Here's what might be holding your business back—and how we fix it.
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
        
        <div className="mt-8 text-center">
          <p className="text-brand-text">
            Learn more about our{' '}
            <Link to="/content-creation" className="text-brand-primary hover:underline">
              Content Creation
            </Link>{' '}
            and{' '}
            <Link to="/seo-optimization" className="text-brand-primary hover:underline">
              SEO
            </Link>{' '}
            services
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContentBenefits;
