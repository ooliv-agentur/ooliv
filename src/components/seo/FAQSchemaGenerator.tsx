import React from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQItem[];
  pageUrl?: string;
}

const FAQSchemaGenerator: React.FC<FAQSchemaProps> = ({
  faqs,
  pageUrl
}) => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    })),
    ...(pageUrl && { "url": pageUrl })
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(faqSchema)}
    </script>
  );
};

export default FAQSchemaGenerator;
