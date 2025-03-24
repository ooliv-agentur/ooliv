
import React from 'react';
import { Search, FileText, Edit, CheckCircle, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Research & Strategy',
    description: 'We analyze your audience, competition, and goals to develop a targeted content strategy.'
  },
  {
    icon: FileText,
    title: 'Content Planning',
    description: 'We outline topics, formats, and messaging that align with your brand and business objectives.'
  },
  {
    icon: Edit,
    title: 'Content Creation',
    description: 'Our writers craft compelling, SEO-optimized content tailored to your voice and goals.'
  },
  {
    icon: CheckCircle,
    title: 'Review & Refinement',
    description: 'We collaborate with you to ensure the content perfectly represents your brand.'
  },
  {
    icon: ArrowRight,
    title: 'Publication & Measurement',
    description: 'We help implement the content and track its performance against key metrics.'
  }
];

const ContentProcess = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-brand-heading">
          Our Content Development Process
        </h2>
        
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-brand-text">
          From strategy to publication—how we create content that drives results.
        </p>
        
        <div className="overflow-x-auto pb-6">
          <div className="flex flex-col md:flex-row gap-6 min-w-max md:min-w-0">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex-1 min-w-[280px]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div className="p-3 rounded-full bg-brand-backgroundAlt">
                      <step.icon className="h-6 w-6 text-brand-primary" />
                    </div>
                    <div className="h-full w-0.5 bg-brand-backgroundAlt mt-2 mb-2 hidden md:block"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-brand-heading flex items-center gap-2">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-brand-primary text-white text-sm">
                        {index + 1}
                      </span>
                      {step.title}
                    </h3>
                    <p className="text-brand-text">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentProcess;
