
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Mail, Phone, Building, FileText, AlertTriangle, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const GermanLegalNotice = () => {
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
        <meta name="description" content="Gesetzliche Anbieterkennzeichnung der ooliv Werbeagentur Mainz gemäß § 5 TMG." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-background to-white py-20 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium mb-6">
              <FileText className="h-4 w-4 mr-2" />
              Impressum
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-brand-heading mb-6 leading-tight">
              Impressum & 
              <span className="block text-brand-primary">Unternehmensdetails</span>
            </h1>
            
            <p className="text-lg md:text-xl text-brand-text max-w-3xl mx-auto mb-8 leading-relaxed">
              Transparente Unternehmensinformationen gemäß §5 TMG & EU-Verordnungen. 
              Diese Seite enthält alle gesetzlich vorgeschriebenen Informationen über ooliv.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={handleOpenLeadForm}
                className="font-bold"
              >
                Projekt starten
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                asChild
              >
                <Link to="/de/kontakt">Kontakt aufnehmen</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Company Information Card */}
            <Card className="bg-white shadow-lg border-0 rounded-2xl overflow-hidden h-fit">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-8">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center">
                    <Building className="h-6 w-6 text-brand-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-brand-heading mb-2">
                      Firmendaten
                    </h2>
                    <p className="text-brand-text/70">
                      Alle wichtigen Unternehmensinformationen
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-brand-heading mb-2">ooliv</h3>
                    <p className="text-brand-text">Werbeagentur für digitales Marketing</p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-brand-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-brand-heading">Anschrift</p>
                      <p className="text-brand-text">
                        Eduard von Heuss Str. 29<br />
                        55294 Bodenheim<br />
                        Deutschland
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-brand-primary" />
                    <div>
                      <p className="font-medium text-brand-heading">Telefon</p>
                      <p className="text-brand-text">06131-6367801</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-brand-primary" />
                    <div>
                      <p className="font-medium text-brand-heading">E-Mail</p>
                      <p className="text-brand-text">info@ooliv.de</p>
                    </div>
                  </div>
                  
                  <div className="border-t pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-medium text-brand-heading">Inhaber</p>
                        <p className="text-brand-text">Uli Schönleber</p>
                      </div>
                      <div>
                        <p className="font-medium text-brand-heading">USt.-IdNr.</p>
                        <p className="text-brand-text">DE265704357</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Legal Information */}
            <div className="space-y-8">
              
              {/* Copyright Notice */}
              <Card className="bg-white shadow-lg border-0 rounded-2xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-brand-secondary/10 rounded-xl flex items-center justify-center">
                      <FileText className="h-6 w-6 text-brand-secondary" />
                    </div>
                    <div>
                      <h3 className="text-xl lg:text-2xl font-bold text-brand-heading mb-2">
                        Urheberrechtshinweis
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-brand-text leading-relaxed">
                    Alle Inhalte und Medien auf dieser Website sind durch das deutsche Urheberrecht 
                    und verwandte Schutzrechte geschützt. Jede Form der Wiederverwendung, 
                    Vervielfältigung oder Verbreitung außerhalb der Grenzen des Urheberrechts 
                    erfordert eine schriftliche Zustimmung. Unbefugte Nutzung wird rechtlich verfolgt.
                  </p>
                </CardContent>
              </Card>

              {/* Anti-Spam Notice */}
              <Card className="bg-white shadow-lg border-0 rounded-2xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                      <AlertTriangle className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-xl lg:text-2xl font-bold text-brand-heading mb-2">
                        Einspruch gegen Werbe-E-Mails
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-brand-text leading-relaxed">
                    Wir widersprechen der Nutzung unserer veröffentlichten Kontaktdaten für 
                    unaufgeforderte Werbung. Wir behalten uns das Recht vor, im Falle 
                    unaufgeforderter Werbe-E-Mails (Spam) rechtliche Schritte einzuleiten.
                  </p>
                </CardContent>
              </Card>
              
              {/* CTA Section */}
              <div className="bg-gradient-to-r from-brand-primary/5 to-brand-secondary/5 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-brand-heading mb-4">
                  Weitere rechtliche Informationen
                </h3>
                <p className="text-brand-text mb-6">
                  Erfahren Sie mehr über unseren Datenschutz und wie wir Ihre Daten behandeln.
                </p>
                <Button variant="outline" asChild>
                  <Link to="/de/datenschutz">
                    Datenschutzerklärung →
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default GermanLegalNotice;
