
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

const GermanWebDesign = () => {
  const breadcrumbs = [
    { name: "Home", url: "https://ooliv.de/" },
    { name: "Webdesign", url: "https://ooliv.de/webdesign" }
  ];

  return (
    <>
      <PageLayout className="overflow-x-hidden">
        <EnhancedSEOHead
          title="Webdesign Mainz – Websites, die konvertieren | ooliv"
          description="Webdesign Mainz – Professionelle Websites für B2B. ✓ Conversion-optimiert ✓ SEO-ready ✓ Mobile First. Von Strategie bis Launch. Jetzt Beratung!"
          canonicalUrl="https://ooliv.de/webdesign"
          keywords="Webdesign Mainz, Website erstellen, Responsive Design, UX Design, UI Design"
          breadcrumbs={breadcrumbs}
        />
        
        <ServiceSchemaGenerator
          serviceName="Webdesign Mainz"
          description="Professionelles Webdesign und Website-Entwicklung in Mainz. Individuelle, responsive Websites die konvertieren."
          serviceType="WebDesign"
          priceRange="€4000-€15000"
          offers={[
            {
              name: "Einfache Website",
              description: "Professionelle Website für kleine Unternehmen",
              priceRange: "€4000-€6000"
            },
            {
              name: "Business Website",
              description: "Umfangreiche Website mit SEO-Optimierung",
              priceRange: "€6000-€12000"
            },
            {
              name: "E-Commerce Website",
              description: "Online-Shop mit erweiterten Funktionen",
              priceRange: "€12000-€25000"
            }
          ]}
        />
        
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
