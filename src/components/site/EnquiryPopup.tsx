import logo from "@/assets/Group-35-2.png.asset.json";
import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown, Phone, ShieldCheck } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { sendPhoneOtp, verifyPhoneOtp } from "@/lib/otp.functions";

const REQUIREMENTS = [
  "3 BHK",
  "4 BHK",
  "5 BHK",
  "Larger-format residence",
  "Jodi / Duplex / Penthouse — if available",
  "Investment",
];

const BUDGETS = ["₹2 Cr – ₹3 Cr", "₹4 Cr – ₹5 Cr", "₹6 Cr – ₹7 Cr", "₹8 Cr – ₹10 Cr", "₹10 Cr+"];

const COUNTRIES = [
  { code: "+91", label: "IN +91" },
  { code: "+971", label: "AE +971" },
  { code: "+44", label: "UK +44" },
  { code: "+1", label: "US +1" },
];

const fieldClass =
  "w-full appearance-none rounded-md border border-border bg-surface-2 px-3.5 py-2.5 text-[13px] text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-gold md:px-4 md:py-3";

const labelClass =
  "mb-1.5 block text-[9px] uppercase tracking-[0.18em] text-muted-foreground md:text-[10px]";

function Select({
  value,
  onChange,
  placeholder,
  options,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  options: string[];
}) {
  return (
    <div className="relative">
      <select
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`${fieldClass} pr-10 ${value ? "" : "text-muted-foreground"}`}
      >
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o} value={o} className="bg-surface-2 text-foreground">
            {o}
          </option>
        ))}
      </select>
      <ChevronDown
        size={15}
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gold"
      />
    </div>
  );
}

export function EnquiryPopup() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<"form" | "otp" | "done">("form");
  const [requirement, setRequirement] = useState("");
  const [budget, setBudget] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dial, setDial] = useState("+91");
  const [phone, setPhone] = useState("");
  const [sessionId, setSessionId] = useState("");
  const [digits, setDigits] = useState(["", "", "", ""]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [seconds, setSeconds] = useState(0);
  const otpRefs = useRef<Array<HTMLInputElement | null>>([]);

  const send = useServerFn(sendPhoneOtp);
  const verify = useServerFn(verifyPhoneOtp);

  const fullPhone = useMemo(() => `${dial}${phone.replace(/\D/g, "")}`, [dial, phone]);

  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 2000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (seconds <= 0) return;
    const t = setTimeout(() => setSeconds((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [seconds]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  const requestOtp = async () => {
    setError("");
    setBusy(true);
    try {
      const res = await send({ data: { phone: fullPhone } });
      if (!res.ok) {
        setError(res.error);
        return;
      }
      setSessionId(res.sessionId);
      setDigits(["", "", "", ""]);
      setStep("otp");
      setSeconds(30);
      setTimeout(() => otpRefs.current[0]?.focus(), 60);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setBusy(false);
    }
  };

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^\+\d{7,15}$/.test(fullPhone)) {
      setError("Enter a valid phone number.");
      return;
    }
    void requestOtp();
  };

  const submitOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setBusy(true);
    try {
      const res = await verify({ data: { sessionId, otp: digits.join("") } });
      if (!res.ok) {
        setError(res.error);
        return;
      }
      setStep("done");
    } catch {
      setError("Verification failed. Please try again.");
    } finally {
      setBusy(false);
    }
  };

  const onDigit = (i: number, v: string) => {
    const d = v.replace(/\D/g, "").slice(-1);
    const next = [...digits];
    next[i] = d;
    setDigits(next);
    if (d && i < 3) otpRefs.current[i + 1]?.focus();
  };

  return (
    <div className="backdrop-in fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/30 px-3 py-6 backdrop-blur-[3px] sm:items-center sm:px-4 sm:py-8">
      <div className="popup-in relative my-auto max-h-[94vh] w-full max-w-[560px] overflow-y-auto overflow-x-hidden rounded-xl border border-gold/30 bg-surface/95 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.95)]">
        <div className="gold-sheen h-[3px] w-full" />

        <div className="px-5 py-7 sm:px-8 md:px-10 md:py-9">
          <div className="logo-in flex justify-center">
            <img
              src={logo.url}
              alt="Above It All logo"
              className="h-10 w-auto md:h-12"
            />
          </div>

          {step === "form" && (
            <>
              <div className="mt-5 text-center">
                <p className="eyebrow field-in" style={{ animationDelay: "80ms" }}>
                  Private Residence Enquiry
                </p>
                <h3
                  className="field-in mt-2.5 font-display text-[22px] leading-tight text-foreground sm:text-[26px] md:text-[30px]"
                  style={{ animationDelay: "140ms" }}
                >
                  Request Priority Access
                </h3>
                <p className="field-in mt-2 text-[13px] text-muted-foreground" style={{ animationDelay: "200ms" }}>
                  Share your requirements &amp; get exclusive listings.
                </p>
                <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-gold/40 px-3.5 py-1.5 text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-gold">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  Site Visits — By Appointment Only
                </span>
              </div>

              <form className="mt-6 space-y-4 text-left" onSubmit={submitForm}>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className={labelClass}>Requirement</label>
                    <Select
                      value={requirement}
                      onChange={setRequirement}
                      placeholder="Select Requirement"
                      options={REQUIREMENTS}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Budget (INR)</label>
                    <Select
                      value={budget}
                      onChange={setBudget}
                      placeholder="Select Budget"
                      options={BUDGETS}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className={labelClass}>First Name</label>
                    <input
                      required
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      maxLength={60}
                      placeholder="First Name"
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Last Name</label>
                    <input
                      required
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      maxLength={60}
                      placeholder="Last Name"
                      className={fieldClass}
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className={labelClass}>Email Address</label>
                    <input
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      maxLength={120}
                      placeholder="your@email.com"
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Phone Number</label>
                    <div className="flex gap-2">
                      <div className="relative w-[110px] shrink-0">
                        <select
                          value={dial}
                          onChange={(e) => setDial(e.target.value)}
                          className={`${fieldClass} px-3 pr-8 text-[12px]`}
                        >
                          {COUNTRIES.map((c) => (
                            <option key={c.code} value={c.code} className="bg-surface-2">
                              {c.label}
                            </option>
                          ))}
                        </select>
                        <ChevronDown
                          size={14}
                          className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gold"
                        />
                      </div>
                      <input
                        required
                        inputMode="numeric"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 12))}
                        placeholder="9876543210"
                        className={fieldClass}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-[9px] sm:text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  <span className="text-gold">✦ Instant Call Back</span>
                  <span className="text-gold">✦ Floor Plans</span>
                  <span className="text-gold">✦ Priority Visit</span>
                </div>

                {error && <p className="text-center text-[12px] text-red-400">{error}</p>}

                <button type="submit" disabled={busy} className="btn-gold w-full disabled:opacity-60">
                  {busy ? "Sending Code…" : "Get Exclusive Access"}
                </button>

                <p className="text-center text-[11px] leading-relaxed text-muted-foreground">
                  By submitting, you agree to receive property updates via call, SMS &amp; email.
                </p>
              </form>
            </>
          )}

          {step === "otp" && (
            <form onSubmit={submitOtp} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/50 bg-surface-2">
                <ShieldCheck size={22} className="text-gold" />
              </div>
              <h3 className="mt-5 font-display text-[24px] text-foreground">Verify your mobile</h3>
              <p className="mt-2 flex items-center justify-center gap-2 text-[13px] text-muted-foreground">
                <Phone size={13} className="text-gold" />
                4-digit SMS OTP sent to{" "}
                <span className="text-foreground">{fullPhone}</span>
              </p>

              <div className="mt-7 flex items-center justify-center gap-3">
                {digits.map((d, i) => (
                  <input
                    key={i}
                    ref={(el) => {
                      otpRefs.current[i] = el;
                    }}
                    value={d}
                    inputMode="numeric"
                    onChange={(e) => onDigit(i, e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Backspace" && !digits[i] && i > 0)
                        otpRefs.current[i - 1]?.focus();
                    }}
                    className="h-13 w-11 rounded-md sm:h-14 sm:w-12 border border-gold/30 bg-surface-2 text-center font-display text-[20px] text-foreground outline-none focus:border-gold"
                  />
                ))}
              </div>

              {error && <p className="mt-5 text-[12px] text-red-400">{error}</p>}

              <p className="mt-6 text-[12px] text-muted-foreground">
                Didn&apos;t receive code?{" "}
                {seconds > 0 ? (
                  <span className="text-foreground">Resend in {seconds}s</span>
                ) : (
                  <button
                    type="button"
                    onClick={() => void requestOtp()}
                    className="text-gold hover:underline"
                  >
                    Resend now
                  </button>
                )}
              </p>

              <button
                type="submit"
                disabled={busy || digits.join("").length < 4}
                className="btn-gold mt-7 w-full disabled:opacity-60"
              >
                {busy ? "Verifying…" : "Verify & Continue"}
              </button>

              <p className="mt-5 text-[11px] leading-relaxed text-muted-foreground">
                By verifying, you confirm this is your number and agree to receive property updates
                via call/SMS.
              </p>
            </form>
          )}

          {step === "done" && (
            <div className="py-6 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/50 bg-surface-2">
                <ShieldCheck size={22} className="text-gold" />
              </div>
              <h3 className="mt-5 font-display text-[24px] text-foreground">You&apos;re on the list</h3>
              <p className="mx-auto mt-3 max-w-[400px] text-[13px] leading-[1.9] text-muted-foreground">
                Thank you, {firstName || "there"}. Your number is verified — our residence advisor
                will call you shortly with floor plans and priority visit slots.
              </p>
              <button onClick={() => setOpen(false)} className="btn-gold mt-7 w-full">
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
