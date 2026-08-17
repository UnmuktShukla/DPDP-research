"use client"

import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

export function Editable({
  value,
  onChange,
  multiline = true,
  className,
  placeholder = "Add…",
  serif = false,
}: {
  value: string
  onChange: (value: string) => void
  multiline?: boolean
  className?: string
  placeholder?: string
  serif?: boolean
}) {
  const [editing, setEditing] = useState(false)

  if (!editing) {
    return (
      <button
        type="button"
        onClick={() => setEditing(true)}
        className={cn(
          "block w-full rounded-sm px-1 py-0.5 text-left transition-colors hover:bg-muted/70",
          !value && "text-muted-foreground",
          serif && "editorial",
          className,
        )}
      >
        {value || placeholder}
      </button>
    )
  }

  if (!multiline) {
    return (
      <Input
        autoFocus
        value={value}
        placeholder={placeholder}
        className={cn("h-8 text-[15px]", className)}
        onChange={(event) => onChange(event.target.value)}
        onBlur={() => setEditing(false)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === "Escape") setEditing(false)
        }}
      />
    )
  }

  return (
    <Textarea
      autoFocus
      value={value}
      placeholder={placeholder}
      className={cn(
        "min-h-24 text-[15px] leading-7",
        serif && "editorial text-[17px] leading-8",
        className,
      )}
      onChange={(event) => onChange(event.target.value)}
      onBlur={() => setEditing(false)}
    />
  )
}
