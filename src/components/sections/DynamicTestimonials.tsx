import { useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

type Testi = { id: string; client_name: string; project_name: string | null; rating: number; content: string | null; image_url: string | null };

const DynamicTestimonials = () => {
  const [items, setItems] = useState<Testi[]>([]);

  useEffect(() => {
    supabase
      .from("testimonials")
      .select("id, client_name, project_name, rating, content, image_url")
      .eq("active", true)
      .order("sort_order")
      .then(({ data }) => setItems((data as Testi[]) ?? []));
  }, []);

  if (items.length === 0) return null;

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Client Success</span>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mt-3">Recent Client Testimonials</h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">Real businesses we've helped grow.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((t) => (
            <div key={t.id} className="bg-card rounded-2xl border border-border p-6 card-hover relative">
              <Quote className="w-8 h-8 text-accent/30 absolute top-4 right-4" />
              {t.image_url && (
                <img src={t.image_url} alt={t.client_name} className="w-full h-48 object-cover rounded-xl mb-4" />
              )}
              <div className="flex gap-0.5 mb-2">
                {Array.from({ length: t.rating }).map((_, i) => <Star key={i} className="w-4 h-4 fill-warning text-warning" />)}
              </div>
              {t.content && <p className="text-foreground/90 text-sm leading-relaxed mb-4">"{t.content}"</p>}
              <div className="font-semibold text-foreground">{t.client_name}</div>
              {t.project_name && <div className="text-sm text-muted-foreground">{t.project_name}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DynamicTestimonials;
