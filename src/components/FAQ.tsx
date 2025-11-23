
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
      question: isGerman ? "Warum nicht einfach eine Website selbst bauen?" : "Why invest in professional services instead of DIY?",
      answer: isGerman ? 
        "DIY-Lösungen sparen kurzfristig Geld, kosten langfristig aber Performance und Wachstum.<br/><br/><strong>Technisches Wissen allein reicht nicht:</strong><br/>Eine Website ist mehr als Design – es geht um Suchmaschinenoptimierung, Ladezeiten, Conversion-Optimierung und technische Infrastruktur.<br/><br/><strong>Zeit ist Ihr wertvollstes Gut:</strong><br/>Sie sollten Ihr Geschäft führen, nicht an WordPress-Plugins verzweifeln.<br/><br/><strong>Professionelle Ergebnisse brauchen Erfahrung:</strong><br/>Wir kennen die Fehler, die Ihre Konkurrenz macht – und vermeiden sie von Anfang an.<br/><br/>Investieren Sie in echte Ergebnisse, nicht in Experimente." 
        : "DIY solutions may save money initially but cost you growth. Professional services deliver technical expertise, save your time, and avoid costly mistakes that competitors make.",
      category: "strategy"
    },
    {
      question: isGerman ? "Wie stellen Sie sicher, dass unsere Website tatsächlich Ergebnisse liefert?" : "How do you ensure our website generates real results?",
      answer: isGerman ? 
        "Schöne Designs sind nett – aber Ihre Website muss Geschäft bringen.<br/><br/><strong>Datenbasierte Strategie:</strong><br/>Wir analysieren Suchverhalten, Konkurrenz und Zielgruppe, bevor wir einen Pixel setzen.<br/><br/><strong>Conversion-optimiertes Design:</strong><br/>Jedes Element hat einen Zweck – von der Headline bis zum CTA-Button.<br/><br/><strong>SEO von Anfang an:</strong><br/>Technische Performance, saubere Struktur und optimierte Inhalte für nachhaltige Sichtbarkeit.<br/><br/><strong>Messbare KPIs:</strong><br/>Traffic, Rankings, Leads – wir arbeiten mit echten Zahlen, nicht mit Bauchgefühl." 
        : "We combine data-driven strategy, conversion-optimized design, built-in SEO, and measurable KPIs to ensure your website drives real business results, not just pretty pixels.",
      category: "strategy"
    },
    {
      question: isGerman ? "Was unterscheidet ooliv von anderen Agenturen?" : "What makes your approach different?",
      answer: isGerman ? 
        "Wir sind keine typische Agentur mit Buzzwords und Blabla.<br/><br/><strong>Direkter Draht zum Entscheider:</strong><br/>Keine Account Manager – Sie sprechen direkt mit dem CEO.<br/><br/><strong>KI-gestützte Effizienz:</strong><br/>Wir nutzen moderne Tools für schnellere Prozesse, ohne die menschliche Expertise zu ersetzen.<br/><br/><strong>Strategisch, nicht nur schön:</strong><br/>Design ist wichtig – aber wir denken zuerst an Ihr Geschäftsmodell und Ihre Ziele.<br/><br/><strong>Keine versteckten Kosten:</strong><br/>Transparente Preise, klare Deliverables, ehrliche Kommunikation." 
        : "Direct CEO access, AI-enhanced efficiency, strategic thinking over pretty pixels, and transparent pricing without hidden costs or corporate nonsense.",
      category: "about"
    },
    {
      question: isGerman ? "Wie integrieren Sie KI und moderne Tools, ohne die menschliche Qualität zu verlieren?" : "How do you balance AI tools with human expertise?",
      answer: isGerman ? 
        "Technologie ist unser Werkzeug, nicht unser Ersatz.<br/><br/><strong>KI für Effizienz:</strong><br/>Wir nutzen ChatGPT, Midjourney und Datenanalyse-Tools für schnellere Prozesse und bessere Insights.<br/><br/><strong>Menschen für Strategie:</strong><br/>Keine KI kann Ihre Branche verstehen wie ein erfahrener Stratege. Finalisierung, Qualitätssicherung und kreative Entscheidungen bleiben menschlich.<br/><br/><strong>Das Beste aus beiden Welten:</strong><br/>Schnellere Delivery, niedrigere Kosten, bessere Ergebnisse – aber mit strategischer Tiefe und persönlicher Betreuung.<br/><br/>Kein generischer Output, sondern maßgeschneiderte Lösungen." 
        : "We use AI for efficiency and speed, but humans handle strategy, finalization, and creative decisions. The result: faster delivery, lower costs, but customized quality.",
      category: "approach"
    },
    {
      question: isGerman ? "Welchen ROI können wir von einer Zusammenarbeit mit ooliv erwarten?" : "What kind of ROI can we expect?",
      answer: isGerman ? 
        "ROI hängt von Ihrer Branche, Investition und Zielsetzung ab – aber wir arbeiten immer ergebnisorientiert.<br/><br/><strong>Organischer Traffic-Zuwachs:</strong><br/>Unsere Kunden sehen im Schnitt +50-150% mehr organischen Traffic nach 6-12 Monaten.<br/><br/><strong>Mehr qualifizierte Leads:</strong><br/>Conversion-optimierte Websites generieren nachweislich mehr Anfragen als reine Design-Projekte.<br/><br/><strong>Langfristige Wertschöpfung:</strong><br/>Eine professionelle Website ist keine Kostenstelle, sondern ein Asset, das über Jahre Geschäft generiert.<br/><br/><strong>Messbare Verbesserungen:</strong><br/>Rankings, Ladezeiten, Conversion Rates – wir tracken, was zählt." 
        : "Clients typically see +50-150% organic traffic growth within 6-12 months, more qualified leads, and long-term asset value. We track rankings, load times, and conversions.",
      category: "results"
    },
    {
      question: isGerman ? "Wie sichern Sie langfristigen Erfolg nach dem Go-Live?" : "How do you ensure long-term success after launch?",
      answer: isGerman ? 
        "Der Launch ist der Anfang, nicht das Ende.<br/><br/><strong>Kontinuierliche Optimierung:</strong><br/>SEO entwickelt sich weiter – wir passen Content, Technik und Strategie laufend an.<br/><br/><strong>Performance-Monitoring:</strong><br/>Wir überwachen Rankings, Traffic und Conversions und reagieren proaktiv.<br/><br/><strong>Content-Updates:</strong><br/>Neue Inhalte, Blog-Artikel und Service-Erweiterungen halten Ihre Website relevant.<br/><br/><strong>Technische Wartung:</strong><br/>Updates, Sicherheit und Backups sorgen für stabile Performance.<br/><br/>Sie wählen: monatliche Betreuung oder Unterstützung nach Bedarf." 
        : "Launch is just the start. We provide continuous SEO optimization, performance monitoring, content updates, and technical maintenance to ensure sustained growth.",
      category: "support"
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
    strategy: sanitizedFaqs.filter(faq => faq.category === 'strategy'),
    about: sanitizedFaqs.filter(faq => faq.category === 'about'),
    approach: sanitizedFaqs.filter(faq => faq.category === 'approach'),
    results: sanitizedFaqs.filter(faq => faq.category === 'results'),
    support: sanitizedFaqs.filter(faq => faq.category === 'support')
  } : null;

  const categoryTitles = {
    strategy: "Strategische Fragen",
    about: "Warum ooliv?",
    approach: "Methodik & Tools",
    results: "Ergebnisse & ROI",
    support: "Langfristiger Erfolg"
  };
  
  const title = customTitle || (isGerman ? "Die wichtigsten Fragen, strategisch beantwortet." : "Key Questions, Strategically Answered");
  const subtitle = customSubtitle || (isGerman ? "Keine Standard-Floskeln. Ehrliche Antworten zu Strategie, ROI und langfristigem Erfolg." : "No corporate fluff. Honest answers about strategy, ROI, and sustainable success.");
  const ctaText = customCtaText || (isGerman ? "Weitere Fragen? Sprechen Sie mit uns" : "Have more questions? Contact us");
  
  const handleOpenLeadForm = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };
  
  const faqSchema = generateFAQSchema(sanitizedFaqs);
  
  return (
    <section className="py-24 bg-white">
      {/* FAQ Schema */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#0B0B0B] leading-tight">
              {title}
            </h2>
            <p className="text-lg md:text-xl text-[#444444] max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          </div>
        </Reveal>
        
        {groupedFaqs ? (
          // Grouped FAQ display for German
          <div className="space-y-12">
            {Object.entries(groupedFaqs).map(([category, categoryFaqs]) => (
              categoryFaqs.length > 0 && (
              <div key={category} className="bg-[#F4F7F7] rounded-[20px] p-8 border border-gray-100">
                <h3 className="text-xl md:text-2xl font-bold text-primary-text mb-6 text-center">
                    {categoryTitles[category as keyof typeof categoryTitles]}
                  </h3>
                  <Accordion type="single" collapsible className="w-full">
                    <StaggerReveal className="space-y-4">
                      {categoryFaqs.map((faq, index) => (
                        <AccordionItem 
                          key={`${category}-${index}`} 
                          value={`${category}-item-${index}`}
                          className="bg-white border border-gray-100 rounded-[12px] px-6 py-2 transition-all duration-300 hover:scale-[1.01]"
                        >
                        <AccordionTrigger className="text-base md:text-lg font-medium text-[#0B0B0B] hover:no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-opacity-50 [&[data-state=open]]:text-[#32B2AB] transition-colors duration-200">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-[15px] md:text-[16px] text-[#444444] font-normal leading-relaxed mt-4 pb-4">
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
          <div className="bg-[#F4F7F7] rounded-[20px] p-8 border border-gray-100">
            <Accordion type="single" collapsible className="w-full">
              <StaggerReveal className="space-y-4" stagger={0.08}>
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-white border border-gray-100 rounded-[12px] px-6 py-2 transition-all duration-300 hover:scale-[1.01]"
                  >
                    <AccordionTrigger className="text-base md:text-lg font-medium text-[#0B0B0B] hover:no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-opacity-50 [&[data-state=open]]:text-[#32B2AB] transition-colors duration-200">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-[15px] md:text-[16px] text-[#444444] font-normal leading-relaxed mt-4 pb-4">
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
                <div className="bg-[#F5F7F7] rounded-[20px] p-8 border border-[#E4E6E7]">
                  <h3 className="text-lg md:text-xl font-medium text-[#0B0B0B] mb-6">
                    {isGerman ? "Haben Sie noch weitere Fragen?" : "Still have questions?"}
                  </h3>
                {useLeadForm ? (
                  <Button 
                    variant="secondary"
                    size="lg"
                    onClick={handleOpenLeadForm}
                  >
                    {ctaText}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                ) : (
                  <Button asChild variant="secondary" size="lg">
                    <Link to={isGerman ? "/kontakt" : "/contact"}>
                      {ctaText}
                      <ArrowRight className="ml-2 h-5 w-5" />
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
