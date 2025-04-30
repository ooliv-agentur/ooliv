
import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ChatbaseWidget from "./components/ChatbaseWidget";
import { LanguageProvider } from "./contexts/LanguageContext";
import { useScrollToTop } from "./hooks/useScrollToTop";

// Import main (German) pages
import Index from "./pages/Index";
import Webdesign from "./pages/Webdesign";
import WordPressAgentur from "./pages/WordPressAgentur";
import ContentErstellung from "./pages/ContentErstellung";
import SEOAgentur from "./pages/SEOAgentur";
import GoogleAds from "./pages/GoogleAds";
import KiTechnologien from "./pages/KiTechnologien";
import Marketing from "./pages/Marketing";
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
            {/* Main (German) Routes */}
            <Route path="/" element={<Index />} />
            <Route path="/webdesign" element={<Webdesign />} />
            <Route path="/wordpress-agentur" element={<WordPressAgentur />} />
            <Route path="/content-erstellung" element={<ContentErstellung />} />
            <Route path="/seo-agentur" element={<SEOAgentur />} />
            <Route path="/google-ads" element={<GoogleAds />} />
            <Route path="/ki-technologien" element={<KiTechnologien />} />
            <Route path="/marketing" element={<Marketing />} />
            <Route path="/ueber-ooliv" element={<UeberOoliv />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="/danke" element={<Danke />} />
            
            {/* Redirects from old paths to new paths */}
            <Route path="/webentwicklung" element={<Navigate to="/wordpress-agentur" replace />} />
            <Route path="/seo-optimierung" element={<Navigate to="/seo-agentur" replace />} />
            <Route path="/case-studies" element={<Navigate to="/marketing" replace />} />
            
            {/* Old /de/ paths redirects */}
            <Route path="/de" element={<Navigate to="/" replace />} />
            <Route path="/de/webdesign" element={<Navigate to="/webdesign" replace />} />
            <Route path="/de/webentwicklung" element={<Navigate to="/wordpress-agentur" replace />} />
            <Route path="/de/content-erstellung" element={<Navigate to="/content-erstellung" replace />} />
            <Route path="/de/seo-optimierung" element={<Navigate to="/seo-agentur" replace />} />
            <Route path="/de/google-ads" element={<Navigate to="/google-ads" replace />} />
            <Route path="/de/ki-technologien" element={<Navigate to="/ki-technologien" replace />} />
            <Route path="/de/case-studies" element={<Navigate to="/marketing" replace />} />
            <Route path="/de/ueber-ooliv" element={<Navigate to="/ueber-ooliv" replace />} />
            <Route path="/de/kontakt" element={<Navigate to="/kontakt" replace />} />
            <Route path="/de/impressum" element={<Navigate to="/impressum" replace />} />
            <Route path="/de/datenschutz" element={<Navigate to="/datenschutz" replace />} />
            <Route path="/de/danke" element={<Navigate to="/danke" replace />} />
            
            {/* Redirects from English to German */}
            <Route path="/legal-notice" element={<Navigate to="/impressum" replace />} />
            <Route path="/privacy-policy" element={<Navigate to="/datenschutz" replace />} />
            <Route path="/web-design" element={<Navigate to="/webdesign" replace />} />
            <Route path="/web-development" element={<Navigate to="/wordpress-agentur" replace />} />
            <Route path="/content-creation" element={<Navigate to="/content-erstellung" replace />} />
            <Route path="/seo-optimization" element={<Navigate to="/seo-agentur" replace />} />
            <Route path="/ai-technologies" element={<Navigate to="/ki-technologien" replace />} />
            <Route path="/case-studies" element={<Navigate to="/marketing" replace />} />
            <Route path="/about-us" element={<Navigate to="/ueber-ooliv" replace />} />
            <Route path="/contact" element={<Navigate to="/kontakt" replace />} />
            <Route path="/thank-you" element={<Navigate to="/danke" replace />} />
            
            {/* Catch-all route for 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
