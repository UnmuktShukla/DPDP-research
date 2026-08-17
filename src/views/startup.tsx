"use client"

import { BusinessPlanView } from "@/views/business-plan"
import type { BusinessPlan } from "@/lib/types"
import {
  Chip,
  Document,
  PageHeader,
  PlaceholderBanner,
  Section,
} from "@/components/editorial/primitives"
import { useWorkspace } from "@/lib/store"

const map: Record<string, keyof BusinessPlan | "roadmap"> = {
  problem: "problem",
  solution: "solution",
  product: "solution",
  "business-model": "businessModel",
  pricing: "businessModel",
  gtm: "gtm",
  distribution: "gtm",
  moat: "advantage",
  risks: "risks",
}

export function StartupView({ slug }: { slug: string }) {
  if (slug === "roadmap") {
    return <RoadmapView />
  }
  const key = map[slug]
  if (key && key !== "roadmap") {
    return <BusinessPlanView only={key} />
  }
  return (
    <Document>
      <PageHeader title="Not found" />
    </Document>
  )
}

function RoadmapView() {
  const { workspace } = useWorkspace()
  return (
    <Document>
      <PageHeader
        kicker="Startup"
        title="Roadmap"
        description="Near-term work is research, not a product Gantt."
      />
      <div className="mt-6">
        <PlaceholderBanner />
      </div>
      <Section title="Next 30 days">
        <ol className="divide-y divide-border border-y border-border">
          {workspace.nextSteps.map((step) => (
            <li key={step.id} className="flex items-start justify-between gap-4 py-4">
              <div>
                <p className="font-medium">{step.action}</p>
                <p className="mt-1 text-sm text-muted-foreground">{step.why}</p>
              </div>
              <Chip>{step.priority}</Chip>
            </li>
          ))}
        </ol>
      </Section>
      <Section title="Product build">
        <p className="text-[15px] leading-7 text-muted-foreground">
          Product roadmap is parked until a wedge is chosen. See{" "}
          <span className="text-foreground">Strategy → Options</span>.
        </p>
      </Section>
    </Document>
  )
}
