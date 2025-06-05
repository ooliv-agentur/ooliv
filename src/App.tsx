
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LanguageProvider } from './contexts/LanguageContext';
import GermanIndex from './pages/de/Index';
import EnglishIndex from './pages/en/Index';
import GermanWebDesign from './pages/de/Webdesign';
import EnglishWebDesign from './pages/en/WebDesignEN';
import GermanWebDevelopment from './pages/de/Webentwicklung';
import EnglishWebDevelopment from './pages/en/WebDevelopmentEN';
import GermanSEO from './pages/de/SEOOptimierung';
import EnglishSEO from './pages/en/SEOEN';
import GermanContentCreation from './pages/de/ContentErstellung';
import EnglishContentCreation from './pages/en/ContentCreationEN';
import GermanGoogleAds from './pages/de/GoogleAds';
import EnglishGoogleAds from './pages/en/GoogleAdsEN';
import GermanAiTechnologies from './pages/de/KiTechnologien';
import EnglishAiTechnologies from './pages/en/AiTechnologiesEN';
import GermanCaseStudies from './pages/de/Referenzen';
import EnglishCaseStudies from './pages/en/CaseStudiesEN';
import GermanAboutUs from './pages/de/UeberUns';
import EnglishAboutUs from './pages/en/AboutUsEN';
import GermanContact from './pages/de/Kontakt';
import EnglishContact from './pages/en/ContactEN';
import GermanLegalNotice from './pages/de/Impressum';
import EnglishLegalNotice from './pages/en/LegalNoticeEN';
import GermanPrivacyPolicy from './pages/de/Datenschutz';
import EnglishPrivacyPolicy from './pages/en/PrivacyPolicyEN';
import GermanThankYou from './pages/de/Danke';
import EnglishThankYou from './pages/en/ThankYouEN';
import GermanWiesbaden from './pages/de/WerbeagenturWiesbaden';
import NotFound from './pages/NotFound';
import CustomCursor from './components/CustomCursor';
import ScrollIndicator from './components/ScrollIndicator';
import LeadGenerationOverlay from './components/LeadGenerationOverlay';
import FloatingActionButtons from './components/FloatingActionButtons';
import ChatbaseWidget from './components/ChatbaseWidget';
import { Toaster } from 'sonner';
import Strategie from './pages/de/Strategie';

const queryClient = new QueryClient();

function App() {
  return (
    <LanguageProvider>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <Router>
            <CustomCursor />
            <ScrollIndicator />
            <LeadGenerationOverlay />
            <FloatingActionButtons />
            <ChatbaseWidget />
            
            <Routes>
              {/* German Routes */}
              <Route path="/" element={<GermanIndex />} />
              <Route path="/webdesign" element={<GermanWebDesign />} />
              <Route path="/webentwicklung" element={<GermanWebDevelopment />} />
              <Route path="/strategie" element={<Strategie />} />
              <Route path="/seo-optimierung" element={<GermanSEO />} />
              <Route path="/content-erstellung" element={<GermanContentCreation />} />
              <Route path="/google-ads" element={<GermanGoogleAds />} />
              <Route path="/ki-technologien" element={<GermanAiTechnologies />} />
              <Route path="/referenzen" element={<GermanCaseStudies />} />
              <Route path="/ueber-uns" element={<GermanAboutUs />} />
              <Route path="/kontakt" element={<GermanContact />} />
              <Route path="/werbeagentur-wiesbaden" element={<GermanWiesbaden />} />
              <Route path="/impressum" element={<GermanLegalNotice />} />
              <Route path="/datenschutz" element={<GermanPrivacyPolicy />} />
              <Route path="/danke" element={<GermanThankYou />} />

              {/* English Routes */}
              <Route path="/en" element={<EnglishIndex />} />
              <Route path="/en/web-design" element={<EnglishWebDesign />} />
              <Route path="/en/web-development" element={<EnglishWebDevelopment />} />
              <Route path="/en/seo" element={<EnglishSEO />} />
              <Route path="/en/content-creation" element={<EnglishContentCreation />} />
              <Route path="/en/google-ads" element={<EnglishGoogleAds />} />
              <Route path="/en/ai-technologies" element={<EnglishAiTechnologies />} />
              <Route path="/en/case-studies" element={<EnglishCaseStudies />} />
              <Route path="/en/about-us" element={<EnglishAboutUs />} />
              <Route path="/en/contact" element={<EnglishContact />} />
              <Route path="/en/legal-notice" element={<EnglishLegalNotice />} />
              <Route path="/en/privacy-policy" element={<EnglishPrivacyPolicy />} />
              <Route path="/en/thank-you" element={<EnglishThankYou />} />

              {/* 404 Route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            
            <Toaster />
          </Router>
        </QueryClientProvider>
      </HelmetProvider>
    </LanguageProvider>
  );
}

export default App;
