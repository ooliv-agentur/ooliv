
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function ChatbaseWidget() {
  const scriptLoaded = useRef(false);
  
  // Use try-catch to handle potential Router context issues
  let pathname = "/";
  let isEnglishPage = false;
  
  try {
    const location = useLocation();
    pathname = location.pathname;
    
    // Determine if this is an English page, but don't return early
    isEnglishPage = pathname.startsWith('/en/') || pathname === '/en';
    if (isEnglishPage) {
      console.log('Chatbot disabled on English page:', pathname);
      // Don't return early here
    }
  } catch (error) {
    console.warn('ChatbaseWidget: Router context not available, chatbot might not work correctly');
    // Continue with default behavior if not in Router context
  }
  
  useEffect(() => {
    // Skip loading the chatbot on English pages
    if (isEnglishPage) {
      return;
    }
    
    // Avoid multiple initializations
    if (scriptLoaded.current) return;
    
    // Check if the script already exists
    if (document.getElementById("chatbase-widget-script")) return;
    
    const script = document.createElement("script");
    script.id = "chatbase-widget-script";

    script.innerHTML = `
      (function(){
        // Safe wrapper function for handling postMessage
        function safePostMessage(target, message, origin) {
          if (target && typeof target.postMessage === 'function') {
            try {
              target.postMessage(message, origin);
            } catch (e) {
              console.warn('Chatbase postMessage error:', e);
            }
          }
        }
        
        // Initialize chatbase with safe postMessage handling
        if (!window.chatbase || window.chatbase("getState") !== "initialized") {
          window.chatbase = (...arguments) => {
            if (!window.chatbase.q) {
              window.chatbase.q = [];
            }
            window.chatbase.q.push(arguments);
          };
          window.chatbase = new Proxy(window.chatbase, {
            get(target, prop) {
              if (prop === "q") {
                return target.q;
              }
              return (...args) => target(prop, ...args);
            }
          });
        }
        
        const onLoad = function () {
          const script = document.createElement("script");
          script.src = "https://www.chatbase.co/embed.min.js";
          script.id = "VCSuG_Qa30vQV8N5Y6TbB";
          script.domain = "www.chatbase.co";
          script.onerror = function(e) {
            console.warn('Failed to load Chatbase script:', e);
          };
          document.body.appendChild(script);
        };
        
        if (document.readyState === "complete") {
          onLoad();
        } else {
          window.addEventListener("load", onLoad);
        }
      })();
    `;

    document.body.appendChild(script);
    scriptLoaded.current = true;

    // Cleanup function to remove the script when component unmounts
    return () => {
      try {
        const scriptElement = document.getElementById("chatbase-widget-script");
        if (scriptElement && scriptElement.parentNode) {
          scriptElement.parentNode.removeChild(scriptElement);
        }
        
        // Also remove any chatbase elements that might have been created
        const chatbaseElements = document.querySelectorAll('[id^="chatbase-"]');
        chatbaseElements.forEach(el => {
          if (el.parentNode) {
            el.parentNode.removeChild(el);
          }
        });
        
        // Clean up any global chatbase objects
        if (window.chatbase && typeof window.chatbase === 'function') {
          try {
            // Try to terminate any existing instances
            window.chatbase("terminate");
          } catch (e) {
            console.warn('Error terminating chatbase:', e);
          }
        }
      } catch (error) {
        console.warn('Error cleaning up chatbase widget:', error);
      }
    };
  }, [isEnglishPage, pathname]);

  return null;
}
