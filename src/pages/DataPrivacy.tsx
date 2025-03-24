
import React from 'react';
import PageLayout from '@/components/PageLayout';

const DataPrivacy = () => {
  return (
    <PageLayout className="overflow-x-hidden">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-16 pt-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Data Privacy Policy</h1>
        </div>

        <div className="prose max-w-none">
          <h2>Privacy Policy</h2>
          <p>This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from our website.</p>
          
          <h2>Personal information we collect</h2>
          <p>When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.</p>
          
          <h2>How we use your personal information</h2>
          <p>We use the information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations). Additionally, we use this information to communicate with you and screen our orders for potential risk or fraud.</p>
          
          <h2>Sharing your personal Information</h2>
          <p>We share your Personal Information with third parties to help us use your Personal Information, as described above.</p>
          
          <h2>Behavioural advertising</h2>
          <p>We use your Personal Information to provide you with targeted advertisements or marketing communications we believe may be of interest to you.</p>
          
          <h2>Your rights</h2>
          <p>If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us.</p>
          
          <h2>Data retention</h2>
          <p>When you place an order through the Site, we will maintain your Order Information for our records unless and until you ask us to delete this information.</p>
          
          <h2>Changes</h2>
          <p>We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.</p>
          
          <h2>Contact us</h2>
          <p>For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at info@ooliv.com.</p>
        </div>
      </div>
    </PageLayout>
  );
};

export default DataPrivacy;
