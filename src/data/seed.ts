import type { Workspace } from "@/lib/types"

const PLACEHOLDER =
  "DEMO / PLACEHOLDER — research starter text, not a verified conclusion and not legal advice."

export const DISCLAIMER =
  "Placeholder workspace. DPDP notes are high-level public-structure reminders only. They are not legal advice, not statute text, and not a compliance opinion. Confirm every legal claim against the Act, Rules, and counsel before using it."

export const seedWorkspace: Workspace = {
  meta: {
    title: "DPDP Startup Research",
    subtitle:
      "Market intelligence, regulatory research and business strategy workspace",
    lastUpdated: "2026-08-18",
    researchStatus: "Early synthesis — most claims unvalidated",
    disclaimer: DISCLAIMER,
  },
  thesis: {
    problem:
      "Indian organisations must operationalise Digital Personal Data Protection (DPDP) obligations — notice, consent, records, rights, processors, and governance — but many still treat privacy as a legal memo rather than a repeatable operating system. (Placeholder problem framing.)",
    insight:
      "Public commentary and vendor activity suggest a 2026–27 readiness window between institutional setup (late 2025) and core enforcement (scheduled 2027). The working insight is that demand may concentrate on operationalising duties, not restating the law. (Placeholder — unvalidated.)",
    opportunity:
      "If organisations need workflow, evidence, and accountability — not just policy templates — there may be room for a DPDP-native operations product. The size, buyer, and willingness to pay are still research-required.",
    proposedDirection:
      "Currently considering a DPDP operations workspace for Indian data fiduciaries: notice/consent records, data-principal rights, processor accountability, and Significant Data Fiduciary readiness. This is a hypothesis, not a committed product.",
  },
  strategicThesis:
    "We are investigating whether the DPDP transition creates a durable software business in privacy operations for Indian companies — rather than another GDPR-cloned GRC tool or a pure consulting practice. The thesis is open. We have not yet validated ICP, ACV, or differentiation.",
  businessPlan: {
    problem: {
      id: "bp-problem",
      fields: [
        {
          key: "statement",
          label: "Problem statement",
          value:
            "DPDP creates operational duties (notices, consent, rights, security, retention, processor governance) that many Indian organisations are not set up to run as a system. (Placeholder.)",
        },
        {
          key: "stakeholders",
          label: "Affected stakeholders",
          value:
            "Legal/compliance, CISOs, CIOs, product/engineering, CX, HR, and processors serving Indian data principals. Buyer vs user still unvalidated.",
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
            "Public sources describe material penalties and reputational risk. Severity of day-to-day operational pain is not yet evidenced by customer interviews.",
        },
        {
          key: "alternatives",
          label: "Current alternatives",
          value:
            "Law firms, Big-4 programmes, GDPR platforms with India add-ons, spreadsheets, ticketing tools, consent banners. Comparative quality is research-required.",
        },
        {
          key: "evidence",
          label: "Evidence",
          value:
            "Linked claims cl-readiness and cl-operations. No primary customer evidence yet.",
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
            "Hypothesis: mid-to-large Indian consumer digital businesses and financial services data fiduciaries. Unvalidated.",
        },
        {
          key: "secondaryIcp",
          label: "Secondary ICP",
          value:
            "Hypothesis: GCCs / BPOs / SaaS processors handling Indian personal data. Unvalidated.",
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
            "Publicly described phased commencement: institutions live; consent-manager layer 2026; core duties widely reported for 2027. Timing is a market hypothesis.",
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
            "Demand may be one-off consulting, not software. Enforcement delay could push spend.",
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
    "Working definition: software and services that help organisations processing digital personal data in India meet DPDP operational obligations (records, consent/notice, rights, security evidence, processor governance) and related board/audit accountability. Adjacent markets include GDPR GRC, consent management, DLP, and legal process outsourcing. Boundaries are not settled.",
  marketDrivers: [
    {
      id: "drv-1",
      title: "Phased legal commencement",
      detail:
        "Public legal analyses describe a 2025–2027 phased rollout. That creates a planning window. It does not by itself prove software spend. (Placeholder.)",
    },
    {
      id: "drv-2",
      title: "Penalty and board accountability narrative",
      detail:
        "Commentary repeatedly cites significant financial penalties. Treat amounts and triggering facts as needing primary-source and legal validation.",
    },
    {
      id: "drv-3",
      title: "Existing GDPR tooling mismatch",
      detail:
        "Hypothesis: GDPR-native tools do not map cleanly to DPDP concepts (e.g. Consent Manager, legitimate uses, SDF designation). Unvalidated.",
    },
    {
      id: "drv-4",
      title: "Vendor and processor complexity",
      detail:
        "Hypothesis: Indian digital businesses rely on large processor ecosystems, creating accountability demand. Unvalidated.",
    },
  ],
  marketTrends: [
    {
      id: "tr-2023-act",
      date: "2023-08",
      title: "DPDP Act, 2023 published",
      description:
        "The Digital Personal Data Protection Act, 2023 was published as India’s principal digital personal-data statute. (Placeholder reminder — verify against official gazette text.)",
      sourceIds: ["src-act"],
      significance: "Creates the legal category we are studying.",
    },
    {
      id: "tr-2025-rules",
      date: "2025-11-13",
      title: "DPDP Rules and phased commencement publicly described",
      description:
        "Multiple legal analyses report notification of Digital Personal Data Protection Rules, 2025 and a phased commencement calendar. Confirm against official notifications.",
      sourceIds: ["src-rules-analysis"],
      significance: "Turns a statute into an operational countdown for companies.",
    },
    {
      id: "tr-2025-board",
      date: "2025-11-13",
      title: "Data Protection Board institutional provisions reported in force",
      description:
        "Analyses state that Board-related institutional provisions commenced immediately. This is a structural fact-pattern to verify, not a product brief.",
      sourceIds: ["src-rules-analysis"],
      significance: "Regulator exists as an institution before full conduct rules bite.",
    },
    {
      id: "tr-2026-cm",
      date: "2026-11-13",
      title: "Consent Manager registration layer (reported)",
      description:
        "Public analyses describe Consent Manager registration provisions commencing one year after the November 2025 notification. Verify before relying.",
      sourceIds: ["src-rules-analysis"],
      significance: "May create a registered intermediary ecosystem — open product question.",
    },
    {
      id: "tr-2027-core",
      date: "2027-05-13",
      title: "Core obligations / enforcement window (reported)",
      description:
        "Widely reported date for remaining substantive duties. Treat as research, not calendar gospel, until confirmed in official commencement instruments.",
      sourceIds: ["src-rules-analysis"],
      significance: "The working ‘why now’ for a 2026 build year.",
    },
  ],
  painPoints: [
    {
      id: "pain-inventory",
      name: "No reliable map of personal data processing",
      severity: "high",
      frequency: "high",
      willingnessToPay: "unknown",
      existingSolutionQuality: "uneven",
      notes:
        "Hypothesis: spreadsheets and tribal knowledge. No interview confirmation yet.",
      evidenceIds: [],
    },
    {
      id: "pain-consent",
      name: "Notice and consent not operationalised as records",
      severity: "high",
      frequency: "high",
      willingnessToPay: "unknown",
      existingSolutionQuality: "poor",
      notes: "CMP banners ≠ DPDP notice/consent evidence. Unvalidated in India accounts.",
      evidenceIds: [],
    },
    {
      id: "pain-rights",
      name: "Data principal rights handled ad hoc",
      severity: "medium",
      frequency: "medium",
      willingnessToPay: "unknown",
      existingSolutionQuality: "poor",
      notes: "Volume and SLA pain unknown without interviews.",
      evidenceIds: [],
    },
    {
      id: "pain-vendors",
      name: "Processor / vendor accountability is informal",
      severity: "high",
      frequency: "high",
      willingnessToPay: "unknown",
      existingSolutionQuality: "uneven",
      notes: "Possible wedge. Evidence missing.",
      evidenceIds: [],
    },
    {
      id: "pain-board",
      name: "Board wants readiness evidence, teams have slides",
      severity: "medium",
      frequency: "medium",
      willingnessToPay: "unknown",
      existingSolutionQuality: "poor",
      notes: "Consulting-shaped demand risk: one-off decks, not software.",
      evidenceIds: [],
    },
  ],
  demandSignals: [
    {
      id: "ds-commentary",
      signal: "Surge in DPDP explainers and law-firm briefings",
      observation:
        "Readily observable public content from 2025–26. Shows attention, not budget.",
      implication: "Awareness is high among legal readers. Buyer intent unknown.",
      confidence: "medium",
      evidenceIds: ["ev-lawfirm-briefings"],
    },
    {
      id: "ds-vendor",
      signal: "Existing GRC and consent vendors messaging ‘DPDP ready’",
      observation:
        "Marketing pages proliferate. Does not prove product-market fit.",
      implication: "Category is contested; incumbents will relabel.",
      confidence: "medium",
      evidenceIds: [],
    },
    {
      id: "ds-interviews",
      signal: "Primary customer interviews",
      observation: "Not started.",
      implication: "Demand quality is an open critical question.",
      confidence: "unresolved",
      evidenceIds: [],
    },
  ],
  marketSize: [
    {
      label: "TAM",
      status: "research-required",
      notes:
        "Do not invent spend. Need: number of in-scope organisations × realistic software wallet for privacy ops. No reliable TAM sourced yet.",
    },
    {
      label: "SAM",
      status: "research-required",
      notes:
        "Need a defensible ICP (sector, size, digital intensity) before SAM. Currently blank on purpose.",
    },
    {
      label: "SOM",
      status: "research-required",
      notes:
        "SOM requires sales motion, capacity, and 24-month coverage. Not estimable yet.",
    },
  ],
  segments: [
    {
      id: "seg-digital-consumer",
      name: "Indian consumer digital platforms",
      description:
        "Apps and web businesses with large Indian user bases (fintech, ecommerce, marketplace, consumer internet). Placeholder ICP, not confirmed.",
      companySize: "Mid-market to large; high transaction volume",
      industry: "Consumer internet / marketplaces / fintech-adjacent",
      buyer: "Unvalidated — GC / CISO / Head of Compliance",
      user: "Unvalidated — privacy ops, legal ops, product, support",
      keyProblems: [
        "Fragmented consent across products",
        "Vendor sprawl",
        "Rights requests hitting multiple systems",
      ],
      currentWorkflow: "Legal policy + engineering tickets + CMP + shared drives. (Assumed.)",
      currentTools: ["Consent banners", "Jira / ServiceNow", "Spreadsheets", "Law-firm memos"],
      regulatoryPressure: "High visibility; large principal populations. Pressure not measured.",
      willingnessToPay: "Unknown",
      buyingTrigger: "Hypothesis: board deadline, incident, customer/enterprise questionnaire.",
      objections: ["We will wait for enforcement", "Law firm is enough", "GDPR tool already bought"],
      evidenceIds: [],
      confidence: "low",
      journey: {
        pain: "Cannot prove how digital personal data is noticed, consented, shared, and erased.",
        currentSolution: "Policies, banners, and consultants.",
        gap: "Continuous operational record with owners and evidence.",
        opportunity: "System of record for DPDP operations — if buyers will pay for software.",
      },
    },
    {
      id: "seg-bfsi",
      name: "BFSI and regulated financial services",
      description:
        "Banks, NBFCs, insurers, and large fintechs already used to regulators. Placeholder.",
      companySize: "Large, often group structures",
      industry: "BFSI",
      buyer: "Unvalidated — CISO / Chief Compliance / Legal",
      user: "GRC, information security, DPO-equivalent roles",
      keyProblems: [
        "Layering DPDP onto existing RBI/IRDAI/SEBI programmes",
        "SDF possibility",
        "Legacy core systems",
      ],
      currentWorkflow: "Heavy GRC programmes; privacy may be a workstream, not a product.",
      currentTools: ["Enterprise GRC", "SIEM", "IAM", "Big-4 programmes"],
      regulatoryPressure: "Structurally high — but DPDP-specific spend unknown.",
      willingnessToPay: "Unknown; may prefer incumbents.",
      buyingTrigger: "Hypothesis: SDF designation, audit, or group directive.",
      objections: ["Incumbent GRC only", "Procurement cycle", "Need on-prem"],
      evidenceIds: [],
      confidence: "low",
      journey: {
        pain: "Need audit-grade evidence without creating a parallel universe to existing GRC.",
        currentSolution: "GRC suites + consultants.",
        gap: "DPDP-specific obligation mapping that sits in current control environment.",
        opportunity: "Embed, not replace — or lose to ServiceNow/OneTrust-class tools.",
      },
    },
    {
      id: "seg-processors",
      name: "IT/ITeS, GCCs and SaaS processors",
      description:
        "Companies processing Indian personal data for other fiduciaries. Placeholder.",
      companySize: "Mid to large delivery organisations",
      industry: "IT services / SaaS / GCC",
      buyer: "Unvalidated — InfoSec / Legal / client-facing compliance",
      user: "Delivery compliance, security, account teams",
      keyProblems: [
        "Fiduciary contract flow-down",
        "Multi-client isolation evidence",
        "Cross-border processing narratives",
      ],
      currentWorkflow: "ISO/SOC evidence reused for client questionnaires.",
      currentTools: ["Trust centers", "Vanta/Drata-class", "Contract CLMs"],
      regulatoryPressure: "Client-driven more than regulator-driven — hypothesis.",
      willingnessToPay: "Unknown",
      buyingTrigger: "Enterprise RFP / fiduciary instruction.",
      objections: ["Already SOC2", "Each client wants a different questionnaire"],
      evidenceIds: [],
      confidence: "low",
      journey: {
        pain: "Cannot produce DPDP-shaped evidence for many fiduciaries at once.",
        currentSolution: "Trust centre + custom answers.",
        gap: "Reusable processor accountability pack mapped to DPDP language.",
        opportunity: "Possible faster sales cycle — or a feature, not a company.",
      },
    },
  ],
  regulations: [
    {
      id: "reg-landscape",
      title: "What the Indian DPDP regime is (working map)",
      topic: "landscape",
      regulationText:
        "India’s DPDP framework is publicly described as the Digital Personal Data Protection Act, 2023 plus Digital Personal Data Protection Rules, 2025, implemented in phases. This workspace stores a map, not a substitute for the instruments.",
      requirement:
        "Organisations should treat commencement dates, definitions, and duties as items to verify in official text — not `as blogged`.",
      whoIsAffected:
        "Persons and organisations processing digital personal data in contexts the Act applies to. Scope details need statutory confirmation.",
      businessImplication:
        "2026 is widely framed as a build-and-test year before 2027 core duties. That is an industry narrative to verify, not a business plan.",
      productOpportunity:
        "Readiness workspace, obligation tracker, and evidence trail. Opportunity exists only if this becomes software spend.",
      evidenceIds: ["ev-phased-rollout"],
      sourceIds: ["src-act", "src-rules-analysis"],
      confidence: "needs-legal-validation",
      contentKind: "placeholder",
    },
    {
      id: "reg-act",
      title: "DPDP Act, 2023 — structure to study",
      topic: "act",
      regulationText:
        "The Act is the primary statute. Public summaries describe roles (Data Principal, Data Fiduciary, Data Processor), processing grounds (including consent and certain legitimate uses), principal rights, SDF, cross-border mechanism, Board, and penalties. Do not treat this sentence as the Act.",
      requirement:
        "Read the official Act text section-by-section. This product must cite sections, not blogs, before any ‘requirement engine’ ships.",
      whoIsAffected: "In-scope fiduciaries, processors, and principals under the Act’s application provisions.",
      businessImplication:
        "Product information architecture should follow statutory concepts, not GDPR export labels.",
      productOpportunity:
        "Obligation graph mapped to sections + Rules. High research cost; high potential defensibility.",
      evidenceIds: ["ev-act-exists"],
      sourceIds: ["src-act"],
      confidence: "needs-legal-validation",
      contentKind: "placeholder",
    },
    {
      id: "reg-rules",
      title: "Rules & notifications — operational layer",
      topic: "rules",
      regulationText:
        "Legal analyses report that the Digital Personal Data Protection Rules, 2025 and commencement notifications set the phased calendar and operational mechanics (notice manner, safeguards, breach notification, rights procedure, etc.). Confirm against official gazette / MeitY publications.",
      requirement:
        "Track each rule and commencement date as a first-class research object. Do not collapse ‘the Rules’ into one blob.",
      whoIsAffected: "The same population as the Act, as each commenced provision applies.",
      businessImplication:
        "Software requirements will change when a rule commences, not when a LinkedIn post appears.",
      productOpportunity:
        "A living commencement tracker tied to product modules. Useful even as a research artefact.",
      evidenceIds: ["ev-phased-rollout"],
      sourceIds: ["src-rules-analysis"],
      confidence: "needs-legal-validation",
      contentKind: "placeholder",
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
      sourceIds: ["src-act"],
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
      evidenceIds: ["ev-act-exists"],
      sourceIds: ["src-act"],
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
      evidenceIds: ["ev-phased-rollout"],
      sourceIds: ["src-act", "src-rules-analysis"],
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
      evidenceIds: ["ev-act-exists"],
      sourceIds: ["src-act", "src-rules-analysis"],
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
      sourceIds: ["src-act", "src-rules-analysis"],
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
      sourceIds: ["src-act"],
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
      evidenceIds: ["ev-penalty-commentary"],
      sourceIds: ["src-rules-analysis"],
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
      evidenceIds: ["ev-lawfirm-briefings"],
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
      id: "ri-phased",
      title: "Phased commencement of Act + Rules (secondary analyses)",
      category: "regulation",
      summary:
        "Multiple law-firm analyses describe an 18-month phased commencement from mid-November 2025, with a Consent Manager layer at ~12 months and core duties at ~18 months. Use as a map to official notifications only.",
      keyFindings: [
        "Institutional Board provisions reported in force first",
        "Consent Manager registration described for Nov 2026",
        "Core conduct and penalties widely reported for May 2027",
      ],
      sourceId: "src-rules-analysis",
      date: "2025-11",
      authorOrganisation: "Various law-firm secondary sources",
      relevance: "core",
      confidence: "medium",
      tags: ["commencement", "rules", "timeline"],
      relatedHypothesisIds: ["hyp-why-now"],
      relatedCompetitorIds: [],
      relatedSegmentIds: [],
      relatedRegulationIds: ["reg-rules", "reg-landscape"],
      status: "reviewed",
      contentKind: "placeholder",
    },
    {
      id: "ri-gdpr-mismatch",
      title: "Hypothesis note: GDPR tools may mis-model DPDP",
      category: "competition",
      summary:
        "Working research note, not a finding: DPDP introduces concepts (Consent Manager, legitimate uses framing, SDF designation) that may not map 1:1 to GDPR RoPA/DPIA products.",
      keyFindings: [
        "Need a concept map GDPR vs DPDP",
        "Need teardowns of 3 incumbent UIs",
      ],
      relevance: "supporting",
      confidence: "low",
      tags: ["gdpr", "product"],
      relatedHypothesisIds: ["hyp-gdpr-gap"],
      relatedCompetitorIds: ["cmp-onetrust", "cmp-securiti"],
      relatedSegmentIds: [],
      relatedRegulationIds: ["reg-consent"],
      status: "needs-review",
      contentKind: "placeholder",
    },
    {
      id: "ri-buyer",
      title: "Buyer identification — empty file",
      category: "customer",
      summary: "No interviews. Buyer, budget holder, and procurement path unknown.",
      keyFindings: ["Schedule 10 conversations before product shaping"],
      relevance: "core",
      confidence: "unresolved",
      tags: ["icp", "interviews"],
      relatedHypothesisIds: ["hyp-legal-buyer"],
      relatedCompetitorIds: [],
      relatedSegmentIds: ["seg-digital-consumer"],
      relatedRegulationIds: [],
      status: "needs-review",
      contentKind: "placeholder",
    },
    {
      id: "ri-penalty-discourse",
      title: "Penalty figures in secondary commentary",
      category: "market",
      summary:
        "Secondary sources repeat large financial penalty figures. Useful as a demand narrative; dangerous as a cited fact until tied to the Schedule and commenced sections.",
      keyFindings: [
        "Do not use penalty numbers in external materials from this file",
        "Need official schedule excerpt as evidence object",
      ],
      sourceId: "src-rules-analysis",
      relevance: "supporting",
      confidence: "low",
      tags: ["penalties", "messaging"],
      relatedHypothesisIds: ["hyp-fear-vs-ops"],
      relatedCompetitorIds: ["cmp-big4"],
      relatedSegmentIds: [],
      relatedRegulationIds: ["reg-penalties"],
      status: "reviewed",
      contentKind: "placeholder",
    },
  ],
  sources: [
    {
      id: "src-act",
      title: "Digital Personal Data Protection Act, 2023 (official text to attach)",
      organisation: "Government of India",
      type: "statute",
      notes:
        "Placeholder source card. Paste official URL / gazette identifier when attached. Do not quote from memory in product copy.",
      contentKind: "placeholder",
    },
    {
      id: "src-rules-analysis",
      title: "Secondary analyses of DPDP Rules, 2025 and commencement",
      organisation: "Law-firm / professional commentary (cluster)",
      type: "legal-analysis",
      url: "https://www.azbpartners.com/bank/indias-digital-personal-data-protection-act-phased-rollout-and-key-compliance-milestones/",
      date: "2025-11",
      notes:
        "Cluster card for briefing notes. Promote individual firms to their own Source once we excerpt properly.",
      contentKind: "placeholder",
    },
    {
      id: "src-competitor-notes",
      title: "Competitor homepage / category notes",
      organisation: "Internal",
      type: "other",
      notes: "Not evidence. Tear-downs required.",
      contentKind: "placeholder",
    },
    {
      id: "src-internal-thesis",
      title: "Internal working thesis",
      organisation: "This workspace",
      type: "other",
      notes: "Not an external source. Exists so claims can be traced to ‘our interpretation’.",
      contentKind: "placeholder",
    },
  ],
  claims: [
    {
      id: "cl-readiness",
      statement:
        "Indian organisations are entering a DPDP readiness period between institutional commencement and full operational duties.",
      evidenceIds: ["ev-phased-rollout"],
      confidence: "medium",
      implication:
        "There is a calendar-shaped window in which a product could be sold as ‘prepare now’. Calendar ≠ budget.",
      contentKind: "placeholder",
    },
    {
      id: "cl-operations",
      statement:
        "DPDP compliance will require continuous operations (records, requests, vendors), not a one-time legal memo.",
      evidenceIds: [],
      confidence: "low",
      implication: "This is the software company’s load-bearing assumption. It is not evidenced.",
      contentKind: "placeholder",
    },
    {
      id: "cl-investment",
      statement:
        "Indian organisations are increasingly investing in privacy compliance.",
      evidenceIds: ["ev-lawfirm-briefings"],
      confidence: "medium",
      implication:
        "Attention and briefing volume are visible. Incremental software budget is not.",
      contentKind: "placeholder",
    },
  ],
  evidence: [
    {
      id: "ev-phased-rollout",
      sourceId: "src-rules-analysis",
      excerpt:
        "Secondary analyses describe a three-phase commencement: immediate institutional provisions (Nov 2025), Consent Manager-related provisions (~Nov 2026), remaining core duties (~May 2027).",
      interpretation:
        "Useful planning scaffold. Not a substitute for reading the commencement notifications.",
      contentKind: "placeholder",
    },
    {
      id: "ev-act-exists",
      sourceId: "src-act",
      excerpt:
        "The Digital Personal Data Protection Act, 2023 is the published statute establishing the regime’s vocabulary and duties.",
      interpretation:
        "Confirmed at the level of ‘the Act exists’. Individual sections remain to be annotated.",
      contentKind: "placeholder",
    },
    {
      id: "ev-lawfirm-briefings",
      sourceId: "src-rules-analysis",
      excerpt:
        "A large volume of 2025–26 professional briefings exists on DPDP commencement and board preparedness.",
      interpretation:
        "Shows professional-services mobilisation. Weak evidence of SaaS demand.",
      contentKind: "placeholder",
    },
    {
      id: "ev-penalty-commentary",
      sourceId: "src-rules-analysis",
      excerpt:
        "Commentary repeating large maximum penalties (including figures such as ₹250 crore in secondary writing).",
      interpretation:
        "Treat as unverified until tied to the official Schedule and commenced penalty sections. Do not reuse the number as ours.",
      contentKind: "placeholder",
    },
  ],
  hypotheses: [
    {
      id: "hyp-why-now",
      statement:
        "The 2026–27 commencement window creates urgent, budgeted demand for DPDP operational software.",
      category: "market",
      whyWeBelieveIt: "Phased calendar + penalty narrative + vendor ‘DPDP ready’ pages.",
      supportingEvidenceIds: ["ev-phased-rollout", "ev-lawfirm-briefings"],
      contradictingEvidenceIds: [],
      confidence: "low",
      validationMethod: "10 buyer interviews; 3 budget-line questions; wait-vs-buy signals",
      status: "assumption",
      nextAction: "Interview legal and CISO buyers at 3 digital businesses and 2 banks.",
    },
    {
      id: "hyp-legal-buyer",
      statement: "The economic buyer is General Counsel / Head of Legal.",
      category: "customer",
      whyWeBelieveIt: "Privacy is still framed as a legal topic in India commentary.",
      supportingEvidenceIds: ["ev-lawfirm-briefings"],
      contradictingEvidenceIds: [],
      confidence: "low",
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
      whyWeBelieveIt: "Continuous duties (rights, vendors, records) if our reading of the Act holds.",
      supportingEvidenceIds: [],
      contradictingEvidenceIds: ["ev-lawfirm-briefings"],
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
      id: "q-tam",
      question: "Who actually spends on privacy software in India today, and how much?",
      whyItMatters: "Without this, TAM/SAM/SOM stay honestly blank.",
      owner: "Founder",
      nextAction: "Partner or analyst scan + interview probes — no invented numbers",
      status: "open",
      priority: "critical",
      domain: "market",
      evidenceIds: [],
    },
    {
      id: "q-buyer",
      question: "Who is the buyer vs user vs economic buyer for a DPDP operations tool?",
      whyItMatters: "Wrong buyer = unsalable product.",
      owner: "Founder",
      nextAction: "Interview protocol with org-chart questions",
      status: "open",
      priority: "critical",
      domain: "customer",
      evidenceIds: [],
    },
    {
      id: "q-software-vs-services",
      question: "Is this a software category or a services category with a thin portal?",
      whyItMatters: "Decides company shape, margin, and fundraising story.",
      currentAnswer: "Unresolved. Briefing volume currently looks like services.",
      owner: "Founder",
      nextAction: "Ask what they still lack after the last workshop",
      status: "in-progress",
      priority: "critical",
      domain: "business-model",
      evidenceIds: ["ev-lawfirm-briefings"],
    },
    {
      id: "q-consent-manager",
      question:
        "Should we become / integrate with / ignore the registered Consent Manager ecosystem?",
      whyItMatters: "Could be a platform bet or a dead end.",
      owner: "Founder + legal reviewer",
      nextAction: "Read Act/Rules on Consent Managers; map registration timeline",
      status: "open",
      priority: "important",
      domain: "regulation",
      evidenceIds: ["ev-phased-rollout"],
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
      question: "What does a legally adequate DPDP notice actually contain once Rules commence?",
      whyItMatters: "If we ship a notice builder, wrong fields are liability.",
      owner: "Legal reviewer",
      nextAction: "Annotate Rules on notice; mark every field as confirmed vs interpretation",
      status: "open",
      priority: "important",
      domain: "regulation",
      evidenceIds: [],
    },
    {
      id: "q-children",
      question: "How operationally heavy are children’s data / verifiable parental consent duties?",
      whyItMatters: "Could create a vertical (edtech, gaming) or a tar pit.",
      owner: "Research",
      nextAction: "Read commenced/not-yet-commenced child-related rules; no product yet",
      status: "open",
      priority: "nice-to-know",
      domain: "product",
      evidenceIds: [],
    },
    {
      id: "q-pricing",
      question: "What price can mid-market Indian fiduciaries actually pay annually?",
      whyItMatters: "Sets ACV and whether this is venture-scale.",
      owner: "Founder",
      nextAction: "Willingness-to-pay ladders in interviews — still empty",
      status: "open",
      priority: "critical",
      domain: "business-model",
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
      relatedSegmentId: "seg-digital-consumer",
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
      note: "Created the research OS. Seeded with labelled placeholders only. No primary interviews. No TAM numbers.",
    },
    {
      id: "log-2",
      date: "2026-08-18",
      title: "Secondary commencement map ingested",
      note: "Captured phased 2025–2027 narrative from public legal analyses as a starting map. Promoted to evidence ev-phased-rollout with legal-validation confidence.",
      relatedIds: [{ kind: "evidence", id: "ev-phased-rollout" }],
    },
  ],
  timeline: [
    {
      id: "tl-act",
      date: "2023-08-11",
      kind: "regulation",
      title: "DPDP Act, 2023 published (public record)",
      description: "Statute exists. Section-level annotation still to do.",
      relatedIds: [{ kind: "source", id: "src-act" }],
    },
    {
      id: "tl-rules",
      date: "2025-11-13",
      kind: "regulation",
      title: "Rules / Board / phased commencement (reported)",
      description: "Secondary analyses. Confirm official notifications.",
      relatedIds: [{ kind: "regulation", id: "reg-rules" }],
    },
    {
      id: "tl-workspace",
      date: "2026-08-18",
      kind: "discovery",
      title: "Research workspace established",
      description: "Started structured evidence discipline; all product bets marked unvalidated.",
    },
    {
      id: "tl-cm",
      date: "2026-11-13",
      kind: "regulation",
      title: "Consent Manager layer (reported commencement)",
      description: "Watch item. Do not ship CM features on rumour.",
    },
    {
      id: "tl-core",
      date: "2027-05-13",
      kind: "regulation",
      title: "Core duties / enforcement window (reported)",
      description: "Working planning horizon. Verify.",
    },
    {
      id: "tl-decision-placeholder",
      date: "2026-08-18",
      kind: "decision",
      title: "Decision: do not invent market-size numbers",
      description: "SOM/SAM/TAM remain ‘research required’ until sourced.",
      relatedIds: [{ kind: "decision", id: "dec-no-fake-tam" }],
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
      evidenceIds: ["ev-act-exists"],
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
      who: "Fiduciaries with audit/board pressure",
      whyNow: "Phased commencement narrative",
      attractiveness: "unknown",
      relatedQuestionIds: ["q-software-vs-services"],
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
      hypothesisId: "hyp-why-now",
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
      id: "ns-attach-act",
      action: "Attach official Act and Rules PDFs / URLs as first-class sources",
      why: "Everything legal currently sits on secondary clusters",
      owner: "Research",
      relatedQuestionId: "q-notice-content",
      priority: "critical",
    },
    {
      id: "ns-interviews",
      action: "Run the first five customer interviews",
      why: "Buyer, pain, and software-vs-services are blocking",
      owner: "Founder",
      relatedQuestionId: "q-buyer",
      priority: "critical",
    },
    {
      id: "ns-teardown",
      action: "Complete two competitor teardowns",
      why: "Homepage notes are not intelligence",
      owner: "Founder",
      relatedQuestionId: "q-incumbents",
      priority: "important",
    },
  ],
  progress: [
    {
      id: "market",
      label: "Market",
      coverage: "early",
      confidence: "low",
      notes: "Definition drafted. Size unresolved by design.",
    },
    {
      id: "customer",
      label: "Customer",
      coverage: "early",
      confidence: "low",
      notes: "Three hypothetical segments. Zero interviews.",
    },
    {
      id: "regulation",
      label: "Regulation",
      coverage: "developing",
      confidence: "low",
      notes: "Structural map only. Needs official annotation.",
    },
    {
      id: "competition",
      label: "Competition",
      coverage: "early",
      confidence: "low",
      notes: "Category references, not teardowns.",
    },
    {
      id: "product",
      label: "Product",
      coverage: "early",
      confidence: "unresolved",
      notes: "Concept only. Wedge not chosen.",
    },
    {
      id: "business-model",
      label: "Business Model",
      coverage: "none",
      confidence: "unresolved",
      notes: "Pricing and ACV blank.",
    },
    {
      id: "gtm",
      label: "GTM",
      coverage: "none",
      confidence: "unresolved",
      notes: "Channels are guesses.",
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
