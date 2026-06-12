import { MessageCircle, Send } from "lucide-react";
import { WHATSAPP_DEFAULT, TELEGRAM_LINK } from "@/config/contact";

const FloatingWhatsApp = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end">
      {/* Telegram */}
      <a
        href={TELEGRAM_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-12 h-12 bg-[#229ED9] hover:bg-[#1b87b8] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
        aria-label="Join us on Telegram"
      >
        <Send className="w-5 h-5 text-white" />
        <span className="absolute right-full mr-3 bg-foreground text-background px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Join us on Telegram
        </span>
      </a>

      {/* WhatsApp */}
      <a
        href={WHATSAPP_DEFAULT}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
        <span className="absolute right-full mr-3 bg-foreground text-background px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Chat with us
        </span>
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
      </a>
    </div>
  );
};

export default FloatingWhatsApp;
