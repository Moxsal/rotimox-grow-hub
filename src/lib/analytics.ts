import { ANALYTICS_CONFIG } from "@/config/analytics";

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    fbq: any;
    _fbq: any;
  }
}

let initialized = false;

export const initAnalytics = () => {
  if (initialized || typeof window === "undefined") return;
  initialized = true;

  const { GA_MEASUREMENT_ID, FB_PIXEL_ID } = ANALYTICS_CONFIG;

  // Google Analytics 4
  if (GA_MEASUREMENT_ID) {
    const s = document.createElement("script");
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(s);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", GA_MEASUREMENT_ID, { send_page_view: true });
  }

  // Facebook Pixel
  if (FB_PIXEL_ID) {
    /* eslint-disable */
    (function (f: any, b, e, v, n?: any, t?: any, s?: any) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
    /* eslint-enable */
    window.fbq("init", FB_PIXEL_ID);
    window.fbq("track", "PageView");
  }
};

export const trackPageView = (path: string) => {
  const { GA_MEASUREMENT_ID, FB_PIXEL_ID } = ANALYTICS_CONFIG;
  if (GA_MEASUREMENT_ID && window.gtag) {
    window.gtag("event", "page_view", { page_path: path });
  }
  if (FB_PIXEL_ID && window.fbq) {
    window.fbq("track", "PageView");
  }
};

export const trackEvent = (
  name: string,
  params: Record<string, any> = {}
) => {
  if (typeof window === "undefined") return;
  if (window.gtag) window.gtag("event", name, params);
  if (window.fbq) window.fbq("trackCustom", name, params);
};
