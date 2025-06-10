
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import LegalHero from '@/components/legal/LegalHero';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Cookie, 
  Shield, 
  BarChart3, 
  Target, 
  Settings, 
  Clock,
  Database,
  FileText
} from 'lucide-react';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';

const EnglishCookiePolicy = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('en');
  }, [setLanguage]);

  const handleOpenLeadForm = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new Event('open-lead-form'));
  };

  return (
    <PageLayout className="overflow-x-hidden">
      <Helmet>
        <title>Cookie Policy | ooliv Marketing Agency Mainz</title>
        <meta name="description" content="Cookie policy of ooliv Marketing Agency Mainz. Learn how we use cookies and protect your privacy." />
      </Helmet>

      <LegalHero
        badge="Cookie Policy"
        title="Transparency in Cookies"
        subtitle="How we use cookies, what data we collect, and how you can manage your settings. This policy explains in detail our approach to cookies and tracking technologies."
        primaryCta={{
          text: "Start Project",
          link: "#",
          onClick: handleOpenLeadForm
        }}
        secondaryCta={{
          text: "Contact Us",
          link: "/en/contact"
        }}
      />

      <section className="section-standard">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-medico-turquoise/10 rounded-full mb-4">
              <Cookie className="h-8 w-8 text-medico-turquoise" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Cookie Policy</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              At ooliv, we take your privacy seriously. This policy explains how we use cookies and protect your data.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg overflow-hidden bg-white shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center space-x-3">
                  <Cookie className="h-5 w-5 text-medico-turquoise" />
                  <span className="text-xl font-medium">What are Cookies?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2">
                <p className="text-gray-700 mb-4">
                  Cookies are small text files that are stored on your device when you visit our website. They help us store your preferences, improve website performance, and provide you with a personalized experience.
                </p>
                <p className="text-gray-700">
                  Cookies usually don't contain personal information that directly identifies you, but they allow us to provide you with a more personalized web experience.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg overflow-hidden bg-white shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-medico-turquoise" />
                  <span className="text-xl font-medium">Essential Cookies</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2">
                <p className="text-gray-700 mb-4">
                  These cookies are essential for the proper functioning of our website. They enable basic features like page navigation and access to secure areas of the website.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Session management and security</li>
                  <li>Storing your cookie preferences</li>
                  <li>Basic website functionality</li>
                  <li>Protection against spam and abuse</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  These cookies cannot be disabled as the website would not function properly without them.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg overflow-hidden bg-white shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center space-x-3">
                  <BarChart3 className="h-5 w-5 text-medico-turquoise" />
                  <span className="text-xl font-medium">Analytics Cookies</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2">
                <p className="text-gray-700 mb-4">
                  These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Google Analytics (with IP anonymization)</li>
                  <li>Visitor statistics and behavior</li>
                  <li>Popular pages and content</li>
                  <li>Website performance monitoring</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  This data helps us improve our website and provide you with better content.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg overflow-hidden bg-white shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center space-x-3">
                  <Target className="h-5 w-5 text-medico-turquoise" />
                  <span className="text-xl font-medium">Marketing Cookies</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2">
                <p className="text-gray-700 mb-4">
                  These cookies are used to make advertising more relevant to you and your interests. They are also used to limit the number of ads and measure the effectiveness of advertising campaigns.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Google Ads and conversion tracking</li>
                  <li>Social media plugins (LinkedIn, XING)</li>
                  <li>Remarketing and personalized advertising</li>
                  <li>Campaign performance measurement</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  You can disable these cookies without affecting the basic functionality of the website.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg overflow-hidden bg-white shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center space-x-3">
                  <Settings className="h-5 w-5 text-medico-turquoise" />
                  <span className="text-xl font-medium">Preference Cookies</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2">
                <p className="text-gray-700 mb-4">
                  These cookies allow the website to remember choices you make and provide enhanced, more personal features.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Language settings (German/English)</li>
                  <li>Preferred website display</li>
                  <li>Personalized content recommendations</li>
                  <li>Form data for better user experience</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border rounded-lg overflow-hidden bg-white shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-medico-turquoise" />
                  <span className="text-xl font-medium">Cookie Duration</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Session Cookies</h4>
                    <p className="text-gray-700">These are deleted when you close your browser.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Persistent Cookies</h4>
                    <p className="text-gray-700">These remain stored for a specific period:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                      <li>Cookie settings: 1 year</li>
                      <li>Analytics: 26 months</li>
                      <li>Marketing: 30 days to 2 years</li>
                      <li>Preferences: 1 year</li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border rounded-lg overflow-hidden bg-white shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center space-x-3">
                  <Database className="h-5 w-5 text-medico-turquoise" />
                  <span className="text-xl font-medium">Your Rights and Control</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2">
                <p className="text-gray-700 mb-4">
                  You always have control over your cookie settings:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Change your settings through our cookie settings</li>
                  <li>Delete cookies through your browser settings</li>
                  <li>Use your browser's "Do Not Track" mode</li>
                  <li>Opt-out through Google Analytics and Google Ads Settings</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Please note that disabling certain cookies may affect the functionality of our website.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="border rounded-lg overflow-hidden bg-white shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center space-x-3">
                  <FileText className="h-5 w-5 text-medico-turquoise" />
                  <span className="text-xl font-medium">Changes to This Policy</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2">
                <p className="text-gray-700">
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We recommend that you visit this page regularly to stay informed of any changes.
                </p>
                <p className="text-gray-700 mt-4">
                  <strong>Last updated:</strong> January 2025
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="pb-16"></div>
        </div>
      </section>
    </PageLayout>
  );
};

export default EnglishCookiePolicy;
