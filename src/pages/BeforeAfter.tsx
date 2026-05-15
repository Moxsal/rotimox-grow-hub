import { ArrowRight, Star, TrendingUp, Eye, Users, ShieldCheck, ExternalLink, MessageCircle, Sparkles } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import cleanMastersBefore from "@/assets/before-after/clean-masters-before.jpeg";
import cleanMastersAfter from "@/assets/before-after/clean-masters-after.jpeg";
import perfectCleansBefore from "@/assets/before-after/perfect-cleans-before.jpeg";
import perfectCleansAfter from "@/assets/before-after/perfect-cleans-after.jpeg";

const WHATSAPP = "https://wa.me/2349027284784?text=Hello%20Rotimox%20Sales!%20I%20want%20to%20grow%20my%20Google%20Business%20Profile.";

interface Project {
  id: string;
  business: string;
  category: string;
  location: string;
  profileUrl?: string;
  before: { reviews: string; rating: string; visibility: string; image: string };
  after: { reviews: string; rating: string; visibility: string; image: string };
  highlights: string[];
  testimonial: { quote: string; name: string; role: string; rating: number };
}

const projects: Project[] = [
  {
    id: "clean-masters",
    business: "Clean Masters Pro | Abuja Cleaning Services",
    category: "Cleaning Service",
    location: "Abuja, Nigeria",
    profileUrl: "#",
    before: {
      reviews: "7 reviews",
      rating: "5.0 ★ (limited reach)",
      visibility: "Low local visibility",
      image: cleanMastersBefore,
    },
    after: {
      reviews: "27+ reviews",
      rating: "5.0 ★ (verified trust)",
      visibility: "Top local search results",
      image: cleanMastersAfter,
    },
    highlights: [
      "From 7 to 27+ verified reviews",
      "4x increase in profile visibility",
      "Higher customer engagement & calls",
      "Stronger local trust authority",
    ],
    testimonial: {
      quote:
        "Rotimox Sales transformed our Google Business Profile. We now get consistent calls from clients who found us on Google. Truly professional service.",
      name: "Clean Masters Pro Team",
      role: "Cleaning Service, Abuja",
      rating: 5,
    },
  },
  {
    id: "perfect-cleans",
    business: "The Perfect Cleans",
    category: "House Cleaning Service",
    location: "Tamale, Ghana",
    profileUrl: "#",
    before: {
      reviews: "0 reviews",
      rating: "Unrated",
      visibility: "Barely visible on Google",
      image: perfectCleansBefore,
    },
    after: {
      reviews: "5+ reviews",
      rating: "5.0 ★ rated",
      visibility: "Open 24 hours, fully optimized",
      image: perfectCleansAfter,
    },
    highlights: [
      "From 0 to 5★ verified reviews",
      "Complete profile optimization",
      "Improved discovery in Tamale region",
      "Boosted credibility & conversions",
    ],
    testimonial: {
      quote:
        "Before working with Rotimox, our profile was empty. Now clients trust us and book directly through Google. Highly recommended!",
      name: "The Perfect Cleans",
      role: "House Cleaning, Ghana",
      rating: 5,
    },
  },
];

const SideCard = ({
  label,
  tone,
  data,
}: {
  label: "BEFORE" | "AFTER";
  tone: "before" | "after";
  data: { reviews: string; rating: string; visibility: string; image: string };
}) => (
  <div
    className={`relative rounded-2xl overflow-hidden border-2 ${
      tone === "after"
        ? "border-accent shadow-xl shadow-accent/10"
        : "border-border"
    } bg-card transition-transform duration-300 hover:-translate-y-1`}
  >
    <div
      className={`absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-xs font-bold tracking-wider ${
        tone === "after"
          ? "bg-accent text-accent-foreground"
          : "bg-muted text-muted-foreground"
      }`}
    >
      {label}
    </div>
    <div className="aspect-[3/4] bg-muted overflow-hidden">
      <img src={data.image} alt={`${label} GMB profile`} className="w-full h-full object-cover object-top" loading="lazy" />
    </div>
    <div className="p-5 space-y-3">
      <div className="flex items-center gap-2 text-sm">
        <Star className={`w-4 h-4 ${tone === "after" ? "text-accent" : "text-muted-foreground"}`} />
        <span className="font-semibold text-foreground">{data.reviews}</span>
      </div>
      <div className="flex items-center gap-2 text-sm">
        <ShieldCheck className={`w-4 h-4 ${tone === "after" ? "text-accent" : "text-muted-foreground"}`} />
        <span className="text-foreground">{data.rating}</span>
      </div>
      <div className="flex items-center gap-2 text-sm">
        <Eye className={`w-4 h-4 ${tone === "after" ? "text-accent" : "text-muted-foreground"}`} />
        <span className="text-foreground">{data.visibility}</span>
      </div>
    </div>
  </div>
);

const BeforeAfter = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Real Client Transformations
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Before & After <span className="text-accent">Results</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            See how Rotimox Sales transforms Google Business Profiles — boosting reviews, visibility, and customer trust for real businesses.
          </p>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
            <Button variant="accent" size="lg">
              <MessageCircle className="w-5 h-5" />
              Grow My Business Profile
            </Button>
          </a>
        </div>
      </section>

      {/* Projects */}
      <section className="section-padding">
        <div className="container-custom space-y-20">
          {projects.map((project, idx) => (
            <article key={project.id} className="space-y-8">
              {/* Header */}
              <div className="text-center max-w-2xl mx-auto">
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
                  Project {String(idx + 1).padStart(2, "0")} · {project.category}
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                  {project.business}
                </h2>
                <p className="text-muted-foreground text-sm">{project.location}</p>
              </div>

              {/* Before / After */}
              <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-4 items-center">
                <SideCard label="BEFORE" tone="before" data={project.before} />
                <div className="flex md:flex-col items-center justify-center gap-2 py-4">
                  <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center shadow-lg">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-accent tracking-wider">TRANSFORMED</span>
                </div>
                <SideCard label="AFTER" tone="after" data={project.after} />
              </div>

              {/* Highlights */}
              <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl p-6 md:p-8 border border-border">
                <h3 className="font-display text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-accent" />
                  Result Highlights
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {project.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-2 text-sm">
                      <div className="w-5 h-5 rounded-full bg-accent/20 text-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Users className="w-3 h-3" />
                      </div>
                      <span className="text-foreground">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial + CTA */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2 bg-card rounded-2xl p-6 md:p-8 border border-border shadow-sm">
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: project.testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-warning text-warning" />
                    ))}
                  </div>
                  <p className="text-foreground italic leading-relaxed mb-4">"{project.testimonial.quote}"</p>
                  <div className="text-sm">
                    <div className="font-semibold text-foreground">{project.testimonial.name}</div>
                    <div className="text-muted-foreground">{project.testimonial.role}</div>
                  </div>
                </div>
                <div className="flex flex-col gap-3 justify-center">
                  {project.profileUrl && (
                    <a href={project.profileUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full">
                        <ExternalLink className="w-4 h-4" />
                        View Business Profile
                      </Button>
                    </a>
                  )}
                  <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                    <Button variant="accent" className="w-full">
                      <MessageCircle className="w-4 h-4" />
                      Boost My Reviews
                    </Button>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container-custom text-center max-w-2xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ready for Your Own Transformation?
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Let Rotimox Sales optimize your Google Business Profile and turn searches into real customers.
          </p>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
            <Button variant="accent" size="lg">
              <MessageCircle className="w-5 h-5" />
              Work With Rotimox Sales
            </Button>
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default BeforeAfter;
