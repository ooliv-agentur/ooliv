
import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import { useScrollToTop } from "./hooks/useScrollToTop";
import ChatbaseWidget from "./components/ChatbaseWidget";
import { ToastProvider } from "@/hooks/use-toast";

// Import German pages
import GermanIndex from "./pages/de/Index";
import GermanWebdesign from "./pages/de/Webdesign";
import GermanWebentwicklung from "./pages/de/Webentwicklung";
import GermanContentErstellung from "./pages/de/ContentErstellung";
import GermanSEOOptimierung from "./pages/de/SEOOptimierung";
import GermanGoogleAds from "./pages/de/GoogleAds";
import GermanKiTechnologien from "./pages/de/KiTechnologien";
import GermanReferenzen from "./pages/de/Referenzen";
import GermanUeberUns from "./pages/de/UeberUns";
import GermanKontakt from "./pages/de/Kontakt";
import GermanImpressum from "./pages/de/Impressum";
import GermanDatenschutz from "./pages/de/Datenschutz";

// Import English pages
import EnglishIndex from "./pages/en/Index";
import EnglishWebdesign from "./pages/en/WebDesignEN";
import EnglishWebDevelopment from "./pages/en/WebDevelopmentEN";
import EnglishContentCreation from "./pages/en/ContentCreationEN";
import EnglishSEO from "./pages/en/SEOEN";
import EnglishGoogleAds from "./pages/en/GoogleAdsEN";
import EnglishAiTechnologies from "./pages/en/AiTechnologiesEN";
import EnglishCaseStudies from "./pages/en/CaseStudiesEN";
import EnglishAboutUs from "./pages/en/AboutUsEN";
import EnglishContact from "./pages/en/ContactEN";
import EnglishLegalNotice from "./pages/en/LegalNoticeEN";
import EnglishPrivacyPolicy from "./pages/en/PrivacyPolicyEN";
import EnglishThankYou from "./pages/en/ThankYouEN";

// Import NotFound page
import NotFound from "./pages/NotFound";

//Import Danke page
import Danke from "./pages/de/Danke";

// Create the query client
const queryClient = new QueryClient();

// ScrollToTop component to use in the app
const ScrollToTop = () => {
  useScrollToTop();
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <ToastProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ChatbaseWidget />
            <ScrollToTop />
            <Routes>
              {/* Main (German) Routes */}
              <Route path="/" element={<GermanIndex />} />
              <Route path="/webdesign" element={<GermanWebdesign />} />
              <Route path="/webentwicklung" element={<GermanWebentwicklung />} />
              <Route path="/content-erstellung" element={<GermanContentErstellung />} />
              <Route path="/seo-optimierung" element={<GermanSEOOptimierung />} />
              <Route path="/google-ads" element={<GermanGoogleAds />} />
              <Route path="/ki-technologien" element={<GermanKiTechnologien />} />
              <Route path="/case-studies" element={<GermanReferenzen />} />
              <Route path="/ueber-ooliv" element={<GermanUeberUns />} />
              <Route path="/kontakt" element={<GermanKontakt />} />
              <Route path="/impressum" element={<GermanImpressum />} />
              <Route path="/datenschutz" element={<GermanDatenschutz />} />
              <Route path="/danke" element={<Danke />} />
              
              {/* English Routes */}
              <Route path="/en" element={<EnglishIndex />} />
              <Route path="/en/webdesign" element={<EnglishWebdesign />} />
              <Route path="/en/webdevelopment" element={<EnglishWebDevelopment />} />
              <Route path="/en/content-creation" element={<EnglishContentCreation />} />
              <Route path="/en/seo" element={<EnglishSEO />} />
              <Route path="/en/google-ads" element={<EnglishGoogleAds />} />
              <Route path="/en/ai-technologies" element={<EnglishAiTechnologies />} />
              <Route path="/en/case-studies" element={<EnglishCaseStudies />} />
              <Route path="/en/about-us" element={<EnglishAboutUs />} />
              <Route path="/en/contact" element={<EnglishContact />} />
              <Route path="/en/legal-notice" element={<EnglishLegalNotice />} />
              <Route path="/en/privacy-policy" element={<EnglishPrivacyPolicy />} />
              <Route path="/en/thank-you" element={<EnglishThankYou />} />
              
              {/* Redirects from old /de/ paths to new root paths */}
              <Route path="/de" element={<Navigate to="/" replace />} />
              <Route path="/de/webdesign" element={<Navigate to="/webdesign" replace />} />
              <Route path="/de/webentwicklung" element={<Navigate to="/webentwicklung" replace />} />
              <Route path="/de/content-erstellung" element={<Navigate to="/content-erstellung" replace />} />
              <Route path="/de/seo-optimierung" element={<Navigate to="/seo-optimierung" replace />} />
              <Route path="/de/google-ads" element={<Navigate to="/google-ads" replace />} />
              <Route path="/de/ki-technologien" element={<Navigate to="/ki-technologien" replace />} />
              <Route path="/de/case-studies" element={<Navigate to="/case-studies" replace />} />
              <Route path="/de/ueber-ooliv" element={<Navigate to="/ueber-ooliv" replace />} />
              <Route path="/de/kontakt" element={<Navigate to="/kontakt" replace />} />
              <Route path="/de/impressum" element={<Navigate to="/impressum" replace />} />
              <Route path="/de/datenschutz" element={<Navigate to="/datenschutz" replace />} />
              
              {/* Catch-all route for 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ToastProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
