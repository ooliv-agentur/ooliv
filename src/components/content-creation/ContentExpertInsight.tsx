
import React from 'react';
import { Bot, Image, Video, CheckCircle } from 'lucide-react';

const ContentExpertInsight = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-brand-background via-white to-brand-backgroundAlt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-brand-heading text-center md:text-left">
            We Don't Just Use AI — We Train It.
          </h2>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <p className="text-lg mb-6 text-brand-text">
              At ooliv, we build custom GPTs for each client — tailored to your business, your tone, and your market. 
              We teach our tools through deep research and active guidance, so every output reflects your voice.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="flex items-start gap-3">
                <Bot className="h-6 w-6 text-brand-primary mt-1" />
                <div>
                  <h3 className="font-bold mb-1 text-brand-heading">ChatGPT</h3>
                  <p className="text-sm text-brand-text">For intelligent, brand-aligned text</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Image className="h-6 w-6 text-brand-primary mt-1" />
                <div>
                  <h3 className="font-bold mb-1 text-brand-heading">Midjourney</h3>
                  <p className="text-sm text-brand-text">For brand-aligned images</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Video className="h-6 w-6 text-brand-primary mt-1" />
                <div>
                  <h3 className="font-bold mb-1 text-brand-heading">Sora</h3>
                  <p className="text-sm text-brand-text">For dynamic video</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-brand-primary mt-1" />
              <p className="text-brand-text">
                <strong>And all content is refined, reviewed, and finalized by our team.</strong> Nothing is blindly copied. Every word and pixel has intent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentExpertInsight;
