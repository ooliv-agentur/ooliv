
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
    <PageLayout className="overflow-x-hidden">
      <Helmet>
        <title>Privacy Policy | ooliv</title>
        <meta name="description" content="Privacy policy and data protection information for ooliv." />
      </Helmet>
      
      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        
        <div className="mt-6 prose max-w-none">
          <h2>1. Data Protection at a Glance</h2>
          <h3>General Information</h3>
          <p>The following information provides a simple overview of what happens to your personal data when you visit our website. Personal data is any data that can be used to identify you personally. For detailed information on data protection, please refer to our privacy policy listed below.</p>
          
          <h3>Data Collection on This Website</h3>
          <p><strong>Who is responsible for data collection on this website?</strong><br />
          Data processing on this website is carried out by the website operator. You can find the contact details of the website operator in the "Information About the Responsible Party" section of this privacy policy.</p>
          
          <p><strong>How do we collect your data?</strong><br />
          Your data is collected when you provide it to us. This could be data that you enter in a contact form, for example.<br />
          Other data is collected automatically by our IT systems when you visit the website. This is primarily technical data (e.g., web browser, operating system, or time of page view). This data is collected automatically as soon as you enter our website.</p>
          
          <p><strong>What do we use your data for?</strong><br />
          Some of the data is collected to ensure error-free provision of the website. Other data may be used to analyze your user behavior.</p>
          
          <p><strong>What rights do you have regarding your data?</strong><br />
          You have the right to receive information about the origin, recipient, and purpose of your stored personal data free of charge at any time. You also have the right to request the correction, blocking, or deletion of this data. You can contact us at any time at the address given in the legal notice if you have any further questions on the subject of data protection. Furthermore, you have the right to lodge a complaint with the competent supervisory authority.</p>
          
          <h2>2. General Information and Mandatory Information</h2>
          <h3>Data Protection</h3>
          <p>The operators of these pages take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with the statutory data protection regulations and this privacy policy.</p>
          <p>When you use this website, various personal data is collected. Personal data is data that can be used to identify you personally. This privacy policy explains what data we collect and what we use it for. It also explains how and for what purpose this happens.</p>
          <p>We point out that data transmission over the Internet (e.g., when communicating by email) may have security gaps. Complete protection of data against access by third parties is not possible.</p>
          
          <h3>Note on the Responsible Party</h3>
          <p>The responsible party for data processing on this website is:</p>
          <p>
          ooliv<br />
          Mombacher Str. 25<br />
          55122 Mainz<br />
          Germany
          </p>
          <p>
          Phone: 06131 – 63 67 801<br />
          Email: info@ooliv.de
          </p>
          <p>The responsible party is the natural or legal person who alone or jointly with others determines the purposes and means of the processing of personal data (e.g., names, email addresses, etc.).</p>
        </div>
      </div>
    </PageLayout>
  );
};

export default EnglishPrivacyPolicy;
