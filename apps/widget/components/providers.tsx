"use client"

import { ConvexProvider, ConvexReactClient } from "@workspace/backend/convex"
import * as React from "react"

export function Providers({ children }: { children: React.ReactNode }) {
  const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL ?? "")

  return (
    <ConvexProvider client={convex}>
      {children}
    </ConvexProvider>
  )
}
