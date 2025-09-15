"use client";

import { ConvexProvider, ConvexReactClient } from "@workspace/backend/convex";
import { Provider } from "jotai";
import * as React from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const convex = new ConvexReactClient(
    process.env.NEXT_PUBLIC_CONVEX_URL ?? ""
  );

  return (
    <ConvexProvider client={convex}>
      <Provider>{children}</Provider>
    </ConvexProvider>
  );
}
