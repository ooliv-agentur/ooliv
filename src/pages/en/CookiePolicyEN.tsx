
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';

const CookiePolicyEN = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('en');
  }, [setLanguage]);

  return (
    <PageLayout>
      <Helmet>
        <title>Cookie Policy | ooliv Marketing Agency Mainz</title>
        <meta name="description" content="Cookie policy of ooliv Marketing Agency Mainz. Information about the use of cookies on our website." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-brand-heading mb-8">Cookie Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <h2>What are Cookies?</h2>
            <p>
              Cookies are small text files that are stored on your computer or mobile device when you visit a website. They enable the website to remember your actions and preferences (such as login, language, font size and other display preferences) over a period of time, so you don't have to keep re-entering them whenever you come back to the site or browse from one page to another.
            </p>
            
            <h2>How We Use Cookies</h2>
            <p>
              We use cookies on our website to:
            </p>
            <ul>
              <li>Ensure the website functions properly</li>
              <li>Remember your preferences and settings</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Improve user experience</li>
            </ul>
            
            <h2>Types of Cookies We Use</h2>
            
            <h3>Essential Cookies</h3>
            <p>
              These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms.
            </p>
            
            <h3>Analytics Cookies</h3>
            <p>
              These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.
            </p>
            
            <h2>Managing Cookies</h2>
            <p>
              You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.
            </p>
            
            <h2>Contact</h2>
            <p>
              If you have any questions about our use of cookies, please contact us at:<br />
              Email: info@ooliv.de<br />
              Phone: +49 (0) 6131 63 67 801
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CookiePolicyEN;
