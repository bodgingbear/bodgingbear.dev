"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { MATOMO_SITE_ID, MATOMO_URL } from "utils/env";

declare global {
  interface Window {
    _paq?: unknown[][];
  }
}

// Loads the Matomo tracker once and records a page view on every client-side
// navigation (the app router doesn't reload the page between routes).
export function Matomo() {
  const pathname = usePathname();
  const loaded = useRef(false);

  useEffect(() => {
    if (!MATOMO_URL || !MATOMO_SITE_ID) return;

    window._paq = window._paq || [];
    const paq = window._paq;

    if (!loaded.current) {
      loaded.current = true;
      paq.push(["enableLinkTracking"]);
      paq.push(["setTrackerUrl", `${MATOMO_URL}matomo.php`]);
      paq.push(["setSiteId", MATOMO_SITE_ID]);

      const script = document.createElement("script");
      script.async = true;
      script.src = `${MATOMO_URL}matomo.js`;
      document.head.appendChild(script);
    }

    paq.push(["setCustomUrl", window.location.href]);
    paq.push(["setDocumentTitle", document.title]);
    paq.push(["trackPageView"]);
  }, [pathname]);

  return null;
}
