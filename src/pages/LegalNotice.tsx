
import React from 'react';
import PageLayout from '@/components/PageLayout';
import LegalHero from '@/components/legal/LegalHero';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Mail, Phone, Building, FileText, AlertTriangle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const LegalNotice = () => {
  const handleOpenLeadForm = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new Event('open-lead-form'));
  };
  
  return (
    <PageLayout className="overflow-x-hidden">
      <LegalHero
        badge="Legal"
        title="Legal Notice & Company Details"
        subtitle="Transparent company information in line with §5 TMG & EU regulations. This page provides all legally required information about ooliv."
        primaryCta={{
          text: "Start Your Project",
          link: "#",
          onClick: handleOpenLeadForm
        }}
        secondaryCta={{
          text: "Contact Us",
          link: "/contact"
        }}
      />

      <section className="section-standard">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Company Details Column */}
            <div>
              <Card className="card-layout h-full">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="icon-background text-brand-primary">
                      <Building className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold">Company Details</h3>
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

            {/* Legal Notices Column */}
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
                    All content and media on this website are protected by German copyright and ancillary copyright law. Any form of reuse, reproduction or distribution outside the limits of copyright law requires written consent. Unauthorized use will be legally pursued.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-layout">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="icon-background text-brand-primary">
                      <AlertTriangle className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold">Objection to Promotional Emails</h3>
                  </div>
                  
                  <p className="text-brand-text">
                    We object to the use of our published contact information for unsolicited advertising. We reserve the right to take legal action in the case of unrequested promotional emails (spam).
                  </p>
                </CardContent>
              </Card>
              
              <div className="flex justify-center md:justify-start pt-4">
                <Button variant="outline" asChild>
                  <Link to="/privacy-policy">View Privacy Policy →</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Added extra spacing before the footer */}
          <div className="pb-16"></div>
        </div>
      </section>
    </PageLayout>
  );
};

export default LegalNotice;
