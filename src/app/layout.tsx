import type { Metadata } from "next"
import { Geist, Geist_Mono, Newsreader } from "next/font/google"
import { TooltipProvider } from "@/components/ui/tooltip"
import { WorkspaceProvider } from "@/lib/store"
import { AppShell } from "@/components/shell/app-shell"
import { getSiteUrl } from "@/lib/site"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
})

const siteDescription =
  "Market intelligence, regulatory research and business strategy workspace for a DPDP startup."

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "DPDP Startup Research",
    template: "%s · DPDP Research",
  },
  description: siteDescription,
  applicationName: "DPDP Workspace",
  keywords: [
    "DPDP",
    "Digital Personal Data Protection",
    "India privacy",
    "startup research",
    "compliance",
    "data fiduciary",
  ],
  authors: [{ name: "Unmukt Shukla" }],
  creator: "Unmukt Shukla",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "DPDP Startup Research",
    title: "DPDP Startup Research",
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "DPDP Startup Research",
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full bg-background text-foreground"
      >
        <TooltipProvider delayDuration={200}>
          <WorkspaceProvider>
            <AppShell>{children}</AppShell>
          </WorkspaceProvider>
        </TooltipProvider>
      </body>
    </html>
  )
}
