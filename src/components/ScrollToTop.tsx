import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Ensures route navigation always lands at the top of the page.
 * Useful for legal pages opened from the footer.
 */
export default function ScrollToTop() {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    // In HashRouter deployments, "#" is used for routing, so we use `?section=...` for in-page anchors.
    const params = new URLSearchParams(search);
    const section = params.get("section");

    // Support both old hash-based anchors and the new query-based anchors.
    const id = section ? `#${decodeURIComponent(section)}` : hash ? decodeURIComponent(hash) : "";

    if (id) {

      // Defer until after route render/layout.
      window.requestAnimationFrame(() => {
        const el = document.querySelector(id);
        if (!el) return;

        // Offset for fixed header/nav.
        const y = el.getBoundingClientRect().top + window.scrollY - 96;
        window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
      });
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, search, hash]);

  return null;
}


