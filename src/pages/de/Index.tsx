
import PageLayout from "@/components/PageLayout";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import TeamImpactSection from "@/components/TeamImpactSection";
import Challenge from "@/components/Challenge";
import Solution from "@/components/Solution";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import TeamTeaser from "@/components/TeamTeaser";
import ClientLogos from "@/components/ClientLogos";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const GermanIndex = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('de');
  }, [setLanguage]);

  return (
    <PageLayout className="overflow-x-hidden">
      <Hero 
        startProjectText="Projekt starten"
        seeWorkText="Arbeiten ansehen"
      />
      <AboutSection 
        title="Klein, fokussiert, effektiv – Ihre Webagentur aus Mainz."
        description="ooliv ist keine anonyme Full-Service-Agentur, sondern ein eingespieltes Expertenteam mit klarer Spezialisierung: Strategie, Webdesign, Entwicklung, SEO und Content – alles aus einer Hand. Sie kommunizieren direkt mit dem Gründer. Wir liefern Ergebnisse, keine Buzzwords."
        values={[
          "Strategie vor Design",
          "Qualität vor Quantität",
          "Ergebnisse vor Ästhetik"
        ]}
        additionalText="Was das für Sie bedeutet: Kurze Wege, tiefes Verständnis, maßgeschneiderte Lösungen."
      />
      <TeamImpactSection
        title="Klein, aber schlagkräftig"
        subtitle="Unser Team besteht aus Spezialisten mit langjähriger Erfahrung"
        description="Bei ooliv arbeiten Sie direkt mit dem Gründer zusammen, während ein spezialisiertes Team im Hintergrund für exzellente Umsetzung sorgt. Dieser Ansatz garantiert kurze Kommunikationswege, tiefgreifendes Verständnis für Ihre Ziele und hochwertige Ergebnisse ohne Reibungsverluste."
        stats={[
          { value: "16+", label: "Jahre Erfahrung" },
          { value: "100+", label: "zufriedene Kunden" },
          { value: "200+", label: "erfolgreiche Projekte" }
        ]}
      />
      <Challenge 
        title="Ihre Website ist online – aber sie arbeitet nicht für Sie?"
        description="Viele Unternehmen kämpfen mit Webseiten, die gut aussehen, aber nichts bringen. Wir zeigen, woran es liegt – und wie wir es besser machen."
        challenges={[
          "Veraltetes Design",
          "Langsame Ladezeiten",
          "Schlechte Sichtbarkeit bei Google",
          "Fehlende Mobile-Optimierung",
          "Keine Conversion-Elemente",
          "Kein strategischer Aufbau"
        ]}
        solutions={[
          "Zielgruppengerechte Gestaltung mit klarer Markenbotschaft",
          "Technisch optimierte Entwicklung mit Fokus auf Performance",
          "Technische & inhaltliche SEO-Strategie mit lokalem Fokus",
          "Mobile-first Design für alle Endgeräte",
          "Durchdachte UX mit klaren Calls-to-Action",
          "Struktur & Inhalte nach Nutzerverhalten und Suchintention"
        ]}
      />
      <div className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-brand-heading">
            Sehen Sie den Unterschied: Strategie statt Kosmetik
          </h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-brand-text">
            Ziehen Sie den Regler und vergleichen Sie selbst: So verwandeln wir veraltete, nicht performante Webseiten in digitale Vertriebsmaschinen – mit mehr Sichtbarkeit, mehr Leads und besserer Nutzerführung.
          </p>
          <BeforeAfterSlider />
        </div>
      </div>
      <Solution 
        title="Wir entwickeln Websites, die Ihre Unternehmensziele unterstützen."
        subtitle="Mit Strategie, Expertise & intelligenter Technologie"
        description={
          <>
            Ob Start-up, Mittelstand oder B2B-Unternehmen – wir liefern keine Templates, sondern maßgeschneiderte Lösungen, die Ihre Zielgruppe erreichen. 
            Vertrauen Sie auf unsere Expertise in <Link to="/de/webdesign" className="text-brand-primary hover:underline">Webdesign</Link>, 
            <Link to="/de/webentwicklung" className="text-brand-primary hover:underline"> Webentwicklung</Link>, 
            <Link to="/de/content-erstellung" className="text-brand-primary hover:underline"> Content-Erstellung</Link>, 
            <Link to="/de/seo-optimierung" className="text-brand-primary hover:underline"> SEO-Optimierung</Link>, 
            <Link to="/de/google-ads" className="text-brand-primary hover:underline"> Google Ads</Link> und 
            <Link to="/de/ki-technologien" className="text-brand-primary hover:underline"> KI-Technologien</Link>.
          </>
        }
        solutions={[
          "Strategisch durchdacht",
          "Für Menschen & Maschinen optimiert",
          "Technisch auf dem neuesten Stand",
          "Entwickelt für Wachstum – nicht für kurzfristige Trends"
        ]}
        process={[
          {
            title: "Strategie & Analyse",
            description: "Zielgruppen, Märkte, Suchverhalten – wir starten mit datenbasierten Erkenntnissen statt Bauchgefühl."
          },
          {
            title: "Content & SEO",
            description: "Wir erstellen Inhalte, die nicht nur gut klingen, sondern auch gefunden werden – in mehreren Sprachen, bei Bedarf KI-gestützt."
          },
          {
            title: "UX & Webdesign",
            description: "Visuelles Konzept, Benutzerführung & Conversion – perfekt abgestimmt auf Ihre Marke und Ihre Ziele."
          },
          {
            title: "Technische Umsetzung",
            description: "Programmierung mit HTML, CSS und JavaScript – ohne CMS, wenn Sie volle Kontrolle und Geschwindigkeit wünschen. Oder mit WordPress, wenn redaktionelle Pflege gefragt ist."
          },
          {
            title: "Launch, Tracking & Support",
            description: "Wir begleiten Sie über den Launch hinaus: mit sauberem Tracking, kontinuierlicher Optimierung und klarer Betreuung über Basecamp."
          }
        ]}
        learnMoreText="Mehr über unseren Prozess erfahren"
      />
      <TeamTeaser />
      <ClientLogos />
      
      {/* Case Studies Section - German Version */}
      <section className="py-20 bg-gradient-to-br from-brand-background to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-6 font-sans">
              Wir erstellen Websites, die <span className="text-brand-primary">echte Geschäftsergebnisse liefern</span>
            </h2>
            <p className="text-xl text-brand-text max-w-3xl mx-auto mb-8 font-sans">
              Echte Ergebnisse von echten Kunden. Sehen Sie, wie wir Unternehmen wie Ihrem geholfen haben, durch strategisches Webdesign und Entwicklung messbares Wachstum zu erzielen.
            </p>
          </div>
          
          <div className="space-y-20">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="w-full md:w-1/2">
                <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="mr-4">
                      <img src="/placeholder.svg" alt="Scheurich logo" className="h-10 w-auto" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-brand-heading">Scheurich</h3>
                      <p className="text-sm text-gray-500">Keramik & Lifestyle Marke</p>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-medium mb-6">
                    120% mehr organischer Traffic durch vollständige Website-Optimierung
                  </h4>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start">
                      <div className="mr-3 mt-1 text-brand-primary">
                        <Check className="h-5 w-5" />
                      </div>
                      <p className="text-sm text-gray-600">120% mehr organischer Traffic nach vollständiger Website-Optimierung</p>
                    </div>
                    <div className="flex items-start">
                      <div className="mr-3 mt-1 text-brand-primary">
                        <Check className="h-5 w-5" />
                      </div>
                      <p className="text-sm text-gray-600">45% höhere Konversionsrate durch verbesserte Nutzererfahrung</p>
                    </div>
                    <div className="flex items-start">
                      <div className="mr-3 mt-1 text-brand-primary">
                        <Check className="h-5 w-5" />
                      </div>
                      <p className="text-sm text-gray-600">2x Lead-Generierung durch strategische Conversion-Punkte</p>
                    </div>
                  </div>
                  
                  <blockquote className="italic text-gray-600 text-sm border-l-4 border-brand-primary pl-4 my-6">
                    "Dank ooliv ist unsere Website jetzt ein Wachstumsmotor. Der Prozess war nahtlos, und die Ergebnisse sprechen für sich."
                  </blockquote>
                  
                  <div className="flex items-center mt-6 pt-4 border-t border-gray-100">
                    <div className="mr-3">
                      <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center text-white font-bold text-xs">
                        MS
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-sm">Michael Schmidt</p>
                      <p className="text-xs text-gray-500">Marketing Direktor, Scheurich</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-1/2">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                    alt="Scheurich Fallstudie" 
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
              <div className="w-full md:w-1/2">
                <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="mr-4">
                      <img src="/placeholder.svg" alt="COBUS logo" className="h-10 w-auto" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-brand-heading">COBUS</h3>
                      <p className="text-sm text-gray-500">ERP & IT-Lösungen</p>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-medium mb-6">
                    Lead-Generierung um 80% verbessert mit neuer Website & Konversionsstrategie
                  </h4>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start">
                      <div className="mr-3 mt-1 text-brand-primary">
                        <Check className="h-5 w-5" />
                      </div>
                      <p className="text-sm text-gray-600">80% mehr Leads durch gezielte Konversionsstrategie</p>
                    </div>
                    <div className="flex items-start">
                      <div className="mr-3 mt-1 text-brand-primary">
                        <Check className="h-5 w-5" />
                      </div>
                      <p className="text-sm text-gray-600">3x Website-Traffic mit verbesserter Sichtbarkeit und Inhalten</p>
                    </div>
                    <div className="flex items-start">
                      <div className="mr-3 mt-1 text-brand-primary">
                        <Check className="h-5 w-5" />
                      </div>
                      <p className="text-sm text-gray-600">40% niedrigere Absprungrate mit verbesserter Benutzererfahrung</p>
                    </div>
                  </div>
                  
                  <blockquote className="italic text-gray-600 text-sm border-l-4 border-brand-primary pl-4 my-6">
                    "Professionell, strategisch und ergebnisorientiert. Sie haben genau verstanden, was unser Unternehmen braucht."
                  </blockquote>
                  
                  <div className="flex items-center mt-6 pt-4 border-t border-gray-100">
                    <div className="mr-3">
                      <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center text-white font-bold text-xs">
                        TW
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-sm">Thomas Weber</p>
                      <p className="text-xs text-gray-500">CEO, COBUS</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-1/2">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                    alt="COBUS Fallstudie" 
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="w-full md:w-1/2">
                <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="mr-4">
                      <img src="/placeholder.svg" alt="Weisenburger logo" className="h-10 w-auto" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-brand-heading">Weisenburger</h3>
                      <p className="text-sm text-gray-500">Bau & Immobilien</p>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-medium mb-6">
                    Nahtlose CRM-Integration & skalierbare Web-Infrastruktur
                  </h4>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start">
                      <div className="mr-3 mt-1 text-brand-primary">
                        <Check className="h-5 w-5" />
                      </div>
                      <p className="text-sm text-gray-600">95% schnellere Ladezeit mit optimierter Architektur</p>
                    </div>
                    <div className="flex items-start">
                      <div className="mr-3 mt-1 text-brand-primary">
                        <Check className="h-5 w-5" />
                      </div>
                      <p className="text-sm text-gray-600">60% mehr Anfragen durch verbesserte Benutzerführung</p>
                    </div>
                    <div className="flex items-start">
                      <div className="mr-3 mt-1 text-brand-primary">
                        <Check className="h-5 w-5" />
                      </div>
                      <p className="text-sm text-gray-600">4,9/5 Nutzerzufriedenheit mit neuer digitaler Erfahrung</p>
                    </div>
                  </div>
                  
                  <blockquote className="italic text-gray-600 text-sm border-l-4 border-brand-primary pl-4 my-6">
                    "Ein Game-Changer für unsere Online-Präsenz. Mehr Leads, bessere Conversions und nahtlose Zusammenarbeit."
                  </blockquote>
                  
                  <div className="flex items-center mt-6 pt-4 border-t border-gray-100">
                    <div className="mr-3">
                      <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center text-white font-bold text-xs">
                        JM
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-sm">Julia Müller</p>
                      <p className="text-xs text-gray-500">Digital Manager, Weisenburger</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-1/2">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                    alt="Weisenburger Fallstudie" 
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
              <div className="w-full md:w-1/2">
                <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="mr-4">
                      <img src="/placeholder.svg" alt="PopBird logo" className="h-10 w-auto" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-brand-heading">PopBird</h3>
                      <p className="text-sm text-gray-500">E-Commerce & Einzelhandel</p>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-medium mb-6">
                    35% Umsatzsteigerung in 6 Monaten durch emotionales Storytelling
                  </h4>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start">
                      <div className="mr-3 mt-1 text-brand-primary">
                        <Check className="h-5 w-5" />
                      </div>
                      <p className="text-sm text-gray-600">35% Umsatzwachstum durch emotionalen Storytelling-Ansatz</p>
                    </div>
                    <div className="flex items-start">
                      <div className="mr-3 mt-1 text-brand-primary">
                        <Check className="h-5 w-5" />
                      </div>
                      <p className="text-sm text-gray-600">42% Steigerung des durchschnittlichen Bestellwerts mit verbesserter UX</p>
                    </div>
                    <div className="flex items-start">
                      <div className="mr-3 mt-1 text-brand-primary">
                        <Check className="h-5 w-5" />
                      </div>
                      <p className="text-sm text-gray-600">60% höhere Kundenbindung mit personalisierten E-Mail-Workflows</p>
                    </div>
                  </div>
                  
                  <blockquote className="italic text-gray-600 text-sm border-l-4 border-brand-primary pl-4 my-6">
                    "Die Zusammenarbeit mit ooliv hat unsere Online-Präsenz komplett transformiert. Unsere Kunden haben jetzt ein nahtloses Erlebnis von der Entdeckung bis zum Kauf."
                  </blockquote>
                  
                  <div className="flex items-center mt-6 pt-4 border-t border-gray-100">
                    <div className="mr-3">
                      <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center text-white font-bold text-xs">
                        SJ
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-sm">Sarah Johnson</p>
                      <p className="text-xs text-gray-500">Marketing Lead, PopBird</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-1/2">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1556155092-490a1ba16284" 
                    alt="PopBird Fallstudie" 
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="w-full md:w-1/2">
                <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="mr-4">
                      <img src="/placeholder.svg" alt="GreenTech logo" className="h-10 w-auto" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-brand-heading">GreenTech</h3>
                      <p className="text-sm text-gray-500">Erneuerbare Energien</p>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-medium mb-6">
                    200+ qualifizierte Leads pro Monat mit gezielter SEO & Content-Strategie
                  </h4>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start">
                      <div className="mr-3 mt-1 text-brand-primary">
                        <Check className="h-5 w-5" />
                      </div>
                      <p className="text-sm text-gray-600">200+ qualifizierte Leads pro Monat mit gezielter Strategie</p>
                    </div>
                    <div className="flex items-start">
                      <div className="mr-3 mt-1 text-brand-primary">
                        <Check className="h-5 w-5" />
                      </div>
                      <p className="text-sm text-gray-600">Erste Seite Google-Rankings für 30+ Branchenkeywords</p>
                    </div>
                    <div className="flex items-start">
                      <div className="mr-3 mt-1 text-brand-primary">
                        <Check className="h-5 w-5" />
                      </div>
                      <p className="text-sm text-gray-600">68% Reduzierung der Akquisitionskosten durch organische Kanäle</p>
                    </div>
                  </div>
                  
                  <blockquote className="italic text-gray-600 text-sm border-l-4 border-brand-primary pl-4 my-6">
                    "Die Ergebnisse haben unsere Erwartungen übertroffen. Unsere Webpräsenz spiegelt nun wirklich unsere Markenwerte wider und konvertiert Besucher effizient."
                  </blockquote>
                  
                  <div className="flex items-center mt-6 pt-4 border-t border-gray-100">
                    <div className="mr-3">
                      <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center text-white font-bold text-xs">
                        DK
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-sm">Daniel Krause</p>
                      <p className="text-xs text-gray-500">Growth Director, GreenTech</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-1/2">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1516116216624-53e697fedbea" 
                    alt="GreenTech Fallstudie" 
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Testimonials 
        testimonials={[
          {
            quote: "ooliv hat unsere alte Website in einen Wachstumsmotor verwandelt. Die Conversion-Rate ist um 40 % gestiegen.",
            author: "Michael Schmidt",
            role: "TechSolutions GmbH"
          },
          {
            quote: "Endlich eine Agentur, die wirklich strategisch arbeitet. Wir generieren dreimal so viele qualifizierte Leads wie vorher.",
            author: "Sabine Müller",
            role: "Innovate AG"
          },
          {
            quote: "Unkompliziert, effizient und auf den Punkt. Das Ergebnis passt exakt zu unserem Vertrieb.",
            author: "Thomas Weber",
            role: "ProService GmbH"
          }
        ]}
      />
      <FAQ 
        title="Häufig gestellte Fragen – zur Werbeagentur ooliv in Mainz"
        customFaqs={[
          {
            question: "Was macht ooliv als Werbeagentur in Mainz besonders?",
            answer: "Als Werbeagentur in Mainz arbeiten wir strategisch, sprechen Klartext und liefern messbare Ergebnisse – ohne Umwege über Zwischenebenen. Sie sprechen direkt mit dem Gründer und erhalten maßgeschneiderte Lösungen für Ihre spezifischen Ziele."
          },
          {
            question: "Für wen ist ooliv die richtige Agentur?",
            answer: "Für B2B-Unternehmen, Start-ups oder Mittelstand, die Wert auf Performance, SEO und einen professionellen Webauftritt legen. Unsere Werbeagentur in Mainz ist spezialisiert auf Kunden, die konkrete Geschäftsziele mit ihrer Website erreichen wollen."
          },
          {
            question: "Wie lange dauert ein typisches Projekt?",
            answer: "Je nach Umfang 4 bis 10 Wochen – mit klaren Meilensteinen und transparenter Planung über Basecamp."
          },
          {
            question: "Arbeitet ihr mit WordPress oder ohne CMS?",
            answer: "Beides – je nach Ziel. Für maximale Kontrolle programmieren wir direkt mit HTML, CSS, JS. Für redaktionelle Flexibilität setzen wir auf WordPress."
          },
          {
            question: "Bietet ihr auch SEO-Optimierung an?",
            answer: "Ja, von Keyword-Recherche über technische Onpage-Optimierung bis zu lokalem SEO in Mainz. Als Werbeagentur verstehen wir, dass Sichtbarkeit der Schlüssel zum Erfolg ist."
          },
          {
            question: "Wie läuft die Zusammenarbeit ab?",
            answer: "Klar strukturiert über Basecamp – mit festem Zeitplan, klarer Kommunikation und direkter Ansprechpartnerin: dem Gründer."
          },
          {
            question: "Was kostet eine Website bei euch?",
            answer: "Unsere Projekte starten bei ca. 5.000 €. Final hängt der Preis vom Umfang, CMS-Wunsch und Funktionsumfang ab."
          },
          {
            question: "Kann ich auch Google Ads mit euch umsetzen?",
            answer: "Ja. Wir bieten professionelle Kampagnensteuerung über Google Ads – inklusive Landingpages und Conversion-Tracking."
          },
          {
            question: "Arbeitet ihr auch mit externen Designern oder Partnern?",
            answer: "Nein – alle Leistungen entstehen intern, abgestimmt im Team, gesteuert vom Gründer."
          },
          {
            question: "Was bringt mir eine Zusammenarbeit mit einer lokalen Werbeagentur in Mainz?",
            answer: "Kurze Wege, regionale Marktkenntnis und ein Team, das wirklich versteht, was Sie brauchen. Eine Werbeagentur vor Ort in Mainz ermöglicht persönlichen Kontakt, besseres Verständnis des lokalen Marktes und schnellere Reaktionszeiten."
          },
          {
            question: "Wie sorgt ooliv als Werbeagentur in Mainz für lokale Sichtbarkeit bei Google?",
            answer: "Wir kombinieren lokale Keyword-Strategien mit technischer Optimierung und hochwertigen Inhalten – damit Sie dort gefunden werden, wo Ihre Zielgruppe sucht."
          }
        ]}
      />
      <CTA 
        title="Bereit, mit einer echten Werbeagentur in Mainz durchzustarten?"
        subtitle="Lassen Sie uns in einem kostenfreien Gespräch besprechen, wie wir Ihre Website zum Wachstumstreiber machen."
        primaryCta="Projekt starten"
        secondaryCta="Unsere Arbeiten ansehen"
      />
    </PageLayout>
  );
};

export default GermanIndex;

