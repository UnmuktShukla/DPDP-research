"use client"

import { useEffect, useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { useWorkspace } from "@/lib/store"
import { searchWorkspace } from "@/lib/search"
import { allNavItems, nav } from "@/lib/nav"

export function CommandPalette({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const router = useRouter()
  const { workspace } = useWorkspace()
  const [query, setQuery] = useState("")

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault()
        onOpenChange(!open)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open, onOpenChange])

  const hits = useMemo(() => {
    if (!query.trim()) {
      return allNavItems.slice(0, 14).map((item) => ({
        id: `nav-${item.href}`,
        href: item.href,
        title: item.label,
        group: nav.find((g) => g.items.includes(item))?.label ?? "Go to",
        excerpt: "Open page",
      }))
    }
    return searchWorkspace(workspace, query)
  }, [workspace, query])

  const grouped = useMemo(() => {
    const map = new Map<string, typeof hits>()
    for (const hit of hits) {
      const list = map.get(hit.group) ?? []
      list.push(hit)
      map.set(hit.group, list)
    }
    return Array.from(map.entries())
  }, [hits])

  return (
    <CommandDialog
      open={open}
      onOpenChange={(next) => {
        onOpenChange(next)
        if (!next) setQuery("")
      }}
      title="Search workspace"
      description="Jump to research, sources, competitors, regulations, hypotheses, claims, questions and decisions."
    >
      <Command>
        <CommandInput
          placeholder="Search research, sources, competitors, DPDP…"
          value={query}
          onValueChange={setQuery}
        />
        <CommandList>
          <CommandEmpty>No matching research.</CommandEmpty>
          {grouped.map(([group, items]) => (
            <CommandGroup key={group} heading={group}>
              {items.map((hit) => (
                <CommandItem
                  key={hit.id}
                  value={`${hit.title} ${hit.excerpt} ${hit.group}`}
                  onSelect={() => {
                    router.push(hit.href)
                    onOpenChange(false)
                    setQuery("")
                  }}
                >
                  <span className="flex min-w-0 flex-col">
                    <span className="truncate">{hit.title}</span>
                    <span className="truncate text-[11px] text-muted-foreground">
                      {hit.excerpt}
                    </span>
                  </span>
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </Command>
    </CommandDialog>
  )
}
