
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import PageHero from '@/components/PageHero';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

// Case studies data 
const caseStudies = [
  {
    client: "Scheurich",
    industry: "Lifestyle & Konsumgüter",
    title: "120% mehr organischer Traffic durch vollständige Website-Optimierung",
    logo: "/placeholder.svg",
    quote: "Dank ooliv ist unsere Website jetzt ein Wachstumsmotor. Der Prozess verlief reibungslos, und die Ergebnisse sprechen für sich.",
    impact: [
      "+120% organischer Traffic",
      "+89% mobile Konversion",
      "Schnellere Content-Bereitstellung mit KI"
    ],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    author: {
      name: "Michael Schmidt",
      position: "Marketing Direktor, Scheurich"
    }
  },
  {
    client: "COBUS ERP",
    industry: "Software & IT",
    title: "80% mehr qualifizierte Leads mit neuer Website & Konversionsstrategie",
    logo: "/placeholder.svg",
    quote: "Professionell, strategisch und ergebnisorientiert. Sie haben genau verstanden, was unser Unternehmen brauchte.",
    impact: [
      "80% mehr qualifizierte Leads",
      "-3,2s Seitenladezeit",
      "SEO-Landing-Pages für Nischenkeywords"
    ],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    author: {
      name: "Thomas Weber",
      position: "CEO, COBUS"
    }
  },
  {
    client: "Franchise Portal",
    industry: "Multi-Standort Dienstleistungen",
    title: "Nahtlose CRM-Integration & skalierbare Web-Infrastruktur",
    logo: "/placeholder.svg",
    quote: "Ein Game-Changer für unsere Online-Präsenz. Mehr Leads, bessere Konversionen und nahtlose Zusammenarbeit.",
    impact: [
      "1 CMS für 17 Marken",
      "+200% SEO-Sichtbarkeit",
      "3x Admin-Effizienz"
    ],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    author: {
      name: "Julia Müller",
      position: "Digital Manager, Weisenburger"
    }
  },
  {
    client: "PopBird",
    industry: "E-Commerce & Handel",
    title: "35% Umsatzsteigerung in 6 Monaten durch emotionales Storytelling",
    logo: "/placeholder.svg",
    quote: "Die Zusammenarbeit mit ooliv hat unsere Online-Präsenz komplett verändert. Unsere Kunden haben jetzt ein nahtloses Erlebnis von der Entdeckung bis zum Kauf.",
    impact: [
      "+35% Umsatzwachstum",
      "+42% durchschnittlicher Bestellwert",
      "+60% Kundenbindung"
    ],
    image: "https://images.unsplash.com/photo-1556155092-490a1ba16284",
    author: {
      name: "Sarah Johnson",
      position: "Marketing Lead, PopBird"
    }
  },
  {
    client: "GreenTech",
    industry: "Erneuerbare Energie",
    title: "200+ qualifizierte Leads pro Monat mit gezielter SEO & Content-Strategie",
    logo: "/placeholder.svg",
    quote: "Die Ergebnisse haben unsere Erwartungen übertroffen. Unsere Web-Präsenz spiegelt nun wirklich unsere Markenwerte wider und konvertiert Besucher effizient.",
    impact: [
      "200+ qualifizierte Leads pro Monat",
      "Google-Rankings auf der ersten Seite für 30+ Keywords",
      "68% Reduzierung der Akquisitionskosten"
    ],
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea",
    author: {
      name: "Daniel Krause",
      position: "Growth Director, GreenTech"
    }
  }
];

// Success pillars
const successPillars = [
  {
    title: "Strategie-First Prozess",
    description: "Jede Website beginnt mit klaren Zielen, Struktur und KPIs."
  },
  {
    title: "Maßgeschneidertes Design & Content",
    description: "Keine Templates. Wir bauen alles passend für jede Marke und Zielgruppe."
  },
  {
    title: "Saubere Entwicklung & SEO",
    description: "Schnell, skalierbar und immer für Performance und Sichtbarkeit optimiert."
  }
];

// FAQ items with focus on "marketing mainz"
const faqItems = [
  {
    question: "Mit welchen Unternehmenstypen arbeitet ooliv Marketing in Mainz?",
    answer: "Hauptsächlich mit B2B-Unternehmen – von Software bis Fertigung, professionelle Dienstleistungen und Bildung. Als Marketing-Experten in Mainz verstehen wir die regionalen und überregionalen Bedürfnisse unserer Kunden."
  },
  {
    question: "Kann ich mehr Details zu einem bestimmten Marketing-Projekt in Mainz sehen?",
    answer: "Absolut. Jede Case-Study-Seite enthält Ergebnisse, Prozesseinblicke und Screenshots. Als Mainzer Marketing-Agentur dokumentieren wir unsere Projekte sorgfältig."
  },
  {
    question: "Sind diese Ergebnisse für Marketing in Mainz typisch?",
    answer: "Jedes Projekt ist anders, aber starke Ergebnisse sind das Resultat klarer Strategie und Umsetzung. Unsere Marketing-Expertise in Mainz hat sich über viele verschiedene Branchen bewährt."
  },
  {
    question: "Kann ich Referenzen zum Marketing in Mainz kontaktieren?",
    answer: "Ja. Auf Anfrage können wir Sie mit früheren Kunden für Feedback verbinden. Unsere Marketing-Arbeit in Mainz spricht für sich, und wir sind stolz auf die langfristigen Beziehungen zu unseren Kunden."
  }
];

// Partner logos placeholders
const partnerLogos = [
  { id: 'scheurich', name: 'Scheurich' },
  { id: 'cobus', name: 'COBUS' },
  { id: 'franchise', name: 'Franchise Portal' },
  { id: 'popbird', name: 'PopBird' },
  { id: 'greentech', name: 'GreenTech' }
];

const GermanCaseStudies = () => {
  const { setLanguage } = useLanguage();
  
  // Set language to German when this page is loaded
  useEffect(() => {
    setLanguage('de');
  }, [setLanguage]);

  return (
    <PageLayout>
      <PageHero
        badge="Echte Ergebnisse. Echte Kunden."
        title="Marketing Erfolgsgeschichten aus Mainz und darüber hinaus"
        subtitle="Sehen Sie, wie wir B2B-Unternehmen mit intelligenter Strategie, starkem Design und messbaren Ergebnissen beim Wachstum helfen. Diese Fallstudien zeigen, was mit ooliv möglich ist."
        primaryCta={{
          text: "Projekt starten",
          link: "/de/kontakt"
        }}
        secondaryCta={{
          text: "Gespräch vereinbaren",
          link: "/de/kontakt"
        }}
      />
      
      <div className="section-container">
        {/* Partner Logos */}
        <div className="py-12 border-t border-b border-gray-200">
          <div className="text-center mb-8">
            <div className="flex justify-center flex-wrap gap-12 mb-8">
              {partnerLogos.map((logo) => (
                <div key={logo.id} className="grayscale hover:grayscale-0 transition-all">
                  <img 
                    src={`/placeholder.svg`} 
                    alt={`${logo.name} logo`} 
                    className="h-12 md:h-16"
                  />
                </div>
              ))}
            </div>
            <p className="text-lg text-gray-600">
              Partnerschaften, die inspirieren und eine nachhaltige Wirkung haben.
            </p>
          </div>
        </div>
        
        {/* Grid of Case Studies */}
        <div className="py-20" id="case-studies">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-heading mb-4">
              Echte Ergebnisse. Echte Kunden.
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Unsere Arbeit spricht für sich. Hier erfahren Sie, wie wir Unternehmen durch strategische digitale Lösungen geholfen haben, ihre Ziele zu erreichen.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all border border-gray-100">
                <div className="h-48 bg-gray-100 flex items-center justify-center">
                  <img 
                    src={study.logo} 
                    alt={`${study.client} logo`}
                    className="h-16 w-auto"
                  />
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-brand-heading">{study.client}</h3>
                    <p className="text-sm text-gray-500">{study.industry}</p>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    {study.impact.map((kpi, idx) => (
                      <div key={idx} className="flex items-center">
                        <Check className="h-4 w-4 text-brand-primary mr-2" />
                        <span className="text-sm font-medium">{kpi}</span>
                      </div>
                    ))}
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-6">{study.title}</p>
                  
                  <Button variant="ghost" size="sm" className="group text-brand-primary" asChild>
                    <Link to="/de/referenzen">
                      Fallstudie ansehen
                      <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* What Makes These Projects Work */}
        <div className="py-20 bg-brand-backgroundAlt">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-brand-heading mb-4">
                Warum unsere Projekte erfolgreich sind
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Unsere konstanten Ergebnisse kommen von einem bewährten Ansatz, der Strategie an erste Stelle und Ausführung an zweite Stelle setzt.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {successPillars.map((pillar, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-sm text-center">
                  <div className="h-16 w-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-brand-primary">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-brand-heading">{pillar.title}</h3>
                  <p className="text-gray-600">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-brand-heading mb-4">
                Fallstudien & Projektfragen
              </h2>
              <p className="text-lg text-gray-600">
                Häufige Fragen zu unseren Projekten und Prozessen im Marketing Mainz.
              </p>
            </div>
            
            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold mb-2 text-brand-heading">{item.question}</h3>
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="mt-24 bg-brand-backgroundAlt rounded-lg p-10 text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Lassen Sie uns Ihre Erfolgsgeschichte schreiben</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Ob Sie einen Relaunch, bessere Konversionen oder mehr qualifizierte Leads benötigen – wir sind bereit zu helfen. Jedes ooliv-Projekt beginnt mit einem Strategiegespräch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/de/kontakt">
                Projekt starten
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/de/kontakt">
                Strategiegespräch buchen
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default GermanCaseStudies;
