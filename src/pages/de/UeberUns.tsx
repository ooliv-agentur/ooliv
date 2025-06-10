import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Link } from 'react-router-dom';
import TeamSection from '@/components/TeamSection';
import AboutCompactFAQ from '@/components/AboutCompactFAQ';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Users, Target, Briefcase, Globe, Award, CheckCircle, Sparkles, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Separator } from '@/components/ui/separator';
import AboutUsSEOText from '@/components/about-us/AboutUsSEOText';

const GermanAboutUs = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('de');
  }, [setLanguage]);

  const handleOpenLeadForm = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  const industries = [
    'Technologie / Software',
    'Einzelhandel / E-Commerce',
    'Finanzen / Banking',
    'Gesundheit / Medizin',
    'Bildung / Training',
    'Produktion / Industrie',
    'Gastronomie / Tourismus',
    'Bau / Immobilien',
    'Lebensmittel / Restaurant',
    'Beratung / Dienstleistungen'
  ];

  const faqItems = [
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
      answer: "Jedes Projekt beginnt mit einem strategischen Gespräch, gefolgt von einer maßgeschneiderten Planung. Unser Team in Mainz entwickelt dann Konzepte, setzt diese um und optimiert kontinuierlich. Als Full-Service Marketing Agentur begleiten Sie von der ersten Idee bis zur langfristigen Betreuung."
    },
    {
      question: "Arbeitet ihr als Marketing Agentur auch mit KI-Tools?",
      answer: "Ja, wir nutzen modernste KI-Tools zur Effizienzsteigerung. Als zukunftsorientierte Marketing Agentur in Mainz setzen wir auf eine sinnvolle Balance zwischen technologischer Innovation und menschlicher Kreativität."
    }
  ];

  return (
    <PageLayout 
      className="overflow-x-hidden" 
      seoText={<AboutUsSEOText />}
    >
      <Helmet>
        <title>Marketing Agentur Mainz – Strategie, SEO & Wachstum | ooliv</title>
        <meta name="description" content="Ihre Marketing Agentur Mainz für Websites, SEO, SEA und Content. Maßgeschneiderte Strategien für echtes Wachstum. Jetzt Beratung sichern!" />
      </Helmet>

      {/* Hero Section - Matching master style guide */}
      <section className="relative bg-medico-mint overflow-hidden font-satoshi min-h-screen flex items-center">
        {/* Enhanced floating circles animation - same as startpage */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large slow moving circles */}
          <div className="floating-circle slow w-32 h-32 top-20 left-10 opacity-40"></div>
          <div className="floating-circle delayed w-40 h-40 top-40 right-20 opacity-30"></div>
          
          {/* Medium circles with different animations */}
          <div className="floating-circle reverse w-24 h-24 bottom-40 left-1/4 opacity-50"></div>
          <div className="floating-circle diagonal w-20 h-20 bottom-20 right-1/3 opacity-45"></div>
          
          {/* Small fast moving circles */}
          <div className="floating-circle fast w-16 h-16 top-1/2 left-3/4 opacity-60"></div>
          <div className="floating-circle pulse w-12 h-12 top-1/3 right-1/4 opacity-70"></div>
          
          {/* Additional ambient circles */}
          <div className="floating-circle slow w-14 h-14 top-60 left-1/2 opacity-35"></div>
          <div className="floating-circle delayed reverse w-18 h-18 bottom-60 right-10 opacity-40"></div>
          <div className="floating-circle diagonal w-10 h-10 top-80 left-20 opacity-55"></div>
        </div>
        
        <div className="relative z-20 w-full">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-4xl mx-auto flex flex-col justify-center items-start min-h-[60vh]">
              {/* Main heading - matching master typography */}
              <h1 
                className="font-medium mb-6 sm:mb-8 leading-tight text-left text-4xl sm:text-5xl md:text-6xl lg:text-[64px] lg:leading-[76px]"
                style={{ 
                  color: '#003343' 
                }}
              >
                Marketing Agentur Mainz
              </h1>
              
              {/* Subtitle - matching master style */}
              <p 
                className="text-lg sm:text-xl md:text-2xl text-medico-darkGreen mb-8 sm:mb-10 text-left"
                style={{ lineHeight: '1.6' }}
              >
                Wir verbinden Kreativität, Strategie und Technologie, um Websites zu erstellen, die Unternehmenswachstum fördern. Sie arbeiten immer direkt mit unserem Gründer zusammen.
              </p>
              
              {/* CTA buttons - matching master style */}
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
                  asChild
                >
                  <Link to="/de/kontakt">
                    Projekt starten
                    <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="bg-medico-white text-medico-darkGreen hover:bg-gray-50 border-2 border-medico-darkGreen hover:border-medico-turquoise font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto" 
                  asChild
                >
                  <Link to="/case-studies">
                    Referenzen ansehen
                    <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Visual transition indicator - matching master style */}
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

      {/* Section 1: Introduction */}
      <section className="py-24 bg-[#faf5eb]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#003343]">
              Mehr als eine Webagentur – Ihr strategischer Sparringspartner
            </h2>
            <p className="text-xl mb-12 text-[#003343]/80 leading-relaxed">
              Kreativ, technisch präzise und partnerschaftlich. Ohne Hierarchien, ohne Buzzwords – mit echtem Ergebnisfokus.
            </p>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm mb-12 border border-gray-100">
              <ul className="space-y-6 text-left">
                {[
                  'Gegründet 2008 von Uli Schönleber',
                  'Standort Mainz, Kunden europaweit',
                  'Inhabergeführtes Studio mit fokussiertem Expertenteam',
                  'Kommunikation direkt mit dem Gründer – von Start bis Go-Live',
                  'Klarer Projektablauf über Basecamp (Feedback, Aufgaben, Dateien an einem Ort)'
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="h-10 w-10 flex items-center justify-center bg-[#32b1ab]/10 rounded-full mr-4 flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-[#32b1ab]" />
                    </span>
                    <span className="text-[#003343] text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <Button 
              size="lg" 
              className="group bg-[#ffea1f] text-[#003343] hover:bg-yellow-400 font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300" 
              asChild
            >
              <Link to="/de/kontakt">
                Lassen Sie uns zusammenarbeiten
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Section 2: Story */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#003343]">
              Wo Leidenschaft auf Leistung trifft
            </h2>
            <div className="flex justify-center mb-8">
              <div className="h-16 w-16 bg-[#32b1ab]/10 rounded-full flex items-center justify-center">
                <Globe className="h-8 w-8 text-[#32b1ab]" />
              </div>
            </div>
            <div className="prose prose-lg max-w-none text-center">
              <p className="text-xl mb-8 text-[#003343]/80 leading-relaxed">
                Was mit einer mutigen Gelegenheit begann, wurde zu einer langfristigen Erfolgsgeschichte. Im Jahr 2008, als eine führende Agentur in Mainz ihre Türen schloss, fragten mehrere treue Kunden:
              </p>
              <blockquote className="text-2xl md:text-3xl font-medium mb-8 text-[#32b1ab] italic">
                "Können Sie mit uns weitermachen?"
              </blockquote>
              <p className="text-xl mb-8 text-[#003343]/80 leading-relaxed">
                Das war der Anfang von ooliv.
              </p>
              <p className="text-xl mb-6 text-[#003343]/80 leading-relaxed">
                Seitdem haben wir uns zu einer Remote-First-Agentur mit einem hochqualifizierten, überregional verteilten Team entwickelt – vereint durch eine Denkweise:
              </p>
              <p className="text-2xl font-bold text-[#003343]">
                Jede Website sollte echten Unternehmenswert schaffen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Why Small */}
      <section className="py-24 bg-[#faf5eb]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#003343]">
              Warum wir bewusst klein bleiben
            </h2>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <p className="text-xl mb-8 text-[#003343]/80 leading-relaxed">
                Bei ooliv arbeitet jeder Kunde direkt mit dem Gründer und CEO zusammen. Im Hintergrund deckt unser kompaktes Team alle Bereiche von Strategie, Design, Content und Entwicklung ab.
              </p>
              <p className="text-xl mb-8 text-[#003343]/80 leading-relaxed">
                Diese Struktur bedeutet weniger Reibungsverluste, schnelleren Fortschritt und bessere Ergebnisse – geliefert von Menschen, die Ihre Website tatsächlich bauen.
              </p>
              <blockquote className="bg-[#faf5eb] p-8 rounded-xl text-2xl font-medium text-center border-l-4 border-[#32b1ab] text-[#003343]">
                "Ein Ansprechpartner. Ein fokussiertes Team. Ein gemeinsames Ziel."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Digital Partner */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-[#003343]">
            Ein digitaler Partner, nicht nur ein Dienstleister
          </h2>
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <AspectRatio ratio={4/3}>
                <img 
                  src="/lovable-uploads/b1bdd6f6-0801-4a5d-ba2f-cad413494d55.png" 
                  alt="Moderne Arbeitsumgebung" 
                  className="h-full w-full object-cover"
                />
              </AspectRatio>
            </div>
            <div>
              <ul className="space-y-8">
                {[
                  'Wir hören zu, bevor wir bauen',
                  'Wir vereinfachen Komplexität',
                  'Wir verbinden Design mit Strategie',
                  'Wir nutzen Technologie, ohne den menschlichen Aspekt zu verlieren',
                  'Wir bleiben neugierig, präzise und brutal ehrlich'
                ].map((point, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-12 w-12 flex items-center justify-center bg-[#32b1ab]/10 rounded-full mr-4 flex-shrink-0 mt-1">
                      <CheckCircle className="h-6 w-6 text-[#32b1ab]" />
                    </div>
                    <span className="text-xl text-[#003343]">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Individual */}
      <section className="py-24 bg-[#faf5eb]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#003343]">
              Individuell. Durchdacht. Messbar.
            </h2>
            <p className="text-xl mb-8 text-[#003343]/80 leading-relaxed">
              Keine Templates. Kein Schnickschnack. Wir entwickeln maßgeschneiderte Websites basierend auf Ihren spezifischen Zielen, Ihrer Zielgruppe und Ihrer Wachstumsphase.
              Ob B2B-SaaS-Anbieter, Fertigungsunternehmen oder regionaler Dienstleister – <strong>wir erstellen digitale Erlebnisse, die konvertieren</strong>.
            </p>
            <p className="text-xl mb-12 text-[#003343]/80 leading-relaxed">
              Vom ersten Konzept bis zur Betreuung nach dem Launch arbeiten wir mit Transparenz, strategischem Weitblick und hohen Designstandards.
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <blockquote className="text-2xl font-medium text-center text-[#003343] italic">
                "Wir liefern nicht nur Websites. Wir bauen digitale Assets, die performen."
                <footer className="mt-6 font-bold text-[#32b1ab] text-lg">– Uli, Gründer</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Team Capabilities */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-[#003343]">
            Kleines Team. Volle Kompetenz.
          </h2>
          <p className="text-xl mb-16 text-center max-w-4xl mx-auto text-[#003343]/80 leading-relaxed">
            Sie arbeiten mit dem CEO – aber Ihr Projekt wird von einem dedizierten Team aus Spezialisten geprägt, die synchron in diesen Bereichen arbeiten:
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'UX & UI Design', icon: Users },
              { title: 'WordPress & Headless Development', icon: Briefcase },
              { title: 'SEO Optimierung', icon: Target },
              { title: 'Motion Design & Illustration', icon: Award },
              { title: 'KI-unterstütztes Copywriting', icon: Sparkles },
              { title: 'Branding & Visuelle Identität', icon: Award }
            ].map((role, index) => (
              <div key={index} className="bg-[#faf5eb] rounded-2xl p-8 shadow-sm transform transition-all duration-300 hover:shadow-md hover:-translate-y-1 border border-gray-100">
                <div className="mb-6 h-14 w-14 flex items-center justify-center bg-[#32b1ab]/10 rounded-full">
                  <role.icon className="h-7 w-7 text-[#32b1ab]" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#003343]">{role.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div id="team">
        <TeamSection />
      </div>

      <AboutCompactFAQ />

      {/* Section 7: Digital Services */}
      <section className="py-24 bg-[#faf5eb]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#003343]">
              Digital. Aber nicht nur.
            </h2>
            <p className="text-xl mb-16 text-[#003343]/80 leading-relaxed">
              Unsere Kernkompetenz ist digitale Strategie und Webentwicklung – aber unsere Arbeit hört nicht am Bildschirm auf.
              Wir unterstützen Kunden auch bei visuellem Branding, Offline-Materialien und Content in verschiedenen Formaten.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            {[
              'Conversion-optimierte Websites',
              'Markengerechte Logos und Icons',
              'Texte, Fotos und Videos für Web und Social Media',
              'Gedruckte Broschüren, Visitenkarten & mehr'
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm h-full flex items-center justify-center text-center border border-gray-100">
                <p className="text-lg font-semibold text-[#003343]">{service}</p>
              </div>
            ))}
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-sm text-center border border-gray-100">
              <p className="text-xl text-[#003343]/80 leading-relaxed">
                Wir beherrschen KI-Tools wie <strong>ChatGPT</strong>, <strong>Midjourney</strong> und <strong>Sora</strong>, um unsere menschliche Kreativität zu erweitern – nicht zu ersetzen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Target Businesses */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-[#003343]">
            Für Unternehmen, die vorankommen wollen
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-[#faf5eb] rounded-2xl p-8 shadow-sm border border-gray-100">
              <p className="text-2xl font-bold mb-8 text-[#003343]">Wir helfen:</p>
              <ul className="space-y-6">
                {[
                  'B2B-Unternehmen mit komplexen Angeboten',
                  'Mittelständischen Marken, die einen Relaunch brauchen',
                  'Schnell wachsenden Startups',
                  'Nischenmartführern mit globaler Reichweite',
                  'Lokalen Dienstleistern, die den nächsten Schritt gehen wollen'
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="h-10 w-10 flex items-center justify-center bg-[#32b1ab]/10 rounded-full mr-4 flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-[#32b1ab]" />
                    </span>
                    <span className="text-[#003343] text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#faf5eb] rounded-2xl p-8 shadow-sm border border-gray-100">
              <p className="text-2xl font-bold mb-8 text-[#003343]">Typische Branchen:</p>
              <div className="grid grid-cols-1 gap-4">
                {industries.slice(0, 10).map((industry, index) => (
                  <div 
                    key={index} 
                    className="bg-white p-4 rounded-lg text-center text-[#003343] font-medium transition-all duration-300 hover:bg-gray-50 border border-gray-100"
                  >
                    {industry.split('/')[0].trim()}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Location */}
      <section className="py-24 bg-[#faf5eb]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#003343]">
              Hauptsitz in Mainz. Aktiv im DACH-Raum und darüber hinaus.
            </h2>
            <p className="text-xl text-[#003343]/80 leading-relaxed">
              Während unser Hauptsitz in Mainz steht, arbeiten wir mit Kunden in Deutschland, der Schweiz und Mallorca.
              Digital-first, standortflexibel – und immer responsiv.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm h-[500px] flex items-center justify-center max-w-5xl mx-auto border border-gray-100">
            <img 
              src="/lovable-uploads/cfb33e9a-d195-4aee-a3f5-649636005e5b.png" 
              alt="Ooliv Bürogebäude in Mainz mit moderner Glasarchitektur" 
              className="h-full w-full object-cover rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* Section 10: CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#003343]">
              Lassen Sie uns gemeinsam etwas Großartiges aufbauen
            </h2>
            <p className="text-xl mb-12 text-[#003343]/80 leading-relaxed">
              Ob Sie einen Relaunch planen, eine neue Website benötigen oder Hilfe dabei brauchen, Komplexität in Klarheit zu verwandeln – lassen Sie uns gemeinsam Ihren nächsten Schritt erkunden.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="group bg-[#ffea1f] text-[#003343] hover:bg-yellow-400 font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300" 
                onClick={handleOpenLeadForm}
              >
                Projekt starten
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="group bg-white text-[#003343] hover:bg-gray-50 border-2 border-[#003343] hover:border-[#32b1ab] font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300" 
                asChild
              >
                <Link to="/de/kontakt">
                  Strategiegespräch buchen
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            <p className="text-center text-sm text-[#003343]/60 mt-12">
              100+ erfolgreich umgesetzte Projekte • Vertraut von führenden Unternehmen • KI-Strategien, die menschlich und messbar sind
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#faf5eb]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#003343]">Häufig gestellte Fragen</h2>
            <p className="text-xl max-w-3xl mx-auto text-[#003343]/80 leading-relaxed">
              Antworten auf die wichtigsten Fragen über unsere Leistungen als Marketing Agentur in Mainz
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqItems.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100"
                >
                  <AccordionTrigger className="px-8 py-6 hover:no-underline">
                    <h3 className="text-lg font-bold text-[#003343] text-left">{faq.question}</h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-6 text-[#003343]/80">
                    <Separator className="mb-4" />
                    <p className="text-lg leading-relaxed">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default GermanAboutUs;

</edits_to_apply>
