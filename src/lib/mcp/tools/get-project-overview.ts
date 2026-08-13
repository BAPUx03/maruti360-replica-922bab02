import { defineTool } from "@lovable.dev/mcp-js";
import { PROJECT } from "../data";

export default defineTool({
  name: "get_project_overview",
  title: "Get project overview",
  description:
    "Public overview of the Maruti 360 luxury residential project in Ahmedabad: developer, location, configurations, possession and highlights.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(PROJECT, null, 2) }],
    structuredContent: { project: PROJECT },
  }),
});
