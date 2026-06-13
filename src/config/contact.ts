// Centralized contact configuration for Rotimox Growth Hubs.
// Update once here and it propagates everywhere.

export const CONTACT = {
  email: "rotimoxgrowthhubs@gmail.com",
  // Primary business WhatsApp — used in main CTAs, header button, contact forms.
  whatsappNumber: "2349027284784",
  // Secondary direct WhatsApp — shown ONLY on the Contact page as an extra option.
  secondaryWhatsappNumber: "234919945833",
  telegramUsername: "Rotimox",
} as const;

export const EMAIL_LINK = `mailto:${CONTACT.email}`;
export const TELEGRAM_LINK = `https://t.me/${CONTACT.telegramUsername}`;
export const TELEGRAM_LABEL = "Join us on Telegram";

export const whatsappLink = (
  message = "Hello Rotimox Growth Hubs! I'm interested in your services.",
) => `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const secondaryWhatsappLink = (
  message = "Hello Rotimox Growth Hubs! I'd like to speak directly.",
) =>
  `https://wa.me/${CONTACT.secondaryWhatsappNumber}?text=${encodeURIComponent(message)}`;

export const WHATSAPP_DEFAULT = whatsappLink();
export const WHATSAPP_SECONDARY_DEFAULT = secondaryWhatsappLink();
