
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { BarChart2, LineChart, MousePointer, Split } from 'lucide-react';

const ConversionOptimization = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="text-center mb-16 pt-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Conversion Optimization</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Transform your website visitors into loyal customers with data-driven optimization
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold mb-6">Maximize Your Website's Conversion Potential</h2>
            <p className="text-lg mb-6">
              Our conversion optimization services are designed to analyze user behavior, 
              identify conversion barriers, and implement strategic improvements to help 
              your website convert more visitors into customers.
            </p>
            <ul className="space-y-4">
              {[
                'Comprehensive conversion rate analysis',
                'Strategic A/B testing to optimize performance',
                'User journey mapping and optimization',
                'Data-driven CTA and form improvements'
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-brand-primary mr-2">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button className="mt-8" size="lg">Boost Your Conversions</Button>
          </div>
          <div className="bg-gray-100 rounded-lg p-8 h-[400px] flex items-center justify-center">
            <p className="text-gray-500">Conversion Funnel Visualization</p>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Conversion Optimization Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: <BarChart2 className="h-10 w-10 mb-4 text-brand-primary" />,
                title: 'Conversion Analysis',
                description: 'In-depth analysis of your current conversion rates and user behavior'
              },
              { 
                icon: <MousePointer className="h-10 w-10 mb-4 text-brand-primary" />,
                title: 'User Experience Optimization',
                description: 'Enhance user experience to reduce friction and increase conversions'
              },
              { 
                icon: <Split className="h-10 w-10 mb-4 text-brand-primary" />,
                title: 'A/B Testing',
                description: 'Systematic testing of variations to identify the highest-converting elements'
              },
              { 
                icon: <LineChart className="h-10 w-10 mb-4 text-brand-primary" />,
                title: 'Performance Tracking',
                description: 'Ongoing monitoring and optimization of conversion metrics'
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
            <h2 className="text-3xl font-bold mb-4">Ready to Increase Your Conversion Rates?</h2>
            <p className="text-lg max-w-2xl mx-auto">
              Let our team of conversion specialists help you turn more visitors into customers
            </p>
          </div>
          <div className="flex justify-center">
            <Button size="lg">Get Started Today</Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ConversionOptimization;
