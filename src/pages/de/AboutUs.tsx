
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Link } from 'react-router-dom';
import PageHero from '@/components/PageHero';
import TeamSection from '@/components/TeamSection';
import AboutCompactFAQ from '@/components/AboutCompactFAQ';
import { Users, Target, Briefcase, Globe, Award, CheckCircle, Sparkles, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import SEOCtaDE from '@/components/seo/SEOCtaDE';

const GermanAboutUs = () => {
  const { setLanguage } = useLanguage();
  
  // Set language to German when this page is loaded
  useEffect(() => {
    setLanguage('de');
  }, [setLanguage]);

  return (
    <PageLayout>
      <PageHero 
        badge="Über ooliv"
        title="Marketing Agentur Mainz"
        subtitle="Wir verbinden Kreativität, Strategie und Technologie, um Websites zu erstellen, die Unternehmenswachstum fördern. Sie arbeiten immer direkt mit unserem Gründer zusammen."
        primaryCta={{
          text: "Projekt starten",
          link: "/de/kontakt"
        }}
        secondaryCta={{
          text: "Referenzen ansehen",
          link: "/case-studies"
        }}
      />

      {/* Who we are and how we work Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-brand-heading">Mehr als eine Webagentur – Ihr strategischer Sparringspartner</h2>
            <p className="text-lg mb-10 text-brand-text">
              Kreativ, technisch präzise und partnerschaftlich. Ohne Hierarchien, ohne Buzzwords – mit echtem Ergebnisfokus.
            </p>
            
            <div className="bg-brand-background rounded-xl p-8 shadow-sm mb-10">
              <ul className="space-y-4 text-left">
                {[
                  'Gegründet 2008 von Uli Schönleber',
                  'Standort Mainz, Kunden europaweit',
                  'Inhabergeführtes Studio mit fokussiertem Expertenteam',
                  'Kommunikation direkt mit dem Gründer – von Start bis Go-Live',
                  'Klarer Projektablauf über Basecamp (Feedback, Aufgaben, Dateien an einem Ort)'
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="h-8 w-8 flex items-center justify-center bg-brand-primary/10 rounded-full mr-3 flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-brand-primary" />
                    </span>
                    <span className="text-brand-text">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <Button size="lg" className="group bg-brand-primary hover:bg-brand-primary/90 text-white" asChild>
              <Link to="/de/kontakt">
                Lassen Sie uns zusammenarbeiten – schnell, direkt und strategisch
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-brand-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-brand-heading">Wo Leidenschaft auf Leistung trifft</h2>
            <div className="flex justify-center mb-6">
              <div className="h-16 w-16 bg-brand-primary/10 rounded-full flex items-center justify-center">
                <Globe className="h-8 w-8 text-brand-primary" />
              </div>
            </div>
            <p className="text-lg mb-6 text-brand-text">
              Was mit einer mutigen Gelegenheit begann, wurde zu einer langfristigen Erfolgsgeschichte. Im Jahr 2008, als eine führende Agentur in Mainz ihre Türen schloss, fragten mehrere treue Kunden:
            </p>
            <p className="text-xl italic mb-6 text-brand-heading">
              "Können Sie mit uns weitermachen?"
            </p>
            <p className="text-lg mb-6 text-brand-text">
              Das war der Anfang von ooliv.
            </p>
            <p className="text-lg text-brand-text">
              Seitdem haben wir uns zu einer Remote-First-Agentur mit einem hochqualifizierten, überregional verteilten Team entwickelt – vereint durch eine Denkweise:
            </p>
            <p className="text-xl font-bold mt-4 text-brand-heading">
              Jede Website sollte echten Unternehmenswert schaffen.
            </p>
          </div>
        </div>
      </section>

      {/* Why We Stay Small Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-heading">Warum wir bewusst klein bleiben</h2>
            <div className="bg-brand-background rounded-xl p-8 shadow-sm">
              <p className="text-lg mb-6 text-brand-text">
                Bei ooliv arbeitet jeder Kunde direkt mit dem Gründer und CEO zusammen. Im Hintergrund deckt unser kompaktes Team alle Bereiche von Strategie, Design, Content und Entwicklung ab.
              </p>
              <p className="text-lg mb-6 text-brand-text">
                Diese Struktur bedeutet weniger Reibungsverluste, schnelleren Fortschritt und bessere Ergebnisse – geliefert von Menschen, die Ihre Website tatsächlich bauen.
              </p>
              <blockquote className="bg-white p-6 rounded-xl shadow-sm text-xl italic text-center border-l-4 border-brand-primary">
                "Ein Ansprechpartner. Ein fokussiertes Team. Ein gemeinsames Ziel."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* What Drives Us Section */}
      <section className="py-20 bg-brand-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-brand-heading">Ein digitaler Partner, nicht nur ein Dienstleister</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <AspectRatio ratio={4/3}>
                <img 
                  src="/lovable-uploads/b98c599a-289c-4ec5-962b-660f36e16d48.png" 
                  alt="Büroumgebung" 
                  className="h-full w-full object-cover"
                />
              </AspectRatio>
            </div>
            <div>
              <ul className="space-y-6">
                {[
                  'Wir hören zu, bevor wir bauen',
                  'Wir vereinfachen Komplexität',
                  'Wir verbinden Design mit Strategie',
                  'Wir nutzen Technologie, ohne den menschlichen Aspekt zu verlieren',
                  'Wir bleiben neugierig, präzise und brutal ehrlich'
                ].map((point, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-10 w-10 flex items-center justify-center bg-brand-primary/10 rounded-full mr-4 flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-brand-primary" />
                    </div>
                    <span className="text-lg text-brand-text">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-brand-heading">Individuell. Durchdacht. Messbar.</h2>
            <p className="text-lg mb-8 text-brand-text">
              Keine Templates. Kein Schnickschnack. Wir entwickeln maßgeschneiderte Websites basierend auf Ihren spezifischen Zielen, Ihrer Zielgruppe und Ihrer Wachstumsphase.
              Ob B2B-SaaS-Anbieter, Fertigungsunternehmen oder regionaler Dienstleister – <strong>wir erstellen digitale Erlebnisse, die konvertieren</strong>.
            </p>
            <p className="text-lg mb-10 text-brand-text">
              Vom ersten Konzept bis zur Betreuung nach dem Launch arbeiten wir mit Transparenz, strategischem Weitblick und hohen Designstandards.
            </p>
            <div className="bg-brand-background rounded-xl p-8 shadow-sm">
              <blockquote className="text-xl italic text-center text-brand-heading">
                "Wir liefern nicht nur Websites. Wir bauen digitale Assets, die Leistung bringen."
                <footer className="mt-4 font-medium text-brand-text">– Uli, Gründer</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 bg-brand-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-3xl font-bold mb-6 text-center text-brand-heading">Kleines Team. Volle Leistungsfähigkeit.</h2>
          <p className="text-lg mb-12 text-center max-w-3xl mx-auto text-brand-text">
            Sie arbeiten mit dem CEO zusammen – aber Ihr Projekt wird von einem engagierten Team von Spezialisten geprägt, die synchron in folgenden Bereichen arbeiten:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'UX & UI Design', icon: Users },
              { title: 'WordPress & Headless Entwicklung', icon: Briefcase },
              { title: 'SEO-Optimierung', icon: Target },
              { title: 'Motion Design & Illustration', icon: Award },
              { title: 'KI-gestütztes Copywriting', icon: Sparkles },
              { title: 'Branding & visuelle Identität', icon: Award }
            ].map((role, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm transform transition-transform hover:translate-y-[-5px]">
                <div className="mb-4 h-12 w-12 flex items-center justify-center bg-brand-primary/10 rounded-full">
                  <role.icon className="h-6 w-6 text-brand-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2 text-brand-heading">{role.title}</h3>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <Button variant="outline" size="lg" className="group" asChild>
              <Link to="/de/ueber-ooliv#team">
                Das gesamte Team kennenlernen
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Team Section Component */}
      <div id="team">
        <TeamSection />
      </div>

      {/* Added Compact FAQ Section */}
      <AboutCompactFAQ />

      {/* What We Offer Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-brand-heading">Digital. Aber nicht nur.</h2>
            <p className="text-lg mb-12 text-brand-text">
              Unsere Kernkompetenz ist digitale Strategie und Webentwicklung – aber unsere Arbeit hört nicht beim Bildschirm auf.
              Wir unterstützen Kunden auch bei visuellem Branding, Offline-Materialien und Content in verschiedenen Formaten.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              'Konversionsoptimierte Websites',
              'Markengerechte Logos und Icons',
              'Texte, Fotos und Videos für Web und Social Media',
              'Gedruckte Broschüren, Visitenkarten & mehr'
            ].map((service, index) => (
              <div key={index} className="bg-brand-background rounded-xl p-6 shadow-sm h-full flex items-center justify-center text-center">
                <p className="text-lg font-medium text-brand-heading">{service}</p>
              </div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto mt-12">
            <div className="bg-brand-background rounded-xl p-8 shadow-sm text-center">
              <p className="text-lg text-brand-text">
                Wir beherrschen KI-Tools wie <strong>ChatGPT</strong>, <strong>Midjourney</strong> und <strong>Sora</strong>, um unsere menschliche Kreativität zu erweitern – nicht zu ersetzen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Work With Section */}
      <section className="py-20 bg-brand-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-brand-heading">Für Unternehmen, die vorankommen wollen</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <p className="text-xl font-medium mb-6 text-brand-heading">Wir helfen:</p>
              <ul className="space-y-4">
                {[
                  'B2B-Unternehmen mit komplexen Angeboten',
                  'Mittelständischen Marken, die einen Relaunch benötigen',
                  'Schnell wachsenden Startups',
                  'Nischenmarktführern mit globaler Reichweite',
                  'Lokalen Dienstleistern, die bereit für den nächsten Schritt sind'
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="h-8 w-8 flex items-center justify-center bg-brand-primary/10 rounded-full mr-3 flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-brand-primary" />
                    </span>
                    <span className="text-lg text-brand-text">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <p className="text-xl font-medium mb-6 text-brand-heading">Typische Branchen:</p>
              <div className="grid grid-cols-2 gap-4">
                {['SaaS', 'Fertigung', 'Beratung', 'Recht', 'Gesundheitswesen'].map((industry, index) => (
                  <div key={index} className="bg-brand-background p-4 rounded-md text-center text-brand-text">
                    {industry}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-brand-heading">Hauptsitz in Mainz. Aktiv im DACH-Raum und darüber hinaus.</h2>
            <p className="text-lg text-brand-text">
              Während unser Hauptsitz in Mainz ist, arbeiten wir mit Kunden in Deutschland, der Schweiz und auf Mallorca zusammen.
              Digital-first, ortsflexibel – und immer reaktionsschnell.
            </p>
          </div>
          <div className="bg-brand-background rounded-xl p-6 shadow-sm h-[400px] flex items-center justify-center max-w-5xl mx-auto">
            <img 
              src="/lovable-uploads/d575ffe0-f24e-4888-bfe5-37f2ef444d60.png" 
              alt="Standort Karte" 
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* CTA Section with standardized text */}
      <SEOCtaDE />

      {/* What's Next Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-brand-heading">Lassen Sie uns gemeinsam etwas Großartiges aufbauen</h2>
            <p className="text-lg mb-10 text-brand-text">
              Ob Sie einen Relaunch planen, eine neue Website benötigen oder Hilfe brauchen, um Komplexität in Klarheit zu verwandeln – lassen Sie uns gemeinsam Ihren nächsten Schritt erkunden.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group bg-brand-primary hover:bg-brand-primary/90 text-white" asChild>
                <Link to="/de/kontakt">
                  Projekt starten
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="group" asChild>
                <Link to="/de/kontakt">
                  Strategiegespräch buchen
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            <p className="text-center text-sm text-gray-600 mt-10">
              100+ erfolgreich umgesetzte Projekte • Vertraut von führenden Unternehmen • KI-Strategien, die menschlich und messbar sind
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section with keyword focus "marketing agentur mainz" */}
      <section className="py-20 bg-brand-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-brand-heading">Häufig gestellte Fragen</h2>
            <p className="text-lg max-w-2xl mx-auto text-brand-text">
              Antworten auf die wichtigsten Fragen zu unseren Leistungen als Marketing Agentur in Mainz
            </p>
          </div>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            {[
              {
                question: "Was unterscheidet ooliv von anderen Marketing Agenturen in Mainz?",
                answer: "Als spezialisierte Marketing Agentur in Mainz verbinden wir strategisches Denken mit praktischer Umsetzung. Bei uns arbeiten Sie direkt mit dem Gründer zusammen, was kurze Entscheidungswege und ein tiefes Verständnis für Ihre Ziele garantiert."
              },
              {
                question: "Welche Leistungen bietet ooliv als Marketing Agentur an?",
                answer: "Wir bieten ein Komplettpaket digitaler Marketingdienstleistungen – von Webdesign und -entwicklung über SEO und Content-Erstellung bis hin zu Google Ads und KI-Technologien. Als Marketing Agentur in Mainz konzentrieren wir uns auf messbare Ergebnisse und langfristigen Geschäftserfolg."
              },
              {
                question: "Für welche Branchen arbeitet eure Marketing Agentur in Mainz?",
                answer: "Wir haben besondere Expertise in B2B-Bereichen wie SaaS, Fertigung, Beratung, Recht und Gesundheitswesen. Als Marketing Agentur mit Sitz in Mainz unterstützen wir sowohl lokale Unternehmen als auch Kunden im gesamten DACH-Raum."
              },
              {
                question: "Wie ist der typische Projektablauf mit eurer Marketing Agentur?",
                answer: "Jedes Projekt beginnt mit einem strategischen Gespräch, gefolgt von einer maßgeschneiderten Planung. Unser Team in Mainz entwickelt dann Konzepte, setzt diese um und optimiert kontinuierlich. Als Full-Service Marketing Agentur begleiten wir Sie von der ersten Idee bis zur langfristigen Betreuung."
              },
              {
                question: "Arbeitet ihr als Marketing Agentur auch mit KI-Tools?",
                answer: "Ja, wir nutzen modernste KI-Tools zur Effizienzsteigerung. Als zukunftsorientierte Marketing Agentur in Mainz setzen wir auf eine sinnvolle Balance zwischen technologischer Innovation und menschlicher Kreativität."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-brand-heading">{faq.question}</h3>
                <p className="text-brand-text">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default GermanAboutUs;
