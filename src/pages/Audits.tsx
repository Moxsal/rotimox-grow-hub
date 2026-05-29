import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  FileText,
  Download,
  Eye,
  Calendar,
  CheckCircle2,
  ShieldCheck,
  Search,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

/**
 * 📂 AUDIT DATA
 * To add a new audit:
 * 1. Drop the PDF/HTML file into /public/audits/
 * 2. Add a new object below with the matching `file` path.
 */
type AuditType = "GMB Performance Audit" | "SEO Audit" | "Website Audit";
type AuditStatus = "Completed Audit" | "Verified Project";

interface AuditItem {
  business: string;
  title: string;
  type: AuditType;
  status: AuditStatus;
  date: string;
  file: string;
  format: "PDF" | "HTML";
}

const audits: AuditItem[] = [
  {
    business: "Amoah & Associates",
    title: "Google Business Profile Audit",
    type: "GMB Performance Audit",
    status: "Verified Project",
    date: "2025-10-12",
    file: "/audits/amoah-associates-google-profile-audit.pdf",
    format: "PDF",
  },
  {
    business: "Guardian View Technology Ghana Ltd",
    title: "Urgent GBP Audit & SEO Overhaul",
    type: "GMB Performance Audit",
    status: "Completed Audit",
    date: "2025-09-28",
    file: "/audits/guardian-view-technology-ghana.html",
    format: "HTML",
  },
  {
    business: "Davita Fumigation and Cleaning Services",
    title: "Aggressive Google Business Profile Audit",
    type: "GMB Performance Audit",
    status: "Completed Audit",
    date: "2025-09-15",
    file: "/audits/davita-fumigation-cleaning.html",
    format: "HTML",
  },
  {
    business: "Amass Painting & Design / CCTV & Networking",
    title: "Urgent GBP Audit & Visibility Overhaul",
    type: "GMB Performance Audit",
    status: "Completed Audit",
    date: "2025-09-02",
    file: "/audits/amass-painting-cctv-networking.html",
    format: "HTML",
  },
];

const filters = ["All", "GMB Performance Audit", "SEO Audit", "Website Audit"] as const;

const whatsappLink =
  "https://wa.me/2349027284784?text=Hello%20Rotimox!%20I'd%20like%20a%20professional%20audit%20for%20my%20business.";

const Audits = () => {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");

  const filtered = useMemo(() => {
    return audits.filter((a) => {
      const matchesType = filter === "All" || a.type === filter;
      const matchesQuery =
        !query ||
        a.business.toLowerCase().includes(query.toLowerCase()) ||
        a.title.toLowerCase().includes(query.toLowerCase());
      return matchesType && matchesQuery;
    });
  }, [query, filter]);

  const downloadName = (a: AuditItem) =>
    `${a.business.replace(/[^a-z0-9]+/gi, "_")}_${a.type.replace(/\s+/g, "_")}.${a.format.toLowerCase()}`;

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Proof of Work
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground mt-4 mb-6">
            SEO & GMB <span className="text-accent">Audit Results</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-3xl mx-auto mb-8">
            Real, verified audits delivered to real businesses. Browse, preview,
            or download our professional client audit reports.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="xl">
                <MessageCircle className="w-5 h-5" />
                Request Your Audit
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

      {/* Filters */}
      <section className="py-10 bg-background border-b border-border">
        <div className="container-custom flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <div className="relative w-full md:max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search by business or audit title…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-9"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                  filter === f
                    ? "bg-accent text-accent-foreground border-accent"
                    : "bg-card text-muted-foreground border-border hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Cards */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          {filtered.length === 0 ? (
            <div className="text-center py-16 text-muted-foreground">
              No audits match your search.
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((a, i) => (
                <article
                  key={i}
                  className="group bg-card rounded-2xl border border-border shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
                >
                  <div className="p-6 flex items-start justify-between border-b border-border bg-muted/40">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                      <FileText className="w-7 h-7 text-accent" />
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-success/10 text-success border border-success/20">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {a.status}
                    </span>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">
                      {a.type}
                    </span>
                    <h3 className="font-display text-xl text-foreground mb-2 leading-tight">
                      {a.business}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {a.title}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-6">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(a.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                      <span className="mx-1">•</span>
                      <span className="font-medium">{a.format}</span>
                    </div>

                    <div className="mt-auto flex flex-col sm:flex-row gap-2">
                      <a
                        href={a.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button variant="outline" className="w-full">
                          <Eye className="w-4 h-4" />
                          View Audit
                        </Button>
                      </a>
                      <a
                        href={a.file}
                        download={downloadName(a)}
                        className="flex-1"
                      >
                        <Button variant="default" className="w-full">
                          <Download className="w-4 h-4" />
                          Download
                        </Button>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Trust strip */}
      <section className="py-12 bg-muted/40 border-y border-border">
        <div className="container-custom grid md:grid-cols-3 gap-6 text-center">
          {[
            { icon: ShieldCheck, label: "100% Verified Audits" },
            { icon: FileText, label: "Detailed PDF Reports" },
            { icon: CheckCircle2, label: "Trusted by Real Businesses" },
          ].map((t, i) => (
            <div key={i} className="flex items-center justify-center gap-3 text-foreground">
              <t.icon className="w-6 h-6 text-accent" />
              <span className="font-semibold">{t.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-6">
            Want a Free Audit for Your Business?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Get a personalized GMB & SEO audit and a clear action plan to grow
            faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="xl">
                <MessageCircle className="w-5 h-5" />
                Get My Free Audit
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

export default Audits;
