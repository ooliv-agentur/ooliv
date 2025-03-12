
import React from 'react';
import { Zap, BarChart, Code, FileText, LineChart } from 'lucide-react';

const Solution = () => {
  const steps = [
    {
      number: "1️⃣",
      title: "Strategy & Analysis",
      subtitle: "Powered by AI SEO Insights",
      description: "AI-driven competitor research & keyword optimization.",
      icon: BarChart
    },
    {
      number: "2️⃣",
      title: "Web Design & UX",
      subtitle: "Enhanced with AI-Generated Visuals",
      description: "Use Midjourney-generated images for a unique, polished brand look.",
      icon: Zap
    },
    {
      number: "3️⃣",
      title: "Development & Performance",
      subtitle: "Optimized for Speed & Security",
      description: "AI-enhanced page speed & mobile optimization.",
      icon: Code
    },
    {
      number: "4️⃣",
      title: "Content & SEO Optimization",
      subtitle: "Powered by ChatGPT-4 & Ahrefs",
      description: "AI-written SEO content & blog automation.",
      icon: FileText
    },
    {
      number: "5️⃣",
      title: "Launch, Tracking & Support",
      subtitle: "AI-Powered Analytics",
      description: "AI-based performance tracking & real-time insights.",
      icon: LineChart
    }
  ];

  return (
    <section id="process" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            We Build Websites That Grow Your Business—
            <br />
            <span className="text-blue-600">With Smart, AI-Driven Solutions.</span>
          </h2>
          
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Whether you're launching a new business or upgrading an outdated website, we use AI-powered tools to create websites that rank better, load faster, and convert more visitors into customers.
          </p>
        </div>
        
        <div className="grid md:grid-cols-5 gap-4 lg:gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col items-center text-center border border-gray-100"
            >
              <div className="mb-4 text-2xl">{step.number}</div>
              <div className="p-3 bg-blue-100 rounded-full mb-4 group-hover:bg-blue-200 transition-colors">
                <step.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg mb-1 text-gray-900">{step.title}</h3>
              <p className="text-blue-600 text-sm mb-2">{step.subtitle}</p>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#process" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span>Learn more about our process</span>
            <Zap className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Solution;
