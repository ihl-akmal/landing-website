"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"
import * as gtag from "@/lib/gtag"

export function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    if (pathname) {
      gtag.pageview(pathname)
    }
  }, [pathname])

  return <>{children}</>
}
