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

      {/* Hero Section */}
      <section className="min-h-screen flex items-center bg-primary/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Kostenloses Website-Konzept in 48 h
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground mb-4">
                Klarer Plan für Aufbau, Inhalte und Nutzerführung – ohne Verpflichtung.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Sie erhalten innerhalb von 48 Stunden ein vollständiges, strategisches Website-Konzept – kostenlos und individuell.
              </p>
              
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span className="text-lg font-semibold text-foreground">100 % kostenlos</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span className="text-lg font-semibold text-foreground">Antwort in 48 h</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span className="text-lg font-semibold text-foreground">Keine Verpflichtung</span>
                </div>
              </div>

              <Button 
                onClick={scrollToForm}
                variant="primary"
                size="xl"
              >
                Jetzt kostenloses Konzept sichern
              </Button>
            </div>

            <div className="relative h-[600px]">
              <AnimatedPrototypePreview />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Block */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-foreground mb-3">
                100 % kostenlos – kein Abo, keine versteckten Kosten
              </h3>
            </div>
            <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-foreground mb-3">
                Kein Risiko – Sie entscheiden erst nach dem Konzept
              </h3>
            </div>
            <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-foreground mb-3">
                Antwort in 48 Stunden – kein Gespräch nötig
              </h3>
            </div>
          </div>
          <p className="text-center text-lg text-muted-foreground mt-12">
            Mehr als 200 Unternehmen haben bereits von unserem kostenlosen Website-Konzept profitiert.
          </p>
        </div>
      </section>

      {/* Was Sie erhalten */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Was Sie erhalten
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Ihr individuelles Website-Konzept umfasst:
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
            <div className="bg-white rounded-2xl p-8 shadow-sm">
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

          <p className="text-center text-lg text-muted-foreground mb-8">
            Optional inklusive: SEO-Analyse Ihrer bestehenden Website.
          </p>

          <div className="text-center">
            <Button 
              onClick={scrollToForm}
              variant="primary"
              size="lg"
            >
              Jetzt kostenloses Konzept sichern
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

          <div className="max-w-4xl mx-auto mb-8">
            <div className="aspect-video bg-gray-200 rounded-2xl flex items-center justify-center">
              <p className="text-gray-400">Placeholder für Screenshot</p>
            </div>
          </div>

          <p className="text-center text-lg text-muted-foreground mb-4">
            Klickbarer Website-Prototyp mit echten Texten, responsiv und strukturiert.
          </p>
          <p className="text-center text-lg text-muted-foreground mb-4">
            Ihr Konzept zeigt Ihnen genau, wie Ihre neue Website wirken und strukturiert sein sollte.
          </p>
          <p className="text-center text-sm text-muted-foreground">
            Bereitgestellt auf einer eigenen Test-Domain (z. B. musterfirma.projekte-ooliv.de).
          </p>
        </div>
      </section>

      {/* Lead Form Section */}
      <section id="lead-form-section" className="py-20 bg-primary/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Fordern Sie jetzt Ihr kostenloses Website-Konzept an
            </h2>
            <p className="text-xl text-muted-foreground">
              In 30 Sekunden ausgefüllt – Antwort in 48 h.
            </p>
          </div>

          <InlinePrototypeForm />

          <p className="text-center text-sm text-muted-foreground mt-6">
            Ihre Daten werden sicher übertragen und nach 90 Tagen gelöscht.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Häufige Fragen
            </h2>
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
                Ja, Sie zahlen nichts – das Konzept ist unverbindlich und kostenfrei.
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
                Nein, Sie entscheiden erst nach dem Konzept, ob Sie weitermachen möchten.
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
                Kein Problem – Sie können ihn kostenlos behalten.
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
          >
            Jetzt kostenloses Konzept sichern
          </Button>

          <p className="text-lg text-muted-foreground mt-8">
            100 % kostenlos • Antwort in 48 h • Keine Verpflichtung
          </p>
        </div>
      </section>
    </>
  );
};

export default WebsiteKonzept;
