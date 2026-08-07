import { sendLeadEmails } from "@/lib/lead-email.functions";

export type LeadInput = {
  first_name: string;
  last_name?: string;
  email?: string;
  phone: string;
  requirement?: string;
  budget?: string;
  message?: string;
  source: string;
  phone_verified?: boolean;
};

// All storage/delivery happens server-side; no keys or endpoints are exposed to the browser.
export async function saveLead(lead: LeadInput) {
  try {
    await sendLeadEmails({
      data: {
        first_name: lead.first_name.slice(0, 60),
        last_name: lead.last_name?.slice(0, 60) ?? "",
        email: lead.email?.slice(0, 120) ?? "",
        phone: lead.phone.slice(0, 20),
        requirement: lead.requirement?.slice(0, 120) ?? "",
        budget: lead.budget?.slice(0, 60) ?? "",
        message: lead.message?.slice(0, 1000) ?? "",
        source: lead.source,
        phone_verified: lead.phone_verified ?? false,
      },
    });
    return true;
  } catch (e) {
    console.error("Failed to submit lead", e);
    return false;
  }
}
