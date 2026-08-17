"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { nav } from "@/lib/nav"
import { cn } from "@/lib/utils"

export function Sidebar({
  mobileOpen,
  onClose,
}: {
  mobileOpen: boolean
  onClose: () => void
}) {
  const pathname = usePathname()

  return (
    <>
      {mobileOpen ? (
        <button
          type="button"
          aria-label="Close navigation"
          className="fixed inset-0 z-40 bg-foreground/20 lg:hidden"
          onClick={onClose}
        />
      ) : null}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-sidebar-border bg-sidebar",
          "transition-transform duration-200 lg:translate-x-0",
          mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
        )}
      >
        <div className="border-b border-sidebar-border px-5 py-5">
          <Link href="/" onClick={onClose} className="block">
            <p className="text-[11px] font-medium tracking-[0.18em] text-muted-foreground uppercase">
              Research OS
            </p>
            <p className="mt-1 text-[15px] font-semibold tracking-tight text-sidebar-foreground">
              DPDP Workspace
            </p>
          </Link>
        </div>
        <nav className="flex-1 overflow-y-auto px-3 py-4">
          {nav.map((group) => (
            <div key={group.id} className="mb-5">
              <p className="px-2 pb-1.5 text-[10px] font-medium tracking-[0.16em] text-muted-foreground uppercase">
                {group.label}
              </p>
              <ul className="space-y-px">
                {group.items.map((item) => {
                  const active =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname === item.href
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className={cn(
                          "block rounded-md px-2 py-[5px] text-[13px] leading-5 transition-colors",
                          active
                            ? "bg-sidebar-accent font-medium text-sidebar-primary"
                            : "text-sidebar-foreground/75 hover:bg-sidebar-accent/70 hover:text-sidebar-foreground",
                        )}
                      >
                        {item.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </nav>
        <div className="border-t border-sidebar-border px-5 py-3">
          <p className="text-[11px] leading-4 text-muted-foreground">
            Facts, interpretations and assumptions are labelled separately.
          </p>
        </div>
      </aside>
    </>
  )
}
