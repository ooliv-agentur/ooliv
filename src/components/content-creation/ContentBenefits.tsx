
import React from 'react';
import { FileText, Target, Users, Paintbrush } from 'lucide-react';

const benefits = [
  {
    icon: FileText,
    problem: 'No Content, No Impact',
    solution: 'We deliver complete website content – from text to visuals – for powerful brand presence.'
  },
  {
    icon: Target,
    problem: 'Generic Content, Zero Recognition',
    solution: 'Custom texts, photos, and illustrations that perfectly align with your brand DNA.'
  },
  {
    icon: Users,
    problem: 'Content Takes Too Long – Or Missing Entirely',
    solution: 'Efficient content production using AI tools like ChatGPT, Midjourney & Sora – with human quality control.'
  },
  {
    icon: Paintbrush,
    problem: 'No Visible Corporate Design',
    solution: 'Our in-house graphic designers create logos, icons & illustrations for consistent brand appearances.'
  }
];

const ContentBenefits = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-tone heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-brand-heading">
            Content Challenges That Hurt Your 
            <span className="block text-brand-primary"> Business — Here's How We Fix Them</span>
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
      </div>
    </section>
  );
};

export default ContentBenefits;
