import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Link } from 'react-router-dom';
import PageHero from '@/components/PageHero';
import TeamSection from '@/components/TeamSection';
import AboutCompactFAQ from '@/components/AboutCompactFAQ';
import { Users, Target, Briefcase, Globe, Award, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const GermanAboutUs = () => {
  const { setLanguage } = useLanguage();
  
  // Set language to German when this page is loaded
  useEffect(() => {
    setLanguage('de');
  }, [setLanguage]);

  return (
    <PageLayout>
      {/* Hero Section using PageHero component */}
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
          link: "/de/referenzen"
        }}
      />

      {/* Who we are and how we work Section */}
      <section className="section-standard">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Mehr als eine Webagentur – Ihr strategischer Sparringspartner</h2>
            <p className="text-lg mb-8">
              Kreativ, technisch präzise und partnerschaftlich. Ohne Hierarchien, ohne Buzzwords – mit echtem Ergebnisfokus.
            </p>
            <ul className="space-y-2 text-left max-w-xl mx-auto mb-8">
              <li className="flex items-center">
                <span className="h-6 w-6 flex items-center justify-center bg-brand-primary/10 rounded-full mr-3">
                  <CheckCircle className="h-3 w-3 text-brand-primary" />
                </span>
                <span>Gegründet 2008 von Uli Schönleber</span>
              </li>
              <li className="flex items-center">
                <span className="h-6 w-6 flex items-center justify-center bg-brand-primary/10 rounded-full mr-3">
                  <CheckCircle className="h-3 w-3 text-brand-primary" />
                </span>
                <span>Standort Mainz, Kunden europaweit</span>
              </li>
              <li className="flex items-center">
                <span className="h-6 w-6 flex items-center justify-center bg-brand-primary/10 rounded-full mr-3">
                  <CheckCircle className="h-3 w-3 text-brand-primary" />
                </span>
                <span>Inhabergeführtes Studio mit fokussiertem Expertenteam</span>
              </li>
              <li className="flex items-center">
                <span className="h-6 w-6 flex items-center justify-center bg-brand-primary/10 rounded-full mr-3">
                  <CheckCircle className="h-3 w-3 text-brand-primary" />
                </span>
                <span>Kommunikation direkt mit dem Gründer – von Start bis Go-Live</span>
              </li>
              <li className="flex items-center">
                <span className="h-6 w-6 flex items-center justify-center bg-brand-primary/10 rounded-full mr-3">
                  <CheckCircle className="h-3 w-3 text-brand-primary" />
                </span>
                <span>Klarer Projektablauf über Basecamp (Feedback, Aufgaben, Dateien an einem Ort)</span>
              </li>
            </ul>
            <Button size="lg" className="button-primary" asChild>
              <Link to="/de/kontakt">Lassen Sie uns zusammenarbeiten – schnell, direkt und strategisch.</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-standard">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Wo Leidenschaft auf Leistung trifft</h2>
            <div className="flex justify-center mb-6">
              <Globe className="h-8 w-8 text-brand-primary opacity-70" />
            </div>
            <p className="text-lg mb-6">
              Was mit einer mutigen Gelegenheit begann, wurde zu einer langfristigen Erfolgsgeschichte. Im Jahr 2008, als eine führende Agentur in Mainz ihre Türen schloss, fragten mehrere treue Kunden:
              <br /><em className="font-medium">"Können Sie mit uns weitermachen?"</em>
              <br />Das war der Anfang von ooliv.
            </p>
            <p className="text-lg">
              Seitdem haben wir uns zu einer Remote-First-Agentur mit einem hochqualifizierten, überregional verteilten Team entwickelt – vereint durch eine Denkweise:
              <br /><strong>Jede Website sollte echten Unternehmenswert schaffen.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Why We Stay Small Section */}
      <section className="section-gradient">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Warum wir bewusst klein bleiben</h2>
            <p className="text-lg mb-8">
              Bei ooliv arbeitet jeder Kunde direkt mit dem Gründer und CEO zusammen. Im Hintergrund deckt unser kompaktes Team alle Bereiche von Strategie, Design, Content und Entwicklung ab.
            </p>
            <p className="text-lg mb-8">
              Diese Struktur bedeutet weniger Reibungsverluste, schnelleren Fortschritt und bessere Ergebnisse – geliefert von Menschen, die Ihre Website tatsächlich bauen.
            </p>
            <blockquote className="bg-white p-8 rounded-xl shadow-sm text-xl italic text-center mb-6">
              "Ein Ansprechpartner. Ein fokussiertes Team. Ein gemeinsames Ziel."
            </blockquote>
          </div>
        </div>
      </section>

      {/* What Drives Us Section */}
      <section className="section-gradient">
        <div className="section-container">
          <h2 className="section-title mb-8">Ein digitaler Partner, nicht nur ein Dienstleister</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <AspectRatio ratio={4/3}>
                <div className="h-full w-full flex items-center justify-center">
                  <p className="text-gray-500">Büroumgebung</p>
                </div>
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
                  <li key={index} className="flex items-center">
                    <span className="h-10 w-10 flex items-center justify-center bg-brand-primary/10 rounded-full mr-4">
                      <CheckCircle className="h-5 w-5 text-brand-primary" />
                    </span>
                    <span className="text-lg">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="section-standard">
        <div className="section-container">
          <h2 className="section-title">Individuell. Durchdacht. Messbar.</h2>
          <p className="section-subtitle">
            Keine Templates. Kein Schnickschnack. Wir entwickeln maßgeschneiderte Websites basierend auf Ihren spezifischen Zielen, Ihrer Zielgruppe und Ihrer Wachstumsphase.
            Ob B2B-SaaS-Anbieter, Fertigungsunternehmen oder regionaler Dienstleister – <strong>wir erstellen digitale Erlebnisse, die konvertieren</strong>.
          </p>
          <p className="text-lg max-w-4xl mx-auto mb-12 text-center">
            Vom ersten Konzept bis zur Betreuung nach dem Launch arbeiten wir mit Transparenz, strategischem Weitblick und hohen Designstandards.
          </p>
          <div className="card-layout max-w-3xl mx-auto bg-brand-backgroundAlt">
            <blockquote className="text-xl italic text-center">
              "Wir liefern nicht nur Websites. Wir bauen digitale Assets, die Leistung bringen."
              <footer className="mt-4 font-medium">– Uli, Gründer</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="section-alt">
        <div className="section-container">
          <h2 className="section-title">Kleines Team. Volle Leistungsfähigkeit.</h2>
          <p className="section-subtitle">
            Sie arbeiten mit dem CEO zusammen – aber Ihr Projekt wird von einem engagierten Team von Spezialisten geprägt, die synchron in folgenden Bereichen arbeiten:
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'UX & UI Design', icon: Users },
              { title: 'WordPress & Headless Entwicklung', icon: Briefcase },
              { title: 'SEO-Optimierung', icon: Target },
              { title: 'Motion Design & Illustration', icon: Award },
              { title: 'KI-gestütztes Copywriting', icon: Target },
              { title: 'Branding & visuelle Identität', icon: Award }
            ].map((role, index) => (
              <div key={index} className="card-layout group">
                <div className="icon-background text-brand-primary">
                  <role.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium mb-1">{role.title}</h3>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <Button variant="outline" size="lg" className="button-secondary">
              Das gesamte Team kennenlernen
            </Button>
          </div>
        </div>
      </section>

      {/* Team Section Component */}
      <TeamSection />

      {/* Added Compact FAQ Section */}
      <AboutCompactFAQ />

      {/* What We Offer Section */}
      <section className="section-standard">
        <div className="section-container">
          <h2 className="section-title">Digital. Aber nicht nur.</h2>
          <p className="section-subtitle">
            Unsere Kernkompetenz ist digitale Strategie und Webentwicklung – aber unsere Arbeit hört nicht beim Bildschirm auf.
            Wir unterstützen Kunden auch bei visuellem Branding, Offline-Materialien und Content in verschiedenen Formaten.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              'Konversionsoptimierte Websites',
              'Markengerechte Logos und Icons',
              'Texte, Fotos und Videos für Web und Social Media',
              'Gedruckte Broschüren, Visitenkarten & mehr'
            ].map((service, index) => (
              <div key={index} className="card-layout">
                <p className="text-base font-medium">{service}</p>
              </div>
            ))}
          </div>
          <div className="card-layout mt-10 max-w-2xl mx-auto bg-brand-backgroundAlt">
            <p className="text-center text-lg">
              Wir beherrschen KI-Tools wie <strong>ChatGPT</strong>, <strong>Midjourney</strong> und <strong>Sora</strong>, um unsere menschliche Kreativität zu erweitern – nicht zu ersetzen.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Work With Section */}
      <section className="section-gradient">
        <div className="section-container">
          <h2 className="section-title">Für Unternehmen, die vorankommen wollen</h2>
          <div className="grid md:grid-cols-2 gap-10 mb-12">
            <div className="card-layout">
              <p className="text-lg mb-6 font-medium">Wir helfen:</p>
              <ul className="space-y-4">
                {[
                  'B2B-Unternehmen mit komplexen Angeboten',
                  'Mittelständischen Marken, die einen Relaunch benötigen',
                  'Schnell wachsenden Startups',
                  'Nischenmarktführern mit globaler Reichweite',
                  'Lokalen Dienstleistern, die bereit für den nächsten Schritt sind'
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="h-8 w-8 flex items-center justify-center bg-brand-primary/10 rounded-full mr-3">
                      <CheckCircle className="h-4 w-4 text-brand-primary" />
                    </span>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-layout">
              <p className="text-xl font-medium mb-6">Typische Branchen:</p>
              <div className="grid grid-cols-2 gap-4">
                {['SaaS', 'Fertigung', 'Beratung', 'Recht', 'Gesundheitswesen'].map((industry, index) => (
                  <div key={index} className="bg-brand-backgroundAlt p-4 rounded-md text-center">
                    {industry}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="section-standard">
        <div className="section-container">
          <h2 className="section-title">Hauptsitz in Mainz. Aktiv im DACH-Raum und darüber hinaus.</h2>
          <p className="section-subtitle">
            Während unser Hauptsitz in Mainz ist, arbeiten wir mit Kunden in Deutschland, der Schweiz und auf Mallorca zusammen.
            Digital-first, ortsflexibel – und immer reaktionsschnell.
          </p>
          <div className="mt-12 bg-brand-backgroundAlt rounded-xl p-8 shadow-sm h-[300px] flex items-center justify-center">
            <p className="text-gray-500">Kartenplatzhalter</p>
          </div>
        </div>
      </section>

      {/* What's Next Section - Updated with footer microcopy */}
      <section className="section-alt">
        <div className="section-container">
          <h2 className="section-title">Lassen Sie uns gemeinsam etwas Großartiges aufbauen</h2>
          <p className="section-subtitle mb-10">
            Ob Sie einen Relaunch planen, eine neue Website benötigen oder Hilfe brauchen, um Komplexität in Klarheit zu verwandeln – lassen Sie uns gemeinsam Ihren nächsten Schritt erkunden.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="button-primary" asChild>
              <Link to="/de/kontakt">Projekt starten</Link>
            </Button>
            <Button variant="outline" size="lg" className="button-secondary" asChild>
              <Link to="/de/kontakt">Strategiegespräch buchen</Link>
            </Button>
          </div>
          <p className="text-center text-sm text-gray-600 mt-10">
            100+ erfolgreich umgesetzte Projekte • Vertraut von führenden Unternehmen • KI-Strategien, die menschlich und messbar sind
          </p>
        </div>
      </section>

      {/* FAQ Section with keyword focus "marketing agentur mainz" */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Häufig gestellte Fragen</h2>
            <p className="text-lg max-w-2xl mx-auto text-gray-600">
              Antworten auf die wichtigsten Fragen zu unseren Leistungen als Marketing Agentur in Mainz
            </p>
          </div>
          
          <div className="space-y-6">
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
              <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm">
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

export default GermanAboutUs;

