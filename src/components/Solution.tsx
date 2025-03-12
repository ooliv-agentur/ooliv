
import React from 'react';
import { Zap, BarChart, Code, FileText, LineChart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const Solution = () => {
  const { t } = useLanguage();
  
  const steps = [
    {
      number: "1️⃣",
      title: "Strategy & Analysis",
      subtitle: "Powered by Market Insights & SEO Data",
      description: "We analyze your competitors, market trends, and customer behavior to create a website strategy that delivers results. AI-powered insights help optimize search visibility—but every decision is guided by expert analysis.",
      icon: BarChart
    },
    {
      number: "2️⃣",
      title: "Web Design & UX",
      subtitle: "Tailored Design, Enhanced by Technology",
      description: "A unique, polished brand experience designed by experts. We use advanced tools to refine layouts, colors, and visuals—but your brand's identity and user experience always come first.",
      icon: Zap
    },
    {
      number: "3️⃣",
      title: "Development & Performance",
      subtitle: "Optimized for Speed, Security & Growth",
      description: "We build fast, scalable, and secure websites that perform on every device. Our team ensures every site is optimized for mobile, accessibility, and performance—with AI enhancing technical optimizations, not replacing expert development.",
      icon: Code
    },
    {
      number: "4️⃣",
      title: "Content & SEO Optimization",
      subtitle: "Strategic Content That Ranks & Converts",
      description: "SEO-friendly, high-quality content written by experts and refined with AI-driven insights. We optimize structure, keywords, and performance—but messaging is crafted for impact, not automation.",
      icon: FileText
    },
    {
      number: "5️⃣",
      title: "Launch, Tracking & Support",
      subtitle: "Long-Term Growth & Data-Driven Success",
      description: "We track performance, analyze visitor behavior, and continuously optimize. AI helps streamline reporting and insights—but strategy and expertise drive long-term results.",
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
            <span className="text-brand-primary">With Strategy, Expertise & Smart Technology</span>
          </h2>
          
          <p className="max-w-3xl mx-auto text-lg text-brand-text">
            Whether you're launching a new business or upgrading an outdated website, our expert team combines strategic thinking, user-focused design, and cutting-edge tools to build high-performance websites. AI enhances efficiency—but creativity, experience, and data-driven decisions remain at the core of what we do.
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
              We integrate cutting-edge technologies to enhance website performance, SEO, and automation.
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
        
        <div className="mt-16 text-center">
          <p className="max-w-3xl mx-auto text-lg text-brand-text mb-8">
            Your website should be a growth engine—designed with strategy, built for performance, and enhanced with smart tools. Let's build a website that works for your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link to="/contact">Start Your Project →</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/case-studies">See How We Work →</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
