
import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ChatbaseWidget from "./components/ChatbaseWidget";
import { LanguageProvider } from "./contexts/LanguageContext";
import { useScrollToTop } from "./hooks/useScrollToTop";

// Import pages
import Index from "./pages/Index";
import Webdesign from "./pages/Webdesign";
import Webentwicklung from "./pages/Webentwicklung";
import ContentErstellung from "./pages/ContentErstellung";
import SEOOptimierung from "./pages/SEOOptimierung";
import GoogleAds from "./pages/GoogleAds";
import KITechnologien from "./pages/KITechnologien";
import CaseStudies from "./pages/CaseStudies";
import UeberOoliv from "./pages/UeberOoliv";
import Kontakt from "./pages/Kontakt";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import Danke from "./pages/Danke";

// Import NotFound page
import NotFound from "./pages/NotFound";

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
            {/* Main (German) Routes based on sitemap */}
            <Route path="/" element={<Index />} />
            <Route path="/webdesign" element={<Webdesign />} />
            <Route path="/webentwicklung" element={<Webentwicklung />} />
            <Route path="/content-erstellung" element={<ContentErstellung />} />
            <Route path="/seo-optimierung" element={<SEOOptimierung />} />
            <Route path="/google-ads" element={<GoogleAds />} />
            <Route path="/ki-technologien" element={<KITechnologien />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/ueber-ooliv" element={<UeberOoliv />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="/danke" element={<Danke />} />
            
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
            
            {/* Redirects for old English paths */}
            <Route path="/en/*" element={<Navigate to="/" replace />} />
            <Route path="/web-design" element={<Navigate to="/webdesign" replace />} />
            <Route path="/web-development" element={<Navigate to="/webentwicklung" replace />} />
            <Route path="/content-creation" element={<Navigate to="/content-erstellung" replace />} />
            <Route path="/seo-optimization" element={<Navigate to="/seo-optimierung" replace />} />
            <Route path="/about-us" element={<Navigate to="/ueber-ooliv" replace />} />
            <Route path="/legal-notice" element={<Navigate to="/impressum" replace />} />
            <Route path="/privacy-policy" element={<Navigate to="/datenschutz" replace />} />
            <Route path="/contact" element={<Navigate to="/kontakt" replace />} />
            
            {/* Catch-all route for 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
