
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface WebDevHeroProps {
  pageTag?: string;
}

const WebDevHero: React.FC<WebDevHeroProps> = ({ pageTag }) => {
  return (
    <section className="pt-20 pb-16 md:pt-24 md:pb-20 bg-gradient-to-b from-brand-backgroundAlt to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <div className="inline-block bg-brand-primary/10 rounded-full px-4 py-1.5 text-brand-primary font-medium text-sm mb-6">
            {pageTag || "Web Development"}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-brand-heading">
            Web Development That Supports Your Business Goals
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-brand-text">
            We build websites that load fast, convert visitors, and scale with your business. Our development focuses on performance and security.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">
                Start Your Development Project
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">
                Book a Strategy Call
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDevHero;
