// AI Audit edge function for Rotimox Growth Hubs.
// Validates input, stores the audit request, then asks Lovable AI to generate a basic audit.

import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";
import { createClient } from "npm:@supabase/supabase-js@2";

interface Body {
  platform: string;
  platformName: string;
  firstName: string;
  lastName: string;
  email: string;
  businessName: string;
  url: string;
  message?: string;
}

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const isHttpUrl = (v: string) => /^https?:\/\/\S+\.\S+/i.test(v);

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      return new Response(JSON.stringify({ error: "AI not configured" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
    const SERVICE_ROLE = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const admin = createClient(SUPABASE_URL, SERVICE_ROLE);

    const body = (await req.json()) as Body;
    const platform = (body.platform || "").slice(0, 60);
    const platformName = (body.platformName || platform).slice(0, 120);
    const firstName = (body.firstName || "").trim().slice(0, 80);
    const lastName = (body.lastName || "").trim().slice(0, 80);
    const email = (body.email || "").trim().slice(0, 200);
    const businessName = (body.businessName || "").trim().slice(0, 200);
    const url = (body.url || "").trim().slice(0, 600);
    const message = (body.message || "").trim().slice(0, 2000);

    if (!platform || !firstName || !lastName || !businessName) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (!isEmail(email)) {
      return new Response(JSON.stringify({ error: "Invalid email address" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (!isHttpUrl(url)) {
      return new Response(
        JSON.stringify({ error: "Please provide a valid http(s) URL for your platform link." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    // Call Lovable AI Gateway for a structured Basic audit
    const systemPrompt = `You are a senior digital growth strategist at Rotimox Growth Hubs, an international digital marketing agency. You write professional, concise, business-friendly audits.

Always respond with a single JSON object matching exactly this shape, with arrays of 3-5 short bullet strings each:
{
  "summary": "1-2 sentence executive summary",
  "strengths": ["..."],
  "weaknesses": ["..."],
  "opportunities": ["..."],
  "recommendations": ["..."],
  "growthSuggestions": ["..."]
}

Rules:
- Do NOT include markdown, code fences, or any text outside the JSON.
- Be specific to the platform the user submitted.
- Never fabricate metrics you cannot verify; talk in qualitative best-practice terms.
- Sound premium, actionable, and encouraging.`;

    const userPrompt = `Please generate a Basic Audit.

Platform: ${platformName}
Business name: ${businessName}
URL submitted: ${url}
Extra notes from owner: ${message || "(none)"}

Focus your audit on what's typical and most impactful for the ${platformName} platform.`;

    const aiRes = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
        response_format: { type: "json_object" },
      }),
    });

    if (!aiRes.ok) {
      const text = await aiRes.text();
      console.error("AI error", aiRes.status, text);
      const status = aiRes.status === 429 || aiRes.status === 402 ? aiRes.status : 500;
      const errMsg =
        aiRes.status === 429
          ? "We're receiving too many audit requests right now. Please try again shortly."
          : aiRes.status === 402
            ? "Our AI audit credits are temporarily exhausted. Please contact us on WhatsApp for an instant manual audit."
            : "AI audit service error";
      return new Response(JSON.stringify({ error: errMsg }), {
        status,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const aiJson = await aiRes.json();
    const raw: string = aiJson.choices?.[0]?.message?.content ?? "{}";
    let analysis: Record<string, unknown> = {};
    try {
      analysis = JSON.parse(raw);
    } catch {
      // attempt to extract JSON substring
      const m = raw.match(/\{[\s\S]*\}/);
      if (m) {
        try {
          analysis = JSON.parse(m[0]);
        } catch {
          analysis = { summary: raw };
        }
      } else {
        analysis = { summary: raw };
      }
    }

    // Persist
    const { error: insertErr } = await admin.from("audit_requests").insert({
      platform,
      first_name: firstName,
      last_name: lastName,
      email,
      business_name: businessName,
      url,
      message: message || null,
      analysis,
    });
    if (insertErr) console.error("audit insert", insertErr);

    return new Response(JSON.stringify({ ok: true, analysis }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
