
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const WebDevHero = () => {
  return (
    <section className="pt-16 pb-20 md:pt-20 md:pb-24 bg-gradient-to-br from-brand-background to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-brand-heading">
              Web Development That Grows With Your Business
            </h1>
            <p className="text-xl mb-8 text-brand-text">
              From WordPress to custom web apps—scalable solutions tailored to your workflows and goals.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Start Your Web Project <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/case-studies">
                  View Case Studies
                </Link>
              </Button>
            </div>
          </div>
          <div className="bg-brand-backgroundAlt rounded-lg p-8 h-[400px] flex items-center justify-center order-first md:order-last">
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="absolute w-24 h-24 bg-brand-primary/10 rounded-full -left-4 -top-4"></div>
              <div className="absolute w-32 h-32 bg-brand-primary/10 rounded-full -right-8 -bottom-8"></div>
              <div className="bg-white p-8 rounded-lg shadow-lg z-10 w-3/4 h-3/4 flex flex-col justify-center">
                <h3 className="text-lg font-medium mb-2 text-brand-heading">Development Stack</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['WordPress', 'Shopify', 'React', 'Headless CMS', 'Custom'].map((tech, index) => (
                    <span key={index} className="text-xs px-2 py-1 bg-brand-backgroundAlt rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-brand-text">
                  Scalable solutions with the right technology for your specific business needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDevHero;
