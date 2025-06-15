
import React, { useState, Suspense, lazy } from 'react';
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

// Lazy load pages for better performance
const GermanIndex = lazy(() => import('./pages/de/Index'));
const GermanWebDesign = lazy(() => import('./pages/de/Webdesign'));
const GermanWebDevelopment = lazy(() => import('./pages/de/Webentwicklung'));
const GermanSEO = lazy(() => import('./pages/de/SEOOptimierung'));
const GermanContentCreation = lazy(() => import('./pages/de/ContentErstellung'));
const GermanGoogleAds = lazy(() => import('./pages/de/GoogleAds'));
const GermanAiTechnologies = lazy(() => import('./pages/de/KiTechnologien'));
const GermanCaseStudies = lazy(() => import('./pages/de/Referenzen'));
const GermanAboutUs = lazy(() => import('./pages/de/UeberUns'));
const GermanContact = lazy(() => import('./pages/de/Kontakt'));
const GermanLegalNotice = lazy(() => import('./pages/de/Impressum'));
const GermanPrivacyPolicy = lazy(() => import('./pages/de/Datenschutz'));
const GermanThankYou = lazy(() => import('./pages/de/Danke'));
const GermanWiesbaden = lazy(() => import('./pages/de/WerbeagenturWiesbaden'));
const GermanFrankfurt = lazy(() => import('./pages/de/WerbeagenturFrankfurt'));
const Klickbetrug = lazy(() => import('./pages/de/Klickbetrug'));
const Strategie = lazy(() => import('./pages/de/Strategie'));
const CookieRichtlinie = lazy(() => import('./pages/de/CookieRichtlinie'));
const LatestContent = lazy(() => import('./pages/de/LatestContent'));
const NotFound = lazy(() => import('./pages/NotFound'));

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
              
              <Suspense fallback={null}>
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
                  <Route path="/klickbetrug" element={<Klickbetrug />} />
                  <Route path="/referenzen" element={<GermanCaseStudies />} />
                  <Route path="/ueber-uns" element={<GermanAboutUs />} />
                  <Route path="/kontakt" element={<GermanContact />} />
                  <Route path="/werbeagentur-wiesbaden" element={<GermanWiesbaden />} />
                  <Route path="/werbeagentur-frankfurt" element={<GermanFrankfurt />} />
                  <Route path="/neuester-artikel" element={<LatestContent />} />
                  <Route path="/impressum" element={<GermanLegalNotice />} />
                  <Route path="/datenschutz" element={<GermanPrivacyPolicy />} />
                  <Route path="/cookie-richtlinie" element={<CookieRichtlinie />} />
                  <Route path="/danke" element={<GermanThankYou />} />

                  {/* 404 Route */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
              
              <Toaster />
            </Router>
          </QueryClientProvider>
        </HelmetProvider>
      </CookieConsentProvider>
    </LanguageProvider>
  );
}

export default App;
