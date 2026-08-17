"use client"

import { useParams } from "next/navigation"
import { ResearchDetailView } from "@/views/research"

export default function Page() {
  const params = useParams<{ id: string }>()
  const id = Array.isArray(params.id) ? params.id[0] : params.id
  return <ResearchDetailView id={id ?? ""} />
}
