import { defineTool } from "@lovable.dev/mcp-js";
import { FAQS } from "../data";

export default defineTool({
  name: "list_faqs",
  title: "List FAQs",
  description: "Public frequently asked questions and answers published on the Maruti 360 website.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(FAQS, null, 2) }],
    structuredContent: { faqs: FAQS },
  }),
});
