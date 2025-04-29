
import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ChatbaseWidget from "./components/ChatbaseWidget";
import { LanguageProvider } from "./contexts/LanguageContext";
import { useScrollToTop } from "./hooks/useScrollToTop";

// Import German pages as main pages
import GermanIndex from "./pages/de/Index";
import GermanWebDesign from "./pages/de/WebDesign";
import GermanWebDevelopment from "./pages/de/WebDevelopment";
import GermanContentCreation from "./pages/de/ContentCreation";
import GermanSEO from "./pages/de/SEO";
import GermanGoogleAds from "./pages/de/GoogleAds";
import GermanAiTechnologies from "./pages/de/AiTechnologies";
import GermanCaseStudies from "./pages/de/CaseStudies";
import GermanAboutUs from "./pages/de/AboutUs";
import GermanContact from "./pages/de/Contact";
import GermanLegalNotice from "./pages/de/LegalNotice";
import GermanPrivacyPolicy from "./pages/de/PrivacyPolicy";

// Import English pages
import CaseStudies from "./pages/CaseStudies";

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
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <ChatbaseWidget />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            {/* Main (German) Routes */}
            <Route path="/" element={<GermanIndex />} />
            <Route path="/webdesign" element={<GermanWebDesign />} />
            <Route path="/webentwicklung" element={<GermanWebDevelopment />} />
            <Route path="/content-erstellung" element={<GermanContentCreation />} />
            <Route path="/seo-optimierung" element={<GermanSEO />} />
            <Route path="/google-ads" element={<GermanGoogleAds />} />
            <Route path="/ki-technologien" element={<GermanAiTechnologies />} />
            <Route path="/case-studies" element={<GermanCaseStudies />} />
            <Route path="/ueber-ooliv" element={<GermanAboutUs />} />
            <Route path="/kontakt" element={<GermanContact />} />
            <Route path="/impressum" element={<GermanLegalNotice />} />
            <Route path="/datenschutz" element={<GermanPrivacyPolicy />} />
            <Route path="/danke" element={<Danke />} />
            
            {/* English routes */}
            <Route path="/en/case-studies" element={<CaseStudies />} />
            
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
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
