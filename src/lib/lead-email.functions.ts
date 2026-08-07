import { createServerFn } from "@tanstack/react-start";
import { leadSchema } from "@/lib/lead-schema";

export const sendLeadEmails = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => leadSchema.parse(input))
  .handler(async ({ data }) => {
    const { insertLead } = await import("@/lib/lead-db.server");
    const { deliverLeadEmails } = await import("@/lib/lead-email.server");
    const { appendLeadToSheet } = await import("@/lib/lead-sheet.server");
    const [db, emails, sheet] = await Promise.allSettled([
      insertLead(data),
      deliverLeadEmails(data),
      appendLeadToSheet(data),
    ]);
    if (db.status === "rejected") console.error("Lead insert error", db.reason);
    if (sheet.status === "rejected") console.error("Sheet append error", sheet.reason);
    if (emails.status === "rejected") console.error("Email send error", emails.reason);
    return { ok: true };
  });
