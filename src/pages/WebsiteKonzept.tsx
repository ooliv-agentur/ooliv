import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import InlinePrototypeForm from '@/components/website-konzept/InlinePrototypeForm';
import AnimatedPrototypePreview from '@/components/website-konzept/AnimatedPrototypePreview';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';
import TurquoiseCard from '@/components/ui/TurquoiseCard';
import TurquoiseBadge from '@/components/ui/TurquoiseBadge';

import ScrollProgressBar from '@/components/journey/ScrollProgressBar';
import { Check, Clock, ShieldCheck, FileText, Mail, CheckCircle2, Layout, Users, Zap, Star, Award } from 'lucide-react';
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

      {/* Hero Section - Conversion Optimized */}
      <section className="min-h-screen flex items-center bg-gradient-to-b from-white to-gray-50 py-20 md:py-32 overflow-x-hidden relative">
        <div className="max-w-4xl mx-auto px-8 w-full relative z-10">
          <div className="text-center w-full">
            <Reveal delay={0.1} direction="up" distance={20}>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Ihre Website bringt keine Anfragen?<br />Wir zeigen Ihnen kostenlos, warum.
              </h1>
            </Reveal>

            <Reveal delay={0.2} direction="up" distance={30}>
              <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                Professionelles Website-Konzept in 48 Stunden – kostenlos, individuell, ohne Verpflichtung.
              </p>
            </Reveal>

            <Reveal delay={0.3} direction="up" distance={20}>
              <div className="mb-8">
                <Button 
                  onClick={scrollToForm}
                  size="xl"
                  className="bg-turquoise hover:bg-turquoise-hover text-white font-semibold px-12 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 text-lg"
                >
                  Jetzt kostenlose Analyse starten →
                </Button>
              </div>
            </Reveal>
            
            <Reveal delay={0.4} direction="up" distance={20}>
              <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-turquoise text-sm">★★★★★</span>
                  <span className="text-sm text-gray-700">4.9/5 Google</span>
                </div>
                <span className="text-gray-300">•</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-700">Top 3 Digitalagentur Rhein-Main</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Vorleistungs-Section - Simplified */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-8">
          <Reveal direction="up">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-6 py-3 rounded-2xl mb-6 bg-turquoise/10 text-turquoise-800">
                <span className="text-2xl font-bold">1.500 €</span>
                <span className="mx-3">→</span>
                <span className="text-2xl font-bold">0 €</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Wir gehen in Vorleistung – Sie gehen kein Risiko ein
              </h2>
              
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Kein Verkaufsgespräch, keine versteckten Kosten. Wir beweisen erst durch echte Arbeit, was wir können.
              </p>
            </div>
          </Reveal>

          <StaggerReveal stagger={0.15} className="grid md:grid-cols-3 gap-12 mb-12">
            <TurquoiseCard variant="large" number="1.500 €">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Echter Wert</h3>
              <ul className="text-sm text-gray-600 space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-turquoise" />
                  <span>Vollständige Website-Analyse</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-turquoise" />
                  <span>Strategisches Konzept</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-turquoise" />
                  <span>Klickbarer Prototyp</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-turquoise" />
                  <span>SEO & Performance-Check</span>
                </li>
              </ul>
            </TurquoiseCard>

            <TurquoiseCard variant="large" number="0 €">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Ihre Investition</h3>
              <p className="text-gray-600 leading-relaxed">
                Komplett kostenlos. Keine Agenturpflicht, 
                kein Kleingedrucktes, keine Verpflichtung. 
                Sie entscheiden nach dem Ergebnis.
              </p>
            </TurquoiseCard>

            <TurquoiseCard variant="large" number="48 h">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lieferzeit</h3>
              <p className="text-gray-600 leading-relaxed">
                Schnell, professionell, konkret. 
                Wir starten sofort nach Ihrer Anfrage – 
                ohne langes Vorgespräch.
              </p>
            </TurquoiseCard>
          </StaggerReveal>

          <Reveal delay={0.3} direction="up">
            <div className="text-center p-6 rounded-xl max-w-3xl mx-auto bg-turquoise/5 border border-turquoise/20">
              <p className="text-lg font-semibold text-gray-900">
                💡 Warum wir das tun? Wir sind überzeugt, dass unser Konzept Sie überzeugt. 
                Wir gehen in Vorleistung – Sie profitieren ohne Risiko.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3-Step Process Section - Simplified */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-8">
          <Reveal direction="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                In 3 Schritten zu Ihrem Website-Konzept
              </h2>
            </div>
          </Reveal>

          <StaggerReveal stagger={0.15} className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-turquoise/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-turquoise">1</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Formular ausfüllen</h3>
              <p className="text-gray-600 text-sm">Wir analysieren Ihre Website</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-turquoise/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-turquoise">2</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Konzept erhalten</h3>
              <p className="text-gray-600 text-sm">In 48 Stunden per E-Mail</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-turquoise/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-turquoise">3</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Sie entscheiden</h3>
              <p className="text-gray-600 text-sm">Ohne Verpflichtung</p>
            </div>
          </StaggerReveal>
        </div>
      </section>

      {/* Testimonial Section - NEW */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <Reveal direction="up">
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-100">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-turquoise/10 flex items-center justify-center">
                    <span className="text-3xl font-bold text-turquoise">MK</span>
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="text-turquoise mb-2">★★★★★</div>
                  <p className="text-lg text-gray-900 mb-4 leading-relaxed italic">
                    "Das Konzept war präzise, umsetzbar und hat uns sofort gezeigt, wo wir ansetzen müssen. In 3 Monaten haben wir 47% mehr Anfragen."
                  </p>
                  <p className="text-sm font-semibold text-gray-900">Michael Krause</p>
                  <p className="text-sm text-gray-600">Geschäftsführer, SPEZ AG</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Trust Block - Merged & Simplified */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-8">
          {/* Trust Logos - Moved Earlier */}
          <Reveal direction="up">
            <div className="text-center mb-12">
              <p className="text-sm text-gray-600 mb-4">Vertrauen von über 200 Unternehmen</p>
              <StaggerReveal stagger={0.1} className="flex items-center justify-center gap-6 md:gap-8 flex-wrap">
                <div className="w-20 h-14 flex items-center justify-center grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all">
                  <img src="/lovable-uploads/37da8d9c-7991-413d-beba-789d86fe08c8.png" alt="KLAIBER" className="w-full h-full object-contain" />
                </div>
                <div className="w-20 h-14 flex items-center justify-center grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all">
                  <img src="/lovable-uploads/567e9c1f-f8db-451c-9eb4-3f5865307084.png" alt="COBUS Industries" className="w-full h-full object-contain" />
                </div>
                <div className="w-20 h-14 flex items-center justify-center grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all">
                  <img src="/lovable-uploads/a34a156e-10ca-4259-8444-af2e83402461.png" alt="SPEZ AG" className="w-full h-full object-contain" />
                </div>
                <div className="w-20 h-14 flex items-center justify-center grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all">
                  <img src="/lovable-uploads/0ac94ae2-4b93-4958-bbb4-76df1bd8c6d6.png" alt="IconPro GmbH" className="w-full h-full object-contain" />
                </div>
              </StaggerReveal>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto text-center">
              <div>
                <div className="text-3xl font-bold text-turquoise mb-2">200+</div>
                <p className="text-sm text-gray-600">Erfolgreiche Projekte</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-turquoise mb-2">48h</div>
                <p className="text-sm text-gray-600">Durchschnittliche Lieferzeit</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-turquoise mb-2">47%</div>
                <p className="text-sm text-gray-600">Mehr Anfragen ∅ nach 3 Monaten</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Was Sie erhalten - Simplified */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-8">
          <Reveal direction="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Was Sie erhalten
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Ein individuelles Website-Konzept mit klarer Struktur, SEO-Analyse und konkreten Empfehlungen.
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
              <div className="flex justify-center mb-4">
                <TurquoiseBadge variant="soft" icon={CheckCircle2} size="lg">
                  Optional inklusive
                </TurquoiseBadge>
              </div>
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
                size="lg"
                className="bg-turquoise hover:bg-turquoise-hover text-white font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
              >
                Jetzt kostenloses Konzept sichern →
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Example Prototype - Simplified */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-8">
          <Reveal direction="up">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                So sieht Ihr kostenloser Prototyp aus
              </h2>
              <p className="text-base text-gray-600">
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
            <p className="text-center text-base text-gray-600 leading-relaxed">
              Ihr Website-Prototyp zeigt, wie Ihre neue Website wirkt und welche Inhalte überzeugen – inklusive Seitenstruktur und Conversion-Pfade.
            </p>
          </Reveal>
        </div>
      </section>


      {/* Lead Form Section - Simplified */}
      <section id="lead-form-section" className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
              Jetzt kostenloses Website-Konzept anfordern
            </h2>
            <p className="text-base text-gray-600 leading-relaxed">
              In 48 Stunden fertig – völlig unverbindlich.
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

      {/* FAQ Section - Simplified */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-8">
          <Reveal direction="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Häufige Fragen
              </h2>
            </div>
          </Reveal>

          <StaggerReveal stagger={0.1}>
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem 
                value="item-0"
                className="bg-white border border-gray-200 rounded-xl px-6 shadow-soft hover:shadow-soft-lg hover:border-turquoise transition-all"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900">
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

      {/* Final CTA Section - Simplified */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <Reveal direction="up">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Bereit für Ihr kostenloses Website-Konzept?
            </h2>
          </Reveal>
          
          <Reveal delay={0.2} direction="up">
            <Button 
              onClick={scrollToForm}
              size="xl"
              className="bg-turquoise hover:bg-turquoise-hover text-white font-semibold px-12 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
            >
              Jetzt kostenlos starten →
            </Button>
          </Reveal>

          <Reveal delay={0.3} direction="up">
            <p className="text-sm text-gray-600 mt-6">
              48 Stunden Lieferzeit • 100% kostenlos • Keine Verpflichtung
            </p>
          </Reveal>
        </div>
      </section>

      {/* SEO Footer - Minimized */}
      <footer className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-8">
          <Reveal direction="up">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Website-Analyse, Konzept und Optimierung
              </h2>
              <p className="text-sm text-gray-600">
                Ganzheitliche Lösung für Website-Optimierung und Conversion-Steigerung.
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
                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-turquoise" />
                  <span>Website-Audit & SEO-Analyse</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-turquoise" />
                  <span>Website-Konzept & Relaunch-Planung</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-turquoise" />
                  <span>Conversion-Optimierung & UX-Design</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-turquoise" />
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
