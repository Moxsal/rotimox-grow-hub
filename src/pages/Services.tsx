import Layout from "@/components/layout/Layout";
import ServiceCard from "@/components/sections/ServiceCard";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Star,
  Share2,
  Globe,
  MessageCircle,
  ArrowRight,
  ShoppingBag,
  ShoppingCart,
  Palette,
  Search,
  ThumbsUp,
  Users,
  Shield,
  TrendingUp,
  Target,
  Store,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    id: "gmb",
    icon: MapPin,
    title: "Google My Business (GMB) Optimization",
    description:
      "Boost your local visibility and attract more customers with our expert GMB optimization services. We ensure your business stands out in local searches and Google Maps.",
    features: [
      "Complete GMB setup and verification",
      "Profile optimization with keywords",
      "Local SEO ranking improvement",
      "Business visibility and reach growth",
      "Regular updates and monitoring",
      "Performance reporting and insights",
    ],
    ctaText: "Get GMB Help",
    ctaMessage: "Hi! I'm interested in Google My Business optimization services.",
  },
  {
    id: "reviews",
    icon: Star,
    title: "Google & Facebook Reviews Growth",
    description:
      "Build trust and credibility with professional review management strategies. We help you get more positive reviews and manage your online reputation effectively.",
    features: [
      "Strategic review acquisition plan",
      "Reputation management system",
      "Brand trust improvement tactics",
      "Negative review response strategy",
      "Review monitoring and alerts",
      "Competitor review analysis",
    ],
    ctaText: "Boost My Reviews",
    ctaMessage: "Hi! I want to grow my Google & Facebook reviews.",
  },
  {
    id: "social",
    icon: Share2,
    title: "Social Media Marketing",
    description:
      "Grow your presence on TikTok, Instagram, and Facebook with targeted strategies that drive engagement, followers, and conversions for your business.",
    features: [
      "TikTok & Instagram growth strategies",
      "Facebook business page promotion",
      "Lead generation campaigns",
      "Content creation and scheduling",
      "Influencer partnership management",
      "Analytics and performance tracking",
    ],
    ctaText: "Grow My Social Media",
    ctaMessage: "Hi! I'm interested in social media marketing services.",
  },
  {
    id: "website",
    icon: Globe,
    title: "Website Design & Development",
    description:
      "Get a professional, mobile-friendly website that converts visitors into customers. Our websites are fast, SEO-optimized, and designed to make an impact.",
    features: [
      "Custom business website design",
      "Mobile-responsive development",
      "SEO optimization built-in",
      "Fast loading speed optimization",
      "Contact forms and integrations",
      "Ongoing maintenance and support",
    ],
    ctaText: "Build My Website",
    ctaMessage: "Hi! I need a professional website for my business.",
  },
  {
    id: "jiji",
    icon: ShoppingBag,
    title: "Jiji Solutions",
    description:
      "End-to-end support for Jiji sellers — account setup, listing optimisation, promotion strategy, and growth assistance to help you attract more buyers and close more sales.",
    features: [
      "Jiji business account setup",
      "Professional listing optimisation",
      "Targeted product promotion",
      "Pricing and positioning advice",
      "Growth and visibility strategy",
      "Ongoing seller support",
    ],
    ctaText: "Get Jiji Help",
    ctaMessage: "Hi! I'd like help with my Jiji business — setup, optimisation, and growth.",
  },
];

const additionalServices = [
  { icon: Palette, title: "Website Redesign", desc: "Modernise outdated websites into fast, mobile-first, conversion-focused experiences.", msg: "Hi! I'd like a website redesign." },
  { icon: Search, title: "SEO Optimization", desc: "On-page, technical and local SEO to grow organic traffic and rankings.", msg: "Hi! I'm interested in SEO services." },
  { icon: ThumbsUp, title: "Google Reviews Growth", desc: "Authentic 5-star reviews on your Google Business Profile.", msg: "Hi! I want to grow my Google reviews." },
  { icon: Users, title: "Facebook Reviews Growth", desc: "Build social proof on your Facebook business page.", msg: "Hi! I want to grow my Facebook reviews." },
  { icon: ShoppingCart, title: "Shopify Store Growth", desc: "Setup, optimisation, SEO, and traffic for Shopify stores.", msg: "Hi! I need help growing my Shopify store." },
  { icon: Store, title: "Etsy Store Growth", desc: "Listing optimisation, ranking and buyer trust for Etsy.", msg: "Hi! I need help with my Etsy store." },
  { icon: ShoppingBag, title: "WooCommerce Optimization", desc: "Make WooCommerce stores faster, cleaner and higher-converting.", msg: "Hi! I need WooCommerce optimisation." },
  { icon: Target, title: "Lead Generation", desc: "Targeted campaigns that bring real, qualified leads to your business.", msg: "Hi! I'd like help with lead generation." },
  { icon: Sparkles, title: "Business Audits", desc: "Detailed audits for Google, websites, social, e-commerce and more.", msg: "Hi! I'd like to request a business audit." },
  { icon: Shield, title: "Reputation Management", desc: "Protect your brand online with proactive review and reputation strategy.", msg: "Hi! I need help with reputation management." },
  { icon: TrendingUp, title: "Digital Marketing Strategy", desc: "End-to-end strategy across SEO, content, ads and social.", msg: "Hi! I need a digital marketing strategy." },
];

const whatsappLink = "https://wa.me/2349027284784?text=Hello%20Rotimox%20Growth%20Hubs!%20I'm%20interested%20in%20your%20services.";

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground mt-4 mb-6">
            Digital Growth Services That{" "}
            <span className="text-accent">Drive Real Results</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-3xl mx-auto">
            Rotimox Growth Hubs offers end-to-end digital growth services across websites, SEO, social media, Google, Shopify, Etsy, WooCommerce, Jiji and every major online platform.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* More Services */}
      <section className="section-padding bg-background border-t border-border">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">More Services</span>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mt-4 mb-4">
              Everything Else We <span className="text-accent">Help You Grow</span>
            </h2>
            <p className="text-muted-foreground">
              From SEO and lead generation to e-commerce, reputation management and business audits.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {additionalServices.map((s, i) => (
              <a
                key={i}
                href={`https://wa.me/2349027284784?text=${encodeURIComponent(s.msg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card border border-border rounded-2xl p-5 hover:border-accent hover:shadow-lg transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-3 group-hover:bg-accent transition-colors">
                  <s.icon className="w-5 h-5 text-accent group-hover:text-accent-foreground" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Our Process
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mt-4 mb-6">
              How We{" "}
              <span className="text-accent">Work With You</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We learn about your business, goals, and target audience.",
              },
              {
                step: "02",
                title: "Strategy",
                description: "We create a customized plan tailored to your needs.",
              },
              {
                step: "03",
                title: "Execution",
                description: "We implement the strategy with precision and care.",
              },
              {
                step: "04",
                title: "Results",
                description: "We track, optimize, and deliver measurable results.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto">
                  <span className="text-accent-foreground font-display font-bold text-xl">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-xl text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Contact us today for a free consultation and let's discuss how we can help grow your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="xl">
                <MessageCircle className="w-5 h-5" />
                Get Free Consultation
              </Button>
            </a>
            <Link to="/contact">
              <Button variant="heroOutline" size="xl">
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
