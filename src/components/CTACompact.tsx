
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
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="max-w-md">
            <h2 className="text-2xl md:text-4xl font-bold text-black leading-tight">
              {isGerman ? (
                <>
                  Wir sollten<br />
                  gemeinsam etwas<br />
                  bauen, das wirkt.
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
