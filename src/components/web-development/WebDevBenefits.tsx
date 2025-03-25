
import React from 'react';
import { Layers, ShieldCheck, LayoutDashboard, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: Layers,
    title: "Custom-Built to Fit",
    description: "We don't use templates or page builders. Everything is designed and coded specifically for your goals."
  },
  {
    icon: ShieldCheck,
    title: "Fast, Secure & Scalable",
    description: "Your site loads fast, runs reliably, and is built to grow with your business."
  },
  {
    icon: LayoutDashboard,
    title: "Easy to Manage",
    description: "Whether you use a CMS or prefer code-only setups, we make sure your website is simple to update and maintain."
  },
  {
    icon: TrendingUp,
    title: "Future-Proof Architecture",
    description: "From multilingual scaling to integrations — your site is built to support your next step, not hold you back."
  }
];

const WebDevBenefits = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-brand-background via-white to-brand-backgroundAlt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-brand-heading">
          Why Businesses Trust ooliv for Development
        </h2>
        
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-brand-text">
          We build robust, scalable technology solutions that align with your business goals and future growth.
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

export default WebDevBenefits;
