
import React from 'react';
import { BarChart, ShieldCheck, Rocket, Target } from 'lucide-react';

const benefits = [
  {
    icon: Target,
    title: 'Strategic Business Focus',
    description: "We align your website with your core business objectives—whether that's lead generation, market positioning, or customer retention."
  },
  {
    icon: Rocket,
    title: 'Performance-Driven Design',
    description: 'Every design decision is made with conversion optimization and user engagement in mind, resulting in measurable business impact.'
  },
  {
    icon: BarChart,
    title: 'Data-Backed Approach',
    description: 'We use analytics and user behavior insights to make strategic design decisions that drive results and maximize ROI.'
  },
  {
    icon: ShieldCheck,
    title: 'Long-Term Partnership',
    description: 'Beyond launch, we provide ongoing support, optimization, and scaling strategies as your business grows and evolves.'
  }
];

const WebDesignBenefits = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-brand-background via-white to-brand-backgroundAlt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-brand-heading">
          Why Choose ooliv for B2B Web Design
        </h2>
        
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-brand-text">
          We don't just build websites—we create digital business assets engineered for measurable growth.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-brand-backgroundAlt">
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

export default WebDesignBenefits;
