import { defineTool } from "@lovable.dev/mcp-js";
import { RESIDENCES } from "../data";

export default defineTool({
  name: "list_residences",
  title: "List residences",
  description:
    "List the publicly published Maruti 360 residence configurations (4 BHK and 5 BHK) with their summaries and website paths.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(RESIDENCES, null, 2) }],
    structuredContent: { residences: RESIDENCES },
  }),
});
