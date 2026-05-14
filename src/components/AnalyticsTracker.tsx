import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { initAnalytics, trackPageView } from "@/lib/analytics";

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    initAnalytics();
  }, []);

  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location.pathname, location.search]);

  // Global click tracking for tel:, mailto:, wa.me
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = (e.target as HTMLElement | null)?.closest("a");
      if (!target) return;
      const href = target.getAttribute("href") || "";
      if (href.startsWith("tel:")) {
        import("@/lib/analytics").then((m) =>
          m.trackEvent("call_click", { number: href.replace("tel:", "") })
        );
      } else if (href.startsWith("mailto:")) {
        import("@/lib/analytics").then((m) =>
          m.trackEvent("email_click", { email: href.replace("mailto:", "") })
        );
      } else if (href.includes("wa.me") || href.includes("whatsapp.com")) {
        import("@/lib/analytics").then((m) =>
          m.trackEvent("whatsapp_click", { url: href })
        );
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return null;
};

export default AnalyticsTracker;
