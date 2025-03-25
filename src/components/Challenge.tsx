
import React from 'react';
import { AlertCircle, Smartphone, Zap, Search, LineChart, ArrowRight, X, Check } from "lucide-react";
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
      painPoint: "An outdated website hurts your credibility and loses customers.",
      solution: "We create modern, conversion-focused websites that build trust and drive engagement.",
      icon: AlertCircle,
      color: "from-red-50/40 to-orange-50/30"
    },
    {
      problem: "Poor Mobile Experience",
      painPoint: "Over 60% of traffic is mobile — a bad experience costs you conversions.",
      solution: "We build fully responsive websites that perform seamlessly across all devices.",
      icon: Smartphone,
      color: "from-brand-background/60 to-brand-backgroundAlt/40"
    },
    {
      problem: "Slow Load Speeds",
      painPoint: "Every second of delay reduces conversions by up to 7%.",
      solution: "We optimize for lightning-fast performance that boosts SEO and UX.",
      icon: Zap,
      color: "from-green-50/40 to-emerald-50/30"
    },
    {
      problem: "Low Google Rankings",
      painPoint: "If you don't rank, 90% of your potential customers won't find you.",
      solution: "Our SEO-driven websites improve visibility, structure, and relevance.",
      icon: Search,
      color: "from-yellow-50/40 to-amber-50/30"
    },
    {
      problem: "No Conversions Despite Traffic?",
      painPoint: "Traffic alone doesn't pay the bills — conversions do.",
      solution: "Through strategic UX and clear CTAs, we turn visitors into leads and customers.",
      icon: LineChart,
      color: "from-brand-backgroundAlt/60 to-brand-background/40"
    }
  ];

  return (
    <section id="solutions" className="section-standard bg-muted py-24">
      <div className="section-container max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-standard text-3xl md:text-4xl font-bold mb-4">
            Website Challenges That Hurt Your Business — Here's How We Fix Them
          </h2>
          <p className="subheading-standard text-lg max-w-3xl mx-auto">
            Here's what might be holding your business back — and how we fix it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {challenges.map((item, index) => (
            <div 
              key={index} 
              className="card-standard group relative transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex flex-col h-full p-6">
                <div className="mb-5">
                  <div className="flex flex-col items-start gap-2 mb-4">
                    <div className="icon-standard">
                      <item.icon className="h-5 w-5 text-brand-primary" />
                    </div>
                    <h3 className="text-brand-heading font-semibold text-xl mb-2">
                      {item.problem}
                    </h3>
                    <p className="text-gray-600">{item.painPoint}</p>
                  </div>
                </div>
                
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <div className="flex items-start gap-2">
                    <div className="p-1 rounded-full bg-green-50">
                      <Check className="h-4 w-4 text-green-500" />
                    </div>
                    <div>
                      <p className="text-gray-700">{item.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="default" 
            size="lg"
            className="button-primary group"
            asChild
          >
            <Link to="/web-design-development">
              See How We Solve These Challenges 
              <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Challenge;
