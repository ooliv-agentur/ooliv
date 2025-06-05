
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Toaster } from "@/components/ui/sonner";
import CustomCursor from '@/components/CustomCursor';
import ScrollIndicator from '@/components/ScrollIndicator';
import FloatingActionButtons from '@/components/FloatingActionButtons';
import LeadGenerationOverlay from '@/components/LeadGenerationOverlay';
import ConfettiCelebration from '@/components/ConfettiCelebration';
import ChatbaseWidget from '@/components/ChatbaseWidget';

// German Pages
import GermanIndex from '@/pages/de/Index';
import UeberUns from '@/pages/de/UeberUns';
import Webdesign from '@/pages/de/Webdesign';
import Webentwicklung from '@/pages/de/Webentwicklung';
import ContentErstellung from '@/pages/de/ContentErstellung';
import SEOOptimierung from '@/pages/de/SEOOptimierung';
import GoogleAds from '@/pages/de/GoogleAds';
import KiTechnologien from '@/pages/de/KiTechnologien';
import Referenzen from '@/pages/de/Referenzen';
import Kontakt from '@/pages/de/Kontakt';
import Strategie from '@/pages/de/Strategie';
import WerbeagenturWiesbaden from '@/pages/de/WerbeagenturWiesbaden';
import Danke from '@/pages/de/Danke';
import Impressum from '@/pages/de/Impressum';
import Datenschutz from '@/pages/de/Datenschutz';

// English Pages
import EnglishIndex from '@/pages/en/Index';
import AboutUsEN from '@/pages/en/AboutUsEN';
import WebDesignEN from '@/pages/en/WebDesignEN';
import WebDevelopmentEN from '@/pages/en/WebDevelopmentEN';
import ContentCreationEN from '@/pages/en/ContentCreationEN';
import SEOEN from '@/pages/en/SEOEN';
import GoogleAdsEN from '@/pages/en/GoogleAdsEN';
import AiTechnologiesEN from '@/pages/en/AiTechnologiesEN';
import CaseStudiesEN from '@/pages/en/CaseStudiesEN';
import ContactEN from '@/pages/en/ContactEN';
import ThankYouEN from '@/pages/en/ThankYouEN';
import LegalNoticeEN from '@/pages/en/LegalNoticeEN';
import PrivacyPolicyEN from '@/pages/en/PrivacyPolicyEN';

import NotFound from '@/pages/NotFound';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <LanguageProvider>
          <Router>
            <Helmet>
              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            </Helmet>
            
            <CustomCursor />
            <ScrollIndicator />
            <FloatingActionButtons />
            <LeadGenerationOverlay />
            <ConfettiCelebration />
            <ChatbaseWidget />
            
            <Routes>
              {/* German Routes */}
              <Route path="/" element={<GermanIndex />} />
              <Route path="/ueber-uns" element={<UeberUns />} />
              <Route path="/webdesign" element={<Webdesign />} />
              <Route path="/webentwicklung" element={<Webentwicklung />} />
              <Route path="/content-erstellung" element={<ContentErstellung />} />
              <Route path="/seo-optimierung" element={<SEOOptimierung />} />
              <Route path="/google-ads" element={<GoogleAds />} />
              <Route path="/ki-technologien" element={<KiTechnologien />} />
              <Route path="/strategie" element={<Strategie />} />
              <Route path="/referenzen" element={<Referenzen />} />
              <Route path="/kontakt" element={<Kontakt />} />
              <Route path="/werbeagentur-wiesbaden" element={<WerbeagenturWiesbaden />} />
              <Route path="/danke" element={<Danke />} />
              <Route path="/impressum" element={<Impressum />} />
              <Route path="/datenschutz" element={<Datenschutz />} />

              {/* English Routes */}
              <Route path="/en" element={<EnglishIndex />} />
              <Route path="/en/about-us" element={<AboutUsEN />} />
              <Route path="/en/web-design" element={<WebDesignEN />} />
              <Route path="/en/web-development" element={<WebDevelopmentEN />} />
              <Route path="/en/content-creation" element={<ContentCreationEN />} />
              <Route path="/en/seo" element={<SEOEN />} />
              <Route path="/en/google-ads" element={<GoogleAdsEN />} />
              <Route path="/en/ai-technologies" element={<AiTechnologiesEN />} />
              <Route path="/en/case-studies" element={<CaseStudiesEN />} />
              <Route path="/en/contact" element={<ContactEN />} />
              <Route path="/en/thank-you" element={<ThankYouEN />} />
              <Route path="/en/legal-notice" element={<LegalNoticeEN />} />
              <Route path="/en/privacy-policy" element={<PrivacyPolicyEN />} />

              {/* 404 Page */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            
            <Toaster />
          </Router>
        </LanguageProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
