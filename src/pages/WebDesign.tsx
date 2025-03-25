
import React from 'react';
import PageLayout from '@/components/PageLayout';
import WebDesignHero from '@/components/web-design/WebDesignHero';
import WebDesignBenefits from '@/components/web-design/WebDesignBenefits';
import WebDesignServices from '@/components/web-design/WebDesignServices';
import WebDesignProcess from '@/components/web-design/WebDesignProcess';
import WebDesignCaseStudies from '@/components/web-design/WebDesignCaseStudies';
import { useLanguage } from '@/contexts/LanguageContext';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const WebDesign = () => {
  const { t } = useLanguage();
  
  // Custom FAQ items for Web Design page
  const webDesignFaqs = [
    {
      question: "Was macht ein gutes Webdesign aus?",
      answer: "Gutes Webdesign verbindet Ästhetik mit Funktionalität. Es schafft eine intuitive Benutzerführung, vermittelt Ihre Markenwerte und optimiert die Conversion-Rate."
    },
    {
      question: "Wie lange dauert ein Webdesign-Projekt?",
      answer: "Ein typisches Webdesign-Projekt dauert 4-8 Wochen – abhängig vom Umfang, Ihrer Mitwirkung und den technischen Anforderungen."
    },
    {
      question: "Arbeitet ihr mit einem bestimmten CMS?",
      answer: "Wir sind spezialisiert auf WordPress, Webflow und Shopify, können aber auch mit anderen CMS arbeiten oder Headless-Lösungen entwickeln."
    },
    {
      question: "Sind eure Designs mobiloptimiert?",
      answer: "Absolut. Jedes unserer Designs ist von Grund auf responsive und für alle Bildschirmgrößen optimiert."
    }
  ];
  
  return (
    <PageLayout className="overflow-x-hidden">
      <WebDesignHero />
      <WebDesignBenefits />
      <WebDesignServices />
      <WebDesignProcess />
      <WebDesignCaseStudies />
      
      {/* FAQ and CTA Section with 50/50 layout */}
      <section className="py-24 bg-gradient-to-br from-brand-background via-white to-brand-backgroundAlt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-brand-heading">
            Frequently Asked Questions About Webdesign
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* FAQ Accordions on the left */}
            <div className="space-y-4">
              {webDesignFaqs.map((faq, index) => (
                <Collapsible key={index} className="border-b border-gray-200 pb-3">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium text-brand-heading">{faq.question}</h3>
                    <CollapsibleTrigger className="p-2">
                      <ChevronDown className="h-5 w-5 text-brand-primary" />
                    </CollapsibleTrigger>
                  </div>
                  <CollapsibleContent className="pt-2 pb-3">
                    <p className="text-brand-text">{faq.answer}</p>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
            
            {/* CTA on the right */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold mb-4 text-brand-heading">
                Premium Webdesign für Ihr Unternehmen
              </h3>
              <p className="mb-6 text-brand-text">
                Lassen Sie uns gemeinsam eine Website gestalten, die Ihre Marke stärkt und Kunden überzeugt.
              </p>
              <div className="space-y-4">
                <Button size="lg" className="w-full" asChild>
                  <Link to="/contact">
                    Unverbindliches Gespräch vereinbaren
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="w-full" asChild>
                  <Link to="/case-studies">
                    Portfolio ansehen
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Final CTA Section */}
      <CTA 
        title="Let's Talk About Your Website Project"
        subtitle="Let's build a site that's faster, smarter, and more effective than what you have today."
        primaryCta="Start Your Project"
        secondaryCta="Schedule a Strategy Call"
      />
    </PageLayout>
  );
};

export default WebDesign;
