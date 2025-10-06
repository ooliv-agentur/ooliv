import React from 'react';
import { Helmet } from 'react-helmet-async';

interface EnhancedSEOHeadProps {
  title: string;
  description: string;
  canonicalUrl: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: object | object[];
  keywords?: string;
  breadcrumbs?: Array<{name: string; url: string}>;
  author?: string;
  articleData?: {
    datePublished?: string;
    dateModified?: string;
    wordCount?: number;
  };
}

const EnhancedSEOHead: React.FC<EnhancedSEOHeadProps> = ({
  title,
  description,
  canonicalUrl,
  ogImage = "https://ooliv.de/Social-preview.jpg",
  ogType = "website",
  structuredData,
  keywords,
  breadcrumbs,
  author,
  articleData
}) => {
  
  // Generate breadcrumb structured data
  const breadcrumbSchema = breadcrumbs ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((breadcrumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": breadcrumb.name,
      "item": breadcrumb.url
    }))
  } : null;

  // Generate organization schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ooliv Werbeagentur",
    "url": "https://ooliv.de",
    "logo": {
      "@type": "ImageObject",
      "url": "https://ooliv.de/ooliv_logo_2025.svg",
      "width": "200",
      "height": "50"
    },
    "image": "https://ooliv.de/ooliv_logo_2025.svg",
    "sameAs": [
      "https://www.instagram.com/ooliv.de/",
      "https://www.linkedin.com/company/ooliv-werbeagentur/"
    ],
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
      "latitude": "49.9928617",
      "longitude": "8.2472526"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+49-6131-9027640",
      "contactType": "customer service",
      "areaServed": "DE",
      "availableLanguage": ["German", "English"]
    },
    "founder": {
      "@type": "Person",
      "name": "Paul Jerchel", 
      "jobTitle": "CEO & Founder"
    },
    "foundingDate": "2008",
    "description": "ooliv ist eine etablierte Werbeagentur in Mainz, spezialisiert auf strategisches Webdesign, SEO-Optimierung und digitales Marketing für B2B-Unternehmen."
  };

  // Generate website schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "ooliv Werbeagentur",
    "alternateName": "ooliv Digitalagentur Mainz",
    "url": "https://ooliv.de",
    "description": "Professionelle Werbeagentur in Mainz für Webdesign, SEO und digitales Marketing",
    "publisher": {
      "@type": "Organization",
      "name": "ooliv Werbeagentur",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ooliv.de/ooliv_logo_2025.svg"
      }
    },
    "inLanguage": "de-DE"
  };

  // Combine all schemas
  const allSchemas = [];
  if (structuredData) {
    if (Array.isArray(structuredData)) {
      allSchemas.push(...structuredData);
    } else {
      allSchemas.push(structuredData);
    }
  }
  if (breadcrumbSchema) allSchemas.push(breadcrumbSchema);
  allSchemas.push(organizationSchema, websiteSchema);
  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Canonical - CRITICAL: This is the ONLY place canonical should be set */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Hreflang for German content */}
      <link rel="alternate" hrefLang="de" href={canonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="ooliv Werbeagentur" />
      <meta property="og:locale" content="de_DE" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@ooliv_de" />
      
      {/* Enhanced robots */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Structured Data */}
      {allSchemas.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify(allSchemas)}
        </script>
      )}
      
      {/* Article specific meta tags */}
      {articleData?.datePublished && (
        <>
          <meta property="article:published_time" content={articleData.datePublished} />
          {articleData.dateModified && (
            <meta property="article:modified_time" content={articleData.dateModified} />
          )}
        </>
      )}
      
      {/* Additional meta tags */}
      <meta name="author" content={author || "ooliv Werbeagentur"} />
      <meta name="geo.region" content="DE-RP" />
      <meta name="geo.placename" content="Mainz" />
      <meta name="geo.position" content="49.9928617;8.2472526" />
      <meta name="ICBM" content="49.9928617, 8.2472526" />
    </Helmet>
  );
};

export default EnhancedSEOHead;