import { createServerFn } from "@tanstack/react-start";
import { leadSchema } from "@/lib/lead-schema";

export const sendLeadEmails = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => leadSchema.parse(input))
  .handler(async ({ data }) => {
    const { deliverLeadEmails } = await import("@/lib/lead-email.server");
    return deliverLeadEmails(data);
  });
