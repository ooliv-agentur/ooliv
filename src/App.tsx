
import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { LanguageProvider } from "./contexts/LanguageContext";
import WebDesign from "./pages/WebDesign";
import WebDevelopment from "./pages/WebDevelopment";
import ContentCreation from "./pages/ContentCreation";
import SEO from "./pages/SEO";
import GoogleAds from "./pages/GoogleAds";
import AiTechnologies from "./pages/AiTechnologies";
import CaseStudies from "./pages/CaseStudies";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import LegalNotice from "./pages/LegalNotice";
import DataPrivacy from "./pages/DataPrivacy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ChatbaseWidget from "./components/ChatbaseWidget";

// Import German pages
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

const queryClient = new QueryClient();

const App = () => (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageProvider>
          <Toaster />
          <Sonner />
          <ChatbaseWidget />
          <BrowserRouter>
            <Routes>
              {/* German Routes as Default */}
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
              
              {/* English Routes under /en */}
              <Route path="/en" element={<Index />} />
              <Route path="/en/web-design" element={<WebDesign />} />
              <Route path="/en/web-development" element={<WebDevelopment />} />
              <Route path="/en/content-creation" element={<ContentCreation />} />
              <Route path="/en/seo-optimization" element={<SEO />} />
              <Route path="/en/google-ads" element={<GoogleAds />} />
              <Route path="/en/ai-technologies" element={<AiTechnologies />} />
              <Route path="/en/case-studies" element={<CaseStudies />} />
              <Route path="/en/about-ooliv" element={<AboutUs />} />
              <Route path="/en/contact" element={<Contact />} />
              <Route path="/en/legal-notice" element={<LegalNotice />} />
              <Route path="/en/data-privacy" element={<DataPrivacy />} />
              <Route path="/en/privacy-policy" element={<PrivacyPolicy />} />
              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </LanguageProvider>
      </TooltipProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

export default App;
