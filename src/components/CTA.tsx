
import React, { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export interface CTAProps {
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta?: string;
  children?: ReactNode; // Add children as an optional prop
}

const CTA = ({ title, subtitle, primaryCta, secondaryCta, children }: CTAProps) => {
  return (
    <section className="py-20 bg-brand-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-xl max-w-2xl mx-auto mb-8">{subtitle}</p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild>
            <Link to="/contact">{primaryCta}</Link>
          </Button>
          
          {secondaryCta && (
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-brand-primary" asChild>
              <Link to="/case-studies">{secondaryCta}</Link>
            </Button>
          )}
        </div>
        
        {children && (
          <div className="mt-12">
            {children}
          </div>
        )}
      </div>
    </section>
  );
};

export default CTA;
