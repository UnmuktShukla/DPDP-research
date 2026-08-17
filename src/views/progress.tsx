"use client"

import Link from "next/link"
import { useWorkspace } from "@/lib/store"
import { coverageLabel, researchConfidenceLabel } from "@/lib/labels"
import {
  Chip,
  Document,
  PageHeader,
  PlaceholderBanner,
  Section,
} from "@/components/editorial/primitives"
import type { ProgressAreaId } from "@/lib/types"

const hrefFor: Record<ProgressAreaId, string> = {
  market: "/market",
  customer: "/market/segments",
  regulation: "/dpdp",
  competition: "/competition",
  product: "/startup/product",
  "business-model": "/startup/business-model",
  gtm: "/startup/gtm",
  technology: "/startup/product",
}

export function ProgressView() {
  const { workspace } = useWorkspace()

  return (
    <Document>
      <PageHeader
        kicker="Overview"
        title="Research Progress"
        description="Coverage is qualitative. Percentages would pretend we know more than we do."
      />
      <div className="mt-6">
        <PlaceholderBanner />
      </div>
      <Section title="Research map">
        <div className="divide-y divide-border border-y border-border">
          {workspace.progress.map((area) => {
            const questions = workspace.questions.filter((q) => q.domain === area.id)
            const hypotheses = workspace.hypotheses.filter((h) => h.category === area.id)
            const sourcesForArea = workspace.researchItems.filter(
              (item) => item.category === area.id,
            ).length
            return (
              <Link
                key={area.id}
                href={hrefFor[area.id]}
                className="grid gap-3 py-5 transition-colors hover:bg-muted/40 sm:grid-cols-[8rem_1fr_auto]"
              >
                <p className="text-sm font-medium">{area.label}</p>
                <div>
                  <p className="text-sm leading-6 text-muted-foreground">{area.notes}</p>
                  <p className="mt-2 text-[12px] text-muted-foreground">
                    {questions.length} open questions · {hypotheses.length} hypotheses ·{" "}
                    {sourcesForArea} library items
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2 sm:justify-end">
                  <Chip tone="accent">{coverageLabel[area.coverage]}</Chip>
                  <Chip>{researchConfidenceLabel[area.confidence]}</Chip>
                </div>
              </Link>
            )
          })}
        </div>
      </Section>
    </Document>
  )
}
