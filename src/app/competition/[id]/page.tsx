"use client"

import { useParams } from "next/navigation"
import { CompetitorDetailView } from "@/views/competition"

export default function Page() {
  const params = useParams<{ id: string }>()
  const id = Array.isArray(params.id) ? params.id[0] : params.id
  return <CompetitorDetailView id={id ?? ""} />
}
