export type ContentKind = "placeholder" | "research" | "confirmed"

export type LegalConfidence =
  | "confirmed"
  | "strong-interpretation"
  | "open-interpretation"
  | "needs-legal-validation"

export type ResearchConfidence = "high" | "medium" | "low" | "unresolved"

export type HypothesisStatus =
  | "assumption"
  | "investigating"
  | "supported"
  | "validated"
  | "rejected"

export type QuestionPriority = "critical" | "important" | "nice-to-know"

export type QuestionStatus = "open" | "in-progress" | "answered" | "parked"

export type DecisionConfidence = "high" | "medium" | "low" | "provisional"

export type ResearchStatus =
  | "collected"
  | "reviewed"
  | "needs-review"
  | "contradicted"

export type CoverageLevel =
  | "none"
  | "early"
  | "developing"
  | "substantial"
  | "strong"

export type MarketSizeStatus = "resolved" | "research-required"

export type EntityRef = {
  kind:
    | "research"
    | "source"
    | "claim"
    | "evidence"
    | "hypothesis"
    | "competitor"
    | "segment"
    | "trend"
    | "regulation"
    | "requirement"
    | "decision"
    | "question"
    | "interview"
  id: string
}

export type Source = {
  id: string
  title: string
  organisation: string
  author?: string
  url?: string
  date?: string
  type: "statute" | "rules" | "official" | "legal-analysis" | "news" | "report" | "interview" | "other"
  notes?: string
  contentKind: ContentKind
}

export type Evidence = {
  id: string
  sourceId: string
  excerpt: string
  location?: string
  interpretation: string
  contentKind: ContentKind
}

export type Claim = {
  id: string
  statement: string
  evidenceIds: string[]
  confidence: ResearchConfidence
  implication?: string
  contentKind: ContentKind
}

export type Hypothesis = {
  id: string
  statement: string
  category:
    | "market"
    | "customer"
    | "regulation"
    | "competition"
    | "product"
    | "business-model"
    | "gtm"
    | "technology"
  whyWeBelieveIt: string
  supportingEvidenceIds: string[]
  contradictingEvidenceIds: string[]
  confidence: ResearchConfidence
  validationMethod: string
  status: HypothesisStatus
  nextAction: string
  relatedIds?: EntityRef[]
}

export type OpenQuestion = {
  id: string
  question: string
  whyItMatters: string
  currentAnswer?: string
  evidenceIds: string[]
  owner: string
  nextAction: string
  status: QuestionStatus
  priority: QuestionPriority
  domain:
    | "market"
    | "customer"
    | "regulation"
    | "competition"
    | "product"
    | "business-model"
    | "gtm"
    | "technology"
}

export type CustomerSegment = {
  id: string
  name: string
  description: string
  companySize: string
  industry: string
  buyer: string
  user: string
  keyProblems: string[]
  currentWorkflow: string
  currentTools: string[]
  regulatoryPressure: string
  willingnessToPay: string
  buyingTrigger: string
  objections: string[]
  evidenceIds: string[]
  confidence: ResearchConfidence
  journey: {
    pain: string
    currentSolution: string
    gap: string
    opportunity: string
  }
}

export type PainPoint = {
  id: string
  name: string
  severity: "high" | "medium" | "low"
  frequency: "high" | "medium" | "low"
  willingnessToPay: "high" | "medium" | "low" | "unknown"
  existingSolutionQuality: "poor" | "uneven" | "adequate" | "strong" | "unknown"
  notes: string
  evidenceIds: string[]
}

export type MarketTrend = {
  id: string
  date: string
  title: string
  description: string
  sourceIds: string[]
  significance: string
}

export type DemandSignal = {
  id: string
  signal: string
  observation: string
  implication: string
  confidence: ResearchConfidence
  evidenceIds: string[]
}

export type MarketSizeField = {
  label: "TAM" | "SAM" | "SOM"
  status: MarketSizeStatus
  value?: string
  notes: string
}

export type Competitor = {
  id: string
  company: string
  website?: string
  category: string
  targetCustomer: string
  product: string
  coreCapability: string
  pricing: string
  positioning: string
  funding: string
  geography: string
  strengths: string[]
  weaknesses: string[]
  dpdpPositioning: string
  differentiation: string
  evidenceIds: string[]
  sourceIds: string[]
  contentKind: ContentKind
}

export type ComparisonCell = {
  value: string
  notes?: string
}

export type ComparisonRow = {
  id: string
  dimension: string
  cells: Record<string, ComparisonCell>
}

export type ComparisonMatrix = {
  columns: { id: string; label: string; competitorId?: string }[]
  rows: ComparisonRow[]
}

export type RegulationTopic =
  | "landscape"
  | "act"
  | "rules"
  | "compliance"
  | "fiduciary"
  | "consent"
  | "rights"
  | "sdf"
  | "cross-border"
  | "penalties"
  | "questions"

export type Regulation = {
  id: string
  title: string
  topic: RegulationTopic
  regulationText: string
  requirement: string
  whoIsAffected: string
  businessImplication: string
  productOpportunity: string
  evidenceIds: string[]
  sourceIds: string[]
  confidence: LegalConfidence
  contentKind: ContentKind
}

export type Requirement = Regulation

export type ResearchItem = {
  id: string
  title: string
  category:
    | "market"
    | "customer"
    | "regulation"
    | "competition"
    | "product"
    | "business-model"
    | "gtm"
    | "technology"
    | "other"
  summary: string
  keyFindings: string[]
  sourceId?: string
  url?: string
  date?: string
  authorOrganisation?: string
  relevance: "core" | "supporting" | "background"
  confidence: ResearchConfidence
  tags: string[]
  relatedHypothesisIds: string[]
  relatedCompetitorIds: string[]
  relatedSegmentIds: string[]
  relatedRegulationIds: string[]
  status: ResearchStatus
  contentKind: ContentKind
}

export type Interview = {
  id: string
  title: string
  intervieweeRole: string
  organisationType: string
  date?: string
  summary: string
  quotes: string[]
  findings: string[]
  relatedSegmentId?: string
  evidenceIds: string[]
  status: "planned" | "completed" | "synthesised"
}

export type ResearchLogEntry = {
  id: string
  date: string
  title: string
  note: string
  relatedIds?: EntityRef[]
}

export type TimelineEvent = {
  id: string
  date: string
  kind:
    | "regulation"
    | "discovery"
    | "competitor"
    | "market"
    | "decision"
    | "hypothesis"
    | "product"
  title: string
  description: string
  relatedIds?: EntityRef[]
}

export type StrategicDecision = {
  id: string
  decision: string
  context: string
  optionsConsidered: string[]
  chosenDirection: string
  why: string
  evidenceIds: string[]
  date: string
  confidence: DecisionConfidence
  whatWouldChangeOurMind: string
}

export type StrategicOption = {
  id: string
  name: string
  description: string
  upside: string
  downside: string
  status: "exploring" | "preferred" | "parked" | "rejected"
}

export type Opportunity = {
  id: string
  name: string
  description: string
  who: string
  whyNow: string
  attractiveness: "high" | "medium" | "low" | "unknown"
  relatedQuestionIds: string[]
}

export type Experiment = {
  id: string
  name: string
  hypothesisId?: string
  method: string
  metric: string
  status: "planned" | "running" | "complete"
  result?: string
}

export type NextStep = {
  id: string
  action: string
  why: string
  owner: string
  relatedQuestionId?: string
  priority: QuestionPriority
}

export type Thesis = {
  problem: string
  insight: string
  opportunity: string
  proposedDirection: string
}

export type BusinessPlanSection = {
  id: string
  fields: { key: string; label: string; value: string }[]
}

export type BusinessPlan = {
  problem: BusinessPlanSection
  customer: BusinessPlanSection
  solution: BusinessPlanSection
  businessModel: BusinessPlanSection
  gtm: BusinessPlanSection
  advantage: BusinessPlanSection
  risks: BusinessPlanSection
}

export type ProgressAreaId =
  | "market"
  | "customer"
  | "regulation"
  | "competition"
  | "product"
  | "business-model"
  | "gtm"
  | "technology"

export type ProgressArea = {
  id: ProgressAreaId
  label: string
  coverage: CoverageLevel
  confidence: ResearchConfidence
  notes: string
}

export type WorkspaceMeta = {
  title: string
  subtitle: string
  lastUpdated: string
  researchStatus: string
  disclaimer: string
}

export type Workspace = {
  meta: WorkspaceMeta
  thesis: Thesis
  businessPlan: BusinessPlan
  marketDefinition: string
  marketDrivers: { id: string; title: string; detail: string }[]
  marketTrends: MarketTrend[]
  painPoints: PainPoint[]
  demandSignals: DemandSignal[]
  marketSize: MarketSizeField[]
  segments: CustomerSegment[]
  regulations: Regulation[]
  competitors: Competitor[]
  comparison: ComparisonMatrix
  researchItems: ResearchItem[]
  sources: Source[]
  claims: Claim[]
  evidence: Evidence[]
  hypotheses: Hypothesis[]
  questions: OpenQuestion[]
  interviews: Interview[]
  researchLog: ResearchLogEntry[]
  timeline: TimelineEvent[]
  decisions: StrategicDecision[]
  options: StrategicOption[]
  opportunities: Opportunity[]
  experiments: Experiment[]
  nextSteps: NextStep[]
  progress: ProgressArea[]
  strategicThesis: string
}
