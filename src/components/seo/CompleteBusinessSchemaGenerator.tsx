import React from 'react';

interface CompleteBusinessSchemaProps {
  businessName: string;
  description: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    postalCode: string;
    addressRegion: string;
    addressCountry: string;
  };
  telephone: string;
  email: string;
  url: string;
  areaServed?: string[];
  services?: string[];
}

const CompleteBusinessSchemaGenerator: React.FC<CompleteBusinessSchemaProps> = ({
  businessName,
  description,
  address,
  telephone,
  email,
  url,
  areaServed = ["Mainz", "Wiesbaden", "Frankfurt", "Rhein-Main-Gebiet"],
  services = ["Webdesign", "Webentwicklung", "SEO", "Google Ads", "Content Marketing", "KI-Technologien"]
}) => {
  
  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": businessName,
    "url": url,
    "logo": "https://ooliv.de/ooliv_logo_2025.svg",
    "email": email,
    "telephone": telephone,
    "description": description,
    "foundingDate": "2009",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address.streetAddress,
      "addressLocality": address.addressLocality,
      "postalCode": address.postalCode,
      "addressCountry": address.addressCountry
    },
    "sameAs": [
      "https://www.sortlist.de/agency/uli-werbeagentur"
    ],
    "services": services,
    "serviceArea": areaServed,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "25"
    }
  };

  // WebPage Schema
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Werbeagentur Mainz | ooliv - Ihre digitale Marketing Agentur",
    "url": url,
    "description": "ooliv Werbeagentur entwickelt Websites für B2B-Unternehmen, die messbar mehr Leads generieren. Webdesign, SEO, Google Ads und Content-Marketing aus Mainz.",
    "inLanguage": "de",
    "publisher": {
      "@type": "Organization",
      "name": businessName,
      "url": url,
      "logo": "https://ooliv.de/ooliv_logo_2025.svg"
    }
  };

  // LocalBusiness Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": businessName,
    "url": url,
    "image": "https://ooliv.de/ooliv_logo_2025.svg",
    "email": email,
    "telephone": telephone,
    "description": description,
    "foundingDate": "2009",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address.streetAddress,
      "addressLocality": address.addressLocality,
      "postalCode": address.postalCode,
      "addressCountry": address.addressCountry
    },
    "sameAs": [
      "https://www.sortlist.de/agency/uli-werbeagentur"
    ],
    "serviceArea": areaServed,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "25"
    }
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(webPageSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
    </>
  );
};

export default CompleteBusinessSchemaGenerator;