
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';

const WebDevelopment = () => {
  const { t } = useLanguage();
  
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="text-center mb-16 pt-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Web Development Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Powerful, scalable, and reliable solutions for your digital presence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-6">Expert Web Development Solutions</h2>
            <p className="text-lg mb-6">
              We build robust, scalable websites and web applications that deliver exceptional user experiences
              and meet your business objectives using the latest technologies and best practices.
            </p>
          </div>
          <div className="bg-gray-100 rounded-lg p-8 h-[400px] flex items-center justify-center order-1 md:order-2">
            <p className="text-gray-500">Web Development Image</p>
          </div>
        </div>
      </div>
      <FAQ />
      <CTA />
    </PageLayout>
  );
};

export default WebDevelopment;
