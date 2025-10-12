
import React from 'react';
import DOMPurify from 'dompurify';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Plus, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';

interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

interface FAQProps {
  customFaqs?: FAQItem[];
  customTitle?: string;
  customSubtitle?: string;
  customCtaText?: string;
  hideCTA?: boolean;
  useLeadForm?: boolean;
  groupByCategory?: boolean;
}

const FAQ = ({ 
  customFaqs, 
  customTitle, 
  customSubtitle,
  customCtaText, 
  hideCTA = false,
  useLeadForm = false,
  groupByCategory = false
}: FAQProps) => {
  const { language, t } = useLanguage();
  const isGerman = language === 'de';
  
  // Generate FAQ structured data
  const generateFAQSchema = (faqs: FAQItem[]) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question", 
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer.replace(/<[^>]*>/g, '') // Strip HTML tags for schema
      }
    }))
  });
  
  const defaultFaqs = [
    {
      question: isGerman ? "Wie läuft ein Website-Projekt bei ooliv ab?" : "What is your website creation process?",
      answer: isGerman ? 
        "Unser Prozess ist klar strukturiert:<br/><br/><strong>1. Strategie & Konzept</strong><br/>Wir analysieren gemeinsam Ihre Ziele und Zielgruppe.<br/><br/><strong>2. Content-Erstellung</strong><br/>Texte und Bilder werden maßgeschneidert entwickelt.<br/><br/><strong>3. Design & Entwicklung</strong><br/>Modernes, benutzerfreundliches Design wird technisch umgesetzt.<br/><br/><strong>4. Go-Live & Support</strong><br/>Nach dem Launch betreuen wir Sie weiter." 
        : "We follow a clear 5-step process: 1) Strategy and planning, 2) UX/UI design, 3) Development, 4) Content creation, 5) Launch and support.",
      category: "process"
    },
    {
      question: isGerman ? "Was kostet eine professionelle Website?" : "How much does a WordPress website cost?",
      answer: isGerman ? 
        "Die Kosten richten sich nach Ihren Anforderungen:<br/><br/><strong>Einfache Websites:</strong> ab 4.000 €<br/>Ideal für kleine Unternehmen und Starter<br/><br/><strong>Professionelle Business-Websites:</strong> 6.000 – 12.000 €<br/>Mit SEO-Optimierung und umfangreichem Content<br/><br/><strong>Komplexe Projekte:</strong> ab 15.000 €<br/>Shops, mehrsprachige Websites, spezielle Funktionen<br/><br/>Sie erhalten von uns immer ein transparentes Angebot ohne versteckte Kosten." 
        : "Pricing depends on scope and complexity. Projects typically start at $5,000 for small business sites and vary based on functionality needs, SEO optimization, and content strategy.",
      category: "pricing"
    },
    {
      question: isGerman ? "Wie lange dauert die Website-Erstellung?" : "How long does it take to build a website?",
      answer: isGerman ? 
        "Die Projektdauer hängt vom Umfang ab:<br/><br/><strong>Kompakte Websites:</strong> 3–4 Wochen<br/>Onepager und kleinere Projekte<br/><br/><strong>Standard Business-Websites:</strong> 5–8 Wochen<br/>Mittlere Projekte mit Content-Erstellung<br/><br/><strong>Umfangreiche Projekte:</strong> 10+ Wochen<br/>Shops, komplexe Funktionen, mehrsprachige Seiten<br/><br/>Wir arbeiten immer mit klaren Zeitplänen und halten Sie über den Fortschritt auf dem Laufenden." 
        : "Timeframes vary by project scope. Small websites may be completed within 4-6 weeks, while more complex projects might require 2-3 months.",
      category: "process"
    },
    {
      question: isGerman ? "Welche Betreuung erhalte ich nach dem Launch?" : "Do you offer ongoing support after launch?",
      answer: isGerman ? 
        "Wir lassen Sie nach dem Go-Live nicht allein:<br/><br/><strong>Technische Wartung</strong><br/>Updates, Backups und Sicherheit<br/><br/><strong>Content-Pflege</strong><br/>Neue Texte, Bilder und SEO-Optimierung<br/><br/><strong>Erweiterungen</strong><br/>Neue Funktionen und Optimierungen<br/><br/>Sie können zwischen monatlichen Support-Paketen oder Betreuung nach Bedarf wählen." 
        : "Yes, we offer various support and maintenance packages that can include technical support, security updates, backups, and content updates.",
      category: "support"
    },
    {
      question: isGerman ? "Warum sollte ich mich für ooliv entscheiden?" : "What sets your agency apart from others?",
      answer: isGerman ? 
        "Das macht uns besonders:<br/><br/><strong>Direkter Kontakt zum Chef</strong><br/>Sie sprechen immer mit dem CEO – keine Umwege<br/><br/><strong>Alles aus einer Hand</strong><br/>Strategie, Design, Technik und Content von einem Team<br/><br/><strong>Messbare Erfolge</strong><br/>Websites, die bei Google ranken und Kunden gewinnen<br/><br/><strong>Lokale Nähe</strong><br/>In Mainz verwurzelt, aber deutschlandweit tätig<br/><br/>→ <a href='/kontakt' class='text-brand-primary hover:underline'>Lernen Sie uns persönlich kennen</a>" 
        : "We combine strategic thinking, creative design, and technical expertise to deliver websites that not only look great but also drive measurable business results.",
      category: "about"
    }
  ];
  
  const faqs = customFaqs || defaultFaqs;
  
  // Sanitize FAQ answers to prevent XSS
  const sanitizedFaqs = faqs.map(faq => ({
    ...faq,
    answer: DOMPurify.sanitize(faq.answer, {
      ALLOWED_TAGS: ['br', 'strong', 'em', 'a', 'p'],
      ALLOWED_ATTR: ['href', 'class'],
      ALLOWED_URI_REGEXP: /^(?:\/|https?:\/\/)/i
    })
  }));
  
  // Group FAQs by category if requested and not using custom FAQs
  const groupedFaqs = groupByCategory && !customFaqs ? {
    process: sanitizedFaqs.filter(faq => faq.category === 'process'),
    pricing: sanitizedFaqs.filter(faq => faq.category === 'pricing'),
    support: sanitizedFaqs.filter(faq => faq.category === 'support'),
    about: sanitizedFaqs.filter(faq => faq.category === 'about')
  } : null;

  const categoryTitles = {
    process: "Projektablauf",
    pricing: "Kosten & Preise", 
    support: "Betreuung & Service",
    about: "Warum ooliv?"
  };
  
  const title = customTitle || (isGerman ? "Häufig gestellte Fragen" : "Frequently Asked Questions");
  const subtitle = customSubtitle || (isGerman ? "Hier finden Sie Antworten auf die wichtigsten Fragen rund um Ihre neue Website." : "Find answers to the most common questions about our services.");
  const ctaText = customCtaText || (isGerman ? "Weitere Fragen? Sprechen Sie mit uns" : "Have more questions? Contact us");
  
  const handleOpenLeadForm = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };
  
  const faqSchema = generateFAQSchema(sanitizedFaqs);
  
  return (
    <section className="py-24 bg-white">
      {/* FAQ Schema */}
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-medico-darkGreen" style={{ lineHeight: '1.3' }}>
              {title}
            </h2>
            <div className="w-20 h-1 bg-accent-primary mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-medico-darkGreen/80 max-w-2xl mx-auto" style={{ lineHeight: '1.6' }}>
              {subtitle}
            </p>
          </div>
        </Reveal>
        
        {groupedFaqs ? (
          // Grouped FAQ display for German
          <div className="space-y-12">
            {Object.entries(groupedFaqs).map(([category, categoryFaqs]) => (
              categoryFaqs.length > 0 && (
                <div key={category} className="bg-medico-mint/20 rounded-2xl p-6 md:p-8 border border-accent-primary/20">
                  <h3 className="text-xl md:text-2xl font-bold text-medico-darkGreen mb-6 text-center">
                    {categoryTitles[category as keyof typeof categoryTitles]}
                  </h3>
                  <Accordion type="single" collapsible className="w-full">
                    <StaggerReveal className="space-y-4">
                      {categoryFaqs.map((faq, index) => (
                        <AccordionItem 
                          key={`${category}-${index}`} 
                          value={`${category}-item-${index}`}
                          className="bg-white border border-accent-primary/10 rounded-xl px-6 py-2 shadow-sm hover:shadow-md transition-shadow duration-200"
                        >
                          <AccordionTrigger className="text-base md:text-lg font-medium text-medico-darkGreen hover:no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-opacity-50 [&[data-state=open]]:text-accent-primary transition-colors duration-200">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-[15px] md:text-[16px] text-medico-darkGreen/80 leading-relaxed mt-4 pb-4">
                            <div className="prose prose-slate max-w-none" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </StaggerReveal>
                  </Accordion>
                </div>
              )
            ))}
          </div>
        ) : (
          // Regular FAQ display for English or custom FAQs
          <div className="bg-medico-mint/10 rounded-2xl p-6 md:p-8 border border-accent-primary/20">
            <Accordion type="single" collapsible className="w-full">
              <StaggerReveal className="space-y-4" stagger={0.08}>
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-white border border-accent-primary/10 rounded-xl px-6 py-2 shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    <AccordionTrigger className="text-base md:text-lg font-medium text-medico-darkGreen hover:no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-opacity-50 [&[data-state=open]]:text-accent-primary transition-colors duration-200">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-[15px] md:text-[16px] text-medico-darkGreen/80 leading-relaxed mt-4 pb-4">
                      <div className="prose prose-slate max-w-none" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </StaggerReveal>
            </Accordion>
          </div>
        )}
        
        {!hideCTA && (
          <Reveal delay={0.3}>
            <div className="mt-16 text-center">
              <div className="bg-accent-primary/5 rounded-2xl p-8 border border-accent-primary/20">
                <h3 className="text-lg md:text-xl font-medium text-medico-darkGreen mb-6">
                  {isGerman ? "Haben Sie noch weitere Fragen?" : "Still have questions?"}
                </h3>
                {useLeadForm ? (
                  <button 
                    onClick={handleOpenLeadForm}
                    className="inline-flex items-center gap-2 rounded-full border-2 border-medico-darkGreen text-medico-darkGreen hover:bg-accent-primary hover:text-white hover:border-accent-primary font-medium px-8 py-3 transition-all duration-300"
                  >
                    <ArrowRight className="h-4 w-4" />
                    {ctaText}
                  </button>
                ) : (
                  <Button asChild variant="outline" className="rounded-full border-2 border-medico-darkGreen text-medico-darkGreen hover:bg-accent-primary hover:text-white hover:border-accent-primary font-medium px-8 py-3 transition-all duration-300">
                    <Link to={isGerman ? "/kontakt" : "/contact"} className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      {ctaText}
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
};

export default FAQ;
