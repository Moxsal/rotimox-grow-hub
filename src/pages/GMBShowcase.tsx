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

/**
 * 📍 GMB CLIENT SHOWCASE DATA
 * To add a new business, append an object to this array.
 * Supported fields: name, category, location, description, image,
 * profileUrl, status, and review (with rating, text, author).
 */
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
    name: "Bright Smile Dental Clinic",
    category: "Healthcare / Dental",
    location: "Accra, Ghana",
    description:
      "Full Google Business Profile optimization — keywords, services, posts, photos, and review management. Achieved top 3 local pack ranking within 90 days.",
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
    profileUrl: "https://www.google.com/maps",
    status: "Currently Managed",
    review: {
      text: "Our clinic now appears first when patients search nearby. Calls have tripled and reviews keep growing.",
      author: "Dr. A. Mensah",
      rating: 5,
    },
  },
  {
    name: "UrbanThreads Boutique",
    category: "Retail / Fashion",
    location: "Lagos, Nigeria",
    description:
      "Rebuilt the GMB profile from scratch with category fixes, weekly Google Posts, and review generation system. Direction requests up 480%.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    profileUrl: "https://www.google.com/maps",
    status: "Currently Managed",
    review: {
      text: "We get walk-in customers every day who say they found us on Google. Best decision we made this year.",
      author: "Chiamaka O.",
      rating: 5,
    },
  },
  {
    name: "DAS GH LIMITED",
    category: "Corporate Services",
    location: "Accra, Ghana",
    description:
      "Created and verified the Google Business Profile, listed all services, added live website URL, and optimized for local search visibility.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    profileUrl: "https://www.google.com/maps",
    status: "Optimized by Rotimox Sales",
    review: {
      text: "Strong communication and effective delivery. Seeing my company listed online with a live URL made our services visible to clients. Very happy with the result.",
      author: "Solomon Amlalo Donkor",
      rating: 5,
    },
  },
  {
    name: "Greenfield Auto Repair",
    category: "Automotive Services",
    location: "Nairobi, Kenya",
    description:
      "Recovered a suspended GMB listing, restructured categories, and built a 5-star review pipeline. Customer calls up 320% in 4 months.",
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1200&q=80",
    profileUrl: "https://www.google.com/maps",
    status: "Completed Project",
    review: {
      text: "Rotimox saved our listing and brought us back on the map — literally. Bookings are at an all-time high.",
      author: "James K.",
      rating: 5,
    },
  },
  {
    name: "Aroma Bistro & Café",
    category: "Restaurant / Hospitality",
    location: "Abuja, Nigeria",
    description:
      "Weekly Google Posts, menu uploads, photo SEO, and review responses. Profile views grew 7x and reservations doubled.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    profileUrl: "https://www.google.com/maps",
    status: "Currently Managed",
    review: {
      text: "We're packed every weekend now. Google traffic became our #1 source of new customers.",
      author: "Tunde A.",
      rating: 5,
    },
  },
  {
    name: "Elite Fitness Studio",
    category: "Fitness / Wellness",
    location: "London, United Kingdom",
    description:
      "Local SEO + GMB optimization with class schedules, photo galleries, and Q&A management. Ranked #1 for ‘fitness studio near me’.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    profileUrl: "https://www.google.com/maps",
    status: "Completed Project",
    review: {
      text: "Professional, fast, and results-driven. Our membership sign-ups doubled within two months.",
      author: "Sarah M.",
      rating: 5,
    },
  },
];

const whatsappLink =
  "https://wa.me/2349027284784?text=Hello%20Rotimox%20Sales!%20I%20want%20to%20optimize%20my%20Google%20Business%20Profile.";

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
  { icon: Building2, value: "200+", label: "GMB Profiles Optimized" },
  { icon: Globe, value: "Worldwide", label: "Business Support" },
  { icon: Users, value: "1,000+", label: "Trusted Clients" },
];

const GMBShowcase = () => {
  return (
    <Layout>
      {/* Hero */}
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
            Real Google Business Profiles we manage and have optimized — driving more calls,
            visibility, and customers for businesses worldwide.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button variant="accent" size="lg">
                <MessageCircle className="w-5 h-5" />
                Optimize My Business Profile
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

      {/* Trust Stats */}
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

      {/* GMB Client Cards */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Businesses We've Helped Grow on Google
            </h2>
            <p className="text-muted-foreground text-lg">
              Each profile below was optimized or is actively managed by Rotimox Sales.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {gmbClients.map((c) => (
              <article
                key={c.name}
                className="group bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                {/* Image */}
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

                {/* Body */}
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

                  {/* Review */}
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
                        View Business Profile
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

      {/* Performance Highlights */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Results We Deliver
            </h2>
            <p className="text-muted-foreground text-lg">
              The performance lift our clients consistently see after we optimize their profiles.
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

      {/* Authority Strip */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              "5+ Years Experience",
              "Professional GMB Specialist",
              "Worldwide Business Support",
              "Trusted by Business Owners",
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

      {/* Final CTA */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container-custom text-center max-w-3xl">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Ready to Grow Your Google Business Profile?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Join hundreds of businesses gaining more visibility, calls, and customers with
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
