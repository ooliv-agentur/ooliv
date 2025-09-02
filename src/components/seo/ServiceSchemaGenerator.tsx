import React from 'react';

interface ServiceSchemaProps {
  serviceName: string;
  description: string;
  serviceType: string;
  areaServed?: string[];
  priceRange?: string;
  provider?: {
    name: string;
    url: string;
  };
  offers?: Array<{
    name: string;
    description: string;
    priceRange?: string;
  }>;
}

const ServiceSchemaGenerator: React.FC<ServiceSchemaProps> = ({
  serviceName,
  description,
  serviceType,
  areaServed = ["Mainz", "Wiesbaden", "Frankfurt", "Rheinland-Pfalz", "Deutschland"],
  priceRange,
  provider = {
    name: "ooliv Werbeagentur",
    url: "https://ooliv.de"
  },
  offers = []
}) => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": description,
    "serviceType": serviceType,
    "provider": {
      "@type": "Organization",
      "name": provider.name,
      "url": provider.url,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Am Brand 8",
        "addressLocality": "Mainz",
        "postalCode": "55116",
        "addressCountry": "DE",
        "addressRegion": "Rheinland-Pfalz"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 49.9928617,
        "longitude": 8.2472526
      },
      "telephone": "+49-6131-9027640",
      "email": "hallo@ooliv.de"
    },
    "areaServed": areaServed.map(area => ({
      "@type": "Place",
      "name": area
    })),
    ...(priceRange && { "priceRange": priceRange }),
    ...(offers.length > 0 && {
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": `${serviceName} Services`,
        "itemListElement": offers.map((offer, index) => ({
          "@type": "Offer",
          "position": index + 1,
          "name": offer.name,
          "description": offer.description,
          ...(offer.priceRange && { "priceRange": offer.priceRange }),
          "eligibleRegion": areaServed.map(area => ({
            "@type": "Place",
            "name": area
          }))
        }))
      }
    }),
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": provider.url,
      "serviceSmsNumber": "+49-6131-9027640",
      "servicePhone": "+49-6131-9027640"
    }
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(serviceSchema)}
    </script>
  );
};

export default ServiceSchemaGenerator;