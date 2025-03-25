
import React from 'react';
import { Target, Rocket, BarChart, ShieldCheck } from 'lucide-react';

const benefits = [
  {
    icon: Target,
    title: 'Business-First Webdesign Approach',
    description: "Your goals drive the design: leads, sales, or better positioning. We align every element with your core business objectives."
  },
  {
    icon: Rocket,
    title: 'Conversion-Friendly Design',
    description: 'We design with clicks, scrolls, and actions in mind. Every decision aims to guide visitors toward becoming customers.'
  },
  {
    icon: BarChart,
    title: 'Built for Speed & Growth',
    description: 'Fast, scalable websites that evolve with you. We use analytics and user behavior insights to drive results that scale with your business.'
  },
  {
    icon: ShieldCheck,
    title: 'Long-Term Support',
    description: 'We stay by your side—even after launch. Our team provides ongoing optimization and scaling strategies as your business grows.'
  }
];

const WebDesignBenefits = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-brand-background via-white to-brand-backgroundAlt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-brand-heading">
          Why Businesses Choose ooliv for Webdesign
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
