
import React from 'react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  customFaqs?: FAQItem[];
  customTitle?: string;
  customCtaText?: string;
}

const FAQ = ({ customFaqs, customTitle, customCtaText }: FAQProps) => {
  const { language, t } = useLanguage();
  const isGerman = language === 'de';
  
  // Default FAQs (used if no custom FAQs are provided)
  const defaultFaqs = [
    {
      question: isGerman ? "Wie läuft der Website-Erstellungsprozess ab?" : "What is your website creation process?",
      answer: isGerman ? "Wir haben einen klaren 5-Schritte-Prozess: 1) Strategie und Konzeption, 2) UX/UI-Design, 3) Entwicklung, 4) Content-Erstellung, 5) Launch und Support." : "We follow a clear 5-step process: 1) Strategy and planning, 2) UX/UI design, 3) Development, 4) Content creation, 5) Launch and support."
    },
    {
      question: isGerman ? "Wie viel kostet eine WordPress-Website?" : "How much does a WordPress website cost?",
      answer: isGerman ? "Die Kosten hängen von Umfang und Komplexität ab. Projekte starten typischerweise bei 5.000 € für kleine Business-Websites und können je nach Funktionsumfang, SEO-Optimierung und Content-Strategie variieren." : "Pricing depends on scope and complexity. Projects typically start at $5,000 for small business sites and vary based on functionality needs, SEO optimization, and content strategy."
    },
    {
      question: isGerman ? "Wie lange dauert die Erstellung einer Website?" : "How long does it take to build a website?",
      answer: isGerman ? "Der Zeitrahmen variiert je nach Projektumfang. Kleine Websites können innerhalb von 4-6 Wochen abgeschlossen sein, während komplexere Projekte 2-3 Monate benötigen können." : "Timeframes vary by project scope. Small websites may be completed within 4-6 weeks, while more complex projects might require 2-3 months."
    },
    {
      question: isGerman ? "Optimiert ihr Websites für Mobilgeräte?" : "Do you optimize websites for mobile devices?",
      answer: isGerman ? "Absolut, Mobiloptimierung ist Standard. Wir entwickeln nach dem Mobile-First-Prinzip und stellen sicher, dass alle unsere Websites auf allen Geräten perfekt funktionieren." : "Absolutely, mobile optimization is standard. We design using a mobile-first approach and ensure all our websites function perfectly across all devices."
    },
    {
      question: isGerman ? "Bietet ihr laufenden Support nach dem Launch an?" : "Do you offer ongoing support after launch?",
      answer: isGerman ? "Ja, wir bieten verschiedene Support- und Wartungspakete an, die technischen Support, Sicherheitsupdates, Backups und Content-Updates umfassen können." : "Yes, we offer various support and maintenance packages that can include technical support, security updates, backups, and content updates."
    }
  ];
  
  // Use custom FAQs if provided, otherwise use default FAQs
  const faqs = customFaqs || defaultFaqs;
  
  // Use custom title if provided, otherwise use default title
  const title = customTitle || (isGerman ? "Häufig gestellte Fragen" : "Frequently Asked Questions");
  
  // Use custom CTA text if provided, otherwise use default
  const ctaText = customCtaText || (isGerman ? "Weitere Fragen? Kontaktieren Sie uns" : "Have more questions? Contact us");
  
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16 text-brand-heading">
          {title}
        </h2>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-gray-200 rounded-lg px-6 py-2"
            >
              <AccordionTrigger className="text-lg font-medium text-brand-heading hover:no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-opacity-50">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[16px] text-brand-text leading-relaxed mt-4">
                <div 
                  dangerouslySetInnerHTML={{ __html: faq.answer.replace(/\n/g, '<br/>') }} 
                  className="prose prose-slate max-w-none prose-p:mt-2 prose-p:mb-4 prose-li:my-1 prose-ol:mt-2 prose-ol:mb-4 prose-ol:pl-6 prose-ul:mt-2 prose-ul:mb-4 prose-ul:pl-6"
                />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="mt-12 text-center">
          <Button asChild variant="outline" className="rounded-full">
            <Link to={isGerman ? "/de/kontakt" : "/contact"} className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              {ctaText}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
