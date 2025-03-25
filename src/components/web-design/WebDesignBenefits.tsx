
import React from 'react';
import { Target, MousePointer, Smartphone, HeadphonesIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const benefits = [
  {
    icon: Target,
    title: 'Business Goals First',
    description: "Every design starts with your goals — more leads, stronger brand, better results."
  },
  {
    icon: MousePointer,
    title: 'Built for Action',
    description: 'Our designs guide visitors toward the next step — from click to contact.'
  },
  {
    icon: Smartphone,
    title: 'Fast, Mobile, and SEO-Ready',
    description: 'We build for performance — fast load times, mobile-first, easy to find on Google.'
  },
  {
    icon: HeadphonesIcon,
    title: 'We're Still There After Launch',
    description: 'We don't disappear — we support, optimize, and grow with you over time.'
  }
];

const WebDesignBenefits = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-brand-background via-white to-brand-backgroundAlt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-brand-heading">
          Why Companies Choose ooliv for Web Design
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
                  <p className="text-brand-text">
                    {index === 2 ? (
                      <>
                        We build for performance — fast load times, <Link to="/seo-optimization" className="text-brand-primary hover:underline">mobile-first</Link>, easy to find on Google.
                      </>
                    ) : benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-brand-text">
            Our focus is on real-world results: <Link to="/lead-generation" className="text-brand-primary hover:underline">more leads</Link>, improved <Link to="/seo-optimization" className="text-brand-primary hover:underline">search visibility</Link>, and enhanced <Link to="/content-creation" className="text-brand-primary hover:underline">content strategy</Link> for sustainable growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WebDesignBenefits;
