
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import WebDesignHero from '@/components/web-design/WebDesignHero';
import WebDesignBenefits from '@/components/web-design/WebDesignBenefits';
import WebDesignStructureFirst from '@/components/web-design/WebDesignStructureFirst';
import WebDesignBuildOptions from '@/components/web-design/WebDesignBuildOptions';
import WebDesignProcess from '@/components/web-design/WebDesignProcess';
import WebDesignFAQ from '@/components/web-design/WebDesignFAQ';
import CTA from '@/components/CTA';
import CaseStudiesSection from '@/components/CaseStudiesSection';

import ServiceSchemaGenerator from '@/components/seo/ServiceSchemaGenerator';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';
import { Link } from 'react-router-dom';
import TurquoiseCard from '@/components/ui/TurquoiseCard';
import TurquoiseBadge from '@/components/ui/TurquoiseBadge';

const GermanWebDesign = () => {
  const breadcrumbs = [
    { name: "Home", url: "https://ooliv.de/" },
    { name: "Webdesign", url: "https://ooliv.de/webdesign" }
  ];

  return (
    <>
      <PageLayout className="overflow-x-hidden">
        <EnhancedSEOHead
          title="Professionelles Webdesign – Websites, die konvertieren | ooliv"
          description="Professionelles Webdesign für B2B-Unternehmen. ✓ Conversion-optimiert ✓ SEO-ready ✓ Mobile First. Von Strategie bis Launch. Jetzt Beratung!"
          canonicalUrl="https://ooliv.de/webdesign"
          keywords="Webdesign, Website erstellen, Responsive Design, UX Design, B2B Websites, Conversion-Optimierung"
          breadcrumbs={breadcrumbs}
        />
        
        <ServiceSchemaGenerator
          serviceName="Webdesign & Website-Entwicklung"
          description="Professionelles Webdesign und Website-Entwicklung für B2B-Unternehmen. Individuelle, responsive Websites die konvertieren."
          serviceType="WebDesign"
        />
        
        {/* FAQ Schema für Webdesign */}
        <Helmet>
          <script 
            type="application/ld+json"
            dangerouslySetInnerHTML={{ 
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Was kostet professionelles Webdesign?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Die Kosten für professionelles Webdesign variieren je nach Umfang, Anforderungen und Komplexität des Projekts. Nach einem kostenlosen Erstgespräch erstellen wir Ihnen ein transparentes, individuelles Angebot, das exakt auf Ihre Bedürfnisse zugeschnitten ist."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Wie lange dauert die Website-Entwicklung?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Einfache Websites sind in 3-4 Wochen umsetzbar. Komplexe B2B-Projekte mit Content-Strategie und SEO benötigen 6-10 Wochen. Wir arbeiten mit klaren Meilensteinen und halten Sie kontinuierlich auf dem Laufenden."
                    }
                  }
                ]
              }) 
            }}
          />
        </Helmet>
        
        <WebDesignHero />
        <WebDesignBenefits />
        <WebDesignStructureFirst />
        <WebDesignBuildOptions />
        <WebDesignProcess />


        <p className="text-center text-sm text-medico-darkGreen mt-4">
          Mehr über <Link to="/" className="underline hover:no-underline">ooliv und unsere Arbeitsweise</Link>.
        </p>
        
        {/* Full Case Studies Section with global titles */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CaseStudiesSection />
          </div>
        </section>
        
        <WebDesignFAQ />
        
        {/* CTA Section with German startpage styling */}
        <CTA 
          lightBackground={true}
          title="Sprechen wir über Ihr Webdesign-Projekt"
          subtitle="Lassen Sie uns gemeinsam eine Website entwickeln, die nicht nur gut aussieht, sondern auch sichtbar wird und konvertiert."
          primaryCta="Projekt starten"
          secondaryCta="Strategiegespräch vereinbaren"
          secondaryCtaLink="/kontakt"
        />
      </PageLayout>
    </>
  );
};

export default GermanWebDesign;
