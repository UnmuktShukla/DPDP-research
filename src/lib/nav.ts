export type NavItem = {
  href: string
  label: string
  searchHint?: string
}

export type NavGroup = {
  id: string
  label: string
  items: NavItem[]
}

export const nav: NavGroup[] = [
  {
    id: "overview",
    label: "Overview",
    items: [
      { href: "/", label: "Executive Overview" },
      { href: "/thesis", label: "Thesis" },
      { href: "/business-plan", label: "Business Plan" },
      { href: "/research-progress", label: "Research Progress" },
    ],
  },
  {
    id: "market",
    label: "Market",
    items: [
      { href: "/market", label: "Market Landscape" },
      { href: "/market/size", label: "Market Size" },
      { href: "/market/segments", label: "Customer Segments" },
      { href: "/market/pain-points", label: "Pain Points" },
      { href: "/market/demand", label: "Demand Signals" },
      { href: "/market/trends", label: "Industry Trends" },
    ],
  },
  {
    id: "dpdp",
    label: "DPDP",
    items: [
      { href: "/dpdp", label: "Regulatory Landscape" },
      { href: "/dpdp/act", label: "DPDP Act" },
      { href: "/dpdp/rules", label: "Rules & Notifications" },
      { href: "/dpdp/compliance", label: "Compliance Requirements" },
      { href: "/dpdp/fiduciary", label: "Data Fiduciary Obligations" },
      { href: "/dpdp/consent", label: "Consent" },
      { href: "/dpdp/rights", label: "Data Principal Rights" },
      { href: "/dpdp/sdf", label: "Significant Data Fiduciary" },
      { href: "/dpdp/cross-border", label: "Cross-border Data" },
      { href: "/dpdp/penalties", label: "Penalties" },
      { href: "/dpdp/questions", label: "Open Regulatory Questions" },
    ],
  },
  {
    id: "competition",
    label: "Competition",
    items: [
      { href: "/competition", label: "Competitive Landscape" },
      { href: "/competition/profiles", label: "Competitor Profiles" },
      { href: "/competition/comparison", label: "Feature Comparison" },
      { href: "/competition/pricing", label: "Pricing" },
      { href: "/competition/positioning", label: "Positioning" },
      { href: "/competition/gaps", label: "Competitive Gaps" },
    ],
  },
  {
    id: "startup",
    label: "Startup",
    items: [
      { href: "/startup/problem", label: "Problem" },
      { href: "/startup/solution", label: "Solution" },
      { href: "/startup/product", label: "Product" },
      { href: "/startup/business-model", label: "Business Model" },
      { href: "/startup/pricing", label: "Pricing" },
      { href: "/startup/gtm", label: "Go-to-Market" },
      { href: "/startup/distribution", label: "Distribution" },
      { href: "/startup/moat", label: "Moat" },
      { href: "/startup/risks", label: "Risks" },
      { href: "/startup/roadmap", label: "Roadmap" },
    ],
  },
  {
    id: "research",
    label: "Research",
    items: [
      { href: "/research", label: "Research Library" },
      { href: "/research/sources", label: "Sources" },
      { href: "/research/interviews", label: "Interviews" },
      { href: "/research/evidence", label: "Evidence" },
      { href: "/research/assumptions", label: "Assumptions" },
      { href: "/research/hypotheses", label: "Hypotheses" },
      { href: "/research/questions", label: "Open Questions" },
      { href: "/research/log", label: "Research Log" },
      { href: "/research/timeline", label: "Timeline" },
    ],
  },
  {
    id: "strategy",
    label: "Strategy",
    items: [
      { href: "/strategy", label: "Strategic Thesis" },
      { href: "/strategy/opportunities", label: "Opportunity Map" },
      { href: "/strategy/options", label: "Strategic Options" },
      { href: "/strategy/decisions", label: "Decisions" },
      { href: "/strategy/experiments", label: "Experiments" },
      { href: "/strategy/next", label: "Next Steps" },
    ],
  },
]

export const allNavItems = nav.flatMap((group) => group.items)
