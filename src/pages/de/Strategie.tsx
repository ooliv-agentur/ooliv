
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import StrategieHero from '@/components/strategy/StrategieHero';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import { Search, Target, Monitor, ArrowRight, User, Users, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Strategie = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('de');
  }, [setLanguage]);

  const strategieFaqs = [
    {
      question: "Wie entwickelt ihr eine passende Strategie für mein Unternehmen?",
      answer: "Wir beginnen mit einer gründlichen Analyse Ihrer Zielgruppen, Mitbewerber und Geschäftsziele. Darauf aufbauend entwickeln wir eine maßgeschneiderte Digitalstrategie, die messbare Ergebnisse liefert."
    },
    {
      question: "Was beinhaltet eine UX-Analyse?",
      answer: "Wir analysieren das Nutzerverhalten auf Ihrer Website, identifizieren Optimierungspotentiale und entwickeln Lösungen für eine bessere User Experience und höhere Conversion-Raten."
    },
    {
      question: "Wie lange dauert die Strategieentwicklung?",
      answer: "Eine fundierte Strategieentwicklung dauert in der Regel 2-4 Wochen, je nach Komplexität Ihres Geschäftsmodells und der gewünschten Tiefe der Analyse."
    },
    {
      question: "Arbeitet ihr auch mit bestehenden Websites?",
      answer: "Ja, wir analysieren gerne Ihre bestehende Website und entwickeln Optimierungsstrategien. Oft können bereits kleine Änderungen große Wirkung erzielen."
    }
  ];

  const handleOpenLeadForm = () => {
    console.log('🚀 Strategy Hero: Lead form trigger button clicked');
    window.dispatchEvent(new Event('open-lead-form'));
    console.log('📡 Strategy Hero: open-lead-form event dispatched');
  };

  return (
    <PageLayout className="overflow-x-hidden">
      <Helmet>
        <title>Webkonzept & Strategie für Ihren Erfolg | ooliv Mainz</title>
        <meta name="description" content="Wir entwickeln individuelle Digitalstrategien mit Webkonzepten, die messbare Ergebnisse liefern – für mehr Sichtbarkeit, mehr Leads und eine starke Marke." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-medico-mint overflow-hidden font-satoshi min-h-screen flex items-center">
        {/* Enhanced floating circles animation - same as homepage */}
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
                Strategie & Webkonzept für Ihren digitalen Erfolg
              </h1>
              
              {/* Subtitle */}
              <p 
                className="text-lg sm:text-xl md:text-2xl text-medico-darkGreen mb-8 sm:mb-10 text-left"
                style={{ lineHeight: '1.6' }}
              >
                Wir entwickeln individuelle Digitalstrategien mit einem klaren Webkonzept, das messbare Ergebnisse liefert – für mehr Sichtbarkeit, mehr Leads und eine nachhaltige digitale Präsenz.
              </p>
              
              {/* CTA buttons - matching homepage style exactly */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="group bg-medico-yellow text-medico-darkGreen hover:bg-yellow-400 font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={handleOpenLeadForm}
                >
                  Strategiegespräch vereinbaren
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="group bg-medico-white text-medico-darkGreen hover:bg-gray-50 border-2 border-medico-darkGreen hover:border-medico-turquoise font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  asChild
                >
                  <a href="/webdesign">
                    Mehr über unsere Leistungen
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Visual transition indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-1 h-6 sm:h-8 bg-gradient-to-b from-medico-turquoise/50 to-medico-turquoise/80 rounded-full animate-pulse"></div>
            <div className="flex space-x-1">
              <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-medico-turquoise/80 rounded-full animate-pulse"></div>
              <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-medico-turquoise/80 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-medico-turquoise/80 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-6">
              Strategie & Konzept als Fundament Ihres digitalen Erfolgs
            </h2>
            <p className="text-xl text-brand-text max-w-3xl mx-auto">
              Ohne eine klare Strategie und ein durchdachtes Webkonzept verpuffen Marketing-Budgets. Wir sorgen dafür, dass jeder Euro zielgerichtet eingesetzt wird – von der Analyse bis zur Umsetzung.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-medico-mint rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-medico-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 012-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-brand-heading">Zielgruppenanalyse & Marktverständnis</h3>
              <p className="text-brand-text">
                Wir analysieren, wer Ihre Kunden sind, wie sie online suchen und wie Sie sie mit einem klaren Webkonzept optimal erreichen.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-medico-mint rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-medico-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-brand-heading">Nutzerführung & Conversion-Strategie</h3>
              <p className="text-brand-text">
                Wir definieren, wie Ihre Besucher geführt werden – für mehr Leads und eine hohe Conversion-Rate. Ihr Webkonzept wird so zur tragenden Säule Ihrer digitalen Strategie.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-medico-mint rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-medico-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-brand-heading">Projektplan & Roadmap</h3>
              <p className="text-brand-text">
                Wir entwickeln eine klare Roadmap mit Meilensteinen, damit Ihr Projekt strukturiert umgesetzt wird und alle Beteiligten jederzeit den Überblick behalten – vom ersten Webkonzept bis zur Umsetzung.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-medico-mint">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-6">
              Unser strategischer Ansatz – von der Analyse bis zum Webkonzept und zur Umsetzung
            </h2>
            <p className="text-xl text-brand-text max-w-3xl mx-auto">
              Wir begleiten Sie Schritt für Schritt: von der Analyse Ihrer aktuellen Website über das Webkonzept bis zur erfolgreichen Umsetzung.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-medico-mint rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-medico-turquoise" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-brand-heading">Analyse & Webkonzept</h3>
              <p className="text-brand-text">
                Wir prüfen Ist-Zustand, Zielgruppen, Wettbewerb und entwickeln ein individuelles Webkonzept mit Sitemap und ersten Wireframes.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-medico-mint rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-medico-turquoise" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-brand-heading">Strategie & Planung</h3>
              <p className="text-brand-text">
                Wir definieren messbare Ziele, planen Maßnahmen und erstellen einen Projektplan auf Basis Ihres Webkonzepts.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-medico-mint rounded-full flex items-center justify-center mx-auto mb-6">
                <Monitor className="w-8 h-8 text-medico-turquoise" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-brand-heading">Design-Übergabe & Umsetzung</h3>
              <p className="text-brand-text">
                Nach der Designfreigabe startet die Webentwicklung – sauber, performant und individuell.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-medico-mint rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-medico-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-brand-heading">Optimierung & Reporting</h3>
              <p className="text-brand-text">
                Nach dem Go-Live definieren wir KPIs, messen den Erfolg und optimieren kontinuierlich.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Consulting Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-6">
              Strategieberatung, die zu Ihnen passt
            </h2>
            <p className="text-xl text-brand-text max-w-3xl mx-auto">
              Wir begleiten Sie von der ersten Idee bis zur Umsetzung – mit einem persönlichen Ansprechpartner, einem individuellen Webkonzept und dem richtigen Blick fürs Detail.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-medico-mint rounded-full flex items-center justify-center mx-auto mb-6">
                <User className="w-8 h-8 text-medico-turquoise" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-brand-heading">Persönlicher Ansprechpartner</h3>
              <p className="text-brand-text">
                Wir sind für Sie da: direkt, ehrlich und transparent. Sie sprechen bei uns immer mit einem erfahrenen Strategen – kein Buzzword-Bingo, sondern Klartext.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-medico-mint rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-medico-turquoise" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-brand-heading">Workshops & Kick-off-Meetings</h3>
              <p className="text-brand-text">
                Gemeinsam entwickeln wir in Workshops und Kick-offs eine Strategie, die zu Ihnen passt und Ihr Team von Anfang an mitnimmt.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-medico-mint rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-medico-turquoise" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-brand-heading">Transparente Kommunikation</h3>
              <p className="text-brand-text">
                Über Basecamp oder persönliche Calls sind wir immer für Sie erreichbar – für Fragen, Feedback oder neue Ideen.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Button 
              size="lg" 
              className="group bg-medico-yellow text-medico-darkGreen hover:bg-yellow-400 font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={handleOpenLeadForm}
            >
              Jetzt Strategiegespräch buchen
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      <FAQ customFaqs={strategieFaqs} />
      <CTA 
        lightBackground={true}
        title="Bereit für eine strategische Digitalberatung?"
        subtitle="Lassen Sie uns gemeinsam eine Strategie entwickeln, die messbare Ergebnisse liefert."
        primaryCta="Strategiegespräch vereinbaren"
        secondaryCta="Kontakt aufnehmen"
      />
    </PageLayout>
  );
};

export default Strategie;
