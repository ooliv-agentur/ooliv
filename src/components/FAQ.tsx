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
  hideCTA?: boolean;
}

const FAQ = ({ 
  customFaqs, 
  customTitle, 
  customCtaText, 
  hideCTA = false
}: FAQProps) => {
  const { language, t } = useLanguage();
  const isGerman = language === 'de';
  
  const defaultFaqs = [
    {
      question: isGerman ? "Wie läuft der Website-Erstellungsprozess bei ooliv ab?" : "What is your website creation process?",
      answer: isGerman ? 
        "Unsere Website-Projekte folgen einem klaren 5-Schritte-Ablauf:<ul class='list-disc pl-4 mt-4 space-y-2'><li><strong>Strategie & Konzept</strong> – Wir analysieren Ziele, Zielgruppen und Wettbewerber – und schaffen eine fundierte inhaltliche Basis.</li><li><strong>Content-Erstellung</strong> – Texte, Bilder, Struktur – alles maßgeschneidert auf Ihre Marke und SEO-optimiert.</li><li><strong>UX/UI-Design</strong> – Modernes, individuelles Design mit Fokus auf Klarheit, Nutzerfreundlichkeit und Markenwirkung.</li><li><strong>Entwicklung</strong> – Technisch sauber umgesetzt mit aktueller Technik, responsive und DSGVO-konform.</li><li><strong>Launch & Support</strong> – Go-Live mit persönlicher Betreuung – inklusive technischer Unterstützung bei Bedarf.</li></ul>" 
        : "We follow a clear 5-step process: 1) Strategy and planning, 2) UX/UI design, 3) Development, 4) Content creation, 5) Launch and support."
    },
    {
      question: isGerman ? "Was kostet eine individuell entwickelte WordPress-Website bei ooliv?" : "How much does a WordPress website cost?",
      answer: isGerman ? 
        "Die Kosten hängen von Umfang, Funktionalität und gewünschtem Design ab. Typische Projekte bewegen sich in diesen Bereichen:<ul class='list-disc pl-4 mt-4 space-y-2'><li><strong>Basic:</strong> ab 4.000 € (Onepager, Starter-Seiten)</li><li><strong>Standard:</strong> 6.000 – 12.000 € (Corporate Sites, lokale SEO)</li><li><strong>Erweitert:</strong> ab 15.000 € (Shops, komplexe Funktionen, Multilinguale Seiten)</li></ul>Transparente Angebote – keine versteckten Kosten.<br/><br/>→ <a href='/kontakt' class='text-brand-primary hover:underline'>Lassen Sie uns Ihr Projekt besprechen</a>" 
        : "Pricing depends on scope and complexity. Projects typically start at $5,000 for small business sites and vary based on functionality needs, SEO optimization, and content strategy."
    },
    {
      question: isGerman ? "Wie lange dauert die Erstellung einer maßgeschneiderten Website?" : "How long does it take to build a website?",
      answer: isGerman ? 
        "Das hängt vom Projektumfang ab – ein typischer Zeitrahmen:<ul class='list-disc pl-4 mt-4 space-y-2'><li><strong>Kompakte Seiten</strong> (z. B. Onepager): 3–4 Wochen</li><li><strong>Mittlere Projekte:</strong> ca. 5–8 Wochen</li><li><strong>Komplexe Umsetzungen:</strong> 10+ Wochen (z. B. Shop, Multisite)</li></ul>Wichtig: Qualität vor Schnelligkeit – aber mit realistischen Timings und klarer Projektstruktur.<br/><br/>→ <a href='/kontakt' class='text-brand-primary hover:underline'>Jetzt Timing klären</a>" 
        : "Timeframes vary by project scope. Small websites may be completed within 4-6 weeks, while more complex projects might require 2-3 months."
    },
    {
      question: isGerman ? "Was beinhaltet die laufende Betreuung nach dem Launch meiner Website?" : "Do you offer ongoing support after launch?",
      answer: isGerman ? 
        "Wir begleiten Sie gerne auch nach dem Go-Live – mit Optionen wie:<ul class='list-disc pl-4 mt-4 space-y-2'><li><strong>Technische Wartung</strong> (Updates, Backups, Sicherheit)</li><li><strong>Content-Pflege</strong> (Texte, Medien, SEO)</li><li><strong>Erweiterungen & Optimierung</strong></li><li>Monatliche Support-Modelle oder nach Bedarf buchbar</li></ul>→ Betreuung, wie Sie sie brauchen – flexibel und transparent." 
        : "Yes, we offer various support and maintenance packages that can include technical support, security updates, backups, and content updates."
    },
    {
      question: isGerman ? "Warum ist ooliv die richtige Werbeagentur in Mainz für mein Projekt?" : "What sets your agency apart from others?",
      answer: isGerman ? 
        "Weil wir anders arbeiten – und besser zusammenarbeiten:<ul class='list-disc pl-4 mt-4 space-y-2'><li><strong>Direkter Kontakt:</strong> Bei uns sprechen Sie immer mit dem CEO.</li><li><strong>Effiziente Prozesse:</strong> Strategie, Content, Design und Technik aus einer Hand.</li><li><strong>Volle Sichtbarkeit:</strong> SEO, Performance und Klarheit stehen im Fokus.</li><li><strong>Lokale Stärke & digitale Exzellenz:</strong> Mit Sitz in Mainz – und Kunden weit darüber hinaus.</li></ul>→ <a href='/kontakt' class='text-brand-primary hover:underline'>Gemeinsam sichtbar werden</a>" 
        : "We combine strategic thinking, creative design, and technical expertise to deliver websites that not only look great but also drive measurable business results."
    }
  ];
  
  const faqs = customFaqs || defaultFaqs;
  
  const title = customTitle || (isGerman ? "Häufig gestellte Fragen" : "Frequently Asked Questions");
  
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
                <div className="prose prose-slate max-w-none">
                  {faq.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        {!hideCTA && (
          <div className="mt-12 text-center">
            <Button asChild variant="outline" className="rounded-full">
              <Link to={isGerman ? "/kontakt" : "/contact"} className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                {ctaText}
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQ;
