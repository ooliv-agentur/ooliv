
import React from 'react';
import { Layers, ShieldCheck, LayoutDashboard, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: Layers,
    title: 'Custom-Built to Fit',
    description: "Templates limit your growth. We build custom layouts and features—no drag & drop shortcuts."
  },
  {
    icon: ShieldCheck,
    title: 'Fast, Secure & Scalable',
    description: "Performance issues hurt SEO & UX. Our code is fast, secure, and optimized for Google and users."
  },
  {
    icon: LayoutDashboard,
    title: 'Built for Your Team',
    description: "The backend is a mess? Clean CMS or Headless setups your team will love to manage."
  },
  {
    icon: TrendingUp,
    title: 'Ready for What\'s Next',
    description: 'Your site can\'t evolve with you? Modular systems that scale as your business grows.'
  }
];

const WebDevBenefits = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-brand-background via-white to-brand-backgroundAlt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-brand-heading">
          Why Businesses Choose ooliv for Web Development
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
