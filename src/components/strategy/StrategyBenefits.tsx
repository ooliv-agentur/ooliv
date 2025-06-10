
import React from 'react';
import { Target, Users, TrendingUp, Zap } from 'lucide-react';

const StrategyBenefits = () => {
  const benefits = [
    {
      icon: <Target className="h-8 w-8 text-brand-primary" />,
      title: "Clear Goals & Positioning",
      description: "We define your unique value proposition and target audience for maximum impact."
    },
    {
      icon: <Users className="h-8 w-8 text-brand-primary" />,
      title: "User-Centered Design",
      description: "Every strategy decision is based on real user needs and behavior patterns."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-brand-primary" />,
      title: "Measurable Results",
      description: "We establish clear KPIs and tracking to measure success and ROI."
    },
    {
      icon: <Zap className="h-8 w-8 text-brand-primary" />,
      title: "Quick Implementation",
      description: "Our strategies are designed for fast execution and immediate impact."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-brand-heading mb-6">
            Strategy That Delivers Results
          </h2>
          <p className="text-xl text-brand-text max-w-3xl mx-auto">
            Our strategic approach combines data-driven insights with creative solutions to drive your business forward.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="p-4 rounded-full bg-brand-background">
                  {benefit.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-heading">{benefit.title}</h3>
              <p className="text-brand-text">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategyBenefits;
