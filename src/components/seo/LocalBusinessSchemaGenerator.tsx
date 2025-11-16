import React from 'react';

interface LocalBusinessSchemaProps {
  businessName: string;
  description: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    postalCode: string;
    addressRegion: string;
    addressCountry: string;
  };
  geo: {
    latitude: number;
    longitude: number;
  };
  telephone: string;
  email: string;
  url: string;
  priceRange?: string;
  openingHours?: string[];
  areaServed?: string[];
  services?: string[];
}

const LocalBusinessSchemaGenerator: React.FC<LocalBusinessSchemaProps> = ({
  businessName,
  description,
  address,
  geo,
  telephone,
  email,
  url,
  priceRange,
  openingHours = ["Mo-Fr 09:00-18:00"],
  areaServed = ["Mainz", "Wiesbaden", "Frankfurt", "Rheinland-Pfalz"],
  services = ["Webdesign", "SEO", "Google Ads", "Online Marketing"]
}) => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": businessName,
    "description": description,
    "image": "https://ooliv.de/ooliv_logo_2025.svg",
    "logo": "https://ooliv.de/ooliv_logo_2025.svg",
    "url": url,
    "telephone": telephone,
    "email": email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address.streetAddress,
      "addressLocality": address.addressLocality,
      "postalCode": address.postalCode,
      "addressRegion": address.addressRegion,
      "addressCountry": address.addressCountry
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": geo.latitude,
      "longitude": geo.longitude
    },
    "openingHoursSpecification": openingHours.map(hours => ({
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": hours.split(' ')[0],
      "opens": hours.split(' ')[1]?.split('-')[0],
      "closes": hours.split(' ')[1]?.split('-')[1]
    })),
    "areaServed": areaServed.map(area => ({
      "@type": "Place",
      "name": area
    })),
    "makesOffer": services.map(service => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": service,
        "serviceType": service
      }
    })),
    ...(priceRange && { "priceRange": priceRange }),
    "knowsAbout": [
      "Webdesign",
      "Suchmaschinenoptimierung",
      "Google Ads",
      "Online Marketing",
      "Digitale Strategien",
      "UX Design",
      "Content Marketing"
    ],
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "name": "Google Partner",
      "credentialCategory": "certification"
    }
  };

  return (
    <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  );
};

export default LocalBusinessSchemaGenerator;