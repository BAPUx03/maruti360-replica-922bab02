import { createFileRoute } from "@tanstack/react-router";
import { getSeo } from "@/lib/seo.functions";
import { seoHead } from "@/lib/seo-defaults";
import { IndexLinks, IndexSection, SeoIndexPage } from "@/components/site/SeoIndexPage";

// Qualitative proximity only — no specific distance/drive-time figures, since
// none are verified against an approved source. Confirm exact distances with
// the sales team before relying on them.
const LANDMARKS = [
  ["Karnavati Club", "Near the address"],
  ["Hotel Novotel", "Nearby"],
  ["Iscon Mega Mall", "Short distance away"],
  ["Shalby Hospital", "Short distance away"],
  ["Iskcon-Ambli Road", "Nearby"],
  ["Sindhu Bhavan Road", "Within reach"],
  ["SP Ring Road", "Within reach"],
  ["Sardar Vallabhbhai Patel Airport", "Accessible by road"],
];

export const Route = createFileRoute("/location")({
  component: LocationPage,
  loader: () => getSeo({ data: { path: "/location" } }),
  head: ({ loaderData }) => ({ ...seoHead("/location", loaderData) }),
});

function LocationPage() {
  return (
    <SeoIndexPage
      eyebrow="Location"
      title="Maruti 360 Location on SG Highway, Ahmedabad"
      intro="Discover the Maruti 360 address near Karnavati Club, with access to SG Highway and key destinations across west Ahmedabad."
    >
      <IndexSection title="A connected address in west Ahmedabad">
        <p className="max-w-[780px] text-[13px] leading-[2] text-muted-foreground">
          Maruti 360 is positioned off SG Highway in Ahmedabad. Use the official sales team and the
          map below to confirm the current experience-centre location, access route and visit
          timings before travelling.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {LANDMARKS.map(([landmark, distance]) => (
            <div key={landmark} className="border-t border-gold/30 pt-5">
              <p className="font-display text-[18px] text-foreground">{landmark}</p>
              <p className="mt-2 text-[12px] text-gold">{distance}</p>
              <p className="mt-2 text-[12px] text-muted-foreground">
                Indicative reference; confirm live travel time before your visit.
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 overflow-hidden border border-border">
          <iframe
            title="Maruti 360 location on SG Highway, Ahmedabad"
            src="https://www.google.com/maps?q=SG%20Highway%20Ahmedabad&output=embed"
            loading="lazy"
            className="h-[340px] w-full border-0"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="mt-8">
          <IndexLinks
            links={[
              { label: "Explore Amenities", to: "/amenities" },
              { label: "View Gallery", to: "/gallery" },
              { label: "View Floor Plans", to: "/floor-plan" },
              { label: "Contact / Site Visit", to: "/contact-us" },
            ]}
          />
        </div>
      </IndexSection>
    </SeoIndexPage>
  );
}
