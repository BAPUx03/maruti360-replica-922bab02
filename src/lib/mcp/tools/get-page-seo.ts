import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { SEO_PATHS, resolveSeo } from "@/lib/seo-defaults";

export default defineTool({
  name: "get_page_seo",
  title: "Get page SEO",
  description:
    "Get the live public title, description and keywords for one page of the Maruti 360 website. Omit `path` to list every available page path.",
  inputSchema: {
    path: z
      .string()
      .max(120)
      .optional()
      .describe("Website path such as '/' or '/floor-plan/5-bhk'. Omit to list all paths."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: async ({ path }) => {
    if (!path) {
      return {
        content: [{ type: "text", text: JSON.stringify(SEO_PATHS, null, 2) }],
        structuredContent: { paths: SEO_PATHS },
      };
    }
    if (!SEO_PATHS.includes(path)) {
      throw new ToolError(`Unknown page path "${path}". Call this tool without a path to list valid paths.`);
    }
    const { readSeo } = await import("@/lib/seo.server");
    const override = await readSeo(path).catch(() => null);
    const seo = resolveSeo(path, override);
    return {
      content: [{ type: "text", text: JSON.stringify(seo, null, 2) }],
      structuredContent: { seo },
    };
  },
});
