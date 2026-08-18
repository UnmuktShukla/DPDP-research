"use client"

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react"
import { seedWorkspace } from "@/data/seed"
import type { Workspace } from "@/lib/types"

const STORAGE_KEY = "dpdp-research-workspace-v2"

type EntityArrayKey = {
  [K in keyof Workspace]: Workspace[K] extends unknown[] ? K : never
}[keyof Workspace]

type WorkspaceContextValue = {
  workspace: Workspace
  hydrated: boolean
  hasLocalEdits: boolean
  setWorkspace: (next: Workspace | ((prev: Workspace) => Workspace)) => void
  resetToSeed: () => void
  updateThesis: (patch: Partial<Workspace["thesis"]>) => void
  updateMeta: (patch: Partial<Workspace["meta"]>) => void
  updateProgressArea: (
    id: Workspace["progress"][number]["id"],
    patch: Partial<Workspace["progress"][number]>,
  ) => void
  upsertEntity: <K extends EntityArrayKey>(
    key: K,
    item: Workspace[K][number],
  ) => void
  removeEntity: <K extends EntityArrayKey>(key: K, id: string) => void
  reorderEntity: <K extends EntityArrayKey>(
    key: K,
    fromIndex: number,
    toIndex: number,
  ) => void
}

const WorkspaceContext = createContext<WorkspaceContextValue | null>(null)

function cloneSeed(): Workspace {
  return structuredClone(seedWorkspace)
}

function readLocal(): Workspace | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as Workspace
    if (!parsed?.meta?.title) return null
    return parsed
  } catch {
    return null
  }
}

type StoreSnapshot = {
  workspace: Workspace
  hasLocalEdits: boolean
  hydrated: boolean
}

const serverSnapshot: StoreSnapshot = {
  workspace: seedWorkspace,
  hasLocalEdits: false,
  hydrated: false,
}

let snapshot: StoreSnapshot = serverSnapshot
const listeners = new Set<() => void>()
let clientHydrated = false

function hydrateFromStorage() {
  if (clientHydrated || typeof window === "undefined") return
  clientHydrated = true
  const loaded = readLocal()
  snapshot = {
    workspace: loaded ?? cloneSeed(),
    hasLocalEdits: loaded !== null,
    hydrated: true,
  }
}

function emit(next: StoreSnapshot) {
  snapshot = next
  listeners.forEach((listener) => listener())
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}

function getSnapshot() {
  hydrateFromStorage()
  return snapshot
}

function getServerSnapshot() {
  return serverSnapshot
}

function persist(workspace: Workspace) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(workspace))
}

function stamp(workspace: Workspace): Workspace {
  return {
    ...workspace,
    meta: {
      ...workspace.meta,
      lastUpdated: new Date().toISOString().slice(0, 10),
    },
  }
}

function commit(workspace: Workspace, hasLocalEdits = true) {
  if (hasLocalEdits) persist(workspace)
  emit({ workspace, hasLocalEdits, hydrated: true })
}

export function WorkspaceProvider({ children }: { children: ReactNode }) {
  const snap = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  const setWorkspace = useCallback(
    (next: Workspace | ((prev: Workspace) => Workspace)) => {
      const workspace =
        typeof next === "function" ? next(snapshot.workspace) : next
      commit(stamp(workspace))
    },
    [],
  )

  const resetToSeed = useCallback(() => {
    window.localStorage.removeItem(STORAGE_KEY)
    emit({
      workspace: cloneSeed(),
      hasLocalEdits: false,
      hydrated: true,
    })
  }, [])

  const updateThesis = useCallback((patch: Partial<Workspace["thesis"]>) => {
    commit(
      stamp({
        ...snapshot.workspace,
        thesis: { ...snapshot.workspace.thesis, ...patch },
      }),
    )
  }, [])

  const updateMeta = useCallback((patch: Partial<Workspace["meta"]>) => {
    commit({
      ...snapshot.workspace,
      meta: { ...snapshot.workspace.meta, ...patch },
    })
  }, [])

  const updateProgressArea = useCallback(
    (
      id: Workspace["progress"][number]["id"],
      patch: Partial<Workspace["progress"][number]>,
    ) => {
      commit({
        ...snapshot.workspace,
        progress: snapshot.workspace.progress.map((area) =>
          area.id === id ? { ...area, ...patch } : area,
        ),
      })
    },
    [],
  )

  const upsertEntity = useCallback(
    <K extends EntityArrayKey>(key: K, item: Workspace[K][number]) => {
      const prev = snapshot.workspace
      const list = prev[key] as { id: string }[]
      const index = list.findIndex((entry) => entry.id === (item as { id: string }).id)
      const nextList = [...list]
      if (index >= 0) nextList[index] = item as { id: string }
      else nextList.push(item as { id: string })
      commit(stamp({ ...prev, [key]: nextList } as Workspace))
    },
    [],
  )

  const removeEntity = useCallback(<K extends EntityArrayKey>(key: K, id: string) => {
    const prev = snapshot.workspace
    const list = prev[key] as { id: string }[]
    commit(stamp({ ...prev, [key]: list.filter((entry) => entry.id !== id) } as Workspace))
  }, [])

  const reorderEntity = useCallback(
    <K extends EntityArrayKey>(key: K, fromIndex: number, toIndex: number) => {
      const prev = snapshot.workspace
      const list = [...(prev[key] as unknown[])]
      const [moved] = list.splice(fromIndex, 1)
      list.splice(toIndex, 0, moved)
      commit({ ...prev, [key]: list } as Workspace)
    },
    [],
  )

  const value = useMemo(
    () => ({
      workspace: snap.workspace,
      hydrated: snap.hydrated,
      hasLocalEdits: snap.hasLocalEdits,
      setWorkspace,
      resetToSeed,
      updateThesis,
      updateMeta,
      updateProgressArea,
      upsertEntity,
      removeEntity,
      reorderEntity,
    }),
    [
      snap,
      setWorkspace,
      resetToSeed,
      updateThesis,
      updateMeta,
      updateProgressArea,
      upsertEntity,
      removeEntity,
      reorderEntity,
    ],
  )

  return (
    <WorkspaceContext.Provider value={value}>{children}</WorkspaceContext.Provider>
  )
}

export function useWorkspace() {
  const ctx = useContext(WorkspaceContext)
  if (!ctx) throw new Error("useWorkspace must be used within WorkspaceProvider")
  return ctx
}
