
import React from 'react';
import PageLayout from '@/components/PageLayout';

const LegalNotice = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-16 pt-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Legal Notice</h1>
        </div>

        <div className="prose max-w-none">
          <h2>Company Information</h2>
          <p>
            ooliv GmbH<br />
            Sample Street 123<br />
            12345 City<br />
            Country
          </p>
          
          <p>
            Phone: +1 (123) 456-7890<br />
            Email: info@ooliv.com
          </p>
          
          <h2>Registration</h2>
          <p>
            Commercial Register: Sample Commercial Court<br />
            Registration Number: 123456789<br />
            VAT ID: DE123456789
          </p>
          
          <h2>Represented by</h2>
          <p>
            John Doe, CEO
          </p>
          
          <h2>Disclaimer</h2>
          <h3>Liability for Content</h3>
          <p>
            The contents of our pages have been created with the utmost care. However, we cannot guarantee the contents' accuracy, completeness, or topicality. According to statutory provisions, we are furthermore responsible for our own content on these web pages. In this context, please note that we are accordingly not obliged to monitor merely the transmitted or saved information of third parties, or investigate circumstances pointing to illegal activity. Our obligations to remove or block the use of information under generally applicable laws remain unaffected by this as per §§ 8 to 10 of the Telemedia Act (TMG).
          </p>
          
          <h3>Liability for Links</h3>
          <p>
            Our offer includes links to external third-party websites. We have no influence on the contents of those websites, therefore we cannot guarantee for those contents. Providers or administrators of linked websites are always responsible for their own contents. The linked websites had been checked for possible violations of law at the time of the establishment of the link. Illegal contents were not detected at the time of the linking. A permanent monitoring of the contents of linked websites cannot be imposed without reasonable indications that there has been a violation of law. Upon notification of violations, we will remove such links immediately.
          </p>
          
          <h3>Copyright</h3>
          <p>
            The contents and works on these pages created by the site operators are subject to copyright law. The duplication, processing, distribution, and any kind of exploitation outside the limits of copyright require the written consent of the respective author or creator. Downloads and copies of these pages are only permitted for private, non-commercial use. Insofar as the content on this site was not created by the operator, the copyrights of third parties are respected. In particular, third-party content is marked as such. Should you still be aware of a copyright infringement, please inform us accordingly. Upon notification of violations, we will remove such contents immediately.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default LegalNotice;
