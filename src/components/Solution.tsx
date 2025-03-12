
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const Solution = () => {
  const { t } = useLanguage();

  const techLogos = [
    {
      name: "ChatGPT-4",
      icon: "/chatgpt-logo.svg",
      description: "AI-powered content & automation"
    },
    {
      name: "Midjourney",
      icon: "/midjourney-logo.svg",
      description: "AI-generated images & branding"
    },
    {
      name: "Sora AI",
      icon: "/sora-logo.svg",
      description: "AI-driven video production"
    },
    {
      name: "Ahrefs",
      icon: "/ahrefs-logo.svg",
      description: "Advanced SEO analytics"
    },
    {
      name: "Google Ads AI",
      icon: "/google-ads-logo.svg",
      description: "AI-optimized ad campaigns"
    }
  ];

  return (
    <section id="process" className="py-20 bg-gradient-to-br from-brand-background via-white to-brand-backgroundAlt overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-4">
            We Build Websites That Elevate Your Business—
            <br />
            <span className="text-brand-primary">With Strategy, Expertise & Smart Technology</span>
          </h2>
          
          <p className="max-w-3xl mx-auto text-lg text-brand-text">
            Whether you're launching a new business or upgrading an outdated website, our expert team combines strategic thinking, user-focused design, and cutting-edge tools to create high-performance digital experiences. AI enhances efficiency—but creativity, experience, and data-driven decisions are at the core of our approach.
          </p>
        </div>
        
        {/* Tech Logos Section - Now with transparent background */}
        <div className="mt-16 rounded-2xl p-8">
          <div className="text-center mb-10">
            <p className="text-lg text-brand-heading font-medium">
              We integrate cutting-edge technologies to enhance website performance, SEO, and automation.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
            {techLogos.map((logo, index) => (
              <div key={index} className="group flex flex-col items-center transition-all duration-300 hover:-translate-y-1">
                <div className="w-20 h-20 flex items-center justify-center p-4 rounded-full bg-brand-backgroundAlt group-hover:bg-white group-hover:shadow-md transition-all duration-300">
                  <img 
                    src={logo.icon} 
                    alt={`${logo.name} logo`} 
                    className="max-w-full max-h-full object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
                  />
                </div>
                <p className="mt-3 text-sm text-brand-heading font-medium">{logo.name}</p>
                <p className="text-xs text-brand-text mt-1">{logo.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA Section - Now with transparent background */}
        <div className="mt-16 text-center rounded-2xl p-8">
          <p className="max-w-3xl mx-auto text-lg text-brand-text mb-8">
            Your website should be a powerful business tool—designed with strategy, built for performance, and enhanced with smart technology. Let's create a website that works for your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="group">
              <Link to="/contact" className="inline-flex items-center">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" asChild size="lg" className="group">
              <Link to="/case-studies" className="inline-flex items-center">
                See How We Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
