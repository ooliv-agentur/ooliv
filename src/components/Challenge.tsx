import React, { useState } from 'react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Zap, AlertCircle, CheckCircle2, Search, LineChart, ArrowRight, MousePointer2 } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import BeforeAfterSlider from './BeforeAfterSlider';

const Challenge = () => {
  const { t } = useLanguage();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const challenges = [
    {
      problem: "Outdated Website Design",
      solution: "Modern, conversion-focused design that represents your brand professionally",
      description: "Your current website might be holding back your business growth",
      icon: AlertCircle,
      color: "from-red-50 to-orange-50"
    },
    {
      problem: "Poor Mobile Experience",
      solution: "Fully responsive, mobile-first design that works perfectly on all devices",
      description: "60% of users access websites on mobile - is yours optimized?",
      icon: Zap,
      color: "from-brand-background to-brand-backgroundAlt"
    },
    {
      problem: "Slow Loading Speed",
      solution: "Lightning-fast performance with optimized code and assets",
      description: "Every second delay reduces conversions by 7%",
      icon: CheckCircle2,
      color: "from-green-50 to-emerald-50"
    },
    {
      problem: "Low Search Rankings",
      solution: "SEO optimization for higher Google rankings and more organic traffic",
      description: "90% of users don't look past the first page of Google",
      icon: Search,
      color: "from-yellow-50 to-amber-50"
    },
    {
      problem: "Poor Conversion Rate",
      solution: "Strategic CTA placement and conversion optimization",
      description: "Is your website turning visitors into customers?",
      icon: LineChart,
      color: "from-brand-backgroundAlt to-brand-background"
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-4">
            {t('challenge.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Common challenges that might be holding your business back. Hover over each card to see our solution.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {challenges.map((item, index) => (
            <div 
              key={index} 
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Alert className={`h-full transition-all duration-500 hover:shadow-xl hover:-translate-y-2 relative overflow-hidden bg-gradient-to-br ${item.color}`}>
                <div className="flex items-start">
                  <item.icon className={`h-5 w-5 mt-0.5 ${hoveredIndex === index ? 'text-brand-primary' : 'text-gray-600'}`} />
                  <div className="ml-2">
                    <AlertTitle className="text-brand-heading mb-2 font-semibold">{item.problem}</AlertTitle>
                    <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                    <AlertDescription 
                      className={`text-brand-primary font-medium transition-all duration-300 ${
                        hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                      }`}
                    >
                      {item.solution}
                    </AlertDescription>
                  </div>
                </div>
                {hoveredIndex === index && (
                  <MousePointer2 className="absolute bottom-4 right-4 h-4 w-4 text-brand-primary animate-pulse" />
                )}
              </Alert>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-4">See the Difference</h3>
          <p className="text-center text-gray-600 mb-8">Drag the slider to compare outdated and modern website designs</p>
          <BeforeAfterSlider />
        </div>

        <div className="text-center">
          <Button 
            variant="default" 
            size="lg"
            className="bg-brand-primary hover:bg-brand-primaryHover text-brand-text font-medium group"
          >
            How We Fix This 
            <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Challenge;
