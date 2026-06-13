// Per-platform audit definitions for the AI Audit Center.

export type AuditPlatformKey =
  | "google"
  | "website"
  | "shopify"
  | "etsy"
  | "woocommerce"
  | "tiktok"
  | "facebook"
  | "instagram"
  | "linkedin"
  | "x"
  | "threads"
  | "youtube"
  | "jiji";

export interface AuditPlatform {
  key: AuditPlatformKey;
  name: string;
  shortLabel: string;
  urlLabel: string;
  urlPlaceholder: string;
  description: string;
  emoji: string;
}

export const AUDIT_PLATFORMS: AuditPlatform[] = [
  {
    key: "google",
    name: "Google Business Profile Audit",
    shortLabel: "Google",
    urlLabel: "Google Business Profile Link",
    urlPlaceholder: "https://maps.google.com/?cid=... or your GBP URL",
    description: "Audit your Google Business Profile for ranking, trust, and reviews.",
    emoji: "🟢",
  },
  {
    key: "website",
    name: "Website Audit",
    shortLabel: "Website",
    urlLabel: "Website URL",
    urlPlaceholder: "https://yourbusiness.com",
    description: "Get a full website audit — design, SEO, speed, conversion.",
    emoji: "🌐",
  },
  {
    key: "shopify",
    name: "Shopify Store Audit",
    shortLabel: "Shopify",
    urlLabel: "Shopify Store Link",
    urlPlaceholder: "https://yourstore.myshopify.com",
    description: "Increase Shopify conversions, product visibility, and sales.",
    emoji: "🛍️",
  },
  {
    key: "etsy",
    name: "Etsy Store Audit",
    shortLabel: "Etsy",
    urlLabel: "Etsy Store Link",
    urlPlaceholder: "https://www.etsy.com/shop/yourshop",
    description: "Grow your Etsy listings, ranking, and buyer trust.",
    emoji: "🎨",
  },
  {
    key: "woocommerce",
    name: "WooCommerce Audit",
    shortLabel: "WooCommerce",
    urlLabel: "WooCommerce Store URL",
    urlPlaceholder: "https://yourstore.com",
    description: "Optimize a WooCommerce store for traffic and revenue.",
    emoji: "🛒",
  },
  {
    key: "tiktok",
    name: "TikTok Audit",
    shortLabel: "TikTok",
    urlLabel: "TikTok Profile Link",
    urlPlaceholder: "https://www.tiktok.com/@yourhandle",
    description: "Get a content + growth audit for your TikTok profile.",
    emoji: "🎵",
  },
  {
    key: "facebook",
    name: "Facebook Audit",
    shortLabel: "Facebook",
    urlLabel: "Facebook Page Link",
    urlPlaceholder: "https://facebook.com/yourpage",
    description: "Grow your Facebook page, engagement, reviews, and reach.",
    emoji: "📘",
  },
  {
    key: "instagram",
    name: "Instagram Audit",
    shortLabel: "Instagram",
    urlLabel: "Instagram Profile Link",
    urlPlaceholder: "https://instagram.com/yourhandle",
    description: "Optimize your Instagram bio, content, and growth funnel.",
    emoji: "📸",
  },
  {
    key: "linkedin",
    name: "LinkedIn Audit",
    shortLabel: "LinkedIn",
    urlLabel: "LinkedIn Profile or Company Page",
    urlPlaceholder: "https://linkedin.com/company/yourbusiness",
    description: "Strengthen authority and lead-gen on LinkedIn.",
    emoji: "💼",
  },
  {
    key: "x",
    name: "X (Twitter) Audit",
    shortLabel: "X / Twitter",
    urlLabel: "X (Twitter) Profile Link",
    urlPlaceholder: "https://x.com/yourhandle",
    description: "Improve your X profile, voice, and follower growth.",
    emoji: "✖️",
  },
  {
    key: "threads",
    name: "Threads Audit",
    shortLabel: "Threads",
    urlLabel: "Threads Profile Link",
    urlPlaceholder: "https://www.threads.net/@yourhandle",
    description: "Audit your Threads presence and content strategy.",
    emoji: "🧵",
  },
  {
    key: "youtube",
    name: "YouTube Audit",
    shortLabel: "YouTube",
    urlLabel: "YouTube Channel Link",
    urlPlaceholder: "https://www.youtube.com/@yourchannel",
    description: "Channel, thumbnails, SEO, and growth audit for YouTube.",
    emoji: "▶️",
  },
  {
    key: "jiji",
    name: "Jiji Audit",
    shortLabel: "Jiji",
    urlLabel: "Jiji Store / Listing Link",
    urlPlaceholder: "https://jiji.ng/your-store-or-listing",
    description: "Audit your Jiji store, listings, and conversions.",
    emoji: "🏪",
  },
];

export const getAuditPlatform = (key: string): AuditPlatform | undefined =>
  AUDIT_PLATFORMS.find((p) => p.key === key);
