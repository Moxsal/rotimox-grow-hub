import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import rotimoxLogo from "@/assets/rotimox-logo.png";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "GMB Showcase", href: "/gmb-showcase" },
  { name: "Before & After", href: "/before-after" },
  { name: "Audits", href: "/audits" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const whatsappLink = "https://wa.me/2349027284784?text=Hello%20Rotimox%20Growth%20Hubs!%20I'm%20interested%20in%20your%20services.";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <nav className="container-custom flex items-center justify-between py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3" aria-label="Rotimox Growth Hubs home">
          <img
            src={rotimoxLogo}
            alt="Rotimox Growth Hubs"
            className="h-12 w-auto object-contain"
          />
          <span className="hidden sm:inline font-display font-bold text-foreground text-lg leading-tight">
            Rotimox <span className="text-accent">Growth Hubs</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-sm font-medium transition-colors link-underline ${
                location.pathname === item.href
                  ? "text-accent"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button variant="accent" size="default">
              <Phone className="w-4 h-4" />
              Free Consultation
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-card border-t border-border animate-slide-up">
          <div className="container-custom py-4 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block text-base font-medium py-2 transition-colors ${
                  location.pathname === item.href
                    ? "text-accent"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block pt-4"
            >
              <Button variant="accent" className="w-full">
                <Phone className="w-4 h-4" />
                Free Consultation
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
