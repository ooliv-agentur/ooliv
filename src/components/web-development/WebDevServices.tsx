
import React from 'react';
import { Database, Code, Globe, Clock } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Full-Stack Development',
    description: 'End-to-end web application development with modern frameworks (React, Next.js) and robust back-end architecture.'
  },
  {
    icon: Globe,
    title: 'CMS Implementation',
    description: 'Custom WordPress, Shopify, or headless CMS solutions tailored to your specific business requirements.'
  },
  {
    icon: Database,
    title: 'API Development & Integration',
    description: 'Secure RESTful and GraphQL APIs for seamless data flow between your systems and third-party services.'
  },
  {
    icon: Clock,
    title: 'Maintenance & Support',
    description: 'Ongoing technical support, security updates, and performance optimization to keep your web assets running smoothly.'
  }
];

const WebDevServices = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-brand-heading">
          Expert Web Development Services
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              <service.icon className="h-12 w-12 mb-4 text-brand-primary mx-auto transition-transform group-hover:scale-110 duration-300" />
              <h3 className="text-xl font-bold mb-3 text-center text-brand-heading">{service.title}</h3>
              <p className="text-center text-brand-text">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebDevServices;
