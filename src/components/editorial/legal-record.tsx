"use client"

import type { Regulation, Workspace } from "@/lib/types"
import { Editable } from "@/components/editorial/editable"
import {
  Callout,
  Field,
  LegalChip,
  RuleList,
  Tools,
} from "@/components/editorial/primitives"
import { EvidenceTrail } from "@/components/editorial/evidence"
import { useWorkspace } from "@/lib/store"

export function LegalRecord({
  item,
  workspace,
}: {
  item: Regulation
  workspace: Workspace
}) {
  const { upsertEntity, removeEntity } = useWorkspace()

  function patch(partial: Partial<Regulation>) {
    upsertEntity("regulations", { ...item, ...partial })
  }

  return (
    <article id={item.id} className="scroll-mt-16 py-2">
      <div className="mb-3 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold tracking-tight">
            <Editable
              value={item.title}
              multiline={false}
              onChange={(title) => patch({ title })}
            />
          </h3>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <LegalChip value={item.confidence} />
            {item.contentKind === "placeholder" ? (
              <span className="text-[11px] tracking-[0.12em] text-muted-foreground uppercase">
                Placeholder
              </span>
            ) : null}
          </div>
        </div>
        <Tools onDelete={() => removeEntity("regulations", item.id)} />
      </div>
      {item.confidence !== "confirmed" ? (
        <div className="mb-4">
          <Callout>
            This record is not visually equivalent to a confirmed legal
            requirement. Confidence: {item.confidence.replaceAll("-", " ")}.
          </Callout>
        </div>
      ) : null}
      <RuleList>
        <Field label="Regulation">
          <Editable
            value={item.regulationText}
            onChange={(regulationText) => patch({ regulationText })}
          />
        </Field>
        <Field label="Requirement">
          <Editable
            value={item.requirement}
            onChange={(requirement) => patch({ requirement })}
          />
        </Field>
        <Field label="Who is affected?">
          <Editable
            value={item.whoIsAffected}
            onChange={(whoIsAffected) => patch({ whoIsAffected })}
          />
        </Field>
        <Field label="Business implication">
          <Editable
            value={item.businessImplication}
            onChange={(businessImplication) => patch({ businessImplication })}
          />
        </Field>
        <Field label="Product opportunity">
          <Editable
            value={item.productOpportunity}
            onChange={(productOpportunity) => patch({ productOpportunity })}
          />
        </Field>
        <Field label="Evidence">
          <EvidenceTrail workspace={workspace} evidenceIds={item.evidenceIds} />
        </Field>
        <Field label="Confidence">
          <select
            className="h-8 rounded-md border border-input bg-background px-2 text-sm"
            value={item.confidence}
            onChange={(event) =>
              patch({
                confidence: event.target.value as Regulation["confidence"],
              })
            }
          >
            <option value="confirmed">Confirmed</option>
            <option value="strong-interpretation">Strong interpretation</option>
            <option value="open-interpretation">Open interpretation</option>
            <option value="needs-legal-validation">Needs legal validation</option>
          </select>
        </Field>
      </RuleList>
    </article>
  )
}
