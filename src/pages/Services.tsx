import Layout from "@/components/layout/Layout";
import ServiceCard from "@/components/sections/ServiceCard";
import { Button } from "@/components/ui/button";
import { MapPin, Star, Share2, Globe, MessageCircle, ArrowRight } from "lucide-react";
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
];

const whatsappLink = "https://wa.me/234919945833?text=Hello%20Rotimox%20Sales!%20I'm%20interested%20in%20your%20services.";

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
            Digital Solutions That{" "}
            <span className="text-accent">Drive Results</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-3xl mx-auto">
            We offer comprehensive digital marketing services designed to help your business grow, build trust, and succeed in the competitive digital landscape.
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
