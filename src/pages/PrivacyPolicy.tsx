import React, { useRef } from 'react';
import PageLayout from '@/components/PageLayout';
import LegalHero from '@/components/legal/LegalHero';
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
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  const policyRef = useRef<HTMLDivElement>(null);
  
  const scrollToPolicy = () => {
    if (policyRef.current) {
      policyRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <PageLayout className="overflow-x-hidden">
      <LegalHero
        title="Your Data, Your Rights"
        subtitle="How we handle, store, and protect your personal information. This privacy policy explains what data we collect, how we use it, and how you can exercise your rights under the GDPR."
        primaryCta={{
          text: "",
          link: ""
        }}
        secondaryCta={{
          text: "",
          link: ""
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
              At ooliv, we take your privacy seriously. This policy details how we collect, use, and protect your information.
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
                  We store anonymized log data (IP address, access time, browser info) for security and system stability. This data helps us identify and resolve technical issues, optimize our website, and protect against unauthorized access. No personal data is shared with third parties without your explicit consent, except where required by law.
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
                  We use cookies for functional performance and analytics. These small text files help us understand how visitors use our site, remember your preferences, and provide a better browsing experience. You can opt out via browser settings at any time by disabling cookies, though this may affect some website functionality.
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
                  Data submitted via contact forms is stored securely and used only to respond to your inquiry. When you contact us through our website forms, we collect the information you provide (such as name, email, and message content) to answer your questions and follow up if needed. This information is stored on secure servers and is never sold or shared with unaffiliated third parties.
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
                  Under the General Data Protection Regulation (GDPR), you have several rights regarding your personal data:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-brand-text">
                  <li>Right to access your personal data</li>
                  <li>Right to request correction of inaccurate data</li>
                  <li>Right to request deletion of your data</li>
                  <li>Right to data portability (receiving your data in a structured format)</li>
                  <li>Right to object to processing of your data</li>
                  <li>Right to file a complaint with your local supervisory authority</li>
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
                  We use Google Ads and Google Analytics to understand our website traffic and optimize our marketing efforts. IP anonymization is active to protect your privacy. Data may be processed in the USA under Google's privacy policies. You may opt out via <a href="https://www.google.de/settings/ads" className="text-brand-primary hover:underline">Google Settings</a> or by using browser extensions like Google Analytics Opt-out.
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
                  Our website may contain links to external sites that are not operated by us. We are not responsible for the content or privacy practices of these third-party sites. We encourage you to review the privacy policies of any external sites you visit through links on our website.
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
                  We implement strong security protocols but cannot guarantee 100% protection against all threats. Our website uses SSL encryption to protect data transmission, and we regularly update our systems to maintain security. However, no method of electronic storage or transmission is completely secure. We advise against sending highly sensitive data via email or standard contact forms.
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
                  This policy may change as legal or technical conditions evolve. We will post any revisions on this page, with an updated effective date. For significant changes, we may also provide more prominent notice. Please review this policy periodically to stay informed about how we protect your information.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="flex justify-center mt-12">
            <Button asChild variant="outline" className="mr-4">
              <Link to="/legal-notice">View Legal Notice</Link>
            </Button>
            <Button asChild>
              <Link to="/contact">Contact Our Data Officer</Link>
            </Button>
          </div>

          <div className="mt-32"></div>
        </div>
      </section>
    </PageLayout>
  );
};

export default PrivacyPolicy;
