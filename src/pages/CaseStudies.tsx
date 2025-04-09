import React from 'react';
import PageLayout from '@/components/PageLayout';
import PageHero from '@/components/PageHero';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const partnerLogos = [
  { id: 'scheurich', name: 'Scheurich' },
  { id: 'cobus', name: 'COBUS' },
  { id: 'weisenburger', name: 'Weisenburger' },
  { id: 'popbird', name: 'PopBird' },
  { id: 'greentech', name: 'GreenTech' }
];

const successPillars = [
  {
    title: "Strategy-First Process",
    description: "Every website begins with clear goals, structure, and KPIs."
  },
  {
    title: "Custom Design & Content",
    description: "No templates. We build everything tailored to each brand and audience."
  },
  {
    title: "Clean Development & SEO",
    description: "Fast, scalable, and always optimized for performance and visibility."
  }
];

const faqItems = [
  {
    question: "What types of businesses does ooliv work with?",
    answer: "Primarily B2B companies – from software to manufacturing, professional services, and education. We understand both regional and international business needs."
  },
  {
    question: "Can I see more details on a specific project?",
    answer: "Absolutely. Each case study page includes results, process insights, and screenshots. We meticulously document our projects."
  },
  {
    question: "Are these results typical?",
    answer: "Each project is different, but strong results are the outcome of clear strategy and implementation. Our expertise has proven effective across many different industries."
  },
  {
    question: "Can I contact references?",
    answer: "Yes. Upon request, we can connect you with past clients for feedback. Our work speaks for itself, and we're proud of the long-term relationships we build with our clients."
  }
];

const CaseStudies = () => {
  const { language } = useLanguage();

  const handleOpenLeadForm = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  return (
    <PageLayout>
      <PageHero
        badge="Real Results. Real Clients."
        title="Marketing Success Stories from Around the World"
        subtitle="See how we help B2B companies grow with intelligent strategy, strong design, and measurable results. These case studies showcase what's possible with ooliv."
        primaryCta={{
          text: "Start a Project",
          link: "/contact"
        }}
        secondaryCta={{
          text: "Book a Call",
          link: "/contact"
        }}
      />
      
      <div className="section-container">
        <div className="py-12 border-t border-b border-gray-200">
          <div className="text-center mb-8">
            <div className="flex justify-center flex-wrap gap-12 mb-8">
              {partnerLogos.map((logo) => (
                <div key={logo.id} className="grayscale hover:grayscale-0 transition-all">
                  <img 
                    src={`/placeholder.svg`} 
                    alt={`${logo.name} logo`} 
                    className="h-12 md:h-16"
                  />
                </div>
              ))}
            </div>
            <p className="text-lg text-gray-600">
              Partnerships that inspire and make a lasting impact.
            </p>
          </div>
        </div>
        
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CaseStudiesSection />
          </div>
        </section>
        
        <div className="py-20 bg-brand-backgroundAlt">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-brand-heading mb-4">
                Why Our Projects Succeed
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our consistent results come from a proven approach that puts strategy first and execution second.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {successPillars.map((pillar, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-sm text-center">
                  <div className="h-16 w-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-brand-primary">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-brand-heading">{pillar.title}</h3>
                  <p className="text-gray-600">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-brand-heading mb-4">
                Case Study & Project Questions
              </h2>
              <p className="text-lg text-gray-600">
                Common questions about our projects and processes.
              </p>
            </div>
            
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white mb-4 rounded-lg shadow-sm overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <h3 className="text-lg font-medium text-brand-heading text-left">{faq.question}</h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-brand-text">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        <div className="mt-24 bg-brand-backgroundAlt rounded-lg p-10 text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Lassen Sie uns Ihre Erfolgsgeschichte schreiben</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Ob Relaunch, mehr Leads oder bessere Konversionen – jedes Projekt bei ooliv startet mit einem klaren Plan. Gemeinsam setzen wir Ihr Marketing strategisch um.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              className="group bg-[#006064] text-white hover:bg-[#004D40]" 
              onClick={handleOpenLeadForm}
            >
              Projekt starten
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/de/kontakt">
                Strategiegespräch buchen
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          <p className="text-lg text-brand-text font-medium mt-8">
            100+ erfolgreich umgesetzte Projekte • Vertraut von führenden Unternehmen • KI-Strategien, die menschlich und messbar sind
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default CaseStudies;
