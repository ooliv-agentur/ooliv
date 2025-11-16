import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';
import LegalHero from '@/components/legal/LegalHero';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Mail, Phone, Building, FileText, AlertTriangle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import TurquoiseCard from '@/components/ui/TurquoiseCard';

const GermanLegalNotice = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('de');
  }, [setLanguage]);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ooliv",
    "description": "Werbeagentur Mainz für Webdesign, SEO und digitales Marketing",
    "url": "https://ooliv.de",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Eduard von Heuss Str. 29",
      "addressLocality": "Bodenheim",
      "postalCode": "55294",
      "addressCountry": "DE"
    },
    "telephone": "+49-6131-6367801",
    "email": "info@ooliv.de",
    "founder": {
      "@type": "Person",
      "name": "Uli Schönleber"
    },
    "vatID": "DE265704357"
  };

  return (
    <PageLayout className="overflow-x-hidden">
      <EnhancedSEOHead
        title="Impressum | ooliv Werbeagentur Mainz"
        description="Gesetzliche Anbieterkennzeichnung der ooliv Werbeagentur Mainz gemäß § 5 TMG. Vollständige Unternehmensdaten und Kontaktinformationen."
        canonicalUrl="https://ooliv.de/impressum"
        robotsContent="noindex, follow"
        structuredData={structuredData}
        keywords="Impressum, ooliv, Werbeagentur Mainz, Anbieterkennzeichnung, TMG"
      />

      <LegalHero
        badge="Impressum"
        title="Impressum & Unternehmensdetails"
        subtitle="Transparente Unternehmensinformationen gemäß §5 TMG & EU-Verordnungen. Diese Seite enthält alle gesetzlich vorgeschriebenen Informationen über ooliv."
        primaryCta={{
          text: "Projekt starten",
          link: "#",
          onClick: (e) => {
            e.preventDefault();
            window.dispatchEvent(new Event('open-lead-form'));
          }
        }}
        secondaryCta={{
          text: "Kontakt aufnehmen",
          link: "/kontakt"
        }}
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Firmendaten Card */}
            <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="flex-shrink-0 w-12 h-12 bg-medico-turquoise/10 rounded-xl flex items-center justify-center">
                    <Building className="h-6 w-6 text-medico-turquoise" />
                  </div>
                  <h3 className="text-2xl font-bold text-medico-darkGreen">Firmendaten</h3>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <p className="text-xl font-semibold text-medico-darkGreen mb-2">ooliv</p>
                    <p className="text-sm text-gray-500 mb-3">Meldeadresse (Einzelunternehmen)</p>
                    <div className="text-gray-600 leading-relaxed">
                      <p>Eduard von Heuss Str. 29</p>
                      <p>55294 Bodenheim</p>
                      <p>Germany</p>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-500 mb-3">Geschäftssitz</p>
                    <div className="text-gray-600 leading-relaxed">
                      <p>Mombacher Str. 25</p>
                      <p>55122 Mainz</p>
                      <p>Germany</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-600 space-x-3">
                    <Phone className="h-5 w-5 text-medico-turquoise flex-shrink-0" />
                    <span className="font-medium">06131-6367801</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600 space-x-3">
                    <Mail className="h-5 w-5 text-medico-turquoise flex-shrink-0" />
                    <span className="font-medium">info@ooliv.de</span>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <p className="font-semibold text-medico-darkGreen mb-1">Inhaber:</p>
                    <p className="text-gray-600">Uli Schönleber</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-medico-darkGreen mb-1">USt.-IdNr.:</p>
                    <p className="text-gray-600">DE265704357</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Urheberrechtshinweis Card */}
            <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="flex-shrink-0 w-12 h-12 bg-medico-turquoise/10 rounded-xl flex items-center justify-center">
                    <FileText className="h-6 w-6 text-medico-turquoise" />
                  </div>
                  <h3 className="text-2xl font-bold text-medico-darkGreen">Urheberrechtshinweis</h3>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-8">
                  Alle Inhalte und Medien auf dieser Website sind durch das deutsche Urheberrecht und verwandte Schutzrechte geschützt. Jede Form der Wiederverwendung, Vervielfältigung oder Verbreitung außerhalb der Grenzen des Urheberrechts erfordert eine schriftliche Zustimmung. Unbefugte Nutzung wird rechtlich verfolgt.
                </p>

                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex-shrink-0 w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <AlertTriangle className="h-5 w-5 text-yellow-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-medico-darkGreen">Einspruch gegen Werbe-E-Mails</h4>
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  Wir widersprechen der Nutzung unserer veröffentlichten Kontaktdaten für unaufgeforderte Werbung. Wir behalten uns das Recht vor, im Falle unaufgeforderter Werbe-E-Mails (Spam) rechtliche Schritte einzuleiten.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Datenschutzerklärung Link */}
          <div className="flex justify-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              className="font-semibold py-3 px-8 rounded-full border-2 border-medico-darkGreen text-medico-darkGreen hover:bg-medico-mint hover:border-medico-turquoise transition-all duration-300"
              asChild
            >
              <Link to="/datenschutz">
                Datenschutzerklärung →
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default GermanLegalNotice;
