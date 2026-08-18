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
    researchStatus: "MEDIUM confidence · VALIDATE (Thesis v0.1)",
    disclaimer: DISCLAIMER,
  },
  thesis: {
    problem:
      "Companies handling personal data now have more privacy work to manage — data mapping, consent, rights, processors, security, breaches, policies, and evidence. The business question is whether this work is painful and recurring enough to pay for software.",
    insight:
      "The 2025 Rules turn broad legal obligations into concrete processes. Many organisations have not operationalised them yet — EY: 83%+ had not begun comprehensive implementation — while vendors and consultants are already selling DPDP-related products and services.",
    opportunity:
      "There may be an opportunity to turn fragmented, project-based privacy work into a continuous software workflow. This is not a validated business thesis yet.",
    proposedDirection:
      "Working direction: a DPDP operations platform for continuous privacy programme management. Working ICP hypothesis: digitally intensive organisations with meaningful personal data and immature privacy operations — not the final ICP. Biggest unknown: will organisations pay for dedicated DPDP software, and which segment has enough pain and budget?",
  },
  strategicThesis:
    "DPDP software is already becoming a real category in India. The market is not empty. The opportunity, if any, is not to build another generic compliance platform, but to find a specific customer or workflow that existing global suites, Indian platforms and consultants do not serve well.",
  businessPlan: {
    problem: {
      id: "bp-problem",
      fields: [
        {
          key: "statement",
          label: "Problem statement",
          value:
            "DPDP creates ongoing operational work: notices, consent, rights, security, processors, breaches, policies, and evidence. The question is whether companies will pay for software to manage it — not whether obligations exist.",
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
            "Law firms, consultants (e.g. TCSA readiness projects), internal teams, spreadsheets, legacy GRC, and DPDP SaaS vendors (e.g. ConsentOS, ComplyDP). EY: 81% had not updated DPDP-aligned policies; 48% initiated gap assessments.",
        },
        {
          key: "evidence",
          label: "Evidence",
          value:
            "Linked claims cl-reg-trigger, cl-operational-workload, cl-readiness-early. Sources: MeitY Rules, EY survey, vendor pricing pages (listed only).",
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
            "A DPDP operations platform that helps companies run their privacy programme continuously — rather than relying entirely on one-time policies, spreadsheets, consultants, or disconnected tools.",
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
            "DPDP Rules notified 13 November 2025. Rules 3, 5–16, 22 and 23 commence 18 months after notification. Status: FACT.",
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
            "Hypothesis: B2B SaaS subscription + implementation. Vendor-listed prices exist (ConsentOS, ComplyDP) — not verified customer spend.",
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
            "Commercial demand unproven. EY: 45.3% cited budget limitations. Market may favour consulting (TCSA ₹1.5–4 lakh projects) over recurring software — unvalidated.",
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
            "High and broad: OneTrust, Securiti, Privy, Perfios, ConsentOS, Complynz, DPDPOne, consent tools, vertical products, consulting/DPOaaS. Generic platform is crowded.",
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
      id: "ds-vendors-selling",
      signal: "Commercial vendors already selling DPDP products",
      observation:
        "ConsentOS, ComplyDP, and TCSA publish DPDP-related SaaS and consulting offerings with listed prices.",
      implication:
        "Category is forming. Listed prices are not proof of customer transactions or market-wide pricing.",
      confidence: "high",
      evidenceIds: ["ev-consentos-pricing", "ev-complydp-pricing", "ev-tcsa-consulting"],
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
      evidenceIds: ["ev-rules-commencement", "ev-rules-operational"],
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
        "Rules notified 13 November 2025. Phased commencement: immediate (Rules 1, 2, 17–21), one year (Rule 4), 18 months (Rules 3, 5–16, 22, 23). Operational areas include notices, consent, consent withdrawal, rights, security safeguards, breach notifications, children's data, grievance/contact mechanisms, retention/erasure, and processor safeguards.",
      requirement:
        "Track commenced provisions against official notification dates. Operational requirements create workload — they do not require buying software.",
      whoIsAffected: "All in-scope fiduciaries as each rule commences.",
      businessImplication:
        "2026 is a build-and-prepare year; core operational Rules from May 2027.",
      productOpportunity:
        "Commencement-aware compliance roadmap tied to product features.",
      evidenceIds: ["ev-rules-commencement", "ev-rules-operational"],
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
      company: "OneTrust",
      website: "https://www.onetrust.com",
      category: "Global enterprise — privacy / GRC platform",
      targetCustomer: "Large / global enterprises",
      product: "Privacy, consent, GRC suite with India DPDP module",
      coreCapability:
        "DPDP control frameworks, consent, DSAR/rights automation, data discovery/mapping, vendor governance, cross-border governance, incident/breach response",
      pricing:
        "Custom enterprise pricing on official site. Vendor-listed only — do not use unverified third-party ACV estimates.",
      positioning: "Global privacy standard with India DPDP compliance path",
      funding: "Not researched in this workspace",
      geography: "Global",
      strengths: ["Breadth", "DPDP module marketed", "Enterprise brand"],
      weaknesses: [
        "Competing feature-for-feature would be difficult",
        "Implementation weight",
        "India-native fit unassessed in teardown",
      ],
      dpdpPositioning:
        "Dedicated India DPDP solution page. Marketing claims — not independently verified.",
      differentiation: "Incumbent breadth — generic platform play is crowded.",
      evidenceIds: ["ev-onetrust-dpdp"],
      sourceIds: ["src-onetrust-dpdp", "src-onetrust-pricing"],
      contentKind: "research",
    },
    {
      id: "cmp-securiti",
      company: "Securiti",
      website: "https://securiti.ai",
      category: "Global enterprise — data command centre / privacy ops",
      targetCustomer: "Enterprises with discovery + privacy ops needs",
      product: "Data security, privacy, governance platform",
      coreCapability: "Discovery, automation, privacy ops at enterprise scale",
      pricing: "Enterprise custom pricing — not verified here",
      positioning: "AI-led data command centre",
      funding: "Not researched in this workspace",
      geography: "Global, including India presence to verify",
      strengths: ["Discovery story", "Automation marketing", "Enterprise scale"],
      weaknesses: ["Price/complexity for mid-market", "DPDP depth unassessed in teardown"],
      dpdpPositioning: "Global platform; India/DPDP positioning to verify in teardown.",
      differentiation: "Competing on breadth is not a viable wedge.",
      evidenceIds: [],
      sourceIds: ["src-securiti"],
      contentKind: "research",
    },
    {
      id: "cmp-privy",
      company: "Privy by IDfy",
      website: "https://www.idfy.com/privy-by-idfy-leading-privacy-and-dpdp-compliance-platform/",
      category: "Indian enterprise — privacy / DPDP platform",
      targetCustomer: "Regulated enterprises — banking, insurance, NBFC, fintech, healthcare, telecom",
      product: "India-focused enterprise privacy and DPDP compliance platform",
      coreCapability:
        "Consent, Data Principal rights, PII governance, incident management, third-party risk, broader privacy governance",
      pricing: "Enterprise — not publicly listed on reviewed page",
      positioning: "India-specific enterprise privacy platform",
      funding: "Not researched",
      geography: "India",
      strengths: ["India-native enterprise category", "Regulated-sector focus"],
      weaknesses: [
        "Customer count is vendor-reported (30+ clients) — not independently verified",
        "Mid-market / startup wedge unclear",
      ],
      dpdpPositioning: "Explicit DPDP enterprise platform. Vendor claims — not verified independently.",
      differentiation: "Enterprise incumbent — not an empty category.",
      evidenceIds: ["ev-privy-capabilities"],
      sourceIds: ["src-privy"],
      contentKind: "research",
    },
    {
      id: "cmp-perfios",
      company: "Perfios DPDP Suite",
      website: "https://perfios.ai/company/press-release/perfios-launches-dpdp-suite-to-deliver-audit-ready-consent-governance-for-dpdp-compliance/",
      category: "Indian enterprise — regulated-sector infrastructure",
      targetCustomer: "Financial institutions and enterprise",
      product: "DPDP Suite — consent governance and compliance reporting",
      coreCapability:
        "Data discovery, consent governance, Data Principal rights, compliance reporting, consent single source of truth",
      pricing: "Enterprise — not publicly listed on reviewed release",
      positioning: "Audit-ready consent governance for DPDP",
      funding: "Established Indian B2B SaaS / fintech infrastructure company",
      geography: "India",
      strengths: ["Financial-institution credibility", "Enterprise architecture narrative"],
      weaknesses: ["Sector concentration", "Full-stack breadth vs depth unknown"],
      dpdpPositioning: "Launched 30 March 2026. Vendor announcement — not independent traction proof.",
      differentiation: "Shows DPDP attracting established Indian B2B vendors.",
      evidenceIds: ["ev-perfios-dpdp"],
      sourceIds: ["src-perfios"],
      contentKind: "research",
    },
    {
      id: "cmp-consentos",
      company: "ConsentOS",
      website: "https://consentos.in",
      category: "Indian mid-market / full-stack — DPDP compliance infrastructure",
      targetCustomer: "Startup to mid-market organisations",
      product: "DPDP compliance platform — consent through SDF readiness",
      coreCapability:
        "Consent management, compliance audit dashboard, privacy notices, rights portal, breach register, data inventory, vendor tracker, DPA generation, posture reports, SDF readiness",
      pricing:
        "Vendor-listed: Starter ₹25k impl + ₹2,999/mo; Growth ₹1.25L impl + ₹14,999/mo; Scale ₹2.5L impl + ₹34,999/mo; SDF/Enterprise ₹7.5L+ impl + ₹1.5L+/mo. Listed prices only.",
      positioning: "India-focused DPDP compliance infrastructure",
      funding: "Not researched",
      geography: "India",
      strengths: ["Full-stack mid-market coverage", "Published tiered pricing"],
      weaknesses: [
        "12 organisations in early access — vendor-reported, not verified traction",
        "Startup/mid-market segment already targeted by others",
      ],
      dpdpPositioning: "Active mid-market player. Early-access count is vendor-reported.",
      differentiation: "Affordable India-first platform position is already occupied.",
      evidenceIds: ["ev-consentos-pricing", "ev-consentos-early-access"],
      sourceIds: ["src-consentos"],
      contentKind: "research",
    },
    {
      id: "cmp-complynz",
      company: "Complynz",
      website: "https://complynz.com/dpdp-compliance",
      category: "Indian mid-market / full-stack — DPDP/GRC + consulting",
      targetCustomer: "SMBs through enterprise / SDF",
      product: "India-first DPDP/GRC platform with consulting",
      coreCapability:
        "Gap assessment, consent, DSR, privacy notices, PII discovery, breach workflows, vendor risk, vulnerability scanning, continuous compliance, consulting",
      pricing:
        "Vendor-listed: free tier; consulting/gap assessment from ₹49,999; continuous compliance starter ~₹1.5L/year; full readiness ₹8L; enterprise/SDF ₹20L; SDF retainer from ₹15L/year. Listed prices only.",
      positioning: "India-first DPDP/GRC platform + consulting",
      funding: "Not researched",
      geography: "India",
      strengths: ["Software + services hybrid", "Broad feature surface", "Published pricing"],
      weaknesses: [
        "100+ consulting engagements — vendor-reported claim",
        "Generic platform competes with ConsentOS, DPDPOne, ComplyDP",
      ],
      dpdpPositioning: "Full-stack India-first platform. Engagement count is vendor-reported.",
      differentiation: "SMB/startup affordable platform position already taken.",
      evidenceIds: ["ev-complynz-pricing"],
      sourceIds: ["src-complynz", "src-complynz-consulting"],
      contentKind: "research",
    },
    {
      id: "cmp-dpdpone",
      company: "DPDPOne",
      website: "https://www.dpdpone.com",
      category: "Indian mid-market / full-stack — DPDP platform",
      targetCustomer: "Organisations and consultant-led client portfolios",
      product: "DPDP compliance platform with sector tracks",
      coreCapability:
        "Assessments, RoPA, breach workflow, rights portal, compliance calendar, evidence, vendor risk, API, custom sector tracks",
      pricing:
        "Vendor-listed: Starter ₹1,990/mo; Professional ₹3,990/mo; Professional Plus ₹6,990/mo; Enterprise from ₹16,990/mo. Listed prices only.",
      positioning: "Mid-market DPDP platform; Professional plans target CAs, lawyers, DPDP consultants",
      funding: "Not researched",
      geography: "India",
      strengths: ["Low entry price", "Consultant-enabled distribution model"],
      weaknesses: ["Consultant channel may cap direct SaaS wedge", "Feature overlap with peers"],
      dpdpPositioning: "Consultant distribution already productised.",
      differentiation: "Channel conflict risk if we target same consultant buyers.",
      evidenceIds: ["ev-dpdpone-pricing"],
      sourceIds: ["src-dpdpone"],
      contentKind: "research",
    },
    {
      id: "cmp-complydp",
      company: "ComplyDP",
      website: "https://www.complydp.com",
      category: "Indian mid-market — DPDP readiness / compliance packages",
      targetCustomer: "Organisations pursuing DPDP readiness and enterprise/SDF programmes",
      product: "Readiness packages and enterprise/SDF offerings",
      coreCapability: "DPDP disclosure readiness and structured compliance packages",
      pricing:
        "Vendor-listed: ₹99,000 disclosure-readiness; readiness from ~₹8 lakh; enterprise/SDF ~₹20 lakh; ongoing retainers. Listed prices only.",
      positioning: "DPDP compliance made structured",
      funding: "Not researched",
      geography: "India",
      strengths: ["Package clarity", "Enterprise/SDF tier"],
      weaknesses: ["Package model vs recurring ops", "Overlaps Complynz pricing tiers"],
      dpdpPositioning: "Package-led DPDP vendor in crowded mid-market.",
      differentiation: "Not whitespace — part of active mid-market cluster.",
      evidenceIds: ["ev-complydp-pricing"],
      sourceIds: ["src-complydp"],
      contentKind: "research",
    },
    {
      id: "cmp-consentin",
      company: "Consentin",
      website: "https://www.consent.in",
      category: "Consent-focused — DPDP consent collection",
      targetCustomer: "Organisations needing consent collection at scale",
      product: "DPDP-compliant consent collection platform",
      coreCapability: "Monthly consent packs, top-ups, free tier for consent collections",
      pricing:
        "Vendor-listed: 3,000 DPDP-compliant consent collections/month free; paid consent packs and top-ups. Listed prices only.",
      positioning: "Consent collection as product category",
      funding: "Not researched",
      geography: "India",
      strengths: ["Free tier lowers entry", "Focused consent SKU"],
      weaknesses: ["Consent alone may not sustain full platform", "Crowded with KavachOne, Consent Server"],
      dpdpPositioning: "Consent collection is already a competitive product category.",
      differentiation: "Consent-only wedge is crowded.",
      evidenceIds: ["ev-consentin-free"],
      sourceIds: ["src-consentin"],
      contentKind: "research",
    },
    {
      id: "cmp-kavachone",
      company: "KavachOne / Consentiqo",
      website: "https://kavachone.com/consentiqo-dpdp-consent-manager",
      category: "Consent-focused — consent + deletion infrastructure",
      targetCustomer: "Indian businesses needing consent infrastructure",
      product: "Consentiqo DPDP consent manager",
      coreCapability:
        "Flat pricing, unlimited APIs, audit logs, 22-language DPDP experience, one-click deletion",
      pricing: "Flat pricing advertised — vendor-listed; details on site",
      positioning: "Commoditising consent + deletion infrastructure",
      funding: "Not researched",
      geography: "India",
      strengths: ["API-first", "Multi-language", "Deletion workflow"],
      weaknesses: ["Commoditised category", "Hard to differentiate on consent alone"],
      dpdpPositioning: "Consent infrastructure already being commoditised.",
      differentiation: "Not a clear gap for generic consent tooling.",
      evidenceIds: ["ev-kavachone-consent"],
      sourceIds: ["src-kavachone"],
      contentKind: "research",
    },
    {
      id: "cmp-dpdp-compliant",
      company: "DPDP Compliant",
      website: "https://dpdpcompliant.com",
      category: "Vertical — D2C / Shopify",
      targetCustomer: "Indian D2C and Shopify businesses",
      product: "Vertical DPDP workflow for scattered commerce data",
      coreCapability:
        "Access, correction, deletion, consent withdrawal, cross-system workflows, audit logs across storefront, checkout, payment, shipping, marketing, WhatsApp, support",
      pricing: "Not captured in this research pass — verify on site",
      positioning: "DPDP for D2C / Shopify where customer data is scattered",
      funding: "Not researched",
      geography: "India",
      strengths: ["Vertical depth", "Cross-system workflow story"],
      weaknesses: ["Niche TAM unknown", "Platform dependency"],
      dpdpPositioning: "Vertical-specific workflow products already emerging.",
      differentiation: "Vertical play exists — need distinct segment or stack.",
      evidenceIds: ["ev-dpdp-compliant-d2c"],
      sourceIds: ["src-dpdp-compliant"],
      contentKind: "research",
    },
    {
      id: "cmp-consent-server",
      company: "Consent Server",
      website: "https://consentserver.net",
      category: "Consent-focused — on-premise consent management",
      targetCustomer: "Indian businesses needing on-premise consent infrastructure",
      product: "On-premise DPDP consent management",
      coreCapability:
        "Consent capture, revocation, audit evidence, API sync, operational monitoring",
      pricing: "Not publicly listed on reviewed page",
      positioning: "On-premise DPDP consent management",
      funding: "Not researched",
      geography: "India",
      strengths: ["On-premise option", "Infrastructure-oriented"],
      weaknesses: ["Niche deployment model", "Consent-only scope"],
      dpdpPositioning: "Even on-premise consent management is being addressed.",
      differentiation: "Infrastructure consent is not open whitespace.",
      evidenceIds: ["ev-consent-server"],
      sourceIds: ["src-consent-server"],
      contentKind: "research",
    },
    {
      id: "cmp-tcsa",
      company: "TCSA",
      website: "https://www.tcsa.in/services/consulting/dpdp-compliance-india",
      category: "Services — DPDP consulting / readiness",
      targetCustomer: "Organisations buying project-based DPDP help",
      product: "DPDP readiness consulting engagements",
      coreCapability: "End-to-end DPDP consulting and readiness",
      pricing:
        "Vendor-published indicative: ₹1.5–4 lakh end-to-end consulting; 12–16 week typical readiness. Not market average.",
      positioning: "Consulting-led DPDP readiness",
      funding: "N/A",
      geography: "India",
      strengths: ["Clear project scope", "Services alternative to software"],
      weaknesses: ["Not recurring software revenue", "Competes for same budget line"],
      dpdpPositioning: "Project-based path organisations use today.",
      differentiation: "Partner, compete, or target post-consulting ops — open.",
      evidenceIds: ["ev-tcsa-consulting"],
      sourceIds: ["src-tcsa"],
      contentKind: "research",
    },
    {
      id: "cmp-complynz-consulting",
      company: "Complynz Consulting",
      website: "https://complynz.com/dpdp-consultants",
      category: "Services — DPDP consulting",
      targetCustomer: "Organisations buying fixed-fee DPDP engagements",
      product: "Gap assessment, roadmap, RoPA, notices, consent workflows, deliverables",
      coreCapability: "Fixed-fee consulting engagements from gap assessment through implementation planning",
      pricing:
        "Vendor-listed: fixed-fee engagements from ₹49,999. 100+ engagements claimed — vendor-reported.",
      positioning: "Fixed-fee DPDP consulting",
      funding: "N/A",
      geography: "India",
      strengths: ["Transparent entry price", "Bundled with Complynz platform"],
      weaknesses: ["Engagement count unverified", "May satisfy need without new software"],
      dpdpPositioning: "Consulting + platform hybrid competitor.",
      differentiation: "Post-consulting operational gap may exist — unvalidated.",
      evidenceIds: ["ev-complynz-consulting"],
      sourceIds: ["src-complynz-consulting"],
      contentKind: "research",
    },
    {
      id: "cmp-tsaaro",
      company: "Tsaaro (DPO-as-a-Service)",
      website: "https://dpoaas.in",
      category: "Services — DPO-as-a-Service",
      targetCustomer: "Organisations needing fractional DPO and managed privacy ops",
      product: "DPOaaS — fractional DPO, audits, mapping, DPIAs, vendor risk, consent management",
      coreCapability: "Managed privacy operations and DPO services",
      pricing: "Not fully listed on reviewed page — verify tiers",
      positioning: "Fractional DPO and managed DPDP operations",
      funding: "Not researched",
      geography: "India",
      strengths: ["Human + process coverage", "Broad service scope"],
      weaknesses: ["Services margin vs software", "May include consent tooling in retainer"],
      dpdpPositioning: "DPOaaS is an active services category.",
      differentiation: "Software must beat or complement managed service — unknown.",
      evidenceIds: ["ev-tsaaro-dpoaas"],
      sourceIds: ["src-tsaaro"],
      contentKind: "research",
    },
    {
      id: "cmp-sirius-star",
      company: "Sirius Star (DPO-as-a-Service)",
      website: "https://siriusstar.in/secure-data-guard/dpo-as-a-service-india",
      category: "Services — DPO-as-a-Service",
      targetCustomer: "Organisations buying managed DPO by tier",
      product: "DPO-as-a-Service subscription tiers",
      coreCapability: "Fractional DPO and managed privacy programme support",
      pricing:
        "Vendor-listed: ₹35k/month Essential; ₹65k/month Growth; ₹1.1L+/month Significant Fiduciary. Listed prices only.",
      positioning: "Tiered DPOaaS for Indian fiduciaries",
      funding: "Not researched",
      geography: "India",
      strengths: ["Published retainer pricing", "SDF tier visible"],
      weaknesses: ["Services not software", "Price competes with ConsentOS enterprise tiers"],
      dpdpPositioning: "Managed-service pricing visible alongside SaaS vendors.",
      differentiation: "Hybrid market — software vs retainer preference unknown.",
      evidenceIds: ["ev-sirius-star-dpoaas"],
      sourceIds: ["src-sirius-star"],
      contentKind: "research",
    },
    {
      id: "cmp-big4",
      company: "Big-4 and law-firm programmes",
      category: "Services — enterprise consulting",
      targetCustomer: "Boards and regulated enterprises",
      product: "Readiness assessments, target operating models, managed services",
      coreCapability: "Trust, methodology, senior relationships",
      pricing: "Project / retainer — high; not standardised publicly",
      positioning: "Board-safe transformation",
      funding: "N/A",
      geography: "India + global",
      strengths: ["Credibility", "Change management"],
      weaknesses: ["Expensive to run year-round", "Software often still needed underneath"],
      dpdpPositioning: "Defines category language buyers hear first.",
      differentiation: "Partner vs compete — post-consulting ops may be the gap.",
      evidenceIds: ["ev-ey-readiness"],
      sourceIds: ["src-competitor-notes"],
      contentKind: "research",
    },
  ],
  comparison: {
    columns: [
      { id: "cmp-onetrust", label: "OneTrust", competitorId: "cmp-onetrust" },
      { id: "cmp-privy", label: "Privy", competitorId: "cmp-privy" },
      { id: "cmp-consentos", label: "ConsentOS", competitorId: "cmp-consentos" },
      { id: "cmp-complynz", label: "Complynz", competitorId: "cmp-complynz" },
      { id: "cmp-consentin", label: "Consentin", competitorId: "cmp-consentin" },
      { id: "ours", label: "Our concept" },
    ],
    rows: [
      {
        id: "dim-consent",
        dimension: "Consent / notice records",
        cells: {
          "cmp-onetrust": { value: "Strong — DPDP module marketed" },
          "cmp-privy": { value: "Core capability" },
          "cmp-consentos": { value: "Core — full platform" },
          "cmp-complynz": { value: "Included" },
          "cmp-consentin": { value: "Primary SKU — free tier" },
          ours: { value: "Crowded — needs differentiation", notes: "Not whitespace" },
        },
      },
      {
        id: "dim-discovery",
        dimension: "Data discovery",
        cells: {
          "cmp-onetrust": { value: "Available in suite" },
          "cmp-privy": { value: "PII governance" },
          "cmp-consentos": { value: "Data inventory" },
          "cmp-complynz": { value: "PII discovery" },
          "cmp-consentin": { value: "Not primary focus" },
          ours: { value: "Not a near-term bet", notes: "Incumbents cover this" },
        },
      },
      {
        id: "dim-inventory",
        dimension: "Data / processing inventory",
        cells: {
          "cmp-onetrust": { value: "Mature RoPA-style" },
          "cmp-privy": { value: "Governance layer" },
          "cmp-consentos": { value: "Data inventory" },
          "cmp-complynz": { value: "RoPA / discovery" },
          "cmp-consentin": { value: "Absent" },
          ours: { value: "Hypothesis only — crowded category" },
        },
      },
      {
        id: "dim-rights",
        dimension: "Rights management",
        cells: {
          "cmp-onetrust": { value: "DSAR automation" },
          "cmp-privy": { value: "Data Principal rights" },
          "cmp-consentos": { value: "Rights portal" },
          "cmp-complynz": { value: "DSR included" },
          "cmp-consentin": { value: "Not primary" },
          ours: {
            value: "Real workflow — not obvious whitespace",
            notes: "OneTrust, Privy, Complynz, DPDPOne, vertical products include rights",
          },
        },
      },
      {
        id: "dim-automation",
        dimension: "Compliance automation",
        cells: {
          "cmp-onetrust": { value: "Broad workflows" },
          "cmp-privy": { value: "Enterprise automation" },
          "cmp-consentos": { value: "Audit dashboard, posture reports" },
          "cmp-complynz": { value: "Continuous compliance" },
          "cmp-consentin": { value: "Consent-only" },
          ours: { value: "Undifferentiated if generic" },
        },
      },
      {
        id: "dim-monitoring",
        dimension: "Monitoring",
        cells: {
          "cmp-onetrust": { value: "Suite-dependent" },
          "cmp-privy": { value: "Incident management" },
          "cmp-consentos": { value: "Breach register" },
          "cmp-complynz": { value: "Breach workflows" },
          "cmp-consentin": { value: "Limited" },
          ours: { value: "Not differentiated yet" },
        },
      },
      {
        id: "dim-ai",
        dimension: "AI capabilities",
        cells: {
          "cmp-onetrust": { value: "Marketed" },
          "cmp-privy": { value: "Unknown" },
          "cmp-consentos": { value: "Not emphasised" },
          "cmp-complynz": { value: "Not emphasised" },
          "cmp-consentin": { value: "Not emphasised" },
          ours: { value: "Research assistant later — not the wedge" },
        },
      },
      {
        id: "dim-pricing",
        dimension: "Observed vendor pricing (listed)",
        cells: {
          "cmp-onetrust": { value: "Enterprise custom" },
          "cmp-privy": { value: "Enterprise — not listed" },
          "cmp-consentos": { value: "~₹3k–35k/mo + impl; SDF ₹1.5L+/mo" },
          "cmp-complynz": { value: "Free tier; ~₹1.5L/yr to ₹20L packages" },
          "cmp-consentin": { value: "Free tier + consent packs" },
          ours: {
            value: "Not set — listed prices ≠ customer spend",
            notes: "Observed range ~₹2k/mo to ₹1.5L+/mo plus projects ₹50k–20L",
          },
        },
      },
    ],
  },
  researchItems: [
    {
      id: "ri-competitive-landscape-2026",
      title: "DPDP Current Solutions & Competitive Landscape — 2026",
      category: "competition",
      summary:
        "DPDP software is already an emerging Indian market with global enterprise suites, Indian enterprise platforms, mid-market SaaS, consent tools, vertical products and consulting/DPO services. Generic compliance software is not obvious whitespace.",
      keyFindings: [
        "Multiple active vendors across enterprise, mid-market, consent, vertical and services",
        "Software and services coexist; several vendors combine platform + implementation + advisory",
        "Observed vendor-listed pricing spans ~₹2k/mo to ₹1.5L+/mo plus project offerings ~₹50k–20L",
        "Startup/SMB segment already targeted; consent and rights are crowded workflows",
        "Actual customer adoption, renewal, and revenue remain poorly evidenced publicly",
        "Next priority: underserved workflows or customer segments",
      ],
      relevance: "core",
      confidence: "medium",
      tags: ["competition", "landscape", "pricing", "2026"],
      relatedHypothesisIds: ["hyp-gdpr-gap", "hyp-wedge-rights", "hyp-fear-vs-ops"],
      relatedCompetitorIds: [
        "cmp-onetrust",
        "cmp-privy",
        "cmp-consentos",
        "cmp-complynz",
        "cmp-dpdpone",
        "cmp-consentin",
      ],
      relatedSegmentIds: [],
      relatedRegulationIds: [],
      status: "reviewed",
      contentKind: "research",
    },
    {
      id: "ri-vendor-pricing",
      title: "Indian DPDP vendor listed pricing (ConsentOS, ComplyDP, TCSA)",
      category: "competition",
      summary:
        "Commercial vendors publish DPDP SaaS, package, and consulting prices. Listed prices only — not verified customer transactions.",
      keyFindings: [
        "Low-cost SaaS from ~₹2k/mo (DPDPOne, Consentin free tier)",
        "Mid-market ~₹3k–35k/mo (ConsentOS, DPDPOne, Complynz starter)",
        "Consulting/projects ~₹50k–4L (Complynz, TCSA); enterprise packages ~₹8L–20L",
        "Enterprise managed software/dpoaaS ₹1.5L+/mo published by some vendors",
        "All figures vendor-listed — not transaction data or willingness to pay",
      ],
      sourceId: "src-consentos",
      relevance: "core",
      confidence: "medium",
      tags: ["pricing", "competition", "vendor-listed", "observed-range"],
      relatedHypothesisIds: ["hyp-recurring-software", "hyp-fear-vs-ops"],
      relatedCompetitorIds: [
        "cmp-consentos",
        "cmp-complydp",
        "cmp-complynz",
        "cmp-dpdpone",
        "cmp-tcsa",
        "cmp-sirius-star",
      ],
      relatedSegmentIds: [],
      relatedRegulationIds: [],
      status: "reviewed",
      contentKind: "research",
    },
    {
      id: "ri-protiviti-historical",
      title: "Protiviti / CII 2024 privacy survey (historical context)",
      category: "market",
      summary:
        "Pre-final-Rules survey on privacy maturity, breaches, and programme drivers. Contextual only — not 2026 DPDP readiness.",
      keyFindings: [
        "60%+ engaged in practices raising privacy concerns",
        "52% experienced breach in prior five years",
        "Only 39% of larger orgs had dedicated Data Privacy Office",
        "Regulatory/contractual obligations drove programmes",
      ],
      sourceId: "src-protiviti",
      date: "2024",
      authorOrganisation: "CII / Protiviti",
      relevance: "supporting",
      confidence: "medium",
      tags: ["historical", "context", "pre-rules"],
      relatedHypothesisIds: [],
      relatedCompetitorIds: [],
      relatedSegmentIds: [],
      relatedRegulationIds: [],
      status: "reviewed",
      contentKind: "research",
    },
    {
      id: "ri-rules-official",
      title: "DPDP Rules, 2025 — official commencement schedule",
      category: "regulation",
      summary:
        "MeitY/Gazette notification of DPDP Rules with phased commencement: immediate, one year, and 18 months.",
      keyFindings: [
        "Rules notified 13 November 2025",
        "Phased commencement: immediate, one year, 18 months",
        "Operational areas: notices, consent, rights, security, breaches, processors, and related provisions",
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
      notes: "Official Rules PDF. Commencement schedule and operational requirement areas per notification.",
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
      id: "src-consentos",
      title: "ConsentOS — pricing",
      organisation: "ConsentOS",
      type: "other",
      url: "https://consentos.in/pricing/",
      notes: "Vendor-listed SaaS pricing. Not verified customer spend or market-wide pricing.",
      contentKind: "research",
    },
    {
      id: "src-complydp",
      title: "ComplyDP — pricing",
      organisation: "ComplyDP",
      type: "other",
      url: "https://www.complydp.com/pricing",
      notes: "Vendor-listed package pricing. Not verified transaction data.",
      contentKind: "research",
    },
    {
      id: "src-tcsa",
      title: "TCSA — DPDP compliance consulting (India)",
      organisation: "TCSA",
      type: "other",
      url: "https://www.tcsa.in/services/consulting/dpdp-compliance-india",
      notes: "Consulting provider describing DPDP readiness project scope and pricing range.",
      contentKind: "research",
    },
    {
      id: "src-protiviti",
      title: "State of Data Privacy in India — Survey Report 2024",
      organisation: "CII / Protiviti",
      type: "report",
      url: "https://www.protiviti.com/in-en/state-of-data-privacy-in-india-survey-report-2024",
      date: "2024",
      notes: "Historical pre-final-Rules evidence. Contextual only — not current 2026 readiness data.",
      contentKind: "research",
    },
    {
      id: "src-onetrust-dpdp",
      title: "OneTrust — India DPDP Compliance",
      organisation: "OneTrust",
      type: "other",
      url: "https://www.onetrust.com/solutions/india-dpdp-compliance/",
      notes: "Marketing page for DPDP capabilities. Vendor claims — not independently verified.",
      contentKind: "research",
    },
    {
      id: "src-onetrust-pricing",
      title: "OneTrust — Pricing",
      organisation: "OneTrust",
      type: "other",
      url: "https://www.onetrust.com/pricing/",
      notes: "Custom enterprise pricing. Do not use unverified third-party ACV estimates.",
      contentKind: "research",
    },
    {
      id: "src-securiti",
      title: "Securiti — Privacy / data command centre",
      organisation: "Securiti",
      type: "other",
      url: "https://securiti.ai",
      notes: "Global enterprise privacy platform. India/DPDP depth requires teardown.",
      contentKind: "research",
    },
    {
      id: "src-privy",
      title: "Privy by IDfy — Privacy and DPDP Compliance Platform",
      organisation: "IDfy",
      type: "other",
      url: "https://www.idfy.com/privy-by-idfy-leading-privacy-and-dpdp-compliance-platform/",
      notes: "Indian enterprise DPDP platform. 30+ clients is vendor-reported.",
      contentKind: "research",
    },
    {
      id: "src-perfios",
      title: "Perfios launches DPDP Suite",
      organisation: "Perfios",
      type: "news",
      url: "https://perfios.ai/company/press-release/perfios-launches-dpdp-suite-to-deliver-audit-ready-consent-governance-for-dpdp-compliance/",
      date: "2026-03-30",
      notes: "Press release. Vendor announcement — not independent traction proof.",
      contentKind: "research",
    },
    {
      id: "src-complynz",
      title: "Complynz — DPDP Compliance Platform",
      organisation: "Complynz",
      type: "other",
      url: "https://complynz.com/dpdp-compliance",
      notes: "India-first DPDP/GRC platform. Pricing and engagement claims vendor-reported.",
      contentKind: "research",
    },
    {
      id: "src-complynz-consulting",
      title: "Complynz — DPDP Consultants",
      organisation: "Complynz",
      type: "other",
      url: "https://complynz.com/dpdp-consultants",
      notes: "Fixed-fee consulting from ₹49,999. 100+ engagements vendor-reported.",
      contentKind: "research",
    },
    {
      id: "src-dpdpone",
      title: "DPDPOne — Pricing",
      organisation: "DPDPOne",
      type: "other",
      url: "https://www.dpdpone.com",
      notes: "Mid-market SaaS with consultant-targeted tiers. Vendor-listed pricing.",
      contentKind: "research",
    },
    {
      id: "src-consentin",
      title: "Consentin — Pricing",
      organisation: "Consentin",
      type: "other",
      url: "https://www.consent.in/pricing",
      notes: "Consent-focused product with free tier. Vendor-listed.",
      contentKind: "research",
    },
    {
      id: "src-kavachone",
      title: "KavachOne — Consentiqo DPDP Consent Manager",
      organisation: "KavachOne",
      type: "other",
      url: "https://kavachone.com/consentiqo-dpdp-consent-manager",
      notes: "Consent + deletion infrastructure positioning. Vendor marketing.",
      contentKind: "research",
    },
    {
      id: "src-dpdp-compliant",
      title: "DPDP Compliant — D2C / Shopify",
      organisation: "DPDP Compliant",
      type: "other",
      url: "https://dpdpcompliant.com",
      notes: "Vertical DPDP workflow for D2C commerce stack.",
      contentKind: "research",
    },
    {
      id: "src-consent-server",
      title: "Consent Server — On-premise DPDP consent",
      organisation: "Consent Server",
      type: "other",
      url: "https://consentserver.net",
      notes: "On-premise consent management positioning.",
      contentKind: "research",
    },
    {
      id: "src-tsaaro",
      title: "Tsaaro — DPO-as-a-Service",
      organisation: "Tsaaro",
      type: "other",
      url: "https://dpoaas.in",
      notes: "Fractional DPO and managed privacy services.",
      contentKind: "research",
    },
    {
      id: "src-sirius-star",
      title: "Sirius Star — DPO-as-a-Service India",
      organisation: "Sirius Star",
      type: "other",
      url: "https://siriusstar.in/secure-data-guard/dpo-as-a-service-india",
      notes: "Published DPOaaS tier pricing. Vendor-listed.",
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
        "Thesis v0.1: regulatory trigger and operational workload are established; readiness gaps and commercial vendors are evidenced; actual customer spend, best segment, software vs consulting, market size, and willingness to pay remain unknown. Overall: MEDIUM confidence — VALIDATE.",
      evidenceIds: [
        "ev-rules-commencement",
        "ev-rules-operational",
        "ev-ey-readiness",
        "ev-consentos-pricing",
        "ev-complydp-pricing",
        "ev-tcsa-consulting",
      ],
      confidence: "medium",
      implication:
        "Proceed with customer discovery — especially how companies solve DPDP today — before product or GTM commitment.",
      contentKind: "research",
    },
    {
      id: "cl-reg-trigger",
      statement: "DPDP Rules create a defined regulatory trigger with phased commencement.",
      evidenceIds: ["ev-rules-commencement"],
      confidence: "high",
      implication: "Why-now is fact-based. Does not prove software purchases.",
      contentKind: "confirmed",
    },
    {
      id: "cl-operational-workload",
      statement:
        "DPDP Rules turn broad legal obligations into concrete operational processes (notices, consent, rights, security, breaches, processors, and related areas).",
      evidenceIds: ["ev-rules-operational"],
      confidence: "high",
      implication:
        "Operational workload exists. Software is one possible response — not mandated by the Rules.",
      contentKind: "confirmed",
    },
    {
      id: "cl-vendors-exist",
      statement: "Commercial vendors are already offering DPDP-related products and services in India.",
      evidenceIds: ["ev-consentos-pricing", "ev-complydp-pricing", "ev-tcsa-consulting"],
      confidence: "high",
      implication: "Category is forming. Does not prove our startup will win or that spend is large.",
      contentKind: "research",
    },
    {
      id: "cl-competition-high",
      statement:
        "Competition is high. DPDP is already a real software and services category. Generic ‘DPDP compliance platform’ is not clear whitespace.",
      evidenceIds: [
        "ev-onetrust-dpdp",
        "ev-privy-capabilities",
        "ev-consentos-pricing",
        "ev-complynz-pricing",
        "ev-dpdpone-pricing",
      ],
      confidence: "medium",
      implication:
        "The opportunity, if any, is a specific customer segment or workflow incumbents do not serve well — not another generic platform.",
      contentKind: "research",
    },
    {
      id: "cl-market-not-empty",
      statement: "There is already a real DPDP software market in India — the market is not empty.",
      evidenceIds: [
        "ev-privy-capabilities",
        "ev-perfios-dpdp",
        "ev-consentos-pricing",
        "ev-complynz-pricing",
        "ev-onetrust-dpdp",
      ],
      confidence: "medium",
      implication:
        "Do not position as ‘DPDP compliance software does not exist.’ Vendor claims and listed prices do not prove scaled adoption.",
      contentKind: "research",
    },
    {
      id: "cl-vendor-pricing-listed",
      statement:
        "Vendor-listed pricing for DPDP SaaS and packages exists — this is not verified customer spend at scale.",
      evidenceIds: ["ev-consentos-pricing", "ev-complydp-pricing", "ev-vendor-pricing-range"],
      confidence: "high",
      implication:
        "Use listed prices for competitive context only. Do not cite as market ACV or WTP proof.",
      contentKind: "research",
    },
    {
      id: "cl-thesis-not-validated",
      statement: "This is not a validated business thesis yet.",
      evidenceIds: ["ev-ey-readiness"],
      confidence: "medium",
      implication:
        "Readiness gaps support the problem side; commercial demand for dedicated software remains unproven.",
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
        "Official phased calendar. Core operational Rules expected May 2027 (18 months from Nov 2025). Regulatory trigger: YES — high confidence.",
      contentKind: "confirmed",
    },
    {
      id: "ev-rules-operational",
      sourceId: "src-rules-2025",
      excerpt:
        "Rules contain operational requirements involving notices, consent, consent withdrawal, rights, security safeguards, breach notifications, children's data, grievance/contact mechanisms, retention/erasure, and processor-related safeguards.",
      location: "Operational provisions (summary)",
      interpretation:
        "Establishes operational workload — not a mandate to buy software. Operational workload: YES — high confidence.",
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
        "Survey of 150+ professionals: nearly 70% not very familiar with DPDP Act/Rules; 48% initiated gap assessments; 44% documented processing activities; 38% categorised personal data and identified third-party processors; nearly 81% had not updated/drafted DPDP-aligned policies; 83%+ had not begun comprehensive implementation; 45.3% cited budget limitations; 76.4% cited limited expertise; 58.8% struggled with cross-border data-transfer complexities.",
      interpretation:
        "Evidence of readiness/execution gap in this survey sample — supports the problem side. Does not prove software WTP. Do not generalise to all Indian companies.",
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
    {
      id: "ev-consentos-pricing",
      sourceId: "src-consentos",
      excerpt:
        "Vendor-listed: Starter ₹25,000 implementation + ₹2,999/month; Growth ₹1,25,000 implementation + ₹14,999/month; Scale ₹2,50,000 implementation + ₹34,999/month; SDF/Enterprise ₹7,50,000+ implementation + ₹1,50,000+/month.",
      interpretation:
        "Observed vendor pricing for mid-market through enterprise tiers. Listed prices only — not customer spend.",
      contentKind: "research",
    },
    {
      id: "ev-complydp-pricing",
      sourceId: "src-complydp",
      excerpt:
        "Published offerings include ₹99,000 disclosure-readiness package, readiness packages starting around ₹8 lakh, enterprise/SDF packages around ₹20 lakh, and ongoing enterprise/SDF retainers.",
      interpretation:
        "Evidence of package-led DPDP commercial offerings. Listed prices — not transaction data.",
      contentKind: "research",
    },
    {
      id: "ev-tcsa-consulting",
      sourceId: "src-tcsa",
      excerpt:
        "Consulting provider describes DPDP readiness projects in the ₹1.5–4 lakh range with 12–16 week timelines.",
      interpretation:
        "Consulting/services is an existing way organisations can buy DPDP help. One provider's range — not market average.",
      contentKind: "research",
    },
    {
      id: "ev-protiviti-historical",
      sourceId: "src-protiviti",
      excerpt:
        "Pre-final-Rules survey (2024): 60%+ engaged in practices raising privacy concerns; 52% experienced a data breach in prior five years; only 39% of larger organisations had a dedicated Data Privacy Office; 44% lacked proactive incident-response strategies; regulatory/contractual obligations drove programmes; consent and Data Principal access were key concerns.",
      interpretation:
        "Historical context on privacy maturity and drivers. Not current 2026 DPDP readiness data.",
      contentKind: "research",
    },
    {
      id: "ev-onetrust-dpdp",
      sourceId: "src-onetrust-dpdp",
      excerpt:
        "OneTrust markets India DPDP capabilities including control frameworks, consent management, DSAR/rights automation, data discovery and mapping, vendor governance, cross-border governance, and incident/breach response.",
      interpretation:
        "Global enterprise incumbent with broad DPDP module. Marketing claims — competing feature-for-feature would be difficult.",
      contentKind: "research",
    },
    {
      id: "ev-privy-capabilities",
      sourceId: "src-privy",
      excerpt:
        "Privy offers consent, Data Principal rights, PII governance, incident management, third-party risk, and broader privacy governance. Vendor states 30+ clients across banking, insurance, NBFC, fintech, healthcare, telecom, consumer/e-commerce and services.",
      interpretation:
        "Strong signal that India-specific enterprise DPDP software category exists. Client count is vendor-reported — not independently verified.",
      contentKind: "research",
    },
    {
      id: "ev-perfios-dpdp",
      sourceId: "src-perfios",
      excerpt:
        "Perfios DPDP Suite launched 30 March 2026 with data discovery, consent governance, Data Principal rights, compliance reporting, and consent single source of truth for enterprise architecture.",
      interpretation:
        "Established Indian B2B vendor entering DPDP — especially financial institutions. Launch announcement, not adoption proof.",
      contentKind: "research",
    },
    {
      id: "ev-consentos-early-access",
      sourceId: "src-consentos",
      excerpt: "ConsentOS states 12 organisations in early access.",
      interpretation:
        "Vendor-reported early traction signal. Does not prove scaled customer demand or revenue.",
      contentKind: "research",
    },
    {
      id: "ev-complynz-pricing",
      sourceId: "src-complynz",
      excerpt:
        "Vendor-listed: free tier; consulting/gap assessment from ₹49,999; continuous compliance starter ~₹1.5L/year; full readiness ₹8L; enterprise/SDF ₹20L; SDF retainer from ₹15L/year.",
      interpretation:
        "Observed vendor pricing spanning SMB through SDF. Listed prices — not transaction data.",
      contentKind: "research",
    },
    {
      id: "ev-complynz-consulting",
      sourceId: "src-complynz-consulting",
      excerpt:
        "Fixed-fee DPDP consulting engagements from ₹49,999 including gap assessment, roadmap, RoPA, notices, and consent workflows. Vendor claims 100+ engagements.",
      interpretation:
        "Consulting + platform hybrid competitor. Engagement count is vendor-reported.",
      contentKind: "research",
    },
    {
      id: "ev-dpdpone-pricing",
      sourceId: "src-dpdpone",
      excerpt:
        "Vendor-listed: Starter ₹1,990/month; Professional ₹3,990/month; Professional Plus ₹6,990/month; Enterprise from ₹16,990/month. Professional plans target CAs, lawyers and DPDP consultants managing client organisations.",
      interpretation:
        "Low-cost mid-market SaaS with consultant distribution already productised. Listed prices only.",
      contentKind: "research",
    },
    {
      id: "ev-consentin-free",
      sourceId: "src-consentin",
      excerpt:
        "3,000 DPDP-compliant consent collections per month free; paid monthly consent packs and top-ups available.",
      interpretation:
        "Consent collection is already a competitive product category with freemium entry.",
      contentKind: "research",
    },
    {
      id: "ev-kavachone-consent",
      sourceId: "src-kavachone",
      excerpt:
        "Consentiqo markets flat pricing, unlimited APIs, audit logs, 22-language DPDP experience, and one-click deletion.",
      interpretation:
        "Consent + deletion infrastructure being commoditised. Vendor positioning — not verified adoption.",
      contentKind: "research",
    },
    {
      id: "ev-dpdp-compliant-d2c",
      sourceId: "src-dpdp-compliant",
      excerpt:
        "Targets Indian D2C/Shopify businesses with cross-system workflows for access, correction, deletion, consent withdrawal and audit logs across storefront, checkout, payment, shipping, marketing, WhatsApp and support.",
      interpretation:
        "Vertical-specific DPDP workflow products already emerging for commerce stacks.",
      contentKind: "research",
    },
    {
      id: "ev-consent-server",
      sourceId: "src-consent-server",
      excerpt:
        "On-premise DPDP consent management with consent capture, revocation, audit evidence, API sync and operational monitoring.",
      interpretation:
        "On-premise / infrastructure-oriented consent management is already being addressed.",
      contentKind: "research",
    },
    {
      id: "ev-tsaaro-dpoaas",
      sourceId: "src-tsaaro",
      excerpt:
        "Tsaaro DPOaaS provides fractional DPO, audits, data mapping, DPIAs, vendor risk management and consent management as managed services.",
      interpretation:
        "DPO-as-a-Service is an active services path alongside software vendors.",
      contentKind: "research",
    },
    {
      id: "ev-sirius-star-dpoaas",
      sourceId: "src-sirius-star",
      excerpt:
        "Vendor-listed DPOaaS tiers: ₹35,000/month Essential; ₹65,000/month Growth; ₹1,10,000+/month Significant Fiduciary.",
      interpretation:
        "Published managed-service pricing visible alongside SaaS vendors. Listed prices — not customer spend.",
      contentKind: "research",
    },
    {
      id: "ev-vendor-pricing-range",
      sourceId: "src-consentos",
      excerpt:
        "Across reviewed vendor pages, published/listed pricing spans roughly ~₹2,000/month low-cost SaaS; ~₹3,000–₹35,000/month startup/mid-market tiers; ~₹50,000 to several lakhs per consulting/project engagement; ~₹8L–₹20L+ enterprise readiness packages; and ₹1.5L+/month on some enterprise/SDF software or DPOaaS tiers.",
      interpretation:
        "INFERENCE: observed vendor pricing range from listed prices across multiple vendors. Not market willingness to pay or verified transaction data.",
      contentKind: "research",
    },
  ],
  hypotheses: [
    {
      id: "hyp-recurring-software",
      statement:
        "Is DPDP compliance a recurring software problem, or primarily a one-time / periodic consulting problem?",
      category: "business-model",
      whyWeBelieveIt:
        "Rules create ongoing duties; EY shows gap assessments (48%) ahead of comprehensive implementation (17%); TCSA sells project-based readiness.",
      supportingEvidenceIds: ["ev-rules-operational", "ev-ey-readiness", "ev-tcsa-consulting"],
      contradictingEvidenceIds: ["ev-consentos-pricing", "ev-complydp-pricing"],
      confidence: "unresolved",
      validationMethod:
        "Ask how companies solve DPDP today; distinguish project spend from subscription software",
      status: "investigating",
      nextAction:
        "Add ‘how are you solving DPDP today?’ to every interview guide.",
    },
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
      statement:
        "Existing global and Indian platforms may still leave specific DPDP workflows or customer segments underserved despite broad feature coverage.",
      category: "competition",
      whyWeBelieveIt:
        "OneTrust, Privy, ConsentOS, Complynz and others cover broad workflows — but teardowns and buyer interviews may reveal gaps.",
      supportingEvidenceIds: [],
      contradictingEvidenceIds: [
        "ev-onetrust-dpdp",
        "ev-privy-capabilities",
        "ev-complynz-pricing",
        "ev-dpdpone-pricing",
      ],
      confidence: "low",
      validationMethod:
        "Product teardowns + interviews with existing privacy-platform buyers",
      status: "investigating",
      nextAction:
        "Teardown 3 platforms; ask buyers what remains painful after purchase or consulting project.",
    },
    {
      id: "hyp-fear-vs-ops",
      statement:
        "Organisations will pay for ongoing operations tooling, not only a one-time readiness workshop or package.",
      category: "business-model",
      whyWeBelieveIt:
        "Continuous duties under the Rules; recurring DPDP software and managed-service pricing is now visible in the market.",
      supportingEvidenceIds: [
        "ev-rules-operational",
        "ev-consentos-pricing",
        "ev-sirius-star-dpoaas",
      ],
      contradictingEvidenceIds: [
        "ev-complydp-pricing",
        "ev-complynz-pricing",
        "ev-tcsa-consulting",
      ],
      confidence: "low",
      validationMethod:
        "Ask buyers what they currently pay and what happens after a readiness project",
      status: "assumption",
      nextAction: "Ask ‘what happens after the workshop or package?’ in every call.",
    },
    {
      id: "hyp-wedge-rights",
      statement: "Data principal rights is the correct initial wedge.",
      category: "product",
      whyWeBelieveIt: "Familiar category, workflow-shaped, visible SLA.",
      supportingEvidenceIds: [],
      contradictingEvidenceIds: [
        "ev-onetrust-dpdp",
        "ev-privy-capabilities",
        "ev-complydp-pricing",
        "ev-dpdpone-pricing",
        "ev-dpdp-compliant-d2c",
      ],
      confidence: "unresolved",
      validationMethod:
        "Ask volume of requests today; if ~0, wedge dies. Rights is real but crowded.",
      status: "assumption",
      nextAction:
        "Conclusion for now: rights is a real workflow but not obvious whitespace. Compare post-platform pain instead.",
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
      id: "q-how-solving-today",
      question: "How are companies actually solving DPDP today?",
      whyItMatters:
        "Core Thesis v0.1 question. Determines whether the opportunity is software, consulting, DIY, or a mix.",
      owner: "Founder",
      nextAction: "Make this the opening question in every customer interview",
      status: "open",
      priority: "critical",
      domain: "customer",
      evidenceIds: ["ev-tcsa-consulting", "ev-consentos-pricing", "ev-complydp-pricing"],
    },
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
      whyItMatters:
        "We have identified a growing set of DPDP software vendors and published products. What remains unknown is actual customer adoption, purchase volume, renewal, and spend.",
      owner: "Founder",
      nextAction: "Interview question: what did you buy, renew, or abandon?",
      status: "in-progress",
      priority: "critical",
      domain: "competition",
      evidenceIds: [
        "ev-onetrust-dpdp",
        "ev-privy-capabilities",
        "ev-consentos-pricing",
        "ev-complynz-pricing",
        "ev-dpdpone-pricing",
      ],
    },
    {
      id: "q-competitor-pricing",
      question: "What are competitors charging?",
      whyItMatters:
        "Observed vendor pricing now ranges from roughly ₹2k/month at the low end to ₹1.5L+/month for some enterprise tiers, with project-based readiness offerings from ~₹50k to ₹20L+. These are vendor-listed prices, not transaction data.",
      owner: "Founder",
      nextAction: "Ask buyers what they actually paid — not list price",
      status: "in-progress",
      priority: "critical",
      domain: "competition",
      evidenceIds: ["ev-vendor-pricing-range", "ev-consentos-pricing", "ev-complynz-pricing"],
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
      question:
        "Is DPDP compliance a recurring software problem, or primarily a one-time / periodic consulting problem?",
      whyItMatters: "Decides company shape, margin, and fundraising story.",
      currentAnswer:
        "The market appears hybrid rather than purely software or purely consulting. Several vendors combine software + implementation + advisory/DPO services. The unresolved question is what customers actually prefer and what portion of spend becomes recurring software revenue.",
      owner: "Founder",
      nextAction: "Ask how they solve DPDP today and what they still lack after the last project",
      status: "in-progress",
      priority: "critical",
      domain: "business-model",
      evidenceIds: [
        "ev-ey-readiness",
        "ev-tcsa-consulting",
        "ev-consentos-pricing",
        "ev-complydp-pricing",
      ],
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
      question:
        "If a company already has OneTrust, Privy, ConsentOS or another DPDP platform, what do they still need?",
      whyItMatters:
        "Global and Indian platforms already cover broad DPDP workflows. The question is no longer whether they have features, but what customers still find difficult, expensive, slow, or poorly integrated.",
      owner: "Founder",
      nextAction: "Interview 2–3 organisations that already bought a platform or completed consulting",
      status: "open",
      priority: "critical",
      domain: "competition",
      evidenceIds: ["ev-onetrust-dpdp", "ev-privy-capabilities", "ev-complynz-pricing"],
    },
    {
      id: "q-post-platform-pain",
      question:
        "Which DPDP workflows remain painful after a company has already bought a compliance platform or completed a consulting project?",
      whyItMatters:
        "Generic platform is crowded — post-purchase pain may reveal the real wedge.",
      owner: "Founder",
      nextAction: "Add to interview guide after mapping current stack",
      status: "open",
      priority: "critical",
      domain: "product",
      evidenceIds: ["ev-onetrust-dpdp", "ev-complynz-consulting", "ev-tcsa-consulting"],
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
    {
      id: "log-3",
      date: "2026-08-18",
      title: "Thesis Research v0.1 ingested",
      note: "Updated core thesis, scorecard claims, vendor pricing sources (ConsentOS, ComplyDP, TCSA), Protiviti historical context. Added q-how-solving-today. Verdict: MEDIUM confidence · VALIDATE.",
      relatedIds: [
        { kind: "claim", id: "cl-verdict" },
        { kind: "source", id: "src-consentos" },
        { kind: "hypothesis", id: "hyp-recurring-software" },
      ],
    },
    {
      id: "log-4",
      date: "2026-08-18",
      title: "Current solutions and competitive landscape researched",
      note: "Mapped global enterprise, Indian enterprise, mid-market, consent, vertical and services competitors. Found broad competition and visible pricing. Strategic conclusion: do not build generic DPDP compliance software; search for underserved workflow/customer wedge.",
      relatedIds: [
        { kind: "claim", id: "cl-competition-high" },
        { kind: "decision", id: "dec-no-generic-platform" },
        { kind: "source", id: "src-privy" },
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
      id: "tl-thesis-v01",
      date: "2026-08-18",
      kind: "discovery",
      title: "Thesis Research v0.1 ingested",
      description:
        "Core thesis updated. Vendor pricing captured (listed only). Biggest open question: how companies solve DPDP today.",
      relatedIds: [{ kind: "claim", id: "cl-verdict" }],
    },
    {
      id: "tl-decision-verdict",
      date: "2026-08-18",
      kind: "decision",
      title: "Verdict: MEDIUM confidence · VALIDATE (Thesis v0.1)",
      description: "Regulatory trigger and operational workload established; commercial demand unproven.",
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
      id: "dec-no-generic-platform",
      decision: "Do not build a generic DPDP compliance platform.",
      context:
        "Competitive research shows broad DPDP compliance software is already crowded across enterprise, mid-market, consent, vertical and services categories.",
      optionsConsidered: [
        "Build another full-stack DPDP platform",
        "Search for a differentiated workflow or customer wedge first",
      ],
      chosenDirection: "Search for a differentiated workflow/customer wedge before product commitment.",
      why: "Competition is high. Obvious generic product is not whitespace.",
      evidenceIds: ["ev-onetrust-dpdp", "ev-privy-capabilities", "ev-complynz-pricing"],
      date: "2026-08-18",
      confidence: "medium",
      whatWouldChangeOurMind:
        "Evidence that a specific segment has a painful workflow existing products fail to solve and is willing to pay for a focused solution.",
    },
    {
      id: "dec-verdict",
      decision: "Verdict: MEDIUM confidence · VALIDATE — Thesis v0.1.",
      context:
        "Rules establish operational workload; EY shows readiness gaps; vendors publish DPDP products/prices. No primary evidence of customer spend at scale.",
      optionsConsidered: [
        "Proceed to build product now",
        "Pause for customer discovery — especially how companies solve DPDP today",
      ],
      chosenDirection: "Pause for customer discovery and spend validation.",
      why: "Regulatory trigger and operational workload: YES. Actual customer spend, best segment, software vs consulting: UNKNOWN.",
      evidenceIds: [
        "ev-rules-commencement",
        "ev-rules-operational",
        "ev-ey-readiness",
        "ev-consentos-pricing",
      ],
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
      upside: "Category-defining if a differentiated wedge exists.",
      downside: "Generic full-stack play is crowded — OneTrust, Privy, ConsentOS, Complynz, DPDPOne.",
      status: "parked",
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
      description:
        "Needs differentiation. If boards require continuous proof, not slides — but generic system-of-record positioning is crowded.",
      who: "Digitally intensive mid-market organisations with immature privacy ops",
      whyNow: "EY: 83%+ not begun comprehensive implementation; core Rules from May 2027",
      attractiveness: "unknown",
      relatedQuestionIds: ["q-post-platform-pain", "q-how-solving-today", "q-software-vs-services"],
    },
    {
      id: "opp-consumer-tech",
      name: "Consumer / retail / tech SaaS wedge",
      description:
        "Needs differentiation. EY sector leaders show readiness — but ConsentOS, Complynz, DPDPOne already target mid-market.",
      who: "Consumer/retail/e-commerce and technology/SaaS organisations",
      whyNow: "Highest observed readiness rates in EY survey",
      attractiveness: "unknown",
      relatedQuestionIds: ["q-icp-count", "q-startup-wtp", "q-post-platform-pain"],
    },
    {
      id: "opp-rights",
      name: "Rights fulfilment desk",
      description:
        "Needs differentiation. Rights is a real workflow but OneTrust, Privy, Complynz, DPDPOne and vertical products already include rights.",
      who: "High-principal-count digital businesses",
      whyNow: "Rights sections as they commence",
      attractiveness: "unknown",
      relatedQuestionIds: ["q-post-platform-pain", "q-incumbents"],
    },
    {
      id: "opp-sdf",
      name: "SDF readiness",
      description:
        "Needs differentiation. ConsentOS, Complynz, ComplyDP and Sirius Star already publish SDF tiers.",
      who: "Likely large digital / BFSI",
      whyNow: "Only after designation mechanics are real",
      attractiveness: "unknown",
      relatedQuestionIds: ["q-consent-manager", "q-incumbents"],
    },
    {
      id: "opp-vertical-workflow",
      name: "Vertical workflow",
      description:
        "DPDP workflow built deeply for one specific industry or stack (e.g. D2C commerce — DPDP Compliant exists as reference).",
      who: "Organisations in a specific vertical with scattered personal data",
      whyNow: "Vertical products already emerging — need unserved stack or industry",
      attractiveness: "unknown",
      relatedQuestionIds: ["q-post-platform-pain", "q-icp-count"],
    },
    {
      id: "opp-post-consulting",
      name: "Post-consulting operations",
      description:
        "Software for the work that continues after a readiness assessment or consulting project (TCSA, Complynz consulting, Big-4).",
      who: "Organisations that completed a DPDP project but lack ongoing ops tooling",
      whyNow: "Hybrid market — many vendors sell projects first",
      attractiveness: "unknown",
      relatedQuestionIds: ["q-how-solving-today", "q-post-platform-pain", "q-software-vs-services"],
    },
    {
      id: "opp-integration-layer",
      name: "Privacy operations integration layer",
      description:
        "Connect DPDP obligations to existing Jira, CRM, IAM, cloud and business systems instead of becoming another standalone GRC.",
      who: "Organisations with existing tools but poor DPDP operational integration",
      whyNow: "Standalone GRC crowded; integration pain unvalidated",
      attractiveness: "unknown",
      relatedQuestionIds: ["q-post-platform-pain", "q-incumbents"],
    },
  ],
  experiments: [
    {
      id: "exp-interviews-10",
      name: "10 ICP interviews in 30 days",
      hypothesisId: "hyp-recurring-software",
      method: "Structured conversations; map current stack (software, consulting, DIY)",
      metric: "Count solving via recurring software vs project/consulting vs nothing",
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
      action: "Run the first five customer interviews — lead with ‘how are you solving DPDP today?’",
      why: "Thesis v0.1 blocking question: software vs consulting vs DIY; EY shows gaps, not purchases",
      owner: "Founder",
      relatedQuestionId: "q-how-solving-today",
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
      action: "Interview buyers who already use a DPDP platform or completed consulting",
      why: "Map post-platform pain — generic features are crowded; gap discovery is the priority",
      owner: "Founder",
      relatedQuestionId: "q-post-platform-pain",
      priority: "critical",
    },
  ],
  progress: [
    {
      id: "market",
      label: "Market",
      coverage: "developing",
      confidence: "medium",
      notes: "Thesis v0.1 + competitive landscape ingested. TAM/SAM/SOM still blank by design.",
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
      coverage: "developing",
      confidence: "medium",
      notes:
        "Multiple active vendors and pricing models mapped. Actual customer adoption/revenue still poorly evidenced.",
    },
    {
      id: "product",
      label: "Product",
      coverage: "early",
      confidence: "unresolved",
      notes: "Generic platform is crowded. Differentiated workflow/segment still needs discovery.",
    },
    {
      id: "business-model",
      label: "Business Model",
      coverage: "developing",
      confidence: "low",
      notes:
        "Observed recurring software and service pricing, but customer transaction data and willingness to pay remain unknown.",
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
