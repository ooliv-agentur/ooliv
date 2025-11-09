import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import InlinePrototypeForm from '@/components/website-konzept/InlinePrototypeForm';
import AnimatedPrototypePreview from '@/components/website-konzept/AnimatedPrototypePreview';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';

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

      {/* Hero Section - Clean Minimal Style */}
      <section className="min-h-screen flex items-center bg-gradient-to-b from-white to-gray-50 py-32 overflow-x-hidden relative">
        <div className="max-w-5xl mx-auto px-8 w-full relative z-10">
          <div className="text-center w-full">
            <Reveal delay={0.1} direction="up" distance={20}>
              <p className="text-base text-gray-600 mb-6">
                Für Unternehmen mit bestehenden Websites.
              </p>
            </Reveal>
            
            <Reveal delay={0.2} direction="up" distance={30}>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Kostenloses Website-Konzept in 48 Stunden – individuell, datenbasiert, unverbindlich
              </h1>
            </Reveal>

            <Reveal delay={0.3} direction="up" distance={30}>
              <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                Professionelles Website-Konzept im Wert von 1.500 € – komplett kostenlos in 48 Stunden. Wir gehen in Vorleistung und beweisen, was wir können.
              </p>
            </Reveal>
            
            <Reveal delay={0.4} direction="up" distance={20}>
              <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
                <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full shadow-sm border border-gray-100">
                  <span style={{color: 'hsl(var(--turquoise))'}} className="font-bold">★★★★★</span>
                  <span className="text-sm font-semibold text-gray-900">4.9/5 Google</span>
                  <span className="text-xs text-gray-500">(47 Bewertungen)</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full shadow-sm border border-gray-100">
                  <span className="text-sm font-semibold text-gray-900">🏆 Top 3 Digitalagentur</span>
                  <span className="text-xs text-gray-500">Rhein-Main (Sortlist)</span>
                </div>
              </div>
            </Reveal>
            
            <StaggerReveal stagger={0.1} delay={0.5}>
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5" style={{color: 'hsl(var(--turquoise))'}} />
                  <span className="text-lg font-semibold text-gray-900">100 % kostenlos</span>
                </div>
                <span className="text-lg text-gray-400">•</span>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" style={{color: 'hsl(var(--turquoise))'}} />
                  <span className="text-lg font-semibold text-gray-900">Antwort in 48 h</span>
                </div>
                <span className="text-lg text-gray-400">•</span>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5" style={{color: 'hsl(var(--turquoise))'}} />
                  <span className="text-lg font-semibold text-gray-900">Keine Verpflichtung</span>
                </div>
              </div>
            </StaggerReveal>

            <Reveal delay={0.6} direction="up" distance={20}>
              <p className="text-base text-gray-600 mb-12 leading-relaxed">
                Keine Agenturpflicht, keine versteckten Kosten – nur klare Ergebnisse für Ihre Website-Optimierung und Conversion-Optimierung.
              </p>
            </Reveal>

            <Reveal delay={0.7} direction="up" distance={20}>
              <div className="mb-8">
                <Button 
                  onClick={scrollToForm}
                  size="xl"
                  style={{
                    backgroundColor: 'hsl(var(--turquoise))',
                    color: 'white'
                  }}
                  className="font-semibold px-10 py-5 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'hsl(var(--turquoise-dark))'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'hsl(var(--turquoise))'}
                >
                  Jetzt kostenlos sichern →
                </Button>
              </div>
            </Reveal>
            
            <Reveal delay={0.8} direction="up" distance={20}>
              <p className="text-sm text-gray-500">
                ⚠️ Nur 1 Slot in KW 45 verfügbar
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Vorleistungs-Section - Clean Minimal Style */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <Reveal direction="up">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-8 py-4 rounded-2xl mb-8" style={{backgroundColor: 'hsla(var(--turquoise), 0.1)', color: 'hsl(var(--turquoise-dark))'}}>
                <span className="text-3xl font-bold">1.500 €</span>
                <span className="mx-4">→</span>
                <span className="text-3xl font-bold">0 €</span>
              </div>
              
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Wir gehen in Vorleistung – Sie gehen kein Risiko ein
              </h2>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Kein Verkaufsgespräch, keine versteckten Kosten. 
                Wir beweisen erst durch echte Arbeit, was wir können. 
                Dann entscheiden Sie.
              </p>
            </div>
          </Reveal>

          <StaggerReveal stagger={0.15} className="grid md:grid-cols-3 gap-12 mb-12">
            <div className="bg-white rounded-2xl p-10 shadow-soft hover:shadow-soft-lg transition-all">
              <div className="text-5xl font-bold mb-4" style={{color: 'hsl(var(--turquoise))'}}>1.500 €</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Echter Wert</h3>
              <ul className="text-sm text-gray-600 space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{color: 'hsl(var(--turquoise))'}} />
                  <span>Vollständige Website-Analyse</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{color: 'hsl(var(--turquoise))'}} />
                  <span>Strategisches Konzept</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{color: 'hsl(var(--turquoise))'}} />
                  <span>Klickbarer Prototyp</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{color: 'hsl(var(--turquoise))'}} />
                  <span>SEO & Performance-Check</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-10 shadow-soft hover:shadow-soft-lg transition-all">
              <div className="text-5xl font-bold mb-4" style={{color: 'hsl(var(--turquoise))'}}>0 €</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Ihre Investition</h3>
              <p className="text-gray-600 leading-relaxed">
                Komplett kostenlos. Keine Agenturpflicht, 
                kein Kleingedrucktes, keine Verpflichtung. 
                Sie entscheiden nach dem Ergebnis.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-10 shadow-soft hover:shadow-soft-lg transition-all">
              <div className="text-5xl font-bold mb-4" style={{color: 'hsl(var(--turquoise))'}}>48 h</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lieferzeit</h3>
              <p className="text-gray-600 leading-relaxed">
                Schnell, professionell, konkret. 
                Wir starten sofort nach Ihrer Anfrage – 
                ohne langes Vorgespräch.
              </p>
            </div>
          </StaggerReveal>

          <Reveal delay={0.3} direction="up">
            <div className="text-center p-6 rounded-xl max-w-3xl mx-auto" style={{backgroundColor: 'hsla(var(--turquoise), 0.05)', border: '1px solid hsla(var(--turquoise), 0.2)'}}>
              <p className="text-lg font-semibold text-gray-900">
                💡 Warum wir das tun? Wir sind überzeugt, dass unser Konzept Sie überzeugt. 
                Wir gehen in Vorleistung – Sie profitieren ohne Risiko.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3-Step Process Section - Clean Minimal Style */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8">
          <Reveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-4">
                In 3 Schritten zu Ihrem Website-Konzept
              </h2>
            </div>
          </Reveal>

          <StaggerReveal stagger={0.15} className="grid md:grid-cols-3 gap-12">
            <div className="bg-white rounded-2xl p-10 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all">
              <FileText className="w-12 h-12 mb-4" style={{color: 'hsl(var(--turquoise))'}} />
              <div className="text-4xl font-bold mb-4" style={{color: 'hsl(var(--turquoise))'}}>1</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Formular ausfüllen
              </h3>
              <p className="text-gray-600">
                Wir analysieren Ihre Website.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-10 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all">
              <Mail className="w-12 h-12 mb-4" style={{color: 'hsl(var(--turquoise))'}} />
              <div className="text-4xl font-bold mb-4" style={{color: 'hsl(var(--turquoise))'}}>2</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Konzept erhalten
              </h3>
              <p className="text-gray-600">
                In 48 Stunden per E-Mail.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-10 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all">
              <CheckCircle2 className="w-12 h-12 mb-4" style={{color: 'hsl(var(--turquoise))'}} />
              <div className="text-4xl font-bold mb-4" style={{color: 'hsl(var(--turquoise))'}}>3</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Sie entscheiden
              </h3>
              <p className="text-gray-600">
                Ohne Verpflichtung.
              </p>
            </div>
          </StaggerReveal>
        </div>
      </section>

      {/* Intro Block - Clean Minimal Style */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <Reveal direction="up">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
              Ihre Website bringt zu wenig Anfragen oder Leads?
            </h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              Wir analysieren und prüfen Ihre aktuelle Website – technisch, inhaltlich und strategisch – inklusive SEO-Analyse, Performance-Bewertung und Conversion-Check – und zeigen, wie Sie Ihre Website gezielt optimieren können.
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              Mit unserem kostenlosen Website-Audit und einer detaillierten Website-Analyse erhalten Sie konkrete Handlungsempfehlungen zur Optimierung Ihrer bestehenden Website – von der Seitenstruktur über Inhalte bis zur Conversion-Optimierung.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Trust Block - Clean Minimal Style */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8">
          <Reveal direction="up">
            <h2 className="text-center text-3xl font-bold text-gray-900 mb-12">
              Qualität statt Masse – Deshalb nur 1-2 Konzepte pro Woche
            </h2>
          </Reveal>

          <StaggerReveal stagger={0.15} className="grid md:grid-cols-3 gap-12">
            <div className="bg-white rounded-2xl p-10 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                100 % kostenlos – kein Abo, keine versteckten Kosten
              </h3>
            </div>
            <div className="bg-white rounded-2xl p-10 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Kein Risiko – Sie entscheiden erst nach dem Konzept
              </h3>
            </div>
            <div className="bg-white rounded-2xl p-10 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Antwort in 48 Stunden – kein Gespräch nötig
              </h3>
            </div>
          </StaggerReveal>

          <Reveal delay={0.3} direction="up">
            <p className="text-center text-lg text-gray-600 mt-16 mb-8 leading-relaxed">
              Wir erstellen nur 1-2 Konzepte pro Woche, um höchste Qualität zu garantieren. 
              <span className="font-bold text-gray-900"> Über 200 Unternehmen</span> haben bereits 
              mit ooliv erfolgreich ihre Website optimiert.
            </p>
          </Reveal>
          
          {/* Trust Logos */}
          <Reveal delay={0.5} direction="up">
            <div className="text-center">
              <h3 className="text-base font-bold text-gray-900 mb-6">
                Unternehmen, die unser Konzept genutzt haben:
              </h3>
              <StaggerReveal stagger={0.1} className="flex items-center justify-center gap-6 md:gap-8 flex-wrap">
                <div className="w-24 h-16 flex items-center justify-center grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all">
                  <img src="/lovable-uploads/37da8d9c-7991-413d-beba-789d86fe08c8.png" alt="KLAIBER" className="w-full h-full object-contain" />
                </div>
                <div className="w-24 h-16 flex items-center justify-center grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all">
                  <img src="/lovable-uploads/567e9c1f-f8db-451c-9eb4-3f5865307084.png" alt="COBUS Industries" className="w-full h-full object-contain" />
                </div>
                <div className="w-24 h-16 flex items-center justify-center grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all">
                  <img src="/lovable-uploads/a34a156e-10ca-4259-8444-af2e83402461.png" alt="SPEZ AG" className="w-full h-full object-contain" />
                </div>
                <div className="w-24 h-16 flex items-center justify-center grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all">
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

      {/* Example Prototype - Clean Minimal Style */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8">
          <Reveal direction="up">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                So sieht Ihr kostenloser Prototyp aus
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
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
            <p className="text-center text-lg text-gray-600 mb-4 leading-relaxed">
              Ihr Website-Prototyp zeigt, wie Ihre neue Website wirkt, aufgebaut ist und welche Inhalte überzeugen – inklusive klarer Seitenstruktur, Benutzerführung und Conversion-Pfade.
            </p>
            <p className="text-center text-base text-gray-600 mb-6 leading-relaxed">
              Bereitgestellt auf einer eigenen Test-Domain (z. B. musterfirma.projekte-ooliv.de).
            </p>
            <p className="text-center text-sm text-gray-600 leading-relaxed">
              Keine langen Abstimmungen – wir beginnen sofort mit der Analyse Ihrer Website oder Idee.
            </p>
          </Reveal>
        </div>
      </section>


      {/* Lead Form Section - Clean Minimal Style */}
      <section id="lead-form-section" className="py-32 bg-white">
        <div className="max-w-3xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Fordern Sie jetzt Ihr kostenloses Website-Konzept an – in 48 Stunden fertig und völlig unverbindlich
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Keine langen Abstimmungen – wir beginnen sofort mit der Analyse Ihrer Website oder Idee.
            </p>
          </div>

          <InlinePrototypeForm />

          <p className="text-center text-xs text-gray-500 mt-6">
            Sie erhalten keine Werbemails – nur Ihr persönliches Konzept.<br />
            Ihre Daten werden ausschließlich zur Erstellung Ihres Website-Konzepts verwendet und nach 90 Tagen gelöscht.
          </p>
        </div>
      </section>

      {/* Transition Before FAQ */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <Reveal direction="up">
            <p className="text-lg text-gray-600 italic leading-relaxed">
              Erleben Sie, wie klar und umsetzbar ein modernes Website-Konzept sein kann – kostenlos, datenbasiert und individuell.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FAQ Section - Clean Minimal Style */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-8">
          <Reveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-4">
                Häufige Fragen
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Noch Fragen? Hier sind die häufigsten Antworten auf einen Blick.
              </p>
            </div>
          </Reveal>

          <StaggerReveal stagger={0.1}>
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem 
                value="item-0"
                className="bg-white border border-gray-200 rounded-xl px-6 shadow-soft hover:shadow-soft-lg transition-all"
                style={{'--hover-border': 'hsl(var(--turquoise))' } as React.CSSProperties}
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900" style={{color: 'inherit'}}>
                  Ist das wirklich kostenlos?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pt-2">
                  Ja – unser Website-Konzept und die Website-Analyse sind 100 % kostenlos und unverbindlich.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-1"
                className="bg-white border border-gray-200 rounded-xl px-6 shadow-soft hover:shadow-soft-lg transition-all"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900">
                  Bieten Sie auch eine kostenlose Website-Analyse an?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pt-2">
                  Ja – sie ist Teil des Konzepts und umfasst SEO-, Performance- und Conversion-Aspekte.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-2"
                className="bg-white border border-gray-200 rounded-xl px-6 shadow-soft hover:shadow-soft-lg transition-all"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900">
                  Wie schnell erhalte ich mein Konzept?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pt-2">
                  Innerhalb von 48 Stunden per E-Mail.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-3"
                className="bg-white border border-gray-200 rounded-xl px-6 shadow-soft hover:shadow-soft-lg transition-all"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900">
                  Was, wenn mir der Prototyp nicht gefällt?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pt-2">
                  Kein Problem – Sie gehen keine Verpflichtung ein.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem 
                value="item-4"
                className="bg-white border border-gray-200 rounded-xl px-6 shadow-soft hover:shadow-soft-lg transition-all"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900">
                  Kann ich mein Konzept später weiterverwenden?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pt-2">
                  Ja – das Konzept bleibt 30 Tage online und kann frei verwendet oder an Ihr Team weitergegeben werden.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem 
                value="item-5"
                className="bg-white border border-gray-200 rounded-xl px-6 shadow-soft hover:shadow-soft-lg transition-all"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900">
                  Warum erstellt ihr nur 1-2 Konzepte pro Woche?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pt-2">
                  Weil wir jedes Konzept individuell und mit höchster Sorgfalt erstellen. 
                  Keine Vorlagen, keine Massenabfertigung. Dafür braucht es Zeit, Analyse und strategisches Denken. 
                  Das unterscheidet uns von Agenturen, die 10 Konzepte pro Woche versprechen – aber keines wirklich durchdacht ist.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </StaggerReveal>
        </div>
      </section>

      {/* Final CTA Section - Clean Minimal Style */}
      <section className="py-32 bg-white w-full overflow-x-hidden">
        <div className="max-w-4xl mx-auto px-8 text-center w-full">
          <Reveal direction="up">
            <h2 className="text-5xl font-bold text-gray-900 mb-12 break-words leading-tight">
              Bereit, Ihre Website-Idee in ein konkretes Konzept zu verwandeln?
            </h2>
          </Reveal>
          
          <Reveal delay={0.2} direction="up">
            <div className="flex justify-center w-full">
              <Button 
                onClick={scrollToForm}
                size="xl"
                style={{
                  backgroundColor: 'hsl(var(--turquoise))',
                  color: 'white'
                }}
                className="font-semibold px-12 py-5 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'hsl(var(--turquoise-dark))'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'hsl(var(--turquoise))'}
              >
                Jetzt kostenloses Konzept erhalten
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.3} direction="up">
            <p className="text-lg text-gray-600 mt-8 break-words leading-relaxed">
              Ihr persönliches Konzept in 48 Stunden – kostenlos und ohne Risiko.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SEO Footer - Clean Minimal Style */}
      <footer className="py-24 bg-gray-50 w-full overflow-x-hidden border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-8 w-full">
          <Reveal direction="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Website-Analyse, Konzept und Optimierung – alles aus einer Hand
              </h2>
              <p className="text-base text-gray-600 mb-6 leading-relaxed">
                Mit ooliv erhalten Sie eine ganzheitliche Lösung für Website-Optimierung, Conversion-Optimierung und Website-Analyse.
              </p>
              <p className="text-sm text-gray-600 mb-8 leading-relaxed">
                Wir entwickeln datenbasierte Relaunch-Konzepte, verbessern die Benutzerführung, führen technische Website-Audits durch und steigern Ihre Performance.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2} direction="up">
            <div className="bg-white rounded-xl p-8 mb-8 shadow-soft">
              <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">
                Unsere Leistungen umfassen:
              </h3>
              <ul className="grid md:grid-cols-2 gap-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{color: 'hsl(var(--turquoise))'}} />
                  <span>Website-Audit & SEO-Analyse</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{color: 'hsl(var(--turquoise))'}} />
                  <span>Website-Konzept & Relaunch-Planung</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{color: 'hsl(var(--turquoise))'}} />
                  <span>Conversion-Optimierung & UX-Design</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{color: 'hsl(var(--turquoise))'}} />
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
