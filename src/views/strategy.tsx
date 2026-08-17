"use client"

import { useWorkspace } from "@/lib/store"
import { emptyDecision } from "@/lib/templates"
import { formatDate } from "@/lib/labels"
import { Editable } from "@/components/editorial/editable"
import { EvidenceTrail } from "@/components/editorial/evidence"
import {
  Chip,
  Document,
  Field,
  PageHeader,
  PlaceholderBanner,
  RuleList,
  Section,
  Tools,
} from "@/components/editorial/primitives"
import Link from "next/link"

export function StrategicThesisView() {
  const { workspace, setWorkspace } = useWorkspace()
  return (
    <Document>
      <PageHeader
        kicker="Strategy"
        title="Strategic Thesis"
        description="The company-level bet. Weaker than it sounds — by design."
      />
      <div className="mt-6">
        <PlaceholderBanner />
      </div>
      <Section title="Current thesis">
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
    </Document>
  )
}

export function OpportunityMapView() {
  const { workspace } = useWorkspace()
  return (
    <Document>
      <PageHeader
        kicker="Strategy"
        title="Opportunity Map"
        description="Attractiveness stays unknown until the questions are answered."
      />
      {workspace.opportunities.map((item) => (
        <Section key={item.id} title={item.name} actions={<Chip>{item.attractiveness}</Chip>}>
          <p className="text-[15px] leading-7">{item.description}</p>
          <RuleList>
            <Field label="Who">{item.who}</Field>
            <Field label="Why now">{item.whyNow}</Field>
            <Field label="Related questions">
              {item.relatedQuestionIds.map((id) => (
                <Link
                  key={id}
                  href={`/research/questions#${id}`}
                  className="mr-2 text-primary underline-offset-4 hover:underline"
                >
                  {id}
                </Link>
              ))}
            </Field>
          </RuleList>
        </Section>
      ))}
    </Document>
  )
}

export function OptionsView() {
  const { workspace } = useWorkspace()
  return (
    <Document>
      <PageHeader
        kicker="Strategy"
        title="Strategic Options"
        description="Alive options, parked options, and the currently preferred path."
      />
      {workspace.options.map((option) => (
        <Section key={option.id} title={option.name} actions={<Chip tone="accent">{option.status}</Chip>}>
          <p className="text-[15px] leading-7">{option.description}</p>
          <RuleList>
            <Field label="Upside">{option.upside}</Field>
            <Field label="Downside">{option.downside}</Field>
          </RuleList>
        </Section>
      ))}
    </Document>
  )
}

export function DecisionsView() {
  const { workspace, upsertEntity } = useWorkspace()
  return (
    <Document>
      <PageHeader
        kicker="Strategy"
        title="Decisions"
        description="Preserve how the thesis evolved — including what would change our mind."
        actions={<Tools onAdd={() => upsertEntity("decisions", emptyDecision())} />}
      />
      <div className="mt-6">
        <PlaceholderBanner />
      </div>
      {workspace.decisions.map((decision) => (
        <Section key={decision.id} title={decision.decision}>
          <div id={decision.id} />
          <RuleList>
            <Field label="Context">{decision.context}</Field>
            <Field label="Options considered">
              {decision.optionsConsidered.map((option) => (
                <p key={option}>{option}</p>
              ))}
            </Field>
            <Field label="Chosen direction">{decision.chosenDirection}</Field>
            <Field label="Why">{decision.why}</Field>
            <Field label="Evidence">
              <EvidenceTrail workspace={workspace} evidenceIds={decision.evidenceIds} />
            </Field>
            <Field label="Date">{formatDate(decision.date)}</Field>
            <Field label="Confidence">{decision.confidence}</Field>
            <Field label="What would change our mind?">
              {decision.whatWouldChangeOurMind}
            </Field>
          </RuleList>
        </Section>
      ))}
    </Document>
  )
}

export function ExperimentsView() {
  const { workspace } = useWorkspace()
  return (
    <Document>
      <PageHeader
        kicker="Strategy"
        title="Experiments"
        description="Cheap tests that can kill or strengthen a hypothesis."
      />
      {workspace.experiments.map((experiment) => (
        <Section
          key={experiment.id}
          title={experiment.name}
          actions={<Chip>{experiment.status}</Chip>}
        >
          <RuleList>
            <Field label="Method">{experiment.method}</Field>
            <Field label="Metric">{experiment.metric}</Field>
            <Field label="Hypothesis">
              {experiment.hypothesisId ? (
                <Link
                  href={`/research/hypotheses#${experiment.hypothesisId}`}
                  className="text-primary underline-offset-4 hover:underline"
                >
                  {experiment.hypothesisId}
                </Link>
              ) : (
                "—"
              )}
            </Field>
            <Field label="Result">{experiment.result || "Not run"}</Field>
          </RuleList>
        </Section>
      ))}
    </Document>
  )
}

export function NextStepsView() {
  const { workspace } = useWorkspace()
  return (
    <Document>
      <PageHeader
        kicker="Strategy"
        title="Next Steps"
        description="What to investigate next — pulled from unresolved questions."
      />
      <ol className="mt-8 divide-y divide-border border-y border-border">
        {workspace.nextSteps.map((step) => (
          <li key={step.id} className="py-5">
            <p className="font-medium">{step.action}</p>
            <p className="mt-1 text-sm text-muted-foreground">{step.why}</p>
            <p className="mt-2 text-[12px] text-muted-foreground">
              {step.owner} · {step.priority}
              {step.relatedQuestionId ? ` · ${step.relatedQuestionId}` : ""}
            </p>
          </li>
        ))}
      </ol>
    </Document>
  )
}
