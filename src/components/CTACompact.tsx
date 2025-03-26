
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

const CTACompact = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';
  
  const contactPath = isGerman ? "/de/kontakt" : "/contact";
  
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between">
          <div className="max-w-md">
            <h2 className="text-2xl md:text-4xl font-bold text-black leading-tight">
              {isGerman ? (
                <>
                  Lassen Sie uns<br />
                  etwas schaffen, das<br />
                  wirklich funktioniert.
                </>
              ) : (
                <>
                  Let's build<br />
                  something that<br />
                  actually works.
                </>
              )}
            </h2>
          </div>
          
          {/* Horizontal blue line for desktop */}
          <div className="hidden md:block flex-grow mx-10 border-t border-[#3C5AFE] self-end mb-3"></div>
          
          <div className="mt-8 md:mt-0">
            <Link 
              to={contactPath}
              className="inline-flex items-center border border-[#3C5AFE] text-[#3C5AFE] px-6 py-3 rounded-md hover:bg-[#f2f5ff] transition-colors"
            >
              {isGerman ? "Sprechen Sie mit uns" : "Talk to us"} 
              <span className="ml-2 text-[#3C5AFE]">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTACompact;
