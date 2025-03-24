
import React from 'react';
import { Paintbrush, Code, FileText, Search, Cog, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Paintbrush,
    title: 'Web Design',
    description: 'Custom designs that reflect your brand and make an impact, focused on user experience and conversion optimization.',
    link: '/web-design',
    features: ['Brand-aligned visuals', 'Responsive layouts', 'UI/UX design', 'Conversion-focused elements']
  },
  {
    icon: Code,
    title: 'Development',
    description: 'Reliable builds with WordPress, Headless CMS, or Shopify tailored to your specific business requirements.',
    link: '/web-development',
    features: ['WordPress & Webflow', 'Headless CMS', 'Custom functionality', 'API integrations']
  },
  {
    icon: FileText,
    title: 'Content & Structure',
    description: 'We help define your site structure, write the words, and place them for clarity and engagement.',
    link: '/content-creation',
    features: ['Information architecture', 'Content strategy', 'Copywriting', 'User journey mapping']
  },
  {
    icon: Search,
    title: 'SEO-Ready Foundations',
    description: 'Built to be found—on Google and by real users with technical optimization from day one.',
    link: '/seo-optimization',
    features: ['Technical SEO setup', 'Speed optimization', 'Structured data', 'Analytics integration']
  },
  {
    icon: Cog,
    title: 'Maintenance & Support',
    description: 'Security updates, speed checks, and content refreshes to keep your digital presence performing at its best.',
    link: '/web-development',
    features: ['Security monitoring', 'Performance updates', 'Content management', 'Technical support']
  }
];

const specializedServices = [
  {
    icon: ShoppingCart,
    title: 'Shopify Development',
    description: 'Custom Shopify stores optimized for both B2B and B2C sales, with tailored workflows and integrations.',
    link: '/web-development'
  },
  {
    icon: Cog,
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
          What We Offer – All from One Partner
        </h2>
        
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-brand-text">
          From initial concept to ongoing optimization, we provide end-to-end web services tailored to your business goals.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
