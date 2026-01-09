import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Ensures route navigation always lands at the top of the page.
 * Useful for legal pages opened from the footer.
 */
export default function ScrollToTop() {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    const safeDecode = (value: string) => {
      try {
        return decodeURIComponent(value);
      } catch {
        return value;
      }
    };

    // In HashRouter deployments, "#" is used for routing, so we use `?section=...` for in-page anchors.
    const params = new URLSearchParams(search);
    const section = params.get("section");

    // Support both old hash-based anchors and the new query-based anchors.
    const decodedSection = section ? safeDecode(section).trim() : "";
    const decodedHash = hash ? safeDecode(hash).trim() : "";

    const id = decodedSection
      ? `#${decodedSection}`
      : decodedHash && decodedHash !== "#"
        ? decodedHash
        : "";

    // Guard: `document.querySelector('#')` throws, so treat it as "no anchor".
    if (id && id !== "#") {

      // Defer until after route render/layout.
      window.requestAnimationFrame(() => {
        try {
          const el = document.querySelector(id);
          if (!el) return;

          // Offset for fixed header/nav.
          const y = el.getBoundingClientRect().top + window.scrollY - 96;
          window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
        } catch {
          // Invalid selector or other DOM quirks should never crash the app.
        }
      });
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, search, hash]);

  return null;
}


