"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { useWorkspace } from "@/lib/store"
import {
  emptyHypothesis,
  emptyLogEntry,
  emptyQuestion,
  emptyResearchItem,
  emptySource,
} from "@/lib/templates"
import { formatDate, hypothesisStatusLabel } from "@/lib/labels"
import { Editable } from "@/components/editorial/editable"
import { ClaimBlock, SourceLine } from "@/components/editorial/evidence"
import {
  Chip,
  ConfidenceChip,
  Document,
  Field,
  PageHeader,
  PlaceholderBanner,
  RuleList,
  Section,
  Tools,
} from "@/components/editorial/primitives"
import type { HypothesisStatus, OpenQuestion, ResearchItem, Workspace } from "@/lib/types"

export function ResearchLibraryView() {
  const { workspace, upsertEntity } = useWorkspace()
  const [category, setCategory] = useState("all")
  const [confidence, setConfidence] = useState("all")
  const [tag, setTag] = useState("all")
  const [status, setStatus] = useState("all")

  const tags = useMemo(
    () => Array.from(new Set(workspace.researchItems.flatMap((item) => item.tags))),
    [workspace.researchItems],
  )

  const filtered = workspace.researchItems.filter((item) => {
    if (category !== "all" && item.category !== category) return false
    if (confidence !== "all" && item.confidence !== confidence) return false
    if (tag !== "all" && !item.tags.includes(tag)) return false
    if (status !== "all" && item.status !== status) return false
    return true
  })

  return (
    <Document>
      <PageHeader
        kicker="Research"
        title="Research Library"
        description="Every captured piece of research, filterable and linkable."
        actions={
          <Tools onAdd={() => upsertEntity("researchItems", emptyResearchItem())} />
        }
      />
      <div className="mt-6">
        <PlaceholderBanner />
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        <Filter
          label="Category"
          value={category}
          onChange={setCategory}
          options={["all", "market", "customer", "regulation", "competition", "product", "business-model", "gtm", "technology", "other"]}
        />
        <Filter
          label="Confidence"
          value={confidence}
          onChange={setConfidence}
          options={["all", "high", "medium", "low", "unresolved"]}
        />
        <Filter
          label="Tag"
          value={tag}
          onChange={setTag}
          options={["all", ...tags]}
        />
        <Filter
          label="Status"
          value={status}
          onChange={setStatus}
          options={["all", "collected", "reviewed", "needs-review", "contradicted"]}
        />
      </div>
      <ul className="mt-6 divide-y divide-border border-y border-border">
        {filtered.map((item) => (
          <li key={item.id} className="py-5">
            <ResearchCard item={item} workspace={workspace} />
          </li>
        ))}
      </ul>
    </Document>
  )
}

function Filter({
  label,
  value,
  onChange,
  options,
}: {
  label: string
  value: string
  onChange: (value: string) => void
  options: string[]
}) {
  return (
    <label className="flex items-center gap-2 text-[12px] text-muted-foreground">
      {label}
      <select
        className="h-8 rounded-md border border-input bg-background px-2 text-[12px] text-foreground"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  )
}

function ResearchCard({
  item,
  workspace,
}: {
  item: ResearchItem
  workspace: Workspace
}) {
  const source = workspace.sources.find((entry) => entry.id === item.sourceId)
  return (
    <article id={item.id}>
      <div className="flex flex-wrap items-center gap-2">
        <Chip>{item.category}</Chip>
        <ConfidenceChip value={item.confidence} />
        <Chip tone="muted">{item.status}</Chip>
      </div>
      <h3 className="mt-2 text-[17px] font-semibold tracking-tight">
        <Link href={`/research/${item.id}`} className="hover:text-primary">
          {item.title}
        </Link>
      </h3>
      <p className="mt-2 text-[15px] leading-7 text-muted-foreground">{item.summary}</p>
      {source ? (
        <p className="mt-2 text-sm">
          Source: {source.organisation}
          {item.date ? ` · ${formatDate(item.date)}` : ""}
        </p>
      ) : null}
      <div className="mt-3 flex flex-wrap gap-1.5">
        {item.tags.map((entry) => (
          <Chip key={entry} tone="muted">
            {entry}
          </Chip>
        ))}
      </div>
    </article>
  )
}

export function ResearchDetailView({ id }: { id: string }) {
  const { workspace } = useWorkspace()
  const item = workspace.researchItems.find((entry) => entry.id === id)
  if (!item) {
    return (
      <Document>
        <PageHeader title="Research not found" />
      </Document>
    )
  }
  const source = workspace.sources.find((entry) => entry.id === item.sourceId)
  return (
    <Document>
      <PageHeader kicker="Research library" title={item.title} />
      <Section title="Summary">
        <p className="text-[15px] leading-7">{item.summary}</p>
      </Section>
      <Section title="Key findings">
        <ul className="list-disc space-y-2 pl-5 text-[15px] leading-7">
          {item.keyFindings.map((finding) => (
            <li key={finding}>{finding}</li>
          ))}
        </ul>
      </Section>
      <Section title="Links">
        <RuleList>
          <Field label="Source">{source ? <SourceLine source={source} /> : "—"}</Field>
          <Field label="Hypotheses">
            {item.relatedHypothesisIds.join(", ") || "—"}
          </Field>
          <Field label="Competitors">
            {item.relatedCompetitorIds.join(", ") || "—"}
          </Field>
          <Field label="Segments">{item.relatedSegmentIds.join(", ") || "—"}</Field>
          <Field label="DPDP records">
            {item.relatedRegulationIds.join(", ") || "—"}
          </Field>
        </RuleList>
      </Section>
    </Document>
  )
}

export function SourcesView() {
  const { workspace, upsertEntity } = useWorkspace()
  return (
    <Document>
      <PageHeader
        kicker="Research"
        title="Sources"
        description="Primary is always better than a cluster card."
        actions={<Tools onAdd={() => upsertEntity("sources", emptySource())} />}
      />
      <div className="mt-6">
        <PlaceholderBanner />
      </div>
      <ul className="mt-6 divide-y divide-border border-y border-border">
        {workspace.sources.map((source) => (
          <li key={source.id} id={source.id} className="py-5">
            <SourceLine source={source} />
            <p className="mt-2 text-sm text-muted-foreground">{source.notes}</p>
          </li>
        ))}
      </ul>
    </Document>
  )
}

export function InterviewsView() {
  const { workspace } = useWorkspace()
  return (
    <Document>
      <PageHeader
        kicker="Research"
        title="Interviews"
        description="Primary evidence. Empty on purpose until conversations happen."
      />
      {workspace.interviews.map((interview) => (
        <Section
          key={interview.id}
          title={interview.title}
          actions={<Chip>{interview.status}</Chip>}
        >
          <RuleList>
            <Field label="Role">{interview.intervieweeRole}</Field>
            <Field label="Organisation type">{interview.organisationType}</Field>
            <Field label="Summary">{interview.summary}</Field>
          </RuleList>
        </Section>
      ))}
    </Document>
  )
}

export function EvidenceView() {
  const { workspace } = useWorkspace()
  return (
    <Document>
      <PageHeader
        kicker="Research"
        title="Evidence"
        description="Claim → evidence → source → interpretation → implication."
      />
      <div className="mt-6">
        <PlaceholderBanner />
      </div>
      {workspace.claims.map((claim) => (
        <ClaimBlock key={claim.id} claim={claim} workspace={workspace} />
      ))}
    </Document>
  )
}

export function HypothesesView({ status }: { status?: HypothesisStatus }) {
  const { workspace, upsertEntity } = useWorkspace()
  const list = status
    ? workspace.hypotheses.filter((item) => item.status === status)
    : workspace.hypotheses

  return (
    <Document>
      <PageHeader
        kicker="Research"
        title={status === "assumption" ? "Assumptions" : "Hypotheses"}
        description="Assumption → investigation → evidence → validation."
        actions={
          <Tools onAdd={() => upsertEntity("hypotheses", emptyHypothesis())} />
        }
      />
      <div className="mt-6">
        <PlaceholderBanner />
      </div>
      <p className="mt-6 text-[12px] tracking-[0.14em] text-muted-foreground uppercase">
        Assumption → Investigation → Evidence → Validation
      </p>
      {list.map((item) => (
        <Section key={item.id} title={item.statement}>
          <div id={item.id} />
          <div className="mb-4 flex flex-wrap gap-2">
            <Chip>{item.category}</Chip>
            <Chip tone="accent">{hypothesisStatusLabel[item.status]}</Chip>
            <ConfidenceChip value={item.confidence} />
          </div>
          <HypothesisEditor id={item.id} />
        </Section>
      ))}
    </Document>
  )
}

function HypothesisEditor({ id }: { id: string }) {
  const { workspace, upsertEntity } = useWorkspace()
  const item = workspace.hypotheses.find((entry) => entry.id === id)
  if (!item) return null
  return (
    <RuleList>
      <Field label="Why we believe it">
        <Editable
          value={item.whyWeBelieveIt}
          onChange={(whyWeBelieveIt) => upsertEntity("hypotheses", { ...item, whyWeBelieveIt })}
        />
      </Field>
      <Field label="Supporting evidence">
        {item.supportingEvidenceIds.join(", ") || "None yet"}
      </Field>
      <Field label="Contradicting evidence">
        {item.contradictingEvidenceIds.join(", ") || "None yet"}
      </Field>
      <Field label="Validation method">
        <Editable
          value={item.validationMethod}
          onChange={(validationMethod) =>
            upsertEntity("hypotheses", { ...item, validationMethod })
          }
        />
      </Field>
      <Field label="Status">
        <select
          className="h-8 rounded-md border border-input bg-background px-2 text-sm"
          value={item.status}
          onChange={(event) =>
            upsertEntity("hypotheses", {
              ...item,
              status: event.target.value as HypothesisStatus,
            })
          }
        >
          {(["assumption", "investigating", "supported", "validated", "rejected"] as const).map(
            (value) => (
              <option key={value} value={value}>
                {hypothesisStatusLabel[value]}
              </option>
            ),
          )}
        </select>
      </Field>
      <Field label="Next action">
        <Editable
          value={item.nextAction}
          onChange={(nextAction) => upsertEntity("hypotheses", { ...item, nextAction })}
        />
      </Field>
    </RuleList>
  )
}

export function QuestionsView({
  domain,
  title = "Open Questions",
  kicker = "Research",
}: {
  domain?: OpenQuestion["domain"]
  title?: string
  kicker?: string
}) {
  const { workspace, upsertEntity } = useWorkspace()
  const list = domain
    ? workspace.questions.filter((item) => item.domain === domain)
    : workspace.questions
  const groups: OpenQuestion["priority"][] = ["critical", "important", "nice-to-know"]

  return (
    <Document>
      <PageHeader
        kicker={kicker}
        title={title}
        description="The primary driver of future research."
        actions={<Tools onAdd={() => upsertEntity("questions", emptyQuestion())} />}
      />
      <div className="mt-6">
        <PlaceholderBanner />
      </div>
      {groups.map((priority) => {
        const items = list.filter((item) => item.priority === priority)
        if (items.length === 0) return null
        return (
          <Section
            key={priority}
            title={priority === "nice-to-know" ? "Nice to know" : priority}
          >
            {items.map((item) => (
              <QuestionBlock key={item.id} id={item.id} />
            ))}
          </Section>
        )
      })}
    </Document>
  )
}

function QuestionBlock({ id }: { id: string }) {
  const { workspace, upsertEntity, removeEntity } = useWorkspace()
  const item = workspace.questions.find((entry) => entry.id === id)
  if (!item) return null
  return (
    <article id={item.id} className="scroll-mt-16 border-b border-border py-5 last:border-b-0">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-[16px] font-semibold tracking-tight">{item.question}</h3>
        <Tools onDelete={() => removeEntity("questions", item.id)} />
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{item.whyItMatters}</p>
      <RuleList>
        <Field label="Current answer">{item.currentAnswer || "Unresolved"}</Field>
        <Field label="Owner">{item.owner}</Field>
        <Field label="Status">{item.status}</Field>
        <Field label="Next research action">
          <Editable
            value={item.nextAction}
            onChange={(nextAction) => upsertEntity("questions", { ...item, nextAction })}
          />
        </Field>
      </RuleList>
    </article>
  )
}

export function ResearchLogView() {
  const { workspace, upsertEntity } = useWorkspace()
  return (
    <Document>
      <PageHeader
        kicker="Research"
        title="Research Log"
        description="Append-only diary of what we did and learned."
        actions={<Tools onAdd={() => upsertEntity("researchLog", emptyLogEntry())} />}
      />
      <ol className="mt-8 divide-y divide-border border-y border-border">
        {workspace.researchLog.map((entry) => (
          <li key={entry.id} className="py-5">
            <p className="text-[11px] tracking-[0.14em] text-muted-foreground uppercase">
              {formatDate(entry.date)}
            </p>
            <p className="mt-1 font-medium">{entry.title}</p>
            <p className="mt-1 text-[15px] leading-7 text-muted-foreground">{entry.note}</p>
          </li>
        ))}
      </ol>
    </Document>
  )
}

export function TimelineView() {
  const { workspace } = useWorkspace()
  const events = [...workspace.timeline].sort((a, b) => a.date.localeCompare(b.date))
  return (
    <Document>
      <PageHeader
        kicker="Research"
        title="Timeline"
        description="Regulatory events, discoveries, competitor notes, and decisions."
      />
      <div className="mt-6">
        <PlaceholderBanner />
      </div>
      <ol className="relative mt-8 border-l border-border pl-6">
        {events.map((event) => (
          <li key={event.id} className="mb-8 last:mb-0">
            <span className="absolute -left-1 mt-1.5 size-2 rounded-full bg-primary" />
            <p className="text-[11px] tracking-[0.14em] text-muted-foreground uppercase">
              {formatDate(event.date)} · {event.kind}
            </p>
            <p className="mt-1 font-medium">{event.title}</p>
            <p className="mt-1 text-[15px] leading-7 text-muted-foreground">
              {event.description}
            </p>
          </li>
        ))}
      </ol>
    </Document>
  )
}
