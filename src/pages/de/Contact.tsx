import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { 
  Building, 
  Mail, 
  Phone,
  MessageCircle,
  Send,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import ConsultationRequestSectionDE from '@/components/contact/ConsultationRequestSectionDE';
import ContactForm from '@/components/ContactForm';
import { useState } from 'react';
import PageHero from '@/components/PageHero';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';

const GermanContact = () => {
  const { setLanguage } = useLanguage();
  const [showAuditForm, setShowAuditForm] = useState(false);
  
  useEffect(() => {
    setLanguage('de');
  }, [setLanguage]);

  const handleRequestAudit = () => {
    setShowAuditForm(true);
  };

  return (
    <PageLayout>
      <PageHero
        badge="ooliv"
        title="Lassen Sie uns über Ihr Projekt sprechen."
        subtitle="Wir betreuen Unternehmen aus Mainz und Umgebung – persönlich, schnell und mit klarem Fokus."
        primaryCta={{
          text: "Projekt starten",
          link: "#"
        }}
      />

      <section className="section-standard bg-gray-50">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-full flex justify-center md:justify-end">
              <div className="relative w-full max-w-md lg:max-w-lg">
                <img 
                  src="/lovable-uploads/9eb336e5-4bfd-4875-ada9-c37e080ee93c.png" 
                  alt="Lisa, Content & First Touch bei ooliv" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
                <div className="absolute inset-0 rounded-lg shadow-inner pointer-events-none"></div>
              </div>
            </div>
            
            <div className="flex flex-col justify-center space-y-4 md:pl-8">
              <h2 className="text-3xl font-bold text-brand-heading">Lisa – Ihre erste Ansprechpartnerin</h2>
              <p className="text-lg text-brand-text">
                Lisa ist die erste Person, die Sie bei ooliv hören oder lesen werden. Sie kümmert sich um jede Anfrage persönlich, strukturiert und mit Tempo – und sorgt dafür, dass Ihr Projekt direkt bei Uli auf dem Tisch landet.
              </p>
              <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
                "Sie müssen kein langes Formular ausfüllen. Schreiben Sie uns einfach – wir übernehmen den Rest."
                <footer className="text-sm mt-2 font-medium">– Lisa, Content & First Touch</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section className="section-standard relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-8 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-primary to-transparent"></div>
        
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-8 items-center py-4">
            <div className="flex flex-col items-center md:items-start justify-center space-y-6">
              <div className="bg-blue-100 rounded-full p-4 shadow-sm">
                <MessageCircle size={32} className="text-blue-600" />
              </div>
              <div className="bg-green-100 rounded-full p-4 shadow-sm">
                <Send size={32} className="text-green-600" />
              </div>
              <div className="bg-amber-100 rounded-full p-4 shadow-sm">
                <Mail size={32} className="text-amber-600" />
              </div>
              <div className="bg-purple-100 rounded-full p-4 shadow-sm">
                <Phone size={32} className="text-purple-600" />
              </div>
            </div>
            
            <div className="flex flex-col justify-center space-y-5">
              <h2 className="text-3xl font-bold text-brand-heading">So erreichen Sie uns</h2>
              <p className="text-lg text-brand-text">
                Nutzen Sie die Sidebar – oder klicken Sie direkt auf:
              </p>
              
              <div className="mt-4">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span>💬</span>
                    <span>Chat starten</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span>📝</span>
                    <span>Anfrage senden</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span>✉️</span>
                    <span>E-Mail schreiben</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span>📞</span>
                    <span>Anrufen</span>
                  </li>
                </ul>
              </div>
              
              <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
                Keine Zwischenstellen. Keine Warteschleifen. Ihre Nachricht landet direkt im Team.
              </blockquote>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-8 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-primary to-transparent"></div>
      </section>

      <section className="section-standard bg-gray-50">
        <div className="section-container">
          <h2 className="section-title text-center">Warum ooliv?</h2>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-3 text-center">
              <li className="flex items-center justify-center gap-2">
                <span className="text-brand-primary font-bold">✓</span>
                <span>Direkter Kontakt mit dem CEO</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="text-brand-primary font-bold">✓</span>
                <span>Klare Kommunikation ab Tag eins</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="text-brand-primary font-bold">✓</span>
                <span>Keine Projektmanager, keine Reibungsverluste</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="text-brand-primary font-bold">✓</span>
                <span>Fokus auf messbare Ergebnisse – nicht nur schöne Designs</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-standard">
        <div className="section-container">
          <h2 className="section-title text-center">Kontaktdaten</h2>
          <div className="max-w-3xl mx-auto text-center">
            <Card className="inline-block">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">ooliv</h3>
                <p className="mb-4">
                  Mombacher Str. 25<br />
                  55122 Mainz, Deutschland
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-3">
                    <Phone className="h-5 w-5 text-brand-primary" />
                    <span>06131 – 63 67 801</span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <Mail className="h-5 w-5 text-brand-primary" />
                    <a href="mailto:info@ooliv.de" className="hover:underline">info@ooliv.de</a>
                  </div>
                </div>
                
                <p className="mt-4 italic text-sm">
                  Wir sind für Sie da – regional erreichbar, digital verbunden.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-standard bg-gray-50">
        <div className="section-container">
          <h2 className="section-title">Kontakt-FAQs</h2>
          
          <div className="max-w-3xl mx-auto mt-8">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left font-medium text-lg">
                  Spreche ich direkt mit jemandem?
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  Ja – zuerst mit Lisa, danach direkt mit Uli, unserem Gründer und CEO.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-medium text-lg">
                  Wie schnell bekomme ich eine Antwort?
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  In der Regel innerhalb weniger Stunden – oft sogar schneller.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-medium text-lg">
                  Arbeitet ihr auch international?
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  Ja – wir betreuen Projekte aus ganz Europa. Regional erreichbar, aber ortsunabhängig umsetzbar.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <ContactForm 
        open={showAuditForm} 
        onOpenChange={setShowAuditForm} 
        formType="audit" 
      />
    </PageLayout>
  );
};

export default GermanContact;
