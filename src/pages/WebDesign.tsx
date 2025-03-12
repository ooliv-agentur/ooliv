
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Monitor, Code, Paintbrush, Smartphone } from 'lucide-react';

const WebDesign = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="text-center mb-16 pt-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Web Design & Development</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Creating beautiful, functional, and responsive websites that drive results for your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold mb-6">Custom Web Solutions for Your Business</h2>
            <p className="text-lg mb-6">
              We design and develop websites that not only look great but also perform exceptionally. 
              Our custom web solutions are tailored to meet your specific business needs and goals.
            </p>
            <ul className="space-y-4">
              {[
                'Responsive design that works on all devices',
                'User-friendly interfaces with intuitive navigation',
                'Fast loading speeds and optimized performance',
                'Secure and scalable infrastructure'
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-brand-primary mr-2">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button className="mt-8" size="lg">Start Your Project</Button>
          </div>
          <div className="bg-gray-100 rounded-lg p-8 h-[400px] flex items-center justify-center">
            <p className="text-gray-500">Website Showcase Image</p>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Web Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: <Monitor className="h-10 w-10 mb-4 text-brand-primary" />,
                title: 'Web Design',
                description: 'Beautiful, modern designs that reflect your brand and engage your visitors'
              },
              { 
                icon: <Code className="h-10 w-10 mb-4 text-brand-primary" />,
                title: 'Web Development',
                description: 'Custom coding and development to create robust, high-performance websites'
              },
              { 
                icon: <Paintbrush className="h-10 w-10 mb-4 text-brand-primary" />,
                title: 'UI/UX Design',
                description: 'User-centered design that creates seamless and intuitive user experiences'
              },
              { 
                icon: <Smartphone className="h-10 w-10 mb-4 text-brand-primary" />,
                title: 'Responsive Design',
                description: 'Websites that adapt perfectly to all screen sizes and devices'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                {service.icon}
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-brand-backgroundAlt rounded-lg p-10 mb-24">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Web Presence?</h2>
            <p className="text-lg max-w-2xl mx-auto">
              Let's discuss how we can elevate your online presence with a custom web solution
            </p>
          </div>
          <div className="flex justify-center">
            <Button size="lg">Contact Us Today</Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default WebDesign;
