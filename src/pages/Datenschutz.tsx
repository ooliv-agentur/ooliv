
import React, { useEffect, useRef } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import LegalHero from '@/components/legal/LegalHero';
import { useLanguage } from '@/contexts/LanguageContext';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';
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

const GermanPrivacyPolicy = () => {
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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Datenschutzerklärung",
    "description": "Datenschutzerklärung von ooliv gemäß DSGVO. Transparente Informationen zur Datenverarbeitung.",
    "url": "https://ooliv.de/datenschutz",
    "mainEntity": {
      "@type": "Organization",
      "name": "ooliv",
      "url": "https://ooliv.de",
      "privacyPolicy": "https://ooliv.de/datenschutz"
    }
  };

  return (
    <PageLayout className="overflow-x-hidden">
      <EnhancedSEOHead
        title="Datenschutzerklärung | ooliv – DSGVO & Datensicherheit"
        description="Transparente Informationen zur Datenerhebung, Nutzung und Sicherheit bei ooliv. DSGVO-konform und klar strukturiert."
        canonicalUrl="https://ooliv.de/datenschutz"
        robotsContent="noindex, follow"
        structuredData={structuredData}
        keywords="Datenschutz, DSGVO, Datenschutzerklärung, ooliv, Mainz"
      />

      <LegalHero
        badge="Datenschutz"
        title="Datenschutzerklärung"
        subtitle="Wie wir Daten erheben, verwenden und schützen – transparent und DSGVO-konform."
      />

      <section className="py-16 lg:py-24 bg-white" ref={policyRef} id="policy">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-turquoise/10 rounded-2xl mb-6">
              <Lock className="h-8 w-8 text-turquoise" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground font-satoshi" style={{ lineHeight: '1.3' }}>
              Datenschutzerklärung
            </h2>
            <div className="w-20 h-1 bg-turquoise mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto" style={{ lineHeight: '1.6' }}>
              Wir verarbeiten personenbezogene Daten gemäß DSGVO und nur zweckgebunden. Diese Datenschutzerklärung erläutert, welche Daten wir erheben, wie wir sie verwenden und welche Rechte Sie haben.
            </p>
          </div>

          {/* Accordion Section */}
          <div className="bg-gray-50/50 rounded-2xl p-6 md:p-8 border border-turquoise/20">
            <Accordion type="single" collapsible className="w-full">
              <div className="space-y-4">
                <AccordionItem 
                  value="item-1" 
                  className="bg-white border border-turquoise/10 rounded-xl px-6 py-2 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <AccordionTrigger className="text-base md:text-lg font-medium text-foreground hover:no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-turquoise focus-visible:ring-opacity-50 [&[data-state=open]]:text-turquoise transition-colors duration-200">
                    <div className="flex items-center space-x-4 text-left">
                      <div className="flex-shrink-0 w-12 h-12 bg-turquoise/10 rounded-xl flex items-center justify-center">
                        <Database className="h-6 w-6 text-turquoise" />
                      </div>
                      <span>Allgemeine Datenerfassung</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-[15px] md:text-[16px] text-muted-foreground leading-relaxed mt-4 pb-4">
                    <div className="ml-16">
                      <p>
                        Wir speichern anonymisierte Protokolldaten (IP-Adresse, Zugriffszeit, Browser-Informationen) für Sicherheit und Systemstabilität. Diese Daten helfen uns, technische Probleme zu identifizieren und zu beheben, unsere Website zu optimieren und vor unbefugtem Zugriff zu schützen. Keine persönlichen Daten werden ohne Ihre ausdrückliche Zustimmung an Dritte weitergegeben, außer wenn dies gesetzlich vorgeschrieben ist.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem 
                  value="item-2" 
                  className="bg-white border border-medico-turquoise/10 rounded-xl px-6 py-2 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <AccordionTrigger className="text-base md:text-lg font-medium text-medico-darkGreen hover:no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-medico-turquoise focus-visible:ring-opacity-50 [&[data-state=open]]:text-medico-turquoise transition-colors duration-200">
                    <div className="flex items-center space-x-4 text-left">
                      <div className="flex-shrink-0 w-12 h-12 bg-medico-turquoise/10 rounded-xl flex items-center justify-center">
                        <Cookie className="h-6 w-6 text-medico-turquoise" />
                      </div>
                      <span>Cookies</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-[15px] md:text-[16px] text-medico-darkGreen/80 leading-relaxed mt-4 pb-4">
                    <div className="ml-16">
                      <p>
                        Wir verwenden Cookies für funktionale Leistung und Analysen. Diese kleinen Textdateien helfen uns zu verstehen, wie Besucher unsere Website nutzen, Ihre Präferenzen zu speichern und ein besseres Surferlebnis zu bieten. Sie können jederzeit über die Browser-Einstellungen Cookies deaktivieren, obwohl dies einige Funktionen der Website beeinträchtigen kann.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem 
                  value="item-3" 
                  className="bg-white border border-medico-turquoise/10 rounded-xl px-6 py-2 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <AccordionTrigger className="text-base md:text-lg font-medium text-medico-darkGreen hover:no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-medico-turquoise focus-visible:ring-opacity-50 [&[data-state=open]]:text-medico-turquoise transition-colors duration-200">
                    <div className="flex items-center space-x-4 text-left">
                      <div className="flex-shrink-0 w-12 h-12 bg-medico-turquoise/10 rounded-xl flex items-center justify-center">
                        <FileText className="h-6 w-6 text-medico-turquoise" />
                      </div>
                      <span>Kontaktformulare</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-[15px] md:text-[16px] text-medico-darkGreen/80 leading-relaxed mt-4 pb-4">
                    <div className="ml-16">
                      <p>
                        Über Kontaktformulare übermittelte Daten werden sicher gespeichert und nur zur Beantwortung Ihrer Anfrage verwendet. Wenn Sie uns über unsere Website-Formulare kontaktieren, sammeln wir die von Ihnen bereitgestellten Informationen (wie Name, E-Mail und Nachrichteninhalt), um Ihre Fragen zu beantworten und bei Bedarf nachzufassen. Diese Informationen werden auf sicheren Servern gespeichert und niemals an nicht angeschlossene Dritte verkauft oder weitergegeben.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem 
                  value="item-4" 
                  className="bg-white border border-medico-turquoise/10 rounded-xl px-6 py-2 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <AccordionTrigger className="text-base md:text-lg font-medium text-medico-darkGreen hover:no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-medico-turquoise focus-visible:ring-opacity-50 [&[data-state=open]]:text-medico-turquoise transition-colors duration-200">
                    <div className="flex items-center space-x-4 text-left">
                      <div className="flex-shrink-0 w-12 h-12 bg-medico-turquoise/10 rounded-xl flex items-center justify-center">
                        <UserCheck className="h-6 w-6 text-medico-turquoise" />
                      </div>
                      <span>Ihre Rechte nach der DSGVO</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-[15px] md:text-[16px] text-medico-darkGreen/80 leading-relaxed mt-4 pb-4">
                    <div className="ml-16">
                      <p className="mb-4">
                        Nach der Datenschutz-Grundverordnung (DSGVO) haben Sie verschiedene Rechte bezüglich Ihrer personenbezogenen Daten:
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-medico-turquoise rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>Recht auf Zugang zu Ihren personenbezogenen Daten</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-medico-turquoise rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>Recht auf Berichtigung ungenauer Daten</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-medico-turquoise rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>Recht auf Löschung Ihrer Daten</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-medico-turquoise rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>Recht auf Datenübertragbarkeit (Erhalt Ihrer Daten in einem strukturierten Format)</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-medico-turquoise rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>Recht auf Widerspruch gegen die Verarbeitung Ihrer Daten</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-medico-turquoise rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>Recht auf Beschwerde bei Ihrer lokalen Aufsichtsbehörde</span>
                        </li>
                      </ul>
                      <p className="mt-4">
                        Um eines dieser Rechte auszuüben, kontaktieren Sie uns bitte unter{' '}
                        <a href="mailto:info@ooliv.de" className="text-medico-turquoise hover:underline font-medium">
                          info@ooliv.de
                        </a>.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem 
                  value="item-5" 
                  className="bg-white border border-medico-turquoise/10 rounded-xl px-6 py-2 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <AccordionTrigger className="text-base md:text-lg font-medium text-medico-darkGreen hover:no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-medico-turquoise focus-visible:ring-opacity-50 [&[data-state=open]]:text-medico-turquoise transition-colors duration-200">
                    <div className="flex items-center space-x-4 text-left">
                      <div className="flex-shrink-0 w-12 h-12 bg-medico-turquoise/10 rounded-xl flex items-center justify-center">
                        <Globe className="h-6 w-6 text-medico-turquoise" />
                      </div>
                      <span>Google-Dienste</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-[15px] md:text-[16px] text-medico-darkGreen/80 leading-relaxed mt-4 pb-4">
                    <div className="ml-16">
                      <p>
                        Wir verwenden Google Ads und Google Analytics, um unseren Website-Verkehr zu verstehen und unsere Marketingbemühungen zu optimieren. Die IP-Anonymisierung ist aktiv, um Ihre Privatsphäre zu schützen. Daten können in den USA gemäß den Datenschutzrichtlinien von Google verarbeitet werden. Sie können über{' '}
                        <a href="https://www.google.de/settings/ads" className="text-medico-turquoise hover:underline font-medium" target="_blank" rel="noopener noreferrer">
                          Google-Einstellungen
                        </a>{' '}
                        oder durch die Verwendung von Browser-Erweiterungen wie Google Analytics Opt-out widersprechen.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem 
                  value="item-6" 
                  className="bg-white border border-medico-turquoise/10 rounded-xl px-6 py-2 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <AccordionTrigger className="text-base md:text-lg font-medium text-medico-darkGreen hover:no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-medico-turquoise focus-visible:ring-opacity-50 [&[data-state=open]]:text-medico-turquoise transition-colors duration-200">
                    <div className="flex items-center space-x-4 text-left">
                      <div className="flex-shrink-0 w-12 h-12 bg-medico-turquoise/10 rounded-xl flex items-center justify-center">
                        <Globe className="h-6 w-6 text-medico-turquoise" />
                      </div>
                      <span>Externe Links</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-[15px] md:text-[16px] text-medico-darkGreen/80 leading-relaxed mt-4 pb-4">
                    <div className="ml-16">
                      <p>
                        Unsere Website kann Links zu externen Seiten enthalten, die nicht von uns betrieben werden. Wir sind nicht verantwortlich für den Inhalt oder die Datenschutzpraktiken dieser Drittanbieter-Websites. Wir empfehlen Ihnen, die Datenschutzrichtlinien aller externen Websites zu überprüfen, die Sie über Links auf unserer Website besuchen.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem 
                  value="item-7" 
                  className="bg-white border border-medico-turquoise/10 rounded-xl px-6 py-2 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <AccordionTrigger className="text-base md:text-lg font-medium text-medico-darkGreen hover:no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-medico-turquoise focus-visible:ring-opacity-50 [&[data-state=open]]:text-medico-turquoise transition-colors duration-200">
                    <div className="flex items-center space-x-4 text-left">
                      <div className="flex-shrink-0 w-12 h-12 bg-medico-turquoise/10 rounded-xl flex items-center justify-center">
                        <Shield className="h-6 w-6 text-medico-turquoise" />
                      </div>
                      <span>Datensicherheit</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-[15px] md:text-[16px] text-medico-darkGreen/80 leading-relaxed mt-4 pb-4">
                    <div className="ml-16">
                      <p>
                        Wir implementieren starke Sicherheitsprotokolle, können aber keinen 100%igen Schutz gegen alle Bedrohungen garantieren. Unsere Website verwendet SSL-Verschlüsselung zum Schutz der Datenübertragung, und wir aktualisieren regelmäßig unsere Systeme, um die Sicherheit aufrechtzuerhalten. Dennoch ist keine Methode der elektronischen Speicherung oder Übertragung vollständig sicher. Wir raten davon ab, hochsensible Daten per E-Mail oder über Standard-Kontaktformulare zu senden.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem 
                  value="item-8" 
                  className="bg-white border border-medico-turquoise/10 rounded-xl px-6 py-2 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <AccordionTrigger className="text-base md:text-lg font-medium text-medico-darkGreen hover:no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-medico-turquoise focus-visible:ring-opacity-50 [&[data-state=open]]:text-medico-turquoise transition-colors duration-200">
                    <div className="flex items-center space-x-4 text-left">
                      <div className="flex-shrink-0 w-12 h-12 bg-medico-turquoise/10 rounded-xl flex items-center justify-center">
                        <RefreshCw className="h-6 w-6 text-medico-turquoise" />
                      </div>
                      <span>Aktualisierungen der Richtlinie</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-[15px] md:text-[16px] text-medico-darkGreen/80 leading-relaxed mt-4 pb-4">
                    <div className="ml-16">
                      <p>
                        Diese Richtlinie kann sich ändern, wenn sich rechtliche oder technische Bedingungen weiterentwickeln. Wir werden alle Überarbeitungen auf dieser Seite mit einem aktualisierten Datum des Inkrafttretens veröffentlichen. Bei erheblichen Änderungen können wir auch einen auffälligeren Hinweis geben. Bitte überprüfen Sie diese Richtlinie regelmäßig, um über den Schutz Ihrer Informationen informiert zu bleiben.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </div>
            </Accordion>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default GermanPrivacyPolicy;
