
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Testimonials = () => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      client: "Scheurich",
      industry: "Ceramic & Lifestyle Brand",
      title: "120% mehr organischen Traffic durch komplette Website-Optimierung",
      logo: "/placeholder.svg",
      quote: "Thanks to ooliv, our website is now a growth engine. The process was seamless, and the results speak for themselves.",
      impact: [
        "120% more organic traffic after full website optimization",
        "45% higher conversion rate with improved user experience",
        "2x lead generation through strategic conversion points"
      ],
      deviceImage: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb",
      headerImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      author: {
        name: "Michael Schmidt",
        position: "Marketing Director, Scheurich"
      }
    },
    {
      client: "COBUS",
      industry: "ERP & IT Solutions",
      title: "Lead generation improved by 80% with a new website & conversion strategy",
      logo: "/placeholder.svg",
      quote: "Professional, strategic, and results-driven. They understood exactly what our business needed.",
      impact: [
        "80% more leads through targeted conversion strategy",
        "3x website traffic with improved visibility and content",
        "40% lower bounce rate with enhanced user experience"
      ],
      deviceImage: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f",
      headerImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      author: {
        name: "Thomas Weber",
        position: "CEO, COBUS"
      }
    },
    {
      client: "Weisenburger",
      industry: "Construction & Real Estate",
      title: "Seamless CRM integration & scalable web infrastructure",
      logo: "/placeholder.svg",
      quote: "A game-changer for our online presence. More leads, better conversions, and seamless collaboration.",
      impact: [
        "95% faster load time with optimized architecture",
        "60% more inquiries through improved user journey",
        "4.9/5 user satisfaction with new digital experience"
      ],
      deviceImage: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6",
      headerImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      author: {
        name: "Julia Müller",
        position: "Digital Manager, Weisenburger"
      }
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[activeIndex];

  return (
    <section id="cases" className="py-20 bg-gradient-to-br from-brand-background to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-6 font-sans">
            {t('testimonials.title')} 
            <span className="text-brand-primary"> {t('testimonials.subtitle')}</span>
          </h2>
          <p className="text-xl text-brand-text max-w-3xl mx-auto mb-8 font-sans">
            Real results from real clients. See how we've helped businesses like yours achieve measurable growth through strategic web design and development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Dark Background with Content */}
          <div className="bg-brand-footer rounded-xl p-8 text-white shadow-xl">
            <div className="mb-6">
              <img 
                src={currentTestimonial.logo} 
                alt={`${currentTestimonial.client} logo`} 
                className="h-10 bg-white p-2 rounded"
              />
            </div>
            
            <h3 className="text-2xl font-bold mb-4">
              {currentTestimonial.title}
            </h3>
            
            <div className="space-y-6 mt-8">
              {currentTestimonial.impact.map((point, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Check className="text-brand-primary h-5 w-5" />
                  </div>
                  <p className="text-white/90">{point}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 border-t border-white/10 pt-6">
              <blockquote className="italic text-white/80 mb-4">
                "{currentTestimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center text-white font-bold">
                    {currentTestimonial.author.name.charAt(0)}
                  </div>
                </div>
                <div>
                  <p className="font-medium">{currentTestimonial.author.name}</p>
                  <p className="text-sm text-white/70">{currentTestimonial.author.position}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Device Images */}
          <div className="relative">
            <div className="relative h-full flex items-center justify-center">
              {/* Mobile Device */}
              <div className="absolute z-10 -left-6 bottom-10 md:bottom-20 w-40 md:w-64 transform rotate-6">
                <div className="rounded-3xl overflow-hidden border-8 border-black shadow-2xl">
                  <img 
                    src={currentTestimonial.deviceImage} 
                    alt="Mobile view" 
                    className="w-full"
                  />
                </div>
              </div>
              
              {/* Tablet/Desktop Device */}
              <div className="absolute top-10 right-0 w-56 md:w-80 shadow-2xl rounded-lg transform -rotate-3">
                <img 
                  src={currentTestimonial.headerImage} 
                  alt="Desktop view" 
                  className="w-full rounded-lg"
                />
              </div>
              
              {/* Background Elements */}
              <div className="absolute inset-0 z-0 opacity-10">
                <div className="absolute top-10 right-20 w-20 h-20 rounded-full bg-brand-primary"></div>
                <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-brand-primaryHover"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Navigation Controls */}
        <div className="flex justify-between mt-10">
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button 
                key={index} 
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-brand-primary' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          <Button 
            variant="outline" 
            className="group hover:bg-brand-primary hover:text-white"
            asChild
          >
            <Link to="/case-studies">
              View All Case Studies
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
