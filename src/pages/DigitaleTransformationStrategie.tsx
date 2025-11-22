import React from 'react';
import PageLayout from '@/components/PageLayout';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';
import CTA from '@/components/CTA';

const DigitaleTransformationStrategie = () => {
  const breadcrumbs = [
    { name: "Home", url: "https://ooliv.de/" },
    { name: "Digitale Transformation & Strategie", url: "https://ooliv.de/digitale-transformation-strategie" }
  ];

  return (
    <PageLayout>
      <EnhancedSEOHead
        title="Digitale Transformation & Strategie | ooliv"
        description="Strategische Digitalisierung für B2B-Unternehmen. Wir entwickeln digitale Roadmaps und optimieren Customer Experience."
        canonicalUrl="https://ooliv.de/digitale-transformation-strategie"
        keywords="Digitale Transformation, Digitale Strategie, Digital Roadmap, Customer Experience, Digitaler Reifegrad"
        breadcrumbs={breadcrumbs}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0D0D0D] mb-6 leading-tight">
              Digitale Transformation & Strategie
            </h1>
            <p className="text-xl text-[#666666] leading-relaxed">
              Wir entwickeln digitale Strategien, die Ihr Geschäftsmodell zukunftsfähig machen.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section 1 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D0D0D] mb-6">
              Content Section 1
            </h2>
            <p className="text-lg text-[#666666] leading-relaxed">
              Inhalte folgen in Kürze.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section 2 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D0D0D] mb-6">
              Content Section 2
            </h2>
            <p className="text-lg text-[#666666] leading-relaxed">
              Inhalte folgen in Kürze.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section 3 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D0D0D] mb-6">
              Content Section 3
            </h2>
            <p className="text-lg text-[#666666] leading-relaxed">
              Inhalte folgen in Kürze.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section 4 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D0D0D] mb-6">
              Content Section 4
            </h2>
            <p className="text-lg text-[#666666] leading-relaxed">
              Inhalte folgen in Kürze.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section 5 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D0D0D] mb-6">
              Content Section 5
            </h2>
            <p className="text-lg text-[#666666] leading-relaxed">
              Inhalte folgen in Kürze.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section 6 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D0D0D] mb-6">
              Content Section 6
            </h2>
            <p className="text-lg text-[#666666] leading-relaxed">
              Inhalte folgen in Kürze.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Bereit für digitale Transformation?"
        subtitle="Lassen Sie uns Ihre digitale Strategie besprechen"
        primaryCta="Strategiegespräch vereinbaren"
        primaryCtaLink="/kontakt"
      />
    </PageLayout>
  );
};

export default DigitaleTransformationStrategie;
