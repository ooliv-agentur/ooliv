import React from 'react';
import PageLayout from '@/components/PageLayout';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';
import CTA from '@/components/CTA';

const AiWorkflows = () => {
  const breadcrumbs = [
    { name: "Home", url: "https://ooliv.de/" },
    { name: "AI-Workflows", url: "https://ooliv.de/ai-workflows" }
  ];

  return (
    <PageLayout>
      <EnhancedSEOHead
        title="AI-Workflows – Intelligente Automatisierung für Ihr Business | ooliv"
        description="Professionelle KI-Integration und Workflow-Automatisierung für B2B-Unternehmen."
        canonicalUrl="https://ooliv.de/ai-workflows"
        keywords="AI Workflows, KI Automatisierung, Process Automation, AI Integration, AI Adoption"
        breadcrumbs={breadcrumbs}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0D0D0D] mb-6 leading-tight">
              AI-Workflows
            </h1>
            <p className="text-xl text-[#666666] leading-relaxed">
              Wir automatisieren Ihre Prozesse mit intelligenten KI-Workflows.
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

      {/* CTA Section */}
      <CTA
        title="Bereit für AI-Integration?"
        subtitle="Lassen Sie uns Ihre Workflows automatisieren"
        primaryCta="AI-Beratung starten"
        primaryCtaLink="/kontakt"
      />
    </PageLayout>
  );
};

export default AiWorkflows;
