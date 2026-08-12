import logo from "@/assets/Group-35-2.png";
import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown, Phone, ShieldCheck } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { sendPhoneOtp, verifyPhoneOtp } from "@/lib/otp.functions";
import { saveLead } from "@/lib/leads";


const REQUIREMENTS = [
  "4 BHK",
  "5 BHK",
  "Jodi / Duplex / Penthouse — if available",
  "Investment",
];

const BUDGETS = ["₹2 Cr – ₹3 Cr", "₹4 Cr – ₹5 Cr", "₹6 Cr – ₹7 Cr", "₹8 Cr – ₹10 Cr", "₹10 Cr – ₹11 Cr", "₹12 Cr – ₹13 Cr", "₹14 Cr – ₹15 Cr", "₹16 Cr – ₹17 Cr", "₹18 Cr – ₹19 Cr", "₹20 Cr+"];

const COUNTRIES = [
  { code: "+91", label: "IN +91" },
  { code: "+971", label: "AE +971" },
  { code: "+966", label: "SA +966" },
  { code: "+974", label: "QA +974" },
  { code: "+965", label: "KW +965" },
  { code: "+968", label: "OM +968" },
  { code: "+973", label: "BH +973" },
  { code: "+1", label: "US +1" },
  { code: "+1", label: "CA +1" },
  { code: "+44", label: "UK +44" },
  { code: "+61", label: "AU +61" },
  { code: "+64", label: "NZ +64" },
  { code: "+65", label: "SG +65" },
  { code: "+60", label: "MY +60" },
  { code: "+66", label: "TH +66" },
  { code: "+62", label: "ID +62" },
  { code: "+81", label: "JP +81" },
  { code: "+82", label: "KR +82" },
  { code: "+86", label: "CN +86" },
  { code: "+852", label: "HK +852" },
  { code: "+49", label: "DE +49" },
  { code: "+33", label: "FR +33" },
  { code: "+39", label: "IT +39" },
  { code: "+34", label: "ES +34" },
  { code: "+31", label: "NL +31" },
  { code: "+41", label: "CH +41" },
  { code: "+46", label: "SE +46" },
  { code: "+47", label: "NO +47" },
  { code: "+45", label: "DK +45" },
  { code: "+353", label: "IE +353" },
  { code: "+351", label: "PT +351" },
  { code: "+90", label: "TR +90" },
  { code: "+7", label: "RU +7" },
  { code: "+27", label: "ZA +27" },
  { code: "+254", label: "KE +254" },
  { code: "+234", label: "NG +234" },
  { code: "+20", label: "EG +20" },
  { code: "+55", label: "BR +55" },
  { code: "+52", label: "MX +52" },
  { code: "+94", label: "LK +94" },
  { code: "+977", label: "NP +977" },
  { code: "+880", label: "BD +880" },
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
    const t = setTimeout(() => setOpen(true), 7000);
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
      await saveLead({
        first_name: firstName,
        last_name: lastName,
        email,
        phone: fullPhone,
        requirement,
        budget,
        source: "enquiry_popup",
        phone_verified: true,
      });
      setOpen(false);
      setStep("form");


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
    <div className="backdrop-in fixed inset-0 z-[100] flex items-center justify-center bg-black/30 px-3 py-3 backdrop-blur-[3px] sm:px-4 sm:py-8">
      <div className="popup-in relative my-auto max-h-[96vh] w-full max-w-[560px] overflow-x-hidden rounded-xl border border-gold/30 bg-surface/95 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.95)]">
        <div className="gold-sheen h-[3px] w-full" />

        <div className="px-4 py-5 sm:px-8 sm:py-7 md:px-10 md:py-9">
          <div className="logo-in flex justify-center">
            <img
              data-brand-logo
              src={logo}
              alt="Above It All logo"
              className="h-8 w-auto sm:h-10 md:h-12"
            />
          </div>

          {step === "form" && (
            <>
              <div className="mt-3.5 text-center sm:mt-5">
                <p className="eyebrow field-in" style={{ animationDelay: "80ms" }}>
                  Private Residence Enquiry
                </p>
                <h3
                  className="field-in mt-2 font-display text-[20px] sm:mt-2.5 leading-tight text-foreground sm:text-[26px] md:text-[30px]"
                  style={{ animationDelay: "140ms" }}
                >
                  Private Residence Enquiry
                </h3>
                <p className="field-in mt-1.5 hidden text-[13px] text-muted-foreground sm:block" style={{ animationDelay: "200ms" }}>
                  Share your requirements &amp; get exclusive listings.
                </p>
                <span className="mt-4 hidden items-center gap-2 sm:inline-flex rounded-full border border-gold/40 px-3.5 py-1.5 text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-gold">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  Site Visits — By Appointment Only
                </span>
              </div>

              <form className="mt-4 space-y-3 text-left sm:mt-6 sm:space-y-4" onSubmit={submitForm}>
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

                <div className="hidden flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-[9px] sm:flex sm:text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  <span className="text-gold">✦ Instant Call Back</span>
                  <span className="text-gold">✦ Floor Plans</span>
                  <span className="text-gold">✦ Priority Visit</span>
                </div>

                {error && <p className="text-center text-[12px] text-red-400">{error}</p>}

                <button type="submit" disabled={busy} className="btn-gold w-full disabled:opacity-60">
                  {busy ? "Sending Code…" : "Get Exclusive Access"}
                </button>

                <p className="text-center text-[10px] leading-relaxed text-muted-foreground sm:text-[11px]">
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
