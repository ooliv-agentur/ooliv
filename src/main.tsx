
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Performance monitoring - only in production for real metrics
if (typeof window !== 'undefined' && import.meta.env.PROD) {
  // Monitor Core Web Vitals in production only
  import('web-vitals').then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
    // Only log critical metrics that impact user experience
    onLCP((metric) => {
      if (metric.value > 4000) { // Only log slow LCP
        console.warn('Slow LCP detected:', metric.value);
      }
    });
    onCLS((metric) => {
      if (metric.value > 0.25) { // Only log problematic CLS
        console.warn('High CLS detected:', metric.value);
      }
    });
    onINP((metric) => {
      if (metric.value > 500) { // Only log slow interactions
        console.warn('Slow INP detected:', metric.value);
      }
    });
  });
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
