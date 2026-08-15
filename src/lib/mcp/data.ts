/** Public marketing facts about Maruti 360 — safe to expose to anonymous MCP callers. */

export const PROJECT = {
  name: "Maruti 360",
  developer: "Maruti Buildcon",
  location: "Off S.G. Highway, near Karnavati Club, Ahmedabad, Gujarat, India",
  configurations: ["4 BHK sky residence", "5 BHK sky residence"],
  possession: "December 2028 (verify the latest RERA-declared timeline before booking)",
  pricing: "Details on enquiry",
  website: "https://www.maruti-360.com",
  highlights: [
    "Sky residences with wide-frontage living spaces and deep decks",
    "Viewing gallery, swimming pool, clubhouse, theatre and gym",
    "Yoga deck, indoor games and landscaped gardens",
    "Located off S.G. Highway, one of Ahmedabad's prime corridors",
  ],
} as const;

export const RESIDENCES = [
  {
    slug: "4-bhk",
    name: "4 BHK Sky Residence",
    path: "/floor-plan/4-bhk",
    summary:
      "Wide-frontage living spaces, a deep sky deck and premium specifications. Layout and area details shared on enquiry.",
  },
  {
    slug: "5-bhk",
    name: "5 BHK Sky Residence",
    path: "/floor-plan/5-bhk",
    summary:
      "A private lounge, family deck, staff quarters and premium specifications. Layout and area details shared on enquiry.",
  },
] as const;

export const FAQS = [
  {
    question: "What is Maruti 360?",
    answer:
      "Maruti 360 is a luxury residential project offering 4 BHK and 5 BHK residences off SG Highway in Ahmedabad.",
  },
  {
    question: "Where is Maruti 360 located?",
    answer:
      "The project is located off SG Highway, Ahmedabad, near Karnavati Club. Confirm the current visit route with the sales team.",
  },
  {
    question: "Which configurations are available?",
    answer:
      "4 BHK and 5 BHK residences are presented in the project material. Select jodi, duplex and penthouse formats may be available on request.",
  },
  {
    question: "How can I get the floor plan?",
    answer:
      "Use the floor plan pages or contact the sales team to request the latest detailed layout and availability.",
  },
  {
    question: "What is the expected possession date?",
    answer:
      "The project material references December 2028. Ask for the latest RERA-declared timeline before booking.",
  },
  {
    question: "How do I book a site visit?",
    answer: "Submit the enquiry form on the website to request a convenient appointment.",
  },
  {
    question: "Where can I verify project documents?",
    answer:
      "Request the current RERA and sanctioned project documents from the authorised sales team and verify them independently before purchase.",
  },
] as const;
