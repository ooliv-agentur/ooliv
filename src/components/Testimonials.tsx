
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Testimonials = () => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      client: "Scheurich",
      industry: "Ceramic & Lifestyle Brand",
      result: "120% increase in organic traffic after full website optimization.",
      quote: "Thanks to ooliv, our website is now a growth engine. The process was seamless, and the results speak for themselves.",
      image: "/placeholder.svg",
      stars: 5
    },
    {
      client: "COBUS",
      industry: "ERP & IT Solutions",
      result: "Lead generation improved by 80% with a new website & conversion strategy.",
      quote: "Professional, strategic, and results-driven. They understood exactly what our business needed.",
      image: "/placeholder.svg",
      stars: 5
    },
    {
      client: "Weisenburger",
      industry: "Construction & Real Estate",
      result: "Seamless CRM integration & scalable web infrastructure.",
      quote: "A game-changer for our online presence. More leads, better conversions, and seamless collaboration.",
      image: "/placeholder.svg",
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
    <section id="cases" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {t('testimonials.title')} 
            <span className="text-blue-600"> {t('testimonials.subtitle')}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We don't just build websites—we create digital success stories. See how we've helped companies like yours achieve measurable growth, better engagement, and increased conversions.
          </p>
        </div>

        <div className="relative">
          {/* Desktop Navigation Controls */}
          <div className="hidden md:block">
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 -ml-5 bg-white"
              aria-label="Previous testimonial"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 -mr-5 bg-white"
              aria-label="Next testimonial"
              onClick={nextSlide}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Testimonials Carousel */}
          <div className="grid md:grid-cols-3 gap-6 overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col ${
                  index === activeIndex ? 'md:scale-105 z-10' : 'md:scale-100'
                }`}
              >
                <div className="mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={`${testimonial.client} project`} 
                    className="w-full h-32 object-cover rounded-md mb-4 bg-gray-100"
                  />
                </div>
                
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">{testimonial.client.charAt(0)}</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-lg">{testimonial.client}</h3>
                    <p className="text-sm text-gray-600">{testimonial.industry}</p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                
                <div className="bg-white rounded p-4 mb-4 flex-grow">
                  <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                </div>
                
                <div className="mt-auto">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <ChevronRight className="h-4 w-4 text-green-600" />
                    </div>
                    <p className="ml-2 text-sm font-medium text-green-700">{testimonial.result}</p>
                  </div>
                </div>
                
                <Button 
                  variant="link" 
                  className="mt-4 text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors justify-start p-0"
                >
                  Read Full Case Study <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            ))}
          </div>
          
          {/* Mobile Indicators */}
          <div className="flex justify-center mt-6 md:hidden">
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button 
                  key={index} 
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
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
