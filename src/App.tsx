import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LanguageProvider } from './contexts/LanguageContext';
import { CookieConsentProvider } from './contexts/CookieConsentContext';
import { AuthProvider } from './contexts/AuthContext';
import CustomCursor from './components/CustomCursor';
import ScrollIndicator from './components/ScrollIndicator';
import FloatingActionButtons from './components/FloatingActionButtons';
import LeadGenerationOverlay from './components/LeadGenerationOverlay';
import CookieNotification from './components/CookieNotification';
import { Toaster } from 'sonner';
import EmailCaptureController from './components/email-capture/EmailCaptureController';
import ErrorBoundary from './components/ErrorBoundary';
import RouterErrorBoundary from './components/RouterErrorBoundary';
import ContextErrorBoundary from './components/ContextErrorBoundary';
import { useSeasonalColors } from './hooks/useSeasonalColors';

// Lazy load pages for better performance
const GermanIndex = lazy(() => import('./pages/Index'));
const GermanWebDesign = lazy(() => import('./pages/Webdesign'));
const GermanWebDevelopment = lazy(() => import('./pages/Webentwicklung'));
const GermanAiTechnologies = lazy(() => import('./pages/KiTechnologien'));
const GermanContact = lazy(() => import('./pages/Kontakt'));
const GermanSEO = lazy(() => import('./pages/SEOOptimierung'));
const GermanContentCreation = lazy(() => import('./pages/ContentErstellung'));
const AutomatisierteContentMarketing = lazy(() => import('./pages/AutomatisierteContentMarketing'));
const GermanGoogleAds = lazy(() => import('./pages/GoogleAds'));
const GermanCaseStudies = lazy(() => import('./pages/Referenzen'));
const GermanAboutUs = lazy(() => import('./pages/UeberUns'));
const GermanLegalNotice = lazy(() => import('./pages/Impressum'));
const GermanPrivacyPolicy = lazy(() => import('./pages/Datenschutz'));
const GermanThankYou = lazy(() => import('./pages/Danke'));
const GermanWiesbaden = lazy(() => import('./pages/WerbeagenturWiesbaden'));
const GermanFrankfurt = lazy(() => import('./pages/WerbeagenturFrankfurt'));
const Klickbetrug = lazy(() => import('./pages/Klickbetrug'));
const Strategie = lazy(() => import('./pages/Strategie'));
const CookieRichtlinie = lazy(() => import('./pages/CookieRichtlinie'));
const Artikel = lazy(() => import('./pages/Artikel'));
const LatestContent = lazy(() => import('./pages/LatestContent'));
const SingleArticle = lazy(() => import('./pages/SingleArticle'));
const LinkedInSetup = lazy(() => import('./pages/LinkedInSetup'));
const AdminLogin = lazy(() => import('./pages/AdminLogin'));
const KostenlosesWebsiteKonzept = lazy(() => import('./pages/KostenlosesWebsiteKonzept'));
const WebsiteRelaunch = lazy(() => import('./pages/WebsiteRelaunch'));
const NotFound = lazy(() => import('./pages/NotFound'));

const queryClient = new QueryClient();

// Loading component for Suspense fallback
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
);

function App() {
  const [showLeadForm, setShowLeadForm] = React.useState(false);
  
  // Initialize seasonal color system
  const { monthColor } = useSeasonalColors();

  const handleLeadOpenChange = React.useCallback((next: boolean) => {
    setShowLeadForm(next);
    if (!next) {
      // Notify controller to snooze; keep menu state unchanged
      window.dispatchEvent(new Event('lead-overlay-closed'));
    }
  }, []);

  return (
    <ErrorBoundary>
      <ContextErrorBoundary>
        <AuthProvider>
          <LanguageProvider>
          <CookieConsentProvider>
            <HelmetProvider>
              <QueryClientProvider client={queryClient}>
                <Router>
                  <CustomCursor />
                  <ScrollIndicator />
                  <FloatingActionButtons />
                  <CookieNotification />
                  <RouterErrorBoundary>
                    <EmailCaptureController />
                  </RouterErrorBoundary>
                  
                  {/* Single LeadGenerationOverlay instance for the entire app */}
                  <LeadGenerationOverlay 
                    open={showLeadForm} 
                    onOpenChange={handleLeadOpenChange}
                  />
                  
                  <Suspense fallback={<LoadingSpinner />}>
                    <Routes>
                      {/* German Routes - All pages lazy loaded */}
                      <Route path="/" element={<GermanIndex />} />
                      <Route path="/webdesign" element={<GermanWebDesign />} />
                      <Route path="/webentwicklung" element={<GermanWebDevelopment />} />
                      <Route path="/ki-technologien" element={<GermanAiTechnologies />} />
                      <Route path="/kontakt" element={<GermanContact />} />
                      <Route path="/strategie" element={<Strategie />} />
                      <Route path="/seo-optimierung" element={<GermanSEO />} />
                      <Route path="/content-erstellung" element={<GermanContentCreation />} />
                      <Route path="/automatisierte-content-marketing" element={<AutomatisierteContentMarketing />} />
                      <Route path="/google-ads" element={<GermanGoogleAds />} />
                      <Route path="/klickbetrug" element={<Klickbetrug />} />
                      <Route path="/referenzen" element={<GermanCaseStudies />} />
                      <Route path="/ueber-uns" element={<GermanAboutUs />} />
                      <Route path="/werbeagentur-wiesbaden" element={<GermanWiesbaden />} />
                      <Route path="/werbeagentur-frankfurt" element={<GermanFrankfurt />} />
                      <Route path="/artikel" element={<Artikel />} />
                      <Route path="/neuester-artikel" element={<LatestContent />} />
                      <Route path="/artikel/:slug" element={<SingleArticle />} />
                      <Route path="/admin-login" element={<AdminLogin />} />
                      <Route path="/linkedin-setup" element={<LinkedInSetup />} />
                      <Route path="/impressum" element={<GermanLegalNotice />} />
                      <Route path="/datenschutz" element={<GermanPrivacyPolicy />} />
                      <Route path="/cookie-richtlinie" element={<CookieRichtlinie />} />
                      <Route path="/danke" element={<GermanThankYou />} />
                      <Route path="/kostenloses-website-konzept" element={<KostenlosesWebsiteKonzept />} />
                      <Route path="/website-relaunch" element={<WebsiteRelaunch />} />

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
        </AuthProvider>
      </ContextErrorBoundary>
    </ErrorBoundary>
  );
}

export default App;
