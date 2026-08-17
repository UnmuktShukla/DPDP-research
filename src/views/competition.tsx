"use client"

import Link from "next/link"
import { useWorkspace } from "@/lib/store"
import { emptyCompetitor } from "@/lib/templates"
import { Editable } from "@/components/editorial/editable"
import { EvidenceTrail } from "@/components/editorial/evidence"
import {
  Document,
  Field,
  PageHeader,
  PlaceholderBanner,
  RuleList,
  Section,
  Tools,
  Unresolved,
} from "@/components/editorial/primitives"
import type { Competitor, Workspace } from "@/lib/types"

function CompetitorBody({
  competitor,
  workspace,
}: {
  competitor: Competitor
  workspace: Workspace
}) {
  const { upsertEntity, removeEntity } = useWorkspace()
  const patch = (partial: Partial<Competitor>) =>
    upsertEntity("competitors", { ...competitor, ...partial })

  return (
    <article id={competitor.id}>
      <div className="mb-3 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold">
            <Editable
              multiline={false}
              value={competitor.company}
              onChange={(company) => patch({ company })}
            />
          </h3>
          <p className="text-sm text-muted-foreground">{competitor.category}</p>
        </div>
        <Tools onDelete={() => removeEntity("competitors", competitor.id)} />
      </div>
      <RuleList>
        <Field label="Website">
          {competitor.website ? (
            <a
              className="text-primary underline-offset-4 hover:underline"
              href={competitor.website}
              target="_blank"
              rel="noreferrer"
            >
              {competitor.website}
            </a>
          ) : (
            "—"
          )}
        </Field>
        <Field label="Target customer">{competitor.targetCustomer}</Field>
        <Field label="Product">{competitor.product}</Field>
        <Field label="Core capability">{competitor.coreCapability}</Field>
        <Field label="Pricing">{competitor.pricing}</Field>
        <Field label="Positioning">{competitor.positioning}</Field>
        <Field label="Funding">{competitor.funding}</Field>
        <Field label="Geography">{competitor.geography}</Field>
        <Field label="Strengths">{competitor.strengths.join(" · ") || "—"}</Field>
        <Field label="Weaknesses">{competitor.weaknesses.join(" · ") || "—"}</Field>
        <Field label="DPDP positioning">{competitor.dpdpPositioning}</Field>
        <Field label="Differentiation">{competitor.differentiation}</Field>
        <Field label="Evidence">
          <EvidenceTrail workspace={workspace} evidenceIds={competitor.evidenceIds} />
        </Field>
      </RuleList>
    </article>
  )
}

export function CompetitiveLandscapeView() {
  const { workspace } = useWorkspace()
  return (
    <Document>
      <PageHeader
        kicker="Competition"
        title="Competitive Landscape"
        description="Category references, not teardowns. Homepage notes are labelled as such."
      />
      <div className="mt-6">
        <PlaceholderBanner />
      </div>
      <Section title="Working picture">
        <p className="text-[15px] leading-7">
          Three gravitational wells: global privacy/GRC suites, India legal-tech
          templates, and Big-4 / law-firm programmes. Our concept is a DPDP-native
          operations system — currently an empty column in the comparison matrix.
        </p>
      </Section>
      <Section title="Players">
        <ul className="divide-y divide-border border-y border-border">
          {workspace.competitors.map((competitor) => (
            <li key={competitor.id} className="py-4">
              <Link
                href={`/competition/${competitor.id}`}
                className="font-medium hover:text-primary"
              >
                {competitor.company}
              </Link>
              <p className="mt-1 text-sm text-muted-foreground">
                {competitor.positioning}
              </p>
            </li>
          ))}
        </ul>
      </Section>
    </Document>
  )
}

export function CompetitorProfilesView() {
  const { workspace, upsertEntity } = useWorkspace()
  return (
    <Document>
      <PageHeader
        kicker="Competition"
        title="Competitor Profiles"
        description="Each profile is a research object. Add, edit, delete."
        actions={<Tools onAdd={() => upsertEntity("competitors", emptyCompetitor())} />}
      />
      <div className="mt-6">
        <PlaceholderBanner />
      </div>
      {workspace.competitors.map((competitor) => (
        <Section key={competitor.id} title={competitor.company}>
          <CompetitorBody competitor={competitor} workspace={workspace} />
        </Section>
      ))}
    </Document>
  )
}

export function CompetitorDetailView({ id }: { id: string }) {
  const { workspace } = useWorkspace()
  const competitor = workspace.competitors.find((item) => item.id === id)
  if (!competitor) {
    return (
      <Document>
        <PageHeader title="Competitor not found" />
      </Document>
    )
  }
  return (
    <Document>
      <PageHeader kicker="Competition" title={competitor.company} />
      <Section title="Profile">
        <CompetitorBody competitor={competitor} workspace={workspace} />
      </Section>
    </Document>
  )
}

export function ComparisonView() {
  const { workspace, setWorkspace } = useWorkspace()
  const { comparison } = workspace

  return (
    <Document wide>
      <PageHeader
        kicker="Competition"
        title="Feature Comparison"
        description="Editable matrix. Cells are judgements, not lab results."
      />
      <div className="mt-6">
        <PlaceholderBanner />
      </div>
      <div className="mt-8 overflow-x-auto">
        <table className="w-full min-w-[52rem] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="py-3 pr-3 text-[11px] font-medium tracking-[0.12em] text-muted-foreground uppercase">
                Dimension
              </th>
              {comparison.columns.map((column) => (
                <th
                  key={column.id}
                  className="px-3 py-3 text-[11px] font-medium tracking-[0.12em] text-muted-foreground uppercase"
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparison.rows.map((row, rowIndex) => (
              <tr key={row.id} className="border-b border-border align-top">
                <td className="py-3 pr-3 font-medium">{row.dimension}</td>
                {comparison.columns.map((column) => {
                  const cell = row.cells[column.id]
                  return (
                    <td key={column.id} className="px-3 py-3">
                      <Editable
                        value={cell?.value ?? ""}
                        onChange={(value) => {
                          const rows = comparison.rows.map((item, i) =>
                            i === rowIndex
                              ? {
                                  ...item,
                                  cells: {
                                    ...item.cells,
                                    [column.id]: { ...cell, value },
                                  },
                                }
                              : item,
                          )
                          setWorkspace({
                            ...workspace,
                            comparison: { ...comparison, rows },
                          })
                        }}
                      />
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Document>
  )
}

export function CompetitionFieldView({
  title,
  field,
}: {
  title: string
  field: keyof Competitor
}) {
  const { workspace } = useWorkspace()
  function extract(competitor: Competitor) {
    const value = competitor[field]
    if (Array.isArray(value)) return value.join(" · ") || "—"
    if (typeof value === "string" && value) return value
    return "—"
  }
  return (
    <Document>
      <PageHeader kicker="Competition" title={title} />
      <div className="mt-6">
        <PlaceholderBanner />
      </div>
      <Section title="Across the set">
        <RuleList>
          {workspace.competitors.map((competitor) => (
            <Field key={competitor.id} label={competitor.company}>
              {extract(competitor)}
            </Field>
          ))}
          <Field label="Our concept">
            {title === "Pricing" ? (
              <Unresolved note="Pricing hypothesis is blank until interviews exist." />
            ) : title === "Positioning" ? (
              "DPDP-native operations system — hypothetical, unpositioned in market."
            ) : (
              "Discovery is a known gap. Wedge unchosen. Evidence-first workflow is the intended difference — unproven."
            )}
          </Field>
        </RuleList>
      </Section>
    </Document>
  )
}

export function GapsView() {
  return <CompetitionFieldView title="Competitive Gaps" field="weaknesses" />
}
