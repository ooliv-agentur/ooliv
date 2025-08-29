
import React, { Suspense } from 'react';
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
import EmailCaptureController from './components/email-capture/EmailCaptureController';
import ErrorBoundary from './components/ErrorBoundary';

// Critical: Homepage loaded immediately for instant first paint
import GermanIndex from './pages/de/Index';

// Lazy load all other pages for instant navigation
const GermanWebDesign = React.lazy(() => import('./pages/de/Webdesign'));
const GermanWebDevelopment = React.lazy(() => import('./pages/de/Webentwicklung'));
const GermanAiTechnologies = React.lazy(() => import('./pages/de/KiTechnologien'));
const GermanContact = React.lazy(() => import('./pages/de/Kontakt'));
const GermanSEO = React.lazy(() => import('./pages/de/SEOOptimierung'));
const GermanContentCreation = React.lazy(() => import('./pages/de/ContentErstellung'));
const GermanGoogleAds = React.lazy(() => import('./pages/de/GoogleAds'));
const GermanCaseStudies = React.lazy(() => import('./pages/de/Referenzen'));
const GermanAboutUs = React.lazy(() => import('./pages/de/UeberUns'));
const GermanLegalNotice = React.lazy(() => import('./pages/de/Impressum'));
const GermanPrivacyPolicy = React.lazy(() => import('./pages/de/Datenschutz'));
const GermanThankYou = React.lazy(() => import('./pages/de/Danke'));
const GermanWiesbaden = React.lazy(() => import('./pages/de/WerbeagenturWiesbaden'));
const GermanFrankfurt = React.lazy(() => import('./pages/de/WerbeagenturFrankfurt'));
const Klickbetrug = React.lazy(() => import('./pages/de/Klickbetrug'));
const Strategie = React.lazy(() => import('./pages/de/Strategie'));
const CookieRichtlinie = React.lazy(() => import('./pages/de/CookieRichtlinie'));
const Artikel = React.lazy(() => import('./pages/de/Artikel'));
const LatestContent = React.lazy(() => import('./pages/de/LatestContent'));
const SingleArticle = React.lazy(() => import('./pages/de/SingleArticle'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

import ResourcePreloader from './components/ResourcePreloader';
import PageSpinner from './components/PageSpinner';

const queryClient = new QueryClient();

function App() {
  const [showLeadForm, setShowLeadForm] = React.useState(false);

  const handleLeadOpenChange = React.useCallback((next: boolean) => {
    setShowLeadForm(next);
    if (!next) {
      // Notify controller to snooze; keep menu state unchanged
      window.dispatchEvent(new Event('lead-overlay-closed'));
    }
  }, []);

  return (
    <ErrorBoundary>
      <LanguageProvider>
      <CookieConsentProvider>
        <HelmetProvider>
          <QueryClientProvider client={queryClient}>
            <Router>
              <CustomCursor />
              <ScrollIndicator />
              <FloatingActionButtons />
              <CookieNotification />
              <EmailCaptureController />
              <ResourcePreloader />
              
              {/* Single LeadGenerationOverlay instance for the entire app */}
              <LeadGenerationOverlay 
                open={showLeadForm} 
                onOpenChange={handleLeadOpenChange}
              />
              
              <Suspense fallback={<PageSpinner />}>
                <Routes>
                  {/* Critical: Homepage loaded immediately */}
                  <Route path="/" element={<GermanIndex />} />
                  
                  {/* All other pages lazy loaded */}
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
              </Suspense>
              
              
              <Toaster />
            </Router>
          </QueryClientProvider>
        </HelmetProvider>
      </CookieConsentProvider>
      </LanguageProvider>
    </ErrorBoundary>
  );
}

export default App;
