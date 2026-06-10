import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { LogOut, Trash2, Loader2, Upload, Star, Plus, Eye } from "lucide-react";

type Lead = { id: string; name: string; email: string; business: string | null; service: string | null; status: string; created_at: string };
type Chat = { id: string; session_id: string; visitor_name: string | null; visitor_email: string | null; created_at: string };
type Faq = { id: string; question: string; answer: string; category: string | null; sort_order: number; active: boolean };
type Testi = { id: string; client_name: string; project_name: string | null; rating: number; content: string | null; image_url: string | null; sort_order: number; active: boolean };

const Admin = () => {
  const navigate = useNavigate();
  const [ready, setReady] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const { data } = await supabase.auth.getSession();
      if (!data.session) { navigate("/auth"); return; }
      setUserId(data.session.user.id);
      const { data: roles } = await supabase.from("user_roles").select("role").eq("user_id", data.session.user.id);
      const hasAdmin = roles?.some(r => r.role === "admin") ?? false;
      setIsAdmin(hasAdmin);
      setReady(true);
    })();
  }, [navigate]);

  const claimAdmin = async () => {
    if (!userId) return;
    // Check if any admin exists; first user can claim
    const { count } = await supabase.from("user_roles").select("*", { count: "exact", head: true }).eq("role", "admin");
    if ((count ?? 0) > 0) {
      toast({ title: "Admin already exists", description: "Ask the existing admin to grant you access.", variant: "destructive" });
      return;
    }
    const { error } = await supabase.from("user_roles").insert({ user_id: userId, role: "admin" });
    if (error) toast({ title: "Could not claim admin", description: error.message, variant: "destructive" });
    else { setIsAdmin(true); toast({ title: "You are now the admin ✅" }); }
  };

  const signOut = async () => { await supabase.auth.signOut(); navigate("/auth"); };

  if (!ready) return <Layout><div className="container-custom py-20 text-center"><Loader2 className="w-6 h-6 animate-spin mx-auto" /></div></Layout>;

  if (!isAdmin) {
    return (
      <Layout>
        <section className="section-padding">
          <div className="container-custom max-w-lg">
            <Card className="p-8 text-center">
              <h1 className="font-display text-2xl mb-2">No Admin Access</h1>
              <p className="text-muted-foreground mb-6">If you're the site owner, claim admin access now (only available for the first user).</p>
              <div className="flex gap-3 justify-center">
                <Button onClick={claimAdmin}>Claim Admin</Button>
                <Button variant="outline" onClick={signOut}>Sign Out</Button>
              </div>
            </Card>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="section-padding bg-muted/20">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="font-display text-3xl text-foreground">Admin Dashboard</h1>
              <p className="text-muted-foreground text-sm">Manage leads, chats, FAQs and testimonials</p>
            </div>
            <Button variant="outline" onClick={signOut}><LogOut className="w-4 h-4" /> Sign Out</Button>
          </div>

          <Tabs defaultValue="leads">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="leads">Leads</TabsTrigger>
              <TabsTrigger value="chats">Chats</TabsTrigger>
              <TabsTrigger value="faqs">FAQs</TabsTrigger>
              <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
            </TabsList>
            <TabsContent value="leads"><LeadsPanel /></TabsContent>
            <TabsContent value="chats"><ChatsPanel /></TabsContent>
            <TabsContent value="faqs"><FaqsPanel /></TabsContent>
            <TabsContent value="testimonials"><TestimonialsPanel /></TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

const LeadsPanel = () => {
  const [rows, setRows] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const load = async () => {
    setLoading(true);
    const { data } = await supabase.from("leads").select("*").order("created_at", { ascending: false });
    setRows((data as Lead[]) ?? []);
    setLoading(false);
  };
  useEffect(() => { load(); }, []);
  const del = async (id: string) => { await supabase.from("leads").delete().eq("id", id); load(); };
  const setStatus = async (id: string, status: string) => { await supabase.from("leads").update({ status }).eq("id", id); load(); };
  return (
    <Card className="p-6 mt-4">
      <h2 className="font-display text-xl mb-4">Collected Leads ({rows.length})</h2>
      {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : rows.length === 0 ? <p className="text-muted-foreground text-sm">No leads yet.</p> : (
        <div className="space-y-3">
          {rows.map(l => (
            <div key={l.id} className="border border-border rounded-xl p-4 flex flex-col md:flex-row md:items-center gap-3">
              <div className="flex-1">
                <div className="flex items-center gap-2"><span className="font-semibold">{l.name}</span><Badge variant={l.status === "new" ? "default" : "secondary"}>{l.status}</Badge></div>
                <div className="text-sm text-muted-foreground">{l.email}{l.business ? ` · ${l.business}` : ""}{l.service ? ` · ${l.service}` : ""}</div>
                <div className="text-xs text-muted-foreground">{new Date(l.created_at).toLocaleString()}</div>
              </div>
              <div className="flex gap-2">
                {l.status === "new" && <Button size="sm" variant="outline" onClick={() => setStatus(l.id, "contacted")}>Mark contacted</Button>}
                <Button size="sm" variant="outline" onClick={() => del(l.id)}><Trash2 className="w-4 h-4" /></Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
};

const ChatsPanel = () => {
  const [chats, setChats] = useState<Chat[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [msgs, setMsgs] = useState<{ role: string; content: string; created_at: string }[]>([]);
  const load = async () => {
    const { data } = await supabase.from("chats").select("*").order("created_at", { ascending: false }).limit(100);
    setChats((data as Chat[]) ?? []);
  };
  useEffect(() => { load(); }, []);
  const view = async (id: string) => {
    setSelected(id);
    const { data } = await supabase.from("chat_messages").select("role,content,created_at").eq("chat_id", id).order("created_at");
    setMsgs((data as any) ?? []);
  };
  const del = async (id: string) => { await supabase.from("chats").delete().eq("id", id); setSelected(null); load(); };
  return (
    <Card className="p-6 mt-4">
      <h2 className="font-display text-xl mb-4">Chat History ({chats.length})</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2 max-h-[500px] overflow-y-auto">
          {chats.map(c => (
            <button key={c.id} onClick={() => view(c.id)} className={`w-full text-left p-3 rounded-lg border ${selected === c.id ? "border-accent bg-accent/5" : "border-border"}`}>
              <div className="font-medium text-sm">{c.visitor_name || "Anonymous visitor"}</div>
              <div className="text-xs text-muted-foreground">{c.visitor_email || c.session_id.slice(0, 12)}</div>
              <div className="text-xs text-muted-foreground">{new Date(c.created_at).toLocaleString()}</div>
            </button>
          ))}
          {chats.length === 0 && <p className="text-sm text-muted-foreground">No chats yet.</p>}
        </div>
        <div className="border border-border rounded-xl p-4 max-h-[500px] overflow-y-auto">
          {!selected ? <p className="text-sm text-muted-foreground">Select a chat to view messages.</p> : (
            <>
              <div className="flex justify-end mb-3"><Button size="sm" variant="outline" onClick={() => del(selected)}><Trash2 className="w-4 h-4" /> Delete</Button></div>
              <div className="space-y-2">
                {msgs.map((m, i) => (
                  <div key={i} className={`p-2 rounded-lg text-sm ${m.role === "user" ? "bg-primary/10" : "bg-muted"}`}>
                    <div className="text-xs font-semibold mb-1 uppercase">{m.role}</div>
                    <div className="whitespace-pre-wrap">{m.content}</div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </Card>
  );
};

const FaqsPanel = () => {
  const [rows, setRows] = useState<Faq[]>([]);
  const [form, setForm] = useState({ question: "", answer: "", category: "" });
  const load = async () => { const { data } = await supabase.from("faqs").select("*").order("sort_order"); setRows((data as Faq[]) ?? []); };
  useEffect(() => { load(); }, []);
  const add = async () => {
    if (!form.question.trim() || !form.answer.trim()) return;
    await supabase.from("faqs").insert({ question: form.question, answer: form.answer, category: form.category || null });
    setForm({ question: "", answer: "", category: "" }); load();
  };
  const toggle = async (id: string, active: boolean) => { await supabase.from("faqs").update({ active: !active }).eq("id", id); load(); };
  const del = async (id: string) => { await supabase.from("faqs").delete().eq("id", id); load(); };
  return (
    <Card className="p-6 mt-4 space-y-4">
      <h2 className="font-display text-xl">FAQs ({rows.length})</h2>
      <div className="grid gap-2 p-4 border border-border rounded-xl">
        <Input placeholder="Question" value={form.question} onChange={e => setForm({ ...form, question: e.target.value })} />
        <Textarea placeholder="Answer" value={form.answer} onChange={e => setForm({ ...form, answer: e.target.value })} />
        <Input placeholder="Category (optional)" value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} />
        <Button onClick={add}><Plus className="w-4 h-4" /> Add FAQ</Button>
      </div>
      <div className="space-y-2">
        {rows.map(f => (
          <div key={f.id} className="border border-border rounded-xl p-4 flex gap-3">
            <div className="flex-1">
              <div className="font-semibold">{f.question}</div>
              <div className="text-sm text-muted-foreground whitespace-pre-wrap">{f.answer}</div>
              {f.category && <Badge variant="secondary" className="mt-2">{f.category}</Badge>}
            </div>
            <div className="flex flex-col gap-2">
              <Button size="sm" variant="outline" onClick={() => toggle(f.id, f.active)}>{f.active ? "Hide" : "Show"}</Button>
              <Button size="sm" variant="outline" onClick={() => del(f.id)}><Trash2 className="w-4 h-4" /></Button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

const TestimonialsPanel = () => {
  const [rows, setRows] = useState<Testi[]>([]);
  const [form, setForm] = useState({ client_name: "", project_name: "", rating: 5, content: "" });
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const load = async () => { const { data } = await supabase.from("testimonials").select("*").order("sort_order"); setRows((data as Testi[]) ?? []); };
  useEffect(() => { load(); }, []);
  const add = async () => {
    if (!form.client_name.trim()) { toast({ title: "Client name required", variant: "destructive" }); return; }
    setUploading(true);
    try {
      let image_url: string | null = null;
      if (file) {
        const path = `${Date.now()}-${file.name.replace(/[^a-z0-9.\-_]/gi, "_")}`;
        const { error: upErr } = await supabase.storage.from("testimonials").upload(path, file);
        if (upErr) throw upErr;
        const { data: pub } = supabase.storage.from("testimonials").getPublicUrl(path);
        image_url = pub.publicUrl;
      }
      const { error } = await supabase.from("testimonials").insert({ ...form, image_url });
      if (error) throw error;
      setForm({ client_name: "", project_name: "", rating: 5, content: "" });
      setFile(null);
      load();
      toast({ title: "Testimonial added ✅" });
    } catch (e: any) {
      toast({ title: "Upload failed", description: e.message, variant: "destructive" });
    } finally { setUploading(false); }
  };
  const toggle = async (id: string, active: boolean) => { await supabase.from("testimonials").update({ active: !active }).eq("id", id); load(); };
  const del = async (id: string) => { await supabase.from("testimonials").delete().eq("id", id); load(); };
  return (
    <Card className="p-6 mt-4 space-y-4">
      <h2 className="font-display text-xl">Testimonials ({rows.length})</h2>
      <div className="grid gap-2 p-4 border border-border rounded-xl">
        <Input placeholder="Client name *" value={form.client_name} onChange={e => setForm({ ...form, client_name: e.target.value })} />
        <Input placeholder="Project / company" value={form.project_name} onChange={e => setForm({ ...form, project_name: e.target.value })} />
        <div className="flex items-center gap-2">
          <Label className="text-sm">Rating:</Label>
          <Input type="number" min={1} max={5} value={form.rating} onChange={e => setForm({ ...form, rating: Number(e.target.value) })} className="w-20" />
        </div>
        <Textarea placeholder="Testimonial text (optional)" value={form.content} onChange={e => setForm({ ...form, content: e.target.value })} />
        <div>
          <Label className="text-sm">Image (optional)</Label>
          <Input type="file" accept="image/*" onChange={e => setFile(e.target.files?.[0] ?? null)} />
        </div>
        <Button onClick={add} disabled={uploading}>
          {uploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />} Add Testimonial
        </Button>
      </div>
      <div className="grid md:grid-cols-2 gap-3">
        {rows.map(t => (
          <div key={t.id} className="border border-border rounded-xl p-4 flex gap-3">
            {t.image_url && <img src={t.image_url} alt={t.client_name} className="w-16 h-16 rounded-lg object-cover" />}
            <div className="flex-1">
              <div className="font-semibold">{t.client_name}</div>
              {t.project_name && <div className="text-sm text-muted-foreground">{t.project_name}</div>}
              <div className="flex gap-0.5 my-1">{Array.from({ length: t.rating }).map((_, i) => <Star key={i} className="w-3 h-3 fill-warning text-warning" />)}</div>
              {t.content && <div className="text-xs text-muted-foreground line-clamp-2">{t.content}</div>}
            </div>
            <div className="flex flex-col gap-1">
              <Button size="sm" variant="outline" onClick={() => toggle(t.id, t.active)}>{t.active ? "Hide" : "Show"}</Button>
              <Button size="sm" variant="outline" onClick={() => del(t.id)}><Trash2 className="w-4 h-4" /></Button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default Admin;
