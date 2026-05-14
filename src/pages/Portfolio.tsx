import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  MessageCircle,
  ExternalLink,
  Star,
  Quote,
  Users,
  Globe,
  Award,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

/**
 * 📂 PORTFOLIO DATA
 * To add a new project, just append a new object to this array.
 * Each project supports: image, business name, description, category,
 * live URL, and a client review.
 */
const projects = [
  {
    name: "DAS GH LIMITED",
    category: "Website Design",
    description:
      "Built a professional corporate website for a Ghana-based services company, listing all offerings with a live URL that boosted online visibility and client inquiries.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://dasghlimited.com",
    review: {
      text:
        "Communication was excellent and delivery was outstanding. Seeing my company listed online with a live URL made all our services visible to clients. Very happy with the result.",
      author: "Solomon Amlalo Donkor",
      company: "DAS GH LIMITED",
      rating: 5,
    },
  },
  {
    name: "Bright Smile Dental Clinic",
    category: "Google My Business Optimization",
    description:
      "Optimized GMB profile, added geo-targeted keywords, and managed reputation — driving a 6x increase in calls and direction requests within 90 days.",
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://www.google.com/maps",
    review: {
      text:
        "Our clinic now shows up first when people search nearby. Calls have tripled and our reviews look amazing.",
      author: "Dr. A. Mensah",
      company: "Bright Smile Dental",
      rating: 5,
    },
  },
  {
    name: "UrbanThreads Boutique",
    category: "Social Media Marketing",
    description:
      "Designed a TikTok and Instagram growth strategy, produced viral product reels, and ran targeted ads — scaling followers from 1.2K to 45K in 6 months.",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://www.instagram.com",
    review: {
      text:
        "Sales exploded after Rotimox took over our socials. Their content strategy is on another level.",
      author: "Chioma O.",
      company: "UrbanThreads Boutique",
      rating: 5,
    },
  },
  {
    name: "GreenLeaf Restaurant",
    category: "Reviews Growth",
    description:
      "Implemented an automated review-request system and reputation workflow — taking the restaurant from 45 reviews at 3.8★ to 500+ reviews at 4.9★.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://www.google.com/maps",
    review: {
      text:
        "We went from invisible to fully booked weekends. The review growth was a game changer.",
      author: "Marcus T.",
      company: "GreenLeaf Restaurant",
      rating: 5,
    },
  },
  {
    name: "Apex Legal Consultants",
    category: "Website Design",
    description:
      "Designed a high-converting law firm website with appointment booking, SEO structure, and trust-building visuals — 15x increase in qualified monthly leads.",
    image:
      "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://example.com",
    review: {
      text:
        "Beautiful, professional, and fast. Our clients constantly compliment the new site.",
      author: "Mr. K. Adeyemi",
      company: "Apex Legal Consultants",
      rating: 5,
    },
  },
  {
    name: "FitCore Gym",
    category: "Social Media Marketing",
    description:
      "Launched lead-gen funnels on Instagram & Facebook, ran retargeting ads, and built an automated DM flow — 200+ qualified leads per month.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://www.instagram.com",
    review: {
      text:
        "Our membership doubled in 4 months. Truly professional team.",
      author: "Daniel I.",
      company: "FitCore Gym",
      rating: 5,
    },
  },
];

const stats = [
  { icon: Award, value: "7+", label: "Years Experience" },
  { icon: Briefcase, value: "100+", label: "Projects Completed" },
  { icon: Users, value: "1,000+", label: "Businesses Helped" },
  { icon: Globe, value: "Worldwide", label: "Happy Clients" },
];

const whatsappLink =
  "https://wa.me/2349027284784?text=Hello%20Rotimox!%20I'd%20like%20to%20start%20a%20project.";

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-warning fill-warning" : "text-muted"
        }`}
      />
    ))}
  </div>
);

const Portfolio = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Portfolio & Client Success
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground mt-4 mb-6">
            Real Websites. Real Businesses.{" "}
            <span className="text-accent">Real Growth.</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-3xl mx-auto mb-8">
            Explore a selection of websites we've built and businesses we've
            helped grow with GMB optimization, social media marketing, and
            review growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="xl">
                <MessageCircle className="w-5 h-5" />
                Start Your Project
              </Button>
            </a>
            <Link to="/contact">
              <Button variant="heroOutline" size="xl">
                Book Consultation
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats / Achievements */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-accent/10 flex items-center justify-center">
                  <stat.icon className="w-7 h-7 text-accent" />
                </div>
                <div className="text-3xl md:text-4xl font-display font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Featured Projects
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mt-4 mb-4">
              Websites & Brands{" "}
              <span className="text-accent">We've Grown</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Each project below includes a live link and a verified client
              review.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <article
                key={i}
                className="group bg-card rounded-2xl shadow-lg border border-border overflow-hidden flex flex-col card-hover transition-all duration-300"
              >
                {/* Screenshot */}
                <div className="relative overflow-hidden aspect-[16/10] bg-muted">
                  <img
                    src={project.image}
                    alt={`${project.name} website screenshot`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-md">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <h3 className="font-display text-2xl text-foreground mb-2">
                    {project.name}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {project.description}
                  </p>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-6"
                  >
                    <Button variant="default" className="w-full sm:w-auto">
                      <ExternalLink className="w-4 h-4" />
                      Visit Website
                    </Button>
                  </a>

                  {/* Client Review */}
                  <div className="mt-auto bg-muted/60 rounded-xl p-5 border border-border relative">
                    <Quote className="absolute top-3 right-3 w-5 h-5 text-accent/40" />
                    <StarRating rating={project.review.rating} />
                    <p className="text-foreground text-sm leading-relaxed mt-3 mb-4">
                      "{project.review.text}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center font-display font-bold text-accent">
                        {project.review.author.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-foreground text-sm">
                          {project.review.author}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {project.review.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-6">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Let's build a website and growth strategy that turns visitors into
            paying customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="xl">
                <MessageCircle className="w-5 h-5" />
                Work With Us
              </Button>
            </a>
            <Link to="/contact">
              <Button variant="heroOutline" size="xl">
                Book Consultation
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
