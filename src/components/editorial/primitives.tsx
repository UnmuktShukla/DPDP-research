"use client"

import type { ReactNode } from "react"
import { ArrowDown, ArrowUp, Pencil, Plus, Trash2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import type { LegalConfidence, ResearchConfidence } from "@/lib/types"
import { legalConfidenceLabel, researchConfidenceLabel } from "@/lib/labels"

export function Document({
  children,
  wide = false,
}: {
  children: ReactNode
  wide?: boolean
}) {
  return (
    <article className={cn("mx-auto w-full", wide ? "wide-col" : "page-col")}>
      {children}
    </article>
  )
}

export function PageKicker({ children }: { children: ReactNode }) {
  return (
    <p className="text-[11px] font-medium tracking-[0.18em] text-muted-foreground uppercase">
      {children}
    </p>
  )
}

export function PageHeader({
  kicker,
  title,
  description,
  actions,
}: {
  kicker?: string
  title: string
  description?: string
  actions?: ReactNode
}) {
  return (
    <header className="border-b border-border pb-8">
      {kicker ? <PageKicker>{kicker}</PageKicker> : null}
      <div className="mt-3 flex flex-wrap items-start justify-between gap-4">
        <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          {title}
        </h1>
        {actions}
      </div>
      {description ? (
        <p className="mt-3 max-w-2xl text-[15px] leading-7 text-muted-foreground">
          {description}
        </p>
      ) : null}
    </header>
  )
}

export function Section({
  number,
  title,
  description,
  children,
  actions,
}: {
  number?: string
  title: string
  description?: string
  children: ReactNode
  actions?: ReactNode
}) {
  return (
    <section className="border-b border-border py-8 last:border-b-0">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          {number ? (
            <p className="text-[11px] font-medium tracking-[0.16em] text-muted-foreground uppercase">
              {number}
            </p>
          ) : null}
          {title ? (
            <h2 className="mt-1 text-xl font-semibold tracking-tight">{title}</h2>
          ) : null}
          {description ? (
            <p className="mt-1 max-w-2xl text-sm leading-6 text-muted-foreground">
              {description}
            </p>
          ) : null}
        </div>
        {actions}
      </div>
      {children}
    </section>
  )
}

export function MetaStrip({
  items,
}: {
  items: { label: string; value: string }[]
}) {
  return (
    <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden border border-border bg-border sm:grid-cols-3 lg:grid-cols-6">
      {items.map((item) => (
        <div key={item.label} className="bg-background px-3 py-3">
          <dt className="text-[10px] tracking-[0.12em] text-muted-foreground uppercase">
            {item.label}
          </dt>
          <dd className="mt-1 text-sm font-medium">{item.value}</dd>
        </div>
      ))}
    </dl>
  )
}

export function Callout({ children }: { children: ReactNode }) {
  return (
    <div className="border border-border bg-card px-4 py-3 text-[13px] leading-6 text-muted-foreground">
      {children}
    </div>
  )
}

export function PlaceholderBanner() {
  return (
    <Callout>
      <span className="font-medium text-foreground">Research workspace.</span>{" "}
      Market and survey findings are cited to sources. DPDP regulatory notes are
      not legal advice and not a compliance opinion.
    </Callout>
  )
}

export function Unresolved({ note }: { note?: string }) {
  return (
    <div className="border border-dashed border-border px-4 py-6">
      <p className="text-[11px] font-medium tracking-[0.16em] text-primary uppercase">
        Research required
      </p>
      {note ? (
        <p className="mt-2 text-sm leading-6 text-muted-foreground">{note}</p>
      ) : null}
    </div>
  )
}

export function Chip({
  children,
  tone = "neutral",
}: {
  children: ReactNode
  tone?: "neutral" | "accent" | "caution" | "good" | "muted"
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm border px-1.5 py-0.5 text-[10px] font-medium tracking-wide uppercase",
        tone === "neutral" && "border-border text-muted-foreground",
        tone === "accent" && "border-primary/20 bg-primary/5 text-primary",
        tone === "caution" &&
          "border-neutral-400/30 bg-neutral-500/8 text-neutral-700",
        tone === "good" && "border-primary/15 bg-primary/5 text-primary",
        tone === "muted" && "border-transparent bg-muted text-muted-foreground",
      )}
    >
      {children}
    </span>
  )
}

export function LegalChip({ value }: { value: LegalConfidence }) {
  const tone =
    value === "confirmed"
      ? "good"
      : value === "needs-legal-validation"
        ? "caution"
        : "accent"
  return <Chip tone={tone}>{legalConfidenceLabel[value]}</Chip>
}

export function ConfidenceChip({ value }: { value: ResearchConfidence }) {
  const tone =
    value === "high" ? "good" : value === "unresolved" ? "caution" : "neutral"
  return <Chip tone={tone}>{researchConfidenceLabel[value]}</Chip>
}

export function Field({
  label,
  children,
}: {
  label: string
  children: ReactNode
}) {
  return (
    <div className="grid gap-1 py-3 sm:grid-cols-[10rem_1fr] sm:gap-6">
      <div className="text-[11px] font-medium tracking-[0.14em] text-muted-foreground uppercase">
        {label}
      </div>
      <div className="text-[15px] leading-7">{children}</div>
    </div>
  )
}

export function RuleList({ children }: { children: ReactNode }) {
  return <div className="divide-y divide-border border-y border-border">{children}</div>
}

export function Prose({
  children,
  serif = false,
}: {
  children: ReactNode
  serif?: boolean
}) {
  return (
    <div
      className={cn(
        "text-[15px] leading-7 text-pretty",
        serif && "editorial text-[17px] leading-8",
      )}
    >
      {children}
    </div>
  )
}

export function Tools({
  onEdit,
  onAdd,
  onDelete,
  onMoveUp,
  onMoveDown,
}: {
  onEdit?: () => void
  onAdd?: () => void
  onDelete?: () => void
  onMoveUp?: () => void
  onMoveDown?: () => void
}) {
  return (
    <div className="flex items-center gap-0.5">
      {onMoveUp ? (
        <Button variant="ghost" size="icon-xs" onClick={onMoveUp} aria-label="Move up">
          <ArrowUp />
        </Button>
      ) : null}
      {onMoveDown ? (
        <Button variant="ghost" size="icon-xs" onClick={onMoveDown} aria-label="Move down">
          <ArrowDown />
        </Button>
      ) : null}
      {onAdd ? (
        <Button variant="ghost" size="icon-xs" onClick={onAdd} aria-label="Add">
          <Plus />
        </Button>
      ) : null}
      {onEdit ? (
        <Button variant="ghost" size="icon-xs" onClick={onEdit} aria-label="Edit">
          <Pencil />
        </Button>
      ) : null}
      {onDelete ? (
        <Button variant="ghost" size="icon-xs" onClick={onDelete} aria-label="Delete">
          <Trash2 />
        </Button>
      ) : null}
    </div>
  )
}

export function EmptyNote({ children }: { children: ReactNode }) {
  return <p className="text-sm text-muted-foreground">{children}</p>
}
