import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Ensures route navigation always lands at the top of the page.
 * Useful for legal pages opened from the footer.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If a hash is present, let the browser/our scroll logic handle anchoring.
    if (hash) return;
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}


