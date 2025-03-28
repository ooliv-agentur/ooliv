import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

interface CTAProps {
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
  footerNote?: string;
  lightBackground?: boolean;
}

const CTA = ({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  footerNote,
  lightBackground = false
}: CTAProps) => {
  const { language } = useLanguage();
  const isGerman = language === 'de';
  
  const contactPath = isGerman ? "/de/kontakt" : "/contact";
  const caseStudiesPath = isGerman ? "/de/case-studies" : "/case-studies";

  return (
    <section className={`py-24 ${lightBackground ? 'bg-brand-backgroundAlt' : 'bg-brand-background'} text-white`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-8 text-brand-heading">{title}</h2>
        <p className="text-xl mb-12 max-w-3xl mx-auto text-brand-text">{subtitle}</p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="group" asChild>
            <Link to={contactPath}>
              {primaryCta}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          
          <Button variant="outline" size="lg" className="bg-transparent text-white hover:bg-white/10 border-white hover:text-brand-heading hover:bg-white" asChild>
            <Link to={caseStudiesPath}>
              {secondaryCta}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
        
        {footerNote && (
          <p className="mt-12 text-sm text-white/70">{footerNote}</p>
        )}
      </div>
    </section>
  );
};

export default CTA;
