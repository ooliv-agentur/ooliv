
import React from 'react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Zap, AlertCircle, CheckCircle2, Search, LineChart, ArrowRight, MousePointer2, X, Check } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import BeforeAfterSlider from './BeforeAfterSlider';
import { Link } from 'react-router-dom';

const Challenge = () => {
  const { t } = useLanguage();
  
  const challenges = [
    {
      problem: "Outdated Website Design",
      painPoint: "Your website looks old and doesn't reflect your business success.",
      solution: "A modern, conversion-optimized design that strengthens your brand and builds trust.",
      icon: AlertCircle,
      color: "from-red-50 to-orange-50"
    },
    {
      problem: "Poor Mobile Experience",
      painPoint: "60% of users browse on mobile, but your site isn't responsive.",
      solution: "Mobile-first, fully responsive design that works flawlessly on all devices.",
      icon: Zap,
      color: "from-brand-background to-brand-backgroundAlt"
    },
    {
      problem: "Slow Loading Speed",
      painPoint: "Every second of delay costs you conversions.",
      solution: "AI-powered speed optimization for lightning-fast performance and better SEO rankings.",
      icon: CheckCircle2,
      color: "from-green-50 to-emerald-50"
    },
    {
      problem: "Low Google Rankings",
      painPoint: "90% of users never go beyond page 1—can they find you?",
      solution: "SEO-driven web design with optimized content, smart keyword placement, and fast performance.",
      icon: Search,
      color: "from-yellow-50 to-amber-50"
    },
    {
      problem: "Poor Conversion Rate",
      painPoint: "Your visitors don't turn into customers.",
      solution: "AI-driven heatmaps and conversion optimization to boost engagement and increase sales.",
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
            Common challenges that might be holding your business back and how we solve them.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {challenges.map((item, index) => (
            <div 
              key={index} 
              className="group relative transition-all duration-300 hover:-translate-y-2"
            >
              <Alert className={`h-full shadow-md hover:shadow-xl transition-all duration-500 relative overflow-hidden bg-gradient-to-br ${item.color}`}>
                <div className="flex flex-col">
                  <div className="flex items-start gap-2 mb-3">
                    <item.icon className="h-5 w-5 mt-0.5 text-gray-700" />
                    <AlertTitle className="text-brand-heading font-semibold">
                      <span className="flex items-center gap-1">
                        <span className="text-red-600 font-bold">PROBLEM:</span> {item.problem}
                      </span>
                    </AlertTitle>
                  </div>
                  
                  <div className="pl-7 mb-4">
                    <div className="flex items-start gap-2">
                      <X className="h-4 w-4 flex-shrink-0 text-red-500" />
                      <p className="text-gray-700 text-sm">{item.painPoint}</p>
                    </div>
                  </div>
                  
                  <div className="pl-7">
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 flex-shrink-0 text-green-600" />
                      <div>
                        <p className="text-green-700 font-medium text-sm mb-1">OUR SOLUTION:</p>
                        <p className="text-gray-700 text-sm">{item.solution}</p>
                      </div>
                    </div>
                  </div>
                </div>
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
