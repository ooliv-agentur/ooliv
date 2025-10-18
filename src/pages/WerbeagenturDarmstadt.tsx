
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import PageLayout from "@/components/PageLayout";
import CTA from "@/components/CTA";
import { useLanguage } from '@/contexts/LanguageContext';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';
import ServiceSchemaGenerator from '@/components/seo/ServiceSchemaGenerator';

// Import all dedicated Darmstadt components
import DarmstadtHero from '@/components/de/DarmstadtHero';
import DarmstadtAboutSection from '@/components/de/DarmstadtAboutSection';
import DarmstadtCaseStudies from '@/components/de/DarmstadtCaseStudies';
import DarmstadtFAQ from '@/components/de/DarmstadtFAQ';

import DarmstadtTeamSection from '@/components/de/DarmstadtTeamSection';
import DarmstadtBeforeAfterSection from '@/components/de/DarmstadtBeforeAfterSection';
import DarmstadtFullServiceTeaser from '@/components/de/DarmstadtFullServiceTeaser';
import DarmstadtTechStack from '@/components/de/DarmstadtTechStack';

const WerbeagenturDarmstadt = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('de');
    console.log('WerbeagenturDarmstadt component mounted - setting language to German');
    document.title = 'Werbeagentur Darmstadt – Strategisch statt oberflächlich';
  }, []);
  
  const breadcrumbs = [
    { name: "Home", url: "https://ooliv.de/" },
    { name: "Werbeagentur Darmstadt", url: "https://ooliv.de/werbeagentur-darmstadt" }
  ];
  
  return (
    <>
      <PageLayout 
        className="overflow-x-hidden"
      >
        <EnhancedSEOHead
          title="Werbeagentur Darmstadt | ooliv aus Mainz"
          description="Werbeagentur Darmstadt – B2B-Marketing, Webdesign & SEO aus Mainz für Darmstadt. ✓ TU Darmstadt-Umfeld ✓ Tech-Expertise. Jetzt Projekt starten!"
          canonicalUrl="https://ooliv.de/werbeagentur-darmstadt"
          keywords="Werbeagentur Darmstadt, Webdesign Darmstadt, Online Marketing Darmstadt, SEO Darmstadt"
          breadcrumbs={breadcrumbs}
        />
        
        <ServiceSchemaGenerator
          serviceName="Werbeagentur Darmstadt"
          description="Full-Service Werbeagentur in Darmstadt für Webdesign, SEO, Google Ads und digitale Strategien."
          serviceType="AdvertisingAgency"
          areaServed={["Darmstadt", "Mainz", "Frankfurt", "Rhein-Main-Gebiet", "Hessen"]}
          priceRange="€6000-€25000"
          offers={[
            {
              name: "Webdesign Darmstadt",
              description: "B2B-Websites für Darmstädter Unternehmen mit Tech-Fokus",
              priceRange: "€6000-€15000"
            },
            {
              name: "SEO Darmstadt",
              description: "Suchmaschinenoptimierung für lokale + nationale Sichtbarkeit",
              priceRange: "€1500-€5000"
            },
            {
              name: "Online Marketing Darmstadt",
              description: "Ganzheitliche digitale Marketing-Strategien",
              priceRange: "€2000-€8000"
            }
          ]}
        />
        <DarmstadtHero />
        <DarmstadtAboutSection />
        <DarmstadtTeamSection />
        <DarmstadtBeforeAfterSection />
        <DarmstadtFullServiceTeaser />
        <DarmstadtTechStack />
        <DarmstadtCaseStudies />
        <DarmstadtFAQ />
        
        <CTA
          lightBackground={true}
          title="Bereit für eine Website, die wirklich funktioniert?"
          subtitle="Lassen Sie uns in einem unverbindlichen Gespräch klären, wie wir Ihre digitale Präsenz zu einem echten Geschäftsinstrument machen – strategisch fundiert, technisch ausgereift und messbar erfolgreich."
          primaryCta="Digitales Projekt starten"
        />
      </PageLayout>
    </>
  );
};

export default WerbeagenturDarmstadt;
