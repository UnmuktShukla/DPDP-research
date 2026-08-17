"use client"

import { useWorkspace } from "@/lib/store"
import { Editable } from "@/components/editorial/editable"
import {
  Chip,
  ConfidenceChip,
  Document,
  Field,
  PageHeader,
  PlaceholderBanner,
  RuleList,
  Section,
  Unresolved,
} from "@/components/editorial/primitives"
import { EvidenceTrail } from "@/components/editorial/evidence"
import { formatDate } from "@/lib/labels"

export function MarketLandscapeView() {
  const { workspace, setWorkspace } = useWorkspace()
  return (
    <Document>
      <PageHeader
        kicker="Market"
        title="Market Landscape"
        description="An editorial definition of the market we are studying — not a chart pack."
      />
      <div className="mt-6">
        <PlaceholderBanner />
      </div>
      <Section title="Market definition">
        <div className="editorial text-lg leading-8">
          <Editable
            serif
            value={workspace.marketDefinition}
            onChange={(marketDefinition) =>
              setWorkspace({ ...workspace, marketDefinition })
            }
          />
        </div>
      </Section>
      <Section title="Market drivers">
        <div className="divide-y divide-border border-y border-border">
          {workspace.marketDrivers.map((driver) => (
            <div key={driver.id} className="py-5">
              <p className="font-medium">{driver.title}</p>
              <p className="mt-1 text-[15px] leading-7 text-muted-foreground">
                {driver.detail}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </Document>
  )
}

export function MarketSizeView() {
  const { workspace } = useWorkspace()
  return (
    <Document>
      <PageHeader
        kicker="Market"
        title="Market Size"
        description="Numbers are only shown when sourced. Invented TAM is worse than a blank page."
      />
      <div className="mt-6">
        <PlaceholderBanner />
      </div>
      {workspace.marketSize.map((field) => (
        <Section key={field.label} title={field.label}>
          {field.status === "research-required" ? (
            <Unresolved note={field.notes} />
          ) : (
            <p className="text-lg">{field.value}</p>
          )}
        </Section>
      ))}
    </Document>
  )
}

export function MarketTrendsView() {
  const { workspace } = useWorkspace()
  return (
    <Document>
      <PageHeader
        kicker="Market"
        title="Industry Trends"
        description="A timeline of developments that matter to the thesis."
      />
      <div className="mt-6">
        <PlaceholderBanner />
      </div>
      <Section title="Timeline">
        <ol className="relative border-l border-border pl-6">
          {workspace.marketTrends.map((trend) => (
            <li key={trend.id} className="mb-8 last:mb-0">
              <span className="absolute -left-1 mt-1.5 size-2 rounded-full bg-primary" />
              <p className="text-[11px] tracking-[0.14em] text-muted-foreground uppercase">
                {formatDate(trend.date)}
              </p>
              <p className="mt-1 font-medium">{trend.title}</p>
              <p className="mt-1 text-[15px] leading-7 text-muted-foreground">
                {trend.description}
              </p>
              <p className="mt-2 text-sm">{trend.significance}</p>
            </li>
          ))}
        </ol>
      </Section>
    </Document>
  )
}

export function PainPointsView() {
  const { workspace } = useWorkspace()
  return (
    <Document wide>
      <PageHeader
        kicker="Market"
        title="Pain Points"
        description="Ranked by severity, frequency, willingness to pay, and existing solution quality."
      />
      <div className="mt-6">
        <PlaceholderBanner />
      </div>
      <div className="mt-8 overflow-x-auto">
        <table className="w-full min-w-[48rem] text-left text-sm">
          <thead>
            <tr className="border-b border-border text-[11px] tracking-[0.12em] text-muted-foreground uppercase">
              <th className="py-2 pr-4 font-medium">Pain</th>
              <th className="py-2 pr-4 font-medium">Severity</th>
              <th className="py-2 pr-4 font-medium">Frequency</th>
              <th className="py-2 pr-4 font-medium">Willingness to pay</th>
              <th className="py-2 pr-4 font-medium">Existing solution</th>
            </tr>
          </thead>
          <tbody>
            {workspace.painPoints.map((pain) => (
              <tr key={pain.id} className="border-b border-border align-top">
                <td className="py-4 pr-4">
                  <p className="font-medium">{pain.name}</p>
                  <p className="mt-1 text-muted-foreground">{pain.notes}</p>
                </td>
                <td className="py-4 pr-4">
                  <Chip>{pain.severity}</Chip>
                </td>
                <td className="py-4 pr-4">
                  <Chip>{pain.frequency}</Chip>
                </td>
                <td className="py-4 pr-4">
                  <Chip tone={pain.willingnessToPay === "unknown" ? "caution" : "neutral"}>
                    {pain.willingnessToPay}
                  </Chip>
                </td>
                <td className="py-4 pr-4">{pain.existingSolutionQuality}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Document>
  )
}

export function DemandView() {
  const { workspace } = useWorkspace()
  return (
    <Document>
      <PageHeader
        kicker="Market"
        title="Demand Signals"
        description="What we can observe today, and how far that is from evidence of spend."
      />
      <div className="mt-6">
        <PlaceholderBanner />
      </div>
      {workspace.demandSignals.map((signal) => (
        <Section key={signal.id} title={signal.signal}>
          <RuleList>
            <Field label="Observation">{signal.observation}</Field>
            <Field label="Implication">{signal.implication}</Field>
            <Field label="Confidence">
              <ConfidenceChip value={signal.confidence} />
            </Field>
            <Field label="Evidence">
              <EvidenceTrail workspace={workspace} evidenceIds={signal.evidenceIds} />
            </Field>
          </RuleList>
        </Section>
      ))}
    </Document>
  )
}

export function SegmentsView() {
  const { workspace } = useWorkspace()
  return (
    <Document>
      <PageHeader
        kicker="Market"
        title="Customer Segments"
        description="Profiles are hypotheses until interviews exist."
      />
      <div className="mt-6">
        <PlaceholderBanner />
      </div>
      {workspace.segments.map((segment) => (
        <Section
          key={segment.id}
          title={segment.name}
          actions={<ConfidenceChip value={segment.confidence} />}
        >
          <div id={segment.id} />
          <p className="mb-6 text-[15px] leading-7">{segment.description}</p>
          <div className="mb-8 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-4">
            {[
              ["Pain", segment.journey.pain],
              ["Current solution", segment.journey.currentSolution],
              ["Gap", segment.journey.gap],
              ["Opportunity", segment.journey.opportunity],
            ].map(([label, value]) => (
              <div key={label} className="bg-background p-4">
                <p className="text-[10px] tracking-[0.14em] text-muted-foreground uppercase">
                  {label}
                </p>
                <p className="mt-2 text-sm leading-6">{value}</p>
              </div>
            ))}
          </div>
          <RuleList>
            <Field label="Company size">{segment.companySize}</Field>
            <Field label="Industry">{segment.industry}</Field>
            <Field label="Buyer">{segment.buyer}</Field>
            <Field label="User">{segment.user}</Field>
            <Field label="Key problems">
              {segment.keyProblems.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </Field>
            <Field label="Current workflow">{segment.currentWorkflow}</Field>
            <Field label="Current tools">{segment.currentTools.join(" · ")}</Field>
            <Field label="Regulatory pressure">{segment.regulatoryPressure}</Field>
            <Field label="Willingness to pay">{segment.willingnessToPay}</Field>
            <Field label="Buying trigger">{segment.buyingTrigger}</Field>
            <Field label="Objections">{segment.objections.join(" · ")}</Field>
            <Field label="Evidence">
              <EvidenceTrail workspace={workspace} evidenceIds={segment.evidenceIds} />
            </Field>
          </RuleList>
        </Section>
      ))}
    </Document>
  )
}
