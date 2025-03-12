import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Testimonials = () => {
  const { t } = useLanguage();
  
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
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
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
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
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
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      author: {
        name: "Julia Müller",
        position: "Digital Manager, Weisenburger"
      }
    },
    {
      client: "PopBird",
      industry: "E-Commerce & Retail",
      title: "35% Umsatzsteigerung in 6 Monaten durch emotionales Storytelling",
      logo: "/placeholder.svg",
      quote: "Working with ooliv completely transformed our online presence. Our customers now have a seamless experience from discovery to purchase.",
      impact: [
        "35% sales growth through emotional storytelling approach",
        "42% increase in average order value with improved UX",
        "60% higher customer retention with personalized email workflows"
      ],
      image: "https://images.unsplash.com/photo-1556155092-490a1ba16284",
      author: {
        name: "Sarah Johnson",
        position: "Marketing Lead, PopBird"
      }
    },
    {
      client: "GreenTech",
      industry: "Renewable Energy",
      title: "200+ qualified leads per month with targeted SEO & content strategy",
      logo: "/placeholder.svg",
      quote: "The results exceeded our expectations. Our web presence now truly reflects our brand values and converts visitors efficiently.",
      impact: [
        "200+ qualified leads per month with targeted strategy",
        "First page Google rankings for 30+ industry keywords",
        "68% reduction in cost per acquisition through organic channels"
      ],
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea",
      author: {
        name: "Daniel Krause",
        position: "Growth Director, GreenTech"
      }
    }
  ];

  return (
    <section id="cases" className="py-20 bg-gradient-to-br from-brand-background to-white overflow-hidden">
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

        <div className="space-y-20">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-10 items-center`}
            >
              {/* Text content */}
              <div className="w-full md:w-1/2">
                <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="mr-4">
                      <img 
                        src={testimonial.logo} 
                        alt={`${testimonial.client} logo`} 
                        className="h-10 w-auto"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-brand-heading">{testimonial.client}</h3>
                      <p className="text-sm text-gray-500">{testimonial.industry}</p>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-medium mb-6">
                    {testimonial.title}
                  </h4>
                  
                  <div className="space-y-3 mb-6">
                    {testimonial.impact.map((point, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="mr-3 mt-1 text-brand-primary">
                          <Check className="h-5 w-5" />
                        </div>
                        <p className="text-sm text-gray-600">{point}</p>
                      </div>
                    ))}
                  </div>
                  
                  <blockquote className="italic text-gray-600 text-sm border-l-4 border-brand-primary pl-4 my-6">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="flex items-center mt-6 pt-4 border-t border-gray-100">
                    <div className="mr-3">
                      <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center text-white font-bold text-xs">
                        {testimonial.author.name.charAt(0)}{testimonial.author.name.split(' ')[1]?.charAt(0)}
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-sm">{testimonial.author.name}</p>
                      <p className="text-xs text-gray-500">{testimonial.author.position}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Image */}
              <div className="w-full md:w-1/2">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src={testimonial.image} 
                    alt={`${testimonial.client} case study`} 
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Testimonials;
