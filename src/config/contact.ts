// Centralized contact configuration for Rotimox Sales.
// Update once here and it propagates everywhere.

export const CONTACT = {
  email: "rotimoxgrowthhubs@gmail.com",
  // WhatsApp number is used for chat links only — never displayed as plain text.
  whatsappNumber: "2349027284784",
  telegramUsername: "Rotimox",
} as const;

export const EMAIL_LINK = `mailto:${CONTACT.email}`;
export const TELEGRAM_LINK = `https://t.me/${CONTACT.telegramUsername}`;
export const TELEGRAM_LABEL = "Join us on Telegram";

export const whatsappLink = (message = "Hello Rotimox Sales! I'm interested in your services.") =>
  `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const WHATSAPP_DEFAULT = whatsappLink();
