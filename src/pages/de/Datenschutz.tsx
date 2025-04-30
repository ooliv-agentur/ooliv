import React, { useEffect, useRef } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import LegalHero from '@/components/legal/LegalHero';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Lock, 
  Database, 
  Cookie, 
  FileText, 
  Shield, 
  Globe, 
  RefreshCw,
  UserCheck
} from 'lucide-react';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';

const Datenschutz = () => {
  const policyRef = useRef<HTMLDivElement>(null);
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('de');
  }, [setLanguage]);
  
  const scrollToPolicy = () => {
    if (policyRef.current) {
      policyRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenLeadForm = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new Event('open-lead-form'));
  };

  return (
    <PageLayout className="overflow-x-hidden">
      <Helmet>
        <title>Datenschutz | ooliv Werbeagentur Mainz</title>
        <meta name="description" content="Datenschutzerklärung der ooliv Werbeagentur Mainz gemäß DSGVO. Hier erfahren Sie, wie wir mit Ihren Daten umgehen." />
      </Helmet>

      <LegalHero
        badge="Datenschutz"
        title="Ihre Daten, Ihre Rechte"
        subtitle="Wie wir mit Ihren persönlichen Informationen umgehen, sie speichern und schützen. Diese Datenschutzerklärung erläutert, welche Daten wir erheben, wie wir sie verwenden und wie Sie Ihre Rechte gemäß der DSGVO ausüben können."
        primaryCta={{
          text: "Projekt starten",
          link: "#",
          onClick: handleOpenLeadForm
        }}
        secondaryCta={{
          text: "Strategiegespräch vereinbaren",
          link: "/kontakt"
        }}
      />

      <section className="section-standard" ref={policyRef} id="policy">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-brand-primary/10 rounded-full mb-4">
              <Lock className="h-8 w-8 text-brand-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Datenschutzerklärung</h2>
            <p className="text-lg text-brand-text/80 max-w-2xl mx-auto">
              Bei ooliv nehmen wir Ihren Datenschutz ernst. Diese Richtlinie erläutert, wie wir Ihre Informationen sammeln, verwenden und schützen.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg overflow-hidden bg-white shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center space-x-3">
                  <Database className="h-5 w-5 text-brand-primary" />
                  <span className="text-xl font-medium">Allgemeine Datenerfassung</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2">
                <p className="text-brand-text">
                  Wir speichern anonymisierte Protokolldaten (IP-Adresse, Zugriffszeit, Browser-Informationen) für Sicherheit und Systemstabilität. Diese Daten helfen uns, technische Probleme zu identifizieren und zu beheben, unsere Website zu optimieren und vor unbefugtem Zugriff zu schützen. Keine persönlichen Daten werden ohne Ihre ausdrückliche Zustimmung an Dritte weitergegeben, außer wenn dies gesetzlich vorgeschrieben ist.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg overflow-hidden bg-white shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center space-x-3">
                  <Cookie className="h-5 w-5 text-brand-primary" />
                  <span className="text-xl font-medium">Cookies</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2">
                <p className="text-brand-text">
                  Wir verwenden Cookies für funktionale Leistung und Analysen. Diese kleinen Textdateien helfen uns zu verstehen, wie Besucher unsere Website nutzen, Ihre Präferenzen zu speichern und ein besseres Surferlebnis zu bieten. Sie können jederzeit über die Browser-Einstellungen Cookies deaktivieren, obwohl dies einige Funktionen der Website beeinträchtigen kann.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg overflow-hidden bg-white shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center space-x-3">
                  <FileText className="h-5 w-5 text-brand-primary" />
                  <span className="text-xl font-medium">Kontaktformulare</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2">
                <p className="text-brand-text">
                  Über Kontaktformulare übermittelte Daten werden sicher gespeichert und nur zur Beantwortung Ihrer Anfrage verwendet. Wenn Sie uns über unsere Website-Formulare kontaktieren, sammeln wir die von Ihnen bereitgestellten Informationen (wie Name, E-Mail und Nachrichteninhalt), um Ihre Fragen zu beantworten und bei Bedarf nachzufassen. Diese Informationen werden auf sicheren Servern gespeichert und niemals an nicht angeschlossene Dritte verkauft oder weitergegeben.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg overflow-hidden bg-white shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center space-x-3">
                  <UserCheck className="h-5 w-5 text-brand-primary" />
                  <span className="text-xl font-medium">Ihre Rechte nach der DSGVO</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2">
                <p className="text-brand-text mb-4">
                  Nach der Datenschutz-Grundverordnung (DSGVO) haben Sie verschiedene Rechte bezüglich Ihrer personenbezogenen Daten:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-brand-text">
                  <li>Recht auf Zugang zu Ihren personenbezogenen Daten</li>
                  <li>Recht auf Berichtigung ungenauer Daten</li>
                  <li>Recht auf Löschung Ihrer Daten</li>
                  <li>Recht auf Datenübertragbarkeit (Erhalt Ihrer Daten in einem strukturierten Format)</li>
                  <li>Recht auf Widerspruch gegen die Verarbeitung Ihrer Daten</li>
                  <li>Recht auf Beschwerde bei Ihrer lokalen Aufsichtsbehörde</li>
                </ul>
                <p className="text-brand-text mt-4">
                  Um eines dieser Rechte auszuüben, kontaktieren Sie uns bitte unter info@ooliv.de.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg overflow-hidden bg-white shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center space-x-3">
                  <Globe className="h-5 w-5 text-brand-primary" />
                  <span className="text-xl font-medium">Google-Dienste</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2">
                <p className="text-brand-text">
                  Wir verwenden Google Ads und Google Analytics, um unseren Website-Verkehr zu verstehen und unsere Marketingbemühungen zu optimieren. Die IP-Anonymisierung ist aktiv, um Ihre Privatsphäre zu schützen. Daten können in den USA gemäß den Datenschutzrichtlinien von Google verarbeitet werden. Sie können über <a href="https://www.google.de/settings/ads" className="text-brand-primary hover:underline">Google-Einstellungen</a> oder durch die Verwendung von Browser-Erweiterungen wie Google Analytics Opt-out widersprechen.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border rounded-lg overflow-hidden bg-white shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center space-x-3">
                  <Globe className="h-5 w-5 text-brand-primary" />
                  <span className="text-xl font-medium">Externe Links</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2">
                <p className="text-brand-text">
                  Unsere Website kann Links zu externen Seiten enthalten, die nicht von uns betrieben werden. Wir sind nicht verantwortlich für den Inhalt oder die Datenschutzpraktiken dieser Drittanbieter-Websites. Wir empfehlen Ihnen, die Datenschutzrichtlinien aller externen Websites zu überprüfen, die Sie über Links auf unserer Website besuchen.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border rounded-lg overflow-hidden bg-white shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-brand-primary" />
                  <span className="text-xl font-medium">Datensicherheit</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2">
                <p className="text-brand-text">
                  Wir implementieren starke Sicherheitsprotokolle, können aber keinen 100%igen Schutz gegen alle Bedrohungen garantieren. Unsere Website verwendet SSL-Verschlüsselung zum Schutz der Datenübertragung, und wir aktualisieren regelmäßig unsere Systeme, um die Sicherheit aufrechtzuerhalten. Dennoch ist keine Methode der elektronischen Speicherung oder Übertragung vollständig sicher. Wir raten davon ab, hochsensible Daten per E-Mail oder über Standard-Kontaktformulare zu senden.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="border rounded-lg overflow-hidden bg-white shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center space-x-3">
                  <RefreshCw className="h-5 w-5 text-brand-primary" />
                  <span className="text-xl font-medium">Aktualisierungen der Richtlinie</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2">
                <p className="text-brand-text">
                  Diese Richtlinie kann sich ändern, wenn sich rechtliche oder technische Bedingungen weiterentwickeln. Wir werden alle Überarbeitungen auf dieser Seite mit einem aktualisierten Datum des Inkrafttretens veröffentlichen. Bei erheblichen Änderungen können wir auch einen auffälligeren Hinweis geben. Bitte überprüfen Sie diese Richtlinie regelmäßig, um über den Schutz Ihrer Informationen informiert zu bleiben.
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

export default Datenschutz;
