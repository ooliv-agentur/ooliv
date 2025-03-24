
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
import LeadGeneration from "./pages/LeadGeneration";
import AISolutions from "./pages/AISolutions";
import AiTechnologies from "./pages/AiTechnologies";
import CaseStudies from "./pages/CaseStudies";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import LegalNotice from "./pages/LegalNotice";
import DataPrivacy from "./pages/DataPrivacy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/web-design" element={<WebDesign />} />
            <Route path="/web-development" element={<WebDevelopment />} />
            <Route path="/content-creation" element={<ContentCreation />} />
            <Route path="/seo-optimization" element={<SEO />} />
            <Route path="/lead-generation" element={<LeadGeneration />} />
            <Route path="/ai-powered-solutions" element={<AISolutions />} />
            <Route path="/ai-technologies" element={<AiTechnologies />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/about-ooliv" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/legal-notice" element={<LegalNotice />} />
            <Route path="/data-privacy" element={<DataPrivacy />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
