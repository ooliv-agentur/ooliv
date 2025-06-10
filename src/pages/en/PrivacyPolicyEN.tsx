
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';

const EnglishPrivacyPolicy = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('en');
  }, [setLanguage]);

  return (
    <PageLayout>
      <Helmet>
        <title>Privacy Policy | ooliv Marketing Agency Mainz</title>
        <meta name="description" content="Privacy policy of ooliv Marketing Agency Mainz. Information on data protection and privacy according to GDPR." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-brand-heading mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <h2>1. Data Protection at a Glance</h2>
            <h3>General Information</h3>
            <p>
              The following information provides a simple overview of what happens to your personal data when you visit this website. Personal data is any data that can personally identify you.
            </p>
            
            <h3>Data Collection on this Website</h3>
            <p>
              <strong>Who is responsible for data collection on this website?</strong><br />
              Data processing on this website is carried out by the website operator. You can find their contact details in the "Responsible Party" section of this privacy policy.
            </p>
            
            <h2>2. Hosting</h2>
            <p>
              We host the content of our website with the following provider:
            </p>
            
            <h3>External Hosting</h3>
            <p>
              This website is hosted externally. The personal data collected on this website is stored on the servers of the hosting provider(s). This may include IP addresses, contact requests, meta and communication data, contract data, contact details, names, website accesses, and other data generated through a website.
            </p>
            
            <h2>3. General Information and Mandatory Information</h2>
            <h3>Data Protection</h3>
            <p>
              The operators of these pages take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with statutory data protection regulations and this privacy policy.
            </p>
            
            <h3>Responsible Party</h3>
            <p>
              The responsible party for data processing on this website is:<br /><br />
              ooliv GmbH<br />
              Uli Schönleber<br />
              Rheinstraße 4K<br />
              55116 Mainz<br />
              Germany<br /><br />
              Phone: +49 (0) 6131 63 67 801<br />
              Email: info@ooliv.de
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default EnglishPrivacyPolicy;
