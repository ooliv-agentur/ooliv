
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Monitor, Code, Paintbrush, Smartphone, ArrowRight, CheckCircle2, FileSpreadsheet, ChevronRight, X, Check, LineChart, Zap, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTA from '@/components/CTA';
import FAQ from '@/components/FAQ';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const WebDesign = () => {
  return (
    <PageLayout>
      {/* Hero Section with improved visual style */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-background/90 via-white/90 to-brand-backgroundAlt/90 z-0"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 z-[-1]"></div>
        
        <div className="container mx-auto px-4 py-24 max-w-7xl relative z-10">
          <div className="text-center mb-16 pt-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-brand-heading">Professional Web Design & Development for B2B Companies</h1>
            <p className="text-xl max-w-3xl mx-auto mb-6 text-brand-text">
              Custom websites designed for growth, performance, and measurable results.
            </p>
            <p className="max-w-3xl mx-auto mb-8 text-brand-text">
              At ooliv, we create high-performing, visually appealing, and responsive websites tailored specifically to your business objectives. Whether you're looking for a modern WordPress solution, a seamless Shopify store, or custom-coded HTML development, we provide the perfect foundation for your digital success.
            </p>
            <Button size="lg" className="group" asChild>
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Benefits Section - Redesigned to match homepage Challenge style */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-brand-heading">Why Choose ooliv for Web Design & Development?</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              {
                problem: "Outdated & Unresponsive Websites",
                painPoint: "Websites that don't work on mobile lose 60% of potential leads",
                solution: "Responsive & Mobile-First: Your website works flawlessly on any device, ensuring you capture every potential lead.",
                icon: Smartphone,
                color: "from-red-50/40 to-orange-50/30"
              },
              {
                problem: "Confusing User Experience",
                painPoint: "Poor navigation increases bounce rates by up to 40%",
                solution: "Intuitive User Experience: We focus on user-friendly navigation and design to enhance customer satisfaction and keep visitors engaged.",
                icon: Code,
                color: "from-brand-background/60 to-brand-backgroundAlt/40"
              },
              {
                problem: "Slow Loading Pages",
                painPoint: "A slow website can reduce conversions by up to 7% per second of delay",
                solution: "Speed & Performance: Fast-loading, optimized websites to increase conversions and SEO rankings.",
                icon: Zap,
                color: "from-green-50/40 to-emerald-50/30"
              },
              {
                problem: "Security Vulnerabilities",
                painPoint: "Security breaches damage customer trust and can lead to costly downtime",
                solution: "Security & Scalability: Robust and secure websites designed for growth and peace of mind.",
                icon: LineChart,
                color: "from-brand-backgroundAlt/60 to-brand-background/40"
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="group relative transition-all duration-300 hover:-translate-y-1"
              >
                <div className={cn(
                  "h-full shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden",
                  "rounded-xl border border-gray-100 bg-white p-6"
                )}>
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
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section - Enhanced with hover effects and better styling */}
      <div className="py-20 bg-gradient-to-br from-brand-background/20 to-brand-backgroundAlt/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-brand-heading">Custom Web Services Tailored to Your Needs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: <Monitor className="h-12 w-12 mb-4 text-brand-primary" />,
                title: 'Web Design',
                description: 'Visually engaging websites that showcase your brand and resonate with your target audience.'
              },
              { 
                icon: <Code className="h-12 w-12 mb-4 text-brand-primary" />,
                title: 'Web Development',
                description: 'Flexible development solutions, including WordPress, Shopify, and custom HTML, tailored to your business processes.'
              },
              { 
                icon: <Paintbrush className="h-12 w-12 mb-4 text-brand-primary" />,
                title: 'UI/UX Optimization',
                description: 'User-centric designs that improve engagement, reduce bounce rates, and drive conversions.'
              },
              { 
                icon: <Smartphone className="h-12 w-12 mb-4 text-brand-primary" />,
                title: 'Responsive Websites',
                description: 'Optimized layouts ensuring seamless experiences on smartphones, tablets, and desktops.'
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex justify-center">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-center text-brand-heading">{service.title}</h3>
                <p className="text-center text-brand-text">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section - Improved with more engaging visuals */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-brand-heading">How We Create Websites That Drive Results</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                number: "01",
                title: "Strategy & Planning",
                description: "We align your business goals with strategic web solutions, selecting the optimal platform for your needs."
              },
              {
                number: "02",
                title: "Custom Design & UX",
                description: "User-centric designs that capture attention, simplify navigation, and increase conversions."
              },
              {
                number: "03",
                title: "Tailored Development",
                description: "Robust, secure, and scalable website builds customized for your business workflows."
              },
              {
                number: "04",
                title: "Quality Assurance",
                description: "Comprehensive testing to ensure flawless functionality across all devices and browsers."
              },
              {
                number: "05",
                title: "Launch & Support",
                description: "Continuous support and optimization to keep your website performing at its best."
              }
            ].map((step, index) => (
              <Card key={index} className="border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 bg-white overflow-hidden group">
                <CardHeader className="pb-2">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center text-xl font-bold mb-4">
                    {step.number}
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-brand-text">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Cross-Linking Section - Enhanced with hover effects */}
      <div className="py-20 bg-gradient-to-br from-brand-background/20 to-brand-backgroundAlt/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-brand-heading">Explore Our Specialized Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "SEO Optimization",
                description: "Boost visibility and rankings with our data-driven SEO strategies.",
                link: "/seo-performance-optimization",
                icon: <Search className="h-10 w-10 text-brand-primary" />
              },
              {
                title: "AI-Powered Solutions",
                description: "Leverage AI technology to automate processes and enhance performance.",
                link: "/ai-solutions",
                icon: <Zap className="h-10 w-10 text-brand-primary" />
              },
              {
                title: "Lead Generation",
                description: "Convert website visitors into qualified leads with proven strategies.",
                link: "/lead-generation",
                icon: <LineChart className="h-10 w-10 text-brand-primary" />
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className="border border-gray-200 rounded-xl p-6 bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="mb-4 transition-transform group-hover:scale-110 duration-300">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-brand-heading">{service.title}</h3>
                <p className="mb-4 text-brand-text">{service.description}</p>
                <Button variant="link" className="p-0 text-brand-primary group-hover:text-brand-primaryHover transition-colors" asChild>
                  <Link to={service.link} className="flex items-center">
                    Learn More <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Case Studies Section - Improved visual style */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-brand-heading">Successful Web Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                client: "Scheurich – Lifestyle Brand",
                result: "120% increase in organic traffic through strategic redesign.",
                image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&q=80"
              },
              {
                client: "COBUS – ERP Solutions",
                result: "80% more leads through targeted web optimization.",
                image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80"
              }
            ].map((study, index) => (
              <div 
                key={index} 
                className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-64 relative group"
              >
                <img 
                  src={study.image} 
                  alt={study.client} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">{study.client}</h3>
                  <p className="text-white mb-4">{study.result}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" asChild className="group">
              <Link to="/case-studies" className="flex items-center">
                View All Case Studies <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* FAQ Section - Converted to match homepage accordion style */}
      <div className="py-20 bg-gradient-to-br from-brand-background via-white to-brand-backgroundAlt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-brand-heading">Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              {
                question: "Which website platform is best for my business?",
                answer: "We help you choose between WordPress, Shopify, or custom HTML solutions based on your specific business goals, budget, and scalability requirements."
              },
              {
                question: "How long does a web project take?",
                answer: "Most projects range from 8-12 weeks, depending on complexity. We'll provide a clear timeline tailored to your needs."
              },
              {
                question: "Do you provide ongoing support?",
                answer: "Absolutely—we offer ongoing website maintenance, updates, and support to ensure consistent performance."
              }
            ].map((faq, index) => (
              <Collapsible key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <CollapsibleTrigger className="flex justify-between items-center w-full text-left py-4 px-6 focus:outline-none bg-white hover:bg-gray-50 transition-colors">
                  <h3 className="text-xl font-bold text-brand-heading">{faq.question}</h3>
                  <ChevronRight className="h-5 w-5 text-brand-primary transform transition-transform ui-open:rotate-90" />
                </CollapsibleTrigger>
                <CollapsibleContent className="px-6 pb-4 pt-2 bg-white animate-accordion-down">
                  <p className="text-brand-text">{faq.answer}</p>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA - Matched to homepage style */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-brand-background/30 to-brand-backgroundAlt/20 rounded-xl p-10 shadow-md text-center">
            <h2 className="text-3xl font-bold mb-4 text-brand-heading">Ready to Upgrade Your Web Presence?</h2>
            <p className="text-lg max-w-2xl mx-auto mb-8 text-brand-text">
              Discuss your web design & development project with our expert team today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group" asChild>
                <Link to="/contact" className="flex items-center">
                  Schedule Your Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="group">
                <Link to="/contact" className="flex items-center">
                  Contact Us Directly
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default WebDesign;
