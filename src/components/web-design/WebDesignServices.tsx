
import React from 'react';
import { Monitor, Code, Paintbrush, Cog, ShoppingCart, LayoutGrid } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Paintbrush,
    title: 'Strategic Web Design',
    description: 'Conversion-focused designs that align with your business objectives and resonate with your B2B audience.',
    link: '/web-design',
    features: ['User Research & Analysis', 'Wireframing & Prototyping', 'Visual Identity Integration', 'Conversion-Optimized UI']
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Robust, scalable development solutions tailored to your specific business requirements and workflows.',
    link: '/web-development',
    features: ['Custom Web Applications', 'WordPress & Headless CMS', 'API Integration', 'Performance Optimization']
  },
  {
    icon: LayoutGrid,
    title: 'UX Optimization',
    description: 'Data-driven UX improvements that enhance user engagement, reduce friction, and increase conversions.',
    link: '/web-design',
    features: ['User Journey Mapping', 'A/B Testing', 'Heat Mapping', 'Usability Testing']
  },
  {
    icon: Cog,
    title: 'Website Maintenance',
    description: 'Proactive support and optimization to keep your digital presence secure, up-to-date, and performing at its best.',
    link: '/web-development',
    features: ['Security Updates', 'Performance Monitoring', 'Content Updates', 'Technical Support']
  }
];

const specializedServices = [
  {
    icon: ShoppingCart,
    title: 'Shopify Development',
    description: 'Custom Shopify stores optimized for B2B sales, with tailored workflows and integrations.',
    link: '/web-development'
  },
  {
    icon: Monitor,
    title: 'WordPress Maintenance',
    description: 'Dedicated WordPress care plans to keep your site secure, updated, and performing optimally.',
    link: '/web-development'
  }
];

const WebDesignServices = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-brand-heading">
          Comprehensive Web Solutions for B2B Companies
        </h2>
        
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-brand-text">
          From initial concept to ongoing optimization, we provide end-to-end web services tailored to your business goals.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 h-full flex flex-col"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 rounded-full bg-brand-backgroundAlt">
                  <service.icon className="h-6 w-6 text-brand-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-brand-heading">{service.title}</h3>
                  <p className="text-brand-text mb-4">{service.description}</p>
                </div>
              </div>
              
              <ul className="mb-6 flex-grow">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center mb-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-brand-primary mr-2"></div>
                    <span className="text-sm text-brand-text">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button variant="outline" size="sm" className="mt-auto self-start" asChild>
                <Link to={service.link}>
                  Learn More
                </Link>
              </Button>
            </div>
          ))}
        </div>
        
        <h3 className="text-2xl font-bold text-center mb-8 text-brand-heading">
          Specialized Solutions
        </h3>
        
        <div className="grid md:grid-cols-2 gap-8">
          {specializedServices.map((service, index) => (
            <div 
              key={index}
              className="bg-brand-backgroundAlt p-6 rounded-lg flex items-start gap-4"
            >
              <div className="p-2 rounded-full bg-white">
                <service.icon className="h-6 w-6 text-brand-primary" />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-1 text-brand-heading">{service.title}</h4>
                <p className="text-brand-text text-sm mb-3">{service.description}</p>
                <Link 
                  to={service.link}
                  className="text-sm font-medium text-brand-primary hover:underline"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebDesignServices;
