"use client"

import Link from "next/link"
import type { Claim, Evidence, Source, Workspace } from "@/lib/types"
import { ConfidenceChip, Field, RuleList } from "@/components/editorial/primitives"

export function sourceById(workspace: Workspace, id: string) {
  return workspace.sources.find((source) => source.id === id)
}

export function evidenceById(workspace: Workspace, id: string) {
  return workspace.evidence.find((item) => item.id === id)
}

export function EvidenceTrail({
  workspace,
  evidenceIds,
}: {
  workspace: Workspace
  evidenceIds: string[]
}) {
  if (evidenceIds.length === 0) {
    return (
      <p className="text-sm text-muted-foreground">
        No evidence attached yet.
      </p>
    )
  }

  return (
    <ol className="space-y-3">
      {evidenceIds.map((id, index) => {
        const evidence = evidenceById(workspace, id)
        if (!evidence) {
          return (
            <li key={id} className="text-sm text-muted-foreground">
              Missing evidence {id}
            </li>
          )
        }
        const source = sourceById(workspace, evidence.sourceId)
        return (
          <li key={id} className="text-sm leading-6">
            <p className="text-[11px] tracking-[0.12em] text-muted-foreground uppercase">
              Evidence {index + 1}
              {source ? ` · ${source.organisation}` : ""}
            </p>
            <p className="mt-0.5">{evidence.excerpt}</p>
            <p className="mt-1 text-muted-foreground">
              Interpretation: {evidence.interpretation}
            </p>
            {source ? (
              <p className="mt-1">
                <Link
                  href={`/research/sources#${source.id}`}
                  className="text-primary underline-offset-4 hover:underline"
                >
                  {source.title}
                </Link>
              </p>
            ) : null}
          </li>
        )
      })}
    </ol>
  )
}

export function ClaimBlock({
  claim,
  workspace,
}: {
  claim: Claim
  workspace: Workspace
}) {
  return (
    <article id={claim.id} className="scroll-mt-16 border-b border-border py-6 first:pt-0 last:border-b-0">
      <p className="text-[11px] font-medium tracking-[0.16em] text-muted-foreground uppercase">
        Claim
      </p>
      <blockquote className="editorial mt-2 text-xl leading-8 text-pretty">
        {claim.statement}
      </blockquote>
      <div className="mt-4">
        <EvidenceTrail workspace={workspace} evidenceIds={claim.evidenceIds} />
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <span className="text-[11px] tracking-[0.12em] text-muted-foreground uppercase">
          Confidence
        </span>
        <ConfidenceChip value={claim.confidence} />
      </div>
      {claim.implication ? (
        <p className="mt-3 text-sm leading-6">
          <span className="font-medium">Implication. </span>
          {claim.implication}
        </p>
      ) : null}
    </article>
  )
}

export function SourceLine({ source }: { source: Source }) {
  return (
    <div>
      <p className="font-medium">{source.title}</p>
      <p className="text-sm text-muted-foreground">
        {source.organisation}
        {source.author ? ` · ${source.author}` : ""}
        {source.date ? ` · ${source.date}` : ""}
      </p>
      {source.url ? (
        <a
          href={source.url}
          target="_blank"
          rel="noreferrer"
          className="text-sm text-primary underline-offset-4 hover:underline"
        >
          {source.url}
        </a>
      ) : null}
    </div>
  )
}

export function EvidenceRecord({
  evidence,
  workspace,
}: {
  evidence: Evidence
  workspace: Workspace
}) {
  const source = sourceById(workspace, evidence.sourceId)
  return (
    <RuleList>
      <Field label="Evidence">{evidence.excerpt}</Field>
      <Field label="Source">
        {source ? <SourceLine source={source} /> : evidence.sourceId}
      </Field>
      <Field label="Interpretation">{evidence.interpretation}</Field>
    </RuleList>
  )
}
