import React from 'react';
import { Helmet } from 'react-helmet-async';

interface EnhancedSEOHeadProps {
  title: string;
  description: string;
  canonicalUrl: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: object;
  keywords?: string;
}

const EnhancedSEOHead: React.FC<EnhancedSEOHeadProps> = ({
  title,
  description,
  canonicalUrl,
  ogImage = "https://ooliv.de/Social-preview.jpg",
  ogType = "website",
  structuredData,
  keywords
}) => {
  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />
      
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
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Additional meta tags */}
      <meta name="author" content="ooliv Werbeagentur" />
      <meta name="geo.region" content="DE-RP" />
      <meta name="geo.placename" content="Mainz" />
      <meta name="geo.position" content="49.9928617;8.2472526" />
      <meta name="ICBM" content="49.9928617, 8.2472526" />
    </Helmet>
  );
};

export default EnhancedSEOHead;