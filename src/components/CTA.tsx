
import React, { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export interface CTAProps {
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta?: string;
  children?: ReactNode;
  footerNote?: string;
  lightBackground?: boolean;
}

const CTA = ({ title, subtitle, primaryCta, secondaryCta, children, footerNote, lightBackground = false }: CTAProps) => {
  return (
    <section className={`py-20 ${lightBackground ? 'bg-gray-50' : 'bg-brand-primary text-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${lightBackground ? 'text-brand-heading' : 'text-white'}`}>{title}</h2>
        <p className={`text-xl max-w-2xl mx-auto mb-8 ${lightBackground ? 'text-brand-text' : 'text-white'}`}>{subtitle}</p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            variant={lightBackground ? 'default' : 'outline'} 
            className={lightBackground ? '' : 'border-white text-white hover:bg-white hover:text-brand-primary'} 
            asChild
          >
            <Link to="/contact">{primaryCta}</Link>
          </Button>
          
          {secondaryCta && (
            <Button 
              variant={lightBackground ? 'outline' : 'outline'} 
              className={lightBackground ? 'border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white' : 'border-white text-white hover:bg-white hover:text-brand-primary'} 
              asChild
            >
              <Link to="/case-studies">{secondaryCta}</Link>
            </Button>
          )}
        </div>
        
        {footerNote && (
          <p className={`text-sm mt-8 ${lightBackground ? 'text-gray-500' : 'text-white'}`}>
            {footerNote}
          </p>
        )}
        
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
