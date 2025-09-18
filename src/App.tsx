import React from 'react';
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
import RouterErrorBoundary from './components/RouterErrorBoundary';
import ContextErrorBoundary from './components/ContextErrorBoundary';

// Import all pages directly (no lazy loading)
import GermanIndex from './pages/Index';
import GermanWebDesign from './pages/Webdesign';
import GermanWebDevelopment from './pages/Webentwicklung';
import GermanAiTechnologies from './pages/KiTechnologien';
import GermanContact from './pages/Kontakt';
import GermanSEO from './pages/SEOOptimierung';
import GermanContentCreation from './pages/ContentErstellung';
import GermanGoogleAds from './pages/GoogleAds';
import GermanCaseStudies from './pages/Referenzen';
import GermanAboutUs from './pages/UeberUns';
import GermanLegalNotice from './pages/Impressum';
import GermanPrivacyPolicy from './pages/Datenschutz';
import GermanThankYou from './pages/Danke';
import GermanWiesbaden from './pages/WerbeagenturWiesbaden';
import GermanFrankfurt from './pages/WerbeagenturFrankfurt';
import Klickbetrug from './pages/Klickbetrug';
import Strategie from './pages/Strategie';
import CookieRichtlinie from './pages/CookieRichtlinie';
import Artikel from './pages/Artikel';
import LatestContent from './pages/LatestContent';
import SingleArticle from './pages/SingleArticle';
import Sitemap from './pages/Sitemap';
import NotFound from './pages/NotFound';

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
      <ContextErrorBoundary>
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
                  <Route path="/sitemap.xml" element={<Sitemap />} />
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
      </ContextErrorBoundary>
    </ErrorBoundary>
  );
}

export default App;
