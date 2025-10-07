
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';
import LegalHero from '@/components/legal/LegalHero';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Cookie, 
  Shield, 
  BarChart3, 
  Target, 
  Settings, 
  Clock,
  Database,
  FileText
} from 'lucide-react';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';

const GermanCookiePolicy = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('de');
  }, [setLanguage]);

  const handleOpenLeadForm = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new Event('open-lead-form'));
  };

  return (
    <PageLayout className="overflow-x-hidden">
      <EnhancedSEOHead
        title="Cookie-Richtlinie | ooliv Werbeagentur Mainz"
        description="Cookie-Richtlinie der ooliv Werbeagentur Mainz. Erfahren Sie, wie wir Cookies verwenden und Ihre Privatsphäre schützen."
        canonicalUrl="https://ooliv.de/cookie-richtlinie"
        keywords="Cookie Richtlinie, Datenschutz, Cookies, ooliv Werbeagentur"
      />
      <meta name="robots" content="noindex, follow" />

      <LegalHero
        badge="Cookie-Richtlinie"
        title="Transparenz bei Cookies"
        subtitle="Wie wir Cookies verwenden, welche Daten wir sammeln und wie Sie Ihre Einstellungen verwalten können. Diese Richtlinie erklärt detailliert unseren Umgang mit Cookies und Tracking-Technologien."
        primaryCta={{
          text: "Projekt starten",
          link: "#",
          onClick: handleOpenLeadForm
        }}
        secondaryCta={{
          text: "Kontakt aufnehmen",
          link: "/kontakt"
        }}
      />

      <section className="section-standard">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-accent-primary/10 rounded-full mb-4">
              <Cookie className="h-8 w-8 text-accent-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Cookie-Richtlinie</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Bei ooliv nehmen wir Ihre Privatsphäre ernst. Diese Richtlinie erklärt, wie wir Cookies verwenden und Ihre Daten schützen.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg overflow-hidden bg-white shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center space-x-3">
                  <Cookie className="h-5 w-5 text-accent-primary" />
                  <span className="text-xl font-medium">Was sind Cookies?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2">
                <p className="text-gray-700 mb-4">
                  Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden, wenn Sie unsere Website besuchen. Sie helfen uns dabei, Ihre Präferenzen zu speichern, die Website-Performance zu verbessern und Ihnen ein personalisiertes Erlebnis zu bieten.
                </p>
                <p className="text-gray-700">
                  Cookies enthalten normalerweise keine persönlichen Informationen, die Sie direkt identifizieren, aber sie ermöglichen es uns, Ihnen ein personalisierteres Web-Erlebnis zu bieten.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg overflow-hidden bg-white shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-accent-primary" />
                  <span className="text-xl font-medium">Notwendige Cookies</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2">
                <p className="text-gray-700 mb-4">
                  Diese Cookies sind für das ordnungsgemäße Funktionieren unserer Website unerlässlich. Sie ermöglichen grundlegende Funktionen wie Seitennavigation und Zugang zu sicheren Bereichen der Website.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Session-Management und Sicherheit</li>
                  <li>Speicherung Ihrer Cookie-Einstellungen</li>
                  <li>Grundlegende Website-Funktionalität</li>
                  <li>Schutz vor Spam und Missbrauch</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Diese Cookies können nicht deaktiviert werden, da die Website ohne sie nicht ordnungsgemäß funktionieren würde.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg overflow-hidden bg-white shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center space-x-3">
                  <BarChart3 className="h-5 w-5 text-accent-primary" />
                  <span className="text-xl font-medium">Analytische Cookies</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2">
                <p className="text-gray-700 mb-4">
                  Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren, indem sie Informationen anonym sammeln und darüber berichten.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Google Analytics (mit IP-Anonymisierung)</li>
                  <li>Besucherstatistiken und Verhalten</li>
                  <li>Beliebte Seiten und Inhalte</li>
                  <li>Website-Performance-Überwachung</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Diese Daten helfen uns, unsere Website zu verbessern und Ihnen bessere Inhalte anzubieten.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg overflow-hidden bg-white shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center space-x-3">
                  <Target className="h-5 w-5 text-accent-primary" />
                  <span className="text-xl font-medium">Marketing-Cookies</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2">
                <p className="text-gray-700 mb-4">
                  Diese Cookies werden verwendet, um Werbung relevanter für Sie und Ihre Interessen zu machen. Sie werden auch verwendet, um die Anzahl der Anzeigen zu begrenzen und die Wirksamkeit von Werbekampagnen zu messen.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Google Ads und Conversion-Tracking</li>
                  <li>Social Media Plugins (LinkedIn, XING)</li>
                  <li>Remarketing und personalisierte Werbung</li>
                  <li>Kampagnen-Performance-Messung</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Sie können diese Cookies deaktivieren, ohne dass die grundlegende Funktionalität der Website beeinträchtigt wird.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg overflow-hidden bg-white shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center space-x-3">
                  <Settings className="h-5 w-5 text-accent-primary" />
                  <span className="text-xl font-medium">Präferenz-Cookies</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2">
                <p className="text-gray-700 mb-4">
                  Diese Cookies ermöglichen es der Website, sich an Ihre getroffenen Entscheidungen zu erinnern und erweiterte, personalisiertere Funktionen bereitzustellen.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Spracheinstellungen (Deutsch/Englisch)</li>
                  <li>Bevorzugte Website-Darstellung</li>
                  <li>Personalisierte Inhaltsempfehlungen</li>
                  <li>Formular-Daten für bessere Benutzererfahrung</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border rounded-lg overflow-hidden bg-white shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-accent-primary" />
                  <span className="text-xl font-medium">Cookie-Laufzeiten</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Session-Cookies</h4>
                    <p className="text-gray-700">Diese werden gelöscht, wenn Sie Ihren Browser schließen.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Persistente Cookies</h4>
                    <p className="text-gray-700">Diese bleiben für einen bestimmten Zeitraum gespeichert:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                      <li>Cookie-Einstellungen: 1 Jahr</li>
                      <li>Analytics: 26 Monate</li>
                      <li>Marketing: 30 Tage bis 2 Jahre</li>
                      <li>Präferenzen: 1 Jahr</li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border rounded-lg overflow-hidden bg-white shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center space-x-3">
                  <Database className="h-5 w-5 text-accent-primary" />
                  <span className="text-xl font-medium">Ihre Rechte und Kontrolle</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2">
                <p className="text-gray-700 mb-4">
                  Sie haben jederzeit die Kontrolle über Ihre Cookie-Einstellungen:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Ändern Sie Ihre Einstellungen über unsere Cookie-Einstellungen</li>
                  <li>Löschen Sie Cookies über Ihre Browser-Einstellungen</li>
                  <li>Verwenden Sie den "Do Not Track" Modus Ihres Browsers</li>
                  <li>Opt-out über Google Analytics und Google Ads Settings</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Beachten Sie, dass das Deaktivieren bestimmter Cookies die Funktionalität unserer Website beeinträchtigen kann.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="border rounded-lg overflow-hidden bg-white shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center space-x-3">
                  <FileText className="h-5 w-5 text-accent-primary" />
                  <span className="text-xl font-medium">Änderungen an dieser Richtlinie</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2">
                <p className="text-gray-700">
                  Wir können diese Cookie-Richtlinie von Zeit zu Zeit aktualisieren, um Änderungen in unseren Praktiken oder aus anderen betrieblichen, rechtlichen oder regulatorischen Gründen zu berücksichtigen. Wir empfehlen Ihnen, diese Seite regelmäßig zu besuchen, um über Änderungen informiert zu bleiben.
                </p>
                <p className="text-gray-700 mt-4">
                  <strong>Letzte Aktualisierung:</strong> Januar 2025
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="pb-16"></div>
        </div>
      </section>
    </PageLayout>
  );
};

export default GermanCookiePolicy;
