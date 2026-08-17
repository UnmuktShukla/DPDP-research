"use client"

import { Menu, Search } from "lucide-react"
import { useWorkspace } from "@/lib/store"
import { formatDate } from "@/lib/labels"
import { Kbd } from "@/components/ui/kbd"
import { Button } from "@/components/ui/button"

export function Topbar({
  onOpenSidebar,
  onOpenSearch,
}: {
  onOpenSidebar: () => void
  onOpenSearch: () => void
}) {
  const { workspace, hasLocalEdits, resetToSeed } = useWorkspace()

  return (
    <header className="sticky top-0 z-30 flex h-12 items-center justify-between gap-3 border-b border-border bg-background/90 px-4 backdrop-blur-sm sm:px-8 lg:px-12">
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon-xs"
          className="lg:hidden"
          onClick={onOpenSidebar}
          aria-label="Open navigation"
        >
          <Menu />
        </Button>
        <p className="hidden text-[12px] text-muted-foreground sm:block">
          Last updated {formatDate(workspace.meta.lastUpdated)}
          {hasLocalEdits ? " · Local edits" : ""}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onOpenSearch}
          className="flex h-8 items-center gap-2 rounded-md border border-border bg-card px-2.5 text-[12px] text-muted-foreground transition-colors hover:bg-muted"
        >
          <Search className="size-3.5" />
          <span className="hidden sm:inline">Search research</span>
          <Kbd className="hidden sm:inline">⌘K</Kbd>
        </button>
        {hasLocalEdits ? (
          <Button variant="ghost" size="xs" onClick={resetToSeed}>
            Reset seed
          </Button>
        ) : null}
      </div>
    </header>
  )
}
