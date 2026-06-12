import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  MessageCircle,
  ExternalLink,
  Star,
  Quote,
  MapPin,
  Phone,
  TrendingUp,
  Search,
  Users,
  Globe,
  Award,
  CheckCircle2,
  Building2,
  Star as StarIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import { whatsappLink as buildWa } from "@/config/contact";

type Status = "Currently Managed" | "Completed Project" | "Optimized by Rotimox Sales";

interface GMBClient {
  name: string;
  category: string;
  location: string;
  description: string;
  image: string;
  profileUrl: string;
  status: Status;
  review: {
    text: string;
    author: string;
    rating: number;
  };
}

const gmbClients: GMBClient[] = [
  {
    name: "DAS GH LIMITED",
    category: "Corporate Services",
    location: "Accra, Ghana",
    description:
      "Created and verified the Google Business Profile, listed every service offered, attached a live website URL, and optimised the profile for stronger local search visibility.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    profileUrl: "https://dasghlimited.com",
    status: "Optimized by Rotimox Sales",
    review: {
      text: "Strong communication and effective delivery. Seeing my company listed online with a live URL made our services visible to clients. Very happy with the result.",
      author: "Solomon Amlalo Donkor",
      rating: 5,
    },
  },
  {
    name: "Clean Masters Pro",
    category: "Cleaning Services",
    location: "Abuja, Nigeria",
    description:
      "Rebuilt the Google Business Profile with proper categories, weekly posts, and a structured review-generation system. Grew the profile from 7 to 27+ verified reviews and improved local visibility.",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
    profileUrl: buildWa("Hi Rotimox! Can I see the Clean Masters Pro GMB profile?"),
    status: "Currently Managed",
    review: {
      text: "Rotimox Sales transformed our Google Business Profile. We now get consistent calls from clients who found us on Google.",
      author: "Clean Masters Pro Team",
      rating: 5,
    },
  },
  {
    name: "The Perfect Cleans",
    category: "House Cleaning",
    location: "Tamale, Ghana",
    description:
      "Full profile optimisation — categories, services, hours, photos, and a structured review pipeline. Grew the profile from 0 reviews to a 5-star verified listing in the Tamale region.",
    image:
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1200&q=80",
    profileUrl: buildWa("Hi Rotimox! Can I see The Perfect Cleans GMB profile?"),
    status: "Completed Project",
    review: {
      text: "Before working with Rotimox, our profile was empty. Now clients trust us and book directly through Google. Highly recommended.",
      author: "The Perfect Cleans",
      rating: 5,
    },
  },
  {
    name: "Amoah & Associates",
    category: "Professional Services",
    location: "Ghana",
    description:
      "Delivered a full Google Business Profile audit and optimisation plan, fixing category, citation, and visibility issues — published as a verified client report.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
    profileUrl: "/audits/amoah-associates-google-profile-audit.pdf",
    status: "Completed Project",
    review: {
      text: "Thorough, well-documented audit with a clear action plan. Exactly the level of detail we needed.",
      author: "Amoah & Associates",
      rating: 5,
    },
  },
  {
    name: "Guardian View Technology Ghana",
    category: "Technology / Security",
    location: "Ghana",
    description:
      "Aggressive Google Business Profile audit and SEO overhaul — surfacing visibility gaps and a prioritised fix-list that the client can action immediately.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    profileUrl: "/audits/guardian-view-technology-ghana.html",
    status: "Completed Project",
    review: {
      text: "Detailed, professional, and easy to follow. The audit gave us a clear roadmap for growth.",
      author: "Guardian View Technology",
      rating: 5,
    },
  },
  {
    name: "Davita Fumigation & Cleaning",
    category: "Cleaning / Pest Control",
    location: "Ghana",
    description:
      "Aggressive Google Business Profile audit identifying ranking blockers, profile gaps, and a structured roadmap for improved local visibility and lead flow.",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
    profileUrl: "/audits/davita-fumigation-cleaning.html",
    status: "Completed Project",
    review: {
      text: "Insightful audit that highlighted issues we had no idea were hurting our visibility on Google.",
      author: "Davita Fumigation",
      rating: 5,
    },
  },
];

const whatsappLink = buildWa("Hello Rotimox Sales! I want to optimise my Google Business Profile.");

const statusStyles: Record<Status, string> = {
  "Currently Managed": "bg-success/15 text-success border-success/30",
  "Completed Project": "bg-accent/15 text-accent border-accent/30",
  "Optimized by Rotimox Sales": "bg-primary/15 text-primary border-primary/30",
};

const performanceStats = [
  { icon: Search, label: "Increased Visibility", value: "Up to 8x" },
  { icon: Phone, label: "More Customer Calls", value: "+320%" },
  { icon: TrendingUp, label: "Improved Rankings", value: "Top 3 Local" },
  { icon: Globe, label: "Better Local Reach", value: "5x More" },
  { icon: StarIcon, label: "More 5-Star Reviews", value: "+450%" },
];

const trustStats = [
  { icon: Award, value: "7+", label: "Years Experience" },
  { icon: Building2, value: "Verified", label: "Client Profiles" },
  { icon: Globe, value: "Worldwide", label: "Business Support" },
  { icon: Users, value: "Trusted", label: "By Real Clients" },
];

const GMBShowcase = () => {
  return (
    <Layout>
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container-custom text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-medium">Google My Business Specialists</span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
            GMB Success Showcase
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
            Real Google Business Profiles we manage and have optimised — driving more calls,
            visibility, and customers for businesses worldwide.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button variant="accent" size="lg">
                <MessageCircle className="w-5 h-5" />
                Optimise My Business Profile
              </Button>
            </a>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-primary-foreground hover:bg-white hover:text-primary">
                Contact Rotimox Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {trustStats.map((s) => (
              <div
                key={s.label}
                className="bg-card border border-border rounded-2xl p-6 text-center card-hover"
              >
                <div className="w-12 h-12 mx-auto rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <s.icon className="w-6 h-6 text-accent" />
                </div>
                <div className="font-display text-2xl md:text-3xl font-bold text-foreground">
                  {s.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Businesses We've Helped Grow on Google
            </h2>
            <p className="text-muted-foreground text-lg">
              Every profile below was optimised or is actively managed by Rotimox Sales.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {gmbClients.map((c) => (
              <article
                key={c.name}
                className="group bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <img
                    src={c.image}
                    alt={`${c.name} Google Business Profile preview`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-semibold border backdrop-blur-sm ${statusStyles[c.status]}`}
                  >
                    {c.status}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="text-xs font-semibold text-accent uppercase tracking-wide mb-1">
                    {c.category}
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {c.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground mt-1 mb-3">
                    <MapPin className="w-3.5 h-3.5" />
                    {c.location}
                  </div>

                  <p className="text-sm text-foreground/80 leading-relaxed mb-5">
                    {c.description}
                  </p>

                  <div className="bg-muted/40 border border-border rounded-xl p-4 mb-5 relative">
                    <Quote className="w-5 h-5 text-accent/40 absolute top-3 right-3" />
                    <div className="flex items-center gap-1 mb-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < c.review.rating
                              ? "text-warning fill-warning"
                              : "text-muted"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-foreground/85 italic mb-2">
                      "{c.review.text}"
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-accent/15 flex items-center justify-center text-accent text-xs font-bold">
                        {c.review.author.charAt(0)}
                      </div>
                      <span className="text-xs font-semibold text-foreground">
                        {c.review.author}
                      </span>
                    </div>
                  </div>

                  <div className="mt-auto flex flex-col sm:flex-row gap-3">
                    <a
                      href={c.profileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button variant="outline" className="w-full">
                        <ExternalLink className="w-4 h-4" />
                        View Details
                      </Button>
                    </a>
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button variant="accent" className="w-full">
                        <MessageCircle className="w-4 h-4" />
                        Get Same Results
                      </Button>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Results We Deliver
            </h2>
            <p className="text-muted-foreground text-lg">
              The performance lift our clients consistently see after we optimise their profiles.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {performanceStats.map((s) => (
              <div
                key={s.label}
                className="bg-card border border-border rounded-2xl p-6 text-center card-hover"
              >
                <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-accent/20 to-primary/10 flex items-center justify-center mb-4">
                  <s.icon className="w-6 h-6 text-accent" />
                </div>
                <div className="font-display text-2xl font-bold text-foreground">
                  {s.value}
                </div>
                <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wide">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              "7+ Years Experience",
              "Professional GMB Specialist",
              "Worldwide Business Support",
              "Trusted by Real Business Owners",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 bg-card border border-border rounded-xl p-5"
              >
                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                <span className="font-semibold text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container-custom text-center max-w-3xl">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Ready to Grow Your Google Business Profile?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Join the businesses gaining more visibility, calls, and customers with
            Rotimox Sales managing their Google presence.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button variant="accent" size="lg">
                <MessageCircle className="w-5 h-5" />
                Grow My GMB
              </Button>
            </a>
            <Link to="/contact">
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 border-white/30 text-primary-foreground hover:bg-white hover:text-primary"
              >
                Contact Rotimox Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GMBShowcase;
