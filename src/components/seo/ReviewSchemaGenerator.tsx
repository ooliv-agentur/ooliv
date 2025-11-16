import React from 'react';

interface ReviewSchemaProps {
  businessName: string;
  ratingValue: number;
  reviewCount: number;
  bestRating?: number;
  worstRating?: number;
}

const ReviewSchemaGenerator: React.FC<ReviewSchemaProps> = ({
  businessName,
  ratingValue,
  reviewCount,
  bestRating = 5,
  worstRating = 1
}) => {
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": businessName,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": ratingValue,
      "reviewCount": reviewCount,
      "bestRating": bestRating,
      "worstRating": worstRating
    }
  };

  return (
    <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
    />
  );
};

export default ReviewSchemaGenerator;
