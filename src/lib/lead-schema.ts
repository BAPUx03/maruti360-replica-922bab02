import { z } from "zod";

export const leadSchema = z.object({
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

export type Lead = z.infer<typeof leadSchema>;
