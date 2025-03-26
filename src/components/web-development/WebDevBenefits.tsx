
import React from 'react';
import { Layers, ShieldCheck, LayoutDashboard, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: Layers,
    title: "Tailored, Not Templated",
    description: "No themes, no page builders – every line of code is built around your goals."
  },
  {
    icon: ShieldCheck,
    title: "Fast, Secure & Scalable",
    description: "Your website loads fast, runs smoothly, and grows with your business."
  },
  {
    icon: LayoutDashboard,
    title: "Easy to Maintain",
    description: "Whether with or without a CMS – you stay in control."
  },
  {
    icon: TrendingUp,
    title: "Built for the Future",
    description: "Designed for international rollout, integrations, and long-term scalability."
  }
];

const WebDevBenefits = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-brand-background via-white to-brand-backgroundAlt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-brand-heading">
          Why Businesses Choose ooliv for Web Development
        </h2>
        
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

export default WebDevBenefits;
