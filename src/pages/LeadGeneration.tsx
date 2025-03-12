
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Target, Users, TrendingUp, BarChart2 } from 'lucide-react';

const LeadGeneration = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="text-center mb-16 pt-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Lead Generation & Conversion Optimization</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Turn visitors into leads and leads into loyal customers
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-6">Maximize Your Conversion Potential</h2>
            <p className="text-lg mb-6">
              Our lead generation and conversion optimization services are designed to 
              help you attract qualified leads and turn them into customers through 
              data-driven strategies and continuous optimization.
            </p>
            <ul className="space-y-4">
              {[
                'Strategic lead capture and nurturing systems',
                'Conversion funnel optimization',
                'A/B testing and data analysis',
                'User experience and interface improvements'
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-brand-primary mr-2">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button className="mt-8" size="lg">Boost Your Conversions</Button>
          </div>
          <div className="bg-gray-100 rounded-lg p-8 h-[400px] flex items-center justify-center order-1 md:order-2">
            <p className="text-gray-500">Conversion Funnel Image</p>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Lead Generation Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: <Target className="h-10 w-10 mb-4 text-brand-primary" />,
                title: 'Lead Capture',
                description: 'Strategic lead capture systems that attract qualified prospects'
              },
              { 
                icon: <Users className="h-10 w-10 mb-4 text-brand-primary" />,
                title: 'Audience Targeting',
                description: 'Precise targeting to reach your ideal customers'
              },
              { 
                icon: <TrendingUp className="h-10 w-10 mb-4 text-brand-primary" />,
                title: 'Conversion Rate Optimization',
                description: 'Data-driven strategies to increase your conversion rates'
              },
              { 
                icon: <BarChart2 className="h-10 w-10 mb-4 text-brand-primary" />,
                title: 'Performance Tracking',
                description: 'Comprehensive analytics to measure and improve results'
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
            <h2 className="text-3xl font-bold mb-4">Ready to Generate More Leads?</h2>
            <p className="text-lg max-w-2xl mx-auto">
              Let our team help you develop a comprehensive lead generation strategy
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

export default LeadGeneration;
