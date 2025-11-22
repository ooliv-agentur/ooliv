import React from 'react';
import PageLayout from '@/components/PageLayout';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';
import CTA from '@/components/CTA';

const WebdesignEntwicklung = () => {
  const breadcrumbs = [
    { name: "Home", url: "https://ooliv.de/" },
    { name: "Webdesign & Entwicklung", url: "https://ooliv.de/webdesign-entwicklung" }
  ];

  return (
    <PageLayout>
      <EnhancedSEOHead
        title="Webdesign & Entwicklung – Websites die konvertieren | ooliv"
        description="Professionelles Webdesign und Entwicklung für B2B. Von der Konzeption bis zum Launch."
        canonicalUrl="https://ooliv.de/webdesign-entwicklung"
        keywords="Webdesign, Webentwicklung, Website erstellen, Responsive Design, Modern Web Development"
        breadcrumbs={breadcrumbs}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0D0D0D] mb-6 leading-tight">
              Webdesign & Entwicklung
            </h1>
            <p className="text-xl text-[#666666] leading-relaxed">
              Wir entwickeln moderne Websites, die Ihre Geschäftsziele erreichen.
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

      {/* CTA Section */}
      <CTA
        title="Bereit für Ihre neue Website?"
        subtitle="Lassen Sie uns Ihr Webprojekt starten"
        primaryCta="Projekt starten"
        primaryCtaLink="/kontakt"
      />
    </PageLayout>
  );
};

export default WebdesignEntwicklung;
