
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import WebDesignHero from '@/components/web-design/WebDesignHero';
import WebDesignBenefits from '@/components/web-design/WebDesignBenefits';
import WebDesignWhyUs from '@/components/web-design/WebDesignWhyUs';
import WebDesignStructureFirst from '@/components/web-design/WebDesignStructureFirst';
import WebDesignBuildOptions from '@/components/web-design/WebDesignBuildOptions';
import WebDesignProcess from '@/components/web-design/WebDesignProcess';
import WebDesignFAQ from '@/components/web-design/WebDesignFAQ';
import RelatedServicesGrid from '@/components/web-design/RelatedServicesGrid';
import CTA from '@/components/CTA';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import TestimonialsSection from '@/components/testimonials/TestimonialsSection';
import StickyCTA from '@/components/conversion/StickyCTA';

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

  const webdesignTestimonials = [
    {
      quote: "Das Design ist nicht nur schön, es funktioniert auch. Unsere Conversion-Rate ist um 180% gestiegen und wir bekommen endlich die richtigen Anfragen.",
      author: "Michael Klaiber",
      role: "Geschäftsführer",
      company: "KLAIBER Steuerberatung",
      industry: "Steuerberatung"
    },
    {
      quote: "Uli hat unsere komplexe KI-Technologie so kommuniziert, dass sie sofort verständlich ist. Die Website ist jetzt unser bestes Sales-Tool.",
      author: "Dr. Stefan Wagner",
      role: "CEO",
      company: "IconPro GmbH",
      industry: "KI-Software"
    },
    {
      quote: "Endlich eine Website, die zu unserem Qualitätsanspruch passt. Das Design ist modern, die Nutzerführung klar – und die Anfragen haben sich verdoppelt.",
      author: "Thomas Müller",
      role: "Geschäftsführer",
      company: "COBUS GmbH",
      industry: "Industrieservice"
    }
  ];

  return (
    <>
      <PageLayout className="overflow-x-hidden">
        <EnhancedSEOHead
          title="Professionelles Webdesign für B2B | UI/UX, Conversion & SEO | ooliv Mainz"
          description="Webdesign durch Uli und das ooliv-Team: Conversion-optimiert, SEO-ready & mobile first für B2B. Von der Strategie bis zum Launch – persönliche Betreuung, messbare Ergebnisse."
          canonicalUrl="https://ooliv.de/webdesign"
          keywords="Webdesign, Webdesign Mainz, Website Design, UI/UX Design, Responsive Design, B2B Websites, Conversion-Optimierung, Website erstellen, Professionelles Webdesign"
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
        <WebDesignWhyUs />
        <WebDesignStructureFirst />
        <WebDesignBuildOptions />
        <WebDesignProcess />
        
        <TestimonialsSection testimonials={webdesignTestimonials} />
        
        {/* Full Case Studies Section with global titles */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CaseStudiesSection />
          </div>
        </section>
        
        <RelatedServicesGrid />
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
        
        <StickyCTA text="Kostenloses Design-Beratungsgespräch" />
      </PageLayout>
    </>
  );
};

export default GermanWebDesign;
