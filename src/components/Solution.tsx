
import React from 'react';
import { Zap, BarChart, Code, FileText, LineChart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Solution = () => {
  const { t } = useLanguage();
  
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
    <section id="process" className="py-20 bg-gradient-to-br from-brand-background via-white to-brand-backgroundAlt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-4">
            We Build Websites That Grow Your Business—
            <br />
            <span className="text-brand-primary">With Strategic Expertise & AI-Powered Efficiency</span>
          </h2>
          
          <p className="max-w-3xl mx-auto text-lg text-brand-text">
            Whether you're launching a new business or upgrading an outdated website, our expert team leverages AI tools to enhance strategy, speed up processes, and optimize results—always guided by professional experience and industry best practices.
          </p>
        </div>
        
        <div className="grid md:grid-cols-5 gap-4 lg:gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col items-center text-center border border-gray-100"
            >
              <div className="mb-4 text-2xl">{step.number}</div>
              <div className="p-3 bg-brand-backgroundAlt rounded-full mb-4 group-hover:bg-brand-background transition-colors">
                <step.icon className="h-6 w-6 text-brand-primary" />
              </div>
              <h3 className="font-bold text-lg mb-1 text-brand-heading">{step.title}</h3>
              <p className="text-brand-primary text-sm mb-2">{step.subtitle}</p>
              <p className="text-brand-text text-sm">{step.description}</p>
            </div>
          ))}
        </div>
        
        {/* Tech Logos Section */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <p className="text-lg text-brand-heading">
              We integrate cutting-edge AI technologies to enhance website performance, SEO, and automation.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
            {techLogos.map((logo, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-20 h-20 flex items-center justify-center transition-all duration-300 hover:opacity-80 hover:scale-105">
                  <img 
                    src={logo.icon} 
                    alt={`${logo.name} logo`} 
                    className="max-w-full max-h-full object-contain filter grayscale opacity-70 hover:opacity-100 transition-all"
                  />
                </div>
                <p className="mt-2 text-sm text-brand-heading font-medium">{logo.name}</p>
                <p className="text-xs text-brand-text mt-1">{logo.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/ai-powered-solutions"
            className="inline-flex items-center text-brand-primary hover:text-brand-primaryHover transition-colors"
          >
            <span>Learn more about our process</span>
            <Zap className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Solution;
