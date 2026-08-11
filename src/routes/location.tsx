import { createFileRoute } from "@tanstack/react-router";
import { getSeo } from "@/lib/seo.functions";
import { seoHead } from "@/lib/seo-defaults";
import { IndexLinks, IndexSection, SeoIndexPage } from "@/components/site/SeoIndexPage";

const LANDMARKS = [
  ["Karnavati Club", "Adjacent"],
  ["Hotel Novotel", "Opposite"],
  ["Iscon Mega Mall", "Approx. 750 m"],
  ["Shalby Hospital", "Approx. 800 m"],
  ["Iskcon-Ambli Road", "Approx. 1 km"],
  ["Sindhu Bhavan Road", "Approx. 2 km"],
  ["SP Ring Road", "Approx. 3.5 km"],
  ["Sardar Vallabhbhai Patel Airport", "Approx. 17 km"],
];

export const Route = createFileRoute("/location")({
  component: LocationPage,
  loader: () => getSeo({ data: { path: "/location" } }),
  head: ({ loaderData }) => ({ ...seoHead("/location", loaderData) }),
});

function LocationPage() {
  return <SeoIndexPage eyebrow="Location" title="Maruti 360 Location | SG Highway, Ahmedabad" intro="Discover the Maruti 360 address near Karnavati Club, with access to SG Highway and key destinations across west Ahmedabad.">
    <IndexSection title="A connected address in west Ahmedabad">
      <p className="max-w-[780px] text-[13px] leading-[2] text-muted-foreground">Maruti 360 is positioned off SG Highway in Ahmedabad. Use the official sales team and the map below to confirm the current experience-centre location, access route and visit timings before travelling.</p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{LANDMARKS.map(([landmark, distance]) => <div key={landmark} className="border-t border-gold/30 pt-5"><p className="font-display text-[18px] text-foreground">{landmark}</p><p className="mt-2 text-[12px] text-gold">{distance}</p><p className="mt-2 text-[12px] text-muted-foreground">Indicative reference; confirm live travel time before your visit.</p></div>)}</div>
      <div className="mt-10 overflow-hidden border border-border"><iframe title="Maruti 360 location on SG Highway, Ahmedabad" src="https://www.google.com/maps?q=SG%20Highway%20Ahmedabad&output=embed" loading="lazy" className="h-[340px] w-full border-0" referrerPolicy="no-referrer-when-downgrade" /></div>
      <div className="mt-8"><IndexLinks /></div>
    </IndexSection>
  </SeoIndexPage>;
}
