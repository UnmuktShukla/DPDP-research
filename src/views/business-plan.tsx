"use client"

import { useWorkspace } from "@/lib/store"
import { Editable } from "@/components/editorial/editable"
import {
  Document,
  Field,
  PageHeader,
  PlaceholderBanner,
  RuleList,
  Section,
} from "@/components/editorial/primitives"
import type { BusinessPlan } from "@/lib/types"

const sections: {
  key: keyof BusinessPlan
  number: string
  title: string
}[] = [
  { key: "problem", number: "01", title: "Problem" },
  { key: "customer", number: "02", title: "Customer" },
  { key: "solution", number: "03", title: "Solution" },
  { key: "businessModel", number: "04", title: "Business Model" },
  { key: "gtm", number: "05", title: "Go-To-Market" },
  { key: "advantage", number: "06", title: "Competitive Advantage" },
  { key: "risks", number: "07", title: "Risks" },
]

export function BusinessPlanView({
  only,
}: {
  only?: keyof BusinessPlan
}) {
  const { workspace, setWorkspace } = useWorkspace()
  const visible = only
    ? sections.filter((section) => section.key === only)
    : sections

  return (
    <Document>
      <PageHeader
        kicker="Overview"
        title={only ? visible[0]?.title ?? "Business Plan" : "Business Plan"}
        description="A structured canvas — still a set of hypotheses. Click any field to edit."
      />
      <div className="mt-6">
        <PlaceholderBanner />
      </div>
      {visible.map((section) => {
        const data = workspace.businessPlan[section.key]
        return (
          <Section key={section.key} number={section.number} title={section.title}>
            <RuleList>
              {data.fields.map((field, index) => (
                <Field key={field.key} label={field.label}>
                  <Editable
                    value={field.value}
                    onChange={(value) => {
                      const fields = data.fields.map((item, i) =>
                        i === index ? { ...item, value } : item,
                      )
                      setWorkspace({
                        ...workspace,
                        businessPlan: {
                          ...workspace.businessPlan,
                          [section.key]: { ...data, fields },
                        },
                      })
                    }}
                  />
                </Field>
              ))}
            </RuleList>
          </Section>
        )
      })}
    </Document>
  )
}
