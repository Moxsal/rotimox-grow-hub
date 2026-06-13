import { useState } from "react";
import {
  Sparkles,
  Loader2,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Target,
  TrendingUp,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { AUDIT_PLATFORMS, type AuditPlatform } from "@/lib/audit-platforms";
import { supabase } from "@/integrations/supabase/client";

interface Analysis {
  summary?: string;
  strengths?: string[];
  weaknesses?: string[];
  opportunities?: string[];
  recommendations?: string[];
  growthSuggestions?: string[];
}

const AuditCenter = () => {
  const { toast } = useToast();
  const [selected, setSelected] = useState<AuditPlatform | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<Analysis | null>(null);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    businessName: "",
    url: "",
    message: "",
  });

  const reset = () => {
    setSelected(null);
    setResult(null);
    setForm({ firstName: "", lastName: "", email: "", businessName: "", url: "", message: "" });
  };

  const update = (k: keyof typeof form, v: string) => setForm((p) => ({ ...p, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selected) return;
    if (
      !form.firstName.trim() ||
      !form.lastName.trim() ||
      !form.email.trim() ||
      !form.businessName.trim() ||
      !form.url.trim()
    ) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }
    if (!/^https?:\/\//i.test(form.url.trim())) {
      toast({
        title: "Invalid URL",
        description: "Make sure the link starts with http:// or https://",
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);
    setResult(null);
    try {
      const { data, error } = await supabase.functions.invoke("ai-audit", {
        body: {
          platform: selected.key,
          platformName: selected.name,
          firstName: form.firstName.trim(),
          lastName: form.lastName.trim(),
          email: form.email.trim(),
          businessName: form.businessName.trim(),
          url: form.url.trim(),
          message: form.message.trim(),
        },
      });
      if (error) throw error;
      const payload = data as { ok?: boolean; analysis?: Analysis; error?: string };
      if (payload?.error) throw new Error(payload.error);
      setResult(payload.analysis ?? {});
      toast({ title: "✅ Your AI audit is ready below" });
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : "Please try again in a moment.";
      toast({ title: "Could not generate audit", description: msg, variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="section-padding bg-background" id="audit-center">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            AI Audit Center
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mt-4 mb-4">
            Get an <span className="text-accent">Instant AI Audit</span> for Your Business
          </h2>
          <p className="text-muted-foreground text-lg">
            Pick the platform you want audited. Our AI generates strengths, weaknesses,
            opportunities, recommendations and growth ideas — instantly, free.
          </p>
        </div>

        {!selected && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {AUDIT_PLATFORMS.map((p) => (
              <button
                key={p.key}
                type="button"
                onClick={() => {
                  setSelected(p);
                  setResult(null);
                }}
                className="group text-left bg-card border border-border rounded-2xl p-5 hover:border-accent hover:shadow-xl transition-all"
              >
                <div className="text-3xl mb-3">{p.emoji}</div>
                <div className="font-display font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">
                  {p.shortLabel}
                </div>
                <div className="text-xs text-muted-foreground line-clamp-2">{p.description}</div>
              </button>
            ))}
          </div>
        )}

        {selected && (
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
              <button
                type="button"
                onClick={reset}
                className="text-sm text-muted-foreground hover:text-accent inline-flex items-center gap-1 mb-4"
              >
                <ArrowLeft className="w-4 h-4" /> Choose different platform
              </button>
              <div className="flex items-center gap-3 mb-6">
                <div className="text-3xl">{selected.emoji}</div>
                <div>
                  <h3 className="font-display text-xl text-foreground">{selected.name}</h3>
                  <p className="text-sm text-muted-foreground">{selected.description}</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={form.firstName}
                      onChange={(e) => update("firstName", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={form.lastName}
                      onChange={(e) => update("lastName", e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="businessName">Business Name *</Label>
                  <Input
                    id="businessName"
                    value={form.businessName}
                    onChange={(e) => update("businessName", e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="url">{selected.urlLabel} *</Label>
                  <Input
                    id="url"
                    type="url"
                    placeholder={selected.urlPlaceholder}
                    value={form.url}
                    onChange={(e) => update("url", e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="message">Message (optional)</Label>
                  <Textarea
                    id="message"
                    rows={3}
                    placeholder="Anything specific you want us to look at?"
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                  />
                </div>
                <Button type="submit" variant="accent" size="lg" className="w-full" disabled={submitting}>
                  {submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" /> Generating your audit…
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" /> Submit Audit Request
                    </>
                  )}
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Free Basic Audit. Upgraded reports with PDF coming soon.
                </p>
              </form>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm min-h-[300px]">
              {!result && !submitting && (
                <div className="h-full flex flex-col items-center justify-center text-center text-muted-foreground py-12">
                  <Sparkles className="w-10 h-10 text-accent mb-3" />
                  <div className="font-semibold text-foreground mb-1">
                    Your AI audit will appear here
                  </div>
                  <p className="text-sm max-w-xs">
                    Fill in the form and submit — your personalised report appears in seconds.
                  </p>
                </div>
              )}
              {submitting && (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <Loader2 className="w-8 h-8 text-accent animate-spin mb-3" />
                  <div className="font-semibold text-foreground">Analysing {selected.shortLabel}…</div>
                </div>
              )}
              {result && (
                <div className="space-y-5">
                  {result.summary && (
                    <div className="bg-accent/10 border border-accent/30 rounded-xl p-4">
                      <div className="text-xs uppercase tracking-wider font-semibold text-accent mb-1">
                        Executive Summary
                      </div>
                      <p className="text-sm text-foreground leading-relaxed">{result.summary}</p>
                    </div>
                  )}
                  <ResultBlock
                    title="Strengths"
                    items={result.strengths}
                    icon={<CheckCircle2 className="w-4 h-4 text-success" />}
                  />
                  <ResultBlock
                    title="Weaknesses"
                    items={result.weaknesses}
                    icon={<AlertTriangle className="w-4 h-4 text-destructive" />}
                  />
                  <ResultBlock
                    title="Opportunities"
                    items={result.opportunities}
                    icon={<Lightbulb className="w-4 h-4 text-accent" />}
                  />
                  <ResultBlock
                    title="Recommendations"
                    items={result.recommendations}
                    icon={<Target className="w-4 h-4 text-primary" />}
                  />
                  <ResultBlock
                    title="Growth Suggestions"
                    items={result.growthSuggestions}
                    icon={<TrendingUp className="w-4 h-4 text-accent" />}
                  />
                  <div className="pt-2 border-t border-border text-center">
                    <p className="text-sm text-muted-foreground mb-3">
                      Want the full detailed report with PDF, conversion plan and growth strategy?
                    </p>
                    <a
                      href={`https://wa.me/2349027284784?text=${encodeURIComponent(`Hello Rotimox Growth Hubs! I just ran the ${selected.name} for ${form.businessName} and I'd like to upgrade my audit.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="whatsapp" size="lg">
                        Request Premium Audit
                      </Button>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

const ResultBlock = ({
  title,
  items,
  icon,
}: {
  title: string;
  items?: string[];
  icon: React.ReactNode;
}) => {
  if (!items || items.length === 0) return null;
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <h4 className="font-display font-semibold text-foreground">{title}</h4>
      </div>
      <ul className="space-y-1.5">
        {items.map((it, i) => (
          <li key={i} className="text-sm text-muted-foreground flex gap-2">
            <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AuditCenter;
