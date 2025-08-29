
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
  console.log('🚀 App component loading...');
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
              
              <Routes>
                {/* DEBUG: Simple test first */}
                <Route path="/" element={
                  <div style={{ padding: '20px', background: 'white', minHeight: '100vh' }}>
                    <h1>🔥 WEBSITE FUNKTIONIERT!</h1>
                    <p>Debug: App lädt erfolgreich</p>
                    <button onClick={() => console.log('Button works!')}>Test Button</button>
                  </div>
                } />
                
                {/* All other pages lazy loaded */}
                <Route path="/webdesign" element={
                  <Suspense fallback={<PageSpinner />}>
                    <GermanWebDesign />
                  </Suspense>
                } />
                <Route path="/webentwicklung" element={
                  <Suspense fallback={<PageSpinner />}>
                    <GermanWebDevelopment />
                  </Suspense>
                } />
                <Route path="/ki-technologien" element={
                  <Suspense fallback={<PageSpinner />}>
                    <GermanAiTechnologies />
                  </Suspense>
                } />
                <Route path="/kontakt" element={
                  <Suspense fallback={<PageSpinner />}>
                    <GermanContact />
                  </Suspense>
                } />
                <Route path="/strategie" element={
                  <Suspense fallback={<PageSpinner />}>
                    <Strategie />
                  </Suspense>
                } />
                <Route path="/seo-optimierung" element={
                  <Suspense fallback={<PageSpinner />}>
                    <GermanSEO />
                  </Suspense>
                } />
                <Route path="/content-erstellung" element={
                  <Suspense fallback={<PageSpinner />}>
                    <GermanContentCreation />
                  </Suspense>
                } />
                <Route path="/google-ads" element={
                  <Suspense fallback={<PageSpinner />}>
                    <GermanGoogleAds />
                  </Suspense>
                } />
                <Route path="/klickbetrug" element={
                  <Suspense fallback={<PageSpinner />}>
                    <Klickbetrug />
                  </Suspense>
                } />
                <Route path="/referenzen" element={
                  <Suspense fallback={<PageSpinner />}>
                    <GermanCaseStudies />
                  </Suspense>
                } />
                <Route path="/ueber-uns" element={
                  <Suspense fallback={<PageSpinner />}>
                    <GermanAboutUs />
                  </Suspense>
                } />
                <Route path="/werbeagentur-wiesbaden" element={
                  <Suspense fallback={<PageSpinner />}>
                    <GermanWiesbaden />
                  </Suspense>
                } />
                <Route path="/werbeagentur-frankfurt" element={
                  <Suspense fallback={<PageSpinner />}>
                    <GermanFrankfurt />
                  </Suspense>
                } />
                <Route path="/artikel" element={
                  <Suspense fallback={<PageSpinner />}>
                    <Artikel />
                  </Suspense>
                } />
                <Route path="/neuester-artikel" element={
                  <Suspense fallback={<PageSpinner />}>
                    <LatestContent />
                  </Suspense>
                } />
                <Route path="/artikel/:slug" element={
                  <Suspense fallback={<PageSpinner />}>
                    <SingleArticle />
                  </Suspense>
                } />
                <Route path="/impressum" element={
                  <Suspense fallback={<PageSpinner />}>
                    <GermanLegalNotice />
                  </Suspense>
                } />
                <Route path="/datenschutz" element={
                  <Suspense fallback={<PageSpinner />}>
                    <GermanPrivacyPolicy />
                  </Suspense>
                } />
                <Route path="/cookie-richtlinie" element={
                  <Suspense fallback={<PageSpinner />}>
                    <CookieRichtlinie />
                  </Suspense>
                } />
                <Route path="/danke" element={
                  <Suspense fallback={<PageSpinner />}>
                    <GermanThankYou />
                  </Suspense>
                } />

                {/* 404 Route */}
                <Route path="*" element={
                  <Suspense fallback={<PageSpinner />}>
                    <NotFound />
                  </Suspense>
                } />
              </Routes>
              
              
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
