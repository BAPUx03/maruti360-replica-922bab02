import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const leadSchema = z.object({
  first_name: z.string().trim().min(1).max(60),
  last_name: z.string().trim().max(60).optional().default(""),
  email: z.string().trim().email().max(120).optional().or(z.literal("")),
  phone: z.string().trim().min(5).max(20),
  requirement: z.string().trim().max(120).optional().default(""),
  budget: z.string().trim().max(60).optional().default(""),
  message: z.string().trim().max(1000).optional().default(""),
  source: z.string().trim().max(40),
  phone_verified: z.boolean().optional().default(false),
});

const BRAND = "Maruti 360";
const SENDER = { name: BRAND, email: "sales@maruti360.com" };
const ADMIN_RECIPIENTS = [{ email: "sales@maruti360.com", name: `${BRAND} Sales` }];
const GATEWAY = "https://connector-gateway.lovable.dev/brevo";

const esc = (v: string) =>
  v.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const shell = (inner: string) => `<!doctype html>
<html><body style="margin:0;padding:0;background:#0b0b0b;font-family:Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#0b0b0b;padding:32px 12px;">
    <tr><td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#111111;border:1px solid #3a2f16;border-radius:10px;overflow:hidden;">
        <tr><td style="height:4px;background:linear-gradient(90deg,#8a6b1f,#e8c874,#8a6b1f);"></td></tr>
        <tr><td style="padding:34px 34px 30px 34px;color:#e8e4dc;">
          <p style="margin:0 0 18px 0;font-size:10px;letter-spacing:3px;text-transform:uppercase;color:#c9a44c;">${BRAND}</p>
          ${inner}
        </td></tr>
        <tr><td style="padding:18px 34px 26px 34px;border-top:1px solid #262626;color:#8c8579;font-size:11px;line-height:1.8;">
          ${BRAND} &nbsp;·&nbsp; S.G. Highway, Ahmedabad &nbsp;·&nbsp; +91 99099 23456
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;

const row = (label: string, value: string) =>
  value
    ? `<tr>
        <td style="padding:9px 0;border-bottom:1px solid #242424;color:#8c8579;font-size:11px;letter-spacing:1.6px;text-transform:uppercase;width:40%;">${esc(label)}</td>
        <td style="padding:9px 0;border-bottom:1px solid #242424;color:#f2eee6;font-size:14px;">${esc(value)}</td>
      </tr>`
    : "";

type Lead = z.infer<typeof leadSchema>;

function adminHtml(lead: Lead) {
  return shell(`
    <h1 style="margin:0 0 8px 0;font-size:24px;font-weight:400;color:#e8c874;">New Enquiry Received</h1>
    <p style="margin:0 0 22px 0;font-size:13px;line-height:1.9;color:#a49c8e;">A visitor has submitted their details on the website.</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      ${row("Name", `${lead.first_name} ${lead.last_name ?? ""}`.trim())}
      ${row("Phone", lead.phone)}
      ${row("Email", lead.email ?? "")}
      ${row("Requirement", lead.requirement ?? "")}
      ${row("Budget", lead.budget ?? "")}
      ${row("Message", lead.message ?? "")}
      ${row("Source", lead.source)}
      ${row("Phone Verified", lead.phone_verified ? "Yes (OTP)" : "No")}
      ${row("Received", new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }))}
    </table>
    <p style="margin:26px 0 0 0;font-size:12px;color:#8c8579;">Please call back at the earliest.</p>
  `);
}

function thankYouHtml(lead: Lead) {
  return shell(`
    <h1 style="margin:0 0 8px 0;font-size:24px;font-weight:400;color:#e8c874;">Thank You, ${esc(lead.first_name)}</h1>
    <p style="margin:0 0 20px 0;font-size:13px;line-height:2;color:#c8c2b7;">
      We have received your enquiry. Our residence advisor will contact you shortly with pricing,
      floor plans and a priority site-visit slot.
    </p>
    <p style="margin:0 0 12px 0;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#c9a44c;">Your Details</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      ${row("Name", `${lead.first_name} ${lead.last_name ?? ""}`.trim())}
      ${row("Phone", lead.phone)}
      ${row("Email", lead.email ?? "")}
      ${row("Requirement", lead.requirement ?? "")}
      ${row("Budget", lead.budget ?? "")}
    </table>
    <p style="margin:26px 0 0 0;font-size:13px;line-height:1.9;color:#c8c2b7;">
      For anything urgent, call us at
      <a href="tel:+919909923456" style="color:#e8c874;text-decoration:none;">+91 99099 23456</a>.
    </p>
  `);
}

async function sendBrevo(payload: Record<string, unknown>) {
  const lovableKey = process.env["LOVABLE_API_KEY"];
  const brevoKey = process.env["BREVO_API_KEY"];
  if (!lovableKey || !brevoKey) {
    console.error("Brevo credentials are not configured");
    return false;
  }
  const res = await fetch(`${GATEWAY}/smtp/email`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${lovableKey}`,
      "X-Connection-Api-Key": brevoKey,
    },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    console.error(`Brevo send failed [${res.status}]: ${await res.text()}`);
    return false;
  }
  return true;
}

export const sendLeadEmails = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => leadSchema.parse(input))
  .handler(async ({ data }) => {
    const name = `${data.first_name} ${data.last_name ?? ""}`.trim();

    const adminSent = await sendBrevo({
      sender: SENDER,
      to: ADMIN_RECIPIENTS,
      replyTo: data.email ? { email: data.email, name } : undefined,
      subject: `New Enquiry — ${name} (${data.requirement || "Residence"})`,
      htmlContent: adminHtml(data),
    });

    let userSent = false;
    if (data.email) {
      userSent = await sendBrevo({
        sender: SENDER,
        to: [{ email: data.email, name }],
        subject: `Thank you, ${data.first_name} — ${BRAND}`,
        htmlContent: thankYouHtml(data),
      });
    }

    return { adminSent, userSent };
  });
