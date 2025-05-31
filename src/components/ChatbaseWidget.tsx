
import React, { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const ChatbaseWidget = () => {
  const { language } = useLanguage();
  
  useEffect(() => {
    // Only show chatbot on German pages
    if (language !== 'de') {
      console.log('Chatbot disabled on English page');
      return;
    }

    console.log('Loading Chatbase widget for German page');
    
    // Remove any existing chatbase elements
    const existingScript = document.getElementById('chatbase-script');
    const existingWidget = document.getElementById('chatbase-bubble-button');
    const existingIframe = document.querySelector('iframe[src*="chatbase.co"]');
    
    if (existingScript) existingScript.remove();
    if (existingWidget) existingWidget.remove();
    if (existingIframe) existingIframe.remove();

    // Create and load the chatbase script
    const script = document.createElement('script');
    script.id = 'chatbase-script';
    script.src = 'https://www.chatbase.co/embed.min.js';
    script.defer = true;
    
    script.onload = () => {
      console.log('Chatbase script loaded successfully');
      // Initialize the chatbot
      if (window.Chatbase) {
        window.Chatbase.init({
          chatbotId: 'VCSuG_Qa30vQV8N5Y6TbB',
        });
        console.log('Chatbase initialized');
      }
    };
    
    script.onerror = () => {
      console.error('Failed to load Chatbase script');
    };

    document.head.appendChild(script);

    // Cleanup function
    return () => {
      const scriptToRemove = document.getElementById('chatbase-script');
      const widgetToRemove = document.getElementById('chatbase-bubble-button');
      const iframeToRemove = document.querySelector('iframe[src*="chatbase.co"]');
      
      if (scriptToRemove) scriptToRemove.remove();
      if (widgetToRemove) widgetToRemove.remove();
      if (iframeToRemove) iframeToRemove.remove();
    };
  }, [language]);

  // Only render on German pages
  if (language !== 'de') {
    return null;
  }

  return (
    <div id="chatbase-container">
      {/* Chatbase widget will be injected here */}
    </div>
  );
};

// Extend window type for TypeScript
declare global {
  interface Window {
    Chatbase?: {
      init: (config: { chatbotId: string }) => void;
    };
  }
}

export default ChatbaseWidget;
