
import React from 'react';
import { Check, Monitor, Zap, Shield, Users } from 'lucide-react';

const benefits = [
  {
    icon: Monitor,
    title: 'Responsive & Mobile-First',
    description: 'Your website works flawlessly on any device, ensuring you capture every potential lead.'
  },
  {
    icon: Users,
    title: 'Intuitive User Experience',
    description: 'We focus on user-friendly navigation and design to enhance customer satisfaction.'
  },
  {
    icon: Zap,
    title: 'Speed & Performance',
    description: 'Fast-loading, optimized websites to increase conversions and SEO rankings.'
  },
  {
    icon: Shield,
    title: 'Security & Scalability',
    description: 'Robust and secure websites designed for growth and peace of mind.'
  }
];

const WebDesignBenefits = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-brand-background via-white to-brand-backgroundAlt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-brand-heading">
          Why Choose ooliv for Web Design & Development?
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-brand-backgroundAlt">
                  <benefit.icon className="h-6 w-6 text-brand-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-brand-heading">
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

export default WebDesignBenefits;
