
import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

interface ProcessStep {
  title: string;
  description: string;
}

interface SolutionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  solutions?: string[];
  process?: ProcessStep[];
  learnMoreText?: string;
}

const Solution = ({ 
  title, 
  subtitle, 
  description, 
  solutions,
  process,
  learnMoreText
}: SolutionProps) => {
  const { language } = useLanguage();
  const path = language === 'de' ? '/de/webdesign' : '/web-design';
  
  return (
    <section className="py-20 bg-brand-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-brand-heading">
            {title || "We Create Websites That Elevate Your Business—"}
          </h2>
          <h3 className="text-xl font-normal mb-6 text-brand-heading">
            {subtitle || "With Strategy, Expertise & Smart Technology"}
          </h3>
          <p className="text-lg text-brand-text max-w-3xl mx-auto">
            {description || "Whether you're launching a new business or upgrading an outdated website, our expert team combines strategic thinking, user-focused design, and cutting-edge tools to create high-performance digital experiences."}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto mb-12">
          {solutions && solutions.map((solution, index) => (
            <div key={index} className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <p>{solution}</p>
            </div>
          ))}
        </div>
        
        {process && process.length > 0 && (
          <div className="max-w-4xl mx-auto mt-16">
            <h3 className="text-2xl font-bold mb-8 text-center text-brand-heading">
              {language === 'de' ? 'So arbeiten wir – Schritt für Schritt zu Ihrer leistungsstarken Website' : 'Our Process – Step by Step to Your High-Performance Website'}
            </h3>
            <div className="space-y-8">
              {process.map((step, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-xl font-bold mb-2 text-brand-heading">
                    {index + 1}. {step.title}
                  </h4>
                  <p className="text-brand-text">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        
        <div className="text-center mt-12">
          <Link 
            to={path}
            className="inline-flex items-center text-brand-primary hover:text-brand-primaryHover transition-colors font-medium"
          >
            {learnMoreText || "Learn more about our process"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Solution;
