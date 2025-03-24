
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Bot, Brain, Cpu, Sparkles } from 'lucide-react';

const AISolutions = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="text-center mb-16 pt-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">AI-Powered Solutions</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Harness the power of artificial intelligence to transform your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold mb-6">Cutting-Edge AI for Modern Businesses</h2>
            <p className="text-lg mb-6">
              Our AI-powered solutions help you automate processes, gain deeper insights, 
              and create personalized experiences for your customers.
            </p>
            <ul className="space-y-4">
              {[
                'AI-driven content creation and optimization',
                'Smart chatbots and virtual assistants',
                'Predictive analytics and business intelligence',
                'Personalization engines for user experiences'
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-brand-primary mr-2">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button className="mt-8" size="lg">Explore AI Solutions</Button>
          </div>
          <div className="bg-gray-100 rounded-lg p-8 h-[400px] flex items-center justify-center">
            <p className="text-gray-500">AI Technology Image</p>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-12 text-center">Our AI Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: <Bot className="h-10 w-10 mb-4 text-brand-primary" />,
                title: 'AI Chatbots',
                description: 'Intelligent conversational agents that engage with your customers 24/7'
              },
              { 
                icon: <Brain className="h-10 w-10 mb-4 text-brand-primary" />,
                title: 'Machine Learning',
                description: 'Custom ML models that learn from your data and improve over time'
              },
              { 
                icon: <Sparkles className="h-10 w-10 mb-4 text-brand-primary" />,
                title: 'AI Content',
                description: 'Content generation and optimization powered by advanced AI models'
              },
              { 
                icon: <Cpu className="h-10 w-10 mb-4 text-brand-primary" />,
                title: 'AI Integration',
                description: 'Seamless integration of AI technologies into your existing systems'
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
            <h2 className="text-3xl font-bold mb-4">Ready to Leverage AI for Your Business?</h2>
            <p className="text-lg max-w-2xl mx-auto">
              Let's discuss how our AI-powered solutions can help you stay ahead of the competition
            </p>
          </div>
          <div className="flex justify-center">
            <Button size="lg">Schedule a Demo</Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default AISolutions;
