
import React from 'react';
import PageLayout from '@/components/PageLayout';

const DataPrivacy = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-16 pt-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Data Privacy Policy</h1>
        </div>

        <div className="prose max-w-none">
          <h2>1. Introduction</h2>
          <p>
            This Privacy Policy explains how ooliv ("we", "us", "our") collects, uses, and discloses your personal information when you visit our website or use our services. We respect your privacy and are committed to protecting your personal data.
          </p>
          
          <h2>2. Information We Collect</h2>
          <p>
            We may collect several different types of information for various purposes to provide and improve our service to you.
          </p>
          
          <h3>2.1 Personal Data</h3>
          <p>
            While using our service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. This may include, but is not limited to:
          </p>
          <ul>
            <li>Email address</li>
            <li>First name and last name</li>
            <li>Phone number</li>
            <li>Address</li>
            <li>Cookies and Usage Data</li>
          </ul>
          
          <h3>2.2 Usage Data</h3>
          <p>
            We may also collect information on how the service is accessed and used. This may include information such as your computer's Internet Protocol address (e.g., IP address), browser type, browser version, the pages of our service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers, and other diagnostic data.
          </p>
          
          <h2>3. Use of Data</h2>
          <p>
            ooliv uses the collected data for various purposes:
          </p>
          <ul>
            <li>To provide and maintain our service</li>
            <li>To notify you about changes to our service</li>
            <li>To provide customer support</li>
            <li>To gather analysis or valuable information so that we can improve our service</li>
            <li>To monitor the usage of our service</li>
            <li>To detect, prevent and address technical issues</li>
          </ul>
          
          <h2>4. Data Storage and Transfer</h2>
          <p>
            Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.
          </p>
          <p>
            Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.
          </p>
          
          <h2>5. Disclosure of Data</h2>
          <p>
            We may disclose your Personal Data in the good faith belief that such action is necessary to:
          </p>
          <ul>
            <li>Comply with a legal obligation</li>
            <li>Protect and defend the rights or property of ooliv</li>
            <li>Prevent or investigate possible wrongdoing in connection with the service</li>
            <li>Protect the personal safety of users of the service or the public</li>
            <li>Protect against legal liability</li>
          </ul>
          
          <h2>6. Security of Data</h2>
          <p>
            The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
          </p>
          
          <h2>7. Your Rights</h2>
          <p>
            Depending on where you reside, you may have certain rights regarding your personal information, such as:
          </p>
          <ul>
            <li>Right to access the personal information we hold about you</li>
            <li>Right to rectification of inaccurate information</li>
            <li>Right to erasure of your information</li>
            <li>Right to restrict processing of your information</li>
            <li>Right to data portability</li>
            <li>Right to object to processing</li>
          </ul>
          
          <h2>8. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <p>
            By email: privacy@ooliv.com<br />
            By phone: +1 (123) 456-7890
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default DataPrivacy;
