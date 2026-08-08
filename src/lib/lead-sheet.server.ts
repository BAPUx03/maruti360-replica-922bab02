import type { z } from "zod";
import type { leadSchema } from "@/lib/lead-schema";

type Lead = z.infer<typeof leadSchema>;

const GATEWAY = "https://connector-gateway.lovable.dev/google_sheets/v4";

export async function appendLeadToSheet(lead: Lead) {
  const lovableKey = process.env["LOVABLE_API_KEY"];
  const sheetsKey = process.env["GOOGLE_SHEETS_API_KEY"];
  const spreadsheetId = process.env["LEADS_SHEET_ID"];
  if (!lovableKey || !sheetsKey || !spreadsheetId) {
    console.error("Google Sheets credentials are not configured");
    return false;
  }

  const row = [
    new Date().toISOString(),
    lead.first_name,
    lead.last_name ?? "",
    lead.email ?? "",
    lead.phone,
    lead.requirement ?? "",
    lead.budget ?? "",
    lead.message ?? "",
    lead.source,
    lead.phone_verified ? "Yes" : "No",
  ];

  const res = await fetch(
    `${GATEWAY}/spreadsheets/${SPREADSHEET_ID}/values/Leads!A:J:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${lovableKey}`,
        "X-Connection-Api-Key": sheetsKey,
      },
      body: JSON.stringify({ values: [row] }),
    },
  );

  if (!res.ok) {
    console.error(`Google Sheets append failed [${res.status}]: ${await res.text()}`);
    return false;
  }
  return true;
}
