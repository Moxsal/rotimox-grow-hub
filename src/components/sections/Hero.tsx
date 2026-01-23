import { ArrowRight, MessageCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  const whatsappLink = "https://wa.me/2349027284784?text=Hello%20Rotimox%20Sales!%20I'm%20interested%20in%20a%20free%20consultation.";

  const features = [
    "Google My Business Growth",
    "Reviews Management",
    "Social Media Marketing",
    "Website Development",
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center bg-primary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Trusted by 1,000+ Businesses Worldwide
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight">
              Helping Businesses Grow with{" "}
              <span className="text-accent">Google My Business</span>, Reviews &{" "}
              <span className="text-accent">Digital Marketing</span>
            </h1>

            <p className="text-xl text-primary-foreground/80 leading-relaxed max-w-xl">
              Professional GMB Optimization, Social Media Growth & Website Development with over{" "}
              <strong className="text-accent">7 Years Experience</strong>.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-3">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-primary-foreground/80">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="xl" className="w-full sm:w-auto">
                  <MessageCircle className="w-5 h-5" />
                  Get Free Consultation
                </Button>
              </a>
              <Link to="/contact">
                <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats Card */}
          <div className="relative hidden lg:block animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="bg-card rounded-2xl shadow-2xl p-8 space-y-6">
              <h3 className="font-display text-2xl text-foreground">Why Choose Us?</h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-muted rounded-xl">
                  <div className="text-4xl font-display font-bold text-accent">7+</div>
                  <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-muted rounded-xl">
                  <div className="text-4xl font-display font-bold text-accent">1,000+</div>
                  <div className="text-sm text-muted-foreground mt-1">Happy Clients</div>
                </div>
                <div className="text-center p-4 bg-muted rounded-xl">
                  <div className="text-4xl font-display font-bold text-accent">50+</div>
                  <div className="text-sm text-muted-foreground mt-1">Countries Served</div>
                </div>
                <div className="text-center p-4 bg-muted rounded-xl">
                  <div className="text-4xl font-display font-bold text-accent">98%</div>
                  <div className="text-sm text-muted-foreground mt-1">Client Satisfaction</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-accent/10 rounded-xl">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Available 24/7</div>
                  <div className="text-sm text-muted-foreground">Quick Response Guaranteed</div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full shadow-lg font-semibold text-sm">
              🌍 Worldwide Service
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
