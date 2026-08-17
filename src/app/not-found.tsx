import Link from "next/link"
import { Document, PageHeader } from "@/components/editorial/primitives"

export default function NotFound() {
  return (
    <Document>
      <PageHeader
        title="Page not found"
        description="That research route does not exist."
      />
      <p className="mt-6 text-sm">
        <Link href="/" className="text-primary underline-offset-4 hover:underline">
          Return to executive overview
        </Link>
      </p>
    </Document>
  )
}
