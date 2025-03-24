
import React from 'react';
import { FileText, BookOpen, MessageSquare, PenTool } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    icon: FileText,
    title: 'Website Copywriting',
    description: 'Strategic, conversion-focused copy for your entire website that drives action and reflects your brand voice.'
  },
  {
    icon: BookOpen,
    title: 'Blog & Article Creation',
    description: 'SEO-optimized, engaging blog posts and articles that establish authority and drive organic traffic.'
  },
  {
    icon: MessageSquare,
    title: 'Brand Messaging',
    description: 'Clear, consistent brand messaging frameworks that resonate with your target audience across all channels.'
  },
  {
    icon: PenTool,
    title: 'Content Strategy',
    description: 'Comprehensive content plans aligned with your business goals, audience needs, and marketing objectives.'
  }
];

const ContentServices = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-brand-background via-white to-brand-backgroundAlt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-brand-heading">
          Content Creation Services at a Glance
        </h2>
        
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-brand-text">
          Comprehensive content solutions tailored to your brand voice and business objectives.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="p-3 rounded-full bg-brand-backgroundAlt inline-flex mb-3">
                  <service.icon className="h-6 w-6 text-brand-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-brand-heading">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-text">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <p className="text-brand-primary italic">
            Not sure what content you need? Let's talk strategy →
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContentServices;
