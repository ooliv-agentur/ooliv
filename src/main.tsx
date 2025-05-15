
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { ToastProvider } from '@/hooks/use-toast';
import App from './App.tsx';
import './index.css';

// Create a strict mode wrapper for development
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ToastProvider>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </ToastProvider>
  </React.StrictMode>
);
