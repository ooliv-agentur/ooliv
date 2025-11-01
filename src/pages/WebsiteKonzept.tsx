import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import InlinePrototypeForm from '@/components/website-konzept/InlinePrototypeForm';
import AnimatedPrototypePreview from '@/components/website-konzept/AnimatedPrototypePreview';
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
    <>
      <Helmet>
        <title>Kostenloses Website-Konzept in 48 h | ooliv Werbeagentur Mainz</title>
        <meta name="description" content="Erhalten Sie Ihr individuelles Website-Konzept innerhalb von 48 Stunden – kostenlos, unverbindlich und strategisch durchdacht." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://ooliv.de/website-konzept" />
      </Helmet>

      {/* Static Logo */}
      <div className="fixed top-6 left-6 z-50">
        <img 
          src="/ooliv_logo_2025.svg?v=2" 
          alt="ooliv logo" 
          className="h-8 md:h-10"
        />
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center bg-primary/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Kostenloses Website-Konzept<br />in nur 48 Stunden
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground mb-16 max-w-[65%] mx-auto">
                Erhalten Sie in nur 48 Stunden ein vollständiges, strategisches Website-Konzept – kostenlos,<br />
                individuell und perfekt auf Ihr Unternehmen abgestimmt.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 mb-6">
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

              <p className="text-base text-muted-foreground mb-10">
                Keine Agenturpflicht, keine versteckten Kosten – nur klare Ergebnisse.
              </p>

              <Button 
                onClick={scrollToForm}
                variant="primary"
                size="xl"
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold shadow-lg hover:shadow-xl transition-all"
              >
                Jetzt kostenloses Konzept erhalten
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Block */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-lg text-muted-foreground mb-8">
            Unser Ansatz: Schnell, klar und ohne Verpflichtung.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-primary/5 border-2 border-primary/10 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-foreground mb-3">
                100 % kostenlos – kein Abo, keine versteckten Kosten
              </h3>
            </div>
            <div className="bg-primary/5 border-2 border-primary/10 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-foreground mb-3">
                Kein Risiko – Sie entscheiden erst nach dem Konzept
              </h3>
            </div>
            <div className="bg-primary/5 border-2 border-primary/10 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-foreground mb-3">
                Antwort in 48 Stunden – kein Gespräch nötig
              </h3>
            </div>
          </div>
          <p className="text-center text-lg text-muted-foreground mt-16 mb-8">
            Über 200 Unternehmen haben mit ooliv bereits erfolgreiche Website-Projekte umgesetzt.
          </p>
          
          {/* Trust Logos */}
          <div className="text-center">
            <p className="text-sm font-semibold text-muted-foreground mb-6">
              Unternehmen, die unser Konzept genutzt haben
            </p>
            <div className="flex items-center justify-center gap-8 flex-wrap">
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
            </div>
          </div>
        </div>
      </section>

      {/* Was Sie erhalten */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Was Sie erhalten: Ein individuelles Website-Konzept mit klarer Struktur und konkreten Empfehlungen.
            </h2>
            <p className="text-lg text-muted-foreground">
              Wir zeigen Ihnen, welche Struktur, Inhalte und Nutzerwege Ihre Website wirklich braucht, um Anfragen zu steigern.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-foreground mb-3">
                Strategische Seitenstruktur
              </h3>
              <p className="text-muted-foreground">
                Klar aufgebaut für Ihre Zielgruppe
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-md border-2 border-primary/20 ring-2 ring-primary/10">
              <h3 className="text-xl font-bold text-foreground mb-3">
                Optimierte Benutzerführung
              </h3>
              <p className="text-muted-foreground">
                Mehr Anfragen durch klare Nutzerwege
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-foreground mb-3">
                Konkrete Inhaltsempfehlungen
              </h3>
              <p className="text-muted-foreground">
                Texte, die Ihre Stärken sichtbar machen
              </p>
            </div>
          </div>

          <p className="text-center text-lg text-muted-foreground mb-4">
            So wissen Sie genau, wie Ihre neue Website aufgebaut und inhaltlich gestaltet sein sollte.
          </p>

          <p className="text-center text-base text-muted-foreground mb-8">
            Optional inklusive: SEO-Analyse Ihrer bestehenden Website.
          </p>

          <div className="text-center">
            <Button 
              onClick={scrollToForm}
              variant="primary"
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold shadow-lg hover:shadow-xl transition-all"
            >
              Jetzt kostenloses Konzept erhalten
            </Button>
          </div>
        </div>
      </section>

      {/* Example Prototype */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
              So sieht Ihr kostenloser Prototyp aus
            </h2>
          </div>

          <div className="max-w-5xl mx-auto mb-10">
            <AnimatedPrototypePreview />
          </div>

          <p className="text-center text-lg text-muted-foreground mb-6">
            Ihr Konzept zeigt Ihnen, wie Ihre neue Website wirkt, aufgebaut ist und welche Inhalte überzeugen.
          </p>
          <p className="text-center text-sm text-muted-foreground">
            Bereitgestellt auf einer eigenen Test-Domain (z. B. musterfirma.projekte-ooliv.de).
          </p>
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
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Häufige Fragen
            </h2>
            <p className="text-lg text-muted-foreground">
              Noch Fragen? Hier sind die häufigsten Antworten auf einen Blick.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem 
              value="item-0"
              className="bg-primary/5 border border-gray-200 rounded-xl px-6 shadow-sm hover:shadow-md transition-shadow"
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
              className="bg-primary/5 border border-gray-200 rounded-xl px-6 shadow-sm hover:shadow-md transition-shadow"
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
              className="bg-primary/5 border border-gray-200 rounded-xl px-6 shadow-sm hover:shadow-md transition-shadow"
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
              className="bg-primary/5 border border-gray-200 rounded-xl px-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                Was, wenn mir der Prototyp nicht gefällt?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                Kein Problem – Sie können ihn kostenlos behalten und als Inspiration nutzen.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-10">
            Bereit, Ihre Website-Idee in ein konkretes Konzept zu verwandeln?
          </h2>
          
          <Button 
            onClick={scrollToForm}
            variant="primary"
            size="xl"
            className="h-16 px-12 text-lg"
          >
            Jetzt kostenloses Konzept erhalten
          </Button>

          <p className="text-lg text-muted-foreground mt-8">
            Ihr persönliches Konzept in 48 Stunden – kostenlos und ohne Risiko.
          </p>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-12 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-base text-foreground mb-2">
            ooliv Werbeagentur Mainz • www.ooliv.de • 06131 – 63 67 801
          </p>
          <p className="text-sm text-muted-foreground">
            200+ erfolgreiche Projekte umgesetzt – kostenloses Konzept jetzt anfordern.
          </p>
        </div>
      </footer>
    </>
  );
};

export default WebsiteKonzept;
