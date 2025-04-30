
import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ChatbaseWidget from "./components/ChatbaseWidget";
import { LanguageProvider } from "./contexts/LanguageContext";
import { useScrollToTop } from "./hooks/useScrollToTop";

// Import renamed German pages
import Index from "./pages/de/Index";
import Webdesign from "./pages/de/Webdesign";
import Webentwicklung from "./pages/de/Webentwicklung";
import ContentErstellung from "./pages/de/ContentErstellung";
import SeoOptimierung from "./pages/de/SeoOptimierung";
import GoogleAds from "./pages/de/GoogleAds";
import KiTechnologien from "./pages/de/KiTechnologien";
import CaseStudies from "./pages/de/CaseStudies";
import UeberOoliv from "./pages/de/UeberOoliv";
import Kontakt from "./pages/de/Kontakt";
import Impressum from "./pages/de/Impressum";
import Datenschutz from "./pages/de/Datenschutz";
import Danke from "./pages/de/Danke";

// Import NotFound page from the correct location
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
            {/* Main (German) Routes with updated components */}
            <Route path="/" element={<Index />} />
            <Route path="/webdesign" element={<Webdesign />} />
            <Route path="/webentwicklung" element={<Webentwicklung />} />
            <Route path="/content-erstellung" element={<ContentErstellung />} />
            <Route path="/seo-optimierung" element={<SeoOptimierung />} />
            <Route path="/google-ads" element={<GoogleAds />} />
            <Route path="/ki-technologien" element={<KiTechnologien />} />
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
            
            {/* Catch-all route for 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
