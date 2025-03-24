
import React from 'react';
import { FileText, Target, Users } from 'lucide-react';

const benefits = [
  {
    icon: FileText,
    title: 'Outdated Content Strategy?',
    description: "Content that doesn't connect with your audience or drive meaningful engagement."
  },
  {
    icon: Target,
    title: 'Inconsistent Brand Voice?',
    description: "Mixed messaging that confuses customers and dilutes your brand identity."
  },
  {
    icon: Users,
    title: 'Low Content Engagement?',
    description: "Content that fails to convert visitors into leads or customers."
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
        
        <div className="grid md:grid-cols-3 gap-8">
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
                    {benefit.title}
                  </h3>
                  <p className="text-brand-text">{benefit.description}</p>
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
