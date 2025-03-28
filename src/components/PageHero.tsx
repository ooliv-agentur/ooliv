
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface PageHeroProps {
  badge?: string;
  title: string;
  subtitle: string;
  primaryCta: {
    text: string;
    link: string;
  };
  secondaryCta?: {
    text: string;
    link: string;
  };
}

const PageHero = ({
  badge,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
}: PageHeroProps) => {
  return (
    <section className="relative bg-gradient-to-br from-ooliv-black to-ooliv-black/90 text-white pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background pattern/gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-ooliv-black to-ooliv-black/70 opacity-90 z-0"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Tag line above heading */}
          {badge && (
            <div className="inline-flex items-center bg-ooliv-green/20 text-ooliv-green rounded-full px-6 py-2 text-lg font-bold mb-8">
              <span>{badge}</span>
            </div>
          )}
          
          {/* Main heading with emphasis */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            {title}
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl lg:text-3xl text-white mb-10">
            {subtitle}
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="group bg-ooliv-green text-ooliv-black hover:bg-ooliv-green/90 text-lg py-7 px-8 font-bold" asChild>
              <Link to={primaryCta.link}>
                {primaryCta.text}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            
            {secondaryCta && (
              <Button variant="outline" size="lg" className="bg-transparent text-white hover:bg-white/10 border-2 border-white hover:bg-white hover:text-ooliv-black text-lg py-7 px-8 font-bold" asChild>
                <Link to={secondaryCta.link}>
                  {secondaryCta.text}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
      
      {/* Curved bottom section divider */}
      <div className="absolute bottom-0 left-0 right-0 h-16 z-10">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 320" 
          className="absolute bottom-0 w-full h-auto"
          preserveAspectRatio="none"
        >
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,224L80,213.3C160,203,320,181,480,192C640,203,800,245,960,245.3C1120,245,1280,203,1360,181.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default PageHero;
