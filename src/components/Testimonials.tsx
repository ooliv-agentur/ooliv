
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, ArrowRight, MousePointer2, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Testimonials = () => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      client: "Scheurich",
      industry: "Ceramic & Lifestyle Brand",
      result: "120% increase in organic traffic after full website optimization",
      quote: "Thanks to ooliv, our website is now a growth engine. The process was seamless, and the results speak for themselves.",
      impact: ["120% more organic traffic", "45% higher conversion rate", "2x lead generation"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      logo: "/placeholder.svg",
      stars: 5
    },
    {
      client: "COBUS",
      industry: "ERP & IT Solutions",
      result: "Lead generation improved by 80% with a new website & conversion strategy",
      quote: "Professional, strategic, and results-driven. They understood exactly what our business needed.",
      impact: ["80% more leads", "3x website traffic", "40% lower bounce rate"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      logo: "/placeholder.svg",
      stars: 5
    },
    {
      client: "Weisenburger",
      industry: "Construction & Real Estate",
      result: "Seamless CRM integration & scalable web infrastructure",
      quote: "A game-changer for our online presence. More leads, better conversions, and seamless collaboration.",
      impact: ["95% faster load time", "60% more inquiries", "4.9/5 user satisfaction"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      logo: "/placeholder.svg",
      stars: 5
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="cases" className="py-20 bg-gradient-to-br from-brand-background to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-6">
            {t('testimonials.title')} 
            <span className="text-brand-primary"> {t('testimonials.subtitle')}</span>
          </h2>
          <p className="text-xl text-brand-text max-w-3xl mx-auto mb-8">
            Real results from real clients. See how we've helped businesses like yours achieve measurable growth through strategic web design and development.
          </p>
        </div>

        <div className="relative">
          {/* Desktop Navigation Controls */}
          <div className="hidden md:block">
            <Button
              variant="outline"
              size="icon"
              className="absolute -left-12 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm hover:bg-white"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              className="absolute -right-12 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm hover:bg-white"
              onClick={nextSlide}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Testimonials Carousel */}
          <div 
            className="grid md:grid-cols-3 gap-6 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`bg-white rounded-xl shadow-lg transition-all duration-500 hover:shadow-xl group ${
                  index === activeIndex ? 'md:scale-105 z-10' : 'md:scale-100'
                }`}
              >
                <div className="relative h-48 rounded-t-xl overflow-hidden">
                  <img 
                    src={testimonial.image} 
                    alt={`${testimonial.client} project`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <img 
                    src={testimonial.logo} 
                    alt={`${testimonial.client} logo`} 
                    className="absolute bottom-4 left-4 h-8 w-auto"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-bold text-lg">{testimonial.client}</h3>
                      <p className="text-sm text-brand-text">{testimonial.industry}</p>
                    </div>
                    <div className="flex">
                      {[...Array(testimonial.stars)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                  
                  <blockquote className="text-brand-text italic mb-6">"{testimonial.quote}"</blockquote>
                  
                  <div className="space-y-2 mb-6">
                    {testimonial.impact.map((item, i) => (
                      <div key={i} className="flex items-center text-sm text-green-700">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        {item}
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    variant="link" 
                    className="text-brand-primary p-0 hover:text-brand-primaryHover transition-colors group/btn"
                  >
                    Read Full Case Study 
                    <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Mobile Navigation */}
          <div className="flex justify-center mt-6 md:hidden gap-2">
            {testimonials.map((_, index) => (
              <button 
                key={index} 
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-brand-primary' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12 space-x-4">
          <Button variant="outline" className="group">
            Read More Success Stories
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button variant="outline" className="group">
            Read All Google Reviews
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
