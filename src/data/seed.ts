import type { Workspace } from "@/lib/types"

const PLACEHOLDER =
  "DEMO / PLACEHOLDER — research starter text, not a verified conclusion and not legal advice."

export const DISCLAIMER =
  "Research workspace with cited sources. DPDP regulatory notes summarise public instruments and survey data — they are not legal advice, not statute text, and not a compliance opinion."

export const seedWorkspace: Workspace = {
  meta: {
    title: "DPDP Startup Research",
    subtitle:
      "Market intelligence, regulatory research and business strategy workspace",
    lastUpdated: "2026-08-18",
    researchStatus:
      "Validate — regulatory need established; commercial demand unproven",
    disclaimer: DISCLAIMER,
  },
  thesis: {
    problem:
      "India's DPDP framework creates new operational work for organisations handling digital personal data. The open business question is not whether obligations exist, but which organisations will spend money to manage them.",
    insight:
      "Readiness is still early. In EY's 2026 survey of 150+ professionals, more than 83% had not begun comprehensive implementation and 77% said they were not equipped to adopt privacy technologies such as consent management, data discovery, or rights-fulfilment tools.",
    opportunity:
      "The strongest early opportunity may be digitally intensive, mid-market organisations that handle significant personal data but lack mature privacy operations. This remains a hypothesis — market size, buyer, and willingness to pay are still unvalidated.",
    proposedDirection:
      "Working focus: organisations with meaningful personal-data processing and immature privacy operations — not the final ICP. Product direction stays open until buyer interviews and spend data exist.",
  },
  strategicThesis:
    "Regulatory need is established. Customer need is increasingly evidenced. Commercial demand is still unproven. We are validating whether a DPDP operations software business exists — not assuming it.",
  businessPlan: {
    problem: {
      id: "bp-problem",
      fields: [
        {
          key: "statement",
          label: "Problem statement",
          value:
            "DPDP creates operational duties for organisations processing digital personal data. The business question is who will pay to operationalise them — not whether the duties exist.",
        },
        {
          key: "stakeholders",
          label: "Affected stakeholders",
          value:
            "Any organisation in scope under the Act — determined by processing activity, not company size. Legal, compliance, security, product, and operations teams are likely involved; economic buyer unvalidated.",
        },
        {
          key: "frequency",
          label: "Frequency",
          value:
            "Continuous processing, periodic rights requests, breach events, vendor onboarding, and policy change. Frequency of paid pain is unknown.",
        },
        {
          key: "severity",
          label: "Severity",
          value:
            "Regulatory need is real. EY survey: 83%+ had not begun comprehensive implementation; 77% not equipped for privacy technologies. Operational pain severity at individual accounts still unvalidated.",
        },
        {
          key: "alternatives",
          label: "Current alternatives",
          value:
            "Law firms, consultants, internal legal/compliance teams, spreadsheets, and legacy GRC tools. EY: 81% had not updated DPDP-aligned policies; 48% initiated gap assessments.",
        },
        {
          key: "evidence",
          label: "Evidence",
          value:
            "Linked claims cl-readiness-early, cl-tech-gap, cl-market-scope. EY survey (src-ey-survey).",
        },
      ],
    },
    customer: {
      id: "bp-customer",
      fields: [
        {
          key: "primaryIcp",
          label: "Primary ICP",
          value:
            "Working hypothesis only: digitally intensive organisations with meaningful personal-data processing and immature privacy operations. Not the final ICP.",
        },
        {
          key: "secondaryIcp",
          label: "Secondary ICP",
          value:
            "Strong research candidates: consumer/retail/e-commerce (50% initiated compliance journey per EY) and technology/SaaS (38.8%). Requires spend and buyer validation.",
        },
        {
          key: "buyer",
          label: "Buyer",
          value: "Unknown — possibly General Counsel, CISO, or Chief Compliance Officer.",
        },
        {
          key: "user",
          label: "User",
          value:
            "Unknown — likely privacy ops, legal ops, security, support, or engineering.",
        },
        {
          key: "economicBuyer",
          label: "Economic buyer",
          value: "Research required.",
        },
        {
          key: "characteristics",
          label: "Customer characteristics",
          value:
            "High digital personal-data volume, multi-product consent surfaces, vendor sprawl, audit expectations. Characterisation is speculative.",
        },
      ],
    },
    solution: {
      id: "bp-solution",
      fields: [
        {
          key: "concept",
          label: "Product concept",
          value:
            "A DPDP operations system: map processing, run notices/consent, fulfil rights, evidence security/retention, and govern processors — with an evidence trail a board or auditor can read.",
        },
        {
          key: "capabilities",
          label: "Core capabilities",
          value:
            "Processing inventory, notice/consent records, rights workflows, incident/breach records, processor register, SDF-readiness workspace. Scope is not frozen.",
        },
        {
          key: "differentiation",
          label: "Differentiation",
          value:
            "India-native obligation model, evidence-first UX, and operational workflow rather than policy documents. Differentiation vs GDPR suites is unproven.",
        },
        {
          key: "whyNow",
          label: "Why now?",
          value:
            "DPDP Rules notified 13 November 2025. Rules 3, 5–16, 22 and 23 commence 18 months after publication; corresponding core Act provisions follow the same timeline. Readiness window exists — budgeted software demand not proven.",
        },
      ],
    },
    businessModel: {
      id: "bp-model",
      fields: [
        {
          key: "revenue",
          label: "Revenue model",
          value: "Hypothesis: B2B SaaS subscription + implementation. Unvalidated.",
        },
        {
          key: "pricing",
          label: "Pricing hypothesis",
          value:
            "Research required. No willingness-to-pay interviews completed.",
        },
        {
          key: "acv",
          label: "ACV / ARPU",
          value: "Research required.",
        },
        {
          key: "sales",
          label: "Sales model",
          value:
            "Hypothesis: founder-led sales into legal/security; later partnerships with law firms/SIs. Unvalidated.",
        },
        {
          key: "margin",
          label: "Gross margin assumptions",
          value: "Research required. Implementation-heavy motion would compress margin.",
        },
      ],
    },
    gtm: {
      id: "bp-gtm",
      fields: [
        {
          key: "channels",
          label: "Acquisition channels",
          value:
            "Hypothesis: privacy communities, legal conferences, partner referrals. Unvalidated.",
        },
        {
          key: "motion",
          label: "Sales motion",
          value: "Hypothesis: consultative mid-market / enterprise. Research required.",
        },
        {
          key: "partnerships",
          label: "Partnerships",
          value:
            "Possible: law firms, DPO networks, cloud/SIs. No partnership evidence yet.",
        },
        {
          key: "distribution",
          label: "Distribution",
          value: "Direct for now. Marketplace/cloud distribution not evaluated.",
        },
        {
          key: "wedge",
          label: "Initial wedge",
          value:
            "Open strategic option: rights desk, consent records, or SDF readiness. No wedge chosen.",
        },
      ],
    },
    advantage: {
      id: "bp-advantage",
      fields: [
        {
          key: "technology",
          label: "Technology",
          value: "No proprietary tech advantage identified.",
        },
        {
          key: "data",
          label: "Data",
          value: "No proprietary data asset. Future: anonymised obligation patterns — speculative.",
        },
        {
          key: "distribution",
          label: "Distribution",
          value: "None yet.",
        },
        {
          key: "regulatory",
          label: "Regulatory expertise",
          value:
            "Potential if we build a reputable interpretation + workflow layer — currently an aspiration, not a moat.",
        },
        {
          key: "workflow",
          label: "Workflow integration",
          value: "Not built. Integration with ticketing/IdP/CRM is a hypothesis.",
        },
        {
          key: "network",
          label: "Network effects",
          value: "Unlikely early. Consent-manager adjacency is an open question.",
        },
        {
          key: "switching",
          label: "Switching costs",
          value:
            "Possible later if records and evidence live in-product. Not a current advantage.",
        },
      ],
    },
    risks: {
      id: "bp-risks",
      fields: [
        {
          key: "market",
          label: "Market risk",
          value:
            "Commercial demand unproven. EY: 45.3% cited budget limitations; 83%+ not begun comprehensive implementation. Market may favour consulting over software.",
        },
        {
          key: "regulatory",
          label: "Regulatory risk",
          value:
            "Rules, notifications, and SDF designations can change product scope. Legal interpretation risk is high.",
        },
        {
          key: "technology",
          label: "Technology risk",
          value:
            "Inventory/discovery is hard. Building a shallow policy tool is easy and undifferentiated.",
        },
        {
          key: "competition",
          label: "Competition",
          value:
            "Global GRC, Indian legal-tech, and Big-4/tool hybrids can occupy the category quickly.",
        },
        {
          key: "execution",
          label: "Execution",
          value: "Small team vs legal, product, and enterprise sales complexity.",
        },
        {
          key: "capital",
          label: "Capital",
          value: "Enterprise cycles and implementation may require more capital than assumed.",
        },
      ],
    },
  },
  marketDefinition:
    "Organisations that process digital personal data in India and must operationalise DPDP obligations. Scope is defined by processing activity under the Act — not by company size. India has 2.23 lakh+ DPIIT-recognised startups and 9.3 crore Udyam/UAP registrations; neither count is the addressable software market.",
  marketDrivers: [
    {
      id: "drv-1",
      title: "Phased Rules commencement",
      detail:
        "DPDP Rules notified 13 November 2025. Rules 1, 2 and 17–21 commenced immediately; Rule 4 after one year; Rules 3, 5–16, 22 and 23 after 18 months. Creates a defined readiness window — not proof of software spend.",
    },
    {
      id: "drv-2",
      title: "Low implementation readiness",
      detail:
        "EY 2026 survey (150+ professionals): 83%+ had not begun comprehensive implementation; nearly 70% not very familiar with the Act/Rules; 45.3% cited budget limitations.",
    },
    {
      id: "drv-3",
      title: "Privacy technology gap",
      detail:
        "EY: 77% not equipped to adopt privacy technologies (consent management, data discovery, rights fulfilment). 76.4% cited limited access to expertise.",
    },
    {
      id: "drv-4",
      title: "Sector-led readiness divergence",
      detail:
        "EY sector initiation rates: consumer/retail/e-commerce 50%, technology services 38.8%, financial services 34.7%, healthcare/life sciences 9.9%. Suggests uneven market entry points — not a single ICP.",
    },
  ],
  marketTrends: [
    {
      id: "tr-2023-act",
      date: "2023-08",
      title: "DPDP Act, 2023 published",
      description:
        "The Digital Personal Data Protection Act, 2023 published as India's principal digital personal-data statute.",
      sourceIds: ["src-act-s3"],
      significance: "Creates the legal category we are studying.",
    },
    {
      id: "tr-2025-rules",
      date: "2025-11-13",
      title: "DPDP Rules, 2025 notified",
      description:
        "MeitY/Gazette notification. Rules 1, 2 and 17–21 commenced immediately; Rule 4 after one year; Rules 3, 5–16, 22 and 23 after 18 months.",
      sourceIds: ["src-rules-2025"],
      significance: "Official commencement calendar for operational compliance.",
    },
    {
      id: "tr-2025-board",
      date: "2025-11-13",
      title: "Institutional provisions in force",
      description:
        "Immediate commencement of Rules 1, 2 and 17–21 alongside corresponding Act provisions for Board and rule-making architecture.",
      sourceIds: ["src-rules-2025"],
      significance: "Regulator and rulebook exist before core conduct rules bite.",
    },
    {
      id: "tr-2026-cm",
      date: "2026-11-13",
      title: "Rule 4 commencement (one year)",
      description:
        "Consent Manager registration-related provisions commence one year after the November 2025 notification.",
      sourceIds: ["src-rules-2025"],
      significance: "Consent Manager ecosystem becomes operational — product question open.",
    },
    {
      id: "tr-2027-core",
      date: "2027-05-13",
      title: "Core Rules commencement (18 months)",
      description:
        "Rules 3, 5–16, 22 and 23 and corresponding core Act provisions come into force 18 months after publication.",
      sourceIds: ["src-rules-2025"],
      significance: "Primary operational compliance deadline for most fiduciaries.",
    },
  ],
  painPoints: [
    {
      id: "pain-readiness",
      name: "Comprehensive DPDP implementation not started",
      severity: "high",
      frequency: "high",
      willingnessToPay: "unknown",
      existingSolutionQuality: "poor",
      notes: "EY: 83%+ had not begun comprehensive implementation.",
      evidenceIds: ["ev-ey-readiness"],
    },
    {
      id: "pain-policies",
      name: "DPDP-aligned policies and governance missing",
      severity: "high",
      frequency: "high",
      willingnessToPay: "unknown",
      existingSolutionQuality: "poor",
      notes: "EY: nearly 81% had not updated or drafted DPDP-aligned policies/governance.",
      evidenceIds: ["ev-ey-readiness"],
    },
    {
      id: "pain-tech",
      name: "Not equipped for privacy technologies",
      severity: "high",
      frequency: "high",
      willingnessToPay: "unknown",
      existingSolutionQuality: "poor",
      notes:
        "EY: 77% not equipped for consent management, data discovery, or rights-fulfilment tools.",
      evidenceIds: ["ev-ey-tech-gap"],
    },
    {
      id: "pain-expertise",
      name: "Limited privacy expertise",
      severity: "high",
      frequency: "high",
      willingnessToPay: "unknown",
      existingSolutionQuality: "uneven",
      notes: "EY: 76.4% cited limited access to expertise; nearly 70% not very familiar with Act/Rules.",
      evidenceIds: ["ev-ey-readiness"],
    },
    {
      id: "pain-budget",
      name: "Budget limitations",
      severity: "medium",
      frequency: "high",
      willingnessToPay: "unknown",
      existingSolutionQuality: "unknown",
      notes: "EY: 45.3% cited budget limitations. Does not prove zero spend — may push to consulting over software.",
      evidenceIds: ["ev-ey-readiness"],
    },
  ],
  demandSignals: [
    {
      id: "ds-ey-gap-assessment",
      signal: "Gap assessments underway",
      observation: "EY: 48% of surveyed organisations had initiated gap assessments.",
      implication: "Awareness translating to diagnostic activity — not yet proof of software procurement.",
      confidence: "medium",
      evidenceIds: ["ev-ey-readiness"],
    },
    {
      id: "ds-ey-processing-docs",
      signal: "Processing documentation started",
      observation:
        "EY: 44% documented processing activities; 38% categorised personal data and identified third-party processors.",
      implication: "Early operational work happening manually or via consultants.",
      confidence: "medium",
      evidenceIds: ["ev-ey-readiness"],
    },
    {
      id: "ds-ey-sector-leaders",
      signal: "Consumer and tech sectors lead readiness",
      observation:
        "EY sector initiation rates: consumer/retail/e-commerce 50%, technology services 38.8%.",
      implication: "Possible early-adopter segments — spend and buyer still unknown.",
      confidence: "medium",
      evidenceIds: ["ev-ey-sector"],
    },
    {
      id: "ds-esya-msme",
      signal: "MSME and AI segment under study",
      observation:
        "Esya Centre primary survey of 300 firms on DPDP impact on MSMEs and AI innovation.",
      implication: "Supports researching AI startups/SMBs as a segment. Does not prove software demand.",
      confidence: "low",
      evidenceIds: ["ev-esya-survey"],
    },
    {
      id: "ds-interviews",
      signal: "Primary buyer interviews",
      observation: "Not started.",
      implication: "Commercial demand remains the critical unknown.",
      confidence: "unresolved",
      evidenceIds: [],
    },
  ],
  marketSize: [
    {
      label: "TAM",
      status: "research-required",
      notes:
        "Do not use startup or MSME registration counts as TAM. India has 2.23 lakh+ DPIIT startups and 9.3 crore Udyam/UAP registrations — these measure business population, not privacy-software spend. Need in-scope org count × realistic wallet.",
    },
    {
      label: "SAM",
      status: "research-required",
      notes:
        "Requires a defensible filter: digitally intensive + meaningful personal data + immature privacy operations. Working ICP hypothesis exists; segment size unknown.",
    },
    {
      label: "SOM",
      status: "research-required",
      notes:
        "Blocked on buyer, pricing, sales motion, and 24-month capacity. EY budget-limitation data (45.3%) suggests spend constraints but not zero market.",
    },
  ],
  segments: [
    {
      id: "seg-enterprise",
      name: "Large enterprises",
      description:
        "High data exposure and ability to pay. Many already have mature legal, compliance, and security functions. Opportunity exists; sales and competition may be difficult.",
      companySize: "Large",
      industry: "Cross-sector",
      buyer: "Unknown — likely GC, CISO, or Head of Compliance",
      user: "GRC, legal ops, security",
      keyProblems: [
        "Layering DPDP onto existing programmes",
        "Board evidence and audit expectations",
        "Vendor and processor complexity",
      ],
      currentWorkflow: "Enterprise GRC + consultants + internal teams.",
      currentTools: ["Enterprise GRC", "SIEM", "Big-4 programmes"],
      regulatoryPressure: "High — but DPDP-specific software spend unvalidated.",
      willingnessToPay: "Unknown",
      buyingTrigger: "Hypothesis: audit, board directive, or SDF designation.",
      objections: ["Incumbent GRC sufficient", "Long procurement cycles"],
      evidenceIds: ["ev-ey-readiness"],
      confidence: "low",
      journey: {
        pain: "Need DPDP evidence without rebuilding the entire control environment.",
        currentSolution: "GRC suites and consulting.",
        gap: "DPDP-native operational layer that fits existing governance.",
        opportunity: "Embed or complement — if they will buy new software at all.",
      },
    },
    {
      id: "seg-bfsi",
      name: "Financial services",
      description:
        "High data exposure and ability to pay. Stronger existing compliance maturity makes this attractive as a market but potentially difficult as an initial wedge.",
      companySize: "Large, often group structures",
      industry: "BFSI",
      buyer: "Unknown — CISO, Chief Compliance, or Legal",
      user: "GRC, information security, compliance",
      keyProblems: [
        "Layering DPDP onto RBI/IRDAI/SEBI programmes",
        "Legacy core systems",
        "SDF possibility",
      ],
      currentWorkflow: "Heavy GRC programmes; privacy as a workstream.",
      currentTools: ["Enterprise GRC", "SIEM", "IAM", "Big-4 programmes"],
      regulatoryPressure: "Structurally high. EY: 34.7% had initiated compliance journey.",
      willingnessToPay: "Unknown",
      buyingTrigger: "Hypothesis: audit, SDF designation, or group directive.",
      objections: ["Incumbent GRC only", "Procurement cycle", "On-prem requirements"],
      evidenceIds: ["ev-ey-sector"],
      confidence: "low",
      journey: {
        pain: "Audit-grade DPDP evidence within existing control frameworks.",
        currentSolution: "GRC suites + consultants.",
        gap: "DPDP obligation mapping without parallel universe.",
        opportunity: "Mid-term segment — hard initial wedge.",
      },
    },
    {
      id: "seg-consumer-retail",
      name: "Consumer / retail / e-commerce",
      description:
        "Strong candidate. EY: 50% of surveyed organisations in this sector had initiated their compliance journey. Customer-data intensity likely high. Needs deeper research on spend and competitors.",
      companySize: "Mid-market to large",
      industry: "Consumer / retail / e-commerce",
      buyer: "Unknown",
      user: "Privacy ops, legal, product, support",
      keyProblems: [
        "Consent and notice across channels",
        "High principal volumes",
        "Third-party processors",
      ],
      currentWorkflow: "Legal policy + CMP + tickets + consultants.",
      currentTools: ["Consent banners", "Spreadsheets", "Law-firm memos"],
      regulatoryPressure: "Highest sector initiation rate in EY survey (50%).",
      willingnessToPay: "Unknown",
      buyingTrigger: "Hypothesis: customer trust, board deadline, enterprise customer questionnaires.",
      objections: ["Wait for enforcement", "Law firm is enough"],
      evidenceIds: ["ev-ey-sector"],
      confidence: "medium",
      journey: {
        pain: "Cannot prove notice, consent, and rights handling at scale.",
        currentSolution: "Policies, banners, consultants.",
        gap: "Operational system of record.",
        opportunity: "Leading wedge candidate — unvalidated spend.",
      },
    },
    {
      id: "seg-tech-saas",
      name: "Technology / SaaS",
      description:
        "Strong candidate. EY: 38.8% had initiated their compliance journey. Digitally native operations may make software adoption easier. Needs research on company counts, buyer, and willingness to pay.",
      companySize: "Mid-market to large",
      industry: "Technology services / SaaS",
      buyer: "Unknown",
      user: "Engineering, legal, security, product",
      keyProblems: [
        "Multi-product consent surfaces",
        "Processor/vendor sprawl",
        "Cross-border processing",
      ],
      currentWorkflow: "Trust centre + spreadsheets + engineering tickets.",
      currentTools: ["SOC2/Vanta-class", "CMP", "Jira"],
      regulatoryPressure: "EY: 38.8% initiated compliance journey.",
      willingnessToPay: "Unknown",
      buyingTrigger: "Hypothesis: enterprise sales blockers, investor diligence.",
      objections: ["Already SOC2 compliant", "Build in-house"],
      evidenceIds: ["ev-ey-sector"],
      confidence: "medium",
      journey: {
        pain: "DPDP obligations not mapped to product and vendor stack.",
        currentSolution: "Trust centre + custom answers.",
        gap: "Continuous DPDP operations tied to systems.",
        opportunity: "Software-friendly segment — spend unproven.",
      },
    },
    {
      id: "seg-ai-startups",
      name: "AI startups",
      description:
        "Emerging segment. Esya Centre surveyed 300 firms on DPDP's impact on MSMEs and AI innovation. Supports researching this segment — does not prove software demand.",
      companySize: "Startup to mid-market",
      industry: "AI / ML products and services",
      buyer: "Unknown",
      user: "Founders, engineering, legal (often fractional)",
      keyProblems: [
        "Training data and inference data governance",
        "Rapid product change",
        "Limited compliance headcount",
      ],
      currentWorkflow: "Ad hoc policies; founder-led compliance.",
      currentTools: ["Spreadsheets", "Legal templates", "Fractional counsel"],
      regulatoryPressure: "Emerging — regulatory attention on AI + data.",
      willingnessToPay: "Unknown",
      buyingTrigger: "Hypothesis: enterprise sales, funding diligence.",
      objections: ["Too early", "Too small to matter legally"],
      evidenceIds: ["ev-esya-survey"],
      confidence: "low",
      journey: {
        pain: "DPDP obligations unclear for AI data pipelines.",
        currentSolution: "Ignore or minimal policy.",
        gap: "Lightweight operational tooling for data-heavy startups.",
        opportunity: "Interesting niche — commercial case unproven.",
      },
    },
    {
      id: "seg-healthcare",
      name: "Healthcare / life sciences",
      description:
        "High data sensitivity and low readiness. EY: only 9.9% had initiated their compliance journey. Potentially attractive pain but likely higher implementation and regulatory complexity.",
      companySize: "Mid-market to large",
      industry: "Healthcare / life sciences",
      buyer: "Unknown",
      user: "Compliance, clinical ops, IT",
      keyProblems: [
        "Sensitive health-adjacent data",
        "Legacy systems",
        "Low readiness baseline",
      ],
      currentWorkflow: "Compliance programmes + consultants.",
      currentTools: ["Enterprise GRC", "Spreadsheets"],
      regulatoryPressure: "High sensitivity; EY: 9.9% initiated journey.",
      willingnessToPay: "Unknown",
      buyingTrigger: "Hypothesis: patient-data incidents, hospital-group directives.",
      objections: ["Other regulations dominate", "Complex implementation"],
      evidenceIds: ["ev-ey-sector"],
      confidence: "low",
      journey: {
        pain: "DPDP layered onto existing health-data compliance.",
        currentSolution: "Consultants and legacy GRC.",
        gap: "Sector-specific operational tooling.",
        opportunity: "High pain potential — hard go-to-market.",
      },
    },
    {
      id: "seg-smb-generic",
      name: "Generic SMBs",
      description:
        "Very large population, but company count alone is not useful. Many may have low data complexity and low willingness to pay. Requires further filtering — not a near-term ICP.",
      companySize: "Small to medium",
      industry: "Cross-sector",
      buyer: "Unknown",
      user: "Owner-operator, admin, outsourced IT",
      keyProblems: [
        "Limited compliance capacity",
        "Unclear in-scope status",
        "Budget constraints",
      ],
      currentWorkflow: "DIY or local consultant.",
      currentTools: ["Spreadsheets", "Templates"],
      regulatoryPressure: "Varies by processing activity.",
      willingnessToPay: "Unknown — likely low for many",
      buyingTrigger: "Unknown",
      objections: ["Too small", "Wait and see"],
      evidenceIds: ["ev-udyam-counts"],
      confidence: "unresolved",
      journey: {
        pain: "Obligations may apply but capacity is minimal.",
        currentSolution: "Nothing or cheap templates.",
        gap: "Affordable operational tooling — if they will pay.",
        opportunity: "Volume play — unvalidated economics.",
      },
    },
    {
      id: "seg-micro",
      name: "Micro businesses / freelancers",
      description:
        "Potential legal relevance depending on processing activities. Current commercial attractiveness appears low — likely limited software budgets. LOW PRIORITY / UNVALIDATED. Not claiming exemption from the Act.",
      companySize: "Micro",
      industry: "Cross-sector",
      buyer: "Owner",
      user: "Owner",
      keyProblems: ["Low budget", "Low awareness", "Minimal data ops"],
      currentWorkflow: "None or informal.",
      currentTools: ["None"],
      regulatoryPressure: "Depends on processing — commercial priority low.",
      willingnessToPay: "Unknown — likely very low",
      buyingTrigger: "Unknown",
      objections: ["Not relevant to us", "Cannot afford software"],
      evidenceIds: ["ev-udyam-counts"],
      confidence: "low",
      journey: {
        pain: "May have obligations but no operational capacity.",
        currentSolution: "Ignore or DIY.",
        gap: "Ultra-low-cost compliance — if market exists.",
        opportunity: "Deprioritised until evidence says otherwise.",
      },
    },
  ],
  regulations: [
    {
      id: "reg-landscape",
      title: "What the Indian DPDP regime is (working map)",
      topic: "landscape",
      regulationText:
        "India's DPDP framework comprises the Digital Personal Data Protection Act, 2023 and the Digital Personal Data Protection Rules, 2025, with phased commencement per the official Gazette notification.",
      requirement:
        "Track commenced provisions against official notification dates. Do not rely on secondary summaries alone for product copy.",
      whoIsAffected:
        "Organisations processing digital personal data within the Act's application — see Section 3. Not determined by company size alone.",
      businessImplication:
        "18-month window before core Rules bite. Readiness activity is visible in surveys; software spend is not proven.",
      productOpportunity:
        "Readiness workspace and commencement tracker — if organisations buy software rather than consulting.",
      evidenceIds: ["ev-rules-commencement", "ev-act-scope"],
      sourceIds: ["src-rules-2025", "src-act-s3"],
      confidence: "confirmed",
      contentKind: "research",
    },
    {
      id: "reg-act",
      title: "DPDP Act — application (Section 3)",
      topic: "act",
      regulationText:
        "Section 3: the Act applies to processing of digital personal data in India and, in specified circumstances, processing outside India connected to offering goods or services to Data Principals in India.",
      requirement:
        "Determine whether your processing activities fall within scope — independent of company size or startup/MSME status.",
      whoIsAffected: "Data Fiduciaries and Data Processors meeting the Act's application test.",
      businessImplication:
        "Market sizing must filter on processing activity, not registration counts (DPIIT startups, Udyam MSMEs).",
      productOpportunity:
        "Scope-assessment and obligation mapping for in-scope organisations.",
      evidenceIds: ["ev-act-scope"],
      sourceIds: ["src-act-s3"],
      confidence: "confirmed",
      contentKind: "research",
    },
    {
      id: "reg-rules",
      title: "DPDP Rules, 2025 — commencement",
      topic: "rules",
      regulationText:
        "Rules notified 13 November 2025. Rules 1, 2 and 17–21 commenced immediately. Rule 4 after one year. Rules 3, 5–16, 22 and 23 after 18 months.",
      requirement:
        "Build a commenced-provision tracker. Product modules should align to commencement dates, not marketing timelines.",
      whoIsAffected: "All in-scope fiduciaries as each rule commences.",
      businessImplication:
        "2026 is a build-and-prepare year; core operational Rules from May 2027.",
      productOpportunity:
        "Commencement-aware compliance roadmap tied to product features.",
      evidenceIds: ["ev-rules-commencement"],
      sourceIds: ["src-rules-2025"],
      confidence: "confirmed",
      contentKind: "research",
    },
    {
      id: "reg-compliance",
      title: "Compliance as an operating system (interpretation)",
      topic: "compliance",
      regulationText:
        "The statute does not say ‘buy software’. It creates duties. Interpreting those duties as a cross-functional operating system is our business interpretation.",
      requirement:
        "Need a legally reviewed inventory of commenced obligations, owners, evidence, and exceptions.",
      whoIsAffected: "Any in-scope fiduciary; intensity likely scales with processing volume and SDF status.",
      businessImplication:
        "Consulting can satisfy this with workshops. Software wins only if the operating system must run continuously.",
      productOpportunity:
        "Control + evidence + workflow. This is the core product bet — still unvalidated.",
      evidenceIds: [],
      sourceIds: ["src-act-s3"],
      confidence: "open-interpretation",
      contentKind: "placeholder",
    },
    {
      id: "reg-fiduciary",
      title: "Data Fiduciary obligations (high-level)",
      topic: "fiduciary",
      regulationText:
        "Public summaries describe Data Fiduciaries as determining purpose and means of processing, with duties around notice, lawful processing, accuracy, security, deletion, processor conduct, and children’s data (among others). Exact lists belong in annotated statute notes.",
      requirement:
        "A fiduciary needs named owners, processing purposes, notices, and demonstrable safeguards. (Restatement — validate.)",
      whoIsAffected: "Entities that determine purpose and means of processing digital personal data as defined.",
      businessImplication:
        "Accountability sits with the fiduciary even when processors do the work — if that reading holds.",
      productOpportunity:
        "Fiduciary control-plane: purposes, processors, notices, incidents, rights. Unvalidated demand.",
      evidenceIds: ["ev-act-scope"],
      sourceIds: ["src-act-s3"],
      confidence: "needs-legal-validation",
      contentKind: "placeholder",
    },
    {
      id: "reg-consent",
      title: "Consent (and adjacent lawful grounds)",
      topic: "consent",
      regulationText:
        "Public summaries describe consent as a primary ground, with specified qualities (free, informed, etc.) and certain legitimate uses alongside. Consent Manager is a distinct statutory concept in commentary. Do not equate CMP cookies with DPDP consent.",
      requirement:
        "Need the official notice content, consent withdrawal, and record-keeping mechanics from Act + Rules.",
      whoIsAffected: "Fiduciaries collecting/processing on consent; possibly registered Consent Managers later.",
      businessImplication:
        "Consent UX + records could be a wedge or a crowded feature. Consent Manager ecosystem is an open strategic fork.",
      productOpportunity:
        "Notice/consent system of record; possible Consent Manager adjacency. Highly contested.",
      evidenceIds: ["ev-rules-commencement"],
      sourceIds: ["src-act-s3", "src-rules-2025"],
      confidence: "needs-legal-validation",
      contentKind: "placeholder",
    },
    {
      id: "reg-rights",
      title: "Data Principal rights (high-level)",
      topic: "rights",
      regulationText:
        "Public summaries commonly list access, correction, erasure, grievance redressal, and nomination among principal rights. Exact scope, process, and timelines must be taken from commenced text.",
      requirement:
        "A channel to receive, identity-verify, route, fulfil, and evidence rights requests. Procedure is in Rules — verify.",
      whoIsAffected: "Every in-scope fiduciary that must honour principal rights once those sections commence.",
      businessImplication:
        "Looks like a ticketing + orchestration problem. Volume unknown; if low, not a standalone business.",
      productOpportunity:
        "Rights desk with system connectors. Classic privacy-tech category; differentiation unclear.",
      evidenceIds: ["ev-act-scope"],
      sourceIds: ["src-act-s3", "src-rules-2025"],
      confidence: "needs-legal-validation",
      contentKind: "placeholder",
    },
    {
      id: "reg-sdf",
      title: "Significant Data Fiduciary",
      topic: "sdf",
      regulationText:
        "Public summaries describe additional duties for Significant Data Fiduciaries (independent audits, DPIA-like assessments, and other measures) based on government designation using volume/sensitivity and related factors. Designation mechanics need official confirmation.",
      requirement:
        "If designated, extra governance, assessments, and audit evidence. Thresholds not to be guessed here.",
      whoIsAffected: "Entities designated as SDF — unknown list at research time in this workspace.",
      businessImplication:
        "A possible high-ACV segment — or a tiny list of giants who will build in-house / buy global GRC.",
      productOpportunity:
        "SDF readiness module. Attractive narrative; dangerous to build for an empty designation list.",
      evidenceIds: [],
      sourceIds: ["src-act-s3", "src-rules-2025"],
      confidence: "needs-legal-validation",
      contentKind: "placeholder",
    },
    {
      id: "reg-xborder",
      title: "Cross-border personal data",
      topic: "cross-border",
      regulationText:
        "Commentary commonly describes a mechanism allowing the Central Government to restrict transfers to notified countries/territories, rather than a GDPR-style adequacy copy. This is a sensitive interpretation — validate in the Act/Rules.",
      requirement:
        "Know where personal data goes, on whose instruction, and whether a restriction applies. Details TBD.",
      whoIsAffected: "Fiduciaries and processors with offshore tooling, clouds, GCCs, or group sharing.",
      businessImplication:
        "India-hosted positioning may be a sales story. It is not automatically a legal conclusion.",
      productOpportunity:
        "Transfer register + restriction watch. Useful feature; weak standalone product.",
      evidenceIds: [],
      sourceIds: ["src-act-s3"],
      confidence: "open-interpretation",
      contentKind: "placeholder",
    },
    {
      id: "reg-penalties",
      title: "Penalties and Board enforcement",
      topic: "penalties",
      regulationText:
        "Public commentary cites substantial financial penalties (figures such as ₹250 crore appear in secondary sources for certain failures). Amounts, heads of penalty, and Board procedure must be confirmed in the Act’s Schedule and commenced penalty provisions. Do not quote figures in customer materials from this workspace.",
      requirement:
        "Understand penalty heads, procedure, and appeals once those provisions commence.",
      whoIsAffected: "In-scope fiduciaries (and others specified).",
      businessImplication:
        "Fear sells workshops. Sustainable software demand needs routine operations, not only penalty panic.",
      productOpportunity:
        "Risk register / Board pack. Easy to pitch; easy to be vapourware.",
      evidenceIds: [],
      sourceIds: ["src-rules-2025"],
      confidence: "needs-legal-validation",
      contentKind: "placeholder",
    },
  ],
  competitors: [
    {
      id: "cmp-onetrust",
      company: "OneTrust (category reference)",
      website: "https://www.onetrust.com",
      category: "Global privacy / GRC platform",
      targetCustomer: "Large enterprises, often GDPR-led programmes",
      product: "Privacy, consent, GRC suite (broad)",
      coreCapability: "Enterprise privacy operations at suite scale",
      pricing: "Enterprise — public list pricing not relied on here",
      positioning: "Global standard; India/DPDP is an add-on narrative",
      funding: "Not researched in this workspace",
      geography: "Global",
      strengths: ["Breadth", "Brand in privacy centres of excellence"],
      weaknesses: [
        "Implementation weight",
        "DPDP-native-ness unassessed",
        "May overfit GDPR mental models",
      ],
      dpdpPositioning: "Placeholder — treat marketing claims as unverified.",
      differentiation: "Incumbent suite vs India-native workflow — unproven.",
      evidenceIds: [],
      sourceIds: ["src-competitor-notes"],
      contentKind: "placeholder",
    },
    {
      id: "cmp-securiti",
      company: "Securiti (category reference)",
      website: "https://securiti.ai",
      category: "Data command centre / privacy ops",
      targetCustomer: "Enterprises with discovery + privacy ops needs",
      product: "Data security, privacy, governance platform",
      coreCapability: "Discovery + automation narrative",
      pricing: "Enterprise — not verified here",
      positioning: "AI-led data command centre",
      funding: "Not researched in this workspace",
      geography: "Global, including India presence to verify",
      strengths: ["Discovery story", "Automation marketing"],
      weaknesses: ["Price/complexity for mid-market unknown", "DPDP depth unassessed"],
      dpdpPositioning: "Placeholder — needs a product teardown, not a homepage skim.",
      differentiation: "If we cannot match discovery, we need a different wedge.",
      evidenceIds: [],
      sourceIds: ["src-competitor-notes"],
      contentKind: "placeholder",
    },
    {
      id: "cmp-indian-legaltech",
      company: "Indian legal-tech / DPO tooling (cluster)",
      website: undefined,
      category: "Local privacy tools, templates, DPO retainers",
      targetCustomer: "India mid-market legal teams",
      product: "Policy packs, registers, lightweight portals",
      coreCapability: "Affordable documents + basic trackers",
      pricing: "Often retainer or cheap SaaS — unverified",
      positioning: "‘DPDP compliance made simple’",
      funding: "Mixed / unknown",
      geography: "India",
      strengths: ["Local language", "Price", "Legal relationships"],
      weaknesses: ["May stay template-deep", "Weak systems integration"],
      dpdpPositioning: "Literal DPDP branding; quality barbell unknown.",
      differentiation: "We must not become a prettier template pack.",
      evidenceIds: [],
      sourceIds: ["src-competitor-notes"],
      contentKind: "placeholder",
    },
    {
      id: "cmp-big4",
      company: "Big-4 and law-firm programmes",
      category: "Services, not perpetual software",
      targetCustomer: "Boards and regulated enterprises",
      product: "Readiness assessments, target operating models, managed services",
      coreCapability: "Trust, methodology, senior relationships",
      pricing: "Project / retainer — high",
      positioning: "Board-safe transformation",
      funding: "N/A",
      geography: "India + global",
      strengths: ["Credibility", "Change management"],
      weaknesses: ["Expensive to run year-round", "Software still needed underneath"],
      dpdpPositioning: "Will define the category language buyers hear first.",
      differentiation: "Partner vs compete is an open strategic decision.",
      evidenceIds: ["ev-ey-readiness"],
      sourceIds: ["src-competitor-notes"],
      contentKind: "placeholder",
    },
  ],
  comparison: {
    columns: [
      { id: "cmp-onetrust", label: "OneTrust-class", competitorId: "cmp-onetrust" },
      { id: "cmp-securiti", label: "Securiti-class", competitorId: "cmp-securiti" },
      { id: "cmp-indian-legaltech", label: "India legal-tech", competitorId: "cmp-indian-legaltech" },
      { id: "ours", label: "Our concept" },
    ],
    rows: [
      {
        id: "dim-consent",
        dimension: "Consent / notice records",
        cells: {
          "cmp-onetrust": { value: "Strong globally — DPDP fit unknown" },
          "cmp-securiti": { value: "Present — DPDP fit unknown" },
          "cmp-indian-legaltech": { value: "Templates / light portals" },
          ours: { value: "Hypothesised core — not built", notes: "Placeholder" },
        },
      },
      {
        id: "dim-discovery",
        dimension: "Data discovery",
        cells: {
          "cmp-onetrust": { value: "Available in suite" },
          "cmp-securiti": { value: "Core narrative" },
          "cmp-indian-legaltech": { value: "Usually absent" },
          ours: { value: "Not a near-term bet", notes: "Strategic gap" },
        },
      },
      {
        id: "dim-inventory",
        dimension: "Data / processing inventory",
        cells: {
          "cmp-onetrust": { value: "Mature RoPA-style" },
          "cmp-securiti": { value: "Strong" },
          "cmp-indian-legaltech": { value: "Registers / Excel" },
          ours: { value: "Planned — DPDP-shaped" },
        },
      },
      {
        id: "dim-rights",
        dimension: "Rights management",
        cells: {
          "cmp-onetrust": { value: "Mature" },
          "cmp-securiti": { value: "Present" },
          "cmp-indian-legaltech": { value: "Ticketing / email" },
          ours: { value: "Candidate wedge" },
        },
      },
      {
        id: "dim-automation",
        dimension: "Compliance automation",
        cells: {
          "cmp-onetrust": { value: "Broad workflows" },
          "cmp-securiti": { value: "Automation-led" },
          "cmp-indian-legaltech": { value: "Low" },
          ours: { value: "Unknown / not designed" },
        },
      },
      {
        id: "dim-monitoring",
        dimension: "Monitoring",
        cells: {
          "cmp-onetrust": { value: "Suite-dependent" },
          "cmp-securiti": { value: "Strong data posture story" },
          "cmp-indian-legaltech": { value: "Weak" },
          ours: { value: "Not in current concept" },
        },
      },
      {
        id: "dim-ai",
        dimension: "AI capabilities",
        cells: {
          "cmp-onetrust": { value: "Marketed" },
          "cmp-securiti": { value: "Central to brand" },
          "cmp-indian-legaltech": { value: "Mostly absent / gimmick" },
          ours: { value: "Research assistant later — not the product" },
        },
      },
      {
        id: "dim-pricing",
        dimension: "Pricing",
        cells: {
          "cmp-onetrust": { value: "Enterprise" },
          "cmp-securiti": { value: "Enterprise" },
          "cmp-indian-legaltech": { value: "Low–mid (assumed)" },
          ours: { value: "Research required" },
        },
      },
    ],
  },
  researchItems: [
    {
      id: "ri-rules-official",
      title: "DPDP Rules, 2025 — official commencement schedule",
      category: "regulation",
      summary:
        "MeitY/Gazette notification of DPDP Rules with phased commencement: immediate, one year, and 18 months.",
      keyFindings: [
        "Rules notified 13 November 2025",
        "Rules 1, 2, 17–21 commenced immediately",
        "Rule 4 after one year; Rules 3, 5–16, 22, 23 after 18 months",
      ],
      sourceId: "src-rules-2025",
      date: "2025-11-13",
      authorOrganisation: "MeitY / Gazette of India",
      relevance: "core",
      confidence: "high",
      tags: ["commencement", "rules", "official"],
      relatedHypothesisIds: ["hyp-why-now"],
      relatedCompetitorIds: [],
      relatedSegmentIds: [],
      relatedRegulationIds: ["reg-rules", "reg-landscape"],
      status: "reviewed",
      contentKind: "confirmed",
    },
    {
      id: "ri-ey-survey",
      title: "EY India DPDP readiness survey (150+ professionals)",
      category: "market",
      summary:
        "Secondary survey evidence on DPDP readiness, technology gaps, budget constraints, and sector initiation rates.",
      keyFindings: [
        "83%+ had not begun comprehensive implementation",
        "77% not equipped for privacy technologies",
        "45.3% cited budget limitations",
        "Sector leaders: consumer/retail 50%, tech 38.8%, BFSI 34.7%, healthcare 9.9%",
      ],
      sourceId: "src-ey-survey",
      date: "2026",
      authorOrganisation: "EY India",
      relevance: "core",
      confidence: "medium",
      tags: ["readiness", "survey", "sectors"],
      relatedHypothesisIds: ["hyp-why-now", "hyp-icp-digital"],
      relatedCompetitorIds: [],
      relatedSegmentIds: [
        "seg-consumer-retail",
        "seg-tech-saas",
        "seg-bfsi",
        "seg-healthcare",
      ],
      relatedRegulationIds: [],
      status: "reviewed",
      contentKind: "research",
    },
    {
      id: "ri-esya-msme-ai",
      title: "Esya Centre MSME and AI innovation survey",
      category: "customer",
      summary:
        "Primary survey of 300 firms on DPDP impact on MSMEs and AI innovation. Supports segment research — not software demand proof.",
      keyFindings: [
        "300 firms across urban and Tier-2 centres",
        "Focused on MSMEs and AI innovation",
        "Policy conclusions should not be treated as independent software-demand evidence",
      ],
      sourceId: "src-esya",
      date: "2026-03",
      authorOrganisation: "Esya Centre",
      relevance: "supporting",
      confidence: "medium",
      tags: ["msme", "ai", "primary-survey"],
      relatedHypothesisIds: ["hyp-icp-digital"],
      relatedCompetitorIds: [],
      relatedSegmentIds: ["seg-ai-startups", "seg-smb-generic"],
      relatedRegulationIds: [],
      status: "reviewed",
      contentKind: "research",
    },
    {
      id: "ri-market-context",
      title: "Startup and MSME population context (not TAM)",
      category: "market",
      summary:
        "Official counts of DPIIT startups and Udyam registrations. Useful market context — explicitly not addressable software market.",
      keyFindings: [
        "2.23 lakh+ DPIIT-recognised startups (31 March 2026)",
        "9.30 crore Udyam + UAP registrations (17 August 2026)",
        "Registration count ≠ DPDP software TAM",
      ],
      sourceId: "src-dpiit",
      relevance: "supporting",
      confidence: "high",
      tags: ["context", "not-tam"],
      relatedHypothesisIds: [],
      relatedCompetitorIds: [],
      relatedSegmentIds: ["seg-smb-generic", "seg-micro"],
      relatedRegulationIds: [],
      status: "reviewed",
      contentKind: "confirmed",
    },
    {
      id: "ri-buyer",
      title: "Buyer identification — still open",
      category: "customer",
      summary:
        "EY survey shows readiness gaps but not economic buyer, budget holder, or procurement path. Primary interviews required.",
      keyFindings: [
        "Economic buyer unknown",
        "Current spend on lawyers/consultants/internal staff unknown",
        "Schedule buyer interviews before product shaping",
      ],
      relevance: "core",
      confidence: "unresolved",
      tags: ["icp", "interviews", "buyer"],
      relatedHypothesisIds: ["hyp-legal-buyer"],
      relatedCompetitorIds: [],
      relatedSegmentIds: ["seg-consumer-retail", "seg-tech-saas"],
      relatedRegulationIds: [],
      status: "needs-review",
      contentKind: "research",
    },
  ],
  sources: [
    {
      id: "src-rules-2025",
      title: "Digital Personal Data Protection Rules, 2025",
      organisation: "MeitY / Gazette of India",
      type: "rules",
      url: "https://www.meity.gov.in/static/uploads/2025/11/53450e6e5dc0bfa85ebd78686cadad39.pdf",
      date: "2025-11-13",
      notes: "Official Rules PDF. Commencement schedule per notification.",
      contentKind: "confirmed",
    },
    {
      id: "src-act-s3",
      title: "DPDP Act, 2023 — Section 3 (Application)",
      organisation: "India Code",
      type: "statute",
      url: "https://www.indiacode.nic.in/show-data?abv=CEN&actid=AC_CEN_45_0_00003_2023-22_1763464807080&orderno=3&orgactid=AC_CEN_45_0_00003_2023-22_1763464807080&sectionId=101269&sectionno=3&statehandle=123456789%2F1362",
      notes: "Primary source for Act application scope.",
      contentKind: "confirmed",
    },
    {
      id: "src-ey-survey",
      title: "India's data privacy shift: Steering the DPDP compliance and readiness",
      organisation: "EY India",
      type: "report",
      url: "https://www.ey.com/en_in/insights/cybersecurity/india-s-data-privacy-shift-steering-the-dpdp-compliance-and-readiness",
      date: "2026",
      notes: "Survey of 150+ professionals. Secondary market evidence — not primary buyer interviews.",
      contentKind: "research",
    },
    {
      id: "src-dpiit",
      title: "Startup India FY2025-26",
      organisation: "DPIIT / PIB",
      type: "official",
      url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2253019&lang=1&reg=3",
      date: "2026-03-31",
      notes: "2.23 lakh+ DPIIT-recognised startups. Context only — not software TAM.",
      contentKind: "confirmed",
    },
    {
      id: "src-udyam",
      title: "Udyam Registration Factsheet",
      organisation: "Ministry of MSME",
      type: "official",
      url: "https://msmeregistration.gov.in/Default.aspx",
      date: "2026-08-17",
      notes: "9.30 crore Udyam + UAP registrations. Context only — not software TAM.",
      contentKind: "confirmed",
    },
    {
      id: "src-esya",
      title: "Survey-Based Assessment of DPDP Impact on Indian MSMEs and AI Innovation",
      organisation: "Esya Centre",
      type: "report",
      url: "https://www.esyacentre.org/documents/2026/03/26/a-survey-based-assessment-of-the-impact-of-the-digital-personal-data-protection-act-on-indian-msmes-and-ai-innovation",
      date: "2026-03",
      notes: "Primary survey of 300 firms. Supports AI/MSME segment research — not software demand proof.",
      contentKind: "research",
    },
    {
      id: "src-competitor-notes",
      title: "Competitor homepage / category notes",
      organisation: "Internal",
      type: "other",
      notes: "Not evidence. Tear-downs required.",
      contentKind: "placeholder",
    },
  ],
  claims: [
    {
      id: "cl-verdict",
      statement:
        "Regulatory need is established. Customer need is increasingly evidenced. Commercial demand is still unproven.",
      evidenceIds: [
        "ev-rules-commencement",
        "ev-act-scope",
        "ev-ey-readiness",
        "ev-ey-tech-gap",
      ],
      confidence: "medium",
      implication:
        "Proceed with customer discovery and spend validation before committing product or GTM.",
      contentKind: "research",
    },
    {
      id: "cl-readiness-early",
      statement:
        "DPDP readiness in India is still early — most surveyed organisations have not begun comprehensive implementation.",
      evidenceIds: ["ev-ey-readiness"],
      confidence: "medium",
      implication:
        "Market education phase may still dominate. Software buyers may be a subset of the in-scope population.",
      contentKind: "research",
    },
    {
      id: "cl-tech-gap",
      statement:
        "A large share of surveyed organisations are not equipped to adopt privacy technologies.",
      evidenceIds: ["ev-ey-tech-gap"],
      confidence: "medium",
      implication:
        "Gap exists — but could be filled by consulting, hiring, or software. Channel is unvalidated.",
      contentKind: "research",
    },
    {
      id: "cl-market-scope",
      statement:
        "DPDP scope is defined by processing of digital personal data — not by company size or startup/MSME status.",
      evidenceIds: ["ev-act-scope"],
      confidence: "high",
      implication:
        "Market sizing must filter on processing intensity, not registration counts.",
      contentKind: "confirmed",
    },
    {
      id: "cl-not-tam",
      statement:
        "India's startup and MSME registration counts are not the addressable DPDP software market.",
      evidenceIds: ["ev-dpiit-startups", "ev-udyam-counts"],
      confidence: "high",
      implication:
        "Do not use 2.23 lakh startups or 9.3 crore Udyam registrations in TAM slides.",
      contentKind: "research",
    },
  ],
  evidence: [
    {
      id: "ev-rules-commencement",
      sourceId: "src-rules-2025",
      excerpt:
        "Rules notified 13 November 2025. Rules 1, 2 and 17–21 commenced immediately; Rule 4 after one year; Rules 3, 5–16, 22 and 23 after 18 months.",
      location: "Commencement schedule",
      interpretation:
        "Official phased calendar. Core operational Rules expected May 2027 (18 months from Nov 2025).",
      contentKind: "confirmed",
    },
    {
      id: "ev-act-scope",
      sourceId: "src-act-s3",
      excerpt:
        "Act applies to processing of digital personal data in India and, in specified circumstances, processing outside India connected to offering goods/services to Data Principals in India.",
      location: "Section 3",
      interpretation:
        "Market definition must follow processing activity, not company-size proxies.",
      contentKind: "confirmed",
    },
    {
      id: "ev-ey-readiness",
      sourceId: "src-ey-survey",
      excerpt:
        "Survey of 150+ professionals: nearly 70% not very familiar with DPDP Act/Rules; 48% initiated gap assessments; 44% documented processing activities; 38% categorised personal data and identified third-party processors; nearly 81% had not updated/drafted DPDP-aligned policies; 83%+ had not begun comprehensive implementation; 45.3% cited budget limitations; 76.4% cited limited expertise.",
      interpretation:
        "Strong evidence of early readiness and resource gaps. Survey sample — not proof of software purchase intent.",
      contentKind: "research",
    },
    {
      id: "ev-ey-tech-gap",
      sourceId: "src-ey-survey",
      excerpt: "77% of surveyed professionals said they were not equipped to adopt privacy technologies such as consent management, data discovery, or rights-fulfilment tools.",
      interpretation:
        "Technology gap is real in survey data. Does not specify which solutions organisations would buy.",
      contentKind: "research",
    },
    {
      id: "ev-ey-sector",
      sourceId: "src-ey-survey",
      excerpt:
        "Sector compliance-journey initiation rates: consumer/retail/e-commerce 50%, technology services 38.8%, financial services 34.7%, metals/mining/energy 20%, healthcare/life sciences 9.9%.",
      interpretation:
        "Sector prioritisation signal for customer discovery. Not spend data.",
      contentKind: "research",
    },
    {
      id: "ev-dpiit-startups",
      sourceId: "src-dpiit",
      excerpt:
        "2.23 lakh+ DPIIT-recognised startups as of 31 March 2026; 55,200+ recognised during FY2025-26; 23.36 lakh+ direct jobs.",
      interpretation:
        "Measures startup ecosystem size. Only a subset processes meaningful personal data and may buy software.",
      contentKind: "confirmed",
    },
    {
      id: "ev-udyam-counts",
      sourceId: "src-udyam",
      excerpt:
        "As of 17 August 2026: 9.30 crore Udyam + UAP registrations (9.24 crore micro, 5.42 lakh small, 41,775 medium).",
      interpretation:
        "Measures formalised MSME population. Not addressable software market without processing-activity filter.",
      contentKind: "confirmed",
    },
    {
      id: "ev-esya-survey",
      sourceId: "src-esya",
      excerpt:
        "Primary survey of 300 firms across major urban centres and Tier-2 cities focused on DPDP impact on MSMEs and AI innovation.",
      interpretation:
        "Supports AI startup / MSME as a research segment. Report policy conclusions do not independently prove software demand.",
      contentKind: "research",
    },
  ],
  hypotheses: [
    {
      id: "hyp-why-now",
      statement:
        "The 2026–27 commencement window creates urgent, budgeted demand for DPDP operational software.",
      category: "market",
      whyWeBelieveIt:
        "Official Rules commencement calendar creates a planning deadline.",
      supportingEvidenceIds: ["ev-rules-commencement"],
      contradictingEvidenceIds: ["ev-ey-readiness", "ev-ey-tech-gap"],
      confidence: "low",
      validationMethod:
        "Buyer interviews on budget allocation; distinguish calendar urgency from purchase intent",
      status: "assumption",
      nextAction:
        "Interview 5 organisations: ask if 2027 deadline has a software budget line.",
    },
    {
      id: "hyp-icp-digital",
      statement:
        "Digitally intensive, mid-market organisations with immature privacy operations are the best initial ICP.",
      category: "customer",
      whyWeBelieveIt:
        "EY sector data shows consumer/retail (50%) and tech (38.8%) leading readiness; Esya supports AI/MSME research.",
      supportingEvidenceIds: ["ev-ey-sector", "ev-esya-survey"],
      contradictingEvidenceIds: [],
      confidence: "low",
      validationMethod:
        "Count organisations matching filter; validate buyer and spend in interviews",
      status: "investigating",
      nextAction:
        "Build segment filter criteria; interview 3 consumer/tech and 2 AI startup candidates.",
    },
    {
      id: "hyp-legal-buyer",
      statement: "The economic buyer is General Counsel / Head of Legal.",
      category: "customer",
      whyWeBelieveIt: "DPDP still framed as legal/compliance topic in survey sample.",
      supportingEvidenceIds: [],
      contradictingEvidenceIds: [],
      confidence: "unresolved",
      validationMethod: "Ask who signs and whose OKR it is in interviews.",
      status: "assumption",
      nextAction: "Add buyer map to every interview guide.",
    },
    {
      id: "hyp-gdpr-gap",
      statement: "Global GDPR platforms will not be ‘good enough’ for DPDP-native operations.",
      category: "competition",
      whyWeBelieveIt: "Different statutory vocabulary and Consent Manager / SDF constructs.",
      supportingEvidenceIds: [],
      contradictingEvidenceIds: [],
      confidence: "unresolved",
      validationMethod: "Product teardowns + practitioners who already bought a global suite",
      status: "investigating",
      nextAction: "Teardown OneTrust-class DPDP module vs a blank DPDP obligation list.",
    },
    {
      id: "hyp-fear-vs-ops",
      statement:
        "Buyers will pay for ongoing operations tooling, not only a one-time readiness workshop.",
      category: "business-model",
      whyWeBelieveIt:
        "Continuous duties under the Act; EY shows gap assessments (48%) ahead of comprehensive implementation (17%).",
      supportingEvidenceIds: ["ev-ey-readiness"],
      contradictingEvidenceIds: [],
      confidence: "low",
      validationMethod: "Distinguish project vs subscription in pricing conversations",
      status: "assumption",
      nextAction: "Ask ‘what happens after the workshop?’ in every call.",
    },
    {
      id: "hyp-wedge-rights",
      statement: "Data principal rights is the correct initial wedge.",
      category: "product",
      whyWeBelieveIt: "Familiar category, workflow-shaped, visible SLA.",
      supportingEvidenceIds: [],
      contradictingEvidenceIds: [],
      confidence: "unresolved",
      validationMethod: "Ask volume of requests today; if ~0, wedge dies",
      status: "assumption",
      nextAction: "Collect request-volume anecdotes; compare vs consent-records wedge.",
    },
    {
      id: "hyp-sdf-list",
      statement: "SDF designation will create a concentrated high-ACV segment.",
      category: "regulation",
      whyWeBelieveIt: "Extra duties in public summaries.",
      supportingEvidenceIds: [],
      contradictingEvidenceIds: [],
      confidence: "unresolved",
      validationMethod: "Track official designation; interview 2 likely SDF candidates",
      status: "investigating",
      nextAction: "Watch gazette / MeitY for designation — do not invent a list.",
    },
  ],
  questions: [
    {
      id: "q-icp-count",
      question:
        "How many Indian organisations fit the profile: digitally intensive + meaningful personal data + immature privacy operations?",
      whyItMatters: "Without a count, SAM stays blank and ICP remains a story.",
      owner: "Founder",
      nextAction: "Define filter criteria; scan LinkedIn/industry lists; no invented numbers",
      status: "open",
      priority: "critical",
      domain: "market",
      evidenceIds: ["ev-ey-sector", "ev-act-scope"],
    },
    {
      id: "q-buyer",
      question: "Who is the economic buyer for a DPDP operations tool?",
      whyItMatters: "Wrong buyer = unsalable product.",
      owner: "Founder",
      nextAction: "Interview protocol with org-chart and budget-line questions",
      status: "open",
      priority: "critical",
      domain: "customer",
      evidenceIds: [],
    },
    {
      id: "q-current-spend",
      question:
        "What are organisations currently spending on lawyers, consultants, and internal staff for DPDP readiness?",
      whyItMatters: "Reveals whether budget exists and where it flows today.",
      owner: "Founder",
      nextAction: "Ask spend ranges in interviews — do not invent ACV",
      status: "open",
      priority: "critical",
      domain: "business-model",
      evidenceIds: ["ev-ey-readiness"],
    },
    {
      id: "q-software-purchased",
      question: "What DPDP software products are organisations already purchasing?",
      whyItMatters: "Maps existing competition and category formation.",
      owner: "Founder",
      nextAction: "Interview question + competitor teardown",
      status: "open",
      priority: "critical",
      domain: "competition",
      evidenceIds: [],
    },
    {
      id: "q-competitor-pricing",
      question: "What are competitors charging?",
      whyItMatters: "Pricing hypothesis and ACV cannot be set without this.",
      owner: "Founder",
      nextAction: "Teardown pricing pages; ask buyers what they paid",
      status: "open",
      priority: "critical",
      domain: "competition",
      evidenceIds: [],
    },
    {
      id: "q-smb-preference",
      question: "Do SMBs prefer software, consulting, or DIY for DPDP compliance?",
      whyItMatters: "EY: 45.3% cited budget limitations — channel choice may differ by segment.",
      owner: "Founder",
      nextAction: "Segment interviews by company size",
      status: "open",
      priority: "important",
      domain: "customer",
      evidenceIds: ["ev-ey-readiness"],
    },
    {
      id: "q-purchase-trigger",
      question: "Which specific DPDP task causes enough pain to trigger a purchase?",
      whyItMatters: "Determines product wedge.",
      owner: "Founder",
      nextAction: "Force-rank pain points in interviews",
      status: "open",
      priority: "critical",
      domain: "product",
      evidenceIds: ["ev-ey-tech-gap"],
    },
    {
      id: "q-startup-wtp",
      question:
        "Are startups actually willing to pay, or is the market concentrated in mid-market and enterprise?",
      whyItMatters: "2.23 lakh+ startups exist — but most may not be buyers.",
      owner: "Founder",
      nextAction: "Interview 3 startups vs 3 mid-market; compare spend signals",
      status: "open",
      priority: "critical",
      domain: "business-model",
      evidenceIds: ["ev-dpiit-startups"],
    },
    {
      id: "q-software-vs-services",
      question: "Is this a software category or a services category with a thin portal?",
      whyItMatters: "Decides company shape, margin, and fundraising story.",
      currentAnswer:
        "Unresolved. EY: 83%+ not begun comprehensive implementation; 77% not equipped for privacy tech — may favour consulting.",
      owner: "Founder",
      nextAction: "Ask what they still lack after the last workshop",
      status: "in-progress",
      priority: "critical",
      domain: "business-model",
      evidenceIds: ["ev-ey-readiness", "ev-ey-tech-gap"],
    },
    {
      id: "q-consent-manager",
      question:
        "Should we become / integrate with / ignore the registered Consent Manager ecosystem?",
      whyItMatters: "Could be a platform bet or a dead end.",
      owner: "Founder + legal reviewer",
      nextAction: "Read Act/Rules on Consent Managers; map Rule 4 commencement",
      status: "open",
      priority: "important",
      domain: "regulation",
      evidenceIds: ["ev-rules-commencement"],
    },
    {
      id: "q-incumbents",
      question: "If a company already has OneTrust/Securiti, what do they still need?",
      whyItMatters: "Defines whether we compete, complement, or lose.",
      owner: "Founder",
      nextAction: "Two interviews with existing suite customers",
      status: "open",
      priority: "important",
      domain: "competition",
      evidenceIds: [],
    },
    {
      id: "q-notice-content",
      question: "What does a legally adequate DPDP notice contain once Rules commence?",
      whyItMatters: "If we ship a notice builder, wrong fields are liability.",
      owner: "Legal reviewer",
      nextAction: "Annotate Rules on notice; mark confirmed vs interpretation",
      status: "open",
      priority: "important",
      domain: "regulation",
      evidenceIds: [],
    },
  ],
  interviews: [
    {
      id: "int-plan-gc",
      title: "Planned: General Counsel, consumer internet",
      intervieweeRole: "General Counsel",
      organisationType: "Indian consumer digital platform",
      summary: "Not conducted. Guide ready: buyer, current tools, 2027 plan, software vs firm.",
      quotes: [],
      findings: [],
      relatedSegmentId: "seg-consumer-retail",
      evidenceIds: [],
      status: "planned",
    },
    {
      id: "int-plan-ciso",
      title: "Planned: CISO, BFSI",
      intervieweeRole: "CISO",
      organisationType: "Bank / large NBFC",
      summary: "Not conducted. Probe: GRC overlap, SDF expectation, procurement.",
      quotes: [],
      findings: [],
      relatedSegmentId: "seg-bfsi",
      evidenceIds: [],
      status: "planned",
    },
  ],
  researchLog: [
    {
      id: "log-1",
      date: "2026-08-18",
      title: "Workspace opened",
      note: "Created the research OS with evidence-first structure.",
    },
    {
      id: "log-2",
      date: "2026-08-18",
      title: "Market / customer discovery block ingested",
      note: "Added 6 verified sources (MeitY Rules, India Code s.3, EY survey, DPIIT, Udyam, Esya Centre). Updated thesis, 8 customer segments, claims, and open questions. Verdict: validate commercial demand.",
      relatedIds: [
        { kind: "source", id: "src-ey-survey" },
        { kind: "claim", id: "cl-verdict" },
      ],
    },
  ],
  timeline: [
    {
      id: "tl-act",
      date: "2023-08-11",
      kind: "regulation",
      title: "DPDP Act, 2023 published",
      description: "Primary statute. Section 3 defines application scope.",
      relatedIds: [{ kind: "source", id: "src-act-s3" }],
    },
    {
      id: "tl-rules",
      date: "2025-11-13",
      kind: "regulation",
      title: "DPDP Rules, 2025 notified",
      description: "Official Gazette notification with phased commencement.",
      relatedIds: [{ kind: "source", id: "src-rules-2025" }],
    },
    {
      id: "tl-ey-survey",
      date: "2026",
      kind: "discovery",
      title: "EY readiness survey published",
      description: "150+ professionals surveyed. 83%+ not begun comprehensive implementation.",
      relatedIds: [{ kind: "source", id: "src-ey-survey" }],
    },
    {
      id: "tl-workspace",
      date: "2026-08-18",
      kind: "discovery",
      title: "Verified research block ingested",
      description: "Market/customer discovery update. Commercial demand still unproven.",
    },
    {
      id: "tl-cm",
      date: "2026-11-13",
      kind: "regulation",
      title: "Rule 4 commencement (one year)",
      description: "Consent Manager registration-related provisions.",
      relatedIds: [{ kind: "source", id: "src-rules-2025" }],
    },
    {
      id: "tl-core",
      date: "2027-05-13",
      kind: "regulation",
      title: "Core Rules commencement (18 months)",
      description: "Rules 3, 5–16, 22 and 23 and corresponding Act provisions.",
      relatedIds: [{ kind: "source", id: "src-rules-2025" }],
    },
    {
      id: "tl-decision-verdict",
      date: "2026-08-18",
      kind: "decision",
      title: "Verdict: validate — regulatory need real, commercial opportunity unproven",
      description: "Proceed with customer discovery before product commitment.",
      relatedIds: [{ kind: "claim", id: "cl-verdict" }],
    },
  ],
  decisions: [
    {
      id: "dec-no-fake-tam",
      decision: "Do not publish TAM/SAM/SOM until we have sourced inputs.",
      context: "Investor-memo pressure to look quantitative vs research integrity.",
      optionsConsidered: [
        "Invent top-down India IT-spend maths",
        "Leave unresolved and show research required",
      ],
      chosenDirection: "Leave unresolved. Blank is more founder-honest.",
      why: "Fake precision would poison later fundraising and product choices.",
      evidenceIds: [],
      date: "2026-08-18",
      confidence: "high",
      whatWouldChangeOurMind:
        "A reproducible model with cited organisation counts and observed ACV.",
    },
    {
      id: "dec-label-legal",
      decision: "Every DPDP restatement is labelled placeholder / needs legal validation by default.",
      context: "Easy to accidentally ship blog-law as product copy.",
      optionsConsidered: [
        "Write confident summaries now",
        "Force confidence states in the data model",
      ],
      chosenDirection: "Forced confidence states + disclaimer.",
      why: "The application must distinguish facts, interpretations, and assumptions.",
      evidenceIds: ["ev-act-scope"],
      date: "2026-08-18",
      confidence: "high",
      whatWouldChangeOurMind:
        "Independent legal annotation of a section with primary excerpts attached.",
    },
    {
      id: "dec-no-product-lock",
      decision: "Do not freeze wedge (rights vs consent vs SDF) until interviews exist.",
      context: "Team wants a pitch. Evidence does not.",
      optionsConsidered: [
        "Pick rights desk now",
        "Keep three options alive on the opportunity map",
      ],
      chosenDirection: "Keep options exploring; product pages stay hypothetical.",
      why: "Wrong wedge is expensive. Research OS exists to delay false precision.",
      evidenceIds: [],
      date: "2026-08-18",
      confidence: "medium",
      whatWouldChangeOurMind: "Convergent interview evidence on paid urgency for one workflow.",
    },
    {
      id: "dec-verdict",
      decision: "Verdict: validate — regulatory need real, commercial opportunity unproven.",
      context: "Ingested EY survey and official Rules. Strong readiness gaps but no purchase evidence.",
      optionsConsidered: [
        "Proceed to build product now",
        "Pause for customer discovery",
      ],
      chosenDirection: "Pause for customer discovery and spend validation.",
      why: "Regulatory need established; customer need increasingly evidenced; commercial demand unproven.",
      evidenceIds: ["ev-ey-readiness", "ev-rules-commencement"],
      date: "2026-08-18",
      confidence: "medium",
      whatWouldChangeOurMind:
        "Primary interviews showing budgeted software purchases in target segments.",
    },
  ],
  options: [
    {
      id: "opt-ops-suite",
      name: "DPDP operations suite for fiduciaries",
      description: "Inventory, consent records, rights, processors, board evidence.",
      upside: "Category-defining if demand is real.",
      downside: "Competes with global suites; long implementation.",
      status: "preferred",
    },
    {
      id: "opt-consent-manager",
      name: "Registered Consent Manager",
      description: "Build toward the Consent Manager role described in public analyses.",
      upside: "Possibly regulated distribution.",
      downside: "Registration, liability, and chicken-egg network.",
      status: "exploring",
    },
    {
      id: "opt-processor-pack",
      name: "Processor evidence pack for IT/ITeS",
      description: "Faster sales into delivery organisations.",
      upside: "Clearer buyer, existing trust-centre habit.",
      downside: "Could be a feature; price ceiling.",
      status: "exploring",
    },
    {
      id: "opt-services",
      name: "Do not spawn a product — remain research / advisory",
      description: "If interviews show only project demand.",
      upside: "Avoids building the wrong company.",
      downside: "Not venture-scale.",
      status: "parked",
    },
  ],
  opportunities: [
    {
      id: "opp-system-of-record",
      name: "System of record for DPDP evidence",
      description: "If boards require continuous proof, not slides.",
      who: "Digitally intensive mid-market organisations with immature privacy ops",
      whyNow: "EY: 83%+ not begun comprehensive implementation; core Rules from May 2027",
      attractiveness: "unknown",
      relatedQuestionIds: ["q-software-vs-services", "q-purchase-trigger"],
    },
    {
      id: "opp-consumer-tech",
      name: "Consumer / retail / tech SaaS wedge",
      description: "EY sector leaders: consumer/retail 50%, technology 38.8% initiated compliance journey.",
      who: "Consumer/retail/e-commerce and technology/SaaS organisations",
      whyNow: "Highest observed readiness rates in EY survey",
      attractiveness: "unknown",
      relatedQuestionIds: ["q-icp-count", "q-startup-wtp"],
    },
    {
      id: "opp-rights",
      name: "Rights fulfilment desk",
      description: "If request volume is real.",
      who: "High-principal-count digital businesses",
      whyNow: "Rights sections as they commence",
      attractiveness: "unknown",
      relatedQuestionIds: ["q-buyer"],
    },
    {
      id: "opp-sdf",
      name: "SDF readiness",
      description: "If a designation list appears and extra duties are operationally heavy.",
      who: "Likely large digital / BFSI",
      whyNow: "Only after designation mechanics are real",
      attractiveness: "unknown",
      relatedQuestionIds: ["q-consent-manager"],
    },
  ],
  experiments: [
    {
      id: "exp-interviews-10",
      name: "10 ICP interviews in 30 days",
      hypothesisId: "hyp-icp-digital",
      method: "Structured conversations; no pitching",
      metric: "Count of ‘would pay for software this year’ vs ‘workshop only’",
      status: "planned",
    },
    {
      id: "exp-teardown",
      name: "Incumbent DPDP module teardown",
      hypothesisId: "hyp-gdpr-gap",
      method: "Score 8 comparison dimensions from actual product, not homepage",
      metric: "Gaps that are painful, not just missing checkboxes",
      status: "planned",
    },
  ],
  nextSteps: [
    {
      id: "ns-interviews",
      action: "Run the first five customer interviews",
      why: "Commercial demand is the blocking unknown — EY shows gaps, not purchases",
      owner: "Founder",
      relatedQuestionId: "q-buyer",
      priority: "critical",
    },
    {
      id: "ns-icp-filter",
      action: "Define and count the digitally-intensive ICP filter",
      why: "SAM cannot be estimated without a defensible segment count",
      owner: "Founder",
      relatedQuestionId: "q-icp-count",
      priority: "critical",
    },
    {
      id: "ns-teardown",
      action: "Complete two competitor teardowns including pricing",
      why: "Software purchases and competitor pricing are unknown",
      owner: "Founder",
      relatedQuestionId: "q-competitor-pricing",
      priority: "important",
    },
  ],
  progress: [
    {
      id: "market",
      label: "Market",
      coverage: "developing",
      confidence: "medium",
      notes: "EY survey + official Rules ingested. TAM/SAM/SOM still blank by design.",
    },
    {
      id: "customer",
      label: "Customer",
      coverage: "developing",
      confidence: "low",
      notes: "8 segment hypotheses with EY sector data. Zero buyer interviews.",
    },
    {
      id: "regulation",
      label: "Regulation",
      coverage: "substantial",
      confidence: "medium",
      notes: "Official Rules PDF and Act s.3 attached. Full section annotation pending.",
    },
    {
      id: "competition",
      label: "Competition",
      coverage: "early",
      confidence: "low",
      notes: "Category references only. Pricing and purchases unknown.",
    },
    {
      id: "product",
      label: "Product",
      coverage: "early",
      confidence: "unresolved",
      notes: "Wedge unchosen. Purchase-trigger question open.",
    },
    {
      id: "business-model",
      label: "Business Model",
      coverage: "early",
      confidence: "unresolved",
      notes: "Commercial demand unproven. Spend and pricing unknown.",
    },
    {
      id: "gtm",
      label: "GTM",
      coverage: "none",
      confidence: "unresolved",
      notes: "Blocked on ICP and buyer validation.",
    },
    {
      id: "technology",
      label: "Technology",
      coverage: "none",
      confidence: "unresolved",
      notes: "No architecture research yet.",
    },
  ],
}

export const PLACEHOLDER_LABEL = PLACEHOLDER
