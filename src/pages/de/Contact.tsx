
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { 
  Building, 
  Mail, 
  Phone, 
  Clock, 
  MapPin,
  CalendarDays
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';

const GermanContact = () => {
  const { setLanguage } = useLanguage();
  
  // Set language to German when this page is loaded
  useEffect(() => {
    setLanguage('de');
  }, [setLanguage]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted');
    // Form submission logic goes here
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-brand-backgroundAlt to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-2 bg-brand-primary/10 rounded-full mb-4">
              <Mail className="h-6 w-6 text-brand-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Kontaktieren Sie ooliv</h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-600">
              Lassen Sie uns über Ihr Projekt sprechen und herausfinden, wie wir Ihnen helfen können
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Information Section */}
            <div className="bg-brand-backgroundAlt rounded-lg p-8 shadow-sm">
              <h2 className="text-2xl font-bold mb-6">ooliv GmbH</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <Building className="h-5 w-5 text-brand-primary mt-1 mr-3" />
                  <div>
                    <h3 className="font-medium mb-1">Unternehmen</h3>
                    <p>ooliv GmbH</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-brand-primary mt-1 mr-3" />
                  <div>
                    <h3 className="font-medium mb-1">Adresse</h3>
                    <p>Hauptstraße 1, 55116 Mainz, Deutschland</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-brand-primary mt-1 mr-3" />
                  <div>
                    <h3 className="font-medium mb-1">E-Mail</h3>
                    <p>info@ooliv.de</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-brand-primary mt-1 mr-3" />
                  <div>
                    <h3 className="font-medium mb-1">Telefon</h3>
                    <p>+49 6131 123456</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-brand-primary mt-1 mr-3" />
                  <div>
                    <h3 className="font-medium mb-1">Geschäftszeiten</h3>
                    <p>Montag - Freitag: 9:00 - 17:00 Uhr</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <CalendarDays className="h-5 w-5 text-brand-primary" />
                  <h3 className="text-lg font-medium">Lieber direkt ein Gespräch buchen?</h3>
                </div>
                <p className="mb-4">
                  Sichern Sie sich einen Termin für ein 30-minütiges Strategiegespräch mit unserem Gründer
                </p>
                <Button variant="outline" className="w-full">Termin vereinbaren</Button>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Schreiben Sie uns</h2>
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Ihr Name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Unternehmen</Label>
                    <Input id="company" placeholder="Ihre Firma" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">E-Mail *</Label>
                    <Input id="email" type="email" placeholder="ihre.email@beispiel.de" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefon</Label>
                    <Input id="phone" type="tel" placeholder="Ihre Telefonnummer" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Betreff</Label>
                  <Input id="subject" placeholder="Worum geht es?" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Nachricht *</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Wie können wir Ihnen helfen?" 
                    rows={5}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <input 
                      type="checkbox" 
                      id="privacy" 
                      className="h-4 w-4 rounded border-gray-300 text-brand-primary focus:ring-brand-primary"
                      required
                    />
                    <Label htmlFor="privacy" className="text-sm">
                      Ich stimme der <a href="/de/datenschutz" className="text-brand-primary hover:underline">Datenschutzerklärung</a> zu *
                    </Label>
                  </div>
                </div>
                
                <Button type="submit" size="lg">Nachricht senden</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section with focus on "ooliv" keyword */}
      <section className="py-16 md:py-24 bg-brand-backgroundAlt">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Häufig gestellte Fragen</h2>
            <p className="text-lg max-w-2xl mx-auto text-gray-600">
              Antworten auf die häufigsten Fragen zu unseren Dienstleistungen
            </p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "Wie läuft eine Zusammenarbeit mit ooliv typischerweise ab?",
                answer: "Jede Zusammenarbeit mit ooliv beginnt mit einem strategischen Gespräch, in dem wir Ihre Ziele, Herausforderungen und Erwartungen besprechen. Nach einer gründlichen Analyse erstellen wir ein maßgeschneidertes Konzept und Angebot. Nach Ihrer Zustimmung starten wir mit der Umsetzung, wobei Sie in jedem Schritt eingebunden sind."
              },
              {
                question: "Für welche Branchen hat ooliv bereits Projekte umgesetzt?",
                answer: "ooliv hat Erfahrung in verschiedenen Branchen, darunter SaaS, Fertigung, Beratung, Recht und Gesundheitswesen. Unsere Expertise ist besonders wertvoll für B2B-Unternehmen mit komplexen Angeboten, die ihre digitale Präsenz optimieren möchten."
              },
              {
                question: "Wie unterscheidet sich ooliv von anderen Agenturen?",
                answer: "Bei ooliv arbeiten Sie direkt mit dem Gründer zusammen, während ein spezialisiertes Team im Hintergrund arbeitet. Dieser Ansatz garantiert kurze Kommunikationswege, tiefgreifendes Verständnis für Ihre Ziele und hochwertige Ergebnisse ohne Reibungsverluste."
              },
              {
                question: "Was kostet ein Projekt mit ooliv?",
                answer: "Die Kosten eines Projekts mit ooliv variieren je nach Umfang, Komplexität und Zeitrahmen. Wir glauben an transparente Preisgestaltung und erstellen individuelle Angebote basierend auf Ihren spezifischen Anforderungen. Kontaktieren Sie uns für ein unverbindliches Gespräch."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default GermanContact;
