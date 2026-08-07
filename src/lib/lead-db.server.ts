import { createClient } from "@supabase/supabase-js";
import type { Lead } from "@/lib/lead-schema";

// Leads are stored in the project owner's own Supabase project.
// Only the publishable (anon) key is used, and it never leaves the server.
const LEADS_SUPABASE_URL = "https://ckuxvlgrtwvzhejkgabg.supabase.co";
const LEADS_SUPABASE_PUBLISHABLE_KEY = "sb_publishable_gJHH-essn9Av9qVOFha_Pg_eIsuZden";

export async function insertLead(lead: Lead) {
  const supabase = createClient(LEADS_SUPABASE_URL, LEADS_SUPABASE_PUBLISHABLE_KEY, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const { error } = await supabase.from("leads").insert({
    first_name: lead.first_name,
    last_name: lead.last_name || null,
    email: lead.email || null,
    phone: lead.phone,
    requirement: lead.requirement || null,
    budget: lead.budget || null,
    message: lead.message || null,
    source: lead.source,
    phone_verified: lead.phone_verified ?? false,
  });

  if (error) {
    console.error("Lead insert failed", error.message);
    return false;
  }
  return true;
}
