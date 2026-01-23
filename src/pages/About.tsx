import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  MessageCircle,
  Globe,
  Award,
  Users,
  Target,
  MapPin,
  Star,
  Share2,
} from "lucide-react";

const whatsappLink = "https://wa.me/2349027284784?text=Hello%20Rotimox%20Sales!%20I'm%20interested%20in%20your%20services.";

const expertise = [
  {
    icon: MapPin,
    title: "Google My Business (GMB) Growth",
    description: "Expert optimization to boost your local visibility and attract more customers.",
  },
  {
    icon: Star,
    title: "Google & Facebook Reviews Management",
    description: "Strategic review growth and reputation management for lasting trust.",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "TikTok, Instagram, and Facebook strategies that drive real engagement.",
  },
  {
    icon: Globe,
    title: "Website Design & Development",
    description: "Professional, mobile-friendly websites that convert visitors into customers.",
  },
];

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "We focus on measurable outcomes that directly impact your bottom line.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Your success is our priority. We tailor every strategy to your unique needs.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards in everything we do.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Serving clients worldwide with the same dedication and expertise.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            About Us
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground mt-4 mb-6">
            Your Trusted Partner in{" "}
            <span className="text-accent">Digital Growth</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-3xl mx-auto">
            Rotimox Sales is a worldwide digital agency helping businesses gain visibility, trust, and unlimited clients through expert digital marketing solutions.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="font-display text-3xl md:text-4xl text-foreground">
                Over 7 Years of{" "}
                <span className="text-accent">Professional Experience</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                At Rotimox Sales, we're passionate about helping businesses thrive in the digital landscape. With over 7 years of professional experience and 1,000+ happy clients worldwide, we've developed proven strategies that deliver real, measurable results.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                As a worldwide digital agency, we serve clients across all countries, bringing the same level of dedication, expertise, and personalized attention to every project. Whether you're a local business looking to dominate your market or a global brand seeking to expand your reach, we have the skills and experience to help you succeed.
              </p>

              <div className="space-y-4">
                {[
                  "Trusted by 1,000+ businesses worldwide",
                  "Serving clients in 50+ countries",
                  "98% client satisfaction rate",
                  "Dedicated 24/7 support team",
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
                  Start Your Journey
                </Button>
              </a>
            </div>

            <div className="bg-muted rounded-2xl p-8 space-y-6">
              <h3 className="font-display text-2xl text-foreground">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses of all sizes with cutting-edge digital marketing solutions that drive growth, build trust, and create lasting success in the ever-evolving digital landscape.
              </p>
              <div className="pt-4 border-t border-border">
                <h3 className="font-display text-2xl text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the world's most trusted digital marketing partner, known for delivering exceptional results and transforming businesses across the globe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Our Expertise
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mt-4 mb-6">
              What We{" "}
              <span className="text-accent">Specialize In</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl shadow-lg p-6 text-center card-hover"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Our Values
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mt-4 mb-6">
              What Drives{" "}
              <span className="text-accent">Our Success</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto">
                  <value.icon className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="font-display font-semibold text-xl text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <Globe className="w-16 h-16 text-accent mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-6">
            A Worldwide Digital Agency
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-3xl mx-auto mb-8">
            We are proud to serve clients across all countries. No matter where your business is located, we bring the same level of expertise, dedication, and results-driven approach to help you succeed in the digital world.
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="xl">
              <MessageCircle className="w-5 h-5" />
              Get Free Consultation
            </Button>
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default About;
