import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import InlinePrototypeForm from '@/components/website-konzept/InlinePrototypeForm';
import AnimatedPrototypePreview from '@/components/website-konzept/AnimatedPrototypePreview';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';
import AnimatedCounter from '@/components/animations/AnimatedCounter';

import ScrollProgressBar from '@/components/journey/ScrollProgressBar';
import { Check, Clock, ShieldCheck, FileText, Mail, CheckCircle2, Layout, Users, Zap } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const WebsiteKonzept = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('lead-form-section');
    if (formElement) {
      formElement.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  };

  return (
    <div className="overflow-x-hidden w-full relative">
      <Helmet>
        <title>Kostenloses Website-Konzept in 48 h | ooliv Werbeagentur Mainz</title>
        <meta name="description" content="Erhalten Sie Ihr individuelles Website-Konzept innerhalb von 48 Stunden – kostenlos, unverbindlich und strategisch durchdacht." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://ooliv.de/website-konzept" />
      </Helmet>
      
      {/* Scroll Progress Bar */}
      <ScrollProgressBar />
      

      {/* Static Logo */}
      <Reveal delay={0} direction="left" distance={20}>
        <div className="fixed top-6 left-4 md:left-6 z-50">
          <img 
            src="/ooliv_logo_2025.svg?v=2" 
            alt="ooliv logo" 
            className="h-8 md:h-10"
          />
        </div>
      </Reveal>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center bg-primary/5 py-20 overflow-x-hidden relative">
        {/* Animated Grid Pattern (technischer Look) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-15 z-[5]">
          <div 
            className="absolute inset-0 animate-grid-move"
            style={{
              backgroundImage: `linear-gradient(to right, #2D9174 1.5px, transparent 1.5px), linear-gradient(to bottom, #2D9174 1.5px, transparent 1.5px)`,
              backgroundSize: '4rem 4rem',
              maskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, #000 75%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, #000 75%, transparent 100%)'
            }}
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="max-w-4xl mx-auto text-center w-full">
            <div>
              <Reveal delay={0.1} direction="up" distance={20}>
                <p className="text-base text-muted-foreground mb-4 px-2">
                  Für Unternehmen mit bestehenden Websites.
                </p>
              </Reveal>
              
              <Reveal delay={0.2} direction="up" distance={30}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight px-2">
                  Kostenloses Website-Konzept in 48 Stunden – individuell, datenbasiert, unverbindlich
                </h1>
              </Reveal>

              <Reveal delay={0.4} direction="up" distance={30}>
                <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-[95%] sm:max-w-[85%] md:max-w-[65%] mx-auto px-2">
                  Professionelles Website-Konzept im Wert von 1.500 € – komplett kostenlos in 48 Stunden. Wir gehen in Vorleistung und beweisen, was wir können.
                </p>
              </Reveal>
              
              <Reveal delay={0.5} direction="up" distance={20}>
                <div className="flex flex-wrap items-center justify-center gap-4 mb-8 px-2">
                  <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                    <span className="text-yellow-500 font-bold">★★★★★</span>
                    <span className="text-sm font-semibold text-foreground">4.9/5 Google</span>
                    <span className="text-xs text-muted-foreground">(47 Bewertungen)</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                    <span className="text-sm font-semibold text-foreground">🏆 Top 3 Digitalagentur</span>
                    <span className="text-xs text-muted-foreground">Rhein-Main (Sortlist)</span>
                  </div>
                </div>
              </Reveal>
              
              <StaggerReveal stagger={0.1} delay={0.6}>
                <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-6 px-2">
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-lg font-semibold text-foreground">100 % kostenlos</span>
                  </div>
                  <span className="text-lg text-muted-foreground">•</span>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="text-lg font-semibold text-foreground">Antwort in 48 h</span>
                  </div>
                  <span className="text-lg text-muted-foreground">•</span>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-primary" />
                    <span className="text-lg font-semibold text-foreground">Keine Verpflichtung</span>
                  </div>
                </div>
              </StaggerReveal>

              <Reveal delay={0.9} direction="up" distance={20}>
                <p className="text-base text-muted-foreground mb-10 px-2">
                  Keine Agenturpflicht, keine versteckten Kosten – nur klare Ergebnisse für Ihre Website-Optimierung und Conversion-Optimierung.
                </p>
              </Reveal>

              <Reveal delay={1.0} direction="up" distance={20}>
                <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl px-6 py-4 mb-6 max-w-2xl mx-auto">
                  <p className="text-sm font-bold text-yellow-900 flex items-center justify-center gap-2 flex-wrap">
                    <span className="text-lg">⚠️</span>
                    Wir erstellen nur 1-2 Konzepte pro Woche – 
                    <span className="underline">aktuell noch 1 Slot in KW 45 verfügbar</span>
                  </p>
                </div>
              </Reveal>

              <Reveal delay={1.1} direction="up" distance={20}>
                <div className="px-4 w-full flex justify-center">
                  <Button 
                    onClick={scrollToForm}
                    variant="primary"
                    size="xl"
                    className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95 w-full sm:w-auto max-w-full"
                  >
                    Jetzt 1.500 € Vorleistung sichern →
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Vorleistungs-Section */}
      <section className="py-20 bg-white border-y-2 border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Reveal direction="up">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-yellow-100 text-yellow-900 px-8 py-3 rounded-full mb-6 shadow-md">
                <span className="font-bold text-3xl">1.500 €</span>
                <span className="mx-4 text-2xl">→</span>
                <span className="font-bold text-3xl">0 € für Sie</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Wir gehen in Vorleistung – Sie gehen kein Risiko ein
              </h2>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Kein Verkaufsgespräch, keine versteckten Kosten. 
                Wir beweisen erst durch echte Arbeit, was wir können. 
                Dann entscheiden Sie.
              </p>
            </div>
          </Reveal>

          <StaggerReveal stagger={0.15} className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-8 bg-primary/5 border-2 border-primary/20 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="text-6xl font-bold text-primary mb-4">1.500 €</div>
              <h3 className="text-xl font-bold text-foreground mb-3">Echter Wert</h3>
              <ul className="text-sm text-muted-foreground space-y-2 text-left">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Vollständige Website-Analyse</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Strategisches Konzept</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Klickbarer Prototyp</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>SEO & Performance-Check</span>
                </li>
              </ul>
            </div>

            <div className="text-center p-8 bg-primary/5 border-2 border-primary/20 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="text-6xl font-bold text-primary mb-4">0 €</div>
              <h3 className="text-xl font-bold text-foreground mb-3">Ihre Investition</h3>
              <p className="text-muted-foreground leading-relaxed">
                Komplett kostenlos. Keine Agenturpflicht, 
                kein Kleingedrucktes, keine Verpflichtung. 
                Sie entscheiden nach dem Ergebnis.
              </p>
            </div>

            <div className="text-center p-8 bg-primary/5 border-2 border-primary/20 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="text-6xl font-bold text-primary mb-4">48 h</div>
              <h3 className="text-xl font-bold text-foreground mb-3">Lieferzeit</h3>
              <p className="text-muted-foreground leading-relaxed">
                Schnell, professionell, konkret. 
                Wir starten sofort nach Ihrer Anfrage – 
                ohne langes Vorgespräch.
              </p>
            </div>
          </StaggerReveal>

          <Reveal delay={0.3} direction="up">
            <div className="text-center p-6 bg-yellow-50 rounded-xl max-w-3xl mx-auto border-2 border-yellow-200">
              <p className="text-lg font-semibold text-foreground">
                💡 Warum wir das tun? Wir sind überzeugt, dass unser Konzept Sie überzeugt. 
                Wir gehen in Vorleistung – Sie profitieren ohne Risiko.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3-Step Process Section */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                In 3 Schritten zu Ihrem Website-Konzept
              </h2>
            </div>
          </Reveal>

          <StaggerReveal stagger={0.15} className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-primary/10 rounded-2xl p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
              <FileText className="w-12 h-12 text-primary mb-4" />
              <div className="text-4xl font-bold text-primary mb-4">1</div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Formular ausfüllen
              </h3>
              <p className="text-muted-foreground">
                Wir analysieren Ihre Website.
              </p>
            </div>
            <div className="bg-white border-2 border-primary/10 rounded-2xl p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
              <Mail className="w-12 h-12 text-primary mb-4" />
              <div className="text-4xl font-bold text-primary mb-4">2</div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Konzept erhalten
              </h3>
              <p className="text-muted-foreground">
                In 48 Stunden per E-Mail.
              </p>
            </div>
            <div className="bg-white border-2 border-primary/10 rounded-2xl p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
              <CheckCircle2 className="w-12 h-12 text-primary mb-4" />
              <div className="text-4xl font-bold text-primary mb-4">3</div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Sie entscheiden
              </h3>
              <p className="text-muted-foreground">
                Ohne Verpflichtung.
              </p>
            </div>
          </StaggerReveal>
        </div>
      </section>

      {/* Intro Block */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal direction="up">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Ihre Website bringt zu wenig Anfragen oder Leads?
            </h2>
          <p className="text-lg text-muted-foreground mb-4">
            Wir analysieren und prüfen Ihre aktuelle Website – technisch, inhaltlich und strategisch – inklusive SEO-Analyse, Performance-Bewertung und Conversion-Check – und zeigen, wie Sie Ihre Website gezielt optimieren können.
          </p>
            <p className="text-base text-muted-foreground">
              Mit unserem kostenlosen Website-Audit und einer detaillierten Website-Analyse erhalten Sie konkrete Handlungsempfehlungen zur Optimierung Ihrer bestehenden Website – von der Seitenstruktur über Inhalte bis zur Conversion-Optimierung.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Trust Block */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <h2 className="text-center text-2xl md:text-3xl font-bold text-foreground mb-8">
              Qualität statt Masse – Deshalb nur 1-2 Konzepte pro Woche
            </h2>
          </Reveal>

          <StaggerReveal stagger={0.15} className="grid md:grid-cols-3 gap-8">
            <div className="bg-primary/5 border-2 border-primary/10 rounded-2xl p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold text-foreground mb-3">
                100 % kostenlos – kein Abo, keine versteckten Kosten
              </h3>
            </div>
            <div className="bg-primary/5 border-2 border-primary/10 rounded-2xl p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold text-foreground mb-3">
                Kein Risiko – Sie entscheiden erst nach dem Konzept
              </h3>
            </div>
            <div className="bg-primary/5 border-2 border-primary/10 rounded-2xl p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold text-foreground mb-3">
                Antwort in 48 Stunden – kein Gespräch nötig
              </h3>
            </div>
          </StaggerReveal>

          <Reveal delay={0.3} direction="up">
            <p className="text-center text-lg text-muted-foreground mt-16 mb-8">
              Wir erstellen nur 1-2 Konzepte pro Woche, um höchste Qualität zu garantieren. 
              <span className="font-bold text-foreground"> Über 200 Unternehmen</span> haben bereits 
              mit ooliv erfolgreich ihre Website optimiert.
            </p>
          </Reveal>
          
          {/* Trust Logos */}
          <Reveal delay={0.5} direction="up">
            <div className="text-center">
              <h3 className="text-base font-bold text-foreground mb-6">
                Unternehmen, die unser Konzept genutzt haben:
              </h3>
              <StaggerReveal stagger={0.1} className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 flex-wrap">
                <div className="w-20 h-14 sm:w-24 sm:h-16 flex items-center justify-center grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all">
                  <img src="/lovable-uploads/37da8d9c-7991-413d-beba-789d86fe08c8.png" alt="KLAIBER" className="w-full h-full object-contain" />
                </div>
                <div className="w-20 h-14 sm:w-24 sm:h-16 flex items-center justify-center grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all">
                  <img src="/lovable-uploads/567e9c1f-f8db-451c-9eb4-3f5865307084.png" alt="COBUS Industries" className="w-full h-full object-contain" />
                </div>
                <div className="w-20 h-14 sm:w-24 sm:h-16 flex items-center justify-center grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all">
                  <img src="/lovable-uploads/a34a156e-10ca-4259-8444-af2e83402461.png" alt="SPEZ AG" className="w-full h-full object-contain" />
                </div>
                <div className="w-20 h-14 sm:w-24 sm:h-16 flex items-center justify-center grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all">
                  <img src="/lovable-uploads/0ac94ae2-4b93-4958-bbb4-76df1bd8c6d6.png" alt="IconPro GmbH" className="w-full h-full object-contain" />
                </div>
              </StaggerReveal>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Was Sie erhalten */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Was Sie erhalten
              </h2>
              <p className="text-xl text-muted-foreground mb-4">
                Strategisch denken, digital umsetzen.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Ein individuelles Website-Konzept mit klarer Struktur, SEO-Analyse, technischer Bewertung und konkreten Empfehlungen.
              </p>
              <p className="text-base text-muted-foreground">
                Wir zeigen, welche Seitenstruktur, Inhalte und Nutzerwege Ihre Website braucht, um mehr Anfragen, bessere Conversion-Raten und nachhaltige Sichtbarkeit bei Google zu erreichen.
              </p>
            </div>
          </Reveal>

          <StaggerReveal stagger={0.2} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-primary/5 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
              <Layout className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-lg font-bold text-foreground mb-2">
                Strategische Seitenstruktur
              </h3>
              <p className="text-sm text-muted-foreground">
                Klar aufgebaut für Ihre Zielgruppe
              </p>
            </div>
            <div className="bg-primary/5 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
              <Users className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-lg font-bold text-foreground mb-2">
                Optimierte Benutzerführung
              </h3>
              <p className="text-sm text-muted-foreground">
                Grundlage für mehr Anfragen
              </p>
            </div>
            <div className="bg-primary/5 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
              <FileText className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-lg font-bold text-foreground mb-2">
                Konkrete Inhaltsempfehlungen
              </h3>
              <p className="text-sm text-muted-foreground">
                Texte, die Ihre Stärken sichtbar machen
              </p>
            </div>
            <div className="bg-primary/5 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
              <Zap className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-lg font-bold text-foreground mb-2">
                SEO- und Performance-Analyse
              </h3>
              <p className="text-sm text-muted-foreground">
                Technisches Website-Audit inklusive
              </p>
            </div>
          </StaggerReveal>

          <Reveal delay={0.3} direction="up">
            <p className="text-center text-lg text-muted-foreground mb-8">
              So wissen Sie genau, wie Ihre Website inhaltlich, technisch und strukturell aufgebaut sein sollte.
            </p>
          </Reveal>

          <Reveal delay={0.4} direction="up">
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold text-foreground mb-3">
                Optional inklusive
              </h3>
              <p className="text-base text-muted-foreground mb-2">
                Kostenlose SEO-Analyse, Website-Audit und Performance-Check
              </p>
              <p className="text-sm text-muted-foreground">
                Erfahren Sie, welche Maßnahmen Ihre Website-Performance, Ladezeit und Sichtbarkeit bei Google verbessern – inklusive SEO-, Content- und Conversion-Empfehlungen.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.5} direction="up">
            <div className="text-center">
              <Button 
                onClick={scrollToForm}
                variant="primary"
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all"
              >
                Kostenlose Website-Analyse starten
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Example Prototype */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                So sieht Ihr kostenloser Prototyp aus
              </h2>
              <p className="text-lg text-muted-foreground">
                Einblick in Ihr persönliches Konzept
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2} direction="up">
            <div className="max-w-5xl mx-auto mb-10">
              <AnimatedPrototypePreview />
            </div>
          </Reveal>

          <Reveal delay={0.3} direction="up">
            <p className="text-center text-lg text-muted-foreground mb-4">
              Ihr Website-Prototyp zeigt, wie Ihre neue Website wirkt, aufgebaut ist und welche Inhalte überzeugen – inklusive klarer Seitenstruktur, Benutzerführung und Conversion-Pfade.
            </p>
            <p className="text-center text-base text-muted-foreground mb-6">
              Bereitgestellt auf einer eigenen Test-Domain (z. B. musterfirma.projekte-ooliv.de).
            </p>
            <p className="text-center text-sm text-muted-foreground">
              Keine langen Abstimmungen – wir beginnen sofort mit der Analyse Ihrer Website oder Idee.
            </p>
          </Reveal>
        </div>
      </section>


      {/* Lead Form Section */}
      <section id="lead-form-section" className="py-20 bg-primary/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Fordern Sie jetzt Ihr kostenloses Website-Konzept an – in 48 Stunden fertig und völlig unverbindlich
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Keine langen Abstimmungen – wir beginnen sofort mit der Analyse Ihrer Website oder Idee.
            </p>
          </div>

          <InlinePrototypeForm />

          <p className="text-center text-xs text-muted-foreground mt-6">
            Sie erhalten keine Werbemails – nur Ihr persönliches Konzept.<br />
            Ihre Daten werden ausschließlich zur Erstellung Ihres Website-Konzepts verwendet und nach 90 Tagen gelöscht.
          </p>
        </div>
      </section>

      {/* Transition Before FAQ */}
      <section className="py-12 bg-gradient-to-b from-white to-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal direction="up">
            <p className="text-lg md:text-xl text-muted-foreground italic">
              Erleben Sie, wie klar und umsetzbar ein modernes Website-Konzept sein kann – kostenlos, datenbasiert und individuell.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Häufige Fragen
              </h2>
              <p className="text-lg text-muted-foreground">
                Noch Fragen? Hier sind die häufigsten Antworten auf einen Blick.
              </p>
            </div>
          </Reveal>

          <StaggerReveal stagger={0.1}>
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem 
                value="item-0"
                className="bg-primary/5 border border-gray-200 rounded-xl px-6 shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                  Ist das wirklich kostenlos?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  Ja – unser Website-Konzept und die Website-Analyse sind 100 % kostenlos und unverbindlich.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-1"
                className="bg-primary/5 border border-gray-200 rounded-xl px-6 shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                  Bieten Sie auch eine kostenlose Website-Analyse an?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  Ja – sie ist Teil des Konzepts und umfasst SEO-, Performance- und Conversion-Aspekte.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-2"
                className="bg-primary/5 border border-gray-200 rounded-xl px-6 shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                  Wie schnell erhalte ich mein Konzept?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  Innerhalb von 48 Stunden per E-Mail.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-3"
                className="bg-primary/5 border border-gray-200 rounded-xl px-6 shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                  Was, wenn mir der Prototyp nicht gefällt?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  Kein Problem – Sie gehen keine Verpflichtung ein.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem 
                value="item-4"
                className="bg-primary/5 border border-gray-200 rounded-xl px-6 shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                  Kann ich mein Konzept später weiterverwenden?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  Ja – das Konzept bleibt 30 Tage online und kann frei verwendet oder an Ihr Team weitergegeben werden.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem 
                value="item-5"
                className="bg-primary/5 border border-gray-200 rounded-xl px-6 shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                  Warum erstellt ihr nur 1-2 Konzepte pro Woche?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  Weil wir jedes Konzept individuell und mit höchster Sorgfalt erstellen. 
                  Keine Vorlagen, keine Massenabfertigung. Dafür braucht es Zeit, Analyse und strategisches Denken. 
                  Das unterscheidet uns von Agenturen, die 10 Konzepte pro Woche versprechen – aber keines wirklich durchdacht ist.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </StaggerReveal>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-primary/5 w-full overflow-x-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <Reveal direction="up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-10 break-words px-2">
              Bereit, Ihre Website-Idee in ein konkretes Konzept zu verwandeln?
            </h2>
          </Reveal>
          
          <Reveal delay={0.2} direction="up">
            <div className="flex justify-center px-2 w-full">
              <Button 
                onClick={scrollToForm}
                variant="primary"
                size="xl"
                className="h-16 px-8 sm:px-12 text-base sm:text-lg w-full sm:w-auto max-w-full hover:scale-105 active:scale-95 transition-all animate-pulse"
              >
                Jetzt kostenloses Konzept erhalten
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.3} direction="up">
            <p className="text-base sm:text-lg text-muted-foreground mt-8 break-words px-2">
              Ihr persönliches Konzept in 48 Stunden – kostenlos und ohne Risiko.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SEO Footer */}
      <footer className="py-16 bg-white w-full overflow-x-hidden border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <Reveal direction="up">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Website-Analyse, Konzept und Optimierung – alles aus einer Hand
              </h2>
              <p className="text-base text-muted-foreground mb-6">
                Mit ooliv erhalten Sie eine ganzheitliche Lösung für Website-Optimierung, Conversion-Optimierung und Website-Analyse.
              </p>
              <p className="text-sm text-muted-foreground mb-8">
                Wir entwickeln datenbasierte Relaunch-Konzepte, verbessern die Benutzerführung, führen technische Website-Audits durch und steigern Ihre Performance.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2} direction="up">
            <div className="bg-primary/5 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold text-foreground mb-4 text-center">
                Unsere Leistungen umfassen:
              </h3>
              <ul className="grid md:grid-cols-2 gap-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Website-Audit & SEO-Analyse</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Website-Konzept & Relaunch-Planung</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Conversion-Optimierung & UX-Design</span>
                </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Technische Website-Performance-Analyse</span>
              </li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.3} direction="up">
            <div className="text-center pt-6 border-t border-gray-200">
              <p className="text-sm text-foreground mb-2">
                <strong>200+</strong> erfolgreiche Projekte • <strong>ooliv Werbeagentur Mainz</strong>
              </p>
              <p className="text-xs text-muted-foreground">
                www.ooliv.de • 06131 – 63 67 801
              </p>
            </div>
          </Reveal>
        </div>
      </footer>
    </div>
  );
};

export default WebsiteKonzept;
