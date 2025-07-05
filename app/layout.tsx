import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kokeb Tech Solutions - Your Technology Guiding Star",
  description:
    "Kokeb Tech Solutions illuminates your path to technological excellence with comprehensive IT solutions tailored for Ethiopian businesses seeking digital transformation.",
  keywords:
    "technology solutions, IT services, software development, web development, mobile apps, ERP systems, Ethiopia, digital transformation",
  authors: [{ name: "Kokeb Tech Solutions" }],
  creator: "Kokeb Tech Solutions",
  publisher: "Kokeb Tech Solutions",
  openGraph: {
    title: "Kokeb Tech Solutions - Your Technology Guiding Star",
    description: "Comprehensive IT solutions for Ethiopian businesses seeking digital transformation",
    url: "https://kekebtech.com",
    siteName: "Kokeb Tech Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kokeb Tech Solutions - Your Technology Guiding Star",
    description: "Comprehensive IT solutions for Ethiopian businesses seeking digital transformation",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
