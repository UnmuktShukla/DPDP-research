"use client"

import { useWorkspace } from "@/lib/store"
import { Editable } from "@/components/editorial/editable"
import {
  Document,
  PageHeader,
  PlaceholderBanner,
  Section,
} from "@/components/editorial/primitives"

export function ThesisView() {
  const { workspace, setWorkspace } = useWorkspace()

  return (
    <Document>
      <PageHeader
        kicker="Overview"
        title="Thesis"
        description="The load-bearing story. Everything else in this workspace exists to support, weaken, or replace it."
      />
      <div className="mt-6">
        <PlaceholderBanner />
      </div>
      <Section title="Strategic thesis">
        <div className="editorial text-xl leading-8">
          <Editable
            serif
            value={workspace.strategicThesis}
            onChange={(strategicThesis) =>
              setWorkspace({ ...workspace, strategicThesis })
            }
          />
        </div>
      </Section>
      <Section title="Working executive thesis">
        <div className="space-y-8">
          <div>
            <p className="text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
              Problem
            </p>
            <p className="editorial mt-2 text-lg leading-8">
              {workspace.thesis.problem}
            </p>
          </div>
          <div>
            <p className="text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
              Insight
            </p>
            <p className="editorial mt-2 text-lg leading-8">
              {workspace.thesis.insight}
            </p>
          </div>
          <div>
            <p className="text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
              Opportunity
            </p>
            <p className="editorial mt-2 text-lg leading-8">
              {workspace.thesis.opportunity}
            </p>
          </div>
          <div>
            <p className="text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
              Direction
            </p>
            <p className="editorial mt-2 text-lg leading-8">
              {workspace.thesis.proposedDirection}
            </p>
          </div>
        </div>
      </Section>
    </Document>
  )
}
