
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';

const EnglishLegalNotice = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('en');
  }, [setLanguage]);

  return (
    <PageLayout>
      <Helmet>
        <title>Legal Notice | ooliv Marketing Agency Mainz</title>
        <meta name="description" content="Legal notice of ooliv Marketing Agency Mainz. All legal information and contact details according to German law." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-brand-heading mb-8">Legal Notice</h1>
          
          <div className="prose prose-lg max-w-none">
            <h2>Information according to § 5 TMG</h2>
            <p>
              ooliv GmbH<br />
              Uli Schönleber<br />
              Rheinstraße 4K<br />
              55116 Mainz<br />
              Germany
            </p>
            
            <h2>Contact</h2>
            <p>
              Phone: +49 (0) 6131 63 67 801<br />
              Email: info@ooliv.de
            </p>
            
            <h2>Register Entry</h2>
            <p>
              Commercial Register: Amtsgericht Mainz<br />
              Registration Number: HRB 47896
            </p>
            
            <h2>VAT ID</h2>
            <p>
              VAT Identification Number according to § 27 a of the VAT Law:<br />
              DE815569091
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default EnglishLegalNotice;
