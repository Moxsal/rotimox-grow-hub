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
import { whatsappLink as buildWa } from "@/config/contact";

/**
 * Real client website portfolio.
 * To add a new project, append an object below with a verified live URL.
 */
const projects = [
  {
    name: "Nia Spa",
    category: "Website Design",
    description:
      "Designed and developed a mobile-friendly spa website that showcases services, enables online bookings, and elevates the brand's digital presence — bringing in more clients and increased revenue for the business.",
    image:
      "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://www.Nia-spa.com",
    review: {
      text:
        "Working with Rotimox Sales was one of the best decisions for my business. The quality, professionalism, and attention to detail on my website project were outstanding. Since launching, I've gained more clients, improved my online presence, and grown my business profits significantly.",
      author: "Nia Spa",
      company: "Nia Spa",
      rating: 5,
    },
  },
  {
    name: "BGM Realty Limited",
    category: "Website Design",
    description:
      "Built a professional real estate website with property listings, lead capture forms, and a clean, SEO-friendly structure — improving the company's visibility, credibility, and inbound enquiries online.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://www.bgmrealtylimited.com",
    review: {
      text:
        "Rotimox Sales is one of the most reliable and professional experts I've worked with. The support, dedication, and quality of service helped scale my business beyond expectations. The website and growth strategies greatly improved my company's visibility and professionalism.",
      author: "Gerald",
      company: "BGM Realty Limited",
      rating: 5,
    },
  },
  {
    name: "DAS GH LIMITED",
    category: "Website Design",
    description:
      "Built a professional corporate website for a Ghana-based services company, with a full service listing and a live URL that boosted online visibility and client enquiries from day one.",
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
];

const stats = [
  { icon: Award, value: "7+", label: "Years Experience" },
  { icon: Briefcase, value: "100+", label: "Projects Delivered" },
  { icon: Users, value: "Verified", label: "Real Client Work" },
  { icon: Globe, value: "Worldwide", label: "Clients Served" },
];

const whatsappLink = buildWa("Hello Rotimox Sales! I'd like to start a project.");

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
            A selection of websites we've built and businesses we actively
            support — each project below is verified, live, and trusted by the
            client behind it.
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
              Every project below includes a live link and a verified client
              review.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <article
                key={i}
                className="group bg-card rounded-2xl shadow-lg border border-border overflow-hidden flex flex-col card-hover transition-all duration-300"
              >
                <div className="relative overflow-hidden aspect-[16/10] bg-muted">
                  <img
                    src={project.image}
                    alt={`${project.name} website preview`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-md">
                    {project.category}
                  </span>
                </div>

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
