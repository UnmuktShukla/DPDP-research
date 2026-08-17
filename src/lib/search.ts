import type { Workspace } from "@/lib/types"
import { nav } from "@/lib/nav"

export type SearchHit = {
  id: string
  href: string
  title: string
  group: string
  excerpt: string
}

function push(
  hits: SearchHit[],
  seen: Set<string>,
  hit: SearchHit,
) {
  if (seen.has(hit.id)) return
  seen.add(hit.id)
  hits.push(hit)
}

function matches(query: string, ...values: Array<string | undefined | string[]>) {
  const haystack = values
    .flat()
    .filter(Boolean)
    .join(" ")
    .toLowerCase()
  return haystack.includes(query)
}

export function searchWorkspace(workspace: Workspace, rawQuery: string): SearchHit[] {
  const query = rawQuery.trim().toLowerCase()
  if (!query) return []

  const hits: SearchHit[] = []
  const seen = new Set<string>()

  for (const group of nav) {
    for (const item of group.items) {
      if (matches(query, item.label, group.label)) {
        push(hits, seen, {
          id: `nav-${item.href}`,
          href: item.href,
          title: item.label,
          group: group.label,
          excerpt: `${group.label} · Navigate`,
        })
      }
    }
  }

  for (const item of workspace.researchItems) {
    if (matches(query, item.title, item.summary, item.keyFindings, item.tags, item.category)) {
      push(hits, seen, {
        id: item.id,
        href: `/research/${item.id}`,
        title: item.title,
        group: "Research",
        excerpt: item.summary,
      })
    }
  }

  for (const source of workspace.sources) {
    if (matches(query, source.title, source.organisation, source.author, source.notes)) {
      push(hits, seen, {
        id: source.id,
        href: `/research/sources#${source.id}`,
        title: source.title,
        group: "Sources",
        excerpt: source.organisation,
      })
    }
  }

  for (const competitor of workspace.competitors) {
    if (
      matches(
        query,
        competitor.company,
        competitor.product,
        competitor.positioning,
        competitor.category,
      )
    ) {
      push(hits, seen, {
        id: competitor.id,
        href: `/competition/${competitor.id}`,
        title: competitor.company,
        group: "Competition",
        excerpt: competitor.positioning,
      })
    }
  }

  for (const regulation of workspace.regulations) {
    if (
      matches(
        query,
        regulation.title,
        regulation.regulationText,
        regulation.requirement,
        regulation.productOpportunity,
      )
    ) {
      push(hits, seen, {
        id: regulation.id,
        href: `/dpdp/${regulation.topic === "landscape" ? "" : regulation.topic}`.replace(/\/$/, "") || "/dpdp",
        title: regulation.title,
        group: "DPDP",
        excerpt: regulation.requirement,
      })
    }
  }

  for (const hypothesis of workspace.hypotheses) {
    if (matches(query, hypothesis.statement, hypothesis.category, hypothesis.nextAction)) {
      push(hits, seen, {
        id: hypothesis.id,
        href: `/research/hypotheses#${hypothesis.id}`,
        title: hypothesis.statement,
        group: "Hypotheses",
        excerpt: hypothesis.status,
      })
    }
  }

  for (const claim of workspace.claims) {
    if (matches(query, claim.statement, claim.implication)) {
      push(hits, seen, {
        id: claim.id,
        href: `/research/evidence#${claim.id}`,
        title: claim.statement,
        group: "Claims",
        excerpt: claim.implication ?? "Claim",
      })
    }
  }

  for (const question of workspace.questions) {
    if (matches(query, question.question, question.whyItMatters, question.currentAnswer)) {
      push(hits, seen, {
        id: question.id,
        href: `/research/questions#${question.id}`,
        title: question.question,
        group: "Questions",
        excerpt: question.whyItMatters,
      })
    }
  }

  for (const decision of workspace.decisions) {
    if (matches(query, decision.decision, decision.why, decision.chosenDirection)) {
      push(hits, seen, {
        id: decision.id,
        href: `/strategy/decisions#${decision.id}`,
        title: decision.decision,
        group: "Decisions",
        excerpt: decision.why,
      })
    }
  }

  for (const segment of workspace.segments) {
    if (matches(query, segment.name, segment.description, segment.industry)) {
      push(hits, seen, {
        id: segment.id,
        href: `/market/segments#${segment.id}`,
        title: segment.name,
        group: "Customers",
        excerpt: segment.description,
      })
    }
  }

  return hits.slice(0, 24)
}

export function deriveStats(workspace: Workspace) {
  const sources = workspace.sources.length
  const validated = workspace.hypotheses.filter((h) => h.status === "validated").length
  const supported = workspace.hypotheses.filter((h) => h.status === "supported" || h.status === "validated").length
  const openQuestions = workspace.questions.filter((q) => q.status === "open" || q.status === "in-progress").length
  const coverage = workspace.progress.filter((p) => p.coverage !== "none").length
  const coverageLabel = `${coverage}/${workspace.progress.length} areas started`

  return {
    sources,
    validated,
    supported,
    openQuestions,
    coverageLabel,
    hypotheses: workspace.hypotheses.length,
    researchItems: workspace.researchItems.length,
  }
}
