
import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from '@/contexts/LanguageContext';
import LeadGenerationOverlay from '@/components/LeadGenerationOverlay';
import { CookieConsentProvider } from '@/contexts/CookieConsentContext';
import ChatbaseWidget from '@/components/ChatbaseWidget';
import ScrollIndicator from '@/components/ScrollIndicator';
import { useState } from "react";

// Lazy load components for better performance
const Index = lazy(() => import("./pages/de/Index"));
const Webdesign = lazy(() => import("./pages/de/Webdesign"));
const Webentwicklung = lazy(() => import("./pages/de/Webentwicklung"));
const ContentErstellung = lazy(() => import("./pages/de/ContentErstellung"));
const SEOOptimierung = lazy(() => import("./pages/de/SEOOptimierung"));
const GoogleAds = lazy(() => import("./pages/de/GoogleAds"));
const KiTechnologien = lazy(() => import("./pages/de/KiTechnologien"));
const Klickbetrug = lazy(() => import("./pages/de/Klickbetrug"));
const Strategie = lazy(() => import("./pages/de/Strategie"));
const Referenzen = lazy(() => import("./pages/de/Referenzen"));
const UeberUns = lazy(() => import("./pages/de/UeberUns"));
const Kontakt = lazy(() => import("./pages/de/Kontakt"));
const Impressum = lazy(() => import("./pages/de/Impressum"));
const Datenschutz = lazy(() => import("./pages/de/Datenschutz"));
const WerbeagenturWiesbaden = lazy(() => import("./pages/de/WerbeagenturWiesbaden"));
const Danke = lazy(() => import("./pages/de/Danke"));
const CookieRichtlinie = lazy(() => import("./pages/de/CookieRichtlinie"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <CookieConsentProvider>
          <LanguageProvider>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <Router>
                <ScrollIndicator />
                <div className="min-h-screen">
                  <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                      {/* German routes */}
                      <Route path="/" element={<Index />} />
                      <Route path="/webdesign" element={<Webdesign />} />
                      <Route path="/webentwicklung" element={<Webentwicklung />} />
                      <Route path="/content-erstellung" element={<ContentErstellung />} />
                      <Route path="/seo-optimierung" element={<SEOOptimierung />} />
                      <Route path="/google-ads" element={<GoogleAds />} />
                      <Route path="/ki-technologien" element={<KiTechnologien />} />
                      <Route path="/klickbetrug" element={<Klickbetrug />} />
                      <Route path="/strategie" element={<Strategie />} />
                      <Route path="/case-studies" element={<Referenzen />} />
                      <Route path="/ueber-ooliv" element={<UeberUns />} />
                      <Route path="/kontakt" element={<Kontakt />} />
                      <Route path="/impressum" element={<Impressum />} />
                      <Route path="/datenschutz" element={<Datenschutz />} />
                      <Route path="/werbeagentur-wiesbaden" element={<WerbeagenturWiesbaden />} />
                      <Route path="/danke" element={<Danke />} />
                      <Route path="/cookie-richtlinie" element={<CookieRichtlinie />} />
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </Suspense>
                  <LeadGenerationOverlay 
                    open={isLeadFormOpen} 
                    onOpenChange={setIsLeadFormOpen} 
                  />
                  <ChatbaseWidget />
                </div>
              </Router>
            </TooltipProvider>
          </LanguageProvider>
        </CookieConsentProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default App;
