
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import LegalHero from '@/components/legal/LegalHero';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Mail, Phone, Building, FileText, AlertTriangle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const EnglishLegalNotice = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('en');
  }, [setLanguage]);

  return (
    <PageLayout className="overflow-x-hidden">
      <Helmet>
        <title>Legal Notice | ooliv Marketing Agency Mainz</title>
        <meta name="description" content="Legal provider identification of ooliv Marketing Agency Mainz in accordance with § 5 TMG." />
      </Helmet>

      <LegalHero
        badge="Legal Notice"
        title="Legal Notice & Company Details"
        subtitle="Transparent company information according to §5 TMG & EU regulations. This page contains all legally required information about ooliv."
        primaryCta={{
          text: "Start Project",
          link: "#",
          onClick: (e) => {
            e.preventDefault();
            window.dispatchEvent(new Event('open-lead-form'));
          }
        }}
        secondaryCta={{
          text: "Contact Us",
          link: "/en/contact"
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
                    <h3 className="text-2xl font-bold">Company Data</h3>
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
                      <p className="font-medium">Owner:</p>
                      <p>Uli Schönleber</p>
                    </div>
                    
                    <div className="pt-2">
                      <p className="font-medium">VAT ID:</p>
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
                    <h3 className="text-2xl font-bold">Copyright Notice</h3>
                  </div>
                  
                  <p className="text-brand-text">
                    All content and media on this website are protected by German copyright law and related intellectual property rights. Any form of reuse, reproduction, or distribution beyond the limits of copyright law requires written consent. Unauthorized use will be legally pursued.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-layout">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="icon-background text-brand-primary">
                      <AlertTriangle className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold">Objection to Advertising Emails</h3>
                  </div>
                  
                  <p className="text-brand-text">
                    We object to the use of our published contact details for unsolicited advertising. We reserve the right to take legal action in the event of unsolicited advertising emails (spam).
                  </p>
                </CardContent>
              </Card>
              
              <div className="flex justify-center md:justify-start pt-4">
                <Button variant="outline" asChild data-trigger-lead-form>
                  <Link to="/en/privacy-policy">Privacy Policy →</Link>
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

export default EnglishLegalNotice;
