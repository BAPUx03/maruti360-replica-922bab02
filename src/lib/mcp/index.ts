import { defineMcp } from "@lovable.dev/mcp-js";

import getProjectOverviewTool from "./tools/get-project-overview";
import listResidencesTool from "./tools/list-residences";
import listFaqsTool from "./tools/list-faqs";
import getPageSeoTool from "./tools/get-page-seo";

export default defineMcp({
  name: "maruti360",
  title: "Maruti360",
  version: "0.1.0",
  instructions:
    "Public tools for the Maruti 360 luxury residential project in Ahmedabad. Use `get_project_overview` for project facts, `list_residences` for 4/5 BHK configurations, `list_faqs` for published answers, and `get_page_seo` for a page's live title and description. No private, lead or customer data is exposed.",
  tools: [
    getProjectOverviewTool,
    listResidencesTool,
    listFaqsTool,
    getPageSeoTool,
  ] as unknown as Parameters<typeof defineMcp>[0]["tools"],
});
