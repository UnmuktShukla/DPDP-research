"use client"

import { useWorkspace } from "@/lib/store"
import { deriveStats } from "@/lib/search"
import { formatDate } from "@/lib/labels"
import { Editable } from "@/components/editorial/editable"
import { ClaimBlock } from "@/components/editorial/evidence"
import {
  Document,
  MetaStrip,
  PageHeader,
  PlaceholderBanner,
  Section,
} from "@/components/editorial/primitives"
import Link from "next/link"

export function OverviewView() {
  const { workspace, updateThesis } = useWorkspace()
  const stats = deriveStats(workspace)
  const claim = workspace.claims.find((item) => item.id === "cl-verdict")

  return (
    <Document>
      <PageHeader
        kicker="DPDP Startup Research"
        title={workspace.meta.title}
        description={workspace.meta.subtitle}
      />
      <div className="mt-6">
        <PlaceholderBanner />
      </div>
      <MetaStrip
        items={[
          { label: "Last updated", value: formatDate(workspace.meta.lastUpdated) },
          { label: "Research status", value: workspace.meta.researchStatus },
          { label: "Sources", value: String(stats.sources) },
          { label: "Validated hypotheses", value: String(stats.validated) },
          { label: "Open questions", value: String(stats.openQuestions) },
          { label: "Research coverage", value: stats.coverageLabel },
        ]}
      />

      <Section
        title="Executive Thesis"
        description="Regulatory need established. Customer need increasingly evidenced. Commercial demand still unproven."
      >
        <div className="divide-y divide-border border-y border-border">
          {(
            [
              ["problem", "Problem", workspace.thesis.problem],
              ["insight", "Insight", workspace.thesis.insight],
              ["opportunity", "Opportunity", workspace.thesis.opportunity],
              [
                "proposedDirection",
                "Proposed Direction",
                workspace.thesis.proposedDirection,
              ],
            ] as const
          ).map(([key, label, value]) => (
            <div key={key} className="py-6">
              <p className="text-[11px] font-medium tracking-[0.16em] text-muted-foreground uppercase">
                {label}
              </p>
              <div className="editorial mt-2 text-xl leading-8">
                <Editable
                  serif
                  value={value}
                  onChange={(next) => updateThesis({ [key]: next })}
                />
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="What we can defend today">
        {claim ? <ClaimBlock claim={claim} workspace={workspace} /> : null}
        <p className="mt-6 text-sm text-muted-foreground">
          Drill into{" "}
          <Link className="text-primary underline-offset-4 hover:underline" href="/research/evidence">
            evidence
          </Link>
          ,{" "}
          <Link className="text-primary underline-offset-4 hover:underline" href="/research/questions">
            open questions
          </Link>
          , or the{" "}
          <Link className="text-primary underline-offset-4 hover:underline" href="/dpdp">
            DPDP map
          </Link>
          .
        </p>
      </Section>
    </Document>
  )
}
