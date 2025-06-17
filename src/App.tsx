
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LanguageProvider } from './contexts/LanguageContext';
import { CookieConsentProvider } from './contexts/CookieConsentContext';
import CustomCursor from './components/CustomCursor';
import ScrollIndicator from './components/ScrollIndicator';
import FloatingActionButtons from './components/FloatingActionButtons';
import LeadGenerationOverlay from './components/LeadGenerationOverlay';
import CookieNotification from './components/CookieNotification';
import { Toaster } from 'sonner';

// Import all pages directly (no lazy loading)
import GermanIndex from './pages/de/Index';
import GermanWebDesign from './pages/de/Webdesign';
import GermanWebDevelopment from './pages/de/Webentwicklung';
import GermanAiTechnologies from './pages/de/KiTechnologien';
import GermanContact from './pages/de/Kontakt';
import GermanSEO from './pages/de/SEOOptimierung';
import GermanContentCreation from './pages/de/ContentErstellung';
import GermanGoogleAds from './pages/de/GoogleAds';
import GermanCaseStudies from './pages/de/Referenzen';
import GermanAboutUs from './pages/de/UeberUns';
import GermanLegalNotice from './pages/de/Impressum';
import GermanPrivacyPolicy from './pages/de/Datenschutz';
import GermanThankYou from './pages/de/Danke';
import GermanWiesbaden from './pages/de/WerbeagenturWiesbaden';
import GermanFrankfurt from './pages/de/WerbeagenturFrankfurt';
import Klickbetrug from './pages/de/Klickbetrug';
import Strategie from './pages/de/Strategie';
import CookieRichtlinie from './pages/de/CookieRichtlinie';
import Artikel from './pages/de/Artikel';
import LatestContent from './pages/de/LatestContent';
import SingleArticle from './pages/de/SingleArticle';
import NotFound from './pages/NotFound';

const queryClient = new QueryClient();

function App() {
  const [showLeadForm, setShowLeadForm] = useState(false);

  return (
    <LanguageProvider>
      <CookieConsentProvider>
        <HelmetProvider>
          <QueryClientProvider client={queryClient}>
            <Router>
              <CustomCursor />
              <ScrollIndicator />
              <FloatingActionButtons />
              <CookieNotification />
              
              {/* Single LeadGenerationOverlay instance for the entire app */}
              <LeadGenerationOverlay 
                open={showLeadForm} 
                onOpenChange={setShowLeadForm}
              />
              
              <Routes>
                {/* German Routes - All pages loaded directly */}
                <Route path="/" element={<GermanIndex />} />
                <Route path="/webdesign" element={<GermanWebDesign />} />
                <Route path="/webentwicklung" element={<GermanWebDevelopment />} />
                <Route path="/ki-technologien" element={<GermanAiTechnologies />} />
                <Route path="/kontakt" element={<GermanContact />} />
                <Route path="/strategie" element={<Strategie />} />
                <Route path="/seo-optimierung" element={<GermanSEO />} />
                <Route path="/content-erstellung" element={<GermanContentCreation />} />
                <Route path="/google-ads" element={<GermanGoogleAds />} />
                <Route path="/klickbetrug" element={<Klickbetrug />} />
                <Route path="/referenzen" element={<GermanCaseStudies />} />
                <Route path="/ueber-uns" element={<GermanAboutUs />} />
                <Route path="/werbeagentur-wiesbaden" element={<GermanWiesbaden />} />
                <Route path="/werbeagentur-frankfurt" element={<GermanFrankfurt />} />
                <Route path="/artikel" element={<Artikel />} />
                <Route path="/neuester-artikel" element={<LatestContent />} />
                <Route path="/artikel/:slug" element={<SingleArticle />} />
                <Route path="/impressum" element={<GermanLegalNotice />} />
                <Route path="/datenschutz" element={<GermanPrivacyPolicy />} />
                <Route path="/cookie-richtlinie" element={<CookieRichtlinie />} />
                <Route path="/danke" element={<GermanThankYou />} />

                {/* 404 Route */}
                <Route path="*" element={<NotFound />} />
              </Routes>
              
              <Toaster />
            </Router>
          </QueryClientProvider>
        </HelmetProvider>
      </CookieConsentProvider>
    </LanguageProvider>
  );
}

export default App;
