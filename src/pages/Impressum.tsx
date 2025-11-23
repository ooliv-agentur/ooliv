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
    "description": "Digitale Strategie, UX-Architektur & Webentwicklung aus Mainz",
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
        title="Impressum | ooliv – Digitale Strategie & UX"
        description="Offizielle Unternehmensangaben zu ooliv. Transparente Informationen gemäß §5 TMG und DSGVO."
        canonicalUrl="https://ooliv.de/impressum"
        robotsContent="noindex, follow"
        structuredData={structuredData}
        keywords="Impressum, ooliv, Mainz, Digitale Strategie, Anbieterkennzeichnung, TMG"
      />

      <LegalHero
        badge="Impressum"
        title="Impressum"
        subtitle="Gesetzlich vorgeschriebene Informationen zu ooliv. Klar, transparent und vollständig."
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Firmendaten Card */}
            <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Building className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Unternehmensangaben</h3>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <p className="text-xl font-semibold text-foreground mb-2">ooliv</p>
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
                    <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="font-medium">+49 6131 6367801</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600 space-x-3">
                    <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="font-medium">info@ooliv.de</span>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <p className="font-bold text-foreground mb-1">Inhaber:</p>
                    <p className="text-gray-600">Uli Schönleber</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-foreground mb-1">USt.-IdNr.:</p>
                    <p className="text-gray-600">DE265704357</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Urheberrechtshinweis Card */}
            <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Urheberrechtshinweis</h3>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-8">
                  Alle Inhalte und Medien auf dieser Website sind durch das deutsche Urheberrecht und verwandte Schutzrechte geschützt. Jede Form der Wiederverwendung, Vervielfältigung oder Verbreitung außerhalb der Grenzen des Urheberrechts erfordert eine schriftliche Zustimmung. Unbefugte Nutzung wird rechtlich verfolgt.
                </p>

                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex-shrink-0 w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <AlertTriangle className="h-5 w-5 text-yellow-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground">Einspruch gegen Werbe-E-Mails</h4>
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  Wir widersprechen ausdrücklich der Nutzung unserer Kontaktdaten für Werbezwecke oder unerwünschte Zusendungen. Wir behalten uns rechtliche Schritte bei Missbrauch vor.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Datenschutzerklärung Link */}
          <div className="flex justify-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              className="font-semibold py-3 px-8 rounded-full border-2 border-foreground text-foreground hover:bg-secondary hover:border-primary transition-all duration-300"
              asChild
            >
              <Link to="/datenschutz">
                Zur Datenschutzerklärung
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default GermanLegalNotice;
