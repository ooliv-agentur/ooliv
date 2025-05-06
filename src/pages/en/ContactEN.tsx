
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import ConsultationRequestSection from '@/components/contact/ConsultationRequestSection';
import ContactSEOTextEN from '@/components/contact/ContactSEOTextEN';

const EnglishContact = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('en');
  }, [setLanguage]);

  return (
    <PageLayout 
      className="overflow-x-hidden"
      seoText={<ContactSEOTextEN />}
    >
      <Helmet>
        <title>Contact Us | ooliv</title>
        <meta name="description" content="Get in touch with our team to discuss your project." />
      </Helmet>
      
      <div className="py-24 bg-brand-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Get in touch with our team to discuss your project and explore how we can help your business grow online.
            </p>
          </div>
        </div>
      </div>
      
      <ConsultationRequestSection />
      
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold mb-4">Visit Our Office</h2>
              <p className="mb-4">
                ooliv<br />
                Mombacher Str. 25<br />
                55122 Mainz<br />
                Germany
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Contact Information</h2>
              <p className="mb-2">
                <strong>Phone:</strong> 06131 – 63 67 801
              </p>
              <p>
                <strong>Email:</strong> info@ooliv.de
              </p>
            </div>
            
            <div className="h-80 md:h-full min-h-[400px] bg-gray-200 rounded-lg">
              {/* Map would go here */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.234646635864!2d8.234689251427292!3d50.00075697931477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd97b5db8d5acb%3A0xd8ec756762659c65!2sMombacher%20Str.%2025%2C%2055122%20Mainz%2C%20Germany!5e0!3m2!1sen!2sus!4v1659003390812!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="ooliv office location"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default EnglishContact;
