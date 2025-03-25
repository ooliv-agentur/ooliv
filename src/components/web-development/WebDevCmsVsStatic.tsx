
import React from 'react';
import { Database, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const WebDevCmsVsStatic = () => {
  return (
    <section className="py-16 bg-brand-backgroundAlt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-heading mb-4">
            Flexible or fast – we develop what fits your setup
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
                Easily editable via CMS. Ideal for teams that update content frequently – blog, news, or service details.
                <p className="mt-2">Recommended if you want full editorial control without developer support.</p>
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
                Ultra-fast, secure, and low-maintenance. Perfect when content rarely changes or performance is the top priority.
                <p className="mt-2">Content updates are handled by our team.</p>
              </CardDescription>
            </CardContent>
          </Card>
        </div>
        
        <div className="bg-white p-6 rounded-lg border border-gray-100 text-center mt-6">
          <p className="text-brand-text">
            We support both approaches – and help you decide what's best based on content needs, team capacity, and SEO goals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WebDevCmsVsStatic;
