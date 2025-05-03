
import React from 'react';
import { Database, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const WebDevCmsVsStatic = () => {
  return (
    <section className="py-16 bg-brand-backgroundAlt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-heading mb-4">
            Flexible or Ultra-Fast – We Develop What Fits Your Setup
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <Card className="shadow-sm border border-gray-100 h-full">
            <CardHeader className="pb-2">
              <div className="mb-2 flex justify-center md:justify-start">
                <Database className="h-8 w-8 text-brand-primary" />
              </div>
              <CardTitle className="text-xl">WordPress Website</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base text-brand-text">
                You can easily maintain content yourself. Ideal if you want to regularly update texts, news or offers - without a developer.
                <p className="mt-2">Recommended for editorial teams or marketing departments.</p>
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card className="shadow-sm border border-gray-100 h-full">
            <CardHeader className="pb-2">
              <div className="mb-2 flex justify-center md:justify-start">
                <Zap className="h-8 w-8 text-brand-primary" />
              </div>
              <CardTitle className="text-xl">Static Website (HTML/CSS/JS)</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base text-brand-text">
                Extremely fast, low-maintenance and secure. Perfect when content rarely changes and performance is the focus.
                <p className="mt-2">We'll handle changes for you.</p>
              </CardDescription>
            </CardContent>
          </Card>
        </div>
        
        <div className="bg-white p-6 rounded-lg border border-gray-100 text-center mt-6">
          <p className="text-brand-text">
            We advise you honestly and with technology-agnostic approach – ensuring your website technically matches your goals, internal workflows, and SEO requirements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WebDevCmsVsStatic;
