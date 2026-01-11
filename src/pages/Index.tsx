import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import ServiceCard from "@/components/sections/ServiceCard";
import TestimonialCard from "@/components/sections/TestimonialCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  MapPin,
  Star,
  Share2,
  Globe,
  ArrowRight,
  CheckCircle,
  MessageCircle,
} from "lucide-react";

const services = [
  {
    icon: MapPin,
    title: "Google My Business Optimization",
    description:
      "Boost your local visibility and attract more customers with our expert GMB optimization services.",
    features: [
      "Setup & Verification",
      "Profile Optimization",
      "Local SEO Ranking",
      "Business Visibility Growth",
    ],
    ctaText: "Get GMB Help",
    ctaMessage: "Hi! I'm interested in Google My Business optimization services.",
  },
  {
    icon: Star,
    title: "Google & Facebook Reviews Growth",
    description:
      "Build trust and credibility with professional review management strategies.",
    features: [
      "Review Strategy",
      "Reputation Management",
      "Brand Trust Improvement",
      "Response Management",
    ],
    ctaText: "Boost My Reviews",
    ctaMessage: "Hi! I want to grow my Google & Facebook reviews.",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description:
      "Grow your presence on TikTok, Instagram, and Facebook with targeted strategies.",
    features: [
      "TikTok & Instagram Growth",
      "Facebook Business Promotion",
      "Lead Generation",
      "Content Strategy",
    ],
    ctaText: "Grow My Social Media",
    ctaMessage: "Hi! I'm interested in social media marketing services.",
  },
  {
    icon: Globe,
    title: "Website Design & Development",
    description:
      "Get a professional, mobile-friendly website that converts visitors into customers.",
    features: [
      "Business Websites",
      "Mobile-Friendly Design",
      "SEO-Optimized",
      "Fast Loading Speed",
    ],
    ctaText: "Build My Website",
    ctaMessage: "Hi! I need a professional website for my business.",
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Inc.",
    content:
      "Rotimox Sales transformed our online presence. Our Google My Business listing went from invisible to ranking #1 in local searches within just 2 months!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Owner",
    company: "Chen's Restaurant",
    content:
      "The review management service was incredible. We went from 3.2 to 4.8 stars on Google, and our customer inquiries doubled. Highly recommended!",
    rating: 5,
  },
  {
    name: "Emily Williams",
    role: "Marketing Director",
    company: "Williams & Co",
    content:
      "Professional, responsive, and results-driven. The social media growth strategy brought us 10x more engagement in just 3 months.",
    rating: 5,
  },
];

const whatsappLink = "https://wa.me/234919945833?text=Hello%20Rotimox%20Sales!%20I'm%20interested%20in%20your%20services.";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <Hero />

      {/* Services Preview */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Our Services
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mt-4 mb-6">
              Digital Solutions That Drive{" "}
              <span className="text-accent">Real Results</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              We offer comprehensive digital marketing services designed to help your business grow and succeed in the digital age.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="outline" size="lg">
                View All Services
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Why Choose Us
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground">
                Your Success Is Our{" "}
                <span className="text-accent">Priority</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                With over 5 years of professional experience, we've helped hundreds of businesses gain visibility, trust, and unlimited clients. As a worldwide digital agency, we serve clients across all countries with the same dedication and expertise.
              </p>

              <div className="space-y-4">
                {[
                  "Proven track record of success",
                  "Personalized strategies for each client",
                  "24/7 customer support",
                  "Transparent reporting and analytics",
                  "Affordable pricing for all business sizes",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button variant="accent" size="lg">
                  <MessageCircle className="w-4 h-4" />
                  Start Your Growth Journey
                </Button>
              </a>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card rounded-2xl shadow-lg p-6 text-center card-hover">
                <div className="text-5xl font-display font-bold text-accent mb-2">5+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="bg-card rounded-2xl shadow-lg p-6 text-center card-hover mt-8">
                <div className="text-5xl font-display font-bold text-accent mb-2">500+</div>
                <div className="text-muted-foreground">Happy Clients</div>
              </div>
              <div className="bg-card rounded-2xl shadow-lg p-6 text-center card-hover">
                <div className="text-5xl font-display font-bold text-accent mb-2">50+</div>
                <div className="text-muted-foreground">Countries Served</div>
              </div>
              <div className="bg-card rounded-2xl shadow-lg p-6 text-center card-hover mt-8">
                <div className="text-5xl font-display font-bold text-accent mb-2">98%</div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Testimonials
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mt-4 mb-6">
              What Our Clients{" "}
              <span className="text-accent">Say About Us</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Don't just take our word for it. Here's what our satisfied clients have to say about working with Rotimox Sales.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/testimonials">
              <Button variant="outline" size="lg">
                View All Testimonials
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Join hundreds of satisfied clients who have transformed their online presence with Rotimox Sales. Get your free consultation today!
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

export default Index;
