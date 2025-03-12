
import React from 'react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Zap, AlertCircle, CheckCircle2, Search, LineChart } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';

const Challenge = () => {
  const { t } = useLanguage();
  
  const challenges = [
    {
      problem: "Your business doesn't have a website yet—you're missing opportunities.",
      solution: "We design high-performance websites that attract and convert customers.",
      icon: AlertCircle
    },
    {
      problem: "Your website looks outdated and doesn't represent your brand.",
      solution: "A modern, professional design strengthens trust and credibility.",
      icon: Zap
    },
    {
      problem: "Your site is slow, hard to update, and not optimized for mobile.",
      solution: "We create lightning-fast, mobile-friendly websites with easy management tools.",
      icon: CheckCircle2
    },
    {
      problem: "Low Google rankings mean customers can't find you.",
      solution: "SEO optimization ensures your business is highly visible in search results.",
      icon: Search
    },
    {
      problem: "Your website isn't generating leads or sales.",
      solution: "Our conversion-driven approach turns visitors into customers.",
      icon: LineChart
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('challenge.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('challenge.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {challenges.map((item, index) => (
            <div key={index} className="group">
              <Alert className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <item.icon className="h-5 w-5" />
                <AlertTitle className="text-red-600 mb-2">{item.problem}</AlertTitle>
                <AlertDescription className="text-green-600">{item.solution}</AlertDescription>
              </Alert>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
            How We Fix This →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Challenge;
