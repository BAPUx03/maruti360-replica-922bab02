import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const SendSchema = z.object({
  phone: z
    .string()
    .trim()
    .regex(/^\+\d{7,15}$/, "Enter a valid phone number with country code"),
});

const VerifySchema = z.object({
  sessionId: z.string().trim().min(6).max(120),
  otp: z
    .string()
    .trim()
    .regex(/^\d{4}$/, "Enter the 4-digit code"),
});

export const sendPhoneOtp = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => SendSchema.parse(input))
  .handler(async ({ data }) => {
    const apiKey = process.env["TWOFACTOR_API_KEY"];
    if (!apiKey) throw new Error("OTP service is not configured.");

    const otp = String(Math.floor(1000 + Math.random() * 9000));
    const to = data.phone.replace(/^\+/, "");

    const res = await fetch(
      `https://2factor.in/API/V1/${apiKey}/SMS/${encodeURIComponent(to)}/${otp}/OTP1`,
    );
    const body = (await res.json().catch(() => null)) as {
      Status?: string;
      Details?: string;
    } | null;

    if (!res.ok || body?.Status !== "Success" || !body?.Details) {
      return { ok: false as const, error: "Could not send the verification code." };
    }
    return { ok: true as const, sessionId: body.Details };
  });

export const verifyPhoneOtp = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => VerifySchema.parse(input))
  .handler(async ({ data }) => {
    const apiKey = process.env["TWOFACTOR_API_KEY"];
    if (!apiKey) throw new Error("OTP service is not configured.");

    const res = await fetch(
      `https://2factor.in/API/V1/${apiKey}/SMS/VERIFY/${encodeURIComponent(
        data.sessionId,
      )}/${encodeURIComponent(data.otp)}`,
    );
    const body = (await res.json().catch(() => null)) as {
      Status?: string;
      Details?: string;
    } | null;

    if (body?.Status === "Success") return { ok: true as const };
    return { ok: false as const, error: "Incorrect or expired code. Please try again." };
  });
