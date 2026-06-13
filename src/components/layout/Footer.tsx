import { Link } from "react-router-dom";
import { Mail, MessageCircle, MapPin, Send } from "lucide-react";
import rotimoxLogo from "@/assets/rotimox-logo.png";
import { CONTACT, EMAIL_LINK, TELEGRAM_LINK, WHATSAPP_DEFAULT } from "@/config/contact";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    { name: "GMB Optimization", href: "/services#gmb" },
    { name: "Reviews Growth", href: "/services#reviews" },
    { name: "Social Media Marketing", href: "/services#social" },
    { name: "Website Development", href: "/services#website" },
    { name: "Jiji Solutions", href: "/services#jiji" },
  ];

  const legal = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Disclaimer", href: "/disclaimer" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img
                src={rotimoxLogo}
                alt="Rotimox Growth Hubs"
                className="h-12 w-auto object-contain brightness-0 invert"
              />
              <span className="font-display font-bold text-lg leading-tight">
                Rotimox <span className="text-accent">Growth Hubs</span>
              </span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              An international digital growth agency helping businesses gain more
              visibility, leads, customers and revenue through digital marketing,
              websites, SEO, social media and platform-specific growth strategies.
            </p>
            <p className="text-primary-foreground/50 text-xs italic">
              Powered by Rotimox Sales
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href={WHATSAPP_DEFAULT}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center hover:bg-accent hover:scale-110 transition-all duration-200"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href={TELEGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center hover:bg-accent hover:scale-110 transition-all duration-200"
                aria-label="Join us on Telegram"
              >
                <Send className="w-5 h-5" />
              </a>
              <a
                href={EMAIL_LINK}
                className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center hover:bg-accent hover:scale-110 transition-all duration-200"
                aria-label="Email Rotimox Sales"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link to={service.href} className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={WHATSAPP_DEFAULT}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors text-sm group"
                >
                  <MessageCircle className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                  <span className="group-hover:underline">Chat on WhatsApp</span>
                </a>
              </li>
              <li>
                <a
                  href={TELEGRAM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors text-sm group"
                >
                  <Send className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                  <span className="group-hover:underline">Join us on Telegram</span>
                </a>
              </li>
              <li>
                <a
                  href={EMAIL_LINK}
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors text-sm group break-all"
                >
                  <Mail className="w-5 h-5 text-accent group-hover:scale-110 transition-transform flex-shrink-0" />
                  <span className="group-hover:underline">{CONTACT.email}</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70 text-sm">
                <MapPin className="w-5 h-5 text-accent" />
                Worldwide Digital Agency
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Rotimox Sales. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {legal.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-primary-foreground/60 hover:text-accent transition-colors text-sm"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
