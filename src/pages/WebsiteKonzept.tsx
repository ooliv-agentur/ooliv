import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import InlinePrototypeForm from '@/components/website-konzept/InlinePrototypeForm';
import AnimatedPrototypePreview from '@/components/website-konzept/AnimatedPrototypePreview';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';
import AnimatedCounter from '@/components/animations/AnimatedCounter';
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
    <div className="overflow-x-hidden w-full">
      <Helmet>
        <title>Kostenloses Website-Konzept in 48 h | ooliv Werbeagentur Mainz</title>
        <meta name="description" content="Erhalten Sie Ihr individuelles Website-Konzept innerhalb von 48 Stunden – kostenlos, unverbindlich und strategisch durchdacht." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://ooliv.de/website-konzept" />
      </Helmet>

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
      <section className="min-h-screen flex items-center bg-primary/5 py-20 overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl mx-auto text-center w-full">
            <div>
              <Reveal delay={0.2} direction="up" distance={30}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight px-2">
                  Kostenloses Website-Konzept<br />in nur 48 Stunden
                </h1>
              </Reveal>

              <Reveal delay={0.4} direction="up" distance={30}>
                <p className="text-xl sm:text-2xl text-muted-foreground mb-16 max-w-[95%] sm:max-w-[85%] md:max-w-[65%] mx-auto px-2">
                  Erhalten Sie in 48 Stunden ein strategisches Website-Konzept – kostenlos, individuell und auf Ihr Unternehmen zugeschnitten.
                </p>
              </Reveal>
              
              <StaggerReveal stagger={0.1} delay={0.6}>
                <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-6 px-2">
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-semibold text-foreground">100 % kostenlos</span>
                  </div>
                  <span className="text-lg text-muted-foreground">•</span>
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-semibold text-foreground">Antwort in 48 h</span>
                  </div>
                  <span className="text-lg text-muted-foreground">•</span>
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-semibold text-foreground">Keine Verpflichtung</span>
                  </div>
                </div>
              </StaggerReveal>

              <Reveal delay={0.9} direction="up" distance={20}>
                <p className="text-base text-muted-foreground mb-10 px-2">
                  Keine Agenturpflicht, keine versteckten Kosten – nur klare Ergebnisse.
                </p>
              </Reveal>

              <Reveal delay={1.1} direction="up" distance={20}>
                <div className="px-4 w-full flex justify-center">
                  <Button 
                    onClick={scrollToForm}
                    variant="primary"
                    size="xl"
                    className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95 w-full sm:w-auto max-w-full"
                  >
                    Jetzt kostenloses Konzept erhalten
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Block */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <p className="text-center text-lg text-muted-foreground mb-8">
              Unser Ansatz: Schnell, klar und ohne Verpflichtung.
            </p>
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
              Über <AnimatedCounter end={200} suffix="+" className="font-bold text-foreground" /> Unternehmen haben mit ooliv bereits erfolgreiche Website-Projekte umgesetzt.
            </p>
          </Reveal>
          
          {/* Trust Logos */}
          <Reveal delay={0.5} direction="up">
            <div className="text-center">
              <p className="text-sm font-semibold text-muted-foreground mb-6">
                Unternehmen, die unser Konzept genutzt haben
              </p>
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
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Was Sie erhalten: Ein individuelles Website-Konzept mit klarer Struktur und konkreten Empfehlungen.
              </h2>
              <p className="text-lg text-muted-foreground">
                Wir zeigen Ihnen, welche Struktur, Inhalte und Nutzerwege Ihre Website wirklich braucht, um Anfragen zu steigern.
              </p>
            </div>
          </Reveal>

          <StaggerReveal stagger={0.2} className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold text-foreground mb-3">
                Strategische Seitenstruktur
              </h3>
              <p className="text-muted-foreground">
                Klar aufgebaut für Ihre Zielgruppe
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-md border-2 border-primary/20 ring-2 ring-primary/10 hover:shadow-lg hover:scale-105 transition-all">
              <h3 className="text-xl font-bold text-foreground mb-3">
                Optimierte Benutzerführung
              </h3>
              <p className="text-muted-foreground">
                Mehr Anfragen durch klare Nutzerwege
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold text-foreground mb-3">
                Konkrete Inhaltsempfehlungen
              </h3>
              <p className="text-muted-foreground">
                Texte, die Ihre Stärken sichtbar machen
              </p>
            </div>
          </StaggerReveal>

          <Reveal delay={0.3} direction="up">
            <p className="text-center text-lg text-muted-foreground mb-4">
              So wissen Sie genau, wie Ihre neue Website inhaltlich und strukturell aufgebaut sein sollte.
            </p>
          </Reveal>

          <Reveal delay={0.4} direction="up">
            <p className="text-center text-base text-muted-foreground mb-8">
              Optional inklusive: SEO-Analyse Ihrer bestehenden Website.
            </p>
          </Reveal>

          <Reveal delay={0.5} direction="up">
            <div className="text-center">
              <Button 
                onClick={scrollToForm}
                variant="primary"
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all"
              >
                Jetzt kostenloses Konzept erhalten
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Example Prototype */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
                So sieht Ihr kostenloser Prototyp aus
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.2} direction="up">
            <div className="max-w-5xl mx-auto mb-10">
              <AnimatedPrototypePreview />
            </div>
          </Reveal>

          <Reveal delay={0.3} direction="up">
            <p className="text-center text-lg text-muted-foreground mb-6">
              Ihr Konzept zeigt Ihnen, wie Ihre neue Website wirkt, aufgebaut ist und welche Inhalte überzeugen.
            </p>
            <p className="text-center text-sm text-muted-foreground">
              Bereitgestellt auf einer eigenen Test-Domain (z. B. musterfirma.projekte-ooliv.de).
            </p>
          </Reveal>
        </div>
      </section>

      {/* Lead Form Section */}
      <section id="lead-form-section" className="py-20 bg-primary/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Fordern Sie jetzt Ihr kostenloses Website-Konzept an – in 48 Stunden fertig und völlig unverbindlich.
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Keine langen Abstimmungen – wir beginnen sofort mit der Analyse Ihrer Website oder Idee.
            </p>
          </div>

          <InlinePrototypeForm />

          <p className="text-center text-xs text-muted-foreground mt-6">
            Ihre Daten werden sicher übertragen und nach 90 Tagen gelöscht.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
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
                  Ja, völlig kostenlos – Sie zahlen nichts und gehen keine Verpflichtung ein.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-1"
                className="bg-primary/5 border border-gray-200 rounded-xl px-6 shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                  Muss ich danach etwas kaufen?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  Nein, Sie entscheiden frei, ob Sie nach dem Konzept weitermachen möchten.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-2"
                className="bg-primary/5 border border-gray-200 rounded-xl px-6 shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                  Wie lange dauert es?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  Ihr individuelles Konzept erhalten Sie innerhalb von 48 Stunden.
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
                  Kein Problem – Sie können ihn kostenlos behalten und als Inspiration nutzen.
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

      {/* Minimal Footer */}
      <footer className="py-12 bg-primary/5 w-full overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <p className="text-sm sm:text-base text-foreground mb-2 break-words px-2">
            ooliv Werbeagentur Mainz<br className="sm:hidden" /> • www.ooliv.de<br className="sm:hidden" /> • 06131 – 63 67 801
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground break-words px-2">
            200+ erfolgreiche Projekte umgesetzt – jetzt kostenloses Konzept anfordern
          </p>
        </div>
      </footer>
    </div>
  );
};

export default WebsiteKonzept;
