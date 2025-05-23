
import React, { useEffect, useRef } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import LegalHero from '@/components/legal/LegalHero';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Lock, 
  Database, 
  Cookie, 
  FileText, 
  Shield, 
  Globe, 
  RefreshCw,
  UserCheck
} from 'lucide-react';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';

const EnglishPrivacyPolicy = () => {
  const policyRef = useRef<HTMLDivElement>(null);
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('en');
  }, [setLanguage]);
  
  const scrollToPolicy = () => {
    if (policyRef.current) {
      policyRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenLeadForm = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new Event('open-lead-form'));
  };

  return (
    <PageLayout className="overflow-x-hidden">
      <Helmet>
        <title>Privacy Policy | ooliv Marketing Agency Mainz</title>
        <meta name="description" content="Privacy policy of ooliv Marketing Agency Mainz according to GDPR. Learn how we handle your data." />
      </Helmet>

      <LegalHero
        badge="Privacy Policy"
        title="Your Data, Your Rights"
        subtitle="How we handle your personal information, store it, and protect it. This privacy policy explains what data we collect, how we use it, and how you can exercise your rights under the GDPR."
        primaryCta={{
          text: "Start Project",
          link: "#",
          onClick: handleOpenLeadForm
        }}
        secondaryCta={{
          text: "Schedule Strategy Call",
          link: "/en/contact"
        }}
      />

      <section className="section-standard" ref={policyRef} id="policy">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-brand-primary/10 rounded-full mb-4">
              <Lock className="h-8 w-8 text-brand-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Privacy Policy</h2>
            <p className="text-lg text-brand-text/80 max-w-2xl mx-auto">
              At ooliv, we take your privacy seriously. This policy explains how we collect, use, and protect your information.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg overflow-hidden bg-white shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center space-x-3">
                  <Database className="h-5 w-5 text-brand-primary" />
                  <span className="text-xl font-medium">General Data Collection</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2">
                <p className="text-brand-text">
                  We store anonymized log data (IP address, access time, browser information) for security and system stability. This data helps us identify and resolve technical issues, optimize our website, and protect against unauthorized access. No personal data will be shared with third parties without your explicit consent, unless required by law.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg overflow-hidden bg-white shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center space-x-3">
                  <Cookie className="h-5 w-5 text-brand-primary" />
                  <span className="text-xl font-medium">Cookies</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2">
                <p className="text-brand-text">
                  We use cookies for functional performance and analytics. These small text files help us understand how visitors use our website, store your preferences, and provide a better browsing experience. You can disable cookies at any time through your browser settings, although this may affect some website functions.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg overflow-hidden bg-white shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center space-x-3">
                  <FileText className="h-5 w-5 text-brand-primary" />
                  <span className="text-xl font-medium">Contact Forms</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2">
                <p className="text-brand-text">
                  Data submitted through contact forms is securely stored and only used to respond to your inquiry. When you contact us through our website forms, we collect the information you provide (such as name, email, and message content) to answer your questions and follow up if needed. This information is stored on secure servers and never sold or shared with unaffiliated third parties.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg overflow-hidden bg-white shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center space-x-3">
                  <UserCheck className="h-5 w-5 text-brand-primary" />
                  <span className="text-xl font-medium">Your Rights Under GDPR</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2">
                <p className="text-brand-text mb-4">
                  Under the General Data Protection Regulation (GDPR), you have various rights regarding your personal data:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-brand-text">
                  <li>Right to access your personal data</li>
                  <li>Right to rectification of inaccurate data</li>
                  <li>Right to erasure of your data</li>
                  <li>Right to data portability (receiving your data in a structured format)</li>
                  <li>Right to object to the processing of your data</li>
                  <li>Right to lodge a complaint with your local supervisory authority</li>
                </ul>
                <p className="text-brand-text mt-4">
                  To exercise any of these rights, please contact us at info@ooliv.de.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg overflow-hidden bg-white shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center space-x-3">
                  <Globe className="h-5 w-5 text-brand-primary" />
                  <span className="text-xl font-medium">Google Services</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2">
                <p className="text-brand-text">
                  We use Google Ads and Google Analytics to understand our website traffic and optimize our marketing efforts. IP anonymization is active to protect your privacy. Data may be processed in the USA according to Google's privacy policies. You can opt out through <a href="https://www.google.de/settings/ads" className="text-brand-primary hover:underline">Google settings</a> or by using browser extensions like Google Analytics Opt-out.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border rounded-lg overflow-hidden bg-white shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center space-x-3">
                  <Globe className="h-5 w-5 text-brand-primary" />
                  <span className="text-xl font-medium">External Links</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2">
                <p className="text-brand-text">
                  Our website may contain links to external pages not operated by us. We are not responsible for the content or privacy practices of these third-party websites. We recommend that you review the privacy policies of all external websites you visit through links on our website.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border rounded-lg overflow-hidden bg-white shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-brand-primary" />
                  <span className="text-xl font-medium">Data Security</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2">
                <p className="text-brand-text">
                  We implement strong security protocols, but cannot guarantee 100% protection against all threats. Our website uses SSL encryption to protect data transfer, and we regularly update our systems to maintain security. However, no method of electronic storage or transmission is completely secure. We advise against sending highly sensitive data via email or through standard contact forms.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="border rounded-lg overflow-hidden bg-white shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center space-x-3">
                  <RefreshCw className="h-5 w-5 text-brand-primary" />
                  <span className="text-xl font-medium">Policy Updates</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2">
                <p className="text-brand-text">
                  This policy may change as legal or technical conditions evolve. We will post any revisions on this page with an updated effective date. For significant changes, we may also provide a more prominent notice. Please check this policy regularly to stay informed about how your information is protected.
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

export default EnglishPrivacyPolicy;
