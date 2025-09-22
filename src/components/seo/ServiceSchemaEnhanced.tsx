import React from 'react';

interface ServiceSchemaProps {
  serviceName: string;
  description: string;
  serviceType: string;
  provider: {
    name: string;
    url: string;
    logo: string;
    address: {
      streetAddress: string;
      addressLocality: string;
      postalCode: string;
      addressCountry: string;
    };
    telephone?: string;
    email?: string;
  };
  serviceUrl: string;
  offers?: {
    price?: string;
    priceCurrency?: string;
    priceRange?: string;
    availability?: string;
  };
  areaServed?: string[];
  additionalServices?: string[];
}

const ServiceSchemaEnhanced: React.FC<ServiceSchemaProps> = ({
  serviceName,
  description,
  serviceType,
  provider,
  serviceUrl,
  offers,
  areaServed = ["Mainz", "Wiesbaden", "Frankfurt", "Deutschland"],
  additionalServices = []
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
      "logo": {
        "@type": "ImageObject",
        "url": provider.logo
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": provider.address.streetAddress,
        "addressLocality": provider.address.addressLocality,
        "postalCode": provider.address.postalCode,
        "addressCountry": provider.address.addressCountry
      },
      ...(provider.telephone && { "telephone": provider.telephone }),
      ...(provider.email && { "email": provider.email })
    },
    "url": serviceUrl,
    "areaServed": areaServed.map(area => ({
      "@type": "Place",
      "name": area
    })),
    ...(offers && {
      "offers": {
        "@type": "Offer",
        ...(offers.price && { "price": offers.price }),
        ...(offers.priceCurrency && { "priceCurrency": offers.priceCurrency }),
        ...(offers.priceRange && { "priceRange": offers.priceRange }),
        ...(offers.availability && { "availability": `https://schema.org/${offers.availability}` })
      }
    }),
    ...(additionalServices.length > 0 && {
      "additionalProperty": additionalServices.map(service => ({
        "@type": "PropertyValue",
        "name": "Additional Service",
        "value": service
      }))
    }),
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${serviceName} Services`,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": serviceName,
            "description": description
          }
        }
      ]
    }
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(serviceSchema)}
    </script>
  );
};

export default ServiceSchemaEnhanced;