
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CaseStudies = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="text-center mb-16 pt-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Case Studies</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explore how we've helped businesses achieve remarkable results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">Web Design • SEO</div>
                <h3 className="text-xl font-bold mb-2">Case Study {item}: Client Name</h3>
                <p className="mb-4">
                  A brief overview of the project and the challenges faced by the client.
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="block font-bold text-brand-primary">+127%</span>
                    <span className="text-sm text-gray-500">Conversion Rate</span>
                  </div>
                  <Button variant="ghost" className="p-0 h-auto">
                    View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg">Load More Case Studies</Button>
        </div>

        <div className="mt-24 bg-brand-backgroundAlt rounded-lg p-10 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Become Our Next Success Story?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Let's discuss how we can help your business achieve similar results
          </p>
          <Button size="lg">Contact Us Today</Button>
        </div>
      </div>
    </PageLayout>
  );
};

export default CaseStudies;
