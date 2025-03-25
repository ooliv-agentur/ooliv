
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import Careers from "./pages/Careers";
import LegalNotice from "./pages/LegalNotice";
import DataPrivacy from "./pages/DataPrivacy";
import PrivacyPolicy from "./pages/PrivacyPolicy";

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
import GermanCareers from "./pages/de/Careers";
import GermanLegalNotice from "./pages/de/LegalNotice";
import GermanPrivacyPolicy from "./pages/de/PrivacyPolicy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* English Routes */}
            <Route path="/" element={<Index />} />
            <Route path="/web-design" element={<WebDesign />} />
            <Route path="/web-development" element={<WebDevelopment />} />
            <Route path="/content-creation" element={<ContentCreation />} />
            <Route path="/seo-optimization" element={<SEO />} />
            <Route path="/google-ads" element={<GoogleAds />} />
            <Route path="/lead-generation" element={<GoogleAds />} /> {/* Redirect old path to new */}
            <Route path="/ai-technologies" element={<AiTechnologies />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/about-ooliv" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/legal-notice" element={<LegalNotice />} />
            <Route path="/data-privacy" element={<DataPrivacy />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            
            {/* German Routes */}
            <Route path="/de" element={<GermanIndex />} />
            <Route path="/de/webdesign" element={<GermanWebDesign />} />
            <Route path="/de/webentwicklung" element={<GermanWebDevelopment />} />
            <Route path="/de/content-erstellung" element={<GermanContentCreation />} />
            <Route path="/de/seo-optimierung" element={<GermanSEO />} />
            <Route path="/de/google-ads" element={<GermanGoogleAds />} />
            <Route path="/de/ki-technologien" element={<GermanAiTechnologies />} />
            <Route path="/de/referenzen" element={<GermanCaseStudies />} />
            <Route path="/de/ueber-ooliv" element={<GermanAboutUs />} />
            <Route path="/de/kontakt" element={<GermanContact />} />
            <Route path="/de/karriere" element={<GermanCareers />} />
            <Route path="/de/impressum" element={<GermanLegalNotice />} />
            <Route path="/de/datenschutz" element={<GermanPrivacyPolicy />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
