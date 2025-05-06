import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import { 
  Mail, 
  Phone,
  MessageCircle,
  Send,
  MapPin,
  Clock,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
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
import { cn } from '@/lib/utils';
import FAQ from '@/components/FAQ';
import ContactSEOText from '@/components/contact/ContactSEOText';

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
        <a href={href} target="_blank" rel="noopener noreferrer">
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

const GermanContact = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('de');
  }, [setLanguage]);

  const handleOpenSidebarForm = () => {
    document.dispatchEvent(new CustomEvent('open-lead-form'));
  };

  return (
    <PageLayout 
      className="overflow-x-hidden"
      seoText={<ContactSEOText />}
    >
      <Helmet>
        <title>Kontakt ooliv – Ihre Digitalagentur Mainz</title>
        <meta name="description" content="Kontaktieren Sie ooliv – Ihre Digitalagentur aus Mainz für individuelles Webdesign, SEO und Online-Marketing. Persönlich, direkt, effizient. Jetzt Nachricht senden!" />
      </Helmet>

      <PageHero
        badge="ooliv"
        title="Lassen Sie uns über Ihr Projekt sprechen"
        subtitle="Wir betreuen Unternehmen in ganz Europa – mit persönlicher Betreuung und klarer Kommunikation."
      />
      
      <section className="relative -mt-16 z-10 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-5 gap-0">
              <div className="md:col-span-2 relative h-full overflow-hidden bg-gradient-to-br from-brand-background to-brand-backgroundAlt">
                <img 
                  src="/lovable-uploads/22a1721c-dd5f-47a8-871b-a42c2ea29458.png" 
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
              <ContactCard 
                icon={<MessageCircle className="h-6 w-6 text-blue-600" />} 
                color="blue"
                title="WhatsApp-Chat"
                description="Direkter WhatsApp-Chat"
                buttonText="WhatsApp öffnen"
                href="http://wa.me/+4917680167641"
              />
              
              <ContactCard 
                icon={<Send className="h-6 w-6 text-green-600" />} 
                color="green"
                title="Anfrage senden"
                description="Projekt-Details über unser Formular teilen"
                buttonText="Formular öffnen"
                onClick={handleOpenSidebarForm}
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

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="shadow-lg border-0 overflow-hidden">
              <div className="bg-brand-primary text-white p-8">
                <CardTitle className="text-2xl font-bold mb-6">Kontaktdaten</CardTitle>
                
                <div className="grid md:grid-cols-3 gap-6">
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
            </Card>
          </div>
        </div>
      </section>

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

      {/* Use consistent FAQ component */}
      <FAQ 
        customTitle="Häufig gestellte Fragen zum Kontakt"
        customFaqs={[
          {
            question: "Spreche ich direkt mit jemandem?",
            answer: "Ja – zuerst mit Lisa, danach direkt mit Uli, unserem Gründer und CEO. Wir haben keine Projektmanager zwischengeschaltet."
          },
          {
            question: "Wie schnell bekomme ich eine Antwort?",
            answer: "In der Regel innerhalb weniger Stunden – oft sogar schneller. Wir wissen, dass Zeit im digitalen Bereich wertvoll ist."
          },
          {
            question: "Arbeitet ihr auch international?",
            answer: "Ja – wir betreuen Projekte aus ganz Europa. Regional erreichbar, aber ortsunabhängig umsetzbar. Unsere Kernkompetenz liegt in der digitalen Zusammenarbeit."
          },
          {
            question: "Was passiert nach meiner Anfrage?",
            answer: "Nach Ihrer Anfrage werden wir uns zeitnah bei Ihnen melden, um Ihre Anforderungen zu besprechen. Anschließend erhalten Sie ein maßgeschneidertes Angebot für Ihr Projekt."
          }
        ]}
        hideCTA={true}
      />
    </PageLayout>
  );
};

interface ContactCardProps {
  icon: React.ReactNode;
  color: 'blue' | 'green' | 'amber' | 'purple';
  title: string;
  description: string;
  buttonText: string;
  onClick?: () => void;
  href?: string;
}

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
