import type { MetadataRoute } from "next"
import { allNavItems } from "@/lib/nav"
import { getSiteUrl } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl()
  const lastModified = new Date()

  return allNavItems.map((item) => ({
    url: `${siteUrl}${item.href === "/" ? "" : item.href}`,
    lastModified,
    changeFrequency: "weekly",
    priority: item.href === "/" ? 1 : 0.7,
  }))
}
