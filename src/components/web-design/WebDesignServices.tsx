
import React from 'react';
import { Monitor, Code, Paintbrush, Smartphone } from 'lucide-react';

const services = [
  {
    icon: Monitor,
    title: 'Web Design',
    description: 'Visually engaging websites that showcase your brand and resonate with your target audience.'
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Flexible development solutions, including WordPress, Shopify, and custom HTML, tailored to your business processes.'
  },
  {
    icon: Paintbrush,
    title: 'UI/UX Optimization',
    description: 'User-centric designs that improve engagement, reduce bounce rates, and drive conversions.'
  },
  {
    icon: Smartphone,
    title: 'Responsive Websites',
    description: 'Optimized layouts ensuring seamless experiences on smartphones, tablets, and desktops.'
  }
];

const WebDesignServices = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-brand-heading">
          Custom Web Services Tailored to Your Needs
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

export default WebDesignServices;
