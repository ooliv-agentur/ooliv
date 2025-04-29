
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { HelmetProvider } from 'react-helmet-async';

// Create a root using React 18's createRoot API
const root = document.getElementById('root');

// Make sure root element exists before rendering
if (!root) {
  throw new Error('Root element not found');
}

// Create a dedicated context for react-helmet-async
const helmetContext = {};

createRoot(root).render(
  <React.StrictMode>
    <HelmetProvider context={helmetContext}>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
