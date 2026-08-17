import type {
  LegalConfidence,
  ResearchConfidence,
  HypothesisStatus,
  CoverageLevel,
} from "@/lib/types"

export const legalConfidenceLabel: Record<LegalConfidence, string> = {
  confirmed: "Confirmed",
  "strong-interpretation": "Strong interpretation",
  "open-interpretation": "Open interpretation",
  "needs-legal-validation": "Needs legal validation",
}

export const researchConfidenceLabel: Record<ResearchConfidence, string> = {
  high: "High",
  medium: "Medium",
  low: "Low",
  unresolved: "Unresolved",
}

export const hypothesisStatusLabel: Record<HypothesisStatus, string> = {
  assumption: "Assumption",
  investigating: "Investigating",
  supported: "Supported",
  validated: "Validated",
  rejected: "Rejected",
}

export const coverageLabel: Record<CoverageLevel, string> = {
  none: "Not started",
  early: "Early",
  developing: "Developing",
  substantial: "Substantial",
  strong: "Strong",
}

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
] as const

/** Deterministic formatting — avoids SSR/client locale mismatches from toLocaleDateString. */
export function formatDate(value?: string) {
  if (!value) return "—"

  const monthOnly = value.match(/^(\d{4})-(\d{2})$/)
  if (monthOnly) {
    const [, year, month] = monthOnly
    return `${MONTHS[Number(month) - 1]} ${year}`
  }

  const full = value.match(/^(\d{4})-(\d{2})-(\d{2})/)
  if (full) {
    const [, year, month, day] = full
    return `${Number(day)} ${MONTHS[Number(month) - 1]} ${year}`
  }

  return value
}

export function newId(prefix: string) {
  return `${prefix}-${Math.random().toString(36).slice(2, 8)}`
}
