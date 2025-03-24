
import React from 'react';
import { AlertCircle, Zap, Search, LineChart, ArrowRight, X, Check } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import BeforeAfterSlider from './BeforeAfterSlider';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Challenge = () => {
  const { t } = useLanguage();
  
  const challenges = [
    {
      problem: "Outdated Website Design",
      painPoint: "An outdated website damages credibility and loses customers.",
      solution: "As a Web Design Agency, we specialize in modern, conversion-focused websites that elevate brand perception and increase engagement.",
      icon: AlertCircle,
      color: "from-red-50/40 to-orange-50/30"
    },
    {
      problem: "Poor Mobile Experience",
      painPoint: "60%+ of website traffic comes from mobile—if your site isn't optimized, you're losing conversions.",
      solution: "We design fully responsive, mobile-optimized websites that ensure a seamless experience across all devices—improving conversion rates and user engagement.",
      icon: Zap,
      color: "from-brand-background/60 to-brand-backgroundAlt/40"
    },
    {
      problem: "Your Website Loads Too Slowly? Every Second Costs You Money.",
      painPoint: "A slow website can reduce conversions by up to 7% per second of delay.",
      solution: "We optimize for lightning-fast speeds—boosting SEO and conversions.",
      icon: AlertCircle,
      color: "from-green-50/40 to-emerald-50/30"
    },
    {
      problem: "Low Google Rankings",
      painPoint: "If your site isn't ranking, you're invisible to 90% of potential customers.",
      solution: "Our SEO-optimized websites use strategic keyword placement, technical SEO, and structured content to improve rankings and organic traffic.",
      icon: Search,
      color: "from-yellow-50/40 to-amber-50/30"
    },
    {
      problem: "Your Website Gets Traffic—But No Sales?",
      painPoint: "Getting traffic isn't enough—your site needs to convert visitors into leads & customers.",
      solution: "Smart UX, CTAs, and conversion-focused design turn visitors into customers.",
      icon: LineChart,
      color: "from-brand-backgroundAlt/60 to-brand-background/40"
    }
  ];

  return (
    <section id="solutions" className="section-standard">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-standard">
            Website Challenges That Hurt Your Business – Here's How We Fix Them
          </h2>
          <p className="subheading-standard">
            Here's what might be holding your business back—and how we fix it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {challenges.map((item, index) => (
            <div 
              key={index} 
              className="card-standard group relative transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col h-full">
                <div className="mb-5">
                  <div className="inline-flex items-center gap-2 mb-3">
                    <span className="text-red-500">
                      <item.icon className="h-5 w-5 stroke-[2px]" />
                    </span>
                    <h3 className="text-brand-heading font-medium text-base">
                      <span className="text-red-500 font-bold">PROBLEM:</span> {item.problem}
                    </h3>
                  </div>
                  
                  <div className="flex items-start gap-2 mb-5 pl-7">
                    <X className="h-4 w-4 flex-shrink-0 text-red-400 stroke-[2px]" />
                    <p className="text-gray-600 text-sm leading-relaxed">{item.painPoint}</p>
                  </div>
                </div>
                
                <div className="mt-auto">
                  <div className="flex items-start gap-2 pl-7">
                    <Check className="h-4 w-4 flex-shrink-0 text-green-500 stroke-[2px]" />
                    <div>
                      <p className="text-green-600 font-medium text-sm mb-1">OUR SOLUTION:</p>
                      <p className="text-gray-700 text-sm leading-relaxed">{item.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-4">See the Difference</h3>
          <p className="text-center text-gray-600 mb-8">Drag the slider to compare outdated and modern website designs</p>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <BeforeAfterSlider />
          </div>
        </div>

        <div className="text-center">
          <Button 
            variant="default" 
            size="lg"
            className="button-primary group"
            asChild
          >
            <Link to="/web-design-development">
              How We Fix This 
              <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Challenge;
