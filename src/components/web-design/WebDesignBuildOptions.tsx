
import React from 'react';
import { Button } from '@/components/ui/button';
import { Database, ShoppingCart, Code, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const WebDesignBuildOptions = () => {
  const options = [
    {
      icon: Database,
      title: 'Custom WordPress Websites',
      description: 'We build every WordPress site from scratch — no themes or prebuilt templates. Clean code, flexible setup, and full design freedom.'
    },
    {
      icon: ShoppingCart,
      title: 'WooCommerce Integration',
      description: 'If you offer products or services, we can add shop functionality right into your WordPress site — without making it feel like a store.'
    },
    {
      icon: Code,
      title: 'Custom Code (No CMS)',
      description: 'For more control, we build websites without any CMS. Using HTML, CSS, and JavaScript, we create sites that are fast, secure, and fully customizable.'
    },
    {
      icon: ShoppingBag,
      title: 'Shopify for Product-Based Businesses',
      description: 'For selected B2B clients, we offer tailored Shopify setups — simple, focused, and conversion-friendly.'
    }
  ];

  return (
    <section className="py-24 bg-brand-backgroundAlt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-brand-heading">
          Built for Your Business — No Templates, No Shortcuts
        </h2>
        
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-brand-text">
          We build solutions tailored to your specific business needs and goals.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {options.map((option, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-brand-backgroundAlt">
                  <option.icon className="h-6 w-6 text-brand-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-brand-heading">
                    {option.title}
                  </h3>
                  <p className="text-brand-text">{option.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button className="group" asChild>
            <Link to="/contact">
              Not sure which fits? Let's find the right solution for you.
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WebDesignBuildOptions;
