
import { useEffect, useRef } from "react";

export default function ChatbaseWidget() {
  const scriptLoaded = useRef(false);

  useEffect(() => {
    // Vermeide Mehrfachinitialisierung
    if (scriptLoaded.current) return;
    
    // Prüfe, ob das Script bereits geladen wurde
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

    // Cleanup-Funktion um das Script zu entfernen, wenn die Komponente unmounted wird
    return () => {
      const scriptElement = document.getElementById("chatbase-widget-script");
      if (scriptElement && scriptElement.parentNode) {
        scriptElement.parentNode.removeChild(scriptElement);
      }
    };
  }, []);

  return null;
}
