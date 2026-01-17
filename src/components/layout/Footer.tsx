import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import rotimoxLogo from "@/assets/rotimox-logo.png";

const Footer = () => {
  const whatsappLink = "https://wa.me/2349027284784?text=Hello%20Rotimox%20Sales!";
  const emailLink = "mailto:Rotimiexpert42@gmail.com";
  const phoneLink = "tel:+2349169945833";

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
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <img 
                src={rotimoxLogo} 
                alt="Rotimox Digital Growth" 
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              A worldwide digital agency helping businesses grow with Google My Business, reviews management, and digital marketing solutions.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center hover:bg-accent hover:scale-110 transition-all duration-200"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href={emailLink}
                className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center hover:bg-accent hover:scale-110 transition-all duration-200"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href={phoneLink}
                className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center hover:bg-accent hover:scale-110 transition-all duration-200"
                aria-label="Call Us"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors text-sm group"
                >
                  <MessageCircle className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                  <span className="group-hover:underline">WhatsApp Chat</span>
                </a>
              </li>
              <li>
                <a
                  href={phoneLink}
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors text-sm group"
                >
                  <Phone className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                  <span className="group-hover:underline">+234 916 994 5833</span>
                </a>
              </li>
              <li>
                <a
                  href={emailLink}
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors text-sm group"
                >
                  <Mail className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                  <span className="group-hover:underline">Rotimiexpert42@gmail.com</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70 text-sm">
                <MapPin className="w-5 h-5 text-accent" />
                Worldwide Digital Agency
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
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
