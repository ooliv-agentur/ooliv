
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
    };
  }, [isEnglishPage, pathname]);

  return null;
}
