
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
    <PageLayout className="overflow-x-hidden">
      <Helmet>
        <title>Legal Notice | ooliv</title>
        <meta name="description" content="Legal information about ooliv." />
      </Helmet>
      
      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-6">Legal Notice</h1>
        
        <div className="mt-6 prose max-w-none">
          <h2>Information pursuant to § 5 TMG</h2>
          <p>
          ooliv<br />
          Mombacher Str. 25<br />
          55122 Mainz<br />
          Germany
          </p>
          
          <h3>Represented by</h3>
          <p>Uli Stadtfeld</p>
          
          <h3>Contact</h3>
          <p>
          Phone: 06131 – 63 67 801<br />
          Email: info@ooliv.de
          </p>
          
          <h3>VAT ID</h3>
          <p>
          Sales tax identification number according to § 27 a of the Sales Tax Law:<br />
          DE123456789
          </p>
          
          <h3>Responsible for content according to § 55(2) RStV</h3>
          <p>
          Uli Stadtfeld<br />
          Mombacher Str. 25<br />
          55122 Mainz<br />
          Germany
          </p>
          
          <h2>Dispute Resolution</h2>
          <p>The European Commission provides a platform for online dispute resolution (OS): <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a>.</p>
          <p>We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.</p>
          
          <h2>Liability for Contents</h2>
          <p>As a service provider, we are responsible for our own content on these pages according to § 7, paragraph 1 TMG (German Telemedia Act). According to §§ 8 to 10 TMG, however, we are not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.</p>
          <p>Obligations to remove or block the use of information under general laws remain unaffected. However, liability in this regard is only possible from the point in time at which a concrete infringement of the law becomes known. If we become aware of such infringements, we will remove this content immediately.</p>
          
          <h2>Liability for Links</h2>
          <p>Our offer contains links to external websites of third parties, on whose contents we have no influence. Therefore, we cannot assume any liability for these external contents. The respective provider or operator of the pages is always responsible for the contents of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal contents were not recognizable at the time of linking.</p>
          <p>However, a permanent control of the contents of the linked pages is not reasonable without concrete evidence of a violation of the law. If we become aware of any infringements, we will remove such links immediately.</p>
        </div>
      </div>
    </PageLayout>
  );
};

export default EnglishLegalNotice;
