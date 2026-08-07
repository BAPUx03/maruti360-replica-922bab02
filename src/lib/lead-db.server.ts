import { createClient } from "@supabase/supabase-js";
import type { Lead } from "@/lib/lead-schema";

// Leads are stored in the project owner's own Supabase project.
// Only the publishable (anon) key is used, and it never leaves the server.
const LEADS_SUPABASE_URL = "https://qirenbzgbjkhujhpufin.supabase.co";
const LEADS_SUPABASE_PUBLISHABLE_KEY = "sb_publishable_Yj2dNzW0Fe0WIMll0Nn3-Q_FY6i04er";
const JOB_ID = "maruti360-website";

function tenDigitPhone(raw: string) {
  const digits = raw.replace(/\D/g, "");
  return digits.slice(-10);
}

export async function insertLead(lead: Lead) {
  const supabase = createClient(LEADS_SUPABASE_URL, LEADS_SUPABASE_PUBLISHABLE_KEY, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const phone = tenDigitPhone(lead.phone);
  const fullName = [lead.first_name, lead.last_name].filter(Boolean).join(" ").trim();
  const email = lead.email && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(lead.email)
    ? lead.email
    : `no-email.${phone || "unknown"}@maruti360.leads`;

  const { error } = await supabase.from("microsite_leads").insert({
    job_id: JOB_ID,
    name: fullName || lead.first_name,
    first_name: lead.first_name,
    last_name: lead.last_name || null,
    phone,
    email,
    requirement: lead.requirement || null,
    budget: lead.budget || null,
    message: lead.message || null,
    source: lead.source,
    verified_at: new Date().toISOString(),
  });

  if (error) {
    console.error("Lead insert failed", error.message);
    return false;
  }
  return true;
}
