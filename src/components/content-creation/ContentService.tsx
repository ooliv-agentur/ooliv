
import React from 'react';
import { FileText, Image, LayoutList } from 'lucide-react';

const ContentService = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-brand-heading">
            More than text – content that speaks, ranks, and converts
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Text & SEO Copy */}
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
            <div className="flex flex-col items-center text-center">
              <div className="p-3 rounded-full bg-brand-backgroundAlt mb-4">
                <FileText className="h-8 w-8 text-brand-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-brand-heading">
                  Text & SEO Copy
                </h3>
                <p className="text-brand-text">
                  We write conversion-optimized copy – for your homepage, service pages, CTAs, and FAQs. All content is keyword-driven and tailored to your brand voice.
                </p>
              </div>
            </div>
          </div>
          
          {/* Images & Visuals */}
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
            <div className="flex flex-col items-center text-center">
              <div className="p-3 rounded-full bg-brand-backgroundAlt mb-4">
                <Image className="h-8 w-8 text-brand-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-brand-heading">
                  Images & Visuals
                </h3>
                <p className="text-brand-text">
                  We work with your existing photo and video assets, and supplement with custom illustrations or AI-enhanced visuals (via Midjourney) if needed.
                </p>
              </div>
            </div>
          </div>
          
          {/* Structure & Flow */}
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
            <div className="flex flex-col items-center text-center">
              <div className="p-3 rounded-full bg-brand-backgroundAlt mb-4">
                <LayoutList className="h-8 w-8 text-brand-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-brand-heading">
                  Structure & Flow
                </h3>
                <p className="text-brand-text">
                  We don't just deliver blocks of text. We define layout, content hierarchy, and the full content architecture for your website – including multilingual setup.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentService;
