// Blog content lives here as data, not fabricated per-article files, so the
// hub and article route can both read the same source and never drift.
// Editorial rules (per the SEO brief):
//  - Byline is a neutral team credit, never an invented individual's name/role.
//  - publishedDate is the real date this article was written and published.
//  - Content is general, checkable buyer-education material (RERA concepts,
//    definitions, checklists) — not project-specific facts that would need
//    owner verification. Where a page references Maruti 360 specifics (RERA
//    number, phone), it pulls from project-facts.ts rather than repeating them.
//  - No invented prices, possession dates, distances or availability claims.

export type BlogPost = {
  slug: string;
  title: string; // <title> tag
  description: string; // meta description
  h1: string;
  intro: string; // direct-answer opening paragraph
  publishedDate: string; // ISO date, true publish date
  sections: { h2: string; paragraphs: string[]; list?: string[] }[];
  relatedLinks: { label: string; to: string }[];
};

const BYLINE = "Maruti 360 Team";
const PUBLISHED = "2026-08-14";

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "rera-checklist-buying-flat-gujarat",
    title: "RERA Checklist for Buying a Flat in Gujarat | Maruti 360",
    description:
      "A practical checklist for verifying a Gujarat RERA registration and the documents to request before booking a flat. Not legal advice.",
    h1: "A Practical RERA Checklist Before Buying a Flat in Gujarat",
    intro:
      "Before you book any flat in Gujarat, confirm the project's RERA registration on the official Gujarat RERA portal and request the documents below in writing — the registration number alone does not tell you whether a project is on schedule or fully approved.",
    publishedDate: PUBLISHED,
    sections: [
      {
        h2: "Start with the registration number itself",
        paragraphs: [
          "Every project that sells under-construction units in Gujarat must register with the Gujarat Real Estate Regulatory Authority (RERA) before advertising or booking. The registration number is usually printed on brochures, hoardings and the builder's website — cross-check it directly on the Gujarat RERA portal rather than trusting the printed number alone, since portal listings are the authoritative record.",
          "On the portal, look at the registered promoter name, the sanctioned plan, the declared completion date, and whether the registration is still active or has lapsed and been renewed. A registration that has expired without renewal is a signal to ask direct questions before proceeding.",
        ],
      },
      {
        h2: "Documents worth requesting before booking",
        paragraphs: [
          "A serious seller should be able to share these without hesitation. If any request is deflected repeatedly, treat that as useful information in itself.",
        ],
        list: [
          "The RERA certificate and the RERA registration number for the specific phase or tower you are buying into",
          "Sanctioned building plans and layout approved by the local authority",
          "Title documents or a title-search report confirming clear ownership of the land",
          "The draft Agreement for Sale, reviewed before you sign anything",
          "The payment schedule tied to construction milestones, not just a generic price list",
          "Carpet-area figures as defined under RERA, not builder-marketed super built-up figures",
        ],
      },
      {
        h2: "Questions to ask about the construction timeline",
        paragraphs: [
          "RERA requires promoters to update project status periodically on the portal, including revised completion dates if the original one changes. Ask when the project page was last updated, and compare the declared completion date on the portal against what a sales team tells you verbally — the two should match.",
          "If there is any escrow or dedicated project-account requirement under the state's RERA rules, ask how funds collected from buyers are being applied to construction, since that structure exists specifically to protect buyer money.",
        ],
      },
      {
        h2: "A note on relying on this checklist",
        paragraphs: [
          "This is general buyer-education information, not legal advice. RERA rules, portal features and disclosure formats can change, and every project's paperwork is different. Have a lawyer review the Agreement for Sale and title documents before you commit funds.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Maruti 360 RERA Details", to: "/rera-legal" },
      { label: "Contact / Document Request", to: "/contact-us" },
    ],
  },
  {
    slug: "4-bhk-vs-5-bhk-luxury-apartment-ahmedabad",
    title: "4 BHK vs 5 BHK Luxury Apartment in Ahmedabad: How to Choose",
    description:
      "A practical framework for choosing between a 4 BHK and 5 BHK luxury apartment in Ahmedabad — household needs, guest space, privacy and long-term flexibility.",
    h1: "4 BHK vs 5 BHK: Choosing a Luxury Apartment in Ahmedabad",
    intro:
      "The right configuration usually comes down to four practical questions — how many people live with you day to day, how often you host guests or extended family, whether you need a dedicated work-from-home room, and how much staff or storage space your household actually uses.",
    publishedDate: PUBLISHED,
    sections: [
      {
        h2: "Household size and daily privacy",
        paragraphs: [
          "A 4 BHK comfortably suits a core family with one or two additional rooms for children, a study or parents. A 5 BHK earns its extra room when the household regularly includes extended family, a live-in caregiver, or when adult children and parents each want a genuinely private wing rather than a shared floor.",
          "Walk both layouts, if available, and pay attention to where bedrooms sit relative to the living and dining areas — a fifth bedroom only adds privacy if it is positioned away from the common areas, not simply appended to the plan.",
        ],
      },
      {
        h2: "Guest space and entertaining",
        paragraphs: [
          "If you host frequently — family functions, business guests, or overnight visitors — a 5 BHK's extra room or separate lounge removes the friction of converting a study into a guest room every time. If entertaining is occasional, a well-planned 4 BHK with a generous living-dining area often does the job without paying for space used only a few times a year.",
        ],
      },
      {
        h2: "Work-from-home and flexible rooms",
        paragraphs: [
          "A dedicated home office has become a real requirement for many buyers, not a luxury add-on. Check whether the 'extra' room in either configuration converts cleanly into a study — look at door placement, whether it has its own window, and whether it sits far enough from bedrooms to allow calls without disturbing the household.",
        ],
      },
      {
        h2: "Staff quarters, storage and future flexibility",
        paragraphs: [
          "5 BHK formats more often include a separate staff room and service entry, which matters if you employ live-in help. They also tend to offer more built-in storage and a larger utility area — worth comparing directly against a 4 BHK's storage provisioning rather than assuming.",
          "Finally, think five to ten years ahead: a growing family, ageing parents moving in, or a home business are all reasons buyers upgrade from 4 to 5 BHK later. If that scenario is likely for you, it may be worth the larger configuration now rather than moving again.",
        ],
      },
    ],
    relatedLinks: [
      { label: "4 BHK Floor Plan", to: "/floor-plan/4-bhk" },
      { label: "5 BHK Floor Plan", to: "/floor-plan/5-bhk" },
      { label: "View Price & Payment Plan", to: "/price" },
    ],
  },
  {
    slug: "how-to-evaluate-luxury-apartment-floor-plan",
    title: "How to Evaluate a Luxury Apartment Floor Plan Before Booking",
    description:
      "A practical checklist for reading a luxury apartment floor plan: carpet area, circulation, daylight, decks, privacy and storage.",
    h1: "How to Evaluate a Luxury Apartment Floor Plan",
    intro:
      "A floor plan is easiest to evaluate as five separate questions — how much of the marketed area is actually usable carpet area, how people and furniture move through the home, how much daylight reaches each room, how private the bedrooms are from common areas, and where everyday storage and service functions sit.",
    publishedDate: PUBLISHED,
    sections: [
      {
        h2: "Carpet area versus marketed area",
        paragraphs: [
          "Ask for the RERA-defined carpet area of the specific unit you are considering, not just the super built-up figure used in marketing. The difference between the two — covering shared lobbies, lift cores, stairwells and wall thickness — can be substantial, and only carpet area reflects what you can actually furnish and live in.",
        ],
      },
      {
        h2: "Circulation and how the home actually flows",
        paragraphs: [
          "Trace the path from the entrance to the kitchen, from bedrooms to bathrooms, and from the living area to any deck. Good circulation means you rarely have to walk through one room to reach another, and corridors are wide enough to be usable, not just leftover space between rooms.",
        ],
      },
      {
        h2: "Daylight, ventilation and orientation",
        paragraphs: [
          "Look at which rooms have direct external windows versus borrowed light, and which direction each principal room faces. Cross-ventilation — openings on two different external faces of the home — meaningfully affects comfort and cooling load, especially in Ahmedabad's climate.",
        ],
      },
      {
        h2: "Decks, privacy and service areas",
        paragraphs: [
          "Check whether decks are usable outdoor space or narrow ledges, and whether bedroom windows face other towers at close range or open views. Note where the kitchen, utility and staff areas sit relative to the main entrance and living spaces — a service entry that keeps deliveries and domestic staff movement away from the main living areas is a genuine planning advantage, not a cosmetic one.",
        ],
      },
      {
        h2: "Storage and furniture fit",
        paragraphs: [
          "Built-in wardrobe space, kitchen storage and a genuine utility area are easy to overlook on a 2D plan. Ask for wardrobe and storage dimensions specifically, and where possible, check a show flat or 3D walkthrough against the printed plan before booking.",
        ],
      },
    ],
    relatedLinks: [
      { label: "All Floor Plans", to: "/floor-plan" },
      { label: "Maruti 360 FAQ", to: "/faq" },
    ],
  },
  {
    slug: "questions-before-buying-under-construction-luxury-flat-ahmedabad",
    title: "Questions to Ask Before Buying an Under-Construction Luxury Flat",
    description:
      "A genuinely useful pre-booking checklist for an under-construction luxury flat: RERA, plans, inclusions, payment milestones, maintenance and handover.",
    h1: "Questions to Ask Before Buying an Under-Construction Luxury Flat",
    intro:
      "Before booking an under-construction flat, get clear written answers on seven things — RERA status, the sanctioned plan, what specifications are actually included, the payment schedule, the maintenance structure, the handover process, and what happens if the completion date slips.",
    publishedDate: PUBLISHED,
    sections: [
      {
        h2: "RERA and approvals",
        paragraphs: [
          "Confirm the current RERA registration status directly on the Gujarat RERA portal, and ask for the sanctioned building plan stamped by the local authority. Ask specifically whether the registration covers the exact tower and unit you are considering, since large developments sometimes register phases separately.",
        ],
      },
      {
        h2: "What is actually included in the price",
        paragraphs: [
          "Get a written specification sheet — flooring, kitchen fittings, wardrobes, sanitary fixtures, air-conditioning provisioning — rather than relying on a show-flat impression. Ask which of those items are standard and which are chargeable upgrades.",
        ],
        list: [
          "Is car parking included, and how many bays per unit?",
          "Are club, amenity and maintenance deposits separate from the unit price?",
          "What taxes, registration and stamp-duty costs sit outside the quoted price?",
        ],
      },
      {
        h2: "Payment schedule and milestones",
        paragraphs: [
          "A construction-linked payment plan should tie each instalment to a specific, verifiable stage of construction, not just a calendar date. Ask how milestone completion is confirmed and communicated to buyers.",
        ],
      },
      {
        h2: "Maintenance, handover and what happens if dates slip",
        paragraphs: [
          "Ask who manages the property after handover, how the maintenance corpus and monthly charges are calculated, and what the process is for raising defects in the first months after possession. Finally, ask directly what recourse exists — under the Agreement for Sale and under RERA — if the completion date is delayed, and get that answer from the sales team in writing where possible.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Maruti 360 RERA Details", to: "/rera-legal" },
      { label: "View Price & Payment Plan", to: "/price" },
      { label: "Contact Us", to: "/contact-us" },
    ],
  },
  {
    slug: "carpet-area-vs-built-up-area-luxury-apartment",
    title: "Carpet Area vs Built-Up Area: Luxury Apartment Buyer Guide",
    description:
      "A clear definition of carpet area, built-up area and super built-up area for luxury apartment buyers, and how to compare only approved documents.",
    h1: "Carpet Area vs Built-Up Area: What Luxury Home Buyers Should Compare",
    intro:
      "Carpet area is the actual usable floor space within your unit's walls; built-up area adds wall thickness and balconies; super built-up area further adds a share of common spaces like lobbies and stairwells — and under India's RERA framework, only carpet area is the legally standardised figure a promoter must quote.",
    publishedDate: PUBLISHED,
    sections: [
      {
        h2: "The three terms, defined plainly",
        paragraphs: [
          "Carpet area is the net usable floor area inside your unit's internal walls — what you could genuinely lay carpet on. Built-up area (sometimes called plinth area) adds the thickness of your unit's own walls and any balcony or deck attached to it. Super built-up area, sometimes called saleable area, goes further and adds a proportional share of shared spaces such as lift lobbies, stairwells and common corridors.",
        ],
      },
      {
        h2: "Why the difference matters when comparing two projects",
        paragraphs: [
          "Two apartments advertised at the same super built-up area can have meaningfully different carpet areas depending on how much shared space (loading factor) each building allocates. A wider tower with more lobbies and amenity corridors will typically have a higher loading factor, meaning less of the marketed number is space you actually live in.",
          "Always ask for the exact carpet area figure — ideally the one stated in the Agreement for Sale, which is the legally binding number — rather than comparing projects only by their marketed super built-up figures.",
        ],
      },
      {
        h2: "Where to find the authoritative number",
        paragraphs: [
          "Under RERA, promoters are required to quote carpet area in project disclosures and the Agreement for Sale. Cross-check the number shown to you verbally or in a brochure against what appears in the registered RERA project details and in the draft agreement before signing.",
        ],
      },
    ],
    relatedLinks: [
      { label: "All Floor Plans", to: "/floor-plan" },
      { label: "View Price & Payment Plan", to: "/price" },
    ],
  },
  {
    slug: "sg-highway-luxury-home-location-checklist",
    title: "SG Highway Luxury Home Location Checklist for Ahmedabad Buyers",
    description:
      "A practical checklist for evaluating a luxury home location on SG Highway, Ahmedabad — commute, access, infrastructure and daily services.",
    h1: "How to Evaluate a Luxury Home Location on SG Highway",
    intro:
      "Evaluating a location on SG Highway comes down to five practical checks — your actual daily commute at real traffic hours, road access into and out of the specific plot, the civic and social infrastructure already in place, the noise and view profile of the exact unit, and independently verifying map claims rather than trusting a brochure distance.",
    publishedDate: PUBLISHED,
    sections: [
      {
        h2: "Test the commute at real hours, not off-peak",
        paragraphs: [
          "SG Highway carries heavy traffic at peak hours. Before deciding, drive or ride the actual route to your workplace, your children's school and any hospital you would use, during a realistic morning and evening commute window — not at a quiet mid-afternoon slot when visiting a sales office.",
        ],
      },
      {
        h2: "Road access into the specific plot",
        paragraphs: [
          "A project fronting a service road, a signal-controlled junction, or a direct highway cut can have very different daily access experiences even at the same broad address. Ask specifically how residents enter and exit during peak traffic, not just how the main highway frontage looks in marketing material.",
        ],
      },
      {
        h2: "Civic and social infrastructure already in place",
        paragraphs: [
          "Rather than relying on a builder's list of 'nearby' landmarks, independently check what schools, hospitals, grocery and daily-service options are genuinely operational and reachable today — not planned or under construction — and how far they actually are by your own measurement.",
        ],
      },
      {
        h2: "Noise, view and orientation of the specific unit",
        paragraphs: [
          "A location checklist should extend to the individual unit: does it face the highway directly, or an internal courtyard? Visit at different times of day to judge road noise, and ask about acoustic glazing if the unit faces a busy road directly.",
        ],
      },
      {
        h2: "Verify, don't assume",
        paragraphs: [
          "Use a map service to independently measure travel times and distances to the destinations that matter to you, rather than relying solely on figures a sales team provides. This is worth doing before booking, not after.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Maruti 360 Location", to: "/location" },
      { label: "Contact Us", to: "/contact-us" },
    ],
  },
  {
    slug: "home-buying-payment-plan-questions-india",
    title: "Home Buying Payment Plan Questions to Ask Before Booking",
    description:
      "Practical questions to ask your sales team and lender about a home-buying payment plan before booking, with no financial recommendation implied.",
    h1: "Payment Plan Questions to Ask Before Booking a Luxury Residence",
    intro:
      "Before committing to a payment plan, get clear answers on how instalments are tied to construction, what the booking amount actually locks in, how a home loan interacts with the builder's schedule, and what the cancellation or refund terms are — each is a question for the sales team or your lender, not something to assume.",
    publishedDate: PUBLISHED,
    sections: [
      {
        h2: "Understand what type of plan you're being offered",
        paragraphs: [
          "Common structures include construction-linked plans (instalments tied to building milestones), down-payment plans (a large upfront payment for a discount), and possession-linked or flexi plans. Ask which structure applies, and get the exact milestone-by-milestone breakdown in writing rather than a summary percentage.",
        ],
      },
      {
        h2: "Questions for the sales team",
        paragraphs: ["These are worth asking before you pay a booking amount, not after."],
        list: [
          "What exactly does the booking amount secure, and is it refundable, and under what conditions?",
          "How is each milestone in a construction-linked plan verified and communicated?",
          "Are GST, stamp duty, registration and society/maintenance deposits included in the quoted schedule, or additional?",
          "What is the cancellation policy, and how much is refunded if you withdraw at different stages?",
          "Is there a written penalty or interest clause for late instalments, and does it apply symmetrically if the builder delays a milestone?",
        ],
      },
      {
        h2: "Questions for your lender",
        paragraphs: [
          "If you plan to use a home loan, ask your bank or NBFC how disbursements will align with the builder's payment schedule, since loan disbursement is typically also linked to construction stage. Confirm your eligible loan amount and processing timeline before you commit to a payment date with the builder, to avoid a gap between what the builder expects and when your loan actually disburses.",
        ],
      },
      {
        h2: "No financial advice implied",
        paragraphs: [
          "This article lists questions to ask, not a recommendation on how to structure your finances. Loan eligibility, interest rates and suitability depend on your individual circumstances — confirm details directly with your bank or a qualified financial advisor.",
        ],
      },
    ],
    relatedLinks: [
      { label: "View Price & Payment Plan", to: "/price" },
      { label: "Maruti 360 RERA Details", to: "/rera-legal" },
    ],
  },
  {
    slug: "how-to-evaluate-location-near-karnavati-club",
    title: "How to Evaluate a Home Location Near Karnavati Club, Ahmedabad",
    description:
      "A buyer's framework for evaluating a home location near Karnavati Club, Ahmedabad — access, neighbourhood character and independent verification.",
    h1: "How to Evaluate a Luxury Home Location Near Karnavati Club",
    intro:
      "Rather than comparing named projects, use a simple framework for any home near Karnavati Club: check real access routes at peak hours, understand what the neighbourhood actually offers today, weigh the trade-offs of an established, low-rise-dominated pocket, and independently verify any specific distance or travel-time claim before relying on it.",
    publishedDate: PUBLISHED,
    sections: [
      {
        h2: "What makes this pocket of Ahmedabad distinct",
        paragraphs: [
          "The area around Karnavati Club sits within one of Ahmedabad's more established west-side residential and social corridors, with a long-running social/sports club as a neighbourhood anchor. That maturity is itself a data point worth weighing: established areas tend to have settled civic infrastructure, but can also have denser traffic patterns at peak hours than newer corridors further out.",
        ],
      },
      {
        h2: "Access and daily commute",
        paragraphs: [
          "As with any SG Highway-adjacent address, test your actual commute — to work, schools, and healthcare — during real peak-hour traffic, not a quiet visit slot. Ask specifically how a project's plot connects to the main road network, since side-road and service-lane access can differ meaningfully from a highway-facing address.",
        ],
      },
      {
        h2: "Neighbourhood character and daily convenience",
        paragraphs: [
          "Independently check what's genuinely operating nearby — grocery, healthcare, schooling and retail — rather than relying on a marketing list of 'landmarks near the project'. A short visit at a normal weekday hour tells you more about daily convenience than a brochure page does.",
        ],
      },
      {
        h2: "Verify before you rely on it",
        paragraphs: [
          "Any specific distance or drive-time figure quoted to you should be checked independently on a map service using your own start and end points, since actual routes and traffic conditions vary. Treat this as a standard part of due diligence for any address in this corridor, not something unique to one project.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Maruti 360 Location", to: "/location" },
      { label: "All Floor Plans", to: "/floor-plan" },
      { label: "Contact Us", to: "/contact-us" },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export const BLOG_BYLINE = BYLINE;
