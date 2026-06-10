// AI Support Chat for Rotimox Sales
import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';
import { createClient } from 'npm:@supabase/supabase-js@2';

const SYSTEM_PROMPT = `You are the friendly, professional AI Customer Support Assistant for Rotimox Sales, a premium digital growth agency.

ABOUT ROTIMOX SALES:
- Helps businesses grow with Google Business Profile (GMB) optimization, Google & Facebook review growth, local SEO, professional website design & redesign, social media marketing, SEO audits, and overall business growth strategy.
- Successful client work includes Nia Spa (www.nia-spa.com), BGM Realty Limited (www.bgmrealtylimited.com), DAS GH LIMITED, Clean Masters Pro, The Perfect Cleans, Amoah & Associates, Guardian View Technology, Davita, Amass.
- Verifiable testimonials and before/after GMB transformations are visible on the website.

SERVICES & TYPICAL OUTCOMES:
- GMB Optimization: rank higher in local searches, fix profile issues, improve trust.
- Review Growth (Google & Facebook): grow authentic 5-star reviews, repair low ratings.
- Local SEO & SEO Audits: free initial audits available; detailed actionable reports.
- Website Design & Redesign: modern, mobile-first, conversion-focused websites.
- Social Media Marketing: content, growth, engagement strategy.

PRICING:
- Pricing is custom per project. Always invite the visitor to request a free consultation for a tailored quote.

YOUR JOB:
1. Greet warmly and answer questions clearly and concisely (2-5 sentences usually).
2. Recommend the right service based on the visitor's need.
3. Whenever appropriate, invite them to share their Name, Email, Business name, and the Service they need so the team can follow up. Phrase this naturally — never as a form dump.
4. If they share contact details, confirm warmly and tell them the team will reach out within a few hours via WhatsApp/email.
5. For urgent help, mention the WhatsApp button (bottom-right) which connects to +234 902 728 4784.
6. Never invent prices, statistics, or claims not listed above.
7. Always sound premium, polite, and conversion-focused. Use light emojis sparingly (e.g. 👋, ✅, ⭐) when it feels warm — not in every message.

If asked something completely outside the services, politely steer back to how Rotimox Sales can help them grow online.`;

interface ChatMessage { role: 'user' | 'assistant' | 'system'; content: string }
interface Body {
  sessionId: string;
  messages: ChatMessage[];
  lead?: { name?: string; email?: string; business?: string; service?: string };
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });

  try {
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) return new Response(JSON.stringify({ error: 'AI not configured' }), { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });

    const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!;
    const SERVICE_ROLE = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const admin = createClient(SUPABASE_URL, SERVICE_ROLE);

    const body = (await req.json()) as Body;
    if (!body?.sessionId || !Array.isArray(body.messages)) {
      return new Response(JSON.stringify({ error: 'Invalid payload' }), { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }

    // Get or create chat row
    let chatId: string | null = null;
    const { data: existing } = await admin.from('chats').select('id').eq('session_id', body.sessionId).maybeSingle();
    if (existing) {
      chatId = existing.id;
    } else {
      const { data: created, error } = await admin.from('chats').insert({ session_id: body.sessionId }).select('id').single();
      if (error) console.error('chat insert', error);
      chatId = created?.id ?? null;
    }

    // Optional lead capture
    if (body.lead?.name && body.lead?.email) {
      await admin.from('leads').insert({
        chat_id: chatId,
        name: body.lead.name.slice(0, 200),
        email: body.lead.email.slice(0, 200),
        business: body.lead.business?.slice(0, 200) ?? null,
        service: body.lead.service?.slice(0, 200) ?? null,
      });
      if (chatId) {
        await admin.from('chats').update({
          visitor_name: body.lead.name,
          visitor_email: body.lead.email,
          visitor_business: body.lead.business ?? null,
          service_interest: body.lead.service ?? null,
          updated_at: new Date().toISOString(),
        }).eq('id', chatId);
      }
    }

    // Persist latest user message
    const lastUser = [...body.messages].reverse().find(m => m.role === 'user');
    if (chatId && lastUser) {
      await admin.from('chat_messages').insert({ chat_id: chatId, role: 'user', content: lastUser.content.slice(0, 4000) });
    }

    // Call Lovable AI Gateway
    const aiRes = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-3-flash-preview',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          ...body.messages.slice(-20).map(m => ({ role: m.role, content: m.content })),
        ],
      }),
    });

    if (!aiRes.ok) {
      const text = await aiRes.text();
      console.error('AI error', aiRes.status, text);
      if (aiRes.status === 429) return new Response(JSON.stringify({ error: 'Too many messages, please try again in a moment.' }), { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
      if (aiRes.status === 402) return new Response(JSON.stringify({ error: 'AI credits exhausted. Please contact admin.' }), { status: 402, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
      return new Response(JSON.stringify({ error: 'AI service error' }), { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }

    const aiJson = await aiRes.json();
    const reply: string = aiJson.choices?.[0]?.message?.content ?? "Sorry, I couldn't generate a response. Please try again.";

    if (chatId) {
      await admin.from('chat_messages').insert({ chat_id: chatId, role: 'assistant', content: reply.slice(0, 8000) });
    }

    return new Response(JSON.stringify({ reply, chatId }), { headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
  }
});
