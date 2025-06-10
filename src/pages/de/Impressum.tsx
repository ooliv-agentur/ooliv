import React, { useEffect, useRef } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import LegalHero from '@/components/legal/LegalHero';
import { useLanguage } from '@/contexts/LanguageContext';
import { Building, Phone, Mail, FileText, AlertTriangle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const GermanLegalNotice = () => {
  const impressumRef = useRef<HTMLDivElement>(null);
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
      <Helmet>
        <title>Impressum | ooliv Werbeagentur Mainz</title>
        <meta name="description" content="Impressum der ooliv Werbeagentur Mainz. Alle rechtlichen Informationen und Kontaktdaten unserer Agentur für Webdesign und digitales Marketing." />
        <meta name="keywords" content="Impressum ooliv Mainz, Rechtliche Informationen Werbeagentur, Kontaktdaten ooliv Mainz, Angaben nach TMG Mainz" />
      </Helmet>

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
          link: "/de/kontakt"
        }}
      />

      <section className="section-standard">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Card className="card-layout h-full">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="icon-background text-brand-primary">
                      <Building className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold">Firmendaten</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-lg font-semibold text-brand-heading">ooliv</p>
                    <p className="text-brand-text">
                      Eduard von Heuss Str. 29<br />
                      55294 Bodenheim<br />
                      Germany
                    </p>
                    
                    <div className="flex items-center text-brand-text space-x-2">
                      <Phone className="h-4 w-4 text-brand-primary" />
                      <span>06131-6367801</span>
                    </div>
                    
                    <div className="flex items-center text-brand-text space-x-2">
                      <Mail className="h-4 w-4 text-brand-primary" />
                      <span>info@ooliv.de</span>
                    </div>
                    
                    <div className="pt-4">
                      <p className="font-medium">Inhaber:</p>
                      <p>Uli Schönleber</p>
                    </div>
                    
                    <div className="pt-2">
                      <p className="font-medium">USt.-IdNr.:</p>
                      <p>DE265704357</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="card-layout">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="icon-background text-brand-primary">
                      <FileText className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold">Urheberrechtshinweis</h3>
                  </div>
                  
                  <p className="text-brand-text">
                    Alle Inhalte und Medien auf dieser Website sind durch das deutsche Urheberrecht und verwandte Schutzrechte geschützt. Jede Form der Wiederverwendung, Vervielfältigung oder Verbreitung außerhalb der Grenzen des Urheberrechts erfordert eine schriftliche Zustimmung. Unbefugte Nutzung wird rechtlich verfolgt.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-layout">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="icon-background text-brand-primary">
                      <AlertTriangle className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold">Einspruch gegen Werbe-E-Mails</h3>
                  </div>
                  
                  <p className="text-brand-text">
                    Wir widersprechen der Nutzung unserer veröffentlichten Kontaktdaten für unaufgeforderte Werbung. Wir behalten uns das Recht vor, im Falle unaufgeforderter Werbe-E-Mails (Spam) rechtliche Schritte einzuleiten.
                  </p>
                </CardContent>
              </Card>
              
              <div className="flex justify-center md:justify-start pt-4">
                <Button variant="outline" asChild data-trigger-lead-form>
                  <Link to="/de/datenschutz">Datenschutzerklärung →</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="pb-16"></div>
        </div>
      </section>
    </PageLayout>
  );
};

export default GermanLegalNotice;
