
import React from 'react';
import { Code, Database, Shield, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const benefits = [
  {
    icon: Code,
    title: 'Clean, Future-Proof Code',
    description: 'Modular, well-documented development that ensures scalability and easy maintenance as your business grows.'
  },
  {
    icon: Zap,
    title: 'Performance Optimized',
    description: 'Lightning-fast load times with advanced caching and optimization techniques for superior user experience.'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Robust security measures, regular updates, and compliance with the latest standards to protect your data.'
  },
  {
    icon: Database,
    title: 'Seamless Integrations',
    description: 'Smooth connections to CRMs, ERPs, payment gateways, and third-party APIs to enhance functionality.'
  }
];

const WebDevBenefits = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-brand-background via-white to-brand-backgroundAlt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-brand-heading">
          Why Choose ooliv for Web Development?
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-white hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <CardHeader className="flex flex-row items-start gap-4 pb-2">
                <div className="p-2 rounded-full bg-brand-backgroundAlt">
                  <benefit.icon className="h-6 w-6 text-brand-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl font-bold text-brand-heading">
                    {benefit.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-brand-text text-base">
                  {benefit.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebDevBenefits;
