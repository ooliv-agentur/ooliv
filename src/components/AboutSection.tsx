
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

interface AboutSectionProps {
  title?: string;
  description?: string;
  values?: string[];
}

const AboutSection = ({ title, description, values }: AboutSectionProps = {}) => {
  const { language } = useLanguage();
  
  // Basecamp text based on language
  const basecampText = language === 'de' 
    ? "Wir arbeiten mit Basecamp – für klare Aufgaben, smarte Kommunikation und vollständige Transparenz im Projektverlauf."
    : "We use Basecamp to manage tasks, communication, and feedback — with full transparency and efficiency.";
  
  return (
    <section className="py-24 bg-gradient-to-br from-brand-background to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1573164574472-797cdf4a583a?auto=format&fit=crop&q=80&w=800" 
                alt="ooliv Web Design Agency Team" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                <p className="text-sm font-medium text-brand-heading">
                  <span className="text-brand-primary font-bold">16+ years</span> crafting websites that deliver real business growth
                </p>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-6 text-brand-heading">
              {title || "We Build Websites That Actually Work for Your Business"}
            </h2>
            
            <p className="text-lg mb-6 text-brand-text">
              {description || "At ooliv, we don't just design pretty websites—we create strategic digital platforms with a clear focus on conversion, SEO, and the metrics that matter to your business."}
            </p>
            
            <div className="space-y-4 mb-8">
              {values ? (
                values.map((value, index) => (
                  <div key={index} className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-brand-primary/20 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                      <span className="text-brand-primary font-bold text-sm">{index + 1}</span>
                    </div>
                    <p className="text-brand-text">{value}</p>
                  </div>
                ))
              ) : (
                <>
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-brand-primary/20 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                      <span className="text-brand-primary font-bold text-sm">1</span>
                    </div>
                    <p className="text-brand-text">
                      We blend strategic thinking with technical expertise to create websites that attract your ideal customers and turn them into leads or customers.
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-brand-primary/20 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                      <span className="text-brand-primary font-bold text-sm">2</span>
                    </div>
                    <p className="text-brand-text">
                      Our approach integrates <Link to="/seo-optimization" className="text-brand-primary hover:underline">SEO</Link>, user experience, and content strategy—all focused on delivering measurable business outcomes.
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-brand-primary/20 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                      <span className="text-brand-primary font-bold text-sm">3</span>
                    </div>
                    <p className="text-brand-text">
                      From strategy to launch, you'll work directly with our CEO and a focused team of specialists—with no unnecessary layers of management.
                    </p>
                  </div>
                </>
              )}
            </div>
            
            <div className="p-4 bg-brand-background/50 rounded-lg mb-8">
              <p className="text-brand-text italic">{basecampText}</p>
            </div>
            
            <div className="flex space-x-4">
              <Link 
                to="/case-studies" 
                className="text-brand-primary font-medium hover:underline inline-flex items-center"
              >
                See how we work <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
