
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, MapPin, Mail, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactSEOText from '@/components/contact/ContactSEOText';

const GermanContact = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('de');
  }, [setLanguage]);

  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
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

      {/* Hero Section */}
      <section className="relative bg-medico-mint overflow-hidden font-satoshi min-h-screen flex items-center">
        {/* Enhanced floating circles animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="floating-circle slow w-32 h-32 top-20 left-10 opacity-40"></div>
          <div className="floating-circle delayed w-40 h-40 top-40 right-20 opacity-30"></div>
          <div className="floating-circle reverse w-24 h-24 bottom-40 left-1/4 opacity-50"></div>
          <div className="floating-circle diagonal w-20 h-20 bottom-20 right-1/3 opacity-45"></div>
          <div className="floating-circle fast w-16 h-16 top-1/2 left-3/4 opacity-60"></div>
          <div className="floating-circle pulse w-12 h-12 top-1/3 right-1/4 opacity-70"></div>
          <div className="floating-circle slow w-14 h-14 top-60 left-1/2 opacity-35"></div>
          <div className="floating-circle delayed reverse w-18 h-18 bottom-60 right-10 opacity-40"></div>
          <div className="floating-circle diagonal w-10 h-10 top-80 left-20 opacity-55"></div>
        </div>
        
        <div className="relative z-20 w-full">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-4xl mx-auto flex flex-col justify-center items-start min-h-[60vh]">
              {/* Main heading */}
              <h1 
                className="font-medium mb-6 sm:mb-8 leading-tight text-left text-4xl sm:text-5xl md:text-6xl lg:text-[64px] lg:leading-[76px]"
                style={{ 
                  color: '#003343' 
                }}
              >
                Kontaktieren Sie ooliv direkt
              </h1>
              
              {/* Subtitle */}
              <p 
                className="text-lg sm:text-xl md:text-2xl text-medico-darkGreen mb-8 sm:mb-10 text-left"
                style={{ lineHeight: '1.6' }}
              >
                Ihre Digitalagentur für individuelle Websites, SEO und Marketinglösungen – persönlich und ohne Umwege.
              </p>
              
              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Button 
                  size="lg" 
                  className="group font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                  style={{ 
                    backgroundColor: '#FFD700', 
                    color: '#003347',
                    border: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#FFC700';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#FFD700';
                  }}
                  onClick={handleStartProject}
                >
                  Projekt starten
                  <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="bg-medico-white text-medico-darkGreen hover:bg-gray-50 border-2 border-medico-darkGreen hover:border-medico-turquoise font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto" 
                  asChild
                >
                  <a href="tel:+4961316367801">
                    Jetzt anrufen
                    <Phone className="ml-2 h-4 sm:h-5 w-4 sm:w-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <p className="text-lg md:text-xl text-medico-darkGreen leading-relaxed text-center">
            Wir sind Ihr Partner für individuelle Websites, SEO und digitales Marketing. Bei ooliv steht persönliche Beratung an erster Stelle – ohne Zwischenstellen und ohne Warteschleifen. Unser Team begleitet Sie von der ersten Idee bis zum erfolgreichen Launch. Lassen Sie uns gemeinsam Ihr nächstes Projekt erfolgreich umsetzen.
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-medico-mint">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <MapPin className="h-8 w-8 mx-auto mb-4 text-medico-turquoise" />
              <h3 className="font-bold text-lg mb-2 text-medico-darkGreen">Adresse</h3>
              <p className="text-medico-darkGreen">
                Mombacher Str. 25<br />
                55122 Mainz, Deutschland
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <Phone className="h-8 w-8 mx-auto mb-4 text-medico-turquoise" />
              <h3 className="font-bold text-lg mb-2 text-medico-darkGreen">Telefon & WhatsApp</h3>
              <p className="text-medico-darkGreen mb-2">06131 – 63 67 801</p>
              <a 
                href="https://wa.me/+4917680167641" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-medico-turquoise hover:underline text-sm"
              >
                WhatsApp-Chat starten
              </a>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <Mail className="h-8 w-8 mx-auto mb-4 text-medico-turquoise" />
              <h3 className="font-bold text-lg mb-2 text-medico-darkGreen">E-Mail</h3>
              <a 
                href="mailto:info@ooliv.de"
                className="text-medico-darkGreen hover:text-medico-turquoise"
              >
                info@ooliv.de
              </a>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <Clock className="h-8 w-8 mx-auto mb-4 text-medico-turquoise" />
              <h3 className="font-bold text-lg mb-2 text-medico-darkGreen">Bürozeiten</h3>
              <p className="text-medico-darkGreen">Mo-Fr: 9:00 – 17:00 Uhr</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Inquiry Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <Send className="h-12 w-12 mx-auto mb-6 text-medico-turquoise" />
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-medico-darkGreen">
            Projekt-Details über unser Formular teilen
          </h2>
          <Button 
            size="lg" 
            className="font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            style={{ 
              backgroundColor: '#FFD700', 
              color: '#003347',
              border: 'none'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#FFC700';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FFD700';
            }}
            onClick={handleStartProject}
          >
            Projektanfrage stellen
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-medico-mint">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-medico-darkGreen">
            Warum ooliv?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Persönliche Ansprechpartner, keine Zwischenstellen",
              "Klare, messbare Ergebnisse",
              "Direkte Kommunikation mit der Geschäftsführung",
              "Über 100 erfolgreiche Projekte"
            ].map((point, index) => (
              <div key={index} className="flex items-start bg-white rounded-lg p-4 shadow-sm">
                <CheckCircle className="h-6 w-6 text-medico-turquoise mr-3 mt-1 flex-shrink-0" />
                <p className="text-medico-darkGreen font-medium">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <p className="text-lg md:text-xl text-medico-darkGreen leading-relaxed">
            Unser Leistungsportfolio umfasst Strategie, Webdesign, Webentwicklung, Content-Erstellung, SEO-Optimierung, Google Ads und KI-Technologien. Dabei setzen wir auf durchdachte Prozesse und messbare Ergebnisse – individuell auf Ihr Unternehmen abgestimmt.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-medico-darkGreen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
            Häufige Fragen
          </h2>
          <div className="space-y-6">
            {[
              {
                question: "Wie schnell erhalte ich eine Antwort auf meine Anfrage?",
                answer: "Wir antworten in der Regel noch am selben Tag – ohne Warteschleifen."
              },
              {
                question: "Habe ich einen festen Ansprechpartner für mein Projekt?",
                answer: "Ja, bei ooliv haben Sie immer einen direkten Ansprechpartner aus unserer Geschäftsführung."
              },
              {
                question: "Kann ich ein kostenloses Erstgespräch vereinbaren?",
                answer: "Ja, selbstverständlich! Kontaktieren Sie uns telefonisch, per E-Mail oder über das Formular."
              },
              {
                question: "Welche Leistungen bietet ooliv an?",
                answer: "Strategie, Webdesign, Webentwicklung, Content-Erstellung, SEO-Optimierung, Google Ads und KI-Technologien."
              },
              {
                question: "Wie läuft der Projektprozess bei ooliv ab?",
                answer: "Klar strukturiert: Erstgespräch, Strategie, Umsetzung, Testing und Launch – alles transparent und ohne Zwischenstellen."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cursor-pointer group">
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-medico-yellow transition-colors">
                  • {faq.question}
                </h3>
                <p className="text-white/90 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA Section */}
      <section className="py-16 bg-medico-mint">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <p className="text-xl md:text-2xl text-medico-darkGreen leading-relaxed mb-8">
            Über 100 erfolgreiche Projekte umgesetzt – starten Sie jetzt Ihr digitales Projekt mit ooliv.
          </p>
          <Button 
            size="lg" 
            className="font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            style={{ 
              backgroundColor: '#FFD700', 
              color: '#003347',
              border: 'none'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#FFC700';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FFD700';
            }}
            onClick={handleStartProject}
          >
            Jetzt Projekt starten
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default GermanContact;
