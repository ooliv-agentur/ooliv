
import React from 'react';
import { Code, Layout, ShoppingBag, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Code,
    title: 'Custom Web Applications',
    description: 'Tailored platforms built from scratch to match your processes.'
  },
  {
    icon: Layout,
    title: 'WordPress Development',
    description: 'Flexible CMS setups—from corporate sites to multisite networks.'
  },
  {
    icon: ShoppingBag,
    title: 'Shopify Development',
    description: 'Sales-driven storefronts with custom design, app integrations, and performance optimization.'
  },
  {
    icon: Database,
    title: 'Headless CMS Solutions',
    description: 'Modern architecture for high performance and full design freedom.'
  }
];

const WebDevServices = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-brand-heading">
          Development Services at a Glance
        </h2>
        
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-brand-text">
          From simple websites to complex web applications—we build the right solution for your needs.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-brand-backgroundAlt inline-flex">
                  <service.icon className="h-8 w-8 text-brand-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-heading">
                {service.title}
              </h3>
              <p className="text-brand-text">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="italic text-brand-text mb-4">
            Not sure what you need? Let's talk strategy.
          </p>
          <Button variant="outline" asChild>
            <Link to="/contact">
              Schedule a Consultation
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WebDevServices;
