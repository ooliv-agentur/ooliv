
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Search, BarChart, LineChart, Zap } from 'lucide-react';

const SEO = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="text-center mb-16 pt-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">SEO & Performance Optimization</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Boost your visibility, drive organic traffic, and improve website performance
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-6">Supercharge Your Online Visibility</h2>
            <p className="text-lg mb-6">
              Our SEO and performance optimization services are designed to help your website 
              rank higher in search results, load faster, and provide a better experience for your users.
            </p>
            <ul className="space-y-4">
              {[
                'Comprehensive SEO audits and strategy development',
                'On-page and technical SEO optimization',
                'Content optimization for better rankings',
                'Performance tuning for lightning-fast load times'
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-brand-primary mr-2">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button className="mt-8" size="lg">Get a Free SEO Audit</Button>
          </div>
          <div className="bg-gray-100 rounded-lg p-8 h-[400px] flex items-center justify-center order-1 md:order-2">
            <p className="text-gray-500">SEO Performance Graph Image</p>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-12 text-center">Our SEO & Performance Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: <Search className="h-10 w-10 mb-4 text-brand-primary" />,
                title: 'SEO Optimization',
                description: 'Comprehensive optimization to improve your search engine rankings'
              },
              { 
                icon: <BarChart className="h-10 w-10 mb-4 text-brand-primary" />,
                title: 'Performance Analysis',
                description: 'Detailed analysis of your site speed and performance metrics'
              },
              { 
                icon: <LineChart className="h-10 w-10 mb-4 text-brand-primary" />,
                title: 'Traffic Growth',
                description: 'Strategies to increase organic traffic and user engagement'
              },
              { 
                icon: <Zap className="h-10 w-10 mb-4 text-brand-primary" />,
                title: 'Speed Optimization',
                description: 'Advanced techniques to make your website load faster'
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

        <div className="bg-brand-backgroundAlt rounded-lg p-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Ready to Improve Your Online Performance?</h2>
            <p className="text-lg max-w-2xl mx-auto">
              Let our team of SEO experts help you climb the search rankings and optimize your site
            </p>
          </div>
          <div className="flex justify-center">
            <Button size="lg">Schedule a Consultation</Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default SEO;
