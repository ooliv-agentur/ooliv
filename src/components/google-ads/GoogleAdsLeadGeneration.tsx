
import React from 'react';
import { Search, MousePointerClick, LineChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const GoogleAdsLeadGeneration = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-4">
            Targeted traffic, measurable results
          </h2>
          <p className="text-xl text-brand-text max-w-3xl mx-auto">
            We use Google Ads to generate qualified leads – not just clicks.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: <Search className="h-10 w-10 mb-4 text-brand-primary" />,
              title: "Search Campaigns",
              description: "We create ads that appear exactly when your audience is searching. With precise keyword targeting, ad extensions, and conversion tracking."
            },
            {
              icon: <MousePointerClick className="h-10 w-10 mb-4 text-brand-primary" />,
              title: "Landing Pages",
              description: "Ads only work when the landing page does. We design high-converting pages with a clear message and strong CTA – optimized for mobile and speed."
            },
            {
              icon: <LineChart className="h-10 w-10 mb-4 text-brand-primary" />,
              title: "Ongoing Optimization",
              description: "We continuously monitor, test, and adjust campaigns to improve performance and reduce cost per lead."
            }
          ].map((feature, index) => (
            <div key={index} className="bg-brand-backgroundAlt p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button size="lg" className="group" asChild>
            <Link to="/contact">
              Let's turn search intent into qualified leads
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GoogleAdsLeadGeneration;
