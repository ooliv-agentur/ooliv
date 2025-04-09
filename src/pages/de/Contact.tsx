
import React, { useEffect, useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { 
  Mail, 
  Phone,
  MessageCircle,
  Send,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import ContactForm from '@/components/ContactForm';
import PageHero from '@/components/PageHero';
import { 
  Card, 
  CardHeader, 
  CardContent, 
  CardFooter, 
  CardTitle, 
  CardDescription 
} from '@/components/ui/card';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import ConsultationRequestSectionDE from '@/components/contact/ConsultationRequestSectionDE';

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
        title="Lassen Sie uns über Ihr Projekt sprechen"
        subtitle="Wir betreuen Unternehmen in ganz Europa – mit persönlicher Betreuung und klarer Kommunikation."
      />
      
      {/* Hero-Erweiterung mit Lisa-Bild und Zitat */}
      <section className="relative -mt-16 z-10 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-5 gap-0">
              <div className="md:col-span-2 relative h-full overflow-hidden bg-gradient-to-br from-brand-background to-brand-backgroundAlt">
                <img 
                  src="/lovable-uploads/d0f113b2-5bb7-422b-8c20-dd20c3b7120b.png" 
                  alt="Lisa, Content & First Touch bei ooliv" 
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              
              <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold text-brand-heading mb-4">
                  Lisa – Ihre erste Ansprechpartnerin
                </h2>
                <p className="text-base md:text-lg text-brand-text mb-6">
                  Lisa ist die erste Person, die Sie bei ooliv kennenlernen. Sie kümmert sich um jede Anfrage persönlich, 
                  macht den Prozess einfach und sorgt dafür, dass Ihre Nachricht ohne Verzögerungen direkt bei 
                  Uli – dem Gründer und CEO – ankommt.
                </p>
                <blockquote className="border-l-4 border-brand-primary pl-5 py-3 italic bg-gray-50 rounded-r-lg">
                  "Sie müssen kein langes Formular ausfüllen. Schreiben Sie uns einfach – wir übernehmen den Rest."
                  <footer className="text-sm mt-2 font-medium">– Lisa, Content & First Touch</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kontaktoptionen-Sektion */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-brand-heading mb-3">So erreichen Sie uns</h2>
              <p className="text-lg text-brand-text max-w-3xl mx-auto">
                Wählen Sie den für Sie angenehmsten Kommunikationsweg – wir sind auf allen Kanälen für Sie da.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {/* Kontaktkarten */}
              <ContactCard 
                icon={<MessageCircle className="h-6 w-6 text-blue-600" />} 
                color="blue"
                title="Chat starten"
                description="Direkter Live-Chat mit unserem Team"
                buttonText="Chat öffnen"
                onClick={() => {}} // Chat-Funktion hier implementieren
              />
              
              <ContactCard 
                icon={<Send className="h-6 w-6 text-green-600" />} 
                color="green"
                title="Anfrage senden"
                description="Projekt-Details über unser Formular teilen"
                buttonText="Anfrage stellen"
                onClick={() => handleRequestAudit()}
              />
              
              <ContactCard 
                icon={<Mail className="h-6 w-6 text-amber-600" />} 
                color="amber"
                title="E-Mail schreiben"
                description="Direkt an unser Postfach schreiben"
                buttonText="Mail verfassen"
                href="mailto:info@ooliv.de"
              />
              
              <ContactCard 
                icon={<Phone className="h-6 w-6 text-purple-600" />} 
                color="purple"
                title="Anrufen"
                description="Direktes Gespräch mit unserem Team"
                buttonText="06131 - 63 67 801"
                href="tel:+4961316367801"
              />
            </div>
            
            <div className="mt-10 text-center">
              <div className="inline-block bg-gray-50 border border-gray-100 rounded-lg px-6 py-3 shadow-sm">
                <p className="text-brand-text font-medium">
                  Keine Zwischenstellen. Keine Warteschleifen. Ihre Nachricht landet direkt im Team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bürodetails-Karte */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="shadow-lg border-0 overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="bg-brand-primary text-white p-8">
                  <CardTitle className="text-2xl font-bold mb-6">Kontaktdaten</CardTitle>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium mb-1">Adresse</h3>
                        <p>Mombacher Str. 25<br />55122 Mainz, Deutschland</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium mb-1">Telefon</h3>
                        <p>06131 – 63 67 801</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium mb-1">E-Mail</h3>
                        <a href="mailto:info@ooliv.de" className="hover:underline">info@ooliv.de</a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium mb-1">Bürozeiten</h3>
                        <p>Mo-Fr: 9:00 - 17:00 Uhr</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-white/20">
                    <p className="italic">
                      Regionale Wurzeln. Globale Reichweite.
                    </p>
                  </div>
                </div>
                
                <div className="p-8 relative overflow-hidden">
                  <div className="relative z-10">
                    <CardTitle className="text-2xl font-bold mb-6 text-brand-heading">
                      Unser Standort
                    </CardTitle>
                    
                    <p className="text-brand-text mb-6">
                      Wir sind zentral in Mainz ansässig, arbeiten aber mit Kunden in ganz Europa zusammen.
                    </p>
                    
                    <div className="aspect-video rounded-lg overflow-hidden shadow-md bg-gray-100 mb-6">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2563.057248927291!2d8.237567376992016!3d50.011958671442085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd969f518adb77%3A0x94e92550c3c66d65!2sMombacher%20Str.%2025%2C%2055122%20Mainz!5e0!3m2!1sde!2sde!4v1712673858461!5m2!1sde!2sde"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="ooliv Standort"
                      ></iframe>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button 
                        className="flex items-center justify-center gap-2"
                        onClick={() => window.open('https://goo.gl/maps/8L5CmLFR5LJ2')}
                      >
                        <MapPin className="h-4 w-4" />
                        <span>Route planen</span>
                      </Button>
                      
                      <Button 
                        variant="outline" 
                        className="flex items-center justify-center gap-2"
                        onClick={() => handleRequestAudit()} 
                      >
                        <Send className="h-4 w-4" />
                        <span>Vor-Ort Termin anfragen</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Warum mit uns arbeiten */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-brand-heading mb-3">Warum mit uns arbeiten?</h2>
              <p className="text-lg text-brand-text max-w-3xl mx-auto">
                Unsere Arbeitsweise unterscheidet sich von traditionellen Agenturen
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <FeatureCard 
                icon={<CheckCircle className="text-brand-primary" />}
                title="Direkte Kommunikation"
                description="Kein Projektmanager als Zwischenperson"
              />
              
              <FeatureCard 
                icon={<CheckCircle className="text-brand-primary" />}
                title="Schnelle Reaktionszeiten"
                description="Transparente Prozesse und schnelle Entscheidungen"
              />
              
              <FeatureCard 
                icon={<CheckCircle className="text-brand-primary" />}
                title="Schlanke Prozesse"
                description="Kein Projekt-Management-Overhead"
              />
              
              <FeatureCard 
                icon={<CheckCircle className="text-brand-primary" />}
                title="Ergebnisorientiert"
                description="Fokus auf messbare Resultate, nicht nur Design"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ-Sektion */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-brand-heading mb-3">Häufig gestellte Fragen</h2>
              <p className="text-lg text-brand-text">
                Antworten auf die am häufigsten gestellten Fragen zu unseren Kontaktmöglichkeiten
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-b border-gray-100 last:border-0">
                  <AccordionTrigger className="text-left font-medium text-lg px-6 py-4 hover:no-underline hover:bg-gray-50">
                    Spreche ich direkt mit jemandem?
                  </AccordionTrigger>
                  <AccordionContent className="text-base px-6 pb-4 text-gray-600">
                    Ja – zuerst mit Lisa, danach direkt mit Uli, unserem Gründer und CEO. Wir haben keine Projektmanager zwischengeschaltet.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2" className="border-b border-gray-100 last:border-0">
                  <AccordionTrigger className="text-left font-medium text-lg px-6 py-4 hover:no-underline hover:bg-gray-50">
                    Wie schnell bekomme ich eine Antwort?
                  </AccordionTrigger>
                  <AccordionContent className="text-base px-6 pb-4 text-gray-600">
                    In der Regel innerhalb weniger Stunden – oft sogar schneller. Wir wissen, dass Zeit im digitalen Bereich wertvoll ist.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3" className="border-b border-gray-100 last:border-0">
                  <AccordionTrigger className="text-left font-medium text-lg px-6 py-4 hover:no-underline hover:bg-gray-50">
                    Arbeitet ihr auch international?
                  </AccordionTrigger>
                  <AccordionContent className="text-base px-6 pb-4 text-gray-600">
                    Ja – wir betreuen Projekte aus ganz Europa. Regional erreichbar, aber ortsunabhängig umsetzbar. Unsere Kernkompetenz liegt in der digitalen Zusammenarbeit.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4" className="border-b border-gray-100 last:border-0">
                  <AccordionTrigger className="text-left font-medium text-lg px-6 py-4 hover:no-underline hover:bg-gray-50">
                    Was passiert nach meiner Anfrage?
                  </AccordionTrigger>
                  <AccordionContent className="text-base px-6 pb-4 text-gray-600">
                    Nach Ihrer Anfrage werden wir uns zeitnah bei Ihnen melden, um Ihre Anforderungen zu besprechen. Anschließend erhalten Sie ein maßgeschneidertes Angebot für Ihr Projekt.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
      
      {/* Kontaktformular-Integration */}
      <ConsultationRequestSectionDE requestAudit={handleRequestAudit} />

      {/* Kontaktformular für Audits (Modal) */}
      <ContactForm 
        open={showAuditForm} 
        onOpenChange={setShowAuditForm} 
        formType="audit" 
      />
    </PageLayout>
  );
};

// Kontaktkarten-Komponente
interface ContactCardProps {
  icon: React.ReactNode;
  color: 'blue' | 'green' | 'amber' | 'purple';
  title: string;
  description: string;
  buttonText: string;
  onClick?: () => void;
  href?: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
  icon,
  color,
  title,
  description,
  buttonText,
  onClick,
  href
}) => {
  const colorClasses = {
    blue: 'bg-blue-50',
    green: 'bg-green-50',
    amber: 'bg-amber-50',
    purple: 'bg-purple-50'
  };

  const ButtonElement = () => (
    <Button 
      variant="outline" 
      className="w-full justify-between group"
      onClick={onClick}
      asChild={Boolean(href)}
    >
      {href ? (
        <a href={href}>
          <span>{buttonText}</span>
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </a>
      ) : (
        <>
          <span>{buttonText}</span>
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </>
      )}
    </Button>
  );

  return (
    <Card className="overflow-hidden h-full transition-all hover:shadow-md border border-gray-100 hover:border-brand-primary/50">
      <CardHeader className="pb-2">
        <div className={cn("rounded-full w-12 h-12 flex items-center justify-center mb-2", colorClasses[color])}>
          {icon}
        </div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pb-3">
        <p className="text-gray-600">{description}</p>
      </CardContent>
      <CardFooter className="pt-0">
        <ButtonElement />
      </CardFooter>
    </Card>
  );
};

// Feature-Card-Komponente
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-brand-primary/50 transition-all hover:shadow-md">
      <div className="flex items-start mb-4">
        {icon}
        <h3 className="font-bold text-lg ml-3">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default GermanContact;
