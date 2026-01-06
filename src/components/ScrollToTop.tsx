import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Ensures route navigation always lands at the top of the page.
 * Useful for legal pages opened from the footer.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If a hash is present, smooth-scroll to the anchored element (supports "/#section" from any route).
    if (hash) {
      const id = decodeURIComponent(hash);

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
  }, [pathname, hash]);

  return null;
}


