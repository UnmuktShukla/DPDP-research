"use client"

import Link from "next/link"
import type { RegulationTopic } from "@/lib/types"
import { useWorkspace } from "@/lib/store"
import { emptyRegulation } from "@/lib/templates"
import { LegalRecord } from "@/components/editorial/legal-record"
import {
  Document,
  LegalChip,
  PageHeader,
  PlaceholderBanner,
  Section,
  Tools,
} from "@/components/editorial/primitives"
import { QuestionsView } from "@/views/research"

const copy: Record<
  RegulationTopic,
  { title: string; description: string }
> = {
  landscape: {
    title: "Regulatory Landscape",
    description:
      "A map of the DPDP regime as we currently understand it — structured as research, not as advice.",
  },
  act: {
    title: "DPDP Act",
    description: "Statute-level notes. Official text still needs to be attached and annotated.",
  },
  rules: {
    title: "Rules & Notifications",
    description: "Operational mechanics live here. Confirm against gazette / MeitY publications.",
  },
  compliance: {
    title: "Compliance Requirements",
    description: "What an organisation may have to operationalise — interpretations stay labelled.",
  },
  fiduciary: {
    title: "Data Fiduciary Obligations",
    description: "Duties that sit with the fiduciary if our reading of the Act holds.",
  },
  consent: {
    title: "Consent",
    description: "Consent, notice, and adjacent lawful grounds — including Consent Manager as an open question.",
  },
  rights: {
    title: "Data Principal Rights",
    description: "Rights commonly summarised in public writing; procedure belongs in the Rules.",
  },
  sdf: {
    title: "Significant Data Fiduciary",
    description: "Extra duties if designated. Do not invent a designation list.",
  },
  "cross-border": {
    title: "Cross-border Data",
    description: "Transfer mechanism is an open interpretation until annotated from primary text.",
  },
  penalties: {
    title: "Penalties",
    description: "Do not reuse secondary penalty figures in customer or investor materials.",
  },
  questions: {
    title: "Open Regulatory Questions",
    description: "What must still be answered by reading primary instruments or counsel.",
  },
}

export function DpdpView({ topic }: { topic: RegulationTopic }) {
  const { workspace, upsertEntity } = useWorkspace()

  if (topic === "questions") {
    return <QuestionsView domain="regulation" title="Open Regulatory Questions" kicker="DPDP" />
  }

  const records =
    topic === "landscape"
      ? workspace.regulations.filter((item) => item.topic === "landscape")
      : workspace.regulations.filter((item) => item.topic === topic)

  const meta = copy[topic]
  const topicIndex =
    topic === "landscape"
      ? workspace.regulations.filter((item) => item.topic !== "landscape")
      : []

  return (
    <Document>
      <PageHeader
        kicker="DPDP"
        title={meta.title}
        description={meta.description}
        actions={
          <Tools
            onAdd={() =>
              upsertEntity(
                "regulations",
                emptyRegulation(topic === "landscape" ? "compliance" : topic),
              )
            }
          />
        }
      />
      <div className="mt-6">
        <PlaceholderBanner />
      </div>
      {records.length === 0 ? (
        <Section title="No records yet">
          <p className="text-sm text-muted-foreground">
            Add a requirement with the plus control. Default confidence is “needs legal validation”.
          </p>
        </Section>
      ) : (
        records.map((item) => (
          <div key={item.id} className="border-b border-border py-8">
            <LegalRecord item={item} workspace={workspace} />
          </div>
        ))
      )}
      {topicIndex.length > 0 ? (
        <Section
          title="Where to go next"
          description="Each topic is its own research record with a confidence state."
        >
          <ul className="divide-y divide-border border-y border-border">
            {topicIndex.map((item) => (
              <li key={item.id} className="flex items-center justify-between gap-4 py-3">
                <Link
                  href={`/dpdp/${item.topic}`}
                  className="font-medium hover:text-primary"
                >
                  {item.title}
                </Link>
                <LegalChip value={item.confidence} />
              </li>
            ))}
          </ul>
        </Section>
      ) : null}
    </Document>
  )
}
