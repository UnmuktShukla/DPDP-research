import { newId } from "@/lib/labels"
import type {
  Competitor,
  Hypothesis,
  OpenQuestion,
  ResearchItem,
  Source,
  Workspace,
  Regulation,
  ResearchLogEntry,
  StrategicDecision,
} from "@/lib/types"

export function emptySource(): Source {
  return {
    id: newId("src"),
    title: "Untitled source",
    organisation: "",
    type: "other",
    contentKind: "research",
  }
}

export function emptyResearchItem(): ResearchItem {
  return {
    id: newId("ri"),
    title: "Untitled research",
    category: "other",
    summary: "",
    keyFindings: [],
    relevance: "supporting",
    confidence: "unresolved",
    tags: [],
    relatedHypothesisIds: [],
    relatedCompetitorIds: [],
    relatedSegmentIds: [],
    relatedRegulationIds: [],
    status: "collected",
    contentKind: "research",
  }
}

export function emptyHypothesis(): Hypothesis {
  return {
    id: newId("hyp"),
    statement: "New hypothesis",
    category: "market",
    whyWeBelieveIt: "",
    supportingEvidenceIds: [],
    contradictingEvidenceIds: [],
    confidence: "unresolved",
    validationMethod: "",
    status: "assumption",
    nextAction: "",
  }
}

export function emptyQuestion(): OpenQuestion {
  return {
    id: newId("q"),
    question: "New question",
    whyItMatters: "",
    evidenceIds: [],
    owner: "Founder",
    nextAction: "",
    status: "open",
    priority: "important",
    domain: "market",
  }
}

export function emptyCompetitor(): Competitor {
  return {
    id: newId("cmp"),
    company: "New competitor",
    category: "",
    targetCustomer: "",
    product: "",
    coreCapability: "",
    pricing: "Research required",
    positioning: "",
    funding: "",
    geography: "",
    strengths: [],
    weaknesses: [],
    dpdpPositioning: "",
    differentiation: "",
    evidenceIds: [],
    sourceIds: [],
    contentKind: "research",
  }
}

export function emptyRegulation(
  topic: Regulation["topic"] = "compliance",
): Regulation {
  return {
    id: newId("reg"),
    title: "Untitled requirement",
    topic,
    regulationText: "",
    requirement: "",
    whoIsAffected: "",
    businessImplication: "",
    productOpportunity: "",
    evidenceIds: [],
    sourceIds: [],
    confidence: "needs-legal-validation",
    contentKind: "research",
  }
}

export function emptyDecision(): StrategicDecision {
  return {
    id: newId("dec"),
    decision: "New decision",
    context: "",
    optionsConsidered: [],
    chosenDirection: "",
    why: "",
    evidenceIds: [],
    date: new Date().toISOString().slice(0, 10),
    confidence: "provisional",
    whatWouldChangeOurMind: "",
  }
}

export function emptyLogEntry(): ResearchLogEntry {
  return {
    id: newId("log"),
    date: new Date().toISOString().slice(0, 10),
    title: "Research note",
    note: "",
  }
}

export function workspaceStatsLines(workspace: Workspace) {
  return {
    lastUpdated: workspace.meta.lastUpdated,
    researchStatus: workspace.meta.researchStatus,
    sources: String(workspace.sources.length),
    validated: String(
      workspace.hypotheses.filter((h) => h.status === "validated").length,
    ),
    questions: String(
      workspace.questions.filter(
        (q) => q.status === "open" || q.status === "in-progress",
      ).length,
    ),
    coverage: `${workspace.progress.filter((p) => p.coverage !== "none").length}/${workspace.progress.length} areas`,
  }
}
