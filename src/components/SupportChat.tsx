import { useEffect, useRef, useState } from "react";
import { MessageSquare, X, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

type Msg = { role: "user" | "assistant"; content: string };

const SESSION_KEY = "rotimox_chat_session";
const WELCOME: Msg = {
  role: "assistant",
  content:
    "👋 Hi! Welcome to Rotimox Sales.\n\nHow can we help you today? Ask me anything about GMB optimization, website design, review growth, social media marketing, SEO audits, or business growth.",
};

function getSession() {
  let s = localStorage.getItem(SESSION_KEY);
  if (!s) {
    s = crypto.randomUUID();
    localStorage.setItem(SESSION_KEY, s);
  }
  return s;
}

const SupportChat = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [showLead, setShowLead] = useState(false);
  const [lead, setLead] = useState({ name: "", email: "", business: "", service: "" });
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open, sending]);

  const send = async (overrideLead?: typeof lead) => {
    const text = input.trim();
    if (!text && !overrideLead) return;
    const next = text ? [...messages, { role: "user" as const, content: text }] : messages;
    if (text) setMessages(next);
    setInput("");
    setSending(true);
    try {
      const { data, error } = await supabase.functions.invoke("support-chat", {
        body: {
          sessionId: getSession(),
          messages: next,
          lead: overrideLead && overrideLead.name && overrideLead.email ? overrideLead : undefined,
        },
      });
      if (error) throw error;
      if ((data as any)?.error) throw new Error((data as any).error);
      setMessages((m) => [...m, { role: "assistant", content: (data as any).reply }]);
    } catch (e: any) {
      toast({ title: "Could not send message", description: e.message || "Please try again", variant: "destructive" });
    } finally {
      setSending(false);
    }
  };

  const submitLead = async () => {
    if (!lead.name.trim() || !lead.email.trim()) {
      toast({ title: "Name and email required", variant: "destructive" });
      return;
    }
    setMessages((m) => [
      ...m,
      { role: "user", content: `My details:\nName: ${lead.name}\nEmail: ${lead.email}${lead.business ? `\nBusiness: ${lead.business}` : ""}${lead.service ? `\nService: ${lead.service}` : ""}` },
    ]);
    setShowLead(false);
    await send(lead);
    toast({ title: "Thanks! We'll be in touch shortly. ✅" });
  };

  return (
    <>
      {/* Floating button bottom-left */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
        aria-label="Open customer support chat"
      >
        {open ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
        {!open && <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-20" />}
      </button>

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-24 left-4 right-4 sm:left-6 sm:right-auto z-50 sm:w-[380px] max-h-[80vh] bg-card border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-slide-up">
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-accent-foreground" />
            </div>
            <div className="flex-1">
              <div className="font-semibold leading-tight">Customer Support</div>
              <div className="text-xs opacity-80 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Typically replies instantly
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="opacity-80 hover:opacity-100" aria-label="Close chat">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3 bg-muted/30">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm whitespace-pre-wrap leading-relaxed ${
                    m.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-sm"
                      : "bg-card border border-border text-foreground rounded-bl-sm"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {sending && (
              <div className="flex justify-start">
                <div className="bg-card border border-border rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1">
                  <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            )}
          </div>

          {/* Lead form */}
          {showLead && (
            <div className="p-3 border-t border-border bg-card space-y-2">
              <div className="text-xs font-semibold text-muted-foreground">Share your details and we'll follow up</div>
              <Input placeholder="Your name *" value={lead.name} onChange={(e) => setLead({ ...lead, name: e.target.value })} />
              <Input placeholder="Email *" type="email" value={lead.email} onChange={(e) => setLead({ ...lead, email: e.target.value })} />
              <Input placeholder="Business name" value={lead.business} onChange={(e) => setLead({ ...lead, business: e.target.value })} />
              <Input placeholder="Service needed" value={lead.service} onChange={(e) => setLead({ ...lead, service: e.target.value })} />
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="flex-1" onClick={() => setShowLead(false)}>Cancel</Button>
                <Button size="sm" className="flex-1" onClick={submitLead} disabled={sending}>Send</Button>
              </div>
            </div>
          )}

          {/* Input */}
          {!showLead && (
            <div className="p-3 border-t border-border bg-card space-y-2">
              <div className="flex items-center gap-2">
                <Input
                  placeholder="Type your message…"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); } }}
                  disabled={sending}
                />
                <Button size="icon" onClick={() => send()} disabled={sending || !input.trim()} aria-label="Send">
                  {sending ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                </Button>
              </div>
              <button
                type="button"
                onClick={() => setShowLead(true)}
                className="text-xs text-accent hover:underline w-full text-left"
              >
                📩 Request a consultation
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default SupportChat;
