import { createFileRoute } from "@tanstack/react-router";
import { getSeo } from "@/lib/seo.functions";
import { seoHead } from "@/lib/seo-defaults";
import { IndexLinks, IndexSection, SeoIndexPage } from "@/components/site/SeoIndexPage";
import pool from "@/assets/Maruti_360_POOL_3.webp";
import view from "@/assets/Maruti_360_view.webp";
import bedroom from "@/assets/Maruti_360_bedroom_2.webp";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  loader: () => getSeo({ data: { path: "/gallery" } }),
  head: ({ loaderData }) => ({ ...seoHead("/gallery", loaderData) }),
});

function GalleryPage() {
  return <SeoIndexPage eyebrow="Gallery" title="Maruti 360 Gallery | Residences, Amenities & Views" intro="Explore selected Maruti 360 visuals and request the latest brochure, walkthrough and construction information from the sales team.">
    <IndexSection title="A glimpse above it all"><div className="grid gap-5 md:grid-cols-3">{[[pool, "Maruti 360 pool and leisure amenity"], [view, "Maruti 360 viewing gallery and Ahmedabad skyline"], [bedroom, "Maruti 360 luxury bedroom interior"]].map(([src, alt]) => <img key={alt} src={src} alt={alt} loading="lazy" width={1200} height={800} className="h-[300px] w-full object-cover" />)}</div><p className="mt-8 max-w-[760px] text-[13px] leading-[2] text-muted-foreground">Renders and illustrative visuals are indicative. Ask for the latest approved specifications and an in-person walkthrough before relying on any visual detail.</p><IndexLinks /></IndexSection>
  </SeoIndexPage>;
}
